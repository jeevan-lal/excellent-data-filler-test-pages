<template>
  <div>
    <div v-if="submitted" id="success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 rounded-lg text-xs mb-4">
      <strong class="font-semibold block text-emerald-950 dark:text-emerald-200 mb-0.5">Form submitted successfully!</strong>
      <span>Thank you, your files and information have been received.</span>
      <ul v-if="uploadedFiles.length > 0" class="list-disc pl-4 mt-2 space-y-0.5 text-slate-700 dark:text-slate-300">
        <li v-for="f in uploadedFiles" :key="f.name + f.size">
          {{ f.name }} ({{ f.size }} bytes)
        </li>
      </ul>
    </div>

    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <label for="firstName15" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          First Name *
        </label>
        <input id="firstName15" name="firstName" v-model="firstName" required placeholder="Alex" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div>
        <label for="email15" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Email *
        </label>
        <input id="email15" name="email" v-model="email" type="email" required placeholder="alex@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <div>
        <label for="singleFileInput" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Attach Single File
        </label>
        <input id="singleFileInput" @change="handleFileSingle" type="file" class="w-full text-xs text-slate-600 dark:text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-blue-50 dark:file:bg-blue-950/60 file:text-blue-700 dark:file:text-blue-300 hover:file:bg-blue-100 dark:hover:file:bg-blue-900/60 transition-colors cursor-pointer" />
      </div>

      <div>
        <label for="batchFileInput" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Attach Multiple Files
        </label>
        <input id="batchFileInput" @change="handleFileMultiple" type="file" multiple class="w-full text-xs text-slate-600 dark:text-slate-300 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-emerald-50 dark:file:bg-emerald-950/60 file:text-emerald-700 dark:file:text-emerald-300 hover:file:bg-emerald-100 dark:hover:file:bg-emerald-900/60 transition-colors cursor-pointer" />
      </div>

      <div class="pt-4 flex justify-end">
        <button type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
          Upload &amp; Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const firstName = ref('');
const email = ref('');
const uploadedFiles = ref([]);
const submitted = ref(false);

function handleFileSingle(event) {
  const files = Array.from(event.target.files || []);
  uploadedFiles.value = [...uploadedFiles.value, ...files];
}

function handleFileMultiple(event) {
  const files = Array.from(event.target.files || []);
  uploadedFiles.value = [...uploadedFiles.value, ...files];
}

function handleSubmit() {
  submitted.value = true;
}
</script>
