<template>
  <div>
    <div
      v-if="success"
      class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-300 rounded-lg text-xs mb-4"
    >
      <strong>Validation Passed:</strong> In-page notice rendered.
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <p class="text-xs text-slate-500 dark:text-slate-400 mb-2">
        Tip: Entering a valid email renders in-page. An invalid email fires a browser alert dialog.
      </p>

      <div>
        <label for="mixedInput7" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Email Validation Test
        </label>
        <input
          id="mixedInput7"
          v-model="form.email"
          placeholder="test@domain.com"
          class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>

      <div class="pt-4 flex justify-end">
        <button
          type="submit"
          class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
        >
          Submit Test
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  email: ''
});

const success = ref(false);

function handleSubmit() {
  if (form.email.includes('@') && form.email.includes('.')) {
    success.value = true;
  } else {
    window.alert('Validation Error: Invalid email domain.');
  }
}
</script>
