import { readFileSync } from "fs";
import { join } from "path";

export default defineEventHandler(() => {
  const filePath = join(process.cwd(), "server/api/data.json");

  const rawData = readFileSync(filePath, "utf-8");
  return JSON.parse(rawData);
});
