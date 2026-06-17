// App Store details — edit in ONE place, used by the homepage funnel and
// the Apple Smart App Banner in Seo.astro.
//
// TODO: Replace APP_STORE_ID with your real numeric App Store ID.
// Find it in your app's App Store URL: apps.apple.com/us/app/your-app/idXXXXXXXXX
// (the digits after "id"). Then the links below build themselves.

export const APP = {
  name: 'Orthodoxy',
  appStoreId: '6762108321', // Orthodox Christian Bible
  get appStoreUrl() {
    return `https://apps.apple.com/app/id${this.appStoreId}`;
  },
  tagline:
    'Your complete Orthodox Christian companion — prayers, the Bible, liturgical texts, and the writings of the Church Fathers, all in one place.',
  features: [
    {
      title: 'Daily Prayers',
      body: 'A full Orthodox prayer library: Morning & Evening Prayers, Liturgical Hymns, the Trisagion, Prayers for the Departed, Before Holy Communion, and more. Daily notifications take you straight into prayer.',
    },
    {
      title: 'Orthodox Study Bible',
      body: 'Read the full Orthodox Study Bible with easy chapter navigation. A new verse of the day greets you each morning, synced to your home and lock screen widgets.',
    },
    {
      title: 'Orthodox Calendar',
      body: 'A fully dynamic calendar that calculates Pascha every year and shows all major feasts, saints\u2019 days, and fasting rules for every single day.',
    },
    {
      title: 'Church Fathers & Library',
      body: 'Study the lives of the Church Fathers, discover insights on spiritual warfare, learn what Orthodoxy teaches, and follow the complete Orthodox fasting guide.',
    },
    {
      title: 'Widgets',
      body: 'Home screen and lock screen widgets display your daily Bible verse. Tap to open directly to the verse of the day.',
    },
  ],
};
