<script setup lang="ts"></script>

<template>
  <section id="what-is" class="border-b border-ink-700/60" aria-labelledby="what-is-heading">
    <div class="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
      <div class="mt-6 grid gap-8 lg:grid-cols-2">
        <div class="space-y-4 text-ink-300">
          <h2 id="what-is-heading" class="text-3xl font-semibold tracking-tight text-ink-50">
            What is a software factory, and how do you run one you own?
          </h2>
          <p>
            A software factory is the production system around AI agents that takes work from intake to a shippable change. It isolates each run, gives agents narrow jobs, checks the result, routes risky work for review, and records what happened.
          </p>
          <p>
            Governance is a built-in property of that factory: the rules that define what agents may touch, when a human must review their work, and whether the output is trustworthy enough to move forward. The formal category is Agentic Delivery Governance platform. The factory is the market frame.
          </p>
          <p>
            The mechanism inside Modulo is graph engineering: designing the factory as an explicit graph of agents, tools, validators, and humans connected by typed schema seams and deterministic gates rather than one monolithic prompt. Modulo is the software factory you run on your infrastructure, with governance, evidence, and delivery built into the floor.
          </p>
        </div>
        <div class="rounded-lg border border-ink-700 bg-ink-800 p-6">
          <h3 class="text-lg font-semibold text-ink-50">What makes a factory yours</h3>
          <ul class="mt-4 space-y-3 text-ink-300">
            <li class="flex gap-3">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true"></span>
              <span><strong class="text-ink-100">Factory floor included.</strong> Intake, isolated runs, gates, evidence, and release automation are part of the system you run.</span>
            </li>
            <li class="flex gap-3">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true"></span>
              <span><strong class="text-ink-100">Evidence built in.</strong> Every action recorded in a tamper-evident trail you keep on your infrastructure.</span>
            </li>
            <li class="flex gap-3">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true"></span>
              <span><strong class="text-ink-100">Repeatable production.</strong> Agentic work becomes a managed, repeatable path from intake to merge.</span>
            </li>
            <li class="flex gap-3">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true"></span>
              <span><strong class="text-ink-100">Bring your own agents.</strong> We dispatch to whatever runtime or system you already use to run your agents, then manage the inputs and outputs around it.</span>
            </li>
            <li class="flex gap-3">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true"></span>
              <span><strong class="text-ink-100">You own the system.</strong> You own the prompts, schemas, evidence, and governance because the factory runs on your infrastructure.</span>
            </li>
            <li class="flex gap-3">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true"></span>
              <span><strong class="text-ink-100">Graph engineering native.</strong> The engine composes agents, tools, gates, and humans into one explicit factory graph - not a tangle of prompts.</span>
            </li>
          </ul>
          <p class="mt-6 text-sm text-ink-300">
            Connects to the tools your team already runs: GitHub, GitLab, Bitbucket, Jira, Linear,
            Confluence, Slack, Microsoft Teams, and 30+ more.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
