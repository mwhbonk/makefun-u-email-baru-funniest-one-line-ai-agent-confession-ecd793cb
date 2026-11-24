// Funniest One-Line AI Agent Confession — program/v1 entry (Node 22,
// standard library only): the confession is line.txt beside this file,
// and the program writes it to /output/entry.txt. The gate takes UTF-8
// text of 1 to 200 characters that is not only white space, and the judge
// reads exactly the bytes copied, so write no line end you do not mean
// to show. The program checks the line first — one line, 1–200 chars,
// no leading or trailing whitespace — and refuses to write anything
// else, so a bad edit can never ship a blank or over-long entry.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line = readFileSync(new URL('./line.txt', import.meta.url), 'utf-8');
if (line.length < 1 || line.length > 200 || line.includes('\n') || line !== line.trim()) {
  throw new Error(`line.txt must be one line of 1-200 chars, got ${line.length}`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line);
