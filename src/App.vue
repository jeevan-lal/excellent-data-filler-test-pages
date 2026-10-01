<template>
  <div class="min-h-screen flex flex-col bg-[#f8fafd] dark:bg-[#0b0f19] text-slate-800 dark:text-slate-100 transition-colors">
    <router-view />
  </div>
</template>

<script setup>
import { useTheme } from './composables/useTheme';

// Initialize theme on root mount
useTheme();
</script>
