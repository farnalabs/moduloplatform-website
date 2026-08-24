<script setup lang="ts">
import { APP_URL } from '@/config'
</script>

<template>
  <section
    class="relative overflow-hidden border-b border-ink-700/60"
    aria-labelledby="hero-heading"
  >
    <div class="mx-auto max-w-content px-4 py-20 sm:px-6 sm:py-28">
      <p
        class="mb-4 inline-flex items-center gap-2 rounded-full border border-ink-700 bg-ink-800 px-3 py-1 text-xs font-medium text-teal-400"
      >
        Agent governance platform
      </p>
      <h1
        id="hero-heading"
        class="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink-50 sm:text-5xl"
      >
        Agent governance for your agentic SDLC.
      </h1>
      <p class="mt-6 max-w-2xl text-lg text-ink-300">
        Modulo enforces boundaries on your agentic SDLC: every step validates against typed
        schemas, risky decisions pause for review where you configure them, and every action is
        written to a tamper-evident audit trail. Self-hosted and source-available, so your
        prompts and data stay in your infrastructure. Under the hood you compose agents, tools,
        and human gates into an explicit execution graph — the practice the industry now calls
        graph engineering.
      </p>
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
          What is an agent governance platform?
        </a>
      </div>
      <p class="mt-4 text-sm text-ink-300">
        Free and complete. No credit card required. Self-hosted.
      </p>
    </div>
  </section>
</template>
