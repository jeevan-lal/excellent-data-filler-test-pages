<template>
  <div class="space-y-6">
    <!-- Success Banner -->
    <div v-if="submitted" id="success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-900 dark:text-emerald-300 space-y-3 shadow-xs">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <strong class="font-semibold text-emerald-950 dark:text-emerald-200 text-sm">
          Dynamic Conditional Sections Form Submitted Successfully
        </strong>
      </div>
      <p class="text-slate-600 dark:text-slate-400">
        Saved details for <strong>{{ basicDetails.name }}</strong> ({{ basicDetails.email }}).
        <span v-if="enableSection1">
          Section 1 ({{ section1Data.inputBox || 'Untitled' }}): {{ section1Data.rows.length }} row(s).
        </span>
        <span v-if="enableSection2">
          Section 2 ({{ section2Data.inputBox || 'Untitled' }}): {{ section2Data.rows.length }} row(s).
        </span>
        <span v-if="!enableSection1 && !enableSection2">
          No optional sections were selected.
        </span>
      </p>
    </div>

    <!-- Main Form -->
    <form @submit.prevent="handleSubmit" id="example36-form" class="space-y-6">
      <!-- 1. Basic Details Card -->
      <div class="p-5 bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl space-y-4">
        <div class="flex items-center justify-between border-b border-slate-200/80 dark:border-slate-700/80 pb-3">
          <h3 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Basic Details
          </h3>
          <span class="text-[11px] text-slate-500 dark:text-slate-400">
            Primary Contact Information
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <!-- Name -->
          <div>
            <label for="userName36" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
              Name *
            </label>
            <input id="userName36" name="userName" v-model="basicDetails.name" type="text" required placeholder="David Miller" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
          </div>

          <!-- Email -->
          <div>
            <label for="userEmail36" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
              Email *
            </label>
            <input id="userEmail36" name="email" v-model="basicDetails.email" type="email" required placeholder="david.miller@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
          </div>
        </div>

        <!-- Two Option Checkboxes at Bottom of Basic Details -->
        <div class="pt-3 border-t border-slate-200/80 dark:border-slate-700/80">
          <p class="text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Additional Section Options
          </p>
          <div class="flex flex-col gap-2.5">
            <!-- Option Checkbox 1 -->
            <label for="enableSection1Chk36" class="inline-flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 cursor-pointer select-none">
              <input id="enableSection1Chk36" name="enableSection1" v-model="enableSection1" type="checkbox" class="rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer" />
              <span class="font-medium">Educational Qualifications Section</span>
            </label>

            <!-- Option Checkbox 2 -->
            <label for="enableSection2Chk36" class="inline-flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300 cursor-pointer select-none">
              <input id="enableSection2Chk36" name="enableSection2" v-model="enableSection2" type="checkbox" class="rounded border-slate-300 dark:border-slate-600 text-blue-600 focus:ring-blue-500 w-4 h-4 cursor-pointer" />
              <span class="font-medium">Work Experience &amp; Projects Section</span>
            </label>
          </div>
        </div>
      </div>

      <!-- 2. Conditional Section 1 (Educational Qualifications) -->
      <div v-if="enableSection1" id="section1-container" class="p-5 bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-900/60 rounded-xl space-y-4 shadow-xs">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <span class="inline-block text-[10px] font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2 py-0.5 rounded mb-1">
              Section 1
            </span>
            <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100">
              Educational Qualifications
            </h4>
          </div>
          <span class="text-xs text-slate-500 dark:text-slate-400">
            {{ section1Data.rows.length }} Row(s)
          </span>
        </div>

        <!-- Section 1 Input Box -->
        <div>
          <label for="section1InputBox36" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Institution / University Name *
          </label>
          <input id="section1InputBox36" name="section1Institution" v-model="section1Data.inputBox" type="text" required placeholder="e.g. Stanford University" class="w-full sm:w-1/2 px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
        </div>

        <!-- Section 1 Table with Multiple Form Fields -->
        <div class="space-y-3">
          <div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900">
            <table id="section1-table" class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 w-10 text-center">
                    #
                  </th>
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[180px]">
                    Degree / Course
                  </th>
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 w-36 min-w-[130px] whitespace-nowrap">
                    Graduation Date
                  </th>
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 w-36 min-w-[130px] whitespace-nowrap">
                    Level (Select)
                  </th>
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 w-40 min-w-[140px] whitespace-nowrap">
                    Major (Multi Select)
                  </th>
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 w-32 min-w-[120px] whitespace-nowrap">
                    Honors (Checkboxes)
                  </th>
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 w-32 min-w-[115px] whitespace-nowrap">
                    Grading Scale (Radio)
                  </th>
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 text-center w-14">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                <tr v-for="(row, index) in section1Data.rows" :key="row.id" class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <!-- Sr No -->
                  <td class="py-2 px-3 text-center text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                    {{ index + 1 }}
                  </td>

                  <!-- Degree Input (Text) -->
                  <td class="py-2 px-3">
                    <input :id="`sec1_degree_${index}`" :name="`sec1_degree_${index}`" v-model="row.degree" type="text" placeholder="e.g. B.S. Computer Science" class="w-full px-2.5 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  </td>

                  <!-- Graduation Date -->
                  <td class="py-2 px-3">
                    <input :id="`sec1_date_${index}`" :name="`sec1_date_${index}`" v-model="row.gradDate" type="date" class="w-full px-2 py-1 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  </td>

                  <!-- Level (Single Select) -->
                  <td class="py-2 px-3">
                    <select :id="`sec1_level_${index}`" :name="`sec1_level_${index}`" v-model="row.level" class="w-full px-2 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                      <option value="">Select Level</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="postgraduate">Postgraduate</option>
                      <option value="doctorate">Doctorate</option>
                      <option value="diploma">Diploma</option>
                    </select>
                  </td>

                  <!-- Major (Multi Select) -->
                  <td class="py-2 px-3">
                    <select :id="`sec1_majors_${index}`" :name="`sec1_majors_${index}`" v-model="row.majors" multiple class="w-full px-2 py-1 text-[11px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 h-14">
                      <option value="cs">Computer Science</option>
                      <option value="math">Mathematics</option>
                      <option value="physics">Physics</option>
                      <option value="business">Business Admin</option>
                    </select>
                  </td>

                  <!-- Honors (Multiple Checkboxes) -->
                  <td class="py-2 px-3">
                    <div class="flex flex-col gap-1.5 py-0.5">
                      <label :for="`sec1_chk_cum_${index}`" class="inline-flex items-center gap-1.5 cursor-pointer select-none text-[11px] text-slate-700 dark:text-slate-300">
                        <input :id="`sec1_chk_cum_${index}`" :name="`sec1_chk_cum_${index}`" type="checkbox" v-model="row.honorsCumLaude" class="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
                        <span>Cum Laude</span>
                      </label>
                      <label :for="`sec1_chk_dean_${index}`" class="inline-flex items-center gap-1.5 cursor-pointer select-none text-[11px] text-slate-700 dark:text-slate-300">
                        <input :id="`sec1_chk_dean_${index}`" :name="`sec1_chk_dean_${index}`" type="checkbox" v-model="row.honorsDeansList" class="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
                        <span>Dean's List</span>
                      </label>
                    </div>
                  </td>

                  <!-- Grading Scale (Multiple Radio) -->
                  <td class="py-2 px-3">
                    <div class="flex flex-col gap-1.5 py-0.5">
                      <label :for="`sec1_rad_gpa_${index}`" class="inline-flex items-center gap-1.5 cursor-pointer select-none text-[11px] text-slate-700 dark:text-slate-300">
                        <input :id="`sec1_rad_gpa_${index}`" :name="`sec1_grade_scale_${index}`" type="radio" value="gpa" v-model="row.gradingScale" class="text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
                        <span>GPA 4.0</span>
                      </label>
                      <label :for="`sec1_rad_pct_${index}`" class="inline-flex items-center gap-1.5 cursor-pointer select-none text-[11px] text-slate-700 dark:text-slate-300">
                        <input :id="`sec1_rad_pct_${index}`" :name="`sec1_grade_scale_${index}`" type="radio" value="pct" v-model="row.gradingScale" class="text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
                        <span>Percentage</span>
                      </label>
                    </div>
                  </td>

                  <!-- Action: Remove Row -->
                  <td class="py-2 px-3 text-center">
                    <button type="button" @click="removeSection1Row(index)" title="Remove Row" class="text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 p-1 rounded transition-colors cursor-pointer">
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

          <!-- Bottom of Table: Add Row Button -->
          <div class="pt-1 flex items-center justify-between">
            <button id="addRowSection1Btn36" type="button" @click="addSection1Row" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-indigo-50 dark:bg-indigo-950/60 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 transition-colors cursor-pointer shadow-xs">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Add Row</span>
            </button>
            <span class="text-[11px] text-slate-400">
              Click Add Row to insert a new qualification line item
            </span>
          </div>
        </div>
      </div>

      <!-- 3. Conditional Section 2 (Work Experience & Projects) -->
      <div v-if="enableSection2" id="section2-container" class="p-5 bg-white dark:bg-slate-900 border border-emerald-200 dark:border-emerald-900/60 rounded-xl space-y-4 shadow-xs">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
          <div>
            <span class="inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded mb-1">
              Section 2
            </span>
            <h4 class="text-sm font-bold text-slate-900 dark:text-slate-100">
              Work Experience &amp; Projects
            </h4>
          </div>
          <span class="text-xs text-slate-500 dark:text-slate-400">
            {{ section2Data.rows.length }} Row(s)
          </span>
        </div>

        <!-- Section 2 Input Box -->
        <div>
          <label for="section2InputBox36" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Company / Organization Name *
          </label>
          <input id="section2InputBox36" name="section2Company" v-model="section2Data.inputBox" type="text" required placeholder="e.g. Acme Corporation" class="w-full sm:w-1/2 px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
        </div>

        <!-- Section 2 Table with Multiple Form Fields -->
        <div class="space-y-3">
          <div class="overflow-x-auto border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-900">
            <table id="section2-table" class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 w-10 text-center">
                    #
                  </th>
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 min-w-[180px]">
                    Role / Project Name
                  </th>
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 w-36 min-w-[130px] whitespace-nowrap">
                    Start Date
                  </th>
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 w-36 min-w-[130px] whitespace-nowrap">
                    Domain (Select)
                  </th>
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 w-40 min-w-[140px] whitespace-nowrap">
                    Skills (Multi Select)
                  </th>
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 w-32 min-w-[120px] whitespace-nowrap">
                    Engagement (Checkboxes)
                  </th>
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 w-32 min-w-[115px] whitespace-nowrap">
                    Status (Radio)
                  </th>
                  <th scope="col" class="py-2.5 px-3 font-semibold text-slate-700 dark:text-slate-200 text-center w-14">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 dark:divide-slate-800">
                <tr v-for="(row, index) in section2Data.rows" :key="row.id" class="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                  <!-- Sr No -->
                  <td class="py-2 px-3 text-center text-slate-500 dark:text-slate-400 font-mono text-[11px]">
                    {{ index + 1 }}
                  </td>

                  <!-- Role Input (Text) -->
                  <td class="py-2 px-3">
                    <input :id="`sec2_role_${index}`" :name="`sec2_role_${index}`" v-model="row.role" type="text" placeholder="e.g. Lead Engineer" class="w-full px-2.5 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  </td>

                  <!-- Start Date -->
                  <td class="py-2 px-3">
                    <input :id="`sec2_date_${index}`" :name="`sec2_date_${index}`" v-model="row.startDate" type="date" class="w-full px-2 py-1 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                  </td>

                  <!-- Domain (Single Select) -->
                  <td class="py-2 px-3">
                    <select :id="`sec2_domain_${index}`" :name="`sec2_domain_${index}`" v-model="row.domain" class="w-full px-2 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                      <option value="">Select Domain</option>
                      <option value="engineering">Engineering</option>
                      <option value="design">Product Design</option>
                      <option value="devops">DevOps &amp; Cloud</option>
                      <option value="qa">Quality Assurance</option>
                    </select>
                  </td>

                  <!-- Skills (Multi Select) -->
                  <td class="py-2 px-3">
                    <select :id="`sec2_skills_${index}`" :name="`sec2_skills_${index}`" v-model="row.skills" multiple class="w-full px-2 py-1 text-[11px] bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600 h-14">
                      <option value="vue">Vue.js / Nuxt</option>
                      <option value="typescript">TypeScript</option>
                      <option value="tailwind">Tailwind CSS</option>
                      <option value="node">Node.js / Express</option>
                    </select>
                  </td>

                  <!-- Engagement (Multiple Checkboxes) -->
                  <td class="py-2 px-3">
                    <div class="flex flex-col gap-1.5 py-0.5">
                      <label :for="`sec2_chk_full_${index}`" class="inline-flex items-center gap-1.5 cursor-pointer select-none text-[11px] text-slate-700 dark:text-slate-300">
                        <input :id="`sec2_chk_full_${index}`" :name="`sec2_chk_full_${index}`" type="checkbox" v-model="row.isFullTime" class="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
                        <span>Full Time</span>
                      </label>
                      <label :for="`sec2_chk_rem_${index}`" class="inline-flex items-center gap-1.5 cursor-pointer select-none text-[11px] text-slate-700 dark:text-slate-300">
                        <input :id="`sec2_chk_rem_${index}`" :name="`sec2_chk_rem_${index}`" type="checkbox" v-model="row.isRemote" class="rounded border-slate-300 text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
                        <span>Remote</span>
                      </label>
                    </div>
                  </td>

                  <!-- Status (Multiple Radio) -->
                  <td class="py-2 px-3">
                    <div class="flex flex-col gap-1.5 py-0.5">
                      <label :for="`sec2_rad_curr_${index}`" class="inline-flex items-center gap-1.5 cursor-pointer select-none text-[11px] text-slate-700 dark:text-slate-300">
                        <input :id="`sec2_rad_curr_${index}`" :name="`sec2_status_${index}`" type="radio" value="current" v-model="row.status" class="text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
                        <span>Current</span>
                      </label>
                      <label :for="`sec2_rad_past_${index}`" class="inline-flex items-center gap-1.5 cursor-pointer select-none text-[11px] text-slate-700 dark:text-slate-300">
                        <input :id="`sec2_rad_past_${index}`" :name="`sec2_status_${index}`" type="radio" value="completed" v-model="row.status" class="text-blue-600 focus:ring-blue-500 w-3.5 h-3.5" />
                        <span>Completed</span>
                      </label>
                    </div>
                  </td>

                  <!-- Action: Remove Row -->
                  <td class="py-2 px-3 text-center">
                    <button type="button" @click="removeSection2Row(index)" title="Remove Row" class="text-slate-400 hover:text-rose-600 dark:hover:text-rose-400 p-1 rounded transition-colors cursor-pointer">
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

          <!-- Bottom of Table: Add Row Button -->
          <div class="pt-1 flex items-center justify-between">
            <button id="addRowSection2Btn36" type="button" @click="addSection2Row" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 transition-colors cursor-pointer shadow-xs">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
              <span>Add Row</span>
            </button>
            <span class="text-[11px] text-slate-400">
              Click Add Row to insert a new work experience line item
            </span>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 dark:border-slate-800">
        <button id="resetBtn36" type="button" @click="handleReset" class="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer">
          Reset
        </button>
        <button id="submitBtn36" type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer shadow-xs">
          Submit Form
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const submitted = ref(false);

const basicDetails = reactive({
  name: '',
  email: ''
});

const enableSection1 = ref(false);
const enableSection2 = ref(false);

let nextSec1Id = 2;
const section1Data = reactive({
  inputBox: '',
  rows: [
    {
      id: 1,
      degree: '',
      gradDate: '',
      level: '',
      majors: [],
      honorsCumLaude: false,
      honorsDeansList: false,
      gradingScale: ''
    }
  ]
});

let nextSec2Id = 2;
const section2Data = reactive({
  inputBox: '',
  rows: [
    {
      id: 1,
      role: '',
      startDate: '',
      domain: '',
      skills: [],
      isFullTime: false,
      isRemote: false,
      status: ''
    }
  ]
});

function addSection1Row() {
  section1Data.rows.push({
    id: nextSec1Id++,
    degree: '',
    gradDate: '',
    level: '',
    majors: [],
    honorsCumLaude: false,
    honorsDeansList: false,
    gradingScale: ''
  });
}

function removeSection1Row(index) {
  if (section1Data.rows.length > 1) {
    section1Data.rows.splice(index, 1);
  } else {
    // Clear the only row if user wants to delete
    section1Data.rows[0].degree = '';
    section1Data.rows[0].gradDate = '';
    section1Data.rows[0].level = '';
    section1Data.rows[0].majors = [];
    section1Data.rows[0].honorsCumLaude = false;
    section1Data.rows[0].honorsDeansList = false;
    section1Data.rows[0].gradingScale = '';
  }
}

function addSection2Row() {
  section2Data.rows.push({
    id: nextSec2Id++,
    role: '',
    startDate: '',
    domain: '',
    skills: [],
    isFullTime: false,
    isRemote: false,
    status: ''
  });
}

function removeSection2Row(index) {
  if (section2Data.rows.length > 1) {
    section2Data.rows.splice(index, 1);
  } else {
    // Clear the only row if user wants to delete
    section2Data.rows[0].role = '';
    section2Data.rows[0].startDate = '';
    section2Data.rows[0].domain = '';
    section2Data.rows[0].skills = [];
    section2Data.rows[0].isFullTime = false;
    section2Data.rows[0].isRemote = false;
    section2Data.rows[0].status = '';
  }
}

function handleSubmit() {
  submitted.value = true;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleReset() {
  basicDetails.name = '';
  basicDetails.email = '';
  enableSection1.value = false;
  enableSection2.value = false;
  section1Data.inputBox = '';
  section1Data.rows = [
    {
      id: nextSec1Id++,
      degree: '',
      gradDate: '',
      level: '',
      majors: [],
      honorsCumLaude: false,
      honorsDeansList: false,
      gradingScale: ''
    }
  ];
  section2Data.inputBox = '';
  section2Data.rows = [
    {
      id: nextSec2Id++,
      role: '',
      startDate: '',
      domain: '',
      skills: [],
      isFullTime: false,
      isRemote: false,
      status: ''
    }
  ];
  submitted.value = false;
}
</script>
