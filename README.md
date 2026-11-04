# moduloplatform-website

The top-of-funnel marketing website for **Modulo**, a self-hosted software factory.

This site lives at `moduloplatform.com` and is deliberately separate from
[`modulo.run`](https://modulo.run), which is the product itself (the app, the
brand hub, and the docs). Its job is to capture search intent for the market
frame Modulo sits in, primarily:

> "What is a software factory, and how do you run one you own?"

The formal category is an Agentic Delivery Governance platform. The market
frame is a software factory. The mechanism inside it is graph engineering.
The site then hands qualified visitors off to the product via the **Start free**
call to action.

## What it covers

- A plain-language explainer of software factories and built-in governance.
- The problem it solves (the gaps in factory ownership, trust, and evidence).
- How Modulo solves it (intake, graph engineering, typed seams, gates, audit trails, and evals).
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

- Positioning mirrors Modulo's product framing: "We handle the boilerplate. You handle the
  remainder." Modulo is a self-hosted software factory for AI-powered SDLC pipelines,
  formally an Agentic Delivery Governance platform, with graph engineering as its mechanism.
- The Community edition is free and complete - self-hosted, no credit card
  required. The CTA is **Start free**, linking to `https://app.modulo.run`.
- CTA links to `https://app.modulo.run` (sign up) and `https://modulo.run`
  (product), since this site itself does not capture leads.
- The site never treats software factory as a proper noun. Brand is Modulo; software factory is the descriptive market frame.