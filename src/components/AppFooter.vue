<script setup lang="ts">
const MODULO_RUN = 'https://modulo.run'
const year = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-ink-700/60 bg-ink-950">
    <div
      class="mx-auto flex max-w-content flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6"
    >
      <div class="flex flex-col gap-1">
        <span class="text-sm font-semibold text-ink-50">Modulo</span>
        <p class="text-sm text-ink-300">
          The AI orchestration platform. We handle the boilerplate. You handle the remainder.
        </p>
      </div>
      <nav aria-label="Footer" class="flex flex-wrap items-center gap-x-6 gap-y-2">
        <a
          :href="MODULO_RUN"
          class="text-sm text-ink-300 hover:text-teal-400"
        >
          modulo.run
        </a>
        <a
          :href="`${MODULO_RUN}/privacy`"
          class="text-sm text-ink-300 hover:text-teal-400"
        >
          Privacy
        </a>
      </nav>
    </div>
    <div class="mx-auto max-w-content px-4 pb-8 sm:px-6">
      <p class="text-xs text-ink-400">
        &copy; {{ year }} Modulo. This is the top-of-funnel site for the Modulo platform; the
        product lives at modulo.run.
      </p>
    </div>
  </footer>
</template>
