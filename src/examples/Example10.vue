<template>
  <div>
    <div class="space-y-3 mb-6">
      <div class="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs text-emerald-950 dark:text-emerald-300">
        <span class="font-bold block mb-0.5">Batch Record 1 of 2: Committed</span>
        Entity #8819 saved to primary storage.
      </div>
      <div class="p-3 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 rounded-lg text-xs text-red-950 dark:text-red-300">
        <span class="font-bold block mb-0.5">Batch Record 2 of 2: Validation Failure</span>
        Conflict: Duplicate tax registration code provided.
      </div>
    </div>

    <form @submit.prevent="handleReset" class="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
      <button
        type="submit"
        class="bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
      >
        Re-run Batch Summary
      </button>
    </form>
  </div>
</template>

<script setup>
function handleReset() {
  window.location.reload();
}
</script>
