# Orthodox Christian Bible — website

Astro static site serving free, public-domain scripture (KJV, Brenton's Septuagint), daily
liturgical readings, prayers, and articles. It's the SEO-optimized web companion to the
"Orthodoxy" iOS app — decoupled from the app by design, funneling readers toward the App
Store while standing as a fully indexable, useful site on its own.

## Tech stack

- **Astro `^6.4.7`** — static site generator, no UI framework (no React/Vue/Svelte). Pages
  are `.astro` components with inline scoped `<style>` blocks.
- **@astrojs/sitemap `^3.7.3`** — auto-generates `sitemap-index.xml` from all static routes.
- **pagefind `^1.5.2`** — client-side, WASM-powered full-text search index, built as a
  `postbuild` step over `dist/`.
- **TypeScript** — `tsconfig.json` extends `astro/tsconfigs/strict`. No components are
  written in `.ts`/`.tsx`; strictness mainly benefits `.astro` frontmatter typing.
- **Node `>=22.12.0`** required (`package.json` `engines`); CI currently uses Node 20 (see
  Known Issues).
- No backend, no database, no ORM, no CSS framework (no Tailwind/Bootstrap/PostCSS config).
- Package manager: npm (`package-lock.json` is committed).

Output mode is static (`output: 'static'`, the Astro default — no adapter is configured in
`astro.config.mjs`), which is what makes Cloudflare Pages static hosting possible.

## Project structure

```
astro.config.mjs        Site config: canonical domain + sitemap integration
tsconfig.json            Extends Astro's strict preset
package.json              Scripts + the 3 runtime deps

src/
  layouts/
    Base.astro            Shared HTML shell: <head> boilerplate, fonts, global CSS
                           (the manuscript/liturgical design tokens live here as
                           CSS custom properties), header nav w/ mobile hamburger,
                           footer, and the inline nav-toggle script.
  components/
    Seo.astro              Centralized <head> metadata: title/description, canonical
                            link, Open Graph, Twitter Card, JSON-LD (passed in per page),
                            Apple Smart App Banner. Every page routes its SEO through this.
    DayReadings.astro       Renders one day's liturgical readings (title, fast level,
                            commemorations, scripture passages). Shared by both the
                            "today" page and the dated archive pages so markup lives once.
  data/                    All site content — see "Content structure" below.
  pages/                   File-based routes — see "Routing" below.

scripts/                  One-off / maintenance Node scripts, run outside the Astro build:
  fetch-readings.mjs        Pulls daily readings from orthocal.info, writes/archives them
                             as JSON under src/data/readings/. Run by the CI workflow.
  import-bible.mjs          One-off importer: source Bible text → per-chapter JSON files
                             under src/data/<version>/<book>/<chapter>.json.
  import-vpl.mjs             Same idea, for VPL-format Bible source files.

public/                  Static assets served as-is (not processed by Astro):
  _headers                 Cloudflare Pages security headers (CSP, HSTS, etc.) — see
                            Deployment.
  favicon*, apple-touch-icon.png, site.webmanifest, android-chrome-*.png
  robots.txt                Allows all crawling; points to /sitemap-index.xml.
  (NOTE: og-default.png referenced by Seo.astro for social cards does not exist yet
   — see Known Issues.)

.github/workflows/
  fetch-readings.yml        Daily cron (08:10 UTC) that runs fetch-readings.mjs and
                             commits any new/changed JSON back to main — see Deployment.

dist/                    Build output (Astro HTML + Pagefind index). Currently committed
                          to git — see Known Issues.
```

## Content structure & conventions

Philosophy stated directly in code comments: **"drop a file in, get a page automatically."**
Content lives as static JSON/JS under `src/data/`, read at build time
(`import.meta.glob(..., { eager: true })` for scripture, plain `import` for the JS arrays).
Adding content never requires touching route code — routes, nav, sitemap, and search index
all derive from what's present in `src/data/`.

- **Scripture** — `src/data/<version-slug>/<book-slug>/<chapter>.json`, one file per
  chapter. Schema:
  ```json
  {
    "book": "...", "bookName": "...", "testament": "...",
    "chapter": 3, "totalChapters": 21,
    "verses": [{ "n": 16, "t": "For God so loved the world..." }]
  }
  ```
  Book directories use kebab-case slugs matching the URL (e.g. `1-chronicles`,
  `1-esdras`). `n`/`t` (verse number/text) are intentionally terse since these files are
  large and repetitive.
  - Versions are registered in `src/data/versions.js` (`VERSIONS` array: `slug`, `name`,
    `abbr`, `year`, `license`, `description`, plus a `getVersion(slug)` helper). This
    registry drives the nav, version-landing pages, and chapter routing — **to add a new
    version, add its entry here and drop its chapter JSON in; nothing else changes.**
  - Currently live: `kjv` (King James, 1611) and `brenton` (Brenton's Septuagint, 1851,
    covers the Orthodox OT including deuterocanonical books). An `osb` (Orthodox Study
    Bible) entry exists commented-out, pending written permission (it's copyrighted).
- **Daily readings** — `src/data/readings/<YYYY>/<MM>/<DD>.json`, fetched from the public
  `orthocal.info` OCA calendar API and archived verbatim, wrapped as
  `{ date, fetched_at, data }`. Generated/maintained by `scripts/fetch-readings.mjs`
  (never hand-edit these — they'll be overwritten by the next scheduled run within the
  refresh window).
- **Prayers** — `src/data/prayers.js`: `PRAYER_CATEGORIES` array (`slug`, `name`, `order`,
  `description`, `prayers: [{ title, text }]`), plus a standalone `JESUS_PRAYER` export for
  its own dedicated page. `order` controls display order on `/prayers/`. Adding a category
  auto-creates its page and adds it to the index + sitemap.
- **Articles** — `src/data/articles.js`: `ARTICLES` array (`slug`, `title`, `description`,
  `date` (ISO), `byline`, `bylineUrl`, `sections: [{ title, body }]`). `body` paragraphs are
  separated by blank lines; `sections` render as `<h2>`s on the page. Same
  auto-page/index/sitemap behavior as prayers.
- **App metadata** — `src/data/app.js`: single `APP` object (App Store ID, tagline,
  `features` list) consumed by the homepage funnel and `Seo.astro`'s Apple Smart App
  Banner. Edited in one place by design.

## Routing (`src/pages/`)

All routes are static-generated at build time; dynamic segments use `getStaticPaths()`.

| Route | File | Notes |
|---|---|---|
| `/` | `index.astro` | App-funnel hero + Bible verse-lookup/version cards |
| `/search/` | `search.astro` | Pagefind client-side search UI |
| `/bible/<version>/` | `bible/[version]/index.astro` | Book index for a version |
| `/bible/<version>/<book>/<chapter>` | `bible/[version]/[book]/[chapter].astro` | One page per chapter JSON file, discovered via `import.meta.glob('../../../../data/*/*/*.json')` |
| `/prayers/` | `prayers/index.astro` | Category index |
| `/prayers/<category>` | `prayers/[category].astro` | From `PRAYER_CATEGORIES` |
| `/prayers/jesus-prayer` | `prayers/jesus-prayer.astro` | Standalone page, not data-driven like other categories |
| `/articles/` | `articles/index.astro` | Article index |
| `/articles/<slug>` | `articles/[slug].astro` | From `ARTICLES` |
| `/readings/` | `readings/index.astro` | Today's readings |
| `/readings/archive` | `readings/archive.astro` | Archive listing |
| `/readings/<year>/<month>/<day>` | `readings/[year]/[month]/[day].astro` | One page per archived JSON file |

**SEO-critical: this URL structure must stay stable** (per README) — chapter and verse
anchors (`#v16`) are the target of external links and search indexing.

## Local development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build       # static output → dist/, then Pagefind index (postbuild)
npm run preview      # serve the built dist/ locally
```

There's no test suite, linter, or formatter configured (no ESLint/Prettier/Vitest). No
`.env` files — the site needs no secrets or API keys at build or runtime; the readings
fetch script calls the public, unauthenticated `orthocal.info` API.

## Deployment: GitHub → Cloudflare Pages

- **Host:** Cloudflare Pages, connected directly to this GitHub repo via the Cloudflare
  dashboard (build command `npm run build`, output directory `dist`). There is **no
  `wrangler.toml` or other Cloudflare config file in-repo** — the Pages project config
  (build settings, custom domain, DNS/HTTPS) lives entirely in the Cloudflare dashboard,
  outside version control.
- **Flow:** push to `main` → Cloudflare Pages detects the push → runs `npm run build` →
  deploys `dist/` (including the Pagefind index) to the configured domain
  (`orthodoxchristianbible.com`, per `astro.config.mjs`). There is no GitHub Actions step
  that builds or deploys the site itself — Cloudflare's own git integration owns that.
- **Security headers:** `public/_headers` (Cloudflare Pages' native headers file) applies
  CSP, HSTS, X-Frame-Options, etc. to all routes. The CSP explicitly allows
  `wasm-unsafe-eval` (required for Pagefind's WASM search) and `connect-src
  https://orthocal.info` (the readings API called client-side... verify if this is actually
  called client-side or only at build time before changing this header).
- **Content pipeline as CI:** `.github/workflows/fetch-readings.yml` runs daily at 08:10 UTC
  (plus manual `workflow_dispatch`). It runs `node scripts/fetch-readings.mjs --refresh 2`,
  and if that produced any new/changed files under `src/data/readings/`, commits them with
  message `Archive daily readings (YYYY-MM-DD)` and pushes to `main` using the
  `github-actions[bot]` identity. That push is what triggers the next Cloudflare rebuild —
  the workflow explicitly skips committing when nothing changed, to avoid pointless
  rebuilds. This is a live, running pipeline (recent git history is dominated by these
  daily auto-commits).
- **No secrets required in CI** beyond the default `GITHUB_TOKEN` (workflow has
  `permissions: contents: write` to push commits).

## Styling approach

No CSS framework. Every `.astro` file owns its own scoped `<style>` block (Astro's default
style scoping); only genuinely global rules (fonts, resets, header/footer, the color
tokens) live in `Base.astro`'s `is:global` block.

- **Design tokens** are CSS custom properties defined once in `Base.astro`, under a
  comment calling out the palette as "Manuscript / liturgical": `--ink`, `--oxblood`
  (headings), `--indigo` (nav/secondary headings), `--gold`/`--gold-bright` (the one accent
  color — verse numbers, active states, CTAs), `--parchment`/`--parchment-deep`
  (backgrounds), `--rule` (hairline borders), `--muted` (secondary text). Reuse these
  variables rather than hardcoding colors in new components.
- **Fonts**, loaded via Google Fonts `<link>` in `Base.astro`, each with a consistent role:
  - `EB Garamond` — body text / scripture verses (serif, readable long-form)
  - `Spectral` — headings, brand wordmark, drop-initials (serif, display weight)
  - `Inter` — UI chrome: nav, labels, buttons, metadata, breadcrumbs, eyebrows (sans-serif,
    small caps/uppercase treatment with letter-spacing)
- **Layout:** a `.wrap` utility class (`max-width: 720px; margin: 0 auto; padding: 0
  1.5rem;`) is the standard content-width container for reading-focused pages (chapters,
  readings). Wider sections (homepage hero/features) use their own max-width.
- Responsive breakpoints are ad hoc (`@media (max-width: 640px)` / `760px`), not a token
  system — mobile-nav collapse triggers at 640px, homepage hero reflow at 760px.
- Accessibility touches are consistent across components: `:focus-visible` outlines,
  `prefers-reduced-motion` handling in `Base.astro`, `aria-label`/`aria-expanded` on the
  mobile nav toggle, skip-friendly `.sr` (screen-reader-only) utility class on the homepage
  search form.
- A recurring "signature" detail: an illuminated drop-initial (`::first-letter`, gold,
  Spectral) on the first verse of each Bible chapter — intentional editorial styling, not
  incidental.

## Coding conventions

- **Frontmatter-first Astro files:** imports and data/prop destructuring in the `---`
  fence, JSX-like markup below, `<style>` last. Comments in frontmatter explain *why* (SEO
  rationale, data-shape quirks), not *what*.
- **Data-driven pages:** dynamic routes always pull from a `src/data/*` registry via
  `getStaticPaths()` rather than hardcoding lists — follow this pattern for any new
  content type instead of writing one-off pages.
- **Slugs are kebab-case** and double as both the JSON directory/route segment (e.g.
  `1-chronicles`, `great-schism-1054`, `jesus-prayer`).
- **JS data files** (`prayers.js`, `articles.js`, `versions.js`, `app.js`) export
  `SCREAMING_SNAKE_CASE` constants (`VERSIONS`, `PRAYER_CATEGORIES`, `ARTICLES`,
  `JESUS_PRAYER`, `APP`) — arrays of plain objects, no classes, no build-time validation
  library (shape is convention/comment-enforced only).
- **JSON-LD structured data** is hand-built per page type (`Article`, `WebSite`,
  `BreadcrumbList`) directly in frontmatter and passed to `Base`/`Seo` as a `jsonLd` prop —
  follow this pattern (don't introduce a schema library) when adding structured data to a
  new page type.
- **SEO metadata is mandatory per page:** every route sets `title`/`description` (and
  usually `jsonLd`) and passes them into `<Base>`; descriptions are hand-trimmed to ~155
  chars (see the chapter page's `.slice(0, 155)`).
- **Dates are always parsed/anchored in UTC** (e.g. `Date.UTC(yy, mm - 1, dd)` in
  `DayReadings.astro`, `getUTCFullYear()`/`setUTCHours()` in `fetch-readings.mjs`) to keep
  "today" deterministic regardless of server or visitor timezone.
- **Scripts** (`scripts/*.mjs`) are plain Node ESM with a `#!/usr/bin/env node` shebang, a
  usage comment block at the top, simple `argv`-flag parsing (no CLI arg library), and
  defensive per-item error handling that logs and continues rather than aborting a whole
  run over one bad item (see `fetch-readings.mjs`).
- No absolute import aliases — all imports use relative paths (`../../data/versions.js`
  etc.), including the four-levels-deep `../../../../data/...` glob in the chapter route.

## Known issues / in progress

*(Seeded from what a full repo scan turned up. Keep this updated as things change.)*

- **`node_modules/`, `dist/`, `.astro/`, and `.DS_Store` files are committed to git** —
  there is no `.gitignore` in the repo at all. This bloats the repo significantly
  (`node_modules/` ≈ 189MB / 9,919 files, `dist/` ≈ 75MB / 4,949 files tracked). Not fixed
  in this pass — flag before touching.
- **`public/og-default.png` does not exist** — `Seo.astro` references
  `/og-default.png` for Open Graph/Twitter card images on every page, but the file isn't in
  `public/`. Social share previews are currently broken. README's pre-launch checklist
  calls this out (1200×630 recommended).
- **App Store ID has a stale inline TODO** — `src/data/app.js` still carries a
  `// TODO: Replace APP_STORE_ID...` comment above a value (`6762108321`) that's already
  been filled in and commented as "Orthodox Christian Bible" — worth confirming this is
  actually the correct, live App Store ID and removing the stale TODO text.
  - `src/data/app.js`'s own `features` list markets "Orthodox Study Bible" as a
  present-tense app feature, but the OSB Bible version is commented out in
  `versions.js`, pending copyright permission — those two are currently inconsistent (app
  marketing vs. site content).
- **OSB (Orthodox Study Bible) not yet added** — entry exists commented-out in
  `src/data/versions.js`; blocked on securing written permission from Thomas Nelson / St.
  Athanasius Academy.
- **CI Node version (20) is older than the `engines` requirement (>=22.12.0)** in
  `package.json` — `.github/workflows/fetch-readings.yml` pins `node-version: '20'`. Works
  today since the fetch script doesn't need newer Node features, but worth reconciling.
- **No automated tests, linting, or formatting** configured for the project.
