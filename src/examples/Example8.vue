<template>
  <div>
    <div
      v-if="delayedMounting"
      class="text-center py-10 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-dashed border-slate-300 dark:border-slate-700"
    >
      <span class="inline-block animate-spin w-6 h-6 border-2 border-purple-600 border-t-transparent rounded-full mb-3"></span>
      <p class="text-xs font-medium text-slate-700 dark:text-slate-300">
        Form markup mounting in 2500ms...
      </p>
      <p class="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
        Simulating dynamic DOM injection for extension observers
      </p>
    </div>

    <div v-else>
      <div
        v-if="success"
        class="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-950 dark:text-emerald-300 rounded-lg text-xs mb-4"
      >
        Delayed form submitted successfully!
      </div>

      <form @submit.prevent="handleSubmit" id="delayed-injected-form" class="space-y-4">
        <div>
          <label for="delayedInput8" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
            Dynamically Mounted Field
          </label>
          <input
            id="delayedInput8"
            v-model="form.val"
            required
            placeholder="Late Arrival Record"
            class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>

        <div class="pt-4 flex justify-end">
          <button
            type="submit"
            class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            Submit Form
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';

const delayedMounting = ref(true);
const success = ref(false);
const form = reactive({
  val: ''
});

function handleSubmit() {
  success.value = true;
}

onMounted(() => {
  setTimeout(() => {
    delayedMounting.value = false;
  }, 2500);
});
</script>
