<script setup lang="ts">
const steps = [
  {
    title: 'Compose',
    body: 'Assemble atomic agents into a visual pipeline. Each agent has one job; edges define what happens next.',
  },
  {
    title: 'Connect',
    body: 'Bind your real tools. Modulo speaks to GitHub, Linear, and Notion through typed, swappable connectors.',
  },
  {
    title: 'Govern',
    body: 'Add human-in-the-loop gates where decisions matter, and keep an immutable record of every agent action.',
  },
  {
    title: 'Improve',
    body: 'Run automatic evaluations on every output and inspect any run, so the pipeline gets better over time.',
  },
] as const
</script>

<template>
  <section
    id="solution"
    class="border-b border-ink-700/60"
    aria-labelledby="solution-heading"
  >
    <div class="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
      <h2 id="solution-heading" class="text-3xl font-semibold tracking-tight text-ink-50">
        How Modulo handles it
      </h2>
      <p class="mt-4 max-w-2xl text-ink-300">
        Modulo turns orchestration into configuration, not custom code. The same four steps take a
        manual process from idea to a governed, auditable pipeline:
      </p>
      <ol class="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <li
          v-for="(step, i) in steps"
          :key="step.title"
          class="relative rounded-lg border border-ink-700 bg-ink-800 p-6"
        >
          <span
            class="absolute -top-3 left-6 inline-flex h-7 w-7 items-center justify-center rounded-full bg-teal-500 text-sm font-semibold text-ink-900"
            aria-hidden="true"
          >
            {{ i + 1 }}
          </span>
          <h3 class="mt-2 text-lg font-semibold text-ink-50">{{ step.title }}</h3>
          <p class="mt-2 text-ink-300">{{ step.body }}</p>
        </li>
      </ol>
      <p class="mt-8 max-w-2xl text-ink-300">
        The result is a composable pipeline of atomic AI agents that automates the boring,
        repetitive parts of your SDLC and leaves the judgment calls to your team.
      </p>
    </div>
  </section>
</template>
