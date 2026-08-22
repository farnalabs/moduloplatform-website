<script setup lang="ts">
const problems = [
  {
    title: 'Glue code between agents and tools',
    body: 'Every agent needs to authenticate, format, and hand off data to GitHub, Linear, Notion, and your CI. That wiring is bespoke, repetitive, and easy to get wrong.',
  },
  {
    title: 'Retries, failures, and idempotency',
    body: 'A single flaky API call should not stall a pipeline. You end up building your own retry, backoff, and deduplication logic before any real work happens.',
  },
  {
    title: 'Evals and quality gates',
    body: 'Without automatic evaluation, you cannot tell whether an agentic pipeline is getting better or worse. Most teams ship agents with no way to measure output quality.',
  },
  {
    title: 'Observability and audit',
    body: 'When an agent changes a ticket or merges a PR, someone needs to see what it did and why. Building that trail from scratch is a project in itself.',
  },
] as const
</script>

<template>
  <section
    id="problem"
    class="border-b border-ink-700/60 bg-ink-950/40"
    aria-labelledby="problem-heading"
  >
    <div class="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
      <h2 id="problem-heading" class="text-3xl font-semibold tracking-tight text-ink-50">
        The boilerplate you should not be writing
      </h2>
      <p class="mt-4 max-w-2xl text-ink-300">
        Before a single line of agent logic adds value, teams sink weeks into infrastructure that
        has nothing to do with their product. This is the boilerplate Modulo handles:
      </p>
      <ul class="mt-8 grid gap-5 sm:grid-cols-2">
        <li
          v-for="item in problems"
          :key="item.title"
          class="rounded-lg border border-ink-700 bg-ink-800 p-6"
        >
          <h3 class="text-lg font-semibold text-ink-50">{{ item.title }}</h3>
          <p class="mt-2 text-ink-300">{{ item.body }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
