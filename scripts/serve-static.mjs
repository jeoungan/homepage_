import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";
import { readFile, stat } from "node:fs/promises";

const root = resolve(process.cwd());
const port = Number(process.argv[2] || 4173);
const host = "127.0.0.1";

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
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

createServer(async (request, response) => {
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
    const body = await readFile(filePath);
    const type = contentTypes[extname(filePath)] || "application/octet-stream";

    response.writeHead(200, { "Content-Type": type });
    response.end(body);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
}).listen(port, host, () => {
  console.log(`Allpage preview: http://${host}:${port}/`);
});
