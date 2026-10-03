<template>
  <div>
    <div v-if="submitted" id="success-notice" class="space-y-3 mb-6">
      <div class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 rounded-lg text-xs">
        <strong class="font-semibold block text-emerald-950 dark:text-emerald-200 mb-0.5">Form submitted successfully!</strong>
        <span>Thank you, primary batch record has been received and saved.</span>
      </div>
      <div class="p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300 rounded-lg text-xs">
        <strong class="font-semibold block text-amber-950 dark:text-amber-200 mb-0.5">Batch Record 2 Notice</strong>
        <span>Secondary entity scheduled for next processing cycle.</span>
      </div>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="firstName10" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          First Name *
        </label>
        <input id="firstName10" name="firstName" v-model="form.firstName" required placeholder="Alex" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div>
        <label for="email10" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Email *
        </label>
        <input id="email10" name="email" v-model="form.email" type="email" required placeholder="alex@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div>
        <label for="entityCode10" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Batch Entity Code
        </label>
        <input id="entityCode10" name="entityCode" v-model="form.entityCode" placeholder="ENT-8819" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div class="pt-4 flex justify-end">
        <button type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
          Submit Batch
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const form = reactive({
  firstName: '',
  email: '',
  entityCode: ''
});

const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
}
</script>
