#!/usr/bin/env node
/**
 * Fetch daily readings from orthocal.info and archive them as JSON in the repo.
 *
 * Usage:
 *   node scripts/fetch-readings.mjs                 # refresh today + fill 180 days forward
 *   node scripts/fetch-readings.mjs --days 30       # fill 30 days forward instead
 *   node scripts/fetch-readings.mjs --refresh 7     # re-fetch the next 7 days even if cached
 *
 * Behaviour:
 *   - Always RE-FETCHES the refresh window (default: next 7 days) so any
 *     corrections upstream propagate into pages we already generated.
 *   - Only fetches days beyond that window if we don't already have them,
 *     so the nightly run stays cheap and polite (one new day, typically).
 *
 * Output: src/data/readings/YYYY/MM/DD.json
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const OUT_ROOT = path.join(projectRoot, 'src', 'data', 'readings');

// How many days forward to keep populated.
const argv = process.argv.slice(2);
function argVal(flag, fallback) {
  const i = argv.indexOf(flag);
  return i !== -1 && argv[i + 1] ? Number(argv[i + 1]) : fallback;
}
const DAYS_FORWARD = argVal('--days', 180);
const REFRESH_WINDOW = argVal('--refresh', 7);

// Be polite: small delay between requests so we never hammer orthocal.
const DELAY_MS = 250;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const pad = (n) => String(n).padStart(2, '0');

function filePathFor(d) {
  const y = d.getUTCFullYear();
  const m = pad(d.getUTCMonth() + 1);
  const day = pad(d.getUTCDate());
  return path.join(OUT_ROOT, String(y), m, `${day}.json`);
}

async function fetchDay(d) {
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth() + 1; // API uses 1-based, non-padded is fine
  const day = d.getUTCDate();
  const url = `https://orthocal.info/api/oca/${y}/${m}/${day}/`;

  const res = await fetch(url, {
    headers: {
      // Identify ourselves so the orthocal author can see who's calling.
      'User-Agent': 'orthodoxchristianbible.com (daily readings archive)',
      Accept: 'application/json',
    },
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  return res.json();
}

async function main() {
  // Anchor "today" in UTC to keep the scheduled job deterministic.
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);

  let fetched = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < DAYS_FORWARD; i++) {
    const d = new Date(today);
    d.setUTCDate(today.getUTCDate() + i);

    const outPath = filePathFor(d);
    const exists = fs.existsSync(outPath);
    const inRefreshWindow = i < REFRESH_WINDOW;

    // Skip days we already have, unless they're in the refresh window.
    if (exists && !inRefreshWindow) {
      skipped++;
      continue;
    }

    try {
      const data = await fetchDay(d);

      // Store the date alongside the payload so pages don't have to re-derive it.
      const record = {
        date: `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`,
        fetched_at: new Date().toISOString(),
        data,
      };

      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, JSON.stringify(record, null, 2) + '\n');
      fetched++;
      console.log(`${exists ? 'refreshed' : 'fetched  '} ${record.date}`);
      await sleep(DELAY_MS);
    } catch (err) {
      failed++;
      console.error(`FAILED ${d.toISOString().slice(0, 10)}: ${err.message}`);
      // Keep going — one bad day shouldn't abort the whole run.
    }
  }

  console.log(
    `\nDone. fetched/refreshed: ${fetched}, already had: ${skipped}, failed: ${failed}`,
  );

  // Fail the CI job only if we got nothing at all (likely an API outage).
  if (fetched === 0 && failed > 0) process.exit(1);
}

main();
