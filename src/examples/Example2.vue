<template>
  <div>
    <div class="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-lg text-xs text-amber-900 dark:text-amber-300 mb-4">
      Submitting triggers immediate reload and fires native <code>window.alert()</code> dialog.
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="applicantName2" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Applicant Name
        </label>
        <input
          id="applicantName2"
          v-model="form.name"
          required
          placeholder="Siddharth Roy"
          class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>

      <div class="pt-4 flex justify-end">
        <button
          type="submit"
          class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
        >
          Submit &amp; Alert
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

const form = reactive({
  name: ''
});

function handleSubmit() {
  sessionStorage.setItem('ed_example2_alert', '1');
  window.location.reload();
}

onMounted(() => {
  if (sessionStorage.getItem('ed_example2_alert')) {
    sessionStorage.removeItem('ed_example2_alert');
    setTimeout(() => {
      window.alert('Registration completed successfully! Record written.');
    }, 100);
  }
});
</script>
