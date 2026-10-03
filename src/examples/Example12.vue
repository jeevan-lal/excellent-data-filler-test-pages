<template>
  <div>
    <div class="mb-4 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
      <div>
        <span class="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded mb-2">
          Stage 1: Primary Applicant
        </span>
        <h3 class="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight">
          Applicant Identification
        </h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Complete basic identification before proceeding to Part 2.
        </p>
      </div>
      <div class="self-start sm:self-auto shrink-0">
        <ExampleDownloadDropdown scenario-id="12" display-id="Example 12" />
      </div>
    </div>

    <form @submit.prevent="handleNext">
      <div class="mb-4">
        <label for="firstName12" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
          First Name *
        </label>
        <input id="firstName12" name="firstName" v-model="name" type="text" required placeholder="Alex" class="w-full px-4 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600" />
      </div>

      <div class="mb-6">
        <label for="email12" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
          Email *
        </label>
        <input id="email12" name="email" v-model="email" type="email" required placeholder="alex@example.com" class="w-full px-4 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600" />
      </div>

      <div class="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <router-link to="/" class="text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-300">
          Cancel
        </router-link>

        <button type="submit" id="step1-submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-xs px-6 py-2.5 rounded-lg shadow-xs transition-colors cursor-pointer">
          Continue to Step 2
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import ExampleDownloadDropdown from '../components/forms/ExampleDownloadDropdown.vue';

const router = useRouter();
const name = ref('');
const email = ref('');

function handleNext() {
  sessionStorage.setItem('ed_step1_data', JSON.stringify({ name: name.value, email: email.value }));
  router.push('/examples/13');
}
</script>
