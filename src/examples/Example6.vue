<template>
  <div>
    <!-- Full Page Loading Overlay -->
    <div v-if="loading" id="full-page-loading" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex flex-col items-center justify-center z-50 transition-opacity">
      <div class="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 flex flex-col items-center max-w-xs w-full text-center mx-4">
        <span class="inline-block animate-spin w-9 h-9 border-3 border-blue-600 border-t-transparent rounded-full mb-3.5"></span>
        <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100">
          Loading...
        </h4>
        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Processing request, please wait...
        </p>
      </div>
    </div>

    <!-- Success Notice -->
    <div v-if="ajaxSuccess" id="success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 rounded-lg text-xs mb-4">
      <strong class="font-semibold block text-emerald-950 dark:text-emerald-200 mb-0.5">Form submitted successfully!</strong>
      <span>Thank you, your information has been received.</span>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="firstName6" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          First Name *
        </label>
        <input id="firstName6" name="firstName" v-model="form.firstName" required placeholder="Alex" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div>
        <label for="email6" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Email *
        </label>
        <input id="email6" name="email" v-model="form.email" type="email" required placeholder="alex@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div>
        <label for="ajaxQuery6" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Task Query
        </label>
        <input id="ajaxQuery6" name="query" v-model="form.query" placeholder="Process batch #402" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div class="pt-4 flex justify-end">
        <button type="submit" :disabled="loading" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer disabled:opacity-60 flex items-center gap-2">
          <span v-if="loading" class="inline-block animate-spin w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full"></span>
          <span>{{ loading ? 'Loading...' : 'Submit Request' }}</span>
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
  query: ''
});

const loading = ref(false);
const ajaxSuccess = ref(false);

async function handleSubmit() {
  loading.value = true;
  ajaxSuccess.value = false;

  try {
    await fetch('/api/example6', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    });
  } catch (error) {
    // Fallback for offline client testing
    await new Promise((resolve) => setTimeout(resolve, 800));
  } finally {
    loading.value = false;
    ajaxSuccess.value = true;
  }
}
</script>
