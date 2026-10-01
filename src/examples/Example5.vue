<template>
  <div>
    <div class="text-center py-6">
      <button
        @click="showModal = true"
        type="button"
        class="bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
      >
        Open Modal Dialog
      </button>
    </div>

    <div
      v-if="showModal"
      class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50"
    >
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 max-w-md w-full p-6 shadow-xl">
        <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100 mb-3">
          Modal with Alert Trigger
        </h3>
        <form @submit.prevent="handleSubmit" class="space-y-3">
          <div>
            <label for="modal5Input" class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              Token ID
            </label>
            <input
              id="modal5Input"
              v-model="form.token"
              required
              placeholder="TKN-889"
              class="w-full px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="pt-4 flex justify-end gap-2">
            <button
              @click="showModal = false"
              type="button"
              class="px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-amber-600 text-white text-xs font-semibold px-4 py-1.5 rounded-md cursor-pointer"
            >
              Submit &amp; Alert
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const showModal = ref(false);
const form = reactive({
  token: ''
});

function handleSubmit() {
  showModal.value = false;
  window.alert(`Modal Form: Registration received for token ${form.token}`);
}
</script>
