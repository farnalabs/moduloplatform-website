import { spawn } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'
import { ALL_ROUTES, decodeEntities } from './routes.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const PORT = 4175
const BASE = `http://localhost:${PORT}`
const GOTO_TIMEOUT = 30000
const TITLE_TIMEOUT = 10000

let preview = null
let browser = null

function startPreview() {
  const viteBin = join(ROOT, 'node_modules', 'vite', 'bin', 'vite.js')
  preview = spawn(process.execPath, [viteBin, 'preview', '--port', String(PORT)], {
    cwd: ROOT,
    stdio: ['ignore', 'pipe', 'pipe'],
  })
  preview.stdout.on('data', () => {})
  preview.stderr.on('data', () => {})
}

async function waitForPreview(timeoutMs = 30000) {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    try {
      const res = await fetch(BASE + '/')
      if (res.ok) return
    } catch {
      // not up yet
    }
    await new Promise((r) => setTimeout(r, 500))
  }
  throw new Error(`vite preview did not become ready at ${BASE} within ${timeoutMs}ms`)
}

async function waitForTitle(page, expected, timeoutMs = TITLE_TIMEOUT) {
  const deadline = Date.now() + timeoutMs
  while (Date.now() < deadline) {
    const title = await page.title()
    if (title.includes(expected)) return
    await new Promise((r) => setTimeout(r, 250))
  }
  const actual = await page.title()
  throw new Error(`title did not match after ${timeoutMs}ms: expected "${expected}", got "${actual}"`)
}

function writeDist(relativeFile, html) {
  const file = join(DIST, relativeFile)
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, html)
  return file
}

async function captureRoute(page, route) {
  const url = BASE + route.path
  const res = await page.goto(url, { waitUntil: 'networkidle0', timeout: GOTO_TIMEOUT })
  if (!res || !res.ok()) {
    throw new Error(`non-200 response (${res ? res.status() : 'no response'}) for ${route.path}`)
  }
  await waitForTitle(page, route.title)
  const html = await page.content()
  if (!decodeEntities(html).includes(route.marker)) {
    throw new Error(`empty mount for ${route.path}: content missing marker "${route.marker}"`)
  }
  const file = writeDist(route.file, html)
  return { path: route.path, file, title: route.title, chars: html.length }
}

async function main() {
  if (ALL_ROUTES.length === 0) {
    throw new Error('zero routes found - aborting capture')
  }

  startPreview()
  await waitForPreview()

  browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  })

  const results = []
  const page = await browser.newPage()
  page.setDefaultTimeout(GOTO_TIMEOUT)

  for (const route of ALL_ROUTES) {
    const result = await captureRoute(page, route)
    results.push(result)
    console.log(`OK ${route.path} (${result.chars} chars)`)
  }

  await page.close()

  console.log(`Captured ${results.length} pages (${ALL_ROUTES.length} routes)`)
  return results
}

try {
  const results = await main()
  console.log(`Capture complete: ${results.length} files written to dist/`)
} catch (err) {
  console.error(`CAPTURE FAILED: ${err.message}`)
  process.exitCode = 1
} finally {
  if (browser) {
    try {
      await browser.close()
    } catch {
      // ignore close errors
    }
  }
  if (preview) {
    try {
      preview.kill()
    } catch {
      // ignore kill errors
    }
  }
}
