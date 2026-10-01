<template>
  <div class="max-w-3xl mx-auto w-full flex items-center justify-between py-4">
    <router-link
      to="/"
      class="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
    >
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
      <span>Back to Scenarios</span>
    </router-link>

    <div class="inline-flex items-center gap-2 bg-blue-50/80 dark:bg-blue-950/50 border border-blue-200/70 dark:border-blue-900/60 rounded-full px-3.5 py-1 shadow-2xs">
      <span class="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
      <span class="text-xs font-semibold text-blue-900 dark:text-blue-200 tracking-tight">
        Testing: {{ scenarioName }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  scenarioName: {
    type: String,
    required: true
  }
});
</script>
