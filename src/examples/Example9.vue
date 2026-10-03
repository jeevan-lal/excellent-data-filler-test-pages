<template>
  <div>
    <div v-if="generatedRecordId" id="success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 rounded-lg text-xs mb-4">
      <strong class="font-semibold block text-emerald-950 dark:text-emerald-200 mb-0.5">Form submitted successfully! ID: {{ generatedRecordId }}</strong>
      <span>Thank you, your information has been received.</span>
    </div>

    <div v-if="generatedRecordId" id="record-token-container" class="p-4 bg-slate-900 text-white rounded-xl text-xs mb-6 border border-slate-800">
      <span class="text-slate-400 uppercase font-mono text-[10px] block mb-1">Confirmation Reference ID</span>
      <span class="font-mono text-base font-bold text-emerald-400 tracking-wider" id="extracted-record-id">
        {{ generatedRecordId }}
      </span>
      <p class="text-[11px] text-slate-400 mt-1">
        Please save this reference number for your records.
      </p>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="firstName9" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          First Name *
        </label>
        <input id="firstName9" name="firstName" v-model="form.firstName" required placeholder="Alex" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div>
        <label for="email9" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Email *
        </label>
        <input id="email9" name="email" v-model="form.email" type="email" required placeholder="alex@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div>
        <label for="clientName9" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Client Title
        </label>
        <input id="clientName9" name="client" v-model="form.client" placeholder="Acme Logistics Corp" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div class="pt-4 flex justify-end">
        <button type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
          Submit &amp; Generate ID
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  firstName: '',
  email: '',
  client: ''
});

const generatedRecordId = ref('');

function handleSubmit() {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  generatedRecordId.value = `REC-${randomNum}`;
}
</script>
