<template>
  <div>
    <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 mb-4">
      Notice: Submitting this form reloads the page and appends the new entry directly to the bottom of the table below without popups or toast alerts.
    </div>

    <form @submit.prevent="handleSilentSubmit" class="space-y-4">
      <div>
        <label for="firstName17" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          First Name *
        </label>
        <input id="firstName17" name="firstName" v-model="form.firstName" required placeholder="Alex" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div>
        <label for="email17" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Email *
        </label>
        <input id="email17" name="email" v-model="form.email" type="email" required placeholder="alex@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div>
        <label for="silentField" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Additional Notes
        </label>
        <input id="silentField" name="silentTarget" v-model="form.val" placeholder="Optional reference notes" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div class="pt-4 flex justify-end">
        <button type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
          Submit Form
        </button>
      </div>
    </form>

    <!-- Table of Existing Records -->
    <div class="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800" id="records-table-container">
      <div class="flex items-center justify-between mb-3">
        <div>
          <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Existing Records
          </h4>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            New submissions reload the page and append directly to the bottom of this table.
          </p>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
            Total: {{ records.length }}
          </span>
          <button @click="handleResetRecords" type="button" class="text-[11px] font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer">
            Reset
          </button>
        </div>
      </div>

      <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xs">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              <th class="py-2.5 px-3">#</th>
              <th class="py-2.5 px-3">First Name</th>
              <th class="py-2.5 px-3">Email</th>
              <th class="py-2.5 px-3">Notes</th>
              <th class="py-2.5 px-3 text-right">Date</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-xs text-slate-700 dark:text-slate-300">
            <tr v-for="(rec, index) in records" :key="rec.id || index" :class="[
              'hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors',
              rec.isNew ? 'bg-emerald-50/50 dark:bg-emerald-950/20' : ''
            ]">
              <td class="py-2.5 px-3 font-mono text-[11px] text-slate-400 dark:text-slate-500">
                {{ index + 1 }}
              </td>
              <td class="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">
                <div class="flex items-center gap-1.5">
                  <span>{{ rec.firstName }}</span>
                  <span v-if="rec.isNew" class="text-[9px] font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 px-1.5 py-0.5 rounded">
                    New
                  </span>
                </div>
              </td>
              <td class="py-2.5 px-3">
                {{ rec.email }}
              </td>
              <td class="py-2.5 px-3 text-slate-600 dark:text-slate-400">
                {{ rec.val || '—' }}
              </td>
              <td class="py-2.5 px-3 text-right font-mono text-[11px] text-slate-400 dark:text-slate-500">
                {{ rec.date }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';

const DEFAULT_RECORDS = [
  { id: 101, firstName: 'Jordan', email: 'jordan.lee@example.com', val: 'Account verified', date: '2026-09-15' },
  { id: 102, firstName: 'Morgan', email: 'morgan.smith@example.com', val: 'Standard profile', date: '2026-09-22' },
  { id: 103, firstName: 'Riley', email: 'riley.davis@example.com', val: 'Priority customer', date: '2026-09-29' }
];

const form = reactive({
  firstName: '',
  email: '',
  val: ''
});

const records = ref([]);

onMounted(() => {
  const savedRecords = sessionStorage.getItem('ed_example17_records');
  if (savedRecords) {
    try {
      records.value = JSON.parse(savedRecords);
    } catch {
      records.value = [...DEFAULT_RECORDS];
    }
  } else {
    records.value = [...DEFAULT_RECORDS];
  }

  const pendingEntry = sessionStorage.getItem('ed_example17_new_record');
  if (pendingEntry) {
    try {
      const parsed = JSON.parse(pendingEntry);
      records.value.push(parsed);
      sessionStorage.setItem('ed_example17_records', JSON.stringify(records.value));
      sessionStorage.removeItem('ed_example17_new_record');
    } catch {
      // ignore
    }
  }
});

function handleSilentSubmit() {
  const newEntry = {
    id: Date.now(),
    firstName: form.firstName,
    email: form.email,
    val: form.val || 'Standard record',
    date: new Date().toISOString().split('T')[0],
    isNew: true
  };
  sessionStorage.setItem('ed_example17_new_record', JSON.stringify(newEntry));
  window.location.reload();
}

function handleResetRecords() {
  records.value = [...DEFAULT_RECORDS];
  sessionStorage.removeItem('ed_example17_records');
  sessionStorage.removeItem('ed_example17_new_record');
}
</script>
