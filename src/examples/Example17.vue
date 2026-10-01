<template>
  <div>
    <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 mb-4">
      Notice: Submitting produces <strong>zero DOM changes and zero alerts</strong> to test runner timeout handling.
    </div>

    <form @submit.prevent="handleSilentSubmit" class="space-y-4">
      <div>
        <label for="silentField" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Silent Target
        </label>
        <input
          id="silentField"
          v-model="form.val"
          placeholder="Silent Payload"
          class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>

      <div class="pt-4 flex justify-end">
        <button
          type="submit"
          class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
        >
          Submit Silently
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  val: ''
});

function handleSilentSubmit() {
  // Silent on purpose for timeout testing
}
</script>
