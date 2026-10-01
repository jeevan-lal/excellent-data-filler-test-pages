<template>
  <div
    class="group relative bg-white dark:bg-slate-900 rounded-xl border border-slate-200/90 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 p-5 shadow-[0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_4px_14px_rgba(0,0,0,0.25)] transition-all duration-200 flex flex-col justify-between"
  >
    <!-- Card Header / Badges -->
    <div>
      <div class="flex items-center justify-between gap-2">
        <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-100/60 dark:border-blue-900/40 tracking-tight">
          {{ scenario.displayId }}
        </span>
        <span
          :class="[
            'inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium tracking-tight',
            tagClasses
          ]"
        >
          {{ scenario.tag }}
        </span>
      </div>

      <!-- Card Title & Description -->
      <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100 mt-3.5 mb-1.5 leading-snug group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
        {{ scenario.title }}
      </h3>
      <p class="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
        {{ scenario.description }}
      </p>
    </div>

    <!-- Card Footer -->
    <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
      <span class="font-mono text-[11px] text-slate-400 dark:text-slate-500 tracking-tight">
        {{ scenario.mechanism }}
      </span>

      <router-link
        :to="scenario.path"
        class="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 transition-colors cursor-pointer group-hover:underline"
      >
        <span>Open Form</span>
        <svg class="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  scenario: {
    type: Object,
    required: true
  }
});

const tagClasses = computed(() => {
  switch (props.scenario.tagVariant) {
    case 'amber':
      return 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/60 dark:border-amber-900/50';
    case 'emerald':
      return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-900/50';
    case 'purple':
      return 'bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 border border-purple-200/60 dark:border-purple-900/50';
    case 'sky':
      return 'bg-sky-50 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300 border border-sky-200/60 dark:border-sky-900/50';
    case 'gray':
    default:
      return 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700';
  }
});
</script>
