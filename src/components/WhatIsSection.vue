<script setup lang="ts"></script>

<template>
  <section id="what-is" class="border-b border-ink-700/60" aria-labelledby="what-is-heading">
    <div class="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
      <h2 id="what-is-heading" class="text-3xl font-semibold tracking-tight text-ink-50">
        What is an agent governance platform?
      </h2>
      <div class="mt-6 grid gap-8 lg:grid-cols-2">
        <div class="space-y-4 text-ink-300">
          <p>
            An agent governance platform is the layer that gives your agents boundaries. Agents
            are good at reasoning and generating output. They are bad at knowing what they are
            allowed to touch, when a human must review their work, and whether the output they
            produced is actually trustworthy.
          </p>
          <p>
            Governance is the discipline of enforcing those boundaries. Instead of one monolithic
            prompt with no oversight, you build a pipeline: a sequence of atomic agents, each
            with a narrow job, connected by typed schema seams, deterministic gates, and an
            immutable record of everything that happens.
          </p>
          <p>
            Modulo is an agent governance platform built for the software development lifecycle.
            It gives teams a visual, composable pipeline of agents that move work across the
            tools they already use, with every action audited.
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
              <span><strong class="text-ink-100">Not a workflow tool.</strong> Sequencing steps is table stakes; enforcing boundaries and keeping an audit trail is the point.</span>
            </li>
            <li class="flex gap-3">
              <span class="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true"></span>
              <span><strong class="text-ink-100">Not a black box.</strong> You own the prompts, schemas, and governance; Modulo runs them.</span>
            </li>
          </ul>
          <p class="mt-6 text-sm text-ink-300">
            Connects to the tools your team already runs: GitHub, Linear, Notion (all live, no
            roadmap).
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
