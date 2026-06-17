# Orthodox Christian Bible — website

Astro static site serving KJV and Brenton's Septuagint, SEO-optimized,
deployable to Cloudflare Pages. Decoupled from the iOS app by design.

## Run locally
    npm install
    npm run dev        # http://localhost:4321
    npm run build      # static output in dist/ + Pagefind search index

## How content works
Scripture lives in src/data/<version>/<book>/<chapter>.json
Schema (see src/data/kjv/john/3.json):
    { "book","bookName","testament","chapter","totalChapters","verses":[{"n","t"}] }

Drop in more JSON files → routes, sitemap, search, and book lists update
automatically. No code changes needed to add chapters.

## Adding the OSB later
1. Get written permission (it is copyrighted).
2. Uncomment the OSB block in src/data/versions.js.
3. Add src/data/osb/<book>/<chapter>.json files.
Done — everything else is automatic.

## URL structure (SEO-critical — keep stable)
    /                          home + verse lookup
    /bible/kjv/                version landing (book index)
    /bible/kjv/john/3          chapter page
    /bible/kjv/john/3#v16      direct verse anchor
    /search/                   client-side search (Pagefind)

## Before launch
- astro.config.mjs: confirm `site` = your real domain.
- src/components/Seo.astro: set your real App Store ID in apple-itunes-app.
- Add public/og-default.png (1200x630) for social cards.
- Optional Universal Links: add public/.well-known/apple-app-site-association.

## Deploy to Cloudflare Pages
1. Push this repo to GitHub.
2. Cloudflare dashboard → Pages → connect repo.
3. Build command: `npm run build`   Output dir: `dist`
4. Add your custom domain; DNS + HTTPS handled automatically.
5. Add a public/_headers file for security headers (CSP, HSTS, etc.).

## After launch
- Submit sitemap (/sitemap-index.xml) to Google Search Console + Bing.
