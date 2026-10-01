<template>
  <div class="relative" ref="menuRef">
    <button
      @click="open = !open"
      type="button"
      class="inline-flex items-center gap-2 bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white font-semibold text-xs px-3.5 py-2 rounded-lg shadow-xs transition-colors cursor-pointer"
      title="Download Extension for Chrome & Firefox"
    >
      <!-- Download Arrow SVG Icon -->
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
        <polyline points="7 10 12 15 17 10"></polyline>
        <line x1="12" y1="15" x2="12" y2="3"></line>
      </svg>
      <span class="hidden sm:inline">Download Extension</span>
      <span class="sm:hidden">Download</span>
      <svg class="w-3 h-3 text-blue-200 dark:text-blue-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>

    <!-- Download Options Popover -->
    <div
      v-if="open"
      class="absolute right-0 mt-2 w-72 sm:w-80 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xl py-2 z-50"
    >
      <div class="px-3.5 py-2 border-b border-slate-100 dark:border-slate-700/80">
        <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 block">
          Extension Download Channels
        </span>
        <span class="text-xs text-slate-600 dark:text-slate-300">
          Select your browser store or package:
        </span>
      </div>

      <div class="py-1">
        <a
          v-for="link in downloadLinks"
          :key="link.title"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-start gap-3 px-3.5 py-2.5 hover:bg-slate-50 dark:hover:bg-slate-700/60 transition-colors group"
        >
          <!-- Platform Icon -->
          <div class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center shrink-0 text-slate-700 dark:text-slate-200 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            <!-- Chrome SVG -->
            <svg v-if="link.icon === 'chrome'" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="4"></circle>
              <line x1="21.17" y1="8" x2="12" y2="8"></line>
              <line x1="3.95" y1="6.06" x2="8.54" y2="14"></line>
              <line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>
            </svg>
            <!-- Firefox SVG -->
            <svg v-else-if="link.icon === 'firefox'" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 2a10 10 0 0 1 10 10c0 4-2.5 7.5-6 9-1.5-1.5-2.5-3.5-2-6 .5-2.5-.5-4.5-2-6-1 2-2 3.5-4 4-2 .5-3 2.5-3 5a10 10 0 0 1-3-6C2 6.5 6.5 2 12 2z"></path>
            </svg>
            <!-- Code / Dev SVG -->
            <svg v-else-if="link.icon === 'dev'" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
            <!-- Globe / Docs SVG -->
            <svg v-else class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>

          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between">
              <span class="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {{ link.title }}
              </span>
              <svg class="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </div>
            <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 leading-tight">
              {{ link.subtitle }}
            </p>
          </div>
        </a>
      </div>

      <div class="mt-1 pt-2 px-3.5 pb-1 border-t border-slate-100 dark:border-slate-700/80 flex items-center justify-between text-[11px] text-slate-400">
        <span>Manifest V3 Supported</span>
        <a href="https://docs.edfiller.in/" target="_blank" rel="noopener noreferrer" class="text-blue-600 dark:text-blue-400 hover:underline">
          View Docs
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const open = ref(false);
const menuRef = ref(null);

const downloadLinks = [
  {
    title: 'Chrome Web Store',
    subtitle: 'Official Release (Stable)',
    url: 'https://chrome.google.com/webstore/detail/excellent-data-filler-cth/abafaagbfhobgjkcepckbnadafflkdea',
    icon: 'chrome'
  },
  {
    title: 'Chrome Beta / Dev Channel',
    subtitle: 'Latest pre-release features',
    url: 'https://chromewebstore.google.com/detail/excellent-data-filler-dev/pkcdniljhopkooejgnidnfahljpnopgn',
    icon: 'dev'
  },
  {
    title: 'Firefox Add-ons',
    subtitle: 'Official Release for Mozilla Firefox',
    url: 'https://addons.mozilla.org/en-US/firefox/addon/excellent-data-filler/',
    icon: 'firefox'
  },
  {
    title: 'Official Download Guide',
    subtitle: 'Edge, Opera & Manual installation',
    url: 'https://docs.edfiller.in/documentation/#download-extension',
    icon: 'docs'
  }
];

function handleClickOutside(event) {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    open.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
