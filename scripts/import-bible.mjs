#!/usr/bin/env node
/**
 * Convert a whole-Bible JSON file into the per-chapter files the site uses.
 *
 * Usage:
 *   node scripts/import-bible.mjs <input.json> <version-slug>
 *
 * Example:
 *   node scripts/import-bible.mjs ~/Downloads/akjv.json kjv
 *
 * Input shape expected (yours matches this):
 *   { "translation": "...", "books": [
 *       { "name": "Genesis", "chapters": [
 *           { "chapter": 1, "verses": [ { "verse": 1, "text": "..." } ] } ] } ] }
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
  console.error('Usage: node scripts/import-bible.mjs <input.json> <version-slug>');
  process.exit(1);
}

// Which books are Old Testament. Anything not listed here is treated as NT.
// (Deuterocanon/Anagignoskomena will fall through to OT below via the extra list.)
const NT_BOOKS = new Set([
  'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans',
  '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians', 'Philippians',
  'Colossians', '1 Thessalonians', '2 Thessalonians', '1 Timothy', '2 Timothy',
  'Titus', 'Philemon', 'Hebrews', 'James', '1 Peter', '2 Peter',
  '1 John', '2 John', '3 John', 'Jude', 'Revelation',
]);

// Turn a book name into a URL-safe slug: "1 Corinthians" -> "1-corinthians"
function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Clean verse text: strip leading/trailing whitespace and the ¶ pilcrow marker.
function cleanText(t) {
  return t
    .replace(/¶/g, ' ')      // remove paragraph pilcrows
    .replace(/\s+/g, ' ')     // collapse runs of whitespace
    .trim();
}

const raw = JSON.parse(fs.readFileSync(inputPath, 'utf8'));
if (!raw.books || !Array.isArray(raw.books)) {
  console.error('Unexpected file shape: expected a top-level "books" array.');
  process.exit(1);
}

let fileCount = 0;
let verseCount = 0;

for (const book of raw.books) {
  const bookName = book.name;
  const bookSlug = slugify(bookName);
  const testament = NT_BOOKS.has(bookName) ? 'NT' : 'OT';
  const totalChapters = book.chapters.length;
  const outDir = path.join(projectRoot, 'src', 'data', versionSlug, bookSlug);
  fs.mkdirSync(outDir, { recursive: true });

  for (const ch of book.chapters) {
    const verses = ch.verses.map((v) => ({ n: v.verse, t: cleanText(v.text) }));
    verseCount += verses.length;

    const out = {
      book: bookSlug,
      bookName,
      testament,
      chapter: ch.chapter,
      totalChapters,
      verses,
    };

    fs.writeFileSync(
      path.join(outDir, `${ch.chapter}.json`),
      JSON.stringify(out, null, 2) + '\n',
    );
    fileCount++;
  }
  console.log(`${bookName.padEnd(20)} ${totalChapters} chapters`);
}

console.log(`\nDone: ${fileCount} chapter files, ${verseCount} verses → src/data/${versionSlug}/`);
