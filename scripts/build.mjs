import { cp, mkdir, rm, stat, copyFile } from "node:fs/promises";
import { join } from "node:path";

const root = process.cwd();
const dist = join(root, "dist");

await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

await copyFile(join(root, "index.html"), join(dist, "index.html"));

try {
  await stat(join(root, "assets"));
  await cp(join(root, "assets"), join(dist, "assets"), { recursive: true });
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}

console.log("Built static MenuCraft app into dist/");
