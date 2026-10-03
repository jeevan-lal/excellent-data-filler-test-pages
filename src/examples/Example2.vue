<template>
  <div>
    <div class="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-lg text-xs text-amber-900 dark:text-amber-300 mb-4">
      Submitting reloads the page and presents a confirmation dialog.
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="firstName2" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          First Name *
        </label>
        <input id="firstName2" name="firstName" v-model="form.firstName" required placeholder="Alex" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div>
        <label for="email2" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Email *
        </label>
        <input id="email2" name="email" v-model="form.email" type="email" required placeholder="alex@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div class="pt-4 flex justify-end">
        <button type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
          Submit Form
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';

const form = reactive({
  firstName: '',
  email: ''
});

function handleSubmit() {
  sessionStorage.setItem('ed_example2_alert', '1');
  window.location.reload();
}

onMounted(() => {
  if (sessionStorage.getItem('ed_example2_alert')) {
    sessionStorage.removeItem('ed_example2_alert');
    setTimeout(() => {
      window.alert('Form submitted successfully! Thank you, your information has been received.');
    }, 100);
  }
});
</script>
