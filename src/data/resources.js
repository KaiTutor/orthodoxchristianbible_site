// External resources recommended alongside the site's own content: books,
// YouTube channels, other websites, podcasts, and audiobooks. Adding an
// entry to RESOURCES automatically creates its page, adds it to its
// category on /resources/, and includes it in the sitemap.
//
// Fields on a resource:
//   slug        URL segment: /resources/<slug>/
//   title       Page <h1> and card title
//   category    Must match a slug in RESOURCE_CATEGORIES below
//   creator     Author / host / publisher (optional)
//   url         The external link this resource points to
//   image       Path under public/resources/ (optional) — shown on the
//               card and detail page, cropped to a square thumbnail.
//   description Meta description + index card blurb (aim ~150 chars)
//   body        Your write-up. Paragraphs are separated by blank lines,
//               same convention as articles.js.
//   features    Optional array of short highlight strings, shown as a
//               bullet list under the body.
//   specs       Optional array of short strings for a "Technical Details"
//               bullet list (page count, format, etc.) — mainly for books.
//   embed       Optional embed src URL (e.g. a Spotify show/episode embed
//               link) — rendered as an iframe near the top of the page.
//               The embed's origin must be allowed in public/_headers'
//               CSP frame-src, or the browser will silently block it.

export const RESOURCE_CATEGORIES = [
  { slug: 'books', name: 'Books', order: 1 },
  { slug: 'youtube', name: 'YouTube Channels', order: 2 },
  { slug: 'websites', name: 'Websites', order: 3 },
  { slug: 'podcasts', name: 'Podcasts', order: 4 },
  { slug: 'audiobooks', name: 'Audiobooks', order: 5 },
];

export const RESOURCES = [
  {
    slug: 'orthodox-study-bible',
    title: 'Orthodox Study Bible',
    category: 'books',
    creator: 'St. Athanasius Academy of Orthodox Theology · Thomas Nelson',
    url: 'https://www.thomasnelsonbibles.com/product/orthodox-study-bible/',
    image: '/resources/Orthodox-Study-Bible-photo1.jpg',
    description:
      'The FIRST EVER Orthodox Study Bible presents the Bible of the early church and the church of the early Bible.',
    body: `Dive into the riches of Holy Scripture with this unique study Bible. Within its pages you'll find commentary from ancient Christian perspectives that still remains relevant to modern-day Christians.

With this Bible, you will become a more informed Christian by listening to Christian voices from the first ten centuries after Christ. By listening to the past, your intellect and heart of faith unite for a richer Christian experience with the Orthodox Study Bible.

Ancient Christianity speaks to today's world. The Orthodox Study Bible unites the holy words of Scripture with the understanding of those words from the earliest days of the Christian era.`,
    features: [
      'Unique Translation. While the New Testament uses the New King James translation, the Old Testament contains the text the early Church would have read: the Greek text of the Septuagint, including the Deuterocanon.',
      'Liturgical Resources. For those who desire more guidance to their devotion, morning and evening prayers are included as well as lectionary readings for those who follow the readings in the Church calendar.',
      'Inspirational Ancient Artwork. In keeping with the tradition of the early Church, you experience full-color ancient images meant to draw you closer to Christ.',
    ],
    specs: [
      '1856 pages',
      'Line-matched typesetting',
      'Smyth-sewn bindings',
      'Clear and readable 9.5-point type',
      'Hardcover dimension: 6-5/8" x 9-1/2" x 1.5"',
    ],
  },

  {
    slug: 'orthodox-wisdom',
    title: 'Orthodox Wisdom',
    category: 'podcasts',
    creator: 'Timothy Honeycutt',
    url: 'https://open.spotify.com/show/3jloW3Pjt5GHRvtRuqM0O2?si=51e751eab4394444&nd=1&dlsi=2d08d0d32c844acd',
    image: '/resources/orthodox-wisdom-spotifiy-image.jpg',
    embed: 'https://open.spotify.com/embed/show/3jloW3Pjt5GHRvtRuqM0O2?utm_source=generator&si=f5d2273dce804b5e',
    description:
      'Readings from Saints of Holy Orthodoxy — a podcast of readings from the writings and lives of Orthodox Christian saints.',
    body: `A podcast on Spotify of the readings of the saints. Readings of the Writings and Lives of Orthodox Christian Saints.

These recordings are free to download and share. All I ask is that you do so respectfully and reference this channel.

You can also contact me, Timothy Honeycutt, at: orthodoxwisdom1@gmail.com

Glory to Jesus Christ!`,
  },

  // Example — copy this shape for a new entry, then delete the example:
  // {
  //   slug: 'mere-orthodoxy',
  //   title: 'Mere Orthodoxy',
  //   category: 'websites',
  //   creator: 'Jake Meador',
  //   url: 'https://mereorthodoxy.com',
  //   image: '/resources/mere-orthodoxy.jpg',
  //   description: 'Essays on faith, culture, and the Christian life from an Orthodox perspective.',
  //   body: `A long-running site worth following for thoughtful writing on faith and culture.

  // Good for readers who want more than devotional content — real engagement with hard questions.`,
  //   features: ['Optional bullet highlights go here'],
  //   specs: undefined,
  // },
];
