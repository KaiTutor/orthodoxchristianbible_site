// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set this to your real domain. Used for canonical URLs, sitemap, and OG tags.
export default defineConfig({
  site: 'https://orthodoxchristianbible.com',
  integrations: [sitemap()],
});
