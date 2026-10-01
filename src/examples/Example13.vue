<template>
  <div>
    <div class="mb-4">
      <span class="inline-block text-[11px] font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded mb-2">
        Stage 2: Delivery &amp; Address
      </span>
      <h3 class="text-base font-bold text-slate-900 dark:text-slate-100 tracking-tight">
        Delivery Specifications
      </h3>
      <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">
        Carry-over from Stage 1: <span class="font-medium text-slate-700 dark:text-slate-300">{{ step1Summary }}</span>
      </p>
    </div>

    <div
      v-if="finished"
      class="p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-300 text-xs mb-6"
    >
      <span class="font-bold block text-sm mb-1 text-emerald-950 dark:text-emerald-200">
        Multi-URL Workflow Completed Successfully
      </span>
      All fields from Route 1 and Route 2 were captured and stored.
    </div>

    <form v-else @submit.prevent="handleComplete">
      <div class="mb-4">
        <label for="step2Address" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
          Delivery Address <span class="text-red-500">*</span>
        </label>
        <input
          id="step2Address"
          name="step2Address"
          v-model="address"
          type="text"
          required
          placeholder="124 Silicon Avenue, Tech Park"
          class="w-full px-4 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
        />
      </div>

      <div class="mb-6">
        <label for="step2Postal" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
          Postal Code <span class="text-red-500">*</span>
        </label>
        <input
          id="step2Postal"
          name="step2Postal"
          v-model="postalCode"
          type="text"
          required
          placeholder="560100"
          class="w-full px-4 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
        />
      </div>

      <div class="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <router-link to="/examples/12" class="text-xs font-medium text-slate-500 hover:text-slate-800 dark:hover:text-slate-300">
          Back to Step 1
        </router-link>

        <button
          type="submit"
          id="step2-submit"
          class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-xs px-6 py-2.5 rounded-lg shadow-xs transition-colors cursor-pointer"
        >
          Finalize Submission
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const address = ref('124 Silicon Avenue, Tech Park');
const postalCode = ref('560100');
const step1Summary = ref('');
const finished = ref(false);

onMounted(() => {
  const data = sessionStorage.getItem('ed_step1_data');
  if (data) {
    try {
      const parsed = JSON.parse(data);
      step1Summary.value = `${parsed.name} (${parsed.email})`;
    } catch {
      step1Summary.value = data;
    }
  } else {
    step1Summary.value = 'No preliminary data detected (direct arrival).';
  }
});

function handleComplete() {
  finished.value = true;
}
</script>
