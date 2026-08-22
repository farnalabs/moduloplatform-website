<script setup lang="ts">
const DEMO_URL = 'https://app.modulo.run'
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
        AI orchestration platform
      </p>
      <h1
        id="hero-heading"
        class="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-ink-50 sm:text-5xl"
      >
        The AI orchestration platform for teams who would rather build product than boilerplate.
      </h1>
      <p class="mt-6 max-w-2xl text-lg text-ink-300">
        Modulo lets you compose atomic AI agents into a visual, governed pipeline that automates
        the work between your tools. Self-hosted and source-available, so your prompts and data
        stay in your infrastructure. Connect GitHub today — Linear and Notion are on the roadmap
        — then let the agents handle the glue so your team can focus on the work that matters.
      </p>
      <div class="mt-8 flex flex-wrap items-center gap-4">
        <a
          :href="DEMO_URL"
          class="inline-flex items-center gap-2 rounded-lg bg-teal-500 px-5 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-teal-400"
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
        <a
          href="#what-is"
          class="inline-flex items-center gap-2 rounded-lg border border-ink-700 px-5 py-3 text-sm font-medium text-ink-100 hover:border-ink-600 hover:text-ink-50"
        >
          What is an AI orchestration platform?
        </a>
      </div>
    </div>
  </section>
</template>
