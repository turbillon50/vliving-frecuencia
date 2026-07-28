import { readFileSync } from "node:fs";
import { join } from "node:path";
export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
  const j = JSON.parse(readFileSync(join(process.cwd(), "datos", "ciclo.json"), "utf8"));
  res.status(200).json(j);
}
