<script setup lang="ts">
const problems = [
  {
    title: 'No factory boundaries',
    body: 'Agents can pass garbage downstream with no record. Without schema seams at every step, bad output flows straight into your tools and your production systems.',
  },
  {
    title: 'No review gates',
    body: 'Agents ship unreviewed work. Without a deterministic gate or a human in the loop, nothing stands between an agent output and the work that matters.',
  },
  {
    title: 'No owned evidence',
    body: 'You cannot say what an agent did or why. When something breaks or ships wrong, there is no verifiable record of the action that caused it.',
  },
  {
    title: 'No path to autonomy',
    body: 'You cannot tell if the pipeline is getting better. Without evals and run history, quality is a guess and autonomy cannot be earned.',
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
        Your factory has agents, but not yet a production system you can trust.
      </h2>
      <p class="mt-4 max-w-2xl text-ink-300">
        Agents can already write code, change configuration, review pull requests, and cut
        releases. The limiting factor is not capability. It is whether the factory around those
        agents has clear boundaries, evidence, review, and a measured path to more autonomy.
        Without those built-in properties, the factory becomes a liability. These are the gaps Modulo closes:
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
