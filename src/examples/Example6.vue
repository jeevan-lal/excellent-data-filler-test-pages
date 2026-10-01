<template>
  <div>
    <div
      v-if="ajaxSuccess"
      class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-300 rounded-lg text-xs mb-4"
    >
      <strong>AJAX Success:</strong> Server responded with 200 OK. Inline green banner rendered asynchronously.
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="ajaxQuery6" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Task Query
        </label>
        <input
          id="ajaxQuery6"
          v-model="form.query"
          required
          placeholder="Process batch #402"
          class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
        />
      </div>

      <div class="pt-4 flex justify-end">
        <button
          :disabled="loading"
          type="submit"
          class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer disabled:opacity-60"
        >
          {{ loading ? 'Dispatching async fetch...' : 'Submit via AJAX' }}
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  query: ''
});

const loading = ref(false);
const ajaxSuccess = ref(false);

function handleSubmit() {
  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    ajaxSuccess.value = true;
  }, 400);
}
</script>
