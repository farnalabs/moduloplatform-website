<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

const hasError = ref(false)
onErrorCaptured((err) => {
  console.error('[moduloplatform] uncaught error:', err)
  hasError.value = true
  return false
})
</script>

<template>
  <a
    href="#main-content"
    class="block h-px w-px overflow-hidden whitespace-nowrap bg-ink-900 text-sm text-teal-500 focus-visible:h-auto focus-visible:w-auto focus-visible:rounded-lg focus-visible:px-4 focus-visible:py-2"
  >
    Skip to main content
  </a>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main id="main-content" tabindex="-1" class="flex-1">
      <router-view v-if="!hasError" />
      <div v-else class="mx-auto max-w-content px-4 py-20 text-center">
        <h1 class="text-2xl font-semibold text-ink-50">Something went wrong</h1>
        <p class="mt-4 text-ink-300">Please reload the page. If the problem persists, visit <a href="https://modulo.run" class="text-teal-400 hover:text-teal-300">modulo.run</a>.</p>
      </div>
    </main>
    <AppFooter />
  </div>
</template>
