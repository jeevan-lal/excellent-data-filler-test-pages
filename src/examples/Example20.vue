<template>
  <div>
    <!-- Success Notice -->
    <div v-if="submitted" id="success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-900 dark:text-emerald-300 mb-5 space-y-2 shadow-xs">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <strong class="font-semibold text-emerald-950 dark:text-emerald-200 text-sm">
          Form Submitted Successfully
        </strong>
      </div>
      <p class="text-slate-600 dark:text-slate-400">
        Review captured field states below:
      </p>
    </div>

    <form @submit.prevent="handleSubmit" id="example20-form" class="space-y-4">
      <!-- 1. Field with Already Filled Value -->
      <div>
        <div class="flex items-center justify-between mb-1">
          <label for="prefilledField20" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase">
            1. Pre-filled Field (Check Existing Value) *
          </label>
          <span class="text-[10px] text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded">
            Pre-populated
          </span>
        </div>
        <input id="prefilledField20" name="prefilledField" v-model="form.prefilledField" type="text" required placeholder="Enter pre-filled value" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
        <p class="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
          Contains an initial pre-existing value when the page opens.
        </p>
      </div>

      <!-- 2. Second Field Coming After Some Time in Page -->
      <div>
        <div class="flex items-center justify-between mb-1">
          <label for="delayedField20" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase">
            2. Dynamic Field (Appears After 1.5s)
          </label>
          <span v-if="delayedFieldVisible" class="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded flex items-center gap-1">
            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            Rendered in Page
          </span>
          <span v-else class="text-[10px] text-amber-600 dark:text-amber-400 font-medium bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded flex items-center gap-1">
            <span class="inline-block animate-spin w-2.5 h-2.5 border-2 border-amber-600 dark:border-amber-400 border-t-transparent rounded-full"></span>
            Arriving soon...
          </span>
        </div>

        <div v-if="delayedFieldVisible" class="transition-all duration-300">
          <input id="delayedField20" name="delayedField" v-model="form.delayedField" type="text" placeholder="Type value into dynamic field..." class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
          <p class="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
            This field was injected dynamically after a 1.5 second delay.
          </p>
        </div>

        <div v-else class="p-4 bg-slate-50 dark:bg-slate-800/40 border border-dashed border-slate-300 dark:border-slate-700 rounded-lg flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span class="inline-block animate-spin w-4 h-4 border-2 border-slate-400 border-t-transparent rounded-full"></span>
          <span>Waiting for dynamic field to load (1.5 seconds)...</span>
        </div>
      </div>

      <!-- 3. Third Field in Readonly Field -->
      <div>
        <div class="flex items-center justify-between mb-1">
          <label for="readonlyField20" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase">
            3. Readonly Field
          </label>
          <span class="text-[10px] text-slate-600 dark:text-slate-400 font-medium bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">
            Read-only
          </span>
        </div>
        <input id="readonlyField20" name="readonlyField" v-model="form.readonlyField" type="text" readonly class="w-full px-3.5 py-2 text-sm bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 rounded-lg cursor-not-allowed focus:outline-none select-all" />
        <p class="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
          Marked with the readonly attribute. Can be focused and copied, but cannot be typed into.
        </p>
      </div>

      <!-- 4. Fourth Field Disabled Field -->
      <div>
        <div class="flex items-center justify-between mb-1">
          <label for="disabledField20" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase">
            4. Disabled Field
          </label>
          <span class="text-[10px] text-rose-600 dark:text-rose-400 font-medium bg-rose-50 dark:bg-rose-950/50 px-2 py-0.5 rounded">
            Disabled
          </span>
        </div>
        <input id="disabledField20" name="disabledField" v-model="form.disabledField" type="text" disabled class="w-full px-3.5 py-2 text-sm bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 rounded-lg cursor-not-allowed opacity-60 focus:outline-none" />
        <p class="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
          Marked with the disabled attribute. Inactive for user or automated input.
        </p>
      </div>

      <!-- 5. Last Field Select with Options Coming After 3 Seconds -->
      <div>
        <div class="flex items-center justify-between mb-1">
          <label for="dynamicSelect20" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase">
            5. Dynamic Select (Options Load After 3s) *
          </label>
          <span v-if="optionsLoaded" class="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded flex items-center gap-1">
            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
            {{ dynamicOptions.length }} Options Ready
          </span>
          <span v-else class="text-[10px] text-purple-600 dark:text-purple-400 font-medium bg-purple-50 dark:bg-purple-950/50 px-2 py-0.5 rounded flex items-center gap-1">
            <span class="inline-block animate-spin w-2.5 h-2.5 border-2 border-purple-600 dark:border-purple-400 border-t-transparent rounded-full"></span>
            Loading options (3s)...
          </span>
        </div>

        <select id="dynamicSelect20" name="dynamicSelect" v-model="form.dynamicSelect" :disabled="!optionsLoaded" required class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:bg-slate-100 dark:disabled:bg-slate-800/60 disabled:cursor-not-allowed">
          <option v-if="!optionsLoaded" value="" disabled selected>
            Loading options from server (please wait 3 seconds)...
          </option>
          <option v-else value="">-- Select an Option --</option>
          <option v-for="opt in dynamicOptions" :key="opt.value" :value="opt.value">
            {{ opt.label }}
          </option>
        </select>
        <p class="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
          Options are populated asynchronously 3 seconds after page load.
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="pt-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
        <button type="button" @click="handleResetDelays" class="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline cursor-pointer">
          Reset Delays &amp; Options
        </button>

        <button type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
          Submit Form
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref, onMounted } from 'vue';

const form = reactive({
  prefilledField: 'Existing Account Record',
  delayedField: '',
  readonlyField: 'RO-SYS-89024',
  disabledField: 'DIS-SECURE-TOKEN-LOCKED',
  dynamicSelect: ''
});

const delayedFieldVisible = ref(false);
const optionsLoaded = ref(false);
const submitted = ref(false);
const dynamicOptions = ref([]);

const AVAILABLE_OPTIONS = [
  { value: 'engineering', label: 'Engineering' },
  { value: 'operations', label: 'Operations' },
  { value: 'qa_testing', label: 'Quality Assurance' },
  { value: 'finance', label: 'Finance' },
  { value: 'product', label: 'Productn' }
];

let delayedFieldTimer = null;
let optionsTimer = null;

function initializeDelays() {
  delayedFieldVisible.value = false;
  optionsLoaded.value = false;
  dynamicOptions.value = [];
  form.dynamicSelect = '';

  if (delayedFieldTimer) clearTimeout(delayedFieldTimer);
  if (optionsTimer) clearTimeout(optionsTimer);

  // Field 2: Arrives after 1.5 seconds
  delayedFieldTimer = setTimeout(() => {
    delayedFieldVisible.value = true;
  }, 1500);

  // Field 5: Options arrive after 3 seconds
  optionsTimer = setTimeout(() => {
    dynamicOptions.value = [...AVAILABLE_OPTIONS];
    optionsLoaded.value = true;
  }, 3000);
}

function handleResetDelays() {
  submitted.value = false;
  form.delayedField = '';
  form.prefilledField = 'Existing Account Record';
  initializeDelays();
}

function handleSubmit() {
  submitted.value = true;
}

onMounted(() => {
  initializeDelays();
});
</script>
