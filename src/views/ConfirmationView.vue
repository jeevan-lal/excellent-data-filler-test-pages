<template>
  <div class="min-h-screen flex flex-col bg-[#f8fafd] dark:bg-[#0b0f19] px-4 py-6 transition-colors">
    <FormTopNav scenario-name="Example 3 - Confirmation Landing" />

    <main class="max-w-2xl mx-auto w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-8 sm:p-10 my-8 text-center transition-colors">
      <div class="w-12 h-12 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>

      <div id="success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 rounded-lg text-xs mb-6 max-w-md mx-auto text-left">
        <strong class="font-semibold block text-emerald-950 dark:text-emerald-200 mb-0.5">Form submitted successfully!</strong>
        <span>Thank you, your information has been received and confirmed.</span>
      </div>

      <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-2">
        Submission Confirmed
      </h2>
      <p class="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed max-w-md mx-auto">
        Your submission was received and redirected to this confirmation landing page.
      </p>

      <div v-if="submissionData" class="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg p-4 text-left font-mono text-xs text-slate-700 dark:text-slate-200 mb-6 overflow-x-auto">
        <pre>{{ submissionData }}</pre>
      </div>

      <router-link
        to="/scenarios/3"
        class="inline-flex items-center px-4 py-2 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors"
      >
        Run Example 3 Again
      </router-link>
    </main>

    <TestBenchFooter label="Example 3 Confirmation Sandbox" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import FormTopNav from '../components/forms/FormTopNav.vue';
import TestBenchFooter from '../components/forms/TestBenchFooter.vue';

const submissionData = ref('');

onMounted(() => {
  const data = sessionStorage.getItem('ed_example3_payload');
  if (data) {
    try {
      submissionData.value = JSON.stringify(JSON.parse(data), null, 2);
    } catch {
      submissionData.value = data;
    }
  }
});
</script>
