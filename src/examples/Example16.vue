<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
    <!-- Form A: Sender -->
    <div class="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5" id="sender-form-scope">
      <span class="text-[10px] font-bold tracking-wider uppercase text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
        Form A: Sender
      </span>
      <div v-if="submittedA" class="mt-2 text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
        Sender saved!
      </div>
      <form @submit.prevent="submittedA = true" class="space-y-3 mt-3">
        <div>
          <label for="senderName" class="block text-[10px] font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">
            Sender Name
          </label>
          <input
            id="senderName"
            v-model="senderName"
            required
            placeholder="Sender Inc"
            class="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold py-2 rounded-md transition-colors cursor-pointer"
        >
          Save Sender
        </button>
      </form>
    </div>

    <!-- Form B: Recipient -->
    <div class="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl p-5" id="recipient-form-scope">
      <span class="text-[10px] font-bold tracking-wider uppercase text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
        Form B: Recipient
      </span>
      <div v-if="submittedB" class="mt-2 text-xs text-emerald-700 dark:text-emerald-400 font-semibold">
        Recipient saved!
      </div>
      <form @submit.prevent="submittedB = true" class="space-y-3 mt-3">
        <div>
          <label for="recipientName" class="block text-[10px] font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">
            Recipient Name
          </label>
          <input
            id="recipientName"
            v-model="recipientName"
            required
            placeholder="Recipient LLC"
            class="w-full px-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>
        <button
          type="submit"
          class="w-full bg-slate-900 hover:bg-slate-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold py-2 rounded-md transition-colors cursor-pointer"
        >
          Save Recipient
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const senderName = ref('');
const recipientName = ref('');
const submittedA = ref(false);
const submittedB = ref(false);
</script>
