<template>
  <div>
    <!-- Submission Feedback Notice -->
    <div v-if="submitted" id="submission-success-banner" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 rounded-xl text-xs mb-6 transition-all">
      <div class="flex items-center gap-2 mb-1 font-bold text-emerald-950 dark:text-emerald-200">
        <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
        <strong class="font-semibold block text-emerald-950 dark:text-emerald-200">Form submitted successfully!</strong>
      </div>
      <p class="mb-2 text-emerald-800 dark:text-emerald-300">
        Thank you, your information has been received.
      </p>
      <pre class="bg-white/80 dark:bg-slate-900/80 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900/60 font-mono text-[11px] overflow-x-auto text-slate-800 dark:text-slate-200">{{ formattedData }}</pre>
    </div>

    <form @submit.prevent="handleSubmit" id="comprehensive-controls-form" class="space-y-5">
      <!-- Row 1: First Name & Email -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="firstName1B" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            First Name <span class="text-red-500">*</span>
          </label>
          <input id="firstName1B" name="firstName" v-model="form.firstName" type="text" required placeholder="Alex" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors" />
        </div>

        <div>
          <label for="email1B" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Email <span class="text-red-500">*</span>
          </label>
          <input id="email1B" name="email" v-model="form.email" type="email" required placeholder="alex@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors" />
        </div>
      </div>

      <!-- Row 2: Date of Birth & Single Select Dropdown -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label for="birthDate1B" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Date of Birth <span class="text-red-500">*</span>
          </label>
          <input id="birthDate1B" name="birthDate" v-model="form.birthDate" type="date" required class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors" />
        </div>

        <div>
          <label for="department1B" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Department (Single Select) <span class="text-red-500">*</span>
          </label>
          <div class="relative">
            <select id="department1B" name="department" v-model="form.department" required class="w-full appearance-none px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors cursor-pointer pr-9">
              <option value="" disabled>Select Department</option>
              <option value="IT">IT</option>
              <option value="HR">HR</option>
              <option value="Sales">Sales</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400 dark:text-slate-500">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <!-- Multiple Select -->
      <div>
        <label for="skills1B" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Technical Skills (Multiple Select)
        </label>
        <p class="text-[11px] text-slate-500 dark:text-slate-400 mb-1.5">
          Hold Ctrl (or Command on Mac) to select multiple options.
        </p>
        <select id="skills1B" name="skills" v-model="form.skills" multiple size="5" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors cursor-pointer">
          <option value="JavaScript">JavaScript</option>
          <option value="Python">Python</option>
          <option value="React">React</option>
          <option value="Vue">Vue</option>
          <option value="Java">Java</option>
          <option value="Docker">Docker</option>
          <option value="Git">Git</option>
          <option value="SQL">SQL</option>
        </select>
      </div>

      <!-- Gender Radio Group -->
      <div>
        <span class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
          Gender (Radio Selection) <span class="text-red-500">*</span>
        </span>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <label for="genderMale1B" :class="[
            'flex items-center gap-3 p-3 rounded-lg border text-xs font-medium cursor-pointer transition-colors',
            form.gender === 'Male'
              ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300'
              : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
          ]">
            <input id="genderMale1B" name="gender" type="radio" value="Male" v-model="form.gender" required class="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300" />
            <span>Male</span>
          </label>

          <label for="genderFemale1B" :class="[
            'flex items-center gap-3 p-3 rounded-lg border text-xs font-medium cursor-pointer transition-colors',
            form.gender === 'Female'
              ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300'
              : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
          ]">
            <input id="genderFemale1B" name="gender" type="radio" value="Female" v-model="form.gender" required class="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300" />
            <span>Female</span>
          </label>

          <label for="genderOther1B" :class="[
            'flex items-center gap-3 p-3 rounded-lg border text-xs font-medium cursor-pointer transition-colors',
            form.gender === 'Other'
              ? 'border-blue-500 bg-blue-50/50 dark:bg-blue-950/40 text-blue-900 dark:text-blue-300'
              : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600'
          ]">
            <input id="genderOther1B" name="gender" type="radio" value="Other" v-model="form.gender" required class="w-4 h-4 text-blue-600 focus:ring-blue-500 border-slate-300" />
            <span>Other</span>
          </label>
        </div>
      </div>

      <!-- Textarea -->
      <div>
        <label for="bio1B" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Biography / Additional Notes
        </label>
        <textarea id="bio1B" name="bio" v-model="form.bio" rows="3" placeholder="Brief summary of professional background or automated test notes..." class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-colors"></textarea>
      </div>

      <!-- Checkboxes -->
      <div class="space-y-2.5 pt-1">
        <label for="subscribeNewsletter1B" class="flex items-center gap-2.5 cursor-pointer">
          <input id="subscribeNewsletter1B" name="subscribeNewsletter" type="checkbox" v-model="form.subscribeNewsletter" class="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300" />
          <span class="text-xs text-slate-700 dark:text-slate-300">
            Subscribe to Newsletter
          </span>
        </label>

        <label for="agreeTerms1B" class="flex items-center gap-2.5 cursor-pointer">
          <input id="agreeTerms1B" name="agreeTerms" type="checkbox" v-model="form.agreeTerms" required class="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300" />
          <span class="text-xs text-slate-700 dark:text-slate-300">
            Agree to Terms &amp; Conditions <span class="text-red-500">*</span>
          </span>
        </label>
      </div>

      <!-- Actions: Reset & Submit -->
      <div class="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <button type="button" @click="handleReset" class="text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 px-4 py-2 rounded-lg transition-colors cursor-pointer">
          Reset
        </button>

        <button type="submit" id="submit-example-1b" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer shadow-xs">
          Submit Form
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, computed, nextTick } from 'vue';

const form = reactive({
  firstName: '',
  fullName: '',
  email: '',
  birthDate: '',
  department: '',
  skills: [],
  gender: '',
  bio: '',
  subscribeNewsletter: false,
  agreeTerms: false
});

const submitted = ref(false);

const formattedData = computed(() => {
  return JSON.stringify(form, null, 2);
});

function handleSubmit() {
  submitted.value = true;
  nextTick(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function handleReset() {
  form.firstName = '';
  form.fullName = '';
  form.email = '';
  form.birthDate = '';
  form.department = '';
  form.skills = [];
  form.gender = '';
  form.bio = '';
  form.subscribeNewsletter = false;
  form.agreeTerms = false;
  submitted.value = false;
}
</script>
