<template>
  <div class="space-y-6">
    <!-- Success Notice -->
    <div v-if="submitted" id="success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-900 dark:text-emerald-300 space-y-3 shadow-xs">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <strong class="font-semibold text-emerald-950 dark:text-emerald-200 text-sm">
          Records &amp; Primary Information Submitted Successfully
        </strong>
      </div>
      <p class="text-slate-600 dark:text-slate-400">
        Captured details for {{ masterData.firstName || 'User' }} {{ masterData.lastName || '' }} ({{ masterData.email || 'no email' }}) with {{ recordsList.length }} submitted record(s).
      </p>
    </div>

    <!-- Main Form -->
    <form @submit.prevent="handleSubmit" id="example31-form" class="space-y-6">
      <!-- 1. Primary Information Section -->
      <div class="p-5 bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl space-y-4">
        <h3 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
          Primary Information
        </h3>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <!-- First Name -->
          <div>
            <label for="firstName31" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
              First Name *
            </label>
            <input id="firstName31" name="firstName" v-model="masterData.firstName" type="text" required placeholder="e.g. Liam" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
          </div>

          <!-- Last Name -->
          <div>
            <label for="lastName31" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
              Last Name *
            </label>
            <input id="lastName31" name="lastName" v-model="masterData.lastName" type="text" required placeholder="e.g. Vance" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
          </div>

          <!-- Email -->
          <div>
            <label for="userEmail31" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
              Email Address *
            </label>
            <input id="userEmail31" name="email" v-model="masterData.email" type="email" required placeholder="liam.vance@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
          </div>
        </div>
      </div>

      <!-- 2. Single-Row Entry Table -->
      <div class="space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">
              Record Entry Row
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Fill values in this entry row and click &quot;Add Record&quot; to append to the table below.
            </p>
          </div>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-xs">
          <table id="entry-row-table" class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 text-center w-28">
                  Action
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[140px]">
                  Input (Text)
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[130px]">
                  Date
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[140px]">
                  Select
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[140px]">
                  Multiple Select
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[170px]">
                  Multiple Checkboxes
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[170px]">
                  Multiple Radio
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <!-- 1. Action: Add Record Button -->
                <td class="py-3 px-3 text-center">
                  <button id="addRecordBtn31" type="button" @click="handleAddRecord" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-xs">
                    Add Record
                  </button>
                </td>

                <!-- 2. Text Input -->
                <td class="py-3 px-3">
                  <input id="entryInput31" name="entryInput" v-model="newRow.inputVal" type="text" placeholder="Enter description..." class="w-full px-2.5 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
                </td>

                <!-- 3. Date Input -->
                <td class="py-3 px-3">
                  <input id="entryDate31" name="entryDate" v-model="newRow.dateVal" type="date" class="w-full px-2.5 py-1.5 text-xs font-mono bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
                </td>

                <!-- 4. Select (Single) -->
                <td class="py-3 px-3">
                  <select id="entrySelect31" name="entrySelect" v-model="newRow.selectVal" class="w-full px-2 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors">
                    <option value="">-- Select --</option>
                    <option value="Hardware">Hardware</option>
                    <option value="Software">Software</option>
                    <option value="Network">Network</option>
                    <option value="Cloud">Cloud</option>
                  </select>
                </td>

                <!-- 5. Multiple Select -->
                <td class="py-3 px-3">
                  <select id="entryMultiSelect31" name="entryMultiSelect" v-model="newRow.multiSelectVal" multiple size="2" class="w-full px-2 py-1 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors">
                    <option value="Dev">Dev</option>
                    <option value="Stage">Stage</option>
                    <option value="Prod">Prod</option>
                  </select>
                </td>

                <!-- 6. Multiple Checkboxes (Horizontal) -->
                <td class="py-3 px-3">
                  <div class="flex items-center gap-3 whitespace-nowrap">
                    <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                      <input id="entryChkActive31" name="entryChkActive" v-model="newRow.checkboxA" type="checkbox" class="rounded text-blue-600 focus:ring-1 focus:ring-blue-500 border-slate-300 dark:border-slate-600" />
                      <span>Active</span>
                    </label>
                    <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                      <input id="entryChkUrgent31" name="entryChkUrgent" v-model="newRow.checkboxB" type="checkbox" class="rounded text-blue-600 focus:ring-1 focus:ring-blue-500 border-slate-300 dark:border-slate-600" />
                      <span>Urgent</span>
                    </label>
                  </div>
                </td>

                <!-- 7. Multiple Radio (Horizontal) -->
                <td class="py-3 px-3">
                  <div class="flex items-center gap-3 whitespace-nowrap">
                    <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                      <input id="entryRadioStd31" name="entryRadioMode" value="Standard" v-model="newRow.radioVal" type="radio" class="text-blue-600 focus:ring-1 focus:ring-blue-500 border-slate-300 dark:border-slate-600" />
                      <span>Standard</span>
                    </label>
                    <label class="inline-flex items-center gap-1.5 cursor-pointer text-slate-700 dark:text-slate-300">
                      <input id="entryRadioUrg31" name="entryRadioMode" value="Express" v-model="newRow.radioVal" type="radio" class="text-blue-600 focus:ring-1 focus:ring-blue-500 border-slate-300 dark:border-slate-600" />
                      <span>Express</span>
                    </label>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 3. Below New Table (Displays Added Records) -->
      <div class="space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">
              Added Records Table
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Records dynamically accumulated from the entry row above.
            </p>
          </div>
          <span class="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
            {{ recordsList.length }} Record(s) Added
          </span>
        </div>

        <div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-xs">
          <table id="added-records-table" class="w-full text-left border-collapse text-xs">
            <thead>
              <tr class="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 text-center w-16">
                  Action
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 w-12 text-center">
                  Sr.No
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[140px]">
                  Input (Text)
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[110px]">
                  Date
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[120px]">
                  Select
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[130px]">
                  Multiple Select
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[140px]">
                  Checkboxes
                </th>
                <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[110px]">
                  Radio
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
              <tr v-if="recordsList.length === 0">
                <td colspan="8" class="text-center py-6 text-slate-400 dark:text-slate-500 italic">
                  No records added yet. Fill the row above and click &quot;Add Record&quot;.
                </td>
              </tr>
              <tr v-for="(item, idx) in recordsList" :key="item.id" class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
                <!-- 1. Delete / Remove Button -->
                <td class="py-2.5 px-3 text-center">
                  <button type="button" @click="handleRemoveRecord(idx)" :id="'removeRecordBtn31-' + item.id" title="Remove Record" class="p-1 rounded text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 transition-colors cursor-pointer">
                    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </td>

                <!-- 2. Sr.No -->
                <td class="py-2.5 px-3 font-mono text-slate-500 dark:text-slate-400 text-center">
                  {{ idx + 1 }}
                </td>

                <!-- 3. Text -->
                <td class="py-2.5 px-3 font-medium text-slate-900 dark:text-slate-100">
                  {{ item.inputVal || '(empty)' }}
                </td>

                <!-- 4. Date -->
                <td class="py-2.5 px-3 font-mono text-slate-700 dark:text-slate-300">
                  {{ item.dateVal || '(empty)' }}
                </td>

                <!-- 5. Select -->
                <td class="py-2.5 px-3 text-slate-700 dark:text-slate-300">
                  {{ item.selectVal || '(none)' }}
                </td>

                <!-- 6. Multiple Select -->
                <td class="py-2.5 px-3 text-slate-700 dark:text-slate-300">
                  {{ item.multiSelectVal.length ? item.multiSelectVal.join(', ') : '(none)' }}
                </td>

                <!-- 7. Checkboxes -->
                <td class="py-2.5 px-3 text-slate-700 dark:text-slate-300">
                  {{ [item.checkboxA ? 'Active' : null, item.checkboxB ? 'Urgent' : null].filter(Boolean).join(', ') || 'None' }}
                </td>

                <!-- 8. Radio -->
                <td class="py-2.5 px-3 text-slate-700 dark:text-slate-300 font-medium">
                  {{ item.radioVal || 'None' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Form Actions -->
      <div class="pt-2 flex items-center gap-3">
        <button id="submitBtn31" type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
          Submit All
        </button>
        <button id="resetBtn31" type="button" @click="handleReset" class="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer">
          Reset
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';

let recordIdCounter = 1;

const masterData = reactive({
  firstName: '',
  lastName: '',
  email: ''
});

const newRow = reactive({
  inputVal: '',
  dateVal: '',
  selectVal: '',
  multiSelectVal: [],
  checkboxA: false,
  checkboxB: false,
  radioVal: ''
});

const recordsList = ref([]);
const submitted = ref(false);

function handleAddRecord() {
  recordsList.value.push({
    id: recordIdCounter++,
    inputVal: newRow.inputVal,
    dateVal: newRow.dateVal,
    selectVal: newRow.selectVal,
    multiSelectVal: [...newRow.multiSelectVal],
    checkboxA: newRow.checkboxA,
    checkboxB: newRow.checkboxB,
    radioVal: newRow.radioVal
  });

  // Clear entry row for subsequent input
  newRow.inputVal = '';
  newRow.dateVal = '';
  newRow.selectVal = '';
  newRow.multiSelectVal = [];
  newRow.checkboxA = false;
  newRow.checkboxB = false;
  newRow.radioVal = '';
}

function handleRemoveRecord(index) {
  recordsList.value.splice(index, 1);
}

function handleSubmit() {
  submitted.value = true;
}

function handleReset() {
  masterData.firstName = '';
  masterData.lastName = '';
  masterData.email = '';
  newRow.inputVal = '';
  newRow.dateVal = '';
  newRow.selectVal = '';
  newRow.multiSelectVal = [];
  newRow.checkboxA = false;
  newRow.checkboxB = false;
  newRow.radioVal = '';
  recordsList.value = [];
  recordIdCounter = 1;
  submitted.value = false;
}
</script>
