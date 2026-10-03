<template>
  <div>
    <!-- Success Alert Banner if Submitted -->
    <div v-if="submissionResult" id="success-notice" class="mb-6 p-4 rounded-xl border border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-300 text-xs leading-relaxed">
      <strong class="font-semibold block text-emerald-950 dark:text-emerald-200 mb-0.5">Form submitted successfully!</strong>
      <span>Thank you, your information has been received.</span>
      <pre class="font-mono text-[11px] whitespace-pre-wrap mt-2 overflow-x-auto">{{ submissionResult }}</pre>
    </div>

    <form @submit.prevent="handleSubmit" id="demographic-form">
      <!-- First Name -->
      <div class="mb-5">
        <label for="fullName" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
          First Name *
        </label>
        <input id="fullName" name="firstName" v-model="form.fullName" type="text" placeholder="Alex" required class="w-full px-4 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all" />
      </div>

      <!-- Email & Phone Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
        <div>
          <label for="email" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
            Email Address <span class="text-red-500">*</span>
          </label>
          <input id="email" name="email" v-model="form.email" type="email" placeholder="alex@example.com" required class="w-full px-4 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all" />
        </div>

        <div>
          <label for="phone" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
            Phone Number
          </label>
          <input id="phone" name="phone" v-model="form.phone" type="tel" placeholder="+1 555-0199" class="w-full px-4 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all" />
        </div>
      </div>

      <!-- Section Header: Location & Jurisdiction -->
      <div class="pt-6 pb-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between mb-4">
        <span class="text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase">
          Location &amp; Jurisdiction
        </span>
        <span class="font-mono text-xs text-slate-500 dark:text-slate-400">
          {{ jurisdictionStatus }}
        </span>
      </div>

      <!-- State / Territory -->
      <div class="mb-5">
        <label for="state" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
          State / Territory <span class="text-red-500">*</span>
        </label>
        <div class="relative">
          <select id="state" name="state" v-model="form.state" @change="handleStateChange" :disabled="loadingStates" required class="w-full appearance-none px-4 py-2.5 pr-10 text-sm bg-white dark:bg-slate-800 disabled:bg-slate-50/70 dark:disabled:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 disabled:text-slate-400 dark:disabled:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all cursor-pointer disabled:cursor-not-allowed">
            <option value="" disabled>
              {{ loadingStates ? 'Loading states...' : 'Select State' }}
            </option>
            <option v-for="state in states" :key="state.id" :value="state.id">
              {{ state.name }}
            </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400 dark:text-slate-500">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>

      <!-- District -->
      <div class="mb-5">
        <label for="district" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
          District
        </label>
        <div class="relative">
          <select id="district" name="district" v-model="form.district" @change="handleDistrictChange" :disabled="!form.state || loadingDistricts" class="w-full appearance-none px-4 py-2.5 pr-10 text-sm bg-white dark:bg-slate-800 disabled:bg-slate-50/70 dark:disabled:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 disabled:text-slate-400 dark:disabled:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all cursor-pointer disabled:cursor-not-allowed">
            <option value="" disabled>
              {{ loadingDistricts ? 'Loading districts...' : (form.state ? 'Select District' : '— Select state first —') }}
            </option>
            <option v-for="district in availableDistricts" :key="district.id" :value="district.id">
              {{ district.name }}
            </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400 dark:text-slate-500">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>

      <!-- Block / Tehsil -->
      <div class="mb-5">
        <label for="block" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
          Block / Tehsil
        </label>
        <div class="relative">
          <select id="block" name="block" v-model="form.block" @change="handleBlockChange" :disabled="!form.district || loadingBlocks" class="w-full appearance-none px-4 py-2.5 pr-10 text-sm bg-white dark:bg-slate-800 disabled:bg-slate-50/70 dark:disabled:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 disabled:text-slate-400 dark:disabled:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all cursor-pointer disabled:cursor-not-allowed">
            <option value="" disabled>
              {{ loadingBlocks ? 'Loading blocks...' : (form.district ? 'Select Block' : '— Select district first —') }}
            </option>
            <option v-for="blk in availableBlocks" :key="blk.id" :value="blk.id">
              {{ blk.name }}
            </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400 dark:text-slate-500">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>

      <!-- Village / Locality -->
      <div class="mb-5">
        <label for="village" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
          Village / Locality
        </label>
        <div class="relative">
          <select id="village" name="village" v-model="form.village" :disabled="!form.block || loadingVillages" class="w-full appearance-none px-4 py-2.5 pr-10 text-sm bg-white dark:bg-slate-800 disabled:bg-slate-50/70 dark:disabled:bg-slate-850 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 disabled:text-slate-400 dark:disabled:text-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all cursor-pointer disabled:cursor-not-allowed">
            <option value="" disabled>
              {{ loadingVillages ? 'Loading villages...' : (form.block ? 'Select Village' : '— Select block first —') }}
            </option>
            <option v-for="village in availableVillages" :key="village.id" :value="village.id">
              {{ village.name }}
            </option>
          </select>
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-slate-400 dark:text-slate-500">
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </div>

      <!-- Pincode / Zip Code -->
      <div class="mb-6">
        <label for="pincode" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-2">
          Pincode / Zip Code
        </label>
        <input id="pincode" name="pincode" v-model="form.pincode" type="text" placeholder="10001" class="w-full px-4 py-2.5 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all" />
      </div>

      <!-- Actions -->
      <div class="pt-6 mt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <button type="button" @click="handleReset" class="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors cursor-pointer">
          Reset Form
        </button>

        <button type="submit" id="submit-button" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-sm px-7 py-2.5 rounded-lg shadow-xs transition-colors cursor-pointer">
          Submit Form
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { CASCADING_DATA } from '../data/cascadingLocations';

const form = reactive({
  fullName: '',
  email: '',
  phone: '',
  state: '',
  district: '',
  block: '',
  village: '',
  pincode: ''
});

const states = ref([]);
const availableDistricts = ref([]);
const availableBlocks = ref([]);
const availableVillages = ref([]);

const loadingStates = ref(false);
const loadingDistricts = ref(false);
const loadingBlocks = ref(false);
const loadingVillages = ref(false);
const submissionResult = ref('');

const jurisdictionStatus = computed(() => {
  if (loadingStates.value || loadingDistricts.value || loadingBlocks.value || loadingVillages.value) {
    return 'Fetching cascading data...';
  }
  if (!form.state) {
    return 'Awaiting state selection';
  }
  if (!form.district) {
    return 'Awaiting district selection';
  }
  if (!form.block) {
    return 'Awaiting block selection';
  }
  if (!form.village) {
    return 'Awaiting village selection';
  }
  return 'Jurisdiction hierarchy complete';
});

async function loadStates() {
  loadingStates.value = true;
  try {
    const res = await fetch('/api/locations/states');
    if (res.ok) {
      const json = await res.json();
      states.value = json.data || json;
    } else {
      states.value = CASCADING_DATA.states;
    }
  } catch {
    states.value = CASCADING_DATA.states;
  } finally {
    loadingStates.value = false;
  }
}

onMounted(() => {
  loadStates();
});

async function handleStateChange() {
  form.district = '';
  form.block = '';
  form.village = '';
  availableDistricts.value = [];
  availableBlocks.value = [];
  availableVillages.value = [];

  if (!form.state) return;

  loadingDistricts.value = true;
  try {
    const res = await fetch(`/api/locations/districts?state=${encodeURIComponent(form.state)}`);
    if (res.ok) {
      const json = await res.json();
      availableDistricts.value = json.data || [];
    } else {
      availableDistricts.value = CASCADING_DATA.districts[form.state] || [];
    }
  } catch {
    availableDistricts.value = CASCADING_DATA.districts[form.state] || [];
  } finally {
    loadingDistricts.value = false;
  }
}

async function handleDistrictChange() {
  form.block = '';
  form.village = '';
  availableBlocks.value = [];
  availableVillages.value = [];

  if (!form.district) return;

  loadingBlocks.value = true;
  try {
    const res = await fetch(`/api/locations/blocks?district=${encodeURIComponent(form.district)}`);
    if (res.ok) {
      const json = await res.json();
      availableBlocks.value = json.data || [];
    } else {
      availableBlocks.value = CASCADING_DATA.blocks[form.district] || [
        { id: `${form.district}-BLK1`, name: 'Central Block' },
        { id: `${form.district}-BLK2`, name: 'North Block' }
      ];
    }
  } catch {
    availableBlocks.value = CASCADING_DATA.blocks[form.district] || [
      { id: `${form.district}-BLK1`, name: 'Central Block' },
      { id: `${form.district}-BLK2`, name: 'North Block' }
    ];
  } finally {
    loadingBlocks.value = false;
  }
}

async function handleBlockChange() {
  form.village = '';
  availableVillages.value = [];

  if (!form.block) return;

  loadingVillages.value = true;
  try {
    const res = await fetch(`/api/locations/villages?block=${encodeURIComponent(form.block)}`);
    if (res.ok) {
      const json = await res.json();
      availableVillages.value = json.data || [];
    } else {
      availableVillages.value = CASCADING_DATA.villages[form.block] || [
        { id: `${form.block}-VIL1`, name: 'Sector 1' },
        { id: `${form.block}-VIL2`, name: 'Sector 2' }
      ];
    }
  } catch {
    availableVillages.value = CASCADING_DATA.villages[form.block] || [
      { id: `${form.block}-VIL1`, name: 'Sector 1' },
      { id: `${form.block}-VIL2`, name: 'Sector 2' }
    ];
  } finally {
    loadingVillages.value = false;
  }
}

function handleReset() {
  form.fullName = '';
  form.email = '';
  form.phone = '';
  form.state = '';
  form.district = '';
  form.block = '';
  form.village = '';
  form.pincode = '';
  availableDistricts.value = [];
  availableBlocks.value = [];
  availableVillages.value = [];
  submissionResult.value = '';
}

function handleSubmit() {
  submissionResult.value = JSON.stringify(form, null, 2);
}
</script>
