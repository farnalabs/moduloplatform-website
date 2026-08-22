<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
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
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>
