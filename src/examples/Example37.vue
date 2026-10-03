<template>
  <div class="space-y-6">
    <!-- Final Success Banner -->
    <div v-if="submitted" id="final-success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-900 dark:text-emerald-300 space-y-2 shadow-xs">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <strong class="font-semibold text-emerald-950 dark:text-emerald-200 text-sm">
          Final Submission Successful
        </strong>
      </div>
      <p class="text-slate-600 dark:text-slate-400">
        Successfully processed {{ emails.length }} email address(es) in the collection.
      </p>
    </div>

    <!-- Main Card -->
    <div class="p-5 bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl space-y-4">
      <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-700/80 pb-3">
        <div>
          <h3 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Email List Manager
          </h3>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Manage your verified email recipients across secondary add flow
          </p>
        </div>
        <span class="text-xs font-mono text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded">
          Total: {{ emails.length }}
        </span>
      </div>

      <!-- Default Empty State Error Notice -->
      <div v-if="emails.length === 0" id="no-emails-error" class="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-xl text-xs text-rose-900 dark:text-rose-300 space-y-2 shadow-xs">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <strong class="font-semibold text-rose-950 dark:text-rose-200 text-sm">
            No emails found. Click "Add Email" to add some.
          </strong>
        </div>
        <p class="text-rose-700 dark:text-rose-400">
          The email list is currently empty. Click the button below to navigate to the entry screen and add addresses.
        </p>
      </div>

      <!-- Populated Email List -->
      <div v-else id="email-list-container" class="border border-slate-200 dark:border-slate-700 rounded-xl divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-xs">
        <div v-for="(email, index) in emails" :key="index" class="px-4 py-3 flex items-center justify-between gap-4 hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
          <div class="flex items-center gap-3 min-w-0">
            <span class="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center font-mono text-xs text-slate-500 dark:text-slate-400 shrink-0">
              {{ index + 1 }}
            </span>
            <span class="font-mono text-sm text-slate-800 dark:text-slate-100 truncate">
              {{ email }}
            </span>
          </div>

          <!-- Delete Button on Right Side -->
          <button type="button" :id="`deleteEmailBtn37_${index}`" @click="deleteEmail(index)" title="Delete this email" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-800 rounded-lg transition-colors cursor-pointer shrink-0">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span>Delete</span>
          </button>
        </div>
      </div>

      <!-- Bottom Action Bar -->
      <div class="pt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/80 dark:border-slate-700/80">
        <div class="flex items-center gap-3">
          <!-- Add Email Button (triggers reload navigation to /examples/37/add) -->
          <button id="addEmailBtn37" type="button" @click="goToAddEmail" class="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-xs">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Add Email</span>
          </button>

          <!-- Clear All Emails Button -->
          <button v-if="emails.length > 0" id="clearAllEmailsBtn37" type="button" @click="clearAllEmails" class="bg-white dark:bg-slate-800 hover:bg-rose-50 dark:hover:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-1.5 shadow-xs">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
            <span>Clear All Emails</span>
          </button>
        </div>

        <!-- Final Submit Button -->
        <button id="finalSubmitBtn37" type="button" @click="handleFinalSubmit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer shadow-xs">
          Final Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const STORAGE_KEY = 'ed_example37_emails';
const emails = ref([]);
const submitted = ref(false);

function loadEmails() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) {
        emails.value = parsed;
        return;
      }
    }
  } catch {
    // ignore parse error
  }
  emails.value = [];
}

function saveEmails() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(emails.value));
}

function goToAddEmail() {
  window.location.href = '/examples/37/add';
}

function deleteEmail(index) {
  emails.value.splice(index, 1);
  saveEmails();
  submitted.value = false;
}

function clearAllEmails() {
  emails.value = [];
  localStorage.removeItem(STORAGE_KEY);
  submitted.value = false;
}

function handleFinalSubmit() {
  if (emails.value.length === 0) {
    submitted.value = false;
    return;
  }
  submitted.value = true;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

onMounted(() => {
  loadEmails();
});
</script>
