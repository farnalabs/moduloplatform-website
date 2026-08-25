import { readFileSync, existsSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ALL_ROUTES, decodeEntities } from './routes.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')

let failures = 0

function check(name, condition, detail = '') {
  if (condition) {
    console.log(`PASS ${name}`)
  } else {
    console.log(`FAIL ${name}${detail ? ` - ${detail}` : ''}`)
    failures += 1
  }
}

for (const route of ALL_ROUTES) {
  const file = join(DIST, route.file)
  check(`${route.path} exists`, existsSync(file))
  if (!existsSync(file)) continue
  const html = readFileSync(file, 'utf-8')
  check(`${route.path} marker`, decodeEntities(html).includes(route.marker), `missing marker "${route.marker}"`)
  check(`${route.path} title`, decodeEntities(html).includes(`<title>${route.title}</title>`), `missing <title>${route.title}</title>`)
  check(`${route.path} size > 2000 bytes`, statSync(file).size > 2000, `only ${statSync(file).size} bytes`)
}

const sitemap = join(DIST, 'sitemap.xml')
check('sitemap.xml exists', existsSync(sitemap))
if (existsSync(sitemap)) {
  const xml = readFileSync(sitemap, 'utf-8')
  check('sitemap.xml has urlset', xml.includes('<urlset'))
  check('sitemap.xml has loc', xml.includes('<loc>'))
}

const llms = join(DIST, 'llms.txt')
check('llms.txt exists', existsSync(llms))
if (existsSync(llms)) {
  const text = readFileSync(llms, 'utf-8')
  check('llms.txt has content', text.length > 50)
}

if (failures > 0) {
  console.error(`Verification failed: ${failures} check(s) failed`)
  process.exit(1)
}
console.log(`All checks passed (${ALL_ROUTES.length} routes + sitemap + llms)`)
