<template>
  <div>
    <div
      v-if="modalToast"
      class="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 rounded-lg text-xs mb-4"
    >
      <strong>Inline Toast Notice:</strong> Modal closed successfully. Payload saved to DOM.
    </div>

    <div class="text-center py-6">
      <button
        @click="showModal = true"
        type="button"
        class="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors cursor-pointer"
      >
        Launch Modal Form
      </button>
    </div>

    <!-- Popup Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4 z-50"
    >
      <div class="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 max-w-md w-full p-6 shadow-xl">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-700 mb-4">
          <h3 class="text-sm font-bold text-slate-900 dark:text-slate-100">
            Modal Popup Form
          </h3>
          <button
            @click="showModal = false"
            class="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form @submit.prevent="handleSubmit" class="space-y-3">
          <div>
            <label for="modalField4" class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
              User Code
            </label>
            <input
              id="modalField4"
              v-model="form.code"
              required
              placeholder="USR-441"
              class="w-full px-3 py-2 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>

          <div class="pt-4 flex justify-end gap-2">
            <button
              @click="showModal = false"
              type="button"
              class="px-3 py-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-[#0a2368] dark:bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-md cursor-pointer"
            >
              Save &amp; Close
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
const modalToast = ref(false);
const form = reactive({
  code: ''
});

function handleSubmit() {
  showModal.value = false;
  modalToast.value = true;
}
</script>
