<script setup lang="ts">
import { APP_URL, MODULO_RUN } from '@/config'
</script>

<template>
  <section id="cta" class="relative overflow-hidden" aria-labelledby="cta-heading">
    <div class="mx-auto max-w-content px-4 py-20 text-center sm:px-6 sm:py-28">
      <h2 id="cta-heading" class="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-ink-50">
        Start governing your agentic SDLC free
      </h2>
      <p class="mx-auto mt-4 max-w-xl text-lg text-ink-300">
        The Community edition is free and complete. Self-host it on your own infrastructure or use
        the hosted app. No credit card required.
      </p>
      <div class="mx-auto mt-8 inline-block rounded-lg border border-ink-700 bg-ink-800 px-6 py-4 text-left">
        <p class="text-sm font-semibold text-ink-50">
          Community - free, self-hosted or hosted, no credit card.
        </p>
        <p class="mt-1 text-sm text-ink-300">Team - add SSO, RBAC, and audit export.</p>
      </div>
      <div class="mt-8 flex justify-center">
        <a
          :href="APP_URL"
          class="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-teal-400"
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
      </div>
      <p class="mt-6 text-sm text-ink-300">
        Or explore the product directly at
        <a :href="MODULO_RUN" class="text-teal-400 hover:text-teal-300">modulo.run</a>.
      </p>
    </div>
  </section>
</template>
