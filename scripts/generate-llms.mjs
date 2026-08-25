import { writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DIST = join(__dirname, '..', 'dist')
const BASE = 'https://moduloplatform.com'

const lines = [
  '# Modulo',
  '',
  'Modulo is an agent governance platform for your agentic SDLC. It enforces boundaries on every step of your agent-driven software delivery: typed schemas validate inputs and outputs, risky decisions pause for human review, and every action is written to a tamper-evident audit trail. Self-hosted and source-available.',
  '',
  '## Pages',
  `- [Modulo — Agent governance platform](${BASE}/)`,
  '',
]

mkdirSync(DIST, { recursive: true })
writeFileSync(join(DIST, 'llms.txt'), lines.join('\n'))
console.log('Generated llms.txt')
