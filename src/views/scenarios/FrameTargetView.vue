<template>
  <div class="p-4 bg-slate-50 dark:bg-[#0b0f19] min-h-screen text-slate-800 dark:text-slate-100 transition-colors">
    <div class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs max-w-lg mx-auto">
      <div class="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
        <h4 class="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          Embedded Form Frame ({{ id }})
        </h4>
        <span class="text-[10px] bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-600 dark:text-slate-400 font-mono">
          Embedded Frame
        </span>
      </div>

      <div v-if="submitted" id="success-notice" class="p-3 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-lg text-xs text-emerald-900 dark:text-emerald-300 mb-3">
        <strong class="font-semibold block text-emerald-950 dark:text-emerald-200 mb-0.5">Form submitted successfully!</strong>
        <span>Thank you, your information has been received.</span>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-3">
        <div>
          <label :for="'firstName-' + id" class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            First Name *
          </label>
          <input :id="'firstName-' + id" name="firstName" v-model="firstName" type="text" required placeholder="Alex" class="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
        </div>

        <div>
          <label :for="'email-' + id" class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Email *
          </label>
          <input :id="'email-' + id" name="email" v-model="email" type="email" required placeholder="alex@example.com" class="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
        </div>

        <div>
          <label :for="'frame-user-' + id" class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Reference Note
          </label>
          <input :id="'frame-user-' + id" name="identifier" v-model="fieldA" type="text" placeholder="Additional Note" class="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
        </div>

        <div>
          <label :for="'frame-val-' + id" class="block text-[11px] font-bold text-slate-700 dark:text-slate-300 mb-1">
            Access Code
          </label>
          <input :id="'frame-val-' + id" name="secret" v-model="fieldB" type="text" placeholder="Security Code" class="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
        </div>

        <div class="pt-2 flex items-center justify-end">
          <button type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-md transition-colors cursor-pointer">
            Submit Form
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: 'frame-default'
  }
});

const firstName = ref('');
const email = ref('');
const fieldA = ref('');
const fieldB = ref('');
const submitted = ref(false);

function handleSubmit() {
  submitted.value = true;
}
</script>
