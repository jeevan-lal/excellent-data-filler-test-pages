<template>
  <div>
    <div
      v-if="polling"
      class="p-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-center mb-4"
    >
      <span class="inline-block animate-spin w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full mb-2"></span>
      <p class="text-xs font-medium text-slate-700 dark:text-slate-300">
        Polling backend for final execution status (3s delay)...
      </p>
    </div>

    <div
      v-else-if="pollingDone"
      id="polling-completion-target"
      class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-300 rounded-lg text-xs mb-4"
    >
      <strong>Polling Complete:</strong> Job completed after 3000ms delay.
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="pollName" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Task Identifier
        </label>
        <input
          id="pollName"
          v-model="form.id"
          required
          placeholder="ASYNC-JOB-300"
          class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>

      <div class="pt-4 flex justify-end">
        <button
          :disabled="polling"
          type="submit"
          class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer disabled:opacity-60"
        >
          Trigger Polling Run
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  id: ''
});

const polling = ref(false);
const pollingDone = ref(false);

function handleSubmit() {
  polling.value = true;
  setTimeout(() => {
    polling.value = false;
    pollingDone.value = true;
  }, 3000);
}
</script>
