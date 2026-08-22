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
        href="/"
        class="flex shrink-0 items-center gap-2 rounded-lg text-ink-50"
      >
        <svg
          class="h-6 w-6 text-ink-900"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect width="100" height="100" rx="12" fill="currentColor" />
          <g
            stroke="#00FFD1"
            stroke-width="7"
            fill="none"
            stroke-linejoin="round"
            stroke-linecap="round"
          >
            <line x1="30" y1="84.64" x2="70" y2="15.36" />
            <polygon points="36,28 31,36.66 21,36.66 16,28 21,19.34 31,19.34" />
            <polygon points="84,72 79,80.66 69,80.66 64,72 69,63.34 79,63.34" />
          </g>
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
