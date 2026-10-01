<template>
  <div class="p-4 bg-slate-50 dark:bg-[#0b0f19] min-h-screen text-slate-800 dark:text-slate-100 transition-colors">
    <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs max-w-lg mx-auto">
      <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Encapsulated Frame Context ({{ id }})
        </h4>
        <span class="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400 font-mono">
          iframe
        </span>
      </div>

      <div
        v-if="submitted"
        class="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs text-emerald-900 dark:text-emerald-300 mb-3"
      >
        <strong>Sub-Frame Captured:</strong> Payload registered inside frame {{ id }}.
      </div>

      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label :for="'frame-user-' + id" class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Frame Field A (Identifier)
          </label>
          <input
            :id="'frame-user-' + id"
            v-model="fieldA"
            type="text"
            required
            placeholder="Frame Data"
            class="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>

        <div class="mb-4">
          <label :for="'frame-val-' + id" class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Frame Field B (Secret)
          </label>
          <input
            :id="'frame-val-' + id"
            v-model="fieldB"
            type="text"
            required
            placeholder="Security Token"
            class="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>

        <div class="flex items-center justify-end">
          <button
            type="submit"
            class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors cursor-pointer"
          >
            Submit Inside Frame
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: 'frame-default'
  }
});

const fieldA = ref('Target User');
const fieldB = ref('SEC-8890');
const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
}
</script>
