<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden shadow-inner">
      <div class="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
        Embedded Frame 1
      </div>
      <iframe src="/frames/19-left" class="w-full h-[480px] border-0 bg-white" title="Embedded Frame 1"></iframe>
    </div>

    <div class="border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden shadow-inner">
      <div class="bg-slate-100 dark:bg-slate-800 px-3 py-1.5 text-[11px] font-bold text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
        Embedded Frame 2
      </div>
      <iframe src="/frames/19-right" class="w-full h-[480px] border-0 bg-white" title="Embedded Frame 2"></iframe>
    </div>
  </div>
</template>

<script setup>
// Component for Example 19: Two iframes on single page
</script>
