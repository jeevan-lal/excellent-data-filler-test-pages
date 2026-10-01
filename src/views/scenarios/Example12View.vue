<template>
  <div class="min-h-screen flex flex-col bg-[#f8fafd] dark:bg-[#0b0f19] px-4 py-6 transition-colors">
    <FormTopNav scenario-name="Example 12-13 - Multi-URL Step 1 of 2" />

    <main class="max-w-2xl mx-auto w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 sm:p-10 my-2 transition-colors">
      <Example12 />
    </main>

    <TestBenchFooter label="Example 12-13 Multi-Stage Flow" />
  </div>
</template>

<script setup>
import FormTopNav from '../../components/forms/FormTopNav.vue';
import TestBenchFooter from '../../components/forms/TestBenchFooter.vue';
import Example12 from '../../examples/Example12.vue';
</script>
