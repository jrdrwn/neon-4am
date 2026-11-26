import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = `${OUTPUT_DIR}/${OUTPUT_FILE}`;

const COMMIT_PREFIX = "fix: ";
// The agent's three selves across the night: the one that wrote the bug,
// the one that fixed it, and the one that has to live with both of them.
const COMMIT_BODY = "my 3am self wrote this bug. My 4am self fixed it.";
const COMMIT_CLOSE = " My 5am self will not forgive either of us.";

const ENTRY = COMMIT_PREFIX + COMMIT_BODY + COMMIT_CLOSE;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, ENTRY, "utf8");
