<template>
  <div class="min-h-screen flex flex-col bg-[#f8fafd] dark:bg-[#0b0f19] px-4 py-6 transition-colors">
    <!-- Top Navigation Header -->
    <FormTopNav scenario-name="Example 14 - Submission Status" />

    <!-- Slide-in Floating Toast Notification -->
    <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="showToast" class="fixed top-5 right-5 z-50 max-w-sm w-full bg-white dark:bg-slate-800 border border-emerald-300 dark:border-emerald-700 shadow-xl rounded-xl p-4 flex items-start gap-3">
        <div class="w-8 h-8 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-200 dark:border-emerald-800">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        <div class="flex-1">
          <h5 class="text-xs font-bold text-slate-900 dark:text-slate-100">Verification Complete</h5>
          <p class="text-xs text-slate-600 dark:text-slate-300 mt-0.5">Your submission has been confirmed and verified.</p>
        </div>
        <button @click="showToast = false" type="button" class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer" aria-label="Close notification">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </transition>

    <!-- Main Content Area -->
    <main class="max-w-2xl mx-auto w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-8 sm:p-10 my-8 text-center transition-colors">
      <!-- Loading State: Initial Polling Check -->
      <div v-if="loading" class="py-10 text-center">
        <div class="w-14 h-14 rounded-full bg-purple-50 dark:bg-purple-950/50 border border-purple-200 dark:border-purple-800 flex items-center justify-center mx-auto mb-4">
          <span class="inline-block animate-spin w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full"></span>
        </div>
        <h3 class="text-lg font-bold text-slate-900 dark:text-slate-100 tracking-tight mb-1">
          Verifying Submission Status
        </h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
          Verifying submission status, please wait a moment while the background check completes...
        </p>
      </div>

      <!-- Verified State: After Delay -->
      <div v-else class="text-left">
        <!-- In-Page Success / Verification Notice -->
        <div id="polling-completion-target" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 rounded-xl text-xs mb-6">
          <div class="flex items-center gap-2 mb-1">
            <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
            <strong id="success-notice" class="font-semibold block text-emerald-950 dark:text-emerald-200 text-sm">
              Form submitted successfully!
            </strong>
          </div>
          <p class="text-emerald-800 dark:text-emerald-300 text-xs">
            Thank you, your information has been received and verified.
          </p>
        </div>

        <!-- Header Information -->
        <div class="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h2 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              Submission Verification Details
            </h2>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Verified record arrived from initial submission redirect.
            </p>
          </div>
          <span class="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
            Status: Verified
          </span>
        </div>

        <!-- Summary Details Grid -->
        <div class="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-5 mb-8 space-y-3">
          <div class="flex items-center justify-between text-xs">
            <span class="text-slate-500 dark:text-slate-400 font-medium">First Name:</span>
            <span class="font-semibold text-slate-800 dark:text-slate-200">{{ payload.firstName || 'Alex' }}</span>
          </div>
          <div class="flex items-center justify-between text-xs pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
            <span class="text-slate-500 dark:text-slate-400 font-medium">Email:</span>
            <span class="font-semibold text-slate-800 dark:text-slate-200">{{ payload.email || 'alex@example.com' }}</span>
          </div>
          <div class="flex items-center justify-between text-xs pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
            <span class="text-slate-500 dark:text-slate-400 font-medium">Task Reference:</span>
            <span class="font-mono font-semibold text-slate-800 dark:text-slate-200">{{ payload.id || 'JOB-300' }}</span>
          </div>
          <div class="flex items-center justify-between text-xs pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
            <span class="text-slate-500 dark:text-slate-400 font-medium">Verification Delay:</span>
            <span class="font-mono text-purple-600 dark:text-purple-400 font-semibold">2500ms</span>
          </div>
        </div>

        <!-- Action Button: Return / New Entry -->
        <div class="flex items-center justify-between pt-2">
          <button @click="handleNewEntry" id="new-entry-button" type="button" class="inline-flex items-center gap-2 bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-xs px-6 py-2.5 rounded-lg shadow-xs transition-colors cursor-pointer">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>New Entry</span>
          </button>

          <span class="text-[11px] text-slate-400 dark:text-slate-500 font-mono">
            Redirect &bull; Example 14
          </span>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <TestBenchFooter label="Example 14 Verification Sandbox" />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import FormTopNav from '../components/forms/FormTopNav.vue';
import TestBenchFooter from '../components/forms/TestBenchFooter.vue';

const loading = ref(true);
const showToast = ref(false);
const payload = reactive({
  firstName: '',
  email: '',
  id: ''
});

onMounted(() => {
  const saved = sessionStorage.getItem('ed_example14_payload');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      payload.firstName = parsed.firstName || '';
      payload.email = parsed.email || '';
      payload.id = parsed.id || '';
    } catch {
      // fallback
    }
  }

  // Artificial delay representing the background verification
  setTimeout(() => {
    loading.value = false;
    showToast.value = true;

    // Automatically hide floating toast after 5 seconds
    setTimeout(() => {
      showToast.value = false;
    }, 5000);
  }, 2500);
});

function handleNewEntry() {
  sessionStorage.removeItem('ed_example14_payload');
  window.location.href = '/scenarios/14';
}
</script>
