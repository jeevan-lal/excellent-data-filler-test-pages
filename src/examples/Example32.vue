<template>
  <div class="space-y-6">
    <!-- Simulated Aw Snap Screen Overlay (if previewing) -->
    <div v-if="showSimulatedScreen" id="simulated-aw-snap" class="bg-[#1b1818] text-[#f2f2f2] p-8 sm:p-12 rounded-xl space-y-6 font-sans border border-neutral-800 shadow-2xl transition-all">
      <div class="flex items-start justify-between">
        <!-- Dead Tab Pixel-style Icon -->
        <div class="w-14 h-14 border-2 border-[#8e918f] rounded-md p-1.5 flex flex-col justify-between select-none">
          <div class="flex justify-between items-center px-1 pt-1">
            <span class="text-xs font-mono font-bold leading-none text-[#c4c7c5]">x</span>
            <span class="text-xs font-mono font-bold leading-none text-[#c4c7c5]">x</span>
          </div>
          <div class="w-full flex justify-center pb-1">
            <div class="w-5 h-0.5 bg-[#c4c7c5] rounded-full"></div>
          </div>
        </div>

        <button type="button" @click="showSimulatedScreen = false" class="text-xs text-neutral-400 hover:text-white px-2 py-1 rounded border border-neutral-700 hover:border-neutral-500 transition-colors cursor-pointer">
          Close Preview
        </button>
      </div>

      <div class="space-y-2">
        <h2 class="text-2xl font-medium tracking-tight text-[#f2f2f2]">
          Aw, Snap!
        </h2>
        <p class="text-sm text-[#c4c7c5]">
          Something went wrong while displaying this webpage.
        </p>
        <p class="text-xs text-[#8e918f] pt-2">
          Error code: Out of Memory
        </p>
      </div>

      <div class="flex items-center justify-between pt-4 border-t border-neutral-800">
        <a href="https://support.google.com/chrome/?p=e_awsnap" target="_blank" rel="noopener noreferrer" class="text-xs text-[#f28b82] hover:underline">
          Learn more
        </a>
        <button type="button" @click="handleSimulatedReload" class="bg-[#f9b4ab] hover:bg-[#f6aea9] text-[#202124] text-xs font-semibold px-5 py-2 rounded-full transition-colors cursor-pointer">
          Reload
        </button>
      </div>
    </div>

    <!-- Active Crash Notice Banner -->
    <div v-if="isCrashing" id="crash-active-notice" class="p-4 bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 rounded-xl text-xs text-rose-900 dark:text-rose-300 space-y-2 shadow-xs animate-pulse">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-rose-600 dark:text-rose-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <strong class="font-semibold text-rose-950 dark:text-rose-200 text-sm">
          Memory Loop Triggered: Heap Exhaustion in Progress
        </strong>
      </div>
      <p class="text-rose-700 dark:text-rose-300">
        Allocating massive chunks in an infinite loop to trigger Chrome&apos;s native &quot;Aw, Snap! Error code: Out of Memory&quot; screen...
      </p>
    </div>

    <!-- Safe Mode Notice (when ?autocrash=false) -->
    <div v-else-if="isSafeMode" id="safe-mode-notice" class="p-4 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 rounded-xl text-xs text-amber-900 dark:text-amber-300 space-y-2 shadow-xs">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
        <strong class="font-semibold text-amber-950 dark:text-amber-200 text-sm">
          Safe Mode Active (?autocrash=false)
        </strong>
      </div>
      <p class="text-amber-800 dark:text-amber-300">
        Automatic page-load crash is paused so you can inspect the DOM, test form-fillers, or manually trigger the crash.
      </p>
    </div>

    <!-- Scenario Controls & Trigger Form -->
    <div class="p-5 bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-700">
        <div>
          <h3 class="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
            Memory Stress Controls
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Test extension behavior under tab memory crashes and infinite loops.
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button id="previewAwSnapBtn32" type="button" @click="showSimulatedScreen = !showSimulatedScreen" class="px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors cursor-pointer">
            {{ showSimulatedScreen ? 'Hide Simulated UI' : 'Preview Simulated UI' }}
          </button>
          <button id="triggerCrashBtn32" type="button" @click="triggerMemoryExhaustion" class="bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-colors cursor-pointer shadow-xs whitespace-nowrap">
            Trigger Real Crash Now
          </button>
        </div>
      </div>

      <!-- Sample Form for Extension Testing -->
      <form @submit.prevent="handleSubmit" id="example32-form" class="space-y-4">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label for="crashTestName32" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
              Test Subject Name
            </label>
            <input id="crashTestName32" name="testName" v-model="formData.name" type="text" placeholder="e.g. Memory Benchmark Test" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-500 transition-colors" />
          </div>

          <div>
            <label for="crashTestEmail32" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
              Tester Email
            </label>
            <input id="crashTestEmail32" name="testEmail" v-model="formData.email" type="email" placeholder="qa@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-500 transition-colors" />
          </div>
        </div>

        <div>
          <label for="crashTestNotes32" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Execution Notes
          </label>
          <textarea id="crashTestNotes32" name="notes" v-model="formData.notes" rows="3" placeholder="Notes regarding browser tab memory limits..." class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-rose-500 transition-colors"></textarea>
        </div>

        <div class="flex items-center gap-3 pt-2">
          <button id="submitBtn32" type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2 rounded-lg transition-colors cursor-pointer">
            Submit Form
          </button>
          <button id="resetBtn32" type="button" @click="handleReset" class="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer">
            Reset
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const formData = reactive({
  name: '',
  email: '',
  notes: ''
});

const isCrashing = ref(false);
const showSimulatedScreen = ref(false);

const isSafeMode = computed(() => {
  return route.query.autocrash === 'false' || route.query.safe === '1';
});

function triggerMemoryExhaustion() {
  isCrashing.value = true;
  // Execute memory allocation loop to rapidly exhaust V8 heap and trigger Out of Memory crash
  setTimeout(() => {
    const memoryHog = [];
    while (true) {
      memoryHog.push(new Array(2000000).fill('exhaust_heap_payload_test_data_' + Math.random()));
    }
  }, 100);
}

function handleSimulatedReload() {
  window.location.reload();
}

function handleSubmit() {
  // Can trigger crash on submit if preferred
  triggerMemoryExhaustion();
}

function handleReset() {
  formData.name = '';
  formData.email = '';
  formData.notes = '';
}

onMounted(() => {
  // If not explicitly disabled with ?autocrash=false, trigger real memory exhaustion on load
  if (!isSafeMode.value) {
    isCrashing.value = true;
    setTimeout(() => {
      triggerMemoryExhaustion();
    }, 250);
  }
});
</script>
