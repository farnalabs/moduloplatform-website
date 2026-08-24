<script setup lang="ts">
import { APP_URL, GITHUB_URL, MODULO_RUN } from '@/config'
</script>

<template>
  <section id="cta" class="relative overflow-hidden" aria-labelledby="cta-heading">
    <div class="mx-auto max-w-content px-4 py-20 text-center sm:px-6 sm:py-28">
      <h2 id="cta-heading" class="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-ink-50">
        Start building governed agent graphs free
      </h2>
      <p class="mx-auto mt-4 max-w-2xl text-lg text-ink-300">
        The Community edition is free and complete. Self-host it on your own infrastructure. No
        credit card required.
      </p>
      <p class="mt-6 text-sm text-ink-300">Looking for SSO, RBAC, and audit export? Check out the <a :href="`${MODULO_RUN}/pricing`" class="text-teal-400 hover:text-teal-300">Team plan on our Pricing page</a>.</p>
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
        Prefer to run it yourself? The complete source is on
        <a :href="GITHUB_URL" class="text-teal-400 hover:text-teal-300">GitHub</a>.
      </p>
    </div>
  </section>
</template>
