<template>
  <div>
    <div v-if="iframeMounted" class="space-y-3">
      <div class="flex items-center justify-between">
        <span class="text-xs text-slate-500 dark:text-slate-400">Embedded form loaded</span>
        <button @click="handleUnload" type="button" class="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 underline cursor-pointer">
          Reset Frame
        </button>
      </div>
      <div class="border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden shadow-inner">
        <iframe src="/frames/18-1" class="w-full h-80 border-0 bg-white" title="Delayed Embedded Frame"></iframe>
      </div>
    </div>

    <div v-else-if="isLoading" class="text-center py-12 bg-slate-50 dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl">
      <span class="inline-block animate-spin w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full mb-2"></span>
      <p class="text-xs text-slate-600 dark:text-slate-300 font-medium">
        Loading embedded form window...
      </p>
    </div>

    <div v-else class="text-center py-12 bg-slate-50 dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl">
      <p class="text-xs text-slate-600 dark:text-slate-300 mb-4">
        Click below to load the embedded form window into this page.
      </p>
      <button @click="handleLoadForm" id="loadFormBtn" type="button" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-lg transition-colors cursor-pointer">
        Load Form
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const iframeMounted = ref(false);
const isLoading = ref(false);

function handleLoadForm() {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
    iframeMounted.value = true;
  }, 600);
}

function handleUnload() {
  iframeMounted.value = false;
  isLoading.value = false;
}
</script>
