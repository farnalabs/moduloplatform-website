<script setup lang="ts">
const DEMO_URL = 'https://app.modulo.run'
</script>

<template>
  <section id="demo" class="relative overflow-hidden" aria-labelledby="demo-heading">
    <div class="mx-auto max-w-content px-4 py-20 text-center sm:px-6 sm:py-28">
      <h2 id="demo-heading" class="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-ink-50">
        See Modulo run your SDLC
      </h2>
      <p class="mx-auto mt-4 max-w-xl text-lg text-ink-300">
        The fastest way to understand an AI orchestration platform is to watch one move work across
        your tools. Request a demo and we will walk through a pipeline on your stack.
      </p>
      <div class="mt-8 flex justify-center">
        <a
          :href="DEMO_URL"
          class="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-6 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-teal-400"
        >
          Request a demo
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
        <a href="https://modulo.run" class="text-teal-400 hover:text-teal-300">modulo.run</a>.
      </p>
    </div>
  </section>
</template>
