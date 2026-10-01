import { ref, onMounted } from 'vue';

const themeMode = ref(localStorage.getItem('ed_theme') || 'system');
const isDark = ref(false);

function applyTheme() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const shouldBeDark =
    themeMode.value === 'dark' || (themeMode.value === 'system' && prefersDark);

  isDark.value = shouldBeDark;

  if (shouldBeDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function useTheme() {
  function setTheme(mode) {
    themeMode.value = mode;
    localStorage.setItem('ed_theme', mode);
    applyTheme();
  }

  function cycleTheme() {
    if (themeMode.value === 'system') {
      setTheme('light');
    } else if (themeMode.value === 'light') {
      setTheme('dark');
    } else {
      setTheme('system');
    }
  }

  // Initialize listener
  if (typeof window !== 'undefined' && window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', () => {
        if (themeMode.value === 'system') {
          applyTheme();
        }
      });
    }
  }

  onMounted(() => {
    applyTheme();
  });

  return {
    themeMode,
    isDark,
    setTheme,
    cycleTheme
  };
}
