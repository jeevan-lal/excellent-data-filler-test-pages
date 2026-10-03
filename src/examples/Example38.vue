<template>
  <div class="space-y-6">
    <!-- Notice Banner -->
    <div class="p-3 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl text-xs text-slate-600 dark:text-slate-300 leading-relaxed flex items-center justify-between gap-3 shadow-xs">
      <div>
        <strong class="font-semibold text-slate-800 dark:text-slate-100">Student Directory Registry:</strong>
        Filter student records in real time using the search input. Click the Delete button to remove rows with smooth animated exit.
      </div>
      <button v-if="students.length < INITIAL_STUDENTS.length" id="resetStudentsBtn38" type="button" @click="resetStudents" class="shrink-0 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800 transition-colors cursor-pointer">
        Restore All ({{ INITIAL_STUDENTS.length }})
      </button>
    </div>

    <!-- Search Bar & Controls -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs">
      <!-- Search Input with Icon -->
      <div class="relative flex-1 max-w-md">
        <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input id="studentSearchInput38" v-model="searchQuery" type="text" placeholder="Search by name, father's name, gender, or class..." class="w-full pl-10 pr-9 py-2 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
        <button v-if="searchQuery" type="button" @click="searchQuery = ''" title="Clear search" class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer">
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Record Counter Badge -->
      <div class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
        <span>Showing</span>
        <strong class="text-slate-900 dark:text-slate-100 font-mono">{{ filteredStudents.length }}</strong>
        <span>of</span>
        <strong class="text-slate-900 dark:text-slate-100 font-mono">{{ students.length }}</strong>
        <span>students</span>
      </div>
    </div>

    <!-- Student Table Container -->
    <div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900 shadow-xs">
      <table id="student-table" class="w-full text-left border-collapse text-xs">
        <thead>
          <tr class="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
            <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200 w-12 text-center">
              #
            </th>
            <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200 min-w-[150px]">
              Name
            </th>
            <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200 min-w-[150px]">
              Father's Name
            </th>
            <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200 text-center w-24">
              Gender
            </th>
            <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200 text-center w-24">
              Class
            </th>
            <th scope="col" class="py-3 px-3.5 font-semibold text-slate-700 dark:text-slate-200 text-center w-28">
              Action
            </th>
          </tr>
        </thead>

        <TransitionGroup name="row-fade" tag="tbody" class="divide-y divide-slate-100 dark:divide-slate-800">
          <tr v-for="student in filteredStudents" :key="student.id" :id="`student-row-${student.id}`" class="hover:bg-slate-50/70 dark:hover:bg-slate-800/40 transition-colors">
            <!-- ID / Index -->
            <td class="py-2.5 px-3.5 font-mono text-slate-500 dark:text-slate-400 text-center">
              {{ student.id }}
            </td>

            <!-- Student Name -->
            <td class="py-2.5 px-3.5 font-semibold text-slate-900 dark:text-slate-100">
              {{ student.name }}
            </td>

            <!-- Father's Name -->
            <td class="py-2.5 px-3.5 text-slate-600 dark:text-slate-300">
              {{ student.fatherName }}
            </td>

            <!-- Gender -->
            <td class="py-2.5 px-3.5 text-center">
              <span class="inline-block px-2 py-0.5 rounded text-[11px] font-medium" :class="student.gender === 'Male'
                ? 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'
                : 'bg-pink-50 dark:bg-pink-950/60 text-pink-700 dark:text-pink-300 border border-pink-200 dark:border-pink-800'">
                {{ student.gender }}
              </span>
            </td>

            <!-- Class -->
            <td class="py-2.5 px-3.5 text-center font-mono font-medium text-slate-700 dark:text-slate-300">
              {{ student.studentClass }}
            </td>

            <!-- Action: Delete button or No action -->
            <td class="py-2.5 px-3.5 text-center">
              <button v-if="student.canDelete" :id="`deleteBtn38_${student.id}`" type="button" @click="deleteStudent(student.id)" title="Delete this record" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-rose-700 dark:text-rose-300 bg-rose-50 dark:bg-rose-950/60 hover:bg-rose-100 dark:hover:bg-rose-900/60 border border-rose-200 dark:border-rose-800 rounded-lg transition-colors cursor-pointer shadow-xs">
                <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                  <line x1="10" y1="11" x2="10" y2="17"></line>
                  <line x1="14" y1="11" x2="14" y2="17"></line>
                </svg>
                <span>Delete</span>
              </button>

              <span v-else class="inline-block px-2.5 py-1 text-xs font-medium text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-slate-800/80 rounded-md">
                No action
              </span>
            </td>
          </tr>
        </TransitionGroup>
      </table>

      <!-- Empty State When No Search Matches -->
      <div v-if="filteredStudents.length === 0" class="py-12 px-4 text-center bg-white dark:bg-slate-900">
        <div class="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 mx-auto mb-3">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <p class="text-xs font-semibold text-slate-800 dark:text-slate-200">
          No student records found matching "{{ searchQuery }}"
        </p>
        <p class="text-[11px] text-slate-400 mt-1">
          Try adjusting your search terms or clear the filter.
        </p>
        <button type="button" @click="searchQuery = ''" class="mt-3 inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors cursor-pointer">
          Clear Search
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const INITIAL_STUDENTS = [
  { id: 1, name: 'Rajesh Kumar', fatherName: 'Suresh Kumar', gender: 'Male', studentClass: '3rd', canDelete: true },
  { id: 2, name: 'Priya Sharma', fatherName: 'Vijay Sharma', gender: 'Female', studentClass: '1st', canDelete: false },
  { id: 3, name: 'Amit Patel', fatherName: 'Ramesh Patel', gender: 'Male', studentClass: '5th', canDelete: true },
  { id: 4, name: 'Sneha Gupta', fatherName: 'Anil Gupta', gender: 'Female', studentClass: '1st', canDelete: true },
  { id: 5, name: 'Vikram Singh', fatherName: 'Harpal Singh', gender: 'Male', studentClass: '3rd', canDelete: true },
  { id: 6, name: 'Anjali Verma', fatherName: 'Prakash Verma', gender: 'Female', studentClass: '1st', canDelete: true },
  { id: 7, name: 'Rahul Mehta', fatherName: 'Dinesh Mehta', gender: 'Male', studentClass: '3rd', canDelete: true },
  { id: 8, name: 'Kavita Reddy', fatherName: 'Krishna Reddy', gender: 'Female', studentClass: '5th', canDelete: false },
  { id: 9, name: 'Sanjay Joshi', fatherName: 'Mohan Joshi', gender: 'Male', studentClass: '5th', canDelete: true },
  { id: 10, name: 'Deepika Nair', fatherName: 'Ravi Nair', gender: 'Female', studentClass: '4th', canDelete: true },
  { id: 11, name: 'Arjun Desai', fatherName: 'Kiran Desai', gender: 'Male', studentClass: '1st', canDelete: false },
  { id: 12, name: 'Pooja Iyer', fatherName: 'Subramaniam Iyer', gender: 'Female', studentClass: '3rd', canDelete: true },
  { id: 13, name: 'Manish Agarwal', fatherName: 'Rajendra Agarwal', gender: 'Male', studentClass: '3rd', canDelete: true },
  { id: 14, name: 'Neha Kapoor', fatherName: 'Ashok Kapoor', gender: 'Female', studentClass: '2nd', canDelete: true },
  { id: 15, name: 'Karan Malhotra', fatherName: 'Vinod Malhotra', gender: 'Male', studentClass: '4th', canDelete: false },
  { id: 16, name: 'Ritu Bansal', fatherName: 'Mahesh Bansal', gender: 'Female', studentClass: '4th', canDelete: true },
  { id: 17, name: 'Aditya Rao', fatherName: 'Venkat Rao', gender: 'Male', studentClass: '4th', canDelete: true },
  { id: 18, name: 'Simran Kaur', fatherName: 'Jaswant Kaur', gender: 'Female', studentClass: '5th', canDelete: false },
  { id: 19, name: 'Nikhil Pandey', fatherName: 'Shyam Pandey', gender: 'Male', studentClass: '5th', canDelete: true },
  { id: 20, name: 'Megha Saxena', fatherName: 'Rakesh Saxena', gender: 'Female', studentClass: '5th', canDelete: true }
];

const students = ref(INITIAL_STUDENTS.map((s) => ({ ...s })));
const searchQuery = ref('');

const filteredStudents = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();
  if (!query) {
    return students.value;
  }
  return students.value.filter((s) => {
    return (
      String(s.id).includes(query) ||
      s.name.toLowerCase().includes(query) ||
      s.fatherName.toLowerCase().includes(query) ||
      s.gender.toLowerCase().includes(query) ||
      s.studentClass.toLowerCase().includes(query)
    );
  });
});

function deleteStudent(studentId) {
  const index = students.value.findIndex((s) => s.id === studentId);
  if (index !== -1) {
    students.value.splice(index, 1);
  }
}

function resetStudents() {
  students.value = INITIAL_STUDENTS.map((s) => ({ ...s }));
  searchQuery.value = '';
}
</script>

<style scoped>
/* Row delete transition animations */
.row-fade-enter-active,
.row-fade-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}

.row-fade-enter-from {
  opacity: 0;
  transform: translateX(-16px);
}

.row-fade-leave-to {
  opacity: 0;
  transform: translateX(24px) scaleY(0.7);
}

.row-fade-move {
  transition: transform 0.35s ease;
}
</style>
