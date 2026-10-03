<template>
  <div>
    <div v-if="success" id="success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 rounded-lg text-xs mb-4">
      <strong class="font-semibold block text-emerald-950 dark:text-emerald-200 mb-0.5">Form submitted successfully!</strong>
      <span>Thank you, your information has been received.</span>
    </div>

    <form @submit.prevent="handleSubmit" novalidate class="space-y-4">
      <p class="text-xs text-slate-500 dark:text-slate-400 mb-2">
        Tip: Submitting valid fields renders the in-page success notice. Leaving required fields empty or invalid fires a browser alert dialog.
      </p>

      <div>
        <label for="firstName7" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          First Name *
        </label>
        <input id="firstName7" name="firstName" v-model="form.firstName" placeholder="Alex" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div>
        <label for="mixedInput7" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Email *
        </label>
        <input id="mixedInput7" name="email" v-model="form.email" type="email" placeholder="alex@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
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
import { reactive, ref } from 'vue';

const form = reactive({
  firstName: '',
  email: ''
});

const success = ref(false);

function handleSubmit() {
  const firstNameVal = form.firstName.trim();
  const emailVal = form.email.trim();

  if (!firstNameVal && !emailVal) {
    success.value = false;
    window.alert('Please fill in both First Name and Email.');
    return;
  }

  if (!firstNameVal) {
    success.value = false;
    window.alert('Please enter your First Name.');
    return;
  }

  if (!emailVal) {
    success.value = false;
    window.alert('Please enter your Email.');
    return;
  }

  if (!emailVal.includes('@') || !emailVal.includes('.')) {
    success.value = false;
    window.alert('Please enter a valid email address.');
    return;
  }

  success.value = true;
}
</script>
