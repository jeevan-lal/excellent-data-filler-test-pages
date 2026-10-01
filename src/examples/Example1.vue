<template>
  <div>
    <div v-if="hasReloadFlash" id="flash-message-container" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 rounded-lg text-xs mb-6 flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
      <span><strong>Flash Notice:</strong> Submission verified in top flash DOM container post HTTP reload.</span>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="fullName1" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Full Name
        </label>
        <input id="fullName1" v-model="form.fullName" required placeholder="John Doe" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div>
        <label for="email1" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Email
        </label>
        <input id="email1" v-model="form.email" type="email" required placeholder="john@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div class="pt-4 flex justify-end">
        <button type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
          Submit and Trigger Reload
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';

const form = reactive({
  fullName: '',
  email: ''
});

const hasReloadFlash = ref(false);

function handleSubmit() {
  sessionStorage.setItem('ed_example1_flash', '1');
  window.location.reload();
}

onMounted(() => {
  if (sessionStorage.getItem('ed_example1_flash')) {
    hasReloadFlash.value = true;
    sessionStorage.removeItem('ed_example1_flash');
  }
});
</script>
