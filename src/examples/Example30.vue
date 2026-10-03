<template>
  <div class="space-y-6">
    <!-- Success Notice -->
    <div v-if="submitted" id="success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-900 dark:text-emerald-300 space-y-3 shadow-xs">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <strong class="font-semibold text-emerald-950 dark:text-emerald-200 text-sm">
          Dynamic Tabular Form Submitted Successfully
        </strong>
      </div>
    </div>

    <!-- Main Submission Form -->
    <form @submit.prevent="handleSubmit" id="example30-form" class="space-y-6">
      <!-- Top Section: First Name, Last Name, and Email -->
      <div class="p-5 bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl space-y-4">
        <h3 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
          Primary Information
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- First Name -->
          <div>
            <label for="firstName30" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
              First Name *
            </label>
            <input id="firstName30" name="firstName" v-model="masterData.firstName" type="text" required placeholder="e.g. Alexander" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
          </div>

          <!-- Last Name -->
          <div>
            <label for="lastName30" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
              Last Name *
            </label>
            <input id="lastName30" name="lastName" v-model="masterData.lastName" type="text" required placeholder="e.g. Wright" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
          </div>

          <!-- Email -->
          <div>
            <label for="userEmail30" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
              Email Address *
            </label>
            <input id="userEmail30" name="email" v-model="masterData.email" type="email" required placeholder="alexander.wright@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
          </div>
        </div>
      </div>

      <!-- Tabular Grid Section -->
      <div class="space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">
              Configured Line Items
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Pre-populated table data with input, date, select, multi-select, checkboxes, and radio buttons.
            </p>
          </div>

          <!-- Add New Row Button -->
          <button id="addRowBtn30" type="button" @click="handleAddRow" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white transition-colors cursor-pointer self-start sm:self-auto shadow-xs">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>

        <!-- Responsive Table Container -->
        <div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-xs">
          <table id="dynamic-grid-table" class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 w-12 text-center">
                  Sr.No
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[140px]">
                  Input (Text)
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[130px]">
                  Date
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[140px]">
                  Select (Single)
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[150px]">
                  Select Multi
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[170px]">
                  Checkboxes (Horizontal)
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[170px]">
                  Radio (Horizontal)
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 text-center w-16">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
              <tr v-for="(row, idx) in rows" :key="row.id" class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                <!-- 1. Sr.No -->
                <td class="py-2.5 px-3 font-mono text-slate-500 dark:text-slate-400 text-center">
                  {{ idx + 1 }}
                </td>

                <!-- 2. Text Input -->
                <td class="py-2.5 px-3">
                  <input :id="'input-text-' + row.id" :name="'item_input_' + row.id" v-model="row.inputVal" type="text" placeholder="Enter description..." class="w-full px-2.5 py-1 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
                </td>

                <!-- 3. Date Input -->
                <td class="py-2.5 px-3">
                  <input :id="'input-date-' + row.id" :name="'item_date_' + row.id" v-model="row.dateVal" type="date" class="w-full px-2.5 py-1 text-xs font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
                </td>

                <!-- 4. Select (Single) -->
                <td class="py-2.5 px-3">
                  <select :id="'select-category-' + row.id" :name="'item_select_' + row.id" v-model="row.selectVal" class="w-full px-2 py-1 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors">
                    <option value="">-- Select --</option>
                    <option value="Hardware">Hardware</option>
                    <option value="Software">Software</option>
                    <option value="Network">Network</option>
                    <option value="Support">Support</option>
                  </select>
                </td>

                <!-- 5. Select Multi -->
                <td class="py-2.5 px-3">
                  <select :id="'select-multi-' + row.id" :name="'item_multi_' + row.id" v-model="row.multiSelectVal" multiple size="2" class="w-full px-2 py-1 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors">
                    <option value="Dev">Dev</option>
                    <option value="Stage">Stage</option>
                    <option value="Prod">Prod</option>
                  </select>
                </td>

                <!-- 6. Checkboxes (Horizontal Design with 2 Options & Labels) -->
                <td class="py-2.5 px-3">
                  <div class="flex items-center gap-3 whitespace-nowrap">
                    <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                      <input :id="'chk-active-' + row.id" :name="'chk_active_' + row.id" v-model="row.checkboxA" type="checkbox" class="rounded text-blue-600 focus:ring-1 focus:ring-blue-500 border-slate-300 dark:border-slate-600" />
                      <span>Active</span>
                    </label>
                    <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                      <input :id="'chk-urgent-' + row.id" :name="'chk_urgent_' + row.id" v-model="row.checkboxB" type="checkbox" class="rounded text-blue-600 focus:ring-1 focus:ring-blue-500 border-slate-300 dark:border-slate-600" />
                      <span>Urgent</span>
                    </label>
                  </div>
                </td>

                <!-- 7. Radio (Horizontal Design, Row Grouped) -->
                <td class="py-2.5 px-3">
                  <div class="flex items-center gap-3 whitespace-nowrap">
                    <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                      <input :id="'radio-p1-' + row.id" :name="'item_radio_' + row.id" value="Standard" v-model="row.radioVal" type="radio" class="text-blue-600 focus:ring-1 focus:ring-blue-500 border-slate-300 dark:border-slate-600" />
                      <span>Standard</span>
                    </label>
                    <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                      <input :id="'radio-p2-' + row.id" :name="'item_radio_' + row.id" value="Urgent" v-model="row.radioVal" type="radio" class="text-blue-600 focus:ring-1 focus:ring-blue-500 border-slate-300 dark:border-slate-600" />
                      <span>Urgent</span>
                    </label>
                  </div>
                </td>

                <!-- 8. Delete / Remove Row Action -->
                <td class="py-2.5 px-3 text-center">
                  <button type="button" @click="handleRemoveRow(idx)" :id="'removeBtn30-' + row.id" :disabled="rows.length <= 1" title="Remove Row" class="p-1 rounded text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="pt-2 flex items-center gap-3">
        <button id="submitBtn30" type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
          Submit Form
        </button>
        <button id="resetBtn30" type="button" @click="handleReset" class="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer">
          Reset
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

const initialMaster = {
  firstName: '',
  lastName: '',
  email: ''
};

const masterData = reactive({ ...initialMaster });

const initialRowsData = [
  {
    id: 1,
    inputVal: 'Enterprise Gateway Cluster',
    dateVal: '2026-10-12',
    selectVal: 'Hardware',
    multiSelectVal: ['Prod', 'Stage'],
    checkboxA: true,
    checkboxB: false,
    radioVal: 'Standard'
  },
  {
    id: 2,
    inputVal: 'Telemetry Aggregator Daemon',
    dateVal: '2026-10-20',
    selectVal: 'Software',
    multiSelectVal: ['Dev'],
    checkboxA: true,
    checkboxB: true,
    radioVal: 'Urgent'
  }
];

let nextId = 3;

function createEmptyRow(id) {
  return {
    id,
    inputVal: '',
    dateVal: '',
    selectVal: '',
    multiSelectVal: [],
    checkboxA: false,
    checkboxB: false,
    radioVal: ''
  };
}

const rows = ref(initialRowsData.map((r) => ({ ...r, multiSelectVal: [...r.multiSelectVal] })));
const submitted = ref(false);

function handleAddRow() {
  rows.value.push(createEmptyRow(nextId++));
}

function handleRemoveRow(index) {
  if (rows.value.length > 1) {
    rows.value.splice(index, 1);
  }
}

function handleSubmit() {
  submitted.value = true;
}

function handleReset() {
  Object.assign(masterData, initialMaster);
  nextId = 3;
  rows.value = initialRowsData.map((r) => ({ ...r, multiSelectVal: [...r.multiSelectVal] }));
  submitted.value = false;
}
</script>
