<template>
  <div class="space-y-6">
    <!-- Informative Workflow Note Banner -->
    <div class="p-3.5 bg-blue-50/80 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 rounded-xl text-xs text-blue-900 dark:text-blue-300 flex items-start gap-2.5">
      <div class="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 flex items-center justify-center shrink-0 text-xs font-bold font-serif">
        i
      </div>
      <div class="leading-relaxed">
        <strong class="font-semibold block text-blue-950 dark:text-blue-200 mb-0.5">Workflow Note</strong>
        <span>
          Enter any search term (e.g. <code class="font-mono bg-blue-100/60 dark:bg-blue-900/60 px-1 py-0.5 rounded">REC-101</code>) to look up a record and reveal the second form below via page reload. Entering <code class="font-mono bg-blue-100/60 dark:bg-blue-900/60 px-1 py-0.5 rounded">error</code> will simulate a <strong>Record not found</strong> error.
        </span>
      </div>
    </div>

    <!-- Error Notice (if user entered "error") -->
    <div v-if="hasError" id="error-notice" class="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300 rounded-xl text-xs flex items-start justify-between gap-3">
      <div class="flex items-start gap-2.5">
        <svg class="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <div>
          <strong class="font-semibold block text-amber-950 dark:text-amber-200 mb-0.5">Record Not Found</strong>
          <span>No matching records found for search keyword <strong>"{{ searchTerm }}"</strong>. Please try another search value.</span>
        </div>
      </div>
      <button @click="handleReset" type="button" class="text-[11px] font-semibold text-amber-800 dark:text-amber-300 hover:underline shrink-0 cursor-pointer">
        Clear
      </button>
    </div>

    <!-- Form 1: Search Form (Always visible) -->
    <div class="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-5" id="sender-form-scope">
      <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/70 dark:border-slate-700/70">
        <div class="flex items-center gap-2">
          <span class="text-[10px] font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
            Form 1
          </span>
          <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Record Search &amp; Lookup
          </h4>
        </div>
        <button v-if="isSecondFormVisible || hasError" @click="handleReset" id="reset-search-btn" type="button" class="text-[11px] font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer">
          Reset Search
        </button>
      </div>

      <form @submit.prevent="handleSearchSubmit" class="space-y-4">
        <div>
          <label for="searchQuery16" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Search Keyword / Record ID *
          </label>
          <div class="relative">
            <input id="searchQuery16" name="searchQuery" v-model="searchTerm" required placeholder="e.g. REC-101 (or type 'error' for failure test)" class="w-full pl-9 pr-3.5 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 dark:text-slate-500">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between pt-1">
          <span class="text-[11px] text-slate-500 dark:text-slate-400">
            Submitting reloads page to fetch matching record.
          </span>
          <button type="submit" id="search-submit-btn" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer">
            Search &amp; Load Form
          </button>
        </div>
      </form>
    </div>

    <!-- Form 2: Secondary Entry Form (Displayed below Form 1 after reload) -->
    <div v-if="isSecondFormVisible" id="recipient-form-scope" class="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-5 transition-all">
      <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-200/70 dark:border-slate-700/70">
        <div class="flex items-center gap-2">
          <span class="text-[10px] font-bold tracking-wider uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
            Form 2
          </span>
          <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Record Details Form
          </h4>
        </div>
        <span class="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800">
          Loaded for: {{ searchTerm }}
        </span>
      </div>

      <!-- Success Notice (Displayed when Form 2 is submitted) -->
      <div v-if="submittedSecond" id="success-notice" class="mb-5 p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 rounded-xl text-xs leading-relaxed">
        <div class="flex items-center gap-2 mb-1">
          <span class="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
          <strong class="font-semibold block text-emerald-950 dark:text-emerald-200 text-sm">
            Form submitted successfully!
          </strong>
        </div>
        <p class="text-emerald-800 dark:text-emerald-300 text-xs">
          Thank you, record details for reference <strong>"{{ searchTerm }}"</strong> have been received and saved.
        </p>
      </div>

      <form @submit.prevent="handleSecondSubmit" class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="firstName16" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
              First Name *
            </label>
            <input id="firstName16" name="firstName" v-model="secondForm.firstName" required placeholder="Alex" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>

          <div>
            <label for="email16" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
              Email *
            </label>
            <input id="email16" name="email" v-model="secondForm.email" type="email" required placeholder="alex@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
          </div>
        </div>

        <div>
          <label for="recordNotes16" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Record Notes
          </label>
          <input id="recordNotes16" name="notes" v-model="secondForm.notes" placeholder="Verified client record profile" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
        </div>

        <div class="pt-2 flex justify-end">
          <button type="submit" id="second-submit-btn" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer shadow-xs">
            Submit Record Details
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

const searchTerm = ref('');
const isSecondFormVisible = ref(false);
const hasError = ref(false);
const submittedSecond = ref(false);

const secondForm = reactive({
  firstName: '',
  email: '',
  notes: ''
});

onMounted(() => {
  const savedSearch = sessionStorage.getItem('ed_example16_search');
  const isRevealed = sessionStorage.getItem('ed_example16_revealed');
  const errorFlag = sessionStorage.getItem('ed_example16_error');

  if (errorFlag === '1') {
    hasError.value = true;
    searchTerm.value = savedSearch || 'error';
    isSecondFormVisible.value = false;
  } else if (isRevealed === '1') {
    hasError.value = false;
    searchTerm.value = savedSearch || 'REC-101';
    isSecondFormVisible.value = true;
  } else {
    hasError.value = false;
    isSecondFormVisible.value = false;
    searchTerm.value = '';
  }
});

function handleSearchSubmit() {
  const query = searchTerm.value.trim();
  if (query.toLowerCase() === 'error') {
    sessionStorage.setItem('ed_example16_search', query);
    sessionStorage.setItem('ed_example16_error', '1');
    sessionStorage.removeItem('ed_example16_revealed');
    window.location.reload();
  } else {
    sessionStorage.setItem('ed_example16_search', query);
    sessionStorage.setItem('ed_example16_revealed', '1');
    sessionStorage.removeItem('ed_example16_error');
    window.location.reload();
  }
}

function handleSecondSubmit() {
  submittedSecond.value = true;
}

function handleReset() {
  sessionStorage.removeItem('ed_example16_search');
  sessionStorage.removeItem('ed_example16_revealed');
  sessionStorage.removeItem('ed_example16_error');
  hasError.value = false;
  isSecondFormVisible.value = false;
  submittedSecond.value = false;
  searchTerm.value = '';
  secondForm.firstName = '';
  secondForm.email = '';
  secondForm.notes = '';
}
</script>
