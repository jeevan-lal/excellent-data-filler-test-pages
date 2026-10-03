<template>
  <div class="space-y-6">
    <!-- Notice Banner -->
    <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
      <span class="font-semibold text-slate-800 dark:text-slate-200">Test Scenario:</span>
      Search button triggers a silent request without loading spinners on the page or button. After a brief delay, previous records are removed and matching search records appear with Edit actions.
    </div>

    <!-- Search Form Section -->
    <div class="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-5" id="search-section-scope">
      <form @submit.prevent="handleSearchSubmit" class="space-y-3">
        <div>
          <label for="searchInput21" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Search Records
          </label>
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            <div class="relative flex-1">
              <input id="searchInput21" name="searchQuery" v-model="searchQuery" type="text" placeholder="Search by name, email or keyword (e.g. Alex, Taylor, Riley)..." class="w-full pl-9 pr-3.5 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
              <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 dark:text-slate-500">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>
            </div>

            <!-- Search Button (Keeps normal styling without loading spinner on click) -->
            <button id="searchBtn21" type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer shrink-0 text-center">
              Search
            </button>

            <!-- Reset Button -->
            <button v-if="hasSearched" @click="handleReset" id="resetSearchBtn21" type="button" class="bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors cursor-pointer shrink-0">
              Reset
            </button>
          </div>
        </div>
      </form>
    </div>

    <!-- Edit Record Modal / Panel (when an Edit button is clicked) -->
    <div v-if="editingRecord" id="edit-record-panel" class="p-5 bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/50 rounded-xl space-y-4">
      <div class="flex items-center justify-between pb-2 border-b border-blue-100 dark:border-blue-900/40">
        <div>
          <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Edit Record #{{ editingRecord.id }}
          </h4>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            Modify record information and save changes.
          </p>
        </div>
        <button @click="editingRecord = null" type="button" class="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer">
          Cancel
        </button>
      </div>

      <form @submit.prevent="handleSaveEdit" class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div>
          <label for="editName21" class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Name *
          </label>
          <input id="editName21" name="editName" v-model="editForm.name" required class="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
        </div>

        <div>
          <label for="editEmail21" class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Email *
          </label>
          <input id="editEmail21" name="editEmail" v-model="editForm.email" type="email" required class="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
        </div>

        <div>
          <label for="editRole21" class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Role *
          </label>
          <input id="editRole21" name="editRole" v-model="editForm.role" required class="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
        </div>

        <div class="sm:col-span-3 flex justify-end gap-2 pt-1">
          <button type="button" @click="editingRecord = null" class="text-xs px-3.5 py-1.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 cursor-pointer">
            Cancel
          </button>
          <button id="saveEditBtn21" type="submit" class="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-1.5 rounded-md transition-colors cursor-pointer">
            Save Changes
          </button>
        </div>
      </form>
    </div>

    <!-- Edit Success Toast / Notice -->
    <div v-if="editSuccessMessage" id="edit-success-notice" class="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs text-emerald-900 dark:text-emerald-300 flex items-center justify-between">
      <span>{{ editSuccessMessage }}</span>
      <button @click="editSuccessMessage = ''" type="button" class="text-emerald-700 dark:text-emerald-300 hover:underline cursor-pointer">
        Dismiss
      </button>
    </div>

    <!-- Records Table Section -->
    <div class="space-y-3" id="records-section">
      <div class="flex items-center justify-between">
        <div>
          <h4 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            {{ hasSearched ? 'Search Results' : 'Existing Records' }}
          </h4>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
            {{ hasSearched ? 'Displaying filtered search records.' : 'Baseline records before search execution.' }}
          </p>
        </div>
        <div class="flex items-center gap-2">
          <span v-if="hasSearched" class="text-[10px] font-bold uppercase tracking-wider bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
            Search Applied
          </span>
          <span class="text-[11px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
            Count: {{ displayedRecords.length }}
          </span>
        </div>
      </div>

      <div class="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 shadow-xs">
        <table id="recordsTable21" class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700 text-[11px] font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
              <th class="py-2.5 px-3">#</th>
              <th class="py-2.5 px-3">Name</th>
              <th class="py-2.5 px-3">Email</th>
              <th class="py-2.5 px-3">Role</th>
              <th class="py-2.5 px-3">Status</th>
              <th class="py-2.5 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-slate-800 text-xs text-slate-700 dark:text-slate-300">
            <tr v-for="(rec, index) in displayedRecords" :key="rec.id" class="hover:bg-slate-50/80 dark:hover:bg-slate-800/40 transition-colors">
              <td class="py-2.5 px-3 font-mono text-[11px] text-slate-400 dark:text-slate-500">
                {{ index + 1 }}
              </td>
              <td class="py-2.5 px-3 font-semibold text-slate-900 dark:text-slate-100">
                {{ rec.name }}
              </td>
              <td class="py-2.5 px-3 text-slate-600 dark:text-slate-400 font-mono text-[11px]">
                {{ rec.email }}
              </td>
              <td class="py-2.5 px-3">
                {{ rec.role }}
              </td>
              <td class="py-2.5 px-3">
                <span :class="[
                  'text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider',
                  rec.status === 'Active' ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/50' : '',
                  rec.status === 'Verified' ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/50' : '',
                  rec.status === 'Pending' ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800/50' : ''
                ]">
                  {{ rec.status }}
                </span>
              </td>
              <td class="py-2.5 px-3 text-right">
                <!-- Edit Action Button (always present on search records) -->
                <button :id="'edit-btn-' + rec.id" @click="handleEditRecord(rec)" type="button" class="edit-record-btn inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors shadow-2xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-600">
                  <svg class="w-3 h-3 text-slate-500 dark:text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                  </svg>
                  <span>Edit</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const INITIAL_RECORDS = [
  { id: 101, name: 'Jordan Lee', email: 'jordan.lee@example.com', role: 'Account Manager', status: 'Active' },
  { id: 102, name: 'Casey Miller', email: 'casey.miller@example.com', role: 'Technical Lead', status: 'Pending' },
  { id: 103, name: 'Morgan Smith', email: 'morgan.smith@example.com', role: 'Data Analyst', status: 'Active' }
];

const SEARCH_CATALOG = [
  { id: 201, name: 'Alex Carter', email: 'alex.carter@example.com', role: 'Senior Developer', status: 'Verified' },
  { id: 202, name: 'Taylor Jenkins', email: 'taylor.j@example.com', role: 'QA Automation Specialist', status: 'Active' },
  { id: 203, name: 'Riley Vance', email: 'riley.vance@example.com', role: 'Product Manager', status: 'Active' }
];

const searchQuery = ref('');
const displayedRecords = ref([...INITIAL_RECORDS]);
const hasSearched = ref(false);
const editingRecord = ref(null);
const editSuccessMessage = ref('');

const editForm = reactive({
  name: '',
  email: '',
  role: ''
});

let searchTimer = null;

function handleSearchSubmit() {
  // Clear any existing active timer
  if (searchTimer) clearTimeout(searchTimer);

  const query = searchQuery.value.trim().toLowerCase();

  // No loading indicator on page or search button (per specification).
  // Silent background request delay (1.4 seconds)
  searchTimer = setTimeout(() => {
    hasSearched.value = true;
    editingRecord.value = null;

    if (query) {
      // Find matching items from search catalog or generate matching search record
      const matches = SEARCH_CATALOG.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.email.toLowerCase().includes(query) ||
          item.role.toLowerCase().includes(query)
      );

      if (matches.length > 0) {
        displayedRecords.value = matches.map((item) => ({ ...item }));
      } else {
        // Dynamic search record matching user search term
        displayedRecords.value = [
          {
            id: Date.now(),
            name: searchQuery.value,
            email: `${query.replace(/\s+/g, '.')}@example.com`,
            role: 'Search Result Lead',
            status: 'Verified'
          },
          ...SEARCH_CATALOG.slice(0, 1).map((item) => ({ ...item }))
        ];
      }
    } else {
      // If query is empty, replace initial records with search catalog
      displayedRecords.value = SEARCH_CATALOG.map((item) => ({ ...item }));
    }
  }, 1400);
}

function handleReset() {
  if (searchTimer) clearTimeout(searchTimer);
  searchQuery.value = '';
  hasSearched.value = false;
  editingRecord.value = null;
  editSuccessMessage.value = '';
  displayedRecords.value = [...INITIAL_RECORDS];
}

function handleEditRecord(rec) {
  editingRecord.value = rec;
  editForm.name = rec.name;
  editForm.email = rec.email;
  editForm.role = rec.role;
  editSuccessMessage.value = '';
}

function handleSaveEdit() {
  if (!editingRecord.value) return;

  const targetIndex = displayedRecords.value.findIndex(
    (r) => r.id === editingRecord.value.id
  );

  if (targetIndex !== -1) {
    displayedRecords.value[targetIndex].name = editForm.name;
    displayedRecords.value[targetIndex].email = editForm.email;
    displayedRecords.value[targetIndex].role = editForm.role;
    displayedRecords.value[targetIndex].status = 'Verified';
  }

  editSuccessMessage.value = `Record #${editingRecord.value.id} updated successfully.`;
  editingRecord.value = null;
}
</script>
