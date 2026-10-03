<template>
  <div>
    <div class="mb-4 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
      <div>
        <span class="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded mb-2">
          Stage 2: Delivery &amp; Address
        </span>
        <h3 class="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          Delivery Specifications
        </h3>
        <p v-if="step1Summary" class="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Carry-over from Stage 1: <span class="font-medium text-slate-700 dark:text-slate-300">{{ step1Summary }}</span>
        </p>
      </div>
      <div class="self-start sm:self-auto shrink-0">
        <ExampleDownloadDropdown scenario-id="13" display-id="Example 13" />
      </div>
    </div>

    <div v-if="finished" id="success-notice" class="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 text-xs mb-6">
      <strong class="font-semibold block text-emerald-950 dark:text-emerald-200 mb-0.5">Form submitted successfully!</strong>
      <span>Thank you, your information has been received.</span>
    </div>

    <form v-else @submit.prevent="handleComplete" class="space-y-4">
      <div>
        <label for="firstName13" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
          First Name *
        </label>
        <input id="firstName13" name="firstName" v-model="firstName" type="text" required placeholder="Alex" class="w-full px-4 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600" />
      </div>

      <div>
        <label for="email13" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
          Email *
        </label>
        <input id="email13" name="email" v-model="email" type="email" required placeholder="alex@example.com" class="w-full px-4 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600" />
      </div>

      <div>
        <label for="step2Address" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
          Delivery Address *
        </label>
        <input id="step2Address" name="step2Address" v-model="address" type="text" required placeholder="124 Silicon Avenue, Tech Park" class="w-full px-4 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600" />
      </div>

      <div>
        <label for="step2Postal" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
          Postal Code *
        </label>
        <input id="step2Postal" name="step2Postal" v-model="postalCode" type="text" required placeholder="560100" class="w-full px-4 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600" />
      </div>

      <div class="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <router-link to="/examples/12" class="text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-300">
          Back to Step 1
        </router-link>

        <button type="submit" id="step2-submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-xs px-6 py-2.5 rounded-lg shadow-xs transition-colors cursor-pointer">
          Finalize Submission
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ExampleDownloadDropdown from '../components/forms/ExampleDownloadDropdown.vue';

const firstName = ref('');
const email = ref('');
const address = ref('');
const postalCode = ref('');
const step1Summary = ref('');
const finished = ref(false);

onMounted(() => {
  const data = sessionStorage.getItem('ed_step1_data');
  if (data) {
    try {
      const parsed = JSON.parse(data);
      firstName.value = parsed.name || '';
      email.value = parsed.email || '';
      step1Summary.value = `${parsed.name} (${parsed.email})`;
    } catch {
      step1Summary.value = data;
    }
  }
});

function handleComplete() {
  finished.value = true;
}
</script>
