<template>
  <div class="space-y-6">
    <!-- Notice Banner -->
    <div class="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
      <span class="font-semibold text-slate-800 dark:text-slate-200">Test Scenario:</span>
      Enter an email address, select your preferred file size (1 MB to 10 MB), and submit the form. A text file with the exact specified size will be generated and downloaded in your browser.
    </div>

    <!-- Success Notice -->
    <div v-if="downloaded" id="success-notice" class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 rounded-xl text-xs text-emerald-900 dark:text-emerald-300 space-y-3 shadow-xs">
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <strong class="font-semibold text-emerald-950 dark:text-emerald-200 text-sm">
          Text File Generated &amp; Downloaded
        </strong>
      </div>
      <p class="text-slate-600 dark:text-slate-400">
        The file has been dispatched to your browser downloads:
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-[11px]">
        <div class="p-2.5 bg-white/70 dark:bg-slate-900/60 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
          <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">Recipient Email:</span>
          <span class="text-slate-900 dark:text-slate-100 font-semibold">{{ lastDownload.email }}</span>
        </div>
        <div class="p-2.5 bg-white/70 dark:bg-slate-900/60 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
          <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">File Name:</span>
          <span class="text-slate-900 dark:text-slate-100 font-semibold">{{ lastDownload.filename }}</span>
        </div>
        <div class="p-2.5 bg-white/70 dark:bg-slate-900/60 rounded-lg border border-emerald-100 dark:border-emerald-900/40">
          <span class="text-slate-400 dark:text-slate-500 font-sans block text-[10px]">File Size:</span>
          <span class="text-slate-900 dark:text-slate-100 font-semibold">{{ lastDownload.sizeFormatted }}</span>
        </div>
      </div>
    </div>

    <!-- Submission & Download Form -->
    <form @submit.prevent="handleSubmit" id="example24-form" class="space-y-5">
      <!-- Email Address Field -->
      <div>
        <label for="userEmail24" class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase mb-1">
          Email Address *
        </label>
        <input id="userEmail24" name="userEmail" v-model="email" type="email" required placeholder="alex.carter@example.com" class="w-full px-3.5 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-600 transition-colors" />
        <p class="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
          This email address will be embedded into the downloaded file metadata.
        </p>
      </div>

      <!-- Dynamic File Size Selection Points (1 MB to 10 MB) -->
      <div class="p-4 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl space-y-3">
        <div class="flex items-center justify-between">
          <label class="block text-[11px] font-bold tracking-wider text-slate-800 dark:text-slate-300 uppercase">
            Select File Size (1 MB to 10 MB) *
          </label>
          <span class="text-[11px] font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/40 px-2 py-0.5 rounded font-semibold">
            {{ (selectedMB * 1024 * 1024).toLocaleString() }} bytes ({{ selectedMB }} MB)
          </span>
        </div>

        <!-- Size Points Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5">
          <button v-for="point in SIZE_POINTS" :id="'sizePoint' + point.mb + 'MB'" :key="point.mb" type="button" @click="selectedMB = point.mb" :class="[
            'p-2.5 text-center rounded-lg border transition-all cursor-pointer flex flex-col items-center justify-center gap-0.5',
            selectedMB === point.mb
              ? 'bg-[#0a2368] dark:bg-blue-600 text-white border-[#0a2368] dark:border-blue-600 shadow-xs'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'
          ]">
            <span class="text-xs font-bold">{{ point.label }}</span>
            <span :class="['text-[10px] font-mono', selectedMB === point.mb ? 'text-blue-100' : 'text-slate-400 dark:text-slate-500']">
              {{ point.desc }}
            </span>
          </button>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="pt-3 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
        <button type="button" @click="handleReset" class="text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 underline cursor-pointer">
          Reset Form
        </button>

        <button id="downloadBtn24" type="submit" class="bg-[#0a2368] hover:bg-[#07194d] dark:bg-blue-600 dark:hover:bg-blue-700 text-white text-xs font-semibold px-6 py-2.5 rounded-lg transition-colors cursor-pointer inline-flex items-center gap-2">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          <span>Submit &amp; Download File</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const SIZE_POINTS = [
  { label: '1 MB', mb: 1, desc: '1,024 KB' },
  { label: '2 MB', mb: 2, desc: '2,048 KB' },
  { label: '3 MB', mb: 3, desc: '3,072 KB' },
  { label: '5 MB', mb: 5, desc: '5,120 KB' },
  { label: '7 MB', mb: 7, desc: '7,168 KB' },
  { label: '10 MB', mb: 10, desc: '10,240 KB' }
];

const email = ref('');
const selectedMB = ref(3);
const downloaded = ref(false);

const lastDownload = reactive({
  email: '',
  filename: '',
  sizeFormatted: ''
});

function generatePayload(emailVal, targetBytes) {
  const header =
    '========================================\n' +
    'EXCELLENT DATA FILLER - DYNAMIC EXPORT\n' +
    '========================================\n' +
    `Recipient Email : ${emailVal}\n` +
    `Generated At    : ${new Date().toISOString()}\n` +
    `Target Size     : ${targetBytes.toLocaleString()} bytes (${(targetBytes / (1024 * 1024)).toFixed(1)} MB)\n` +
    '----------------------------------------\n\n';

  const headerBytes = new Blob([header]).size;
  if (headerBytes >= targetBytes) {
    return header;
  }

  const remaining = targetBytes - headerBytes;
  // 1024-byte block repeated for fast generation
  const block1K = 'PAYLOAD-ROW-0123456789-ABCDEF-VERIFIED-DATA-BLOCK-LINE\n'.repeat(19) + 'PADDING-BLOCK-END-1024B\n';
  const kCount = Math.floor(remaining / 1024);
  const remainder = remaining % 1024;

  let body = block1K.repeat(kCount);
  if (remainder > 0) {
    body += 'A'.repeat(remainder - 1) + '\n';
  }

  return header + body;
}

function handleSubmit() {
  const targetBytes = selectedMB.value * 1024 * 1024;
  const content = generatePayload(email.value, targetBytes);
  const filename = `export-${selectedMB.value}MB.txt`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
  URL.revokeObjectURL(url);

  lastDownload.email = email.value;
  lastDownload.filename = filename;
  lastDownload.sizeFormatted = `${targetBytes.toLocaleString()} bytes (${selectedMB.value} MB)`;
  downloaded.value = true;
}

function handleReset() {
  email.value = '';
  selectedMB.value = 3;
  downloaded.value = false;
}
</script>
