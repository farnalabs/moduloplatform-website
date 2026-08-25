import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { ALL_ROUTES } from './routes.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const BASE = 'https://moduloplatform.com'

const lines = []
lines.push('# Modulo')
lines.push('')
lines.push('Modulo is a self-hosted platform for building, running, and governing AI agent pipelines that automate your software delivery lifecycle.')
lines.push('')
lines.push('## Pages')
for (const route of ALL_ROUTES) {
  lines.push(`- [${route.title.replace(/ \u2014 Modulo$/, '').replace(/ - Modulo$/, '')}](${BASE}${route.path})`)
}
lines.push('')

mkdirSync(DIST, { recursive: true })
writeFileSync(join(DIST, 'llms.txt'), lines.join('\n'))
console.log(`Generated llms.txt with ${ALL_ROUTES.length} pages`)
