# moduloplatform-website — Code Guidance

Vue 3 + Vite + Tailwind CSS SPA deploying to **moduloplatform.com** via Cloudflare Pages. Sister repo to `Repos/modulo-website` (modulo.run) — a SEPARATE codebase: this repo uses `src/views/HomeView.vue` + section components under `src/components/`; modulo-website uses `HomePage.vue`.

## Purpose — the two-domain strategy

moduloplatform.com was bought for the .com, then repurposed as the **enterprise-leaning sales funnel**:

- **moduloplatform.com** (this repo) — sales funnel: conversion-focused. Start-free CTAs, pricing pointer, qualification copy. Keep it short, outcome-led, and sales-oriented; deep product education lives on modulo.run.
- **modulo.run** (`Repos/modulo-website`) — the product site: full narrative, docs, roadmap, blog, features, getting-started.

Copy decisions should ask: "does this sell, or does it teach?" — sell here, teach there. Shared positioning and voice are canonical in `Repos/admin/brand/voice-and-language.md` (§1 = 2026-09-08 homepage repositioning; §5 = calibrated hero copy) and the `modulo-voice` skill governs public-copy rules (American spelling, no em-dashes, no marketing connectives or hype words).

## Conventions (mirror modulo-website)

- **Worktrees only.** Branch in `.agents/worktrees/<branch-name>/` from the main repo; never commit in the main working tree. This repo is push-to-main: rebase the worktree branch on origin/main, push, then `git merge --ff-only` in the main working tree and push — there is no PR and no autonomous pipeline for this repo.
- **Dependencies:** NEVER run `npm install` / `npm ci` inside worktrees — `node_modules` is junctioned from the main repo's physical tree and writes through the junction would corrupt it. Run real installs in the main repo only; junction into new worktrees with `cmd /c mklink /J "<worktree>\node_modules" "<repo>\node_modules"`. When cleaning up a worktree, remove the junction FIRST with `cmd /c rmdir "<worktree>\node_modules"` (never `Remove-Item -Recurse` on a junction — it deletes the target's contents).
- **Verify before pushing:** `npm run build` must exit 0. Cloudflare Pages auto-deploys from `main` — there is no manual deploy step.
- **Accessibility (non-negotiable):** WCAG AA — `ink-300` minimum for body text on dark backgrounds (never `ink-400`), `aria-hidden="true"` on decorative SVGs, `aria-labelledby` on every section pointing at its heading id, visible `:focus-visible` styles, `motion-safe:` prefix on any pulse/animation.
- **Page structure:** sections are components under `src/components/` composed in `src/views/HomeView.vue`; the build is `vue-tsc && vite build`.
