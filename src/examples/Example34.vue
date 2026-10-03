<template>
  <div class="space-y-6">
    <!-- Video Player Section -->
    <div class="p-5 bg-slate-50/70 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-700 rounded-xl space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-700">
        <div>
          <h3 class="text-xs font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">
            Public Video Player (Max ~5 Min Stream)
          </h3>
          <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Public video stream (~3.5 minutes, max under 5 min) with manual controls (autoplay disabled).
          </p>
        </div>
        <div class="flex items-center gap-2">
          <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] font-mono border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300">
            <span class="w-2 h-2 rounded-full" :class="isPlaying ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'"></span>
            {{ isPlaying ? 'Playing' : 'Paused' }}
          </span>
          <span class="text-[11px] font-mono text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 px-2.5 py-1 rounded border border-slate-200 dark:border-slate-700">
            {{ currentTimeFormatted }} / {{ durationFormatted }}
          </span>
        </div>
      </div>

      <!-- Video Clip Selector -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div class="flex items-center gap-2 w-full sm:w-auto">
          <label for="videoSelect34" class="text-[11px] font-bold text-slate-800 dark:text-slate-200 uppercase whitespace-nowrap">
            Select Video:
          </label>
          <select id="videoSelect34" v-model="selectedVideoUrl" @change="handleVideoChange" class="px-2.5 py-1.5 text-xs bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-600 cursor-pointer">
            <option value="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4">
              View From A Blue Moon (~3 min 26 sec)
            </option>
            <option value="https://vjs.zencdn.net/v/oceans.mp4">
              Oceans Wildlife Sample (~47 sec)
            </option>
            <option value="https://media.w3.org/2010/05/sintel/trailer.mp4">
              Sintel Open Movie Trailer (~52 sec)
            </option>
          </select>
        </div>

        <span class="text-[11px] font-medium text-slate-500 dark:text-slate-400">
          Duration: Max 5 minutes
        </span>
      </div>

      <!-- HTML5 Video Element (Not Autoplay) -->
      <div class="relative rounded-xl overflow-hidden bg-black aspect-video border border-slate-300 dark:border-slate-700 shadow-xs flex items-center justify-center">
        <video ref="videoRef" id="sampleVideo34" controls preload="metadata" class="w-full h-full object-contain" :src="selectedVideoUrl" @timeupdate="handleTimeUpdate" @loadedmetadata="handleLoadedMetadata" @play="isPlaying = true" @pause="isPlaying = false" @volumechange="handleVolumeChange">
          <p class="text-xs text-white p-4">Your browser does not support HTML5 video.</p>
        </video>
      </div>

      <!-- Playback Controls & Status -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1 text-xs">
        <div class="flex flex-wrap items-center gap-2">
          <button id="playPauseBtn34" type="button" @click="togglePlay" class="px-3.5 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold transition-colors cursor-pointer">
            {{ isPlaying ? 'Pause Video' : 'Play Video' }}
          </button>
          <button id="restartBtn34" type="button" @click="restartVideo" class="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors cursor-pointer">
            Restart
          </button>
          <button id="muteBtn34" type="button" @click="toggleMute" class="px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors cursor-pointer">
            {{ isMuted ? 'Unmute' : 'Mute' }}
          </button>

          <!-- Speed Controls -->
          <div class="flex items-center gap-1.5 pl-1 sm:pl-3 border-l border-slate-300 dark:border-slate-700">
            <span class="text-[11px] font-semibold text-slate-600 dark:text-slate-400">Speed:</span>
            <button v-for="rate in [0.75, 1, 1.25, 1.5, 2]" :key="rate" type="button" @click="setPlaybackRate(rate)" class="px-2 py-1 rounded text-[11px] font-mono transition-colors cursor-pointer" :class="playbackRate === rate
              ? 'bg-blue-600 text-white font-bold'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'">
              {{ rate }}x
            </button>
          </div>
        </div>

        <span class="text-[11px] text-slate-500 dark:text-slate-400">
          Source: Public Open Media Stream
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const videoRef = ref(null);
const isPlaying = ref(false);
const isMuted = ref(false);
const currentTime = ref(0);
const duration = ref(0);
const playbackRate = ref(1);

const STORAGE_KEY = 'example34_selected_video';
const DEFAULT_VIDEO = 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4';
const VALID_VIDEOS = [
  'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4',
  'https://vjs.zencdn.net/v/oceans.mp4',
  'https://media.w3.org/2010/05/sintel/trailer.mp4'
];

function getInitialVideo() {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && VALID_VIDEOS.includes(saved)) {
      return saved;
    }
  }
  return DEFAULT_VIDEO;
}

const selectedVideoUrl = ref(getInitialVideo());

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

const currentTimeFormatted = computed(() => formatTime(currentTime.value));
const durationFormatted = computed(() => formatTime(duration.value));

function handleTimeUpdate(e) {
  currentTime.value = e.target.currentTime;
}

function handleLoadedMetadata(e) {
  duration.value = e.target.duration;
  isMuted.value = e.target.muted;
}

function handleVolumeChange(e) {
  isMuted.value = e.target.muted;
}

function handleVideoChange() {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, selectedVideoUrl.value);
    window.location.reload();
  }
}

function togglePlay() {
  if (!videoRef.value) return;
  if (videoRef.value.paused) {
    videoRef.value.play();
  } else {
    videoRef.value.pause();
  }
}

function restartVideo() {
  if (!videoRef.value) return;
  videoRef.value.currentTime = 0;
  videoRef.value.play();
}

function toggleMute() {
  if (!videoRef.value) return;
  videoRef.value.muted = !videoRef.value.muted;
  isMuted.value = videoRef.value.muted;
}

function setPlaybackRate(rate) {
  playbackRate.value = rate;
  if (videoRef.value) {
    videoRef.value.playbackRate = rate;
  }
}
</script>
