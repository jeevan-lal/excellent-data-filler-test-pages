<template>
  <div>
    <div
      v-if="saved"
      class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 rounded-lg text-xs text-emerald-950 dark:text-emerald-300 mb-4"
    >
      <strong>Saved Record Container:</strong> Record persisted to DOM.
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="hybridName" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Registration Subject
        </label>
        <input
          id="hybridName"
          v-model="form.val"
          required
          placeholder="Subject 10-1"
          class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>

      <div class="pt-4 flex justify-end">
        <button
          type="submit"
          class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
        >
          Submit Dual Trigger
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  val: ''
});

const saved = ref(false);

function handleSubmit() {
  saved.value = true;
  window.alert('Warning: Non-fatal notice dispatched.');
}
</script>
