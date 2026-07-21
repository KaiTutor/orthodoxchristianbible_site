#!/usr/bin/env node
/**
 * Convert an eBible.org VPL (verse-per-line) text file into the per-chapter
 * JSON files this site uses.
 *
 * Usage:
 *   node scripts/import-vpl.mjs <input.txt> <version-slug>
 *
 * Example:
 *   node scripts/import-vpl.mjs ~/Downloads/eng-Brenton_vpl.txt brenton
 *
 * Input format (one verse per line):
 *   GEN 1:1 In the beginning God made the heaven and the earth.
 *
 * Output: src/data/<version>/<book-slug>/<chapter>.json
 *   { book, bookName, testament, chapter, totalChapters, verses:[{n,t}] }
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

const [, , inputPath, versionSlug] = process.argv;
if (!inputPath || !versionSlug) {
  console.error('Usage: node scripts/import-vpl.mjs <input.txt> <version-slug>');
  process.exit(1);
}

// Map eBible/USFM three-letter codes to display names and URL slugs.
// Includes the Anagignoskomena (deuterocanon) used in the Orthodox canon.
const BOOKS = {
  GEN: ['Genesis', 'genesis'],
  EXO: ['Exodus', 'exodus'],
  LEV: ['Leviticus', 'leviticus'],
  NUM: ['Numbers', 'numbers'],
  DEU: ['Deuteronomy', 'deuteronomy'],
  JOS: ['Joshua', 'joshua'],
  JDG: ['Judges', 'judges'],
  RUT: ['Ruth', 'ruth'],
  '1SA': ['1 Kings (1 Samuel)', '1-samuel'],
  '2SA': ['2 Kings (2 Samuel)', '2-samuel'],
  '1KI': ['3 Kings (1 Kings)', '1-kings'],
  '2KI': ['4 Kings (2 Kings)', '2-kings'],
  '1CH': ['1 Chronicles', '1-chronicles'],
  '2CH': ['2 Chronicles', '2-chronicles'],
  EZR: ['Ezra', 'ezra'],
  NEH: ['Nehemiah', 'nehemiah'],
  EST: ['Esther', 'esther'],
  ESG: ['Esther', 'esther'],
  JOB: ['Job', 'job'],
  PSA: ['Psalms', 'psalms'],
  PRO: ['Proverbs', 'proverbs'],
  ECC: ['Ecclesiastes', 'ecclesiastes'],
  SNG: ['Song of Songs', 'song-of-songs'],
  SOS: ['Song of Songs', 'song-of-songs'],
  SOL: ['Song of Songs', 'song-of-songs'],
  ISA: ['Isaiah', 'isaiah'],
  JER: ['Jeremiah', 'jeremiah'],
  LAM: ['Lamentations', 'lamentations'],
  EZK: ['Ezekiel', 'ezekiel'],
  EZE: ['Ezekiel', 'ezekiel'],
  DAN: ['Daniel', 'daniel'],
  DNG: ['Daniel', 'daniel'],
  HOS: ['Hosea', 'hosea'],
  JOL: ['Joel', 'joel'],
  JOE: ['Joel', 'joel'],
  AMO: ['Amos', 'amos'],
  OBA: ['Obadiah', 'obadiah'],
  JON: ['Jonah', 'jonah'],
  MIC: ['Micah', 'micah'],
  NAM: ['Nahum', 'nahum'],
  NAH: ['Nahum', 'nahum'],
  HAB: ['Habakkuk', 'habakkuk'],
  ZEP: ['Zephaniah', 'zephaniah'],
  HAG: ['Haggai', 'haggai'],
  ZEC: ['Zechariah', 'zechariah'],
  MAL: ['Malachi', 'malachi'],

  // Anagignoskomena / Deuterocanon
  TOB: ['Tobit', 'tobit'],
  JDT: ['Judith', 'judith'],
  WIS: ['Wisdom of Solomon', 'wisdom'],
  SIR: ['Sirach', 'sirach'],
  ECS: ['Sirach', 'sirach'],
  BAR: ['Baruch', 'baruch'],
  LJE: ['Epistle of Jeremiah', 'epistle-of-jeremiah'],
  EPJ: ['Epistle of Jeremiah', 'epistle-of-jeremiah'],
  S3Y: ['Song of the Three Holy Children', 'song-of-the-three'],
  SUS: ['Susanna', 'susanna'],
  BEL: ['Bel and the Dragon', 'bel-and-the-dragon'],
  '1MA': ['1 Maccabees', '1-maccabees'],
  '2MA': ['2 Maccabees', '2-maccabees'],
  '3MA': ['3 Maccabees', '3-maccabees'],
  '4MA': ['4 Maccabees', '4-maccabees'],
  '1ES': ['1 Esdras', '1-esdras'],
  '2ES': ['2 Esdras', '2-esdras'],
  MAN: ['Prayer of Manasseh', 'prayer-of-manasseh'],
  PRM: ['Prayer of Manasseh', 'prayer-of-manasseh'],
  PS2: ['Psalm 151', 'psalm-151'],
  ODA: ['Odes', 'odes'],
  PSS: ['Psalms of Solomon', 'psalms-of-solomon'],
};

const raw = fs.readFileSync(inputPath, 'utf8');
const lines = raw.split(/\r?\n/);

// Gather verses grouped by book -> chapter, preserving first-seen book order.
const books = new Map();
const unknownCodes = new Set();
let parsed = 0;
let skipped = 0;

for (const line of lines) {
  const trimmed = line.trim();
  if (!trimmed) continue;

  // e.g. "GEN 1:1 In the beginning..."  /  "1MA 2:3 ..."
  const m = trimmed.match(/^(\S+)\s+(\d+):(\d+)\s+(.*)$/);
  if (!m) {
    skipped++;
    continue;
  }

  const [, code, chapStr, verseStr, text] = m;
  const entry = BOOKS[code.toUpperCase()];
  if (!entry) {
    unknownCodes.add(code);
    skipped++;
    continue;
  }

  const [bookName, bookSlug] = entry;
  if (!books.has(bookSlug)) {
    books.set(bookSlug, { bookName, chapters: new Map() });
  }
  const book = books.get(bookSlug);

  const chapter = Number(chapStr);
  if (!book.chapters.has(chapter)) book.chapters.set(chapter, []);
  book.chapters.get(chapter).push({ n: Number(verseStr), t: text.trim() });
  parsed++;
}

// Write one JSON file per chapter.
let fileCount = 0;
for (const [bookSlug, book] of books) {
  const totalChapters = Math.max(...book.chapters.keys());
  const outDir = path.join(projectRoot, 'src', 'data', versionSlug, bookSlug);
  fs.mkdirSync(outDir, { recursive: true });

  for (const [chapter, verses] of book.chapters) {
    verses.sort((a, b) => a.n - b.n);
    const out = {
      book: bookSlug,
      bookName: book.bookName,
      // Brenton is the Septuagint: entirely Old Testament.
      testament: 'OT',
      chapter,
      totalChapters,
      verses,
    };
    fs.writeFileSync(
      path.join(outDir, `${chapter}.json`),
      JSON.stringify(out, null, 2) + '\n',
    );
    fileCount++;
  }
  console.log(`${book.bookName.padEnd(32)} ${book.chapters.size} chapters`);
}

console.log(`\nDone: ${books.size} books, ${fileCount} chapter files, ${parsed} verses → src/data/${versionSlug}/`);
if (skipped) console.log(`Skipped ${skipped} lines that did not match the verse pattern.`);
if (unknownCodes.size) {
  console.log(`\nUNMAPPED BOOK CODES (these were skipped — tell me and I'll add them):`);
  console.log('  ' + [...unknownCodes].join(', '));
}
