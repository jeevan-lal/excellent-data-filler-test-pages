<template>
  <div>
    <div
      v-if="iframeMounted"
      class="border border-slate-300 dark:border-slate-700 rounded-xl overflow-hidden shadow-inner"
    >
      <iframe
        src="/frames/18-1"
        class="w-full h-80 border-0 bg-white"
        title="Delayed Encapsulated Frame"
      ></iframe>
    </div>

    <div
      v-else
      class="text-center py-12 bg-slate-50 dark:bg-slate-800/50 border border-dashed border-slate-300 dark:border-slate-700 rounded-xl"
    >
      <span class="inline-block animate-spin w-5 h-5 border-2 border-purple-600 border-t-transparent rounded-full mb-2"></span>
      <p class="text-xs text-slate-600 dark:text-slate-300 font-medium">
        Mounting iframe DOM node in 1800ms...
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const iframeMounted = ref(false);

onMounted(() => {
  setTimeout(() => {
    iframeMounted.value = true;
  }, 1800);
});
</script>
