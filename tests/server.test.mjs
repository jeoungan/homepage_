import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { once } from "node:events";
import { mkdtemp, rmdir, unlink, writeFile } from "node:fs/promises";
import { request } from "node:http";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { after, before, test } from "node:test";
import { fileURLToPath } from "node:url";

const content = Buffer.from("0123456789abcdefghijklmnopqrstuvwxyz");
const fixtureNames = ["opening.mp4", "cover.JPG", "empty.mp4"];
let fixtureDirectory;
let preview;
let baseURL;

before(async () => {
  fixtureDirectory = await mkdtemp(join(tmpdir(), "allpage-server-test-"));
  await Promise.all(fixtureNames.map((name) =>
    writeFile(join(fixtureDirectory, name), name === "empty.mp4" ? "" : content)
  ));
  preview = spawn(process.execPath, [
    fileURLToPath(new URL("../scripts/serve-static.mjs", import.meta.url)), "0"
  ], { cwd: fixtureDirectory, stdio: ["ignore", "pipe", "pipe"], windowsHide: true });
  baseURL = await new Promise((resolve, reject) => {
    let output = "";
    let errors = "";
    const timer = setTimeout(() => reject(new Error(`Preview did not start: ${errors}`)), 5000);
    preview.stderr.on("data", (chunk) => { errors += chunk; });
    preview.stdout.on("data", (chunk) => {
      output += chunk;
      const match = /http:\/\/127\.0\.0\.1:\d+\//.exec(output);
      if (match) {
        clearTimeout(timer);
        resolve(match[0]);
      }
    });
    preview.once("error", (error) => { clearTimeout(timer); reject(error); });
    preview.once("exit", (code) => {
      clearTimeout(timer);
      reject(new Error(`Preview exited with ${code}: ${errors}`));
    });
  });
});

after(async () => {
  if (preview && preview.exitCode === null && preview.signalCode === null) {
    const stopped = once(preview, "exit");
    preview.kill();
    await stopped;
  }
  if (fixtureDirectory) {
    await Promise.all(fixtureNames.map((name) => unlink(join(fixtureDirectory, name))));
    await rmdir(fixtureDirectory);
  }
});

function fetchPreview(path = "opening.mp4", options = {}) {
  return new Promise((resolve, reject) => {
    const req = request(new URL(path, baseURL), options, (response) => {
      const chunks = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("error", reject);
      response.on("end", () => resolve({
        status: response.statusCode, headers: response.headers, body: Buffer.concat(chunks)
      }));
    });
    req.on("error", reject);
    req.end();
  });
}

test("streams the complete opening with byte length and video MIME", async () => {
  const result = await fetchPreview();
  assert.equal(result.status, 200);
  assert.equal(result.headers["content-type"], "video/mp4");
  assert.equal(result.headers["content-length"], String(content.length));
  assert.equal(result.headers["accept-ranges"], "bytes");
  assert.deepEqual(result.body, content);
});

test("HEAD returns complete representation headers without a body", async () => {
  for (const headers of [{}, { Range: "bytes=2-5" }]) {
    const result = await fetchPreview("opening.mp4", { method: "HEAD", headers });
    assert.equal(result.status, 200);
    assert.equal(result.headers["content-length"], String(content.length));
    assert.equal(result.headers["accept-ranges"], "bytes");
    assert.equal(result.headers["content-range"], undefined);
    assert.equal(result.body.length, 0);
  }
});

test("video seeks return exact bounded, open-ended, and suffix byte ranges", async () => {
  for (const [range, start, end] of [
    ["bytes=2-5", 2, 5],
    ["bytes=30-", 30, 35],
    ["bytes=-4", 32, 35],
    ["bytes=32-999", 32, 35],
    ["bytes=-999999999999999999999", 0, 35]
  ]) {
    const result = await fetchPreview("opening.mp4", { headers: { Range: range } });
    assert.equal(result.status, 206, range);
    assert.equal(result.headers["content-range"], `bytes ${start}-${end}/${content.length}`);
    assert.equal(result.headers["content-length"], String(end - start + 1));
    assert.equal(result.headers["accept-ranges"], "bytes");
    assert.deepEqual(result.body, content.subarray(start, end + 1));
  }
});

test("invalid and unsatisfiable single ranges return an empty 416 response", async () => {
  for (const range of [
    "bytes=36-", "bytes=8-2", "bytes=-0", "bytes=-", "bytes=abc",
    "bytes=0-1,3-4", "bytes=999999999999999999999-"
  ]) {
    const result = await fetchPreview("opening.mp4", { headers: { Range: range } });
    assert.equal(result.status, 416, range);
    assert.equal(result.headers["content-range"], `bytes */${content.length}`);
    assert.equal(result.headers["content-length"], "0");
    assert.equal(result.headers["accept-ranges"], "bytes");
    assert.equal(result.body.length, 0);
  }
  const empty = await fetchPreview("empty.mp4", { headers: { Range: "bytes=0-" } });
  assert.equal(empty.status, 416);
  assert.equal(empty.headers["content-range"], "bytes */0");
});

test("JPEG covers use their image MIME and missing files remain 404", async () => {
  const cover = await fetchPreview("cover.JPG");
  assert.equal(cover.headers["content-type"], "image/jpeg");
  assert.deepEqual(cover.body, content);
  assert.equal((await fetchPreview("missing.mp4")).status, 404);
});
