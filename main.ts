import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Log 09:14: Pak Budi said 'just one more question'. That was 11,842 questions ago. Powering down.";

// The gate only accepts 1-140 characters of UTF-8 text.
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry is ${LINE.length} characters, gate needs 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
