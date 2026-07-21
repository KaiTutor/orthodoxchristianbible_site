// Registry of Bible versions hosted on the site.
// To add the OSB later (once you have written permission), add an entry here
// and drop its content files under src/data/<slug>/<book>/<chapter>.json.
// Everything else — routes, sitemap, search, nav — picks it up automatically.

export const VERSIONS = [
  {
    slug: 'kjv',
    name: 'King James Version',
    abbr: 'KJV',
    year: '1611',
    license: 'Public Domain',
    description:
      'The 1611 Authorized Version. Public domain. The most widely read English Bible in history.',
  },
  {
    slug: 'brenton',
    name: "Brenton's Septuagint",
    abbr: 'LXX',
    year: '1851',
    license: 'Public Domain',
    description: 
      "Sir Lancelot C. L. Brenton's 1851 English translation of the Greek Septuagint - the Orthodox Old Testament, including Tobit, Judith, Wisdom, Sirach, Baruch, and 1–4 Maccabees.",
  },
  // {
  //   slug: 'osb',
  //   name: 'Orthodox Study Bible',
  //   abbr: 'OSB',
  //   year: '2008',
  //   license: 'Licensed — Thomas Nelson / St. Athanasius Academy',
  //   description: 'Add only after written permission is secured.',
  // },
];

export function getVersion(slug) {
  return VERSIONS.find((v) => v.slug === slug);
}
