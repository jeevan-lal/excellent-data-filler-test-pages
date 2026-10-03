<template>
  <div class="space-y-6">
    <!-- Notice Banner -->
    <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
      <span class="font-semibold text-slate-800 dark:text-slate-200">Test Scenario:</span>
      Dropdown selection triggers a silent delay (no visible spinner or timer). Corresponding radio and checkbox controls then appear dynamically without <code class="font-mono bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">id</code>, <code class="font-mono bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">name</code>, or <code class="font-mono bg-slate-200 dark:bg-slate-700 px-1 py-0.5 rounded">value</code> attributes.
    </div>

    <!-- Success Notice -->
    <div v-if="submitted" id="success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-900 dark:text-emerald-300 space-y-2 shadow-xs">
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
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1 font-mono text-[11px]">
        <div class="p-2 bg-white/70 dark:bg-slate-900/60 rounded border border-emerald-100 dark:border-emerald-900/40">
          <span class="text-slate-500 dark:text-slate-400 block font-sans">Selected Option:</span>
          <span class="text-slate-900 dark:text-slate-100 font-semibold">{{ selectedOption || '(none)' }}</span>
        </div>
        <div class="p-2 bg-white/70 dark:bg-slate-900/60 rounded border border-emerald-100 dark:border-emerald-900/40">
          <span class="text-slate-500 dark:text-slate-400 block font-sans">Radio Selection:</span>
          <span class="text-slate-900 dark:text-slate-100 font-semibold">{{ selectedRadioLabel || '(none)' }}</span>
        </div>
        <div class="p-2 bg-white/70 dark:bg-slate-900/60 rounded border border-emerald-100 dark:border-emerald-900/40">
          <span class="text-slate-500 dark:text-slate-400 block font-sans">Checked Items:</span>
          <span class="text-slate-900 dark:text-slate-100 font-semibold">{{ checkedLabels.length > 0 ? checkedLabels.join(', ') : '(none)' }}</span>
        </div>
      </div>
    </div>

    <form @submit.prevent="handleSubmit" id="example22-form" class="space-y-5">
      <!-- Standard Input Field -->
      <div>
        <label for="contactEmail22" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Contact Email *
        </label>
        <input id="contactEmail22" name="contactEmail" v-model="contactEmail" type="email" required placeholder="alex@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600" />
      </div>

      <!-- Dropdown with Short Option Names -->
      <div>
        <label for="packageSelect22" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Service Tier *
        </label>
        <select id="packageSelect22" name="packageSelect" v-model="selectedOption" @change="handleOptionChange" required class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 cursor-pointer">
          <option value="">-- Choose Option --</option>
          <option value="Basic">Basic</option>
          <option value="Pro">Pro</option>
          <option value="Team">Team</option>
        </select>
        <p class="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
          Select an option above to dynamically load corresponding controls without visual loading spinners.
        </p>
      </div>

      <!-- Dynamic Section (No loading indicators or timer shown while waiting) -->
      <div v-if="dynamicSectionVisible && currentConfig" class="space-y-5 pt-2 border-t border-slate-100 dark:border-slate-800 transition-all duration-300">
        <!-- Radio Group: Intentionally NO id, NO name, NO value attributes -->
        <div id="radioSection22">
          <label class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
            {{ currentConfig.radioTitle }} (Radio &bull; No ID/Name/Value)
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <label v-for="(item, index) in currentConfig.radios" :key="index" class="flex items-center gap-2.5 p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
              <!-- Radio input with NO id, NO name, NO value attributes -->
              <input type="radio" :checked="selectedRadioIndex === index" @change="selectedRadioIndex = index" class="w-4 h-4 text-blue-600 border-slate-300 dark:border-slate-600 focus:ring-blue-600 cursor-pointer" />
              <span class="text-xs font-medium text-slate-800 dark:text-slate-200">
                {{ item }}
              </span>
            </label>
          </div>
        </div>

        <!-- Checkbox Group: Intentionally NO id, NO name, NO value attributes -->
        <div id="checkboxSection22">
          <label class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
            {{ currentConfig.checkboxTitle }} (Checkbox &bull; No ID/Name/Value)
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <label v-for="(item, index) in currentConfig.checkboxes" :key="index" class="flex items-center gap-2.5 p-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer transition-colors">
              <!-- Checkbox input with NO id, NO name, NO value attributes -->
              <input type="checkbox" :checked="selectedCheckboxIndices.includes(index)" @change="toggleCheckbox(index)" class="w-4 h-4 text-blue-600 rounded border-slate-300 dark:border-slate-600 focus:ring-blue-600 cursor-pointer" />
              <span class="text-xs font-medium text-slate-800 dark:text-slate-200">
                {{ item }}
              </span>
            </label>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="pt-3 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
        <button type="button" @click="handleReset" class="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline cursor-pointer">
          Reset Form
        </button>

        <button id="submitBtn22" type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer">
          Submit Form
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const contactEmail = ref('');
const selectedOption = ref('');
const dynamicSectionVisible = ref(false);
const submitted = ref(false);

const selectedRadioIndex = ref(null);
const selectedCheckboxIndices = ref([]);

let delayTimer = null;

const OPTION_DATA = {
  Basic: {
    radioTitle: 'Billing Cycle',
    radios: ['Monthly Billing', 'Annual Billing'],
    checkboxTitle: 'Included Services',
    checkboxes: ['Standard Support', 'Daily Backups']
  },
  Pro: {
    radioTitle: 'Server Region',
    radios: ['US East', 'EU West', 'Asia South'],
    checkboxTitle: 'Enhanced Addons',
    checkboxes: ['High Priority Queue', 'Dedicated IP', 'Custom SSL']
  },
  Team: {
    radioTitle: 'Deployment Strategy',
    radios: ['Cloud Managed', 'Private Cloud'],
    checkboxTitle: 'Enterprise Modules',
    checkboxes: ['Activity Logging', 'SSO Authentication', 'SLA Guarantee']
  }
};

const currentConfig = computed(() => {
  return OPTION_DATA[selectedOption.value] || null;
});

const selectedRadioLabel = computed(() => {
  if (!currentConfig.value || selectedRadioIndex.value === null) return '';
  return currentConfig.value.radios[selectedRadioIndex.value] || '';
});

const checkedLabels = computed(() => {
  if (!currentConfig.value) return [];
  return selectedCheckboxIndices.value.map((i) => currentConfig.value.checkboxes[i]).filter(Boolean);
});

function handleOptionChange() {
  submitted.value = false;
  selectedRadioIndex.value = null;
  selectedCheckboxIndices.value = [];
  dynamicSectionVisible.value = false;

  if (delayTimer) clearTimeout(delayTimer);

  if (!selectedOption.value) return;

  // Silent background delay (1.3 seconds) without any loading spinner or timer on page
  delayTimer = setTimeout(() => {
    dynamicSectionVisible.value = true;
  }, 1300);
}

function toggleCheckbox(index) {
  const pos = selectedCheckboxIndices.value.indexOf(index);
  if (pos === -1) {
    selectedCheckboxIndices.value.push(index);
  } else {
    selectedCheckboxIndices.value.splice(pos, 1);
  }
}

function handleReset() {
  if (delayTimer) clearTimeout(delayTimer);
  contactEmail.value = '';
  selectedOption.value = '';
  dynamicSectionVisible.value = false;
  selectedRadioIndex.value = null;
  selectedCheckboxIndices.value = [];
  submitted.value = false;
}

function handleSubmit() {
  submitted.value = true;
}
</script>
