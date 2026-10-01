<template>
  <footer class="mt-auto py-8 text-center">
    <p class="text-xs text-slate-400 dark:text-slate-500 font-medium tracking-tight">
      ED Filler Test Bench &bull; {{ label }}
    </p>
  </footer>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: 'Form Sandbox'
  }
});
</script>
