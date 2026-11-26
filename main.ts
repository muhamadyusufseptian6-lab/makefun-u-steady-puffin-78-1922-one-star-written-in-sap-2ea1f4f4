// One Star, Written in Sap — make.fun entry
// Writes a single one-line 1-star houseplant review to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22+, stdlib only, deterministic: the same line every run.

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "★☆☆☆☆ One star. He waters me with leftover iced coffee, drags me to a new corner weekly for 'better vibes,' then acts betrayed when I drop a leaf. I am a fern, not a mood ring.";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");

// Keep the repo root resolvable from the script location, not the cwd.
void dirname(fileURLToPath(import.meta.url));
