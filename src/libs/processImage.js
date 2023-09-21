import { writeFile } from "fs/promises";
import path from "path";

export async function processImage(image) {
  const byes = await image.arrayBuffer();
  const buffer = Buffer.from(byes);
  const filePath = path.join(process.cwd(), "public/recipePics", image.name);
  await writeFile(filePath, buffer);
  return filePath;
}
