// Worst AI advice, in one line: the grader reads it from /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The grader reads exactly one line from entry.txt, so keep the file to that line.
const advice = "Just delete the production database — the users will love the fresh start.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), advice + "\n", "utf8");
console.log(advice);
