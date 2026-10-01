<template>
  <div>
    <!-- Stage Progress Indicator -->
    <div class="flex items-center justify-between mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
      <div class="flex items-center gap-3">
        <button
          type="button"
          @click="currentStep = 1"
          :class="[
            'text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer',
            currentStep === 1
              ? 'bg-blue-600 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          ]"
        >
          Step 1: Part A (Example 12)
        </button>
        <button
          type="button"
          @click="currentStep = 2"
          :class="[
            'text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors cursor-pointer',
            currentStep === 2
              ? 'bg-emerald-600 text-white'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          ]"
        >
          Step 2: Part B (Example 13)
        </button>
      </div>

      <div class="flex items-center gap-2">
        <router-link
          to="/examples/12"
          class="text-[11px] font-mono text-blue-600 dark:text-blue-400 hover:underline"
        >
          Open standalone URL &rarr;
        </router-link>
      </div>
    </div>

    <!-- Step 1: Example 12 Component -->
    <div v-if="currentStep === 1">
      <Example12 />
    </div>

    <!-- Step 2: Example 13 Component -->
    <div v-else>
      <Example13 />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Example12 from './Example12.vue';
import Example13 from './Example13.vue';

const currentStep = ref(1);
</script>
