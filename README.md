# moduloplatform-website

The top-of-funnel marketing website for **Modulo**, the AI orchestration platform.

This site lives at `moduloplatform.com` and is deliberately separate from
[`modulo.run`](https://modulo.run), which is the product itself (the app, the
brand hub, and the docs). Its job is to capture search intent for the category
Modulo sits in, primarily:

> "What is an AI orchestration platform?"

and then hand qualified visitors off to the product via the **Request a demo**
call to action.

## What it covers

- A plain-language explainer of AI orchestration as a category.
- The problem it solves (the boilerplate teams should not be writing).
- How Modulo solves it (composable pipelines of atomic agents).
- An honest comparison with building the same thing in-house.
- Audience framing (platform/DevEx, AI product, agencies, enterprises).
- A demo CTA pointing at `https://modulo.run` / `https://app.modulo.run`.

## Stack

Vue 3 (Composition API) + Vite + TypeScript + Tailwind CSS + vue-router. Static
SPA, deployed on Cloudflare Pages.

## Local development

```bash
pnpm install
pnpm run dev        # vite dev server
pnpm run build      # vue-tsc type-check + vite build -> dist/
pnpm run preview    # preview the production build
pnpm run type-check # vue-tsc --noEmit
```

## Deploy

Cloudflare Pages, configured via `wrangler.toml`:

- Build command: `pnpm run build`
- Output directory: `dist`
- SPA fallback: `public/_redirects` (`/*  /index.html  200`)

## Content decisions

- Positioning mirrors the Modulo PRD: "We handle the boilerplate. You handle the
  remainder." Modulo is an orchestration layer for AI-powered SDLC pipelines, a
  visual, composable pipeline of atomic agents that automate work between
  GitHub, Linear, Notion, and similar tools.
- The comparison table is intentionally honest (not a feature brag) so the page
  earns search trust.
- CTA links to `https://modulo.run` (product) and `https://app.modulo.run`
  (demo), since this site itself does not capture leads.
