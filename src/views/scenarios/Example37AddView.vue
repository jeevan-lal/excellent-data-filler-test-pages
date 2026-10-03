<template>
  <div class="min-h-screen flex flex-col bg-[#f8fafd] dark:bg-[#0b0f19] px-4 py-6 transition-colors">
    <FormTopNav scenario-name="Example 37 - Add Email (Secondary Step)" />

    <main class="max-w-xl mx-auto w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 sm:p-10 my-4 transition-colors space-y-6">
      <!-- Header -->
      <div class="border-b border-slate-100 dark:border-slate-800 pb-4 flex items-center justify-between">
        <div>
          <span class="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded mb-1">
            Example 37 &bull; Secondary Page
          </span>
          <h2 class="text-xl font-bold text-slate-900 dark:text-slate-100">
            Insert New Email Address
          </h2>
        </div>
        <span class="font-mono text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1.5 rounded">
          /examples/37/add
        </span>
      </div>

      <!-- Specific Required Note Banner -->
      <div id="email-add-note" class="p-3.5 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl text-xs text-amber-900 dark:text-amber-300 space-y-1 shadow-xs">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          <strong class="font-semibold text-amber-950 dark:text-amber-200">
            Instructions
          </strong>
        </div>
        <p class="leading-relaxed">
          Enter an email address to add to the list (if you fill <code class="font-mono font-semibold bg-amber-100 dark:bg-amber-900/60 px-1 py-0.5 rounded text-[11px]">exists@gmail.com</code> or an email that already exists, then error coming).
        </p>
      </div>

      <!-- Error Notice (Appears After Reload when exists@gmail.com is submitted) -->
      <div v-if="errorMessage" id="exists-error-notice" class="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-xl text-xs text-rose-900 dark:text-rose-300 space-y-1 shadow-xs">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <strong class="font-semibold text-rose-950 dark:text-rose-200 text-sm">
            Duplicate Entry Error
          </strong>
        </div>
        <p class="text-rose-800 dark:text-rose-300 leading-relaxed">
          {{ errorMessage }}
        </p>
      </div>

      <!-- Add Email Form -->
      <form @submit.prevent="handleInsertMail" id="add-email-form-37" class="space-y-5">
        <div>
          <label for="newEmail37" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Email Address *
          </label>
          <input id="newEmail37" name="email" v-model="emailInput" type="email" required placeholder="e.g. alex@example.com" class="w-full px-3.5 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
        </div>

        <!-- Action Buttons: Back & Insert Mail -->
        <div class="pt-2 flex items-center justify-between gap-3">
          <button id="backBtn37" type="button" @click="goBack" class="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-xs">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back</span>
          </button>

          <button id="insertMailBtn37" type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer shadow-xs inline-flex items-center gap-1.5">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>Insert Mail</span>
          </button>
        </div>
      </form>
    </main>

    <TestBenchFooter label="Example 37 Multi-URL Step" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import FormTopNav from '../../components/forms/FormTopNav.vue';
import TestBenchFooter from '../../components/forms/TestBenchFooter.vue';

const STORAGE_KEY = 'ed_example37_emails';
const ERROR_KEY = 'ed_example37_add_error';

const emailInput = ref('');
const errorMessage = ref('');

function goBack() {
  window.location.href = '/scenarios/37';
}

function handleInsertMail() {
  const email = emailInput.value.trim();
  if (!email) return;

  // Retrieve current emails list
  let list = [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        list = parsed;
      }
    }
  } catch {
    list = [];
  }

  // Check if exists@gmail.com OR if email already exists in the list
  const isDuplicate = list.some((item) => item.toLowerCase() === email.toLowerCase());

  if (email.toLowerCase() === 'exists@gmail.com' || isDuplicate) {
    // Store error message and reload same page
    sessionStorage.setItem(
      ERROR_KEY,
      `Email ${email} already exists in the system. Please enter a different email address.`
    );
    window.location.reload();
    return;
  }

  // Valid new email: add to localStorage list and reload to main page
  list.push(email);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list));

  // Navigate to main page with reload behavior
  window.location.href = '/scenarios/37';
}

onMounted(() => {
  // Check if an error was set before page reload
  const savedError = sessionStorage.getItem(ERROR_KEY);
  if (savedError) {
    errorMessage.value = savedError;
    sessionStorage.removeItem(ERROR_KEY);
  }
});
</script>
