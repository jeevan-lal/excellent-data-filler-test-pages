<template>
  <div class="space-y-6">
    <!-- Notice Banner -->
    <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
      <span class="font-semibold text-slate-800 dark:text-slate-200">Test Scenario:</span>
      <template v-if="!isEditing">
        Beneficiary registry table with 15 unique registration records. Clicking the "Edit" button reloads the page into the dedicated edit view with the registration ID present in the URL query string (?id=...).
      </template>
      <template v-else>
        Edit page loaded for registration ID: <strong class="font-mono text-blue-600 dark:text-blue-400">{{ editId }}</strong>. Modify beneficiary name, father name, or email and submit the update.
      </template>
    </div>

    <!-- ========================================================================= -->
    <!-- VIEW A: BENEFICIARY TABLE (When NOT Editing)                               -->
    <!-- ========================================================================= -->
    <div v-if="!isEditing" class="space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div>
          <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">
            Beneficiary Registry Records
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Total 15 unique beneficiary registration records. Click "Edit" to open the record in a reloaded edit page.
          </p>
        </div>
      </div>

      <!-- Table Container -->
      <div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-xs">
        <table id="beneficiary-table" class="w-full text-left border-collapse text-xs">
          <thead>
            <tr class="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200 w-16 text-center">
                Sr.No
              </th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200 w-36">
                Reg No.
              </th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200">
                Ben Name
              </th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200">
                Father Name
              </th>
              <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200 text-center w-28">
                Action
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
            <tr v-for="item in beneficiaryList" :key="item.regNo" class="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
              <!-- Sr.No -->
              <td class="py-2.5 px-3.5 font-mono text-slate-500 dark:text-slate-400 text-center">
                {{ item.srNo }}
              </td>

              <!-- Reg No. (Unique) -->
              <td class="py-2.5 px-3.5 font-mono font-semibold text-blue-700 dark:text-blue-400">
                {{ item.regNo }}
              </td>

              <!-- Ben Name -->
              <td class="py-2.5 px-3.5 font-medium text-slate-900 dark:text-slate-100">
                {{ item.benName }}
              </td>

              <!-- Father Name -->
              <td class="py-2.5 px-3.5 text-slate-700 dark:text-slate-300">
                {{ item.fatherName }}
              </td>

              <!-- Action: Edit Button (triggers full page reload with id in URL) -->
              <td class="py-2.5 px-3.5 text-center">
                <a :id="'edit-btn-' + item.regNo" :href="'/scenarios/26?id=' + encodeURIComponent(item.regNo)" @click.prevent="handleEditNavigation(item.regNo)" class="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white transition-colors cursor-pointer shadow-xs">
                  <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                  </svg>
                  <span>Edit</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ========================================================================= -->
    <!-- VIEW B: EDIT PAGE (When id is present in URL)                              -->
    <!-- ========================================================================= -->
    <div v-else class="space-y-6" id="edit-page-container">
      <!-- Success Banner after submission -->
      <div v-if="submitted" id="update-success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-900 dark:text-emerald-300 space-y-2 shadow-xs">
        <div class="flex items-center gap-2">
          <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <strong class="font-semibold text-emerald-950 dark:text-emerald-200 text-sm">
            Beneficiary Record Updated Successfully
          </strong>
        </div>
        <p class="text-slate-600 dark:text-slate-400">
          The beneficiary record has been saved with the latest information:
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[11px] pt-1">
          <div class="p-2.5 bg-white/70 dark:bg-slate-900/60 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
            <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">Beneficiary Name:</span>
            <span class="text-slate-900 dark:text-slate-100 font-semibold">{{ formData.benName }}</span>
          </div>
          <div class="p-2.5 bg-white/70 dark:bg-slate-900/60 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
            <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">Father Name:</span>
            <span class="text-slate-900 dark:text-slate-100 font-semibold">{{ formData.fatherName }}</span>
          </div>
          <div class="p-2.5 bg-white/70 dark:bg-slate-900/60 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
            <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">Email Address:</span>
            <span class="text-slate-900 dark:text-slate-100 font-semibold">{{ formData.email }}</span>
          </div>
        </div>
      </div>

      <!-- Header & Breadcrumb for Edit View -->
      <div class="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div class="flex items-center gap-2">
            <span class="px-2 py-0.5 text-[10px] font-mono font-semibold rounded bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300">
              Edit Mode
            </span>
            <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">
              Edit Beneficiary Details
            </h3>
          </div>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Updating record for Registration No: <span class="font-mono font-semibold text-slate-800 dark:text-slate-200">{{ formData.regNo }}</span>
          </p>
        </div>

        <button @click="handleBackToTable" id="backBtn26" type="button" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors cursor-pointer">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
          <span>Back to Table</span>
        </button>
      </div>

      <!-- Edit Form -->
      <form @submit.prevent="handleSubmitEdit" id="example26-edit-form" class="space-y-4">
        <!-- Registration Number (Read-only reference) -->
        <div>
          <label for="regNo" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Registration Number
          </label>
          <input id="regNo" name="regNo" v-model="formData.regNo" type="text" readonly class="w-full px-3.5 py-2 text-sm font-mono bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 rounded-lg cursor-not-allowed" />
        </div>

        <!-- Beneficiary Name Field -->
        <div>
          <label for="benName" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Beneficiary Name (Ben Name) *
          </label>
          <input id="benName" name="benName" v-model="formData.benName" type="text" required placeholder="Enter Beneficiary Name" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
        </div>

        <!-- Father Name Field -->
        <div>
          <label for="fatherName" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Father Name *
          </label>
          <input id="fatherName" name="fatherName" v-model="formData.fatherName" type="text" required placeholder="Enter Father's Name" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
        </div>

        <!-- Email Field -->
        <div>
          <label for="userEmail" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Email Address *
          </label>
          <input id="userEmail" name="email" v-model="formData.email" type="email" required placeholder="name@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
        </div>

        <!-- Action Buttons -->
        <div class="pt-2 flex items-center gap-3">
          <button id="submitBtn26" type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
            Submit Changes
          </button>
          <button type="button" @click="handleBackToTable" class="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';

// -------------------------------------------------------------
// 15 Beneficiary Records with Unique Registration Numbers
// -------------------------------------------------------------
const beneficiaryList = [
  { srNo: 1, regNo: 'REG-2026-001', benName: 'Rajesh Kumar', fatherName: 'Suresh Kumar', email: 'rajesh.kumar@example.com' },
  { srNo: 2, regNo: 'REG-2026-002', benName: 'Priya Sharma', fatherName: 'Ram Sharma', email: 'priya.sharma@example.com' },
  { srNo: 3, regNo: 'REG-2026-003', benName: 'Amit Patel', fatherName: 'Dinesh Patel', email: 'amit.patel@example.com' },
  { srNo: 4, regNo: 'REG-2026-004', benName: 'Sunita Verma', fatherName: 'Harish Verma', email: 'sunita.verma@example.com' },
  { srNo: 5, regNo: 'REG-2026-005', benName: 'Ramesh Yadav', fatherName: 'Mohan Yadav', email: 'ramesh.yadav@example.com' },
  { srNo: 6, regNo: 'REG-2026-006', benName: 'Anita Devi', fatherName: 'Ramchandra Prasad', email: 'anita.devi@example.com' },
  { srNo: 7, regNo: 'REG-2026-007', benName: 'Vikram Singh', fatherName: 'Mahendra Singh', email: 'vikram.singh@example.com' },
  { srNo: 8, regNo: 'REG-2026-008', benName: 'Pooja Gupta', fatherName: 'Ashok Gupta', email: 'pooja.gupta@example.com' },
  { srNo: 9, regNo: 'REG-2026-009', benName: 'Manoj Tiwari', fatherName: 'Kedarnath Tiwari', email: 'manoj.tiwari@example.com' },
  { srNo: 10, regNo: 'REG-2026-010', benName: 'Kavita Joshi', fatherName: 'Prem Joshi', email: 'kavita.joshi@example.com' },
  { srNo: 11, regNo: 'REG-2026-011', benName: 'Deepak Chauhan', fatherName: 'Surendra Chauhan', email: 'deepak.chauhan@example.com' },
  { srNo: 12, regNo: 'REG-2026-012', benName: 'Neha Mishra', fatherName: 'Santosh Mishra', email: 'neha.mishra@example.com' },
  { srNo: 13, regNo: 'REG-2026-013', benName: 'Sanjay Rathore', fatherName: 'Bhawani Rathore', email: 'sanjay.rathore@example.com' },
  { srNo: 14, regNo: 'REG-2026-014', benName: 'Meena Kumari', fatherName: 'Jagdish Prasad', email: 'meena.kumari@example.com' },
  { srNo: 15, regNo: 'REG-2026-015', benName: 'Alok Pandey', fatherName: 'Brijesh Pandey', email: 'alok.pandey@example.com' }
];

const isEditing = ref(false);
const editId = ref('');
const submitted = ref(false);

const formData = reactive({
  regNo: '',
  benName: '',
  fatherName: '',
  email: ''
});

onMounted(() => {
  // Check URL query parameters for 'id' or 'regNo'
  const params = new URLSearchParams(window.location.search);
  const targetId = params.get('id') || params.get('regNo');

  if (targetId) {
    editId.value = targetId;
    isEditing.value = true;

    // Pre-populate with matching record or default
    const found = beneficiaryList.find((item) => item.regNo === targetId);
    if (found) {
      formData.regNo = found.regNo;
      formData.benName = found.benName;
      formData.fatherName = found.fatherName;
      formData.email = found.email;
    } else {
      formData.regNo = targetId;
      formData.benName = '';
      formData.fatherName = '';
      formData.email = '';
    }
  }
});

function handleEditNavigation(regNo) {
  // Triggers full-page navigation / reload with id in URL as requested
  window.location.href = `/scenarios/26?id=${encodeURIComponent(regNo)}`;
}

function handleBackToTable() {
  // Return to clean table view via full page reload
  window.location.href = '/scenarios/26';
}

function handleSubmitEdit() {
  submitted.value = true;
}
</script>
