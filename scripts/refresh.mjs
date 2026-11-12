#!/usr/bin/env node
/**
 * 重新抓取 data/libs.json 中每个库的 ★ 与最后提交时间。
 * 用法: node scripts/refresh.mjs
 *      GITHUB_TOKEN=xxx node scripts/refresh.mjs   # 提高 API 限额
 */
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const FILE = join(ROOT, 'data', 'libs.json');
const TOKEN = process.env.GITHUB_TOKEN;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function gh(url) {
  const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'visual-libs-map' };
  if (TOKEN) headers.Authorization = `Bearer ${TOKEN}`;
  const res = await fetch(url, { headers });
  if (res.status === 403 || res.status === 429) {
    const reset = Number(res.headers.get('x-ratelimit-reset') ?? 0) * 1000;
    const wait = Math.max(5000, reset - Date.now());
    console.error(`rate limited — waiting ${Math.round(wait / 1000)}s`);
    await sleep(wait + 1500);
    return gh(url);
  }
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

const doc = JSON.parse(await readFile(FILE, 'utf8'));
const changes = [];
let failed = 0;

for (const item of doc.items) {
  try {
    const j = await gh(`https://api.github.com/repos/${item.repo}`);
    const next = {
      stars: j.stargazers_count,
      last_push: (j.pushed_at ?? '').slice(0, 10),
      language: j.language ?? null,
    };
    const delta = next.stars - item.stars;
    if (delta !== 0) changes.push(`${item.repo}: ${item.stars} -> ${next.stars} (${delta > 0 ? '+' : ''}${delta})`);
    Object.assign(item, next);
  } catch (e) {
    failed++;
    console.error('skip', item.repo, '-', e.message);
  }
  await sleep(350);
}

doc.updated = new Date().toISOString().slice(0, 10);
await writeFile(FILE, JSON.stringify(doc, null, 2));

console.log(changes.length ? changes.join('\n') : 'no star changes');
console.log(`updated ${doc.items.length} entries (${failed} failed) -> ${doc.updated}`);
