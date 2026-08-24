<script setup lang="ts">
const steps = [
  {
    title: 'Define',
    body: 'Typed schema seams at every boundary. Inputs and outputs validate against schemas before anything moves, so agents cannot pass garbage downstream.',
  },
  {
    title: 'Gate',
    body: 'Deterministic gates and human-in-the-loop where it matters. Risky work pauses for review with the evidence attached.',
  },
  {
    title: 'Audit',
    body: 'Every action recorded in a tamper-evident trail. Timestamped, org-scoped, and inspectable after the fact.',
  },
  {
    title: 'Improve',
    body: 'Evals on every output you want to measure, and autonomy that rises with evidence. Trust is earned, not assumed.',
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
        Modulo turns governance into configuration, not custom code. The same four moves take a
        manual process from idea to a governed, auditable agent graph:
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
        The result is a governed graph of atomic AI agents that automates your SDLC work with
        enforced boundaries, human gates where it matters, and an audit trail you can trust.
      </p>
    </div>
  </section>
</template>
