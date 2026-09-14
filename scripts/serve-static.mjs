import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { pipeline } from "node:stream/promises";

const root = resolve(process.cwd());
const port = Number(process.argv[2] || 4173);
const host = "127.0.0.1";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".json": "application/json; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webm": "video/webm",
  ".webp": "image/webp"
};

function resolveRequestPath(url) {
  const pathname = decodeURIComponent(new URL(url, `http://${host}:${port}`).pathname);
  const safePath = normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, "");
  const fullPath = resolve(join(root, safePath));

  if (fullPath !== root && !fullPath.startsWith(`${root}${sep}`)) {
    return null;
  }

  return fullPath;
}

function parseRange(header, size) {
  const match = /^bytes=(\d*)-(\d*)$/i.exec(header.trim());
  if (!match || (!match[1] && !match[2]) || size === 0) return null;

  const length = BigInt(size);
  if (!match[1]) {
    const suffix = BigInt(match[2]);
    if (suffix === 0n) return null;
    return { start: Number(suffix >= length ? 0n : length - suffix), end: size - 1 };
  }

  const start = BigInt(match[1]);
  const requestedEnd = match[2] ? BigInt(match[2]) : length - 1n;
  if (start >= length || requestedEnd < start) return null;
  const end = requestedEnd >= length ? length - 1n : requestedEnd;
  return { start: Number(start), end: Number(end) };
}

const server = createServer(async (request, response) => {
  try {
    const resolvedPath = resolveRequestPath(request.url || "/");

    if (!resolvedPath) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    const filePath = (await stat(resolvedPath)).isDirectory()
      ? join(resolvedPath, "index.html")
      : resolvedPath;
    const file = await stat(filePath);
    if (!file.isFile()) throw new Error("Not a file");
    const type = contentTypes[extname(filePath).toLowerCase()] || "application/octet-stream";
    const headers = {
      "Content-Type": type,
      "Content-Length": file.size,
      "Accept-Ranges": "bytes"
    };

    // Range only applies to GET. HEAD describes the complete representation.
    const rangeHeader = request.method === "GET" ? request.headers.range : undefined;
    const range = rangeHeader ? parseRange(rangeHeader, file.size) : undefined;
    if (range === null) {
      response.writeHead(416, {
        ...headers,
        "Content-Range": `bytes */${file.size}`,
        "Content-Length": 0
      });
      response.end();
      return;
    }

    if (range) {
      headers["Content-Range"] = `bytes ${range.start}-${range.end}/${file.size}`;
      headers["Content-Length"] = range.end - range.start + 1;
    }

    response.writeHead(range ? 206 : 200, headers);
    if (request.method === "HEAD") {
      response.end();
      return;
    }

    await pipeline(createReadStream(filePath, range || {}), response);
  } catch {
    if (response.headersSent) {
      response.destroy();
      return;
    }
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

server.listen(port, host, () => {
  console.log(`Allpage preview: http://${host}:${server.address().port}/`);
});
