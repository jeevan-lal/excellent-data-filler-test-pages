<template>
  <div class="space-y-6">
    <!-- Notice Banner -->
    <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
      <span class="font-semibold text-slate-800 dark:text-slate-200">Test Scenario:</span>
      Select options in the multiple-selection dropdown, then click &quot;Load Rows&quot;. After a silent delay without loading spinners on the page or button, corresponding rows are inserted into the table below.
    </div>

    <!-- Success Notice -->
    <div v-if="submitted" id="success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-900 dark:text-emerald-300 space-y-3 shadow-xs">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <strong class="font-semibold text-emerald-950 dark:text-emerald-200 text-sm">
          Form Submitted Successfully
        </strong>
      </div>
      <p class="text-slate-600 dark:text-slate-400">
        Captured data for {{ tableRows.length }} configured row(s):
      </p>

      <div class="space-y-2 max-h-60 overflow-y-auto pr-1">
        <div v-for="(row, idx) in tableRows" :key="idx" class="p-2.5 bg-white/70 dark:bg-slate-900/60 rounded-lg border border-emerald-100 dark:border-emerald-900/40 text-[11px] font-mono grid grid-cols-1 sm:grid-cols-5 gap-2">
          <div>
            <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">Option:</span>
            <span class="font-semibold text-slate-900 dark:text-slate-100">{{ row.option }}</span>
          </div>
          <div>
            <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">Input:</span>
            <span class="text-slate-900 dark:text-slate-100">{{ row.name || '(empty)' }}</span>
          </div>
          <div>
            <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">Dropdown:</span>
            <span class="text-slate-900 dark:text-slate-100">{{ row.priority }}</span>
          </div>
          <div>
            <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">Checkboxes:</span>
            <span class="text-slate-900 dark:text-slate-100">
              {{ [row.remote ? 'Remote' : null, row.urgent ? 'Urgent' : null].filter(Boolean).join(', ') || 'None' }}
            </span>
          </div>
          <div>
            <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">Radio:</span>
            <span class="text-slate-900 dark:text-slate-100">{{ row.tier }}</span>
          </div>
        </div>
      </div>
    </div>

    <form @submit.prevent="handleSubmit" id="example23-form" class="space-y-6">
      <!-- Multiple Selection Dropdown -->
      <div class="space-y-3">
        <div class="flex items-center justify-between mb-1">
          <label for="multiSelect23" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase">
            Select Roles / Modules (Multiple Selection) *
          </label>
          <span class="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
            Selected: {{ selectedOptions.length }}
          </span>
        </div>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 mb-2">
          Hold Ctrl (or Command on Mac) to select multiple options, then click &quot;Load Rows&quot; to populate table entries.
        </p>

        <select id="multiSelect23" name="selectedRoles" v-model="selectedOptions" multiple size="6" required class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors cursor-pointer">
          <option v-for="opt in AVAILABLE_OPTIONS" :key="opt.value" :value="opt.value" class="py-1 px-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700">
            {{ opt.label }}
          </option>
        </select>

        <div class="flex items-center justify-start">
          <button id="loadRowsBtn23" type="button" @click="handleLoadRows" :disabled="selectedOptions.length === 0" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
            Load Rows
          </button>
        </div>
      </div>

      <!-- Dynamic Table Section (Always Visible) -->
      <div class="space-y-3" id="dynamicTableSection23">
        <div class="flex items-center justify-between">
          <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Configured Rows Table
          </h4>
          <span class="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
            Rows: {{ tableRows.length }}
          </span>
        </div>

        <!-- Table Container -->
        <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xs">
          <table id="dynamicTable23" class="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                <th class="py-2.5 px-3 w-12 text-center">#</th>
                <th class="py-2.5 px-3 min-w-[150px]">1. Option Name</th>
                <th class="py-2.5 px-3 min-w-[170px]">2. Input Field</th>
                <th class="py-2.5 px-3 min-w-[130px]">3. Single Dropdown</th>
                <th class="py-2.5 px-3 min-w-[140px]">4. Checkboxes</th>
                <th class="py-2.5 px-3 min-w-[150px]">5. Radio Buttons</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-xs text-slate-700 dark:text-slate-300">
              <!-- Empty State when no options loaded -->
              <tr v-if="tableRows.length === 0">
                <td colspan="6" class="py-8 px-4 text-center text-slate-400 dark:text-slate-500 text-xs">
                  No rows loaded yet. Select one or more options above and click &quot;Load Rows&quot; to populate the table.
                </td>
              </tr>

              <!-- Dynamically Generated Rows -->
              <tr v-for="(row, index) in tableRows" :key="row.option" class="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
                <!-- Column 0: Index -->
                <td class="py-2.5 px-3 font-mono text-[11px] text-slate-400 dark:text-slate-500 text-center">
                  {{ index + 1 }}
                </td>

                <!-- Column 1: Option Name -->
                <td class="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">
                  <div class="flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    <span>{{ row.option }}</span>
                  </div>
                </td>

                <!-- Column 2: Input Field -->
                <td class="py-2.5 px-3">
                  <input :id="'input-row-' + index" :name="'input_name_' + index" v-model="row.name" type="text" required placeholder="Enter assignee / note..." class="w-full px-2.5 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                </td>

                <!-- Column 3: Single Dropdown -->
                <td class="py-2.5 px-3">
                  <select :id="'select-row-' + index" :name="'select_priority_' + index" v-model="row.priority" class="w-full px-2.5 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 cursor-pointer">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Critical">Critical</option>
                  </select>
                </td>

                <!-- Column 4: Checkboxes -->
                <td class="py-2.5 px-3">
                  <div class="flex items-center gap-3">
                    <label class="flex items-center gap-1.5 cursor-pointer text-xs">
                      <input :id="'check-remote-' + index" :name="'check_remote_' + index" type="checkbox" v-model="row.remote" class="w-3.5 h-3.5 text-blue-600 rounded border-slate-300 dark:border-slate-600 focus:ring-blue-600 cursor-pointer" />
                      <span class="text-slate-700 dark:text-slate-300">Remote</span>
                    </label>

                    <label class="flex items-center gap-1.5 cursor-pointer text-xs">
                      <input :id="'check-urgent-' + index" :name="'check_urgent_' + index" type="checkbox" v-model="row.urgent" class="w-3.5 h-3.5 text-blue-600 rounded border-slate-300 dark:border-slate-600 focus:ring-blue-600 cursor-pointer" />
                      <span class="text-slate-700 dark:text-slate-300">Urgent</span>
                    </label>
                  </div>
                </td>

                <!-- Column 5: Radio Buttons -->
                <td class="py-2.5 px-3">
                  <div class="flex items-center gap-3">
                    <label class="flex items-center gap-1.5 cursor-pointer text-xs">
                      <input :id="'radio-std-' + index" :name="'radio_tier_' + index" type="radio" value="Standard" v-model="row.tier" class="w-3.5 h-3.5 text-blue-600 border-slate-300 dark:border-slate-600 focus:ring-blue-600 cursor-pointer" />
                      <span class="text-slate-700 dark:text-slate-300">Standard</span>
                    </label>

                    <label class="flex items-center gap-1.5 cursor-pointer text-xs">
                      <input :id="'radio-prem-' + index" :name="'radio_tier_' + index" type="radio" value="Premium" v-model="row.tier" class="w-3.5 h-3.5 text-blue-600 border-slate-300 dark:border-slate-600 focus:ring-blue-600 cursor-pointer" />
                      <span class="text-slate-700 dark:text-slate-300">Premium</span>
                    </label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="pt-3 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
        <button type="button" @click="handleReset" class="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline cursor-pointer">
          Reset Selection
        </button>

        <button id="submitBtn23" type="submit" :disabled="tableRows.length === 0" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
          Submit Form
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const AVAILABLE_OPTIONS = [
  { value: 'Frontend Developer', label: 'Frontend Developer' },
  { value: 'Backend Engineer', label: 'Backend Engineer' },
  { value: 'Database Architect', label: 'Database Architect' },
  { value: 'QA Automation Engineer', label: 'QA Automation Engineer' },
  { value: 'Cloud DevOps Specialist', label: 'Cloud DevOps Specialist' },
  { value: 'Product Designer', label: 'Product Designer' }
];

const selectedOptions = ref(['Frontend Developer', 'Backend Engineer']);
const tableRows = ref([]);
const submitted = ref(false);

let loadTimer = null;

function handleLoadRows() {
  if (selectedOptions.value.length === 0) return;
  if (loadTimer) clearTimeout(loadTimer);
  submitted.value = false;

  // Silent delay without loading spinners or indicators on page
  loadTimer = setTimeout(() => {
    const existingMap = new Map(tableRows.value.map((r) => [r.option, r]));

    tableRows.value = selectedOptions.value.map((opt) => {
      if (existingMap.has(opt)) {
        return existingMap.get(opt);
      }
      return {
        option: opt,
        name: '',
        priority: 'Medium',
        remote: true,
        urgent: false,
        tier: 'Standard'
      };
    });
  }, 1300);
}

function handleReset() {
  if (loadTimer) clearTimeout(loadTimer);
  selectedOptions.value = [];
  tableRows.value = [];
  submitted.value = false;
}

function handleSubmit() {
  submitted.value = true;
}
</script>
