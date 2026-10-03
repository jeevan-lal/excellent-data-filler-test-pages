<template>
  <div>
    <!-- Main Form -->
    <form id="example35-form" class="space-y-4" onsubmit="return false;">
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <!-- First Name -->
        <div>
          <label for="firstName35" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            First Name *
          </label>
          <input id="firstName35" name="firstName" type="text" required placeholder="Mason" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
        </div>

        <!-- Last Name -->
        <div>
          <label for="lastName35" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Last Name *
          </label>
          <input id="lastName35" name="lastName" type="text" required placeholder="Brooks" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
        </div>

        <!-- Email -->
        <div>
          <label for="userEmail35" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Email *
          </label>
          <input id="userEmail35" name="email" type="email" required placeholder="mason.brooks@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
        </div>
      </div>

      <!-- Action Buttons with inline onclick Attributes -->
      <div class="pt-4 flex items-center justify-end gap-3">
        <button id="resetBtn35" type="button" onclick="resetForm(event)" class="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer">
          Reset
        </button>
        <button id="submitBtn35" type="button" onclick="submitForm(event)" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

// Default submit function with native alert
function defaultSubmitHandler(event) {
  if (event && event.preventDefault) event.preventDefault();

  const firstName = document.getElementById('firstName35')?.value || '';
  const lastName = document.getElementById('lastName35')?.value || '';
  const email = document.getElementById('userEmail35')?.value || '';

  const details = [
    firstName ? `First Name: ${firstName}` : '',
    lastName ? `Last Name: ${lastName}` : '',
    email ? `Email: ${email}` : ''
  ].filter(Boolean).join('\n');

  window.alert(
    details
      ? `Form submitted successfully!\n\n${details}`
      : 'Form submitted successfully!'
  );
}

// Default reset function with native alert
function defaultResetHandler(event) {
  if (event && event.preventDefault) event.preventDefault();

  const fnInput = document.getElementById('firstName35');
  const lnInput = document.getElementById('lastName35');
  const emInput = document.getElementById('userEmail35');

  if (fnInput) fnInput.value = '';
  if (lnInput) lnInput.value = '';
  if (emInput) emInput.value = '';

  window.alert('Form has been reset!');
}

onMounted(() => {
  // Bind global functions to window so inline onclick="submitForm(event)" and onclick="resetForm(event)" invoke them
  window.submitForm = defaultSubmitHandler;
  window.resetForm = defaultResetHandler;
  window.handleExample35Submit = defaultSubmitHandler;
  window.handleExample35Reset = defaultResetHandler;
});

onUnmounted(() => {
  if (typeof window !== 'undefined') {
    delete window.submitForm;
    delete window.resetForm;
    delete window.handleExample35Submit;
    delete window.handleExample35Reset;
  }
});
</script>
