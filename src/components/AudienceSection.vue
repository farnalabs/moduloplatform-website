<script setup lang="ts">
const audiences = [
  {
    title: 'Platform & DevEx teams',
    body: 'Own the internal tooling and want to give product teams a governed, self-serve way to automate SDLC work without abandoning oversight.',
  },
  {
    title: 'AI product teams',
    body: 'Are shipping agents and need evals, audit, and human gates without becoming an infra team.',
  },
  {
    title: 'Agencies',
    body: 'Run delivery for multiple clients and want repeatable, auditable pipelines they can stand up fast.',
  },
  {
    title: 'Enterprises',
    body: 'Require self-hosting, audit trails, and human-in-the-loop control before they can run agents at all.',
  },
] as const
</script>

<template>
  <section id="audience" class="border-b border-ink-700/60" aria-labelledby="audience-heading">
    <div class="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
      <h2 id="audience-heading" class="text-3xl font-semibold tracking-tight text-ink-50">
        Who it is for
      </h2>
      <p class="mt-4 max-w-2xl text-ink-300">
        Modulo is built for teams that want control over their agents without building the
        governance stack themselves.
      </p>
      <ul class="mt-8 grid gap-5 sm:grid-cols-2">
        <li
          v-for="item in audiences"
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
