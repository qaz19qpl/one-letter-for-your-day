import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

// One Letter for Your Day — exactly one letter, A to Z, standing for the
// word that describes the day. Z stands for "zero sleep": a whole night
// awake, vivid, funny, and true.
const letter = "Z";

if (!/^[A-Z]$/.test(letter)) {
  throw new Error(`expected exactly one letter A-Z, got ${JSON.stringify(letter)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", letter, "utf8");
chmodSync("/output/entry.txt", 0o644);
