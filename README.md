# moduloplatform-website

The top-of-funnel marketing website for **Modulo**, the agent governance platform.

This site lives at `moduloplatform.com` and is deliberately separate from
[`modulo.run`](https://modulo.run), which is the product itself (the app, the
brand hub, and the docs). Its job is to capture search intent for the category
Modulo sits in, primarily:

> "What is an agent governance platform?"

and then hand qualified visitors off to the product via the **Start free**
call to action.

## What it covers

- A plain-language explainer of agent governance as a category.
- The problem it solves (the governance gaps in agent pipelines).
- How Modulo solves it (typed schema seams, human gates, audit trail, evals).
- Audience framing (platform/DevEx, AI product, agencies, enterprises).
- A free-tier pricing strip grounding the Community edition claim.
- A Start free CTA pointing at `https://app.modulo.run`.

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
  remainder." Modulo is an agent governance platform for AI-powered SDLC
  pipelines, a visual, composable pipeline of atomic agents that automate work
  between GitHub, Linear, Notion, and similar tools.
- The Community edition is free and complete — self-hosted or hosted, no credit
  card required. The CTA is **Start free**, linking to `https://app.modulo.run`.
- CTA links to `https://app.modulo.run` (sign up) and `https://modulo.run`
  (product), since this site itself does not capture leads.