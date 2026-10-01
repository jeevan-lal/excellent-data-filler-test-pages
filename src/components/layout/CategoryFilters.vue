<template>
  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-4">
    <!-- Filter Pills List -->
    <div class="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
      <button
        v-for="cat in categories"
        :key="cat.id"
        @click="$emit('select-category', cat.id)"
        type="button"
        :class="[
          'inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-150 cursor-pointer',
          activeCategory === cat.id
            ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-xs'
            : 'bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700/70 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white'
        ]"
      >
        <span>{{ cat.label }}</span>
        <span
          :class="[
            'ml-1.5 text-xs',
            activeCategory === cat.id
              ? 'text-slate-300 dark:text-blue-100 font-semibold'
              : 'text-slate-400 dark:text-slate-400 font-medium'
          ]"
        >
          {{ cat.count }}
        </span>
      </button>
    </div>

    <!-- Showing Counter -->
    <div class="text-xs text-slate-500 dark:text-slate-400 font-medium shrink-0">
      Showing <span class="font-semibold text-slate-800 dark:text-slate-200">{{ currentCount }}</span> of {{ totalCount }} tests
    </div>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  },
  activeCategory: {
    type: String,
    required: true
  },
  currentCount: {
    type: Number,
    required: true
  },
  totalCount: {
    type: Number,
    required: true
  }
});

defineEmits(['select-category']);
</script>
