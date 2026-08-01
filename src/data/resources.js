// External resources recommended alongside the site's own content: books,
// YouTube channels, other websites, podcasts, and audiobooks. Adding an
// entry to RESOURCES automatically creates its page, adds it to its
// category on /resources/, and includes it in the sitemap.
//
// Fields on a resource:
//   slug        URL segment: /resources/<slug>/
//   title       Page <h1> and card title
//   category    Must match a slug in RESOURCE_CATEGORIES below
//   creator     Author / host / channel owner (optional)
//   url         The external link this resource points to
//   description Meta description + index card blurb (aim ~150 chars)
//   body        Your write-up. Paragraphs are separated by blank lines,
//               same convention as articles.js.

export const RESOURCE_CATEGORIES = [
  { slug: 'books', name: 'Books', order: 1 },
  { slug: 'youtube', name: 'YouTube Channels', order: 2 },
  { slug: 'websites', name: 'Websites', order: 3 },
  { slug: 'podcasts', name: 'Podcasts', order: 4 },
  { slug: 'audiobooks', name: 'Audiobooks', order: 5 },
];

export const RESOURCES = [
  // Example — copy this shape for a new entry, then delete the example:
  // {
  //   slug: 'mere-orthodoxy',
  //   title: 'Mere Orthodoxy',
  //   category: 'websites',
  //   creator: 'Jake Meador',
  //   url: 'https://mereorthodoxy.com',
  //   description: 'Essays on faith, culture, and the Christian life from an Orthodox perspective.',
  //   body: `A long-running site worth following for thoughtful writing on faith and culture.

  // Good for readers who want more than devotional content — real engagement with hard questions.`,
  // },
];
