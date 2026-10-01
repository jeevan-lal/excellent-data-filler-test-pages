<template>
  <div class="max-w-3xl mx-auto w-full mb-6">
    <div class="bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-900/50 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
      <div class="flex items-start sm:items-center gap-3">
        <div class="w-6 h-6 rounded-full border border-blue-500/40 dark:border-blue-500/60 text-blue-700 dark:text-blue-400 flex items-center justify-center shrink-0 font-serif font-bold text-xs bg-white/60 dark:bg-slate-800/80">
          i
        </div>
        <p class="text-xs text-blue-950 dark:text-blue-200 font-medium leading-relaxed">
          {{ text }}
        </p>
      </div>

      <div class="shrink-0 self-end sm:self-auto bg-white dark:bg-slate-800 border border-blue-200/70 dark:border-slate-700 rounded-lg px-3 py-1.5 min-w-[70px] text-center shadow-2xs">
        <span class="block text-[9px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400">
          {{ statusLabel }}
        </span>
        <span class="block text-xs font-bold text-slate-800 dark:text-slate-100">
          {{ statusValue }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: 'Selects trigger asynchronous mock fetch on change (200-300ms delay). Ideal for extension timing calibration.'
  },
  statusLabel: {
    type: String,
    default: 'DOM'
  },
  statusValue: {
    type: String,
    default: 'Ready'
  }
});
</script>
