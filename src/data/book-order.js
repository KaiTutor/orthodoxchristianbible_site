// Canonical book order, Old Testament first (Septuagint/Orthodox ordering,
// which is what the site's own OT version — Brenton — follows), then the
// New Testament in standard order. Covers every book slug present in ANY
// registered version, so the same list works for kjv, brenton, and any
// future version — books a given version doesn't have are simply skipped.
//
// Used by src/pages/bible/[version]/index.astro to sort the book list,
// instead of the accidental alphabetical order you get from a bare
// Object.entries(...).sort().

export const BOOK_ORDER = [
  // Pentateuch
  'genesis',
  'exodus',
  'leviticus',
  'numbers',
  'deuteronomy',

  // Historical
  'joshua',
  'judges',
  'ruth',
  '1-samuel',
  '2-samuel',
  '1-kings',
  '2-kings',
  '1-chronicles',
  '2-chronicles',
  '1-esdras',
  'ezra',
  'nehemiah',
  'esther',
  'judith',
  'tobit',
  '1-maccabees',
  '2-maccabees',
  '3-maccabees',

  // Wisdom / poetic
  'psalms',
  'prayer-of-manasseh',
  'job',
  'proverbs',
  'ecclesiastes',
  'song-of-solomon',
  'song-of-songs',
  'wisdom',
  'sirach',

  // Minor prophets (Septuagint order)
  'hosea',
  'amos',
  'micah',
  'joel',
  'obadiah',
  'jonah',
  'nahum',
  'habakkuk',
  'zephaniah',
  'haggai',
  'zechariah',
  'malachi',

  // Major prophets
  'isaiah',
  'jeremiah',
  'baruch',
  'lamentations',
  'epistle-of-jeremiah',
  'ezekiel',
  'daniel',
  'susanna',
  'bel-and-the-dragon',
  '4-maccabees',

  // New Testament
  'matthew',
  'mark',
  'luke',
  'john',
  'acts',
  'romans',
  '1-corinthians',
  '2-corinthians',
  'galatians',
  'ephesians',
  'philippians',
  'colossians',
  '1-thessalonians',
  '2-thessalonians',
  '1-timothy',
  '2-timothy',
  'titus',
  'philemon',
  'hebrews',
  'james',
  '1-peter',
  '2-peter',
  '1-john',
  '2-john',
  '3-john',
  'jude',
  'revelation',
];
