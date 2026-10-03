<template>
  <div v-if="scenario" class="min-h-screen flex flex-col bg-[#f8fafd] dark:bg-[#0b0f19] px-4 py-6 transition-colors">
    <FormTopNav :scenario-name="`${scenario.displayId} - ${scenario.title}`" />

    <main class="max-w-3xl mx-auto w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 sm:p-10 my-2 transition-colors">
      <!-- Scenario Title & Tag -->
      <div class="mb-6 pb-4 border-b border-slate-100 dark:border-slate-800">
        <!-- Row 1: Tag on left, Actions/buttons on right -->
        <div class="flex flex-wrap items-center justify-between gap-2.5 mb-3">
          <span class="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2.5 py-1 rounded">
            {{ scenario.displayId }} &bull; {{ scenario.tag }}
          </span>
          <div class="flex items-center gap-2 shrink-0">
            <span class="font-mono text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-2.5 py-1.5 rounded">
              {{ scenario.mechanism }}
            </span>
            <ExampleDownloadDropdown :scenario-id="scenario.id" :display-id="scenario.displayId" />
          </div>
        </div>

        <!-- Row 2: Title & Description -->
        <div>
          <h2 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            {{ scenario.title }}
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            {{ scenario.description }}
          </p>
        </div>
      </div>

      <!-- Dynamic Component for Example Scenario -->
      <component :is="activeComponent" :key="id" />
    </main>

    <TestBenchFooter :label="`${scenario.displayId} Sandbox`" />
  </div>
</template>

<script setup>
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import FormTopNav from '../components/forms/FormTopNav.vue';
import TestBenchFooter from '../components/forms/TestBenchFooter.vue';
import ExampleDownloadDropdown from '../components/forms/ExampleDownloadDropdown.vue';
import { SCENARIOS } from '../data/scenarios';
import { getExampleComponent } from '../examples';

const route = useRoute();

const id = computed(() => route.params.id);

const scenario = computed(() => {
  const param = id.value;
  return (
    SCENARIOS.find((s) => s.id === param) ||
    SCENARIOS.find((s) => s.id === '12-13' && (param === '12' || param === '13')) ||
    SCENARIOS[0]
  );
});

const activeComponent = computed(() => {
  return getExampleComponent(id.value);
});

watch(
  scenario,
  (cur) => {
    if (cur) {
      document.title = `${cur.title} (${cur.displayId}) | ED Filler Test Suite`;
    }
  },
  { immediate: true }
);
</script>
