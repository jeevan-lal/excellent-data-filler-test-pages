<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <div>
      <label for="record3" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
        Entry Identifier
      </label>
      <input
        id="record3"
        v-model="form.record"
        required
        placeholder="INV-2026-99"
        class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600"
      />
    </div>

    <div class="pt-4 flex justify-end">
      <button
        type="submit"
        class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
      >
        Submit and Redirect to Confirmation
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = reactive({
  record: ''
});

function handleSubmit() {
  sessionStorage.setItem('ed_example3_payload', JSON.stringify(form));
  router.push('/examples/3/confirmation');
}
</script>
