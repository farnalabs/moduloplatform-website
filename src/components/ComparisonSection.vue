<script setup lang="ts">
type Row = {
  capability: string
  modulo: string
  build: string
}

const rows: Row[] = [
  {
    capability: 'Enforced boundaries',
    modulo: 'Typed schema seams at every step, enforced out of the box.',
    build: 'Design and enforce your own validation on every agent output.',
  },
  {
    capability: 'Audit trail',
    modulo: 'Immutable, timestamped record of every agent action.',
    build: 'Build your own event log, storage, and retention.',
  },
  {
    capability: 'Human-in-the-loop',
    modulo: 'Deterministic gates plus HITL review where it matters.',
    build: 'Hand-roll approval flows and review UIs.',
  },
  {
    capability: 'Eval & evidence',
    modulo: 'Evals on every output, and autonomy that rises with evidence.',
    build: 'Instrument logging, metrics, and eval harnesses from scratch.',
  },
  {
    capability: 'Self-hosted',
    modulo: 'Self-hosted and source-available; your data stays on your infra.',
    build: 'Your infra and full control, but every layer is yours to build.',
  },
  {
    capability: 'Integrations',
    modulo: 'Typed connectors for GitHub, Linear, and Notion, all live now. Wiring is the easy part.',
    build: 'Hand-roll each API client, auth flow, and schema mapping.',
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
