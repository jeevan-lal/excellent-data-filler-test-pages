<template>
  <div>
    <div
      v-if="generatedRecordId"
      id="record-token-container"
      class="p-4 bg-slate-900 text-white rounded-xl text-xs mb-6 border border-slate-800"
    >
      <span class="text-slate-400 uppercase font-mono text-[10px] block mb-1">Generated Record Token</span>
      <span class="font-mono text-base font-bold text-emerald-400 tracking-wider" id="extracted-record-id">
        {{ generatedRecordId }}
      </span>
      <p class="text-[11px] text-slate-400 mt-1">
        This token can be scraped by the runner and recorded in the workbook.
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="clientName9" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Client Title
        </label>
        <input
          id="clientName9"
          v-model="form.client"
          required
          placeholder="Acme Logistics Corp"
          class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>

      <div class="pt-4 flex justify-end">
        <button
          type="submit"
          class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
        >
          Generate &amp; Register Token
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  client: ''
});

const generatedRecordId = ref('');

function handleSubmit() {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  generatedRecordId.value = `REC-${randomNum}`;
}
</script>
