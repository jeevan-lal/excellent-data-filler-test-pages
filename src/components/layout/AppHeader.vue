<template>
  <header class="bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 sticky top-0 z-30 px-4 sm:px-6 lg:px-8 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-colors">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3.5">
      <!-- Brand & Title with Image Icon from public/icons -->
      <router-link to="/" class="flex items-center gap-3 self-start md:self-auto group">
        <div class="w-10 h-10 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-0.5 shadow-2xs group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
          <img src="/icons/180x180.png" alt="ED Filler Icon" class="w-full h-full object-contain rounded-md" />
        </div>
        <div>
          <h1 class="text-base font-bold text-slate-900 dark:text-slate-100 leading-tight tracking-tight group-hover:text-blue-900 dark:group-hover:text-blue-400 transition-colors">
            ED Filler Test Suite
          </h1>
          <p class="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Form Runner &amp; Extension Validation Matrix
          </p>
        </div>
      </router-link>

      <!-- Center Search Bar -->
      <div class="w-full md:max-w-md relative">
        <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 dark:text-slate-500">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <input
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          type="text"
          placeholder="Filter 21 scenarios (e.g. reload, ajax, modal, 1A)..."
          class="w-full pl-10 pr-8 py-2 text-sm bg-slate-50/80 hover:bg-slate-50 focus:bg-white dark:bg-slate-800 dark:hover:bg-slate-800/90 dark:focus:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 placeholder-slate-400 dark:placeholder-slate-500 text-slate-800 dark:text-slate-100 transition-all"
        />
        <button
          v-if="modelValue"
          @click="$emit('update:modelValue', '')"
          class="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
          title="Clear search"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Right Action Controls: Download Button + Theme Toggle -->
      <div class="flex items-center gap-2.5 self-end md:self-auto shrink-0">
        <DownloadButton />
        <ThemeToggle />
      </div>
    </div>
  </header>
</template>

<script setup>
import ThemeToggle from './ThemeToggle.vue';
import DownloadButton from './DownloadButton.vue';

defineProps({
  modelValue: {
    type: String,
    default: ''
  }
});

defineEmits(['update:modelValue']);
</script>
