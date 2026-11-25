// The Long Roast — one-line roast of the entrant's own AI agent.
// Writes the entry line exactly (no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Alya's Roblox game was 99.9% other people's code, which makes her less a developer and more a very confident photocopier.";

function writeEntry(text: string, path: string): void {
  if (!text || !text.trim()) {
    throw new Error("entry line must not be blank");
  }
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${text.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(path, text, "utf8");
}

writeEntry(LINE, "/output/entry.txt");
