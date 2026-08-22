<script setup lang="ts">
type Row = {
  capability: string
  modulo: string
  build: string
}

const rows: Row[] = [
  {
    capability: 'Pipeline composition',
    modulo: 'Visual, versioned pipelines of atomic agents out of the box.',
    build: 'Design your own graph format, executor, and state machine.',
  },
  {
    capability: 'Agent orchestration',
    modulo: 'Dispatch, retries, and handoffs handled by the platform.',
    build: 'Write scheduling, retry, and failure-handling code yourself.',
  },
  {
    capability: 'Eval & observability',
    modulo: 'Automatic evaluations and per-run inspection built in.',
    build: 'Instrument logging, metrics, and eval harnesses from scratch.',
  },
  {
    capability: 'Integrations',
    modulo: 'Typed, swappable connectors for GitHub, Linear, Notion.',
    build: 'Hand-roll each API client, auth flow, and schema mapping.',
  },
  {
    capability: 'Time to value',
    modulo: 'Stand up a governed pipeline in hours.',
    build: 'Weeks of infrastructure before the first agent runs.',
  },
]
</script>

<template>
  <section
    id="comparison"
    class="border-b border-ink-700/60 bg-ink-950/40"
    aria-labelledby="comparison-heading"
  >
    <div class="mx-auto max-w-content px-4 py-16 sm:px-6 sm:py-20">
      <h2 id="comparison-heading" class="text-3xl font-semibold tracking-tight text-ink-50">
        Modulo vs building it in-house
      </h2>
      <p class="mt-4 max-w-2xl text-ink-300">
        An honest comparison. Modulo is not magic, and building in-house is not wrong. It is a
        trade-off between speed and total control.
      </p>
      <div class="mt-8 overflow-x-auto">
        <table class="w-full min-w-[640px] border-collapse text-left">
          <caption class="sr-only">
            Comparison of capabilities between Modulo and a build-in-house approach.
          </caption>
          <thead>
            <tr class="border-b border-ink-600">
              <th scope="col" class="py-3 pr-4 text-sm font-semibold text-ink-100">
                Capability
              </th>
              <th scope="col" class="py-3 pr-4 text-sm font-semibold text-teal-400">
                Modulo
              </th>
              <th scope="col" class="py-3 text-sm font-semibold text-ink-100">
                Build in-house
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="row in rows"
              :key="row.capability"
              class="border-b border-ink-700/60"
            >
              <th scope="row" class="py-4 pr-4 text-sm font-medium text-ink-50">
                {{ row.capability }}
              </th>
              <td class="py-4 pr-4 text-sm text-ink-300">{{ row.modulo }}</td>
              <td class="py-4 text-sm text-ink-300">{{ row.build }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
