<script setup lang="ts">
import { MODULO_RUN } from '@/config'
</script>

<template>
  <header
    class="sticky top-0 z-40 border-b border-ink-700/60 bg-ink-900/80 backdrop-blur"
  >
    <div
      class="mx-auto flex max-w-content items-center justify-between gap-3 px-4 py-3 sm:gap-6 sm:px-6"
    >
      <a
        :href="MODULO_RUN"
        class="flex shrink-0 items-center gap-2 rounded-lg text-ink-50"
      >
        <svg
          class="h-6 w-6 text-teal-500"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.8" />
        </svg>
        <span class="text-lg font-semibold tracking-tight">Modulo</span>
      </a>
      <nav aria-label="Primary">
        <a
          :href="MODULO_RUN"
          class="rounded-lg px-3 py-2 text-sm font-medium text-ink-100 hover:text-teal-400"
        >
          Go to modulo.run
        </a>
      </nav>
    </div>
  </header>
</template>
