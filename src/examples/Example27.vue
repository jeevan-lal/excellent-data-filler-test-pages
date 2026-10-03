<template>
  <div class="space-y-6">
    <!-- Notice Banner -->
    <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
      <span class="font-semibold text-slate-800 dark:text-slate-200">Test Scenario:</span>
      Beneficiary registry table with 15 unique records containing inline interactive form controls: text input, select dropdown, checkbox, and row-grouped radio buttons across each row. Fill or edit the inline fields and click &quot;Submit Records&quot; to validate submission.
    </div>

    <!-- Success Notice -->
    <div v-if="submitted" id="success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-900 dark:text-emerald-300 space-y-3 shadow-xs">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <strong class="font-semibold text-emerald-950 dark:text-emerald-200 text-sm">
          Beneficiary Form Controls Submitted Successfully
        </strong>
      </div>
      <p class="text-slate-600 dark:text-slate-400">
        Saved inline form data for {{ tableData.length }} beneficiary records:
      </p>

      <div class="space-y-1.5 max-h-56 overflow-y-auto pr-1">
        <div v-for="item in tableData" :key="item.regNo" class="p-2.5 bg-white/70 dark:bg-slate-900/60 rounded-lg border border-emerald-100 dark:border-emerald-900/40 text-[11px] font-mono grid grid-cols-1 sm:grid-cols-6 gap-2">
          <div>
            <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">Reg No:</span>
            <span class="font-semibold text-blue-700 dark:text-blue-400">{{ item.regNo }}</span>
          </div>
          <div>
            <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">Ben Name:</span>
            <span class="text-slate-900 dark:text-slate-100 font-sans">{{ item.benName }}</span>
          </div>
          <div>
            <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">Input (Note):</span>
            <span class="text-slate-900 dark:text-slate-100">{{ item.note || '(empty)' }}</span>
          </div>
          <div>
            <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">Select (Status):</span>
            <span class="text-slate-900 dark:text-slate-100">{{ item.status }}</span>
          </div>
          <div>
            <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">Checkbox (Verified):</span>
            <span :class="item.verified ? 'text-emerald-600 dark:text-emerald-400 font-semibold' : 'text-slate-400'">
              {{ item.verified ? 'Yes' : 'No' }}
            </span>
          </div>
          <div>
            <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">Radio (Payout):</span>
            <span class="text-slate-900 dark:text-slate-100 font-semibold">{{ item.payoutMode }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Table Form Container -->
    <form @submit.prevent="handleSubmit" id="example27-form" class="space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">
            Beneficiary Form Controls Registry
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            15 records with inline Input, Select Dropdown, Verification Checkbox, and Payout Mode Radio fields.
          </p>
        </div>
      </div>

      <!-- Responsive Table -->
      <div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-xs">
        <table id="beneficiary-form-table" class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
              <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 w-12 text-center">
                Sr.No
              </th>
              <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 w-28">
                Reg No.
              </th>
              <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 w-32">
                Ben Name
              </th>
              <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 w-32">
                Father Name
              </th>
              <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[150px]">
                Input (Remarks)
              </th>
              <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[180px] w-48">
                Select (Status)
              </th>
              <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 text-center w-24">
                Checkbox
              </th>
              <th scope="col" class="py-3 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[130px]">
                Radio (Payout)
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            <tr v-for="item in tableData" :key="item.regNo" class="hover:bg-slate-50/60 dark:hover:bg-slate-800/40 transition-colors">
              <!-- 1. Sr.No -->
              <td class="py-2.5 px-3 font-mono text-slate-500 dark:text-slate-400 text-center">
                {{ item.srNo }}
              </td>

              <!-- 2. Reg No. (Unique) -->
              <td class="py-2.5 px-3 font-mono font-semibold text-blue-700 dark:text-blue-400">
                {{ item.regNo }}
              </td>

              <!-- 3. Ben Name -->
              <td class="py-2.5 px-3 font-medium text-slate-900 dark:text-slate-100">
                {{ item.benName }}
              </td>

              <!-- 4. Father Name -->
              <td class="py-2.5 px-3 text-slate-700 dark:text-slate-300">
                {{ item.fatherName }}
              </td>

              <!-- 5. Input Field -->
              <td class="py-2.5 px-3">
                <input :id="'input-note-' + item.regNo" :name="'note_' + item.regNo" v-model="item.note" type="text" placeholder="Enter remarks..." class="w-full px-2.5 py-1 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
              </td>

              <!-- 6. Select Dropdown -->
              <td class="py-2.5 px-3">
                <select :id="'select-status-' + item.regNo" :name="'status_' + item.regNo" v-model="item.status" class="w-full px-2 py-1 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors">
                  <option value="Pending">Pending</option>
                  <option value="Verified">Verified</option>
                  <option value="Approved">Approved</option>
                  <option value="Hold">Hold</option>
                </select>
              </td>

              <!-- 7. Checkbox -->
              <td class="py-2.5 px-3 text-center">
                <label class="inline-flex items-center gap-1 cursor-pointer">
                  <input :id="'chk-doc-' + item.regNo" :name="'doc_verified_' + item.regNo" v-model="item.verified" type="checkbox" class="rounded text-blue-600 focus:ring-1 focus:ring-blue-500 border-slate-300 dark:border-slate-600" />
                  <span class="sr-only">Verified</span>
                </label>
              </td>

              <!-- 8. Radio Buttons (Row Grouped) -->
              <td class="py-2.5 px-3">
                <div class="flex items-center gap-3">
                  <label class="inline-flex items-center gap-1 cursor-pointer text-slate-700 dark:text-slate-300">
                    <input :id="'radio-dbt-' + item.regNo" :name="'payout_mode_' + item.regNo" value="DBT" v-model="item.payoutMode" type="radio" class="text-blue-600 focus:ring-1 focus:ring-blue-500 border-slate-300 dark:border-slate-600" />
                    <span>DBT</span>
                  </label>
                  <label class="inline-flex items-center gap-1 cursor-pointer text-slate-700 dark:text-slate-300">
                    <input :id="'radio-cash-' + item.regNo" :name="'payout_mode_' + item.regNo" value="Cash" v-model="item.payoutMode" type="radio" class="text-blue-600 focus:ring-1 focus:ring-blue-500 border-slate-300 dark:border-slate-600" />
                    <span>Cash</span>
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Action Buttons -->
      <div class="pt-2 flex items-center gap-3">
        <button id="submitBtn27" type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
          Submit Records
        </button>
        <button id="resetBtn27" type="button" @click="handleReset" class="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer">
          Reset
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const initialRecords = [
  { srNo: 1, regNo: 'REG-2026-001', benName: 'Rajesh Kumar', fatherName: 'Suresh Kumar', note: '', status: 'Pending', verified: false, payoutMode: 'DBT' },
  { srNo: 2, regNo: 'REG-2026-002', benName: 'Priya Sharma', fatherName: 'Ram Sharma', note: '', status: 'Verified', verified: true, payoutMode: 'DBT' },
  { srNo: 3, regNo: 'REG-2026-003', benName: 'Amit Patel', fatherName: 'Dinesh Patel', note: '', status: 'Pending', verified: false, payoutMode: 'Cash' },
  { srNo: 4, regNo: 'REG-2026-004', benName: 'Sunita Verma', fatherName: 'Harish Verma', note: '', status: 'Approved', verified: true, payoutMode: 'DBT' },
  { srNo: 5, regNo: 'REG-2026-005', benName: 'Ramesh Yadav', fatherName: 'Mohan Yadav', note: '', status: 'Pending', verified: false, payoutMode: 'Cash' },
  { srNo: 6, regNo: 'REG-2026-006', benName: 'Anita Devi', fatherName: 'Ramchandra Prasad', note: '', status: 'Verified', verified: true, payoutMode: 'DBT' },
  { srNo: 7, regNo: 'REG-2026-007', benName: 'Vikram Singh', fatherName: 'Mahendra Singh', note: '', status: 'Hold', verified: false, payoutMode: 'Cash' },
  { srNo: 8, regNo: 'REG-2026-008', benName: 'Pooja Gupta', fatherName: 'Ashok Gupta', note: '', status: 'Pending', verified: false, payoutMode: 'DBT' },
  { srNo: 9, regNo: 'REG-2026-009', benName: 'Manoj Tiwari', fatherName: 'Kedarnath Tiwari', note: '', status: 'Verified', verified: true, payoutMode: 'DBT' },
  { srNo: 10, regNo: 'REG-2026-010', benName: 'Kavita Joshi', fatherName: 'Prem Joshi', note: '', status: 'Pending', verified: false, payoutMode: 'Cash' },
  { srNo: 11, regNo: 'REG-2026-011', benName: 'Deepak Chauhan', fatherName: 'Surendra Chauhan', note: '', status: 'Approved', verified: true, payoutMode: 'DBT' },
  { srNo: 12, regNo: 'REG-2026-012', benName: 'Neha Mishra', fatherName: 'Santosh Mishra', note: '', status: 'Pending', verified: false, payoutMode: 'DBT' },
  { srNo: 13, regNo: 'REG-2026-013', benName: 'Sanjay Rathore', fatherName: 'Bhawani Rathore', note: '', status: 'Verified', verified: true, payoutMode: 'Cash' },
  { srNo: 14, regNo: 'REG-2026-014', benName: 'Meena Kumari', fatherName: 'Jagdish Prasad', note: '', status: 'Pending', verified: false, payoutMode: 'DBT' },
  { srNo: 15, regNo: 'REG-2026-015', benName: 'Alok Pandey', fatherName: 'Brijesh Pandey', note: '', status: 'Approved', verified: true, payoutMode: 'DBT' }
];

const tableData = ref(initialRecords.map((r) => ({ ...r })));
const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
}

function handleReset() {
  tableData.value = initialRecords.map((r) => ({ ...r }));
  submitted.value = false;
}
</script>
