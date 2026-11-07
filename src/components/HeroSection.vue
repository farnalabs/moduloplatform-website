<script setup lang="ts">
import { APP_URL } from '@/config'
</script>

<template>
  <section
    class="relative overflow-hidden border-b border-ink-700/60"
    aria-labelledby="hero-heading"
  >
    <div class="mx-auto max-w-content px-4 py-20 sm:px-6 sm:py-28">
      <p class="mb-4 text-center text-sm font-medium uppercase tracking-widest text-teal-500">Delivery Governance Platform</p>
      <h1
        id="hero-heading"
        class="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink-50 sm:text-5xl"
      >
        Govern the software development lifecycle as AI and automation take on more of the work.
      </h1>
      <p class="mt-6 max-w-3xl text-lg text-ink-300">
        Govern automated software delivery across the lifecycle, from code and dependencies to security, release, documentation, evidence, and remediation. Modulo runs in your environment, so your infrastructure, data, and delivery evidence stay yours.
      </p>
      <div class="mt-6 flex flex-wrap items-center gap-2">
        <span class="inline-flex items-center rounded-md border border-ink-700/80 bg-ink-800/60 px-3 py-1 text-xs font-medium text-ink-200">
          Air-Gap Capable
        </span>
        <span class="inline-flex items-center rounded-md border border-ink-700/80 bg-ink-800/60 px-3 py-1 text-xs font-medium text-ink-200">
          Zero Third-Party Telemetry
        </span>
        <span class="inline-flex items-center rounded-md border border-ink-700/80 bg-ink-800/60 px-3 py-1 text-xs font-medium text-ink-200">
          Bring Any Model (Cloud or Local)
        </span>
        <span class="inline-flex items-center rounded-md border border-ink-700/80 bg-ink-800/60 px-3 py-1 text-xs font-medium text-ink-200">
          Automated Merge &amp; Release
        </span>
      </div>
      <div class="mt-8 flex flex-wrap items-center gap-4">
        <a
          :href="APP_URL"
          class="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-5 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-teal-400"
        >
          Start free
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
              d="M4 10h12M11 5l5 5-5 5"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
        <a
          href="#what-is"
          class="inline-flex items-center gap-2 rounded-lg border border-ink-600 px-5 py-3 text-sm font-medium text-ink-100 hover:border-ink-600 hover:text-ink-50"
        >
          See how delivery governance works
        </a>
      </div>
      <p class="mt-4 text-sm text-ink-300">Works with Claude Code, Cursor, Copilot, and your own agents.</p>
      <p class="mt-4 text-sm text-ink-300">
        Free and complete. No credit card required. Self-hosted.
      </p>
      <div class="mx-auto mt-12 w-full overflow-hidden rounded-xl border border-teal-500/10 bg-ink-900 shadow-[0_0_40px_rgba(0,255,209,0.05)]">
        <img src="/dashboard-screenshot.png" alt="Modulo dashboard showing pipelines, runs, and spend overview" class="w-full" />
      </div>
    </div>
  </section>
</template>
