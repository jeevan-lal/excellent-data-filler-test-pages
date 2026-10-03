<template>
  <div class="min-h-screen flex flex-col bg-[#f8fafd] dark:bg-[#0b0f19] px-4 py-6 transition-colors">
    <FormTopNav scenario-name="Example 11 - Cascading Dropdowns" />

    <main class="max-w-3xl mx-auto w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-[0_2px_8px_rgba(0,0,0,0.04)] p-6 sm:p-10 my-2 transition-colors">
      <div class="mb-8 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div>
          <h2 class="text-2xl sm:text-[26px] font-bold text-slate-900 dark:text-slate-100 tracking-tight">
            Demographic Registration Form
          </h2>
          <p class="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
            Enter applicant details and select hierarchical region attributes to verify automated cascading selection.
          </p>
        </div>
        <div class="self-start sm:self-auto shrink-0">
          <ExampleDownloadDropdown scenario-id="11" display-id="Example 11" />
        </div>
      </div>

      <Example11 />
    </main>

    <TestBenchFooter label="Example 11 Form Sandbox" />
  </div>
</template>

<script setup>
import FormTopNav from '../../components/forms/FormTopNav.vue';
import TestBenchFooter from '../../components/forms/TestBenchFooter.vue';
import ExampleDownloadDropdown from '../../components/forms/ExampleDownloadDropdown.vue';
import Example11 from '../../examples/Example11.vue';
</script>
