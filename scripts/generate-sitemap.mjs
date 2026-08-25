import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ALL_ROUTES } from './routes.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const BASE = 'https://moduloplatform.com'

function urlEntry(route, changefreq, priority) {
  return `  <url>\n    <loc>${BASE}${route.path}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`
}

const entries = ALL_ROUTES.map((r) => urlEntry(r, 'monthly', r.path === '/' ? '1.0' : '0.8'))

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  entries.join('\n'),
  '</urlset>',
  '',
].join('\n')

mkdirSync(DIST, { recursive: true })
writeFileSync(join(DIST, 'sitemap.xml'), xml)
console.log(`Generated sitemap.xml with ${entries.length} URLs`)
