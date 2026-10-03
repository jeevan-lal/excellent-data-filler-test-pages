<template>
  <div class="relative inline-block text-left" ref="dropdownRef">
    <!-- Trigger Button -->
    <button type="button" @click="toggleDropdown" :aria-expanded="isOpen" aria-haspopup="true" class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 hover:border-slate-300 dark:hover:border-slate-600 transition-colors shadow-2xs cursor-pointer focus:outline-none focus:ring-1 focus:ring-blue-600">
      <!-- Download Tray Icon (Clean SVG) -->
      <svg class="w-3.5 h-3.5 text-slate-500 dark:text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      <span>Download</span>
      <!-- Chevron Down Icon -->
      <svg :class="['w-3 h-3 text-slate-400 dark:text-slate-500 transition-transform duration-200', isOpen ? 'rotate-180' : '']" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div v-if="isOpen" class="absolute right-0 mt-2 w-64 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg py-2 z-50 transition-all text-xs">
      <div class="px-3.5 py-1.5 mb-1 border-b border-slate-100 dark:border-slate-800">
        <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Template &amp; Config ({{ displayId || scenarioId }})
        </span>
      </div>

      <!-- JSON Settings Download -->
      <a :href="jsonUrl" :download="jsonFilename" @click="handleDownload('json', $event)" class="flex items-start gap-3 px-3.5 py-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group cursor-pointer">
        <div class="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
          <!-- Code/Brackets SVG -->
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-slate-900 dark:text-slate-100 text-xs flex items-center justify-between">
            <span>Form Settings</span>
            <span class="text-[10px] font-mono font-normal text-slate-400 bg-slate-100 dark:bg-slate-800 px-1 rounded">.json</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
            Filler configuration &amp; selector rules
          </p>
        </div>
      </a>

      <!-- Excel Template Download -->
      <a :href="xlsxUrl" :download="xlsxFilename" @click="handleDownload('xlsx', $event)" class="flex items-start gap-3 px-3.5 py-2.5 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors group cursor-pointer">
        <div class="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-900/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
          <!-- Spreadsheet Grid SVG -->
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="3" y1="9" x2="21" y2="9"></line>
            <line x1="3" y1="15" x2="21" y2="15"></line>
            <line x1="9" y1="3" x2="9" y2="21"></line>
            <line x1="15" y1="3" x2="15" y2="21"></line>
          </svg>
        </div>
        <div class="flex-1 min-w-0">
          <div class="font-semibold text-slate-900 dark:text-slate-100 text-xs flex items-center justify-between">
            <span>Excel Template</span>
            <span class="text-[10px] font-mono font-normal text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-1 rounded">.xlsx</span>
          </div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
            Pre-formatted spreadsheet template
          </p>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

const props = defineProps({
  scenarioId: {
    type: String,
    required: true
  },
  displayId: {
    type: String,
    default: ''
  }
});

const isOpen = ref(false);
const dropdownRef = ref(null);

const safeId = computed(() => {
  return String(props.scenarioId || '1A').trim();
});

const jsonUrl = computed(() => `/example/${safeId.value}/settings.json`);
const xlsxUrl = computed(() => `/example/${safeId.value}/template.xlsx`);

const jsonFilename = computed(() => `example-${safeId.value}-settings.json`);
const xlsxFilename = computed(() => `example-${safeId.value}-template.xlsx`);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function closeDropdown() {
  isOpen.value = false;
}

function handleDownload(type) {
  isOpen.value = false;
}

function handleClickOutside(event) {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    closeDropdown();
  }
}

function handleKeydown(event) {
  if (event.key === 'Escape' && isOpen.value) {
    closeDropdown();
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  document.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
  document.removeEventListener('keydown', handleKeydown);
});
</script>
