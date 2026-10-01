<template>
  <div class="min-h-screen flex flex-col bg-[#f8fafd] dark:bg-[#0b0f19] transition-colors">
    <!-- Top Navigation Header -->
    <AppHeader v-model="searchQuery" />

    <!-- Main Content Area -->
    <main class="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6 flex-1 flex flex-col">
      <!-- Filter Bar & Counter -->
      <CategoryFilters
        :categories="categoriesWithCounts"
        :active-category="activeCategory"
        :current-count="filteredScenarios.length"
        :total-count="SCENARIOS.length"
        @select-category="handleCategorySelect"
      />

      <!-- Scenario Grid -->
      <div v-if="filteredScenarios.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
        <ScenarioCard
          v-for="scenario in filteredScenarios"
          :key="scenario.id"
          :scenario="scenario"
        />
      </div>

      <!-- Empty State -->
      <div
        v-else
        class="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-12 text-center my-8 shadow-xs max-w-md mx-auto w-full"
      >
        <div class="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 mx-auto mb-3">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </div>
        <h3 class="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-1">No scenarios found</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400 mb-4">
          No test scenarios match your current filter or search criteria.
        </p>
        <button
          @click="resetFilters"
          type="button"
          class="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors cursor-pointer"
        >
          Reset Filters
        </button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import AppHeader from '../components/layout/AppHeader.vue';
import CategoryFilters from '../components/layout/CategoryFilters.vue';
import ScenarioCard from '../components/layout/ScenarioCard.vue';
import { CATEGORIES, SCENARIOS } from '../data/scenarios';

const searchQuery = ref('');
const activeCategory = ref('all');

const categoriesWithCounts = computed(() => {
  return CATEGORIES;
});

const filteredScenarios = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();

  return SCENARIOS.filter((scenario) => {
    // Category match
    const categoryMatches =
      activeCategory.value === 'all' || scenario.category === activeCategory.value;

    if (!categoryMatches) {
      return false;
    }

    // Search query match
    if (!query) {
      return true;
    }

    const idMatches = scenario.id.toLowerCase().includes(query) ||
                      scenario.displayId.toLowerCase().includes(query);
    const titleMatches = scenario.title.toLowerCase().includes(query);
    const descMatches = scenario.description.toLowerCase().includes(query);
    const tagMatches = scenario.tag.toLowerCase().includes(query);
    const mechanismMatches = scenario.mechanism.toLowerCase().includes(query);

    return idMatches || titleMatches || descMatches || tagMatches || mechanismMatches;
  });
});

function handleCategorySelect(catId) {
  activeCategory.value = catId;
}

function resetFilters() {
  searchQuery.value = '';
  activeCategory.value = 'all';
}
</script>
