<script setup lang="ts">
const integrations = ['GitHub', 'Linear', 'Notion'] as const
</script>

<template>
  <section id="what-is" class="border-b border-ink-700/60" aria-labelledby="what-is-heading">
    <div class="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
      <h2 id="what-is-heading" class="text-3xl font-semibold tracking-tight text-ink-50">
        What is an AI orchestration platform?
      </h2>
      <div class="mt-6 grid gap-8 lg:grid-cols-2">
        <div class="space-y-4 text-ink-300">
          <p>
            An AI orchestration platform is the layer that sits between your AI agents and the
            tools they need to do real work. Agents are good at reasoning and generating output.
            They are bad at the surrounding logistics: calling the right tool with the right data,
            retrying when a call fails, keeping humans in the loop, and recording what happened.
          </p>
          <p>
            Orchestration is the discipline of wiring those steps into a reliable, observable
            process. Instead of one monolithic prompt, you build a pipeline: a sequence of atomic
            agents, each with a narrow job, connected by rules about what happens next.
          </p>
          <p>
            Modulo is an orchestration platform built for the software development lifecycle. It
            gives teams a visual, composable pipeline of agents that move work across the tools
            they already use.
          </p>
        </div>
        <div class="rounded-lg border border-ink-700 bg-ink-800 p-6">
          <h3 class="text-lg font-semibold text-ink-50">The category Modulo sits in</h3>
          <ul class="mt-4 space-y-3 text-ink-300">
            <li class="flex gap-3">
              <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true"></span>
              <span><strong class="text-ink-100">Not a chatbot builder.</strong> It composes agents into pipelines, not single conversational apps.</span>
            </li>
            <li class="flex gap-3">
              <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true"></span>
              <span><strong class="text-ink-100">Not a generic automation tool.</strong> It is typed, evaluable, and built for governed work.</span>
            </li>
            <li class="flex gap-3">
              <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true"></span>
              <span><strong class="text-ink-100">Not a black box.</strong> You own the prompts, schemas, and governance; Modulo runs them.</span>
            </li>
          </ul>
          <p class="mt-6 text-sm text-ink-400">
            Connects to the tools your team already runs:
            <span v-for="(name, i) in integrations" :key="name">
              <span v-if="i > 0" class="text-ink-600">, </span>{{ name }}
            </span>.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
