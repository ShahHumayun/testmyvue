<template>
  <div ref="pageWrapper" :class="[
    'font-sans relative overflow-hidden w-full max-w-full',
    selectionClasses,
    isDarkMode ? 'bg-[#000000] text-[#FFFFFF] theme-dark' : 'bg-white text-[#0f172a] theme-light'
  ]">

    <!-- Real-time Enterprise Interactive Network Background Dynamic Mesh -->
    <div class="pointer-events-none fixed inset-0 z-10 opacity-30 transition-opacity duration-500"
      :style="{ background: `radial-gradient(800px circle at ${pointer.x}px ${pointer.y}px, rgba(${glowRGB},0.12), transparent 75%)` }">
    </div>
    <Header /><br>
    <div class="w-full max-w-full">
      <HeroSection :isDarkMode="isDarkMode" />
    </div>
    <div class="w-full max-w-full">
      <Overview :isDarkMode="isDarkMode" />
    </div>
    <div class="w-full max-w-full">
      <ResultSection :isDarkMode="isDarkMode" />
    </div>
    <div class="w-full max-w-full">
      <Footer />
    </div>






  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted, provide } from 'vue'

import Header from '../components/Header.vue'
import HeroSection from '../components/ReplacementGlassComponents/HeroSection.vue'
import Overview from '../components/ReplacementGlassComponents/Overview.vue'
import ResultSection from '../components/ReplacementGlassComponents/ResultSection.vue'
import Footer from '../components/footer.vue'


// Page-level identity ref (kept for parity with the original single-file markup;
// not currently targeted by any animation)
const pageWrapper = ref(null)

// ── Theme state — matches ReplacementGlass.vue / AppDevelopment.vue / WebDevelopment.vue / EcommerceSolutions.vue exactly ──
const isDarkMode = ref(true)

// Accent color driving the pointer spotlight glow: brand green in dark mode, orange in light mode
const glowRGB = computed(() => (isDarkMode.value ? '0,255,163' : '249,115,22'))

// Text-selection highlight color, same accent logic
const selectionClasses = computed(() =>
  isDarkMode.value
    ? 'selection:bg-[#00ffa3] selection:text-[#000000]'
    : 'selection:bg-[#f97316] selection:text-[#000000]'
)

const applyGlobalThemeClass = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add('theme-dark')
    document.documentElement.classList.remove('theme-light')
  } else {
    document.documentElement.classList.add('theme-light')
    document.documentElement.classList.remove('theme-dark')
  }
}

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  const activeTheme = isDarkMode.value ? 'dark' : 'light'

  localStorage.setItem('webhive-theme', activeTheme)
  applyGlobalThemeClass(isDarkMode.value)
}

// Provide reactive state + toggle so Header.vue and all child section
// components can inject them, same pattern as the other page components
provide('isDarkMode', isDarkMode)
provide('toggleTheme', toggleTheme)

// Page-level pointer tracking, used by the fixed background mesh that sits
// above every section. This stays here rather than in a single section
// because it is a full-viewport effect, not tied to any one section.
const pointer = reactive({ x: 0, y: 0 })
let pointerRaf = null

const handlePointerMove = (e) => {
  if (!pointerRaf) {
    pointerRaf = requestAnimationFrame(() => {
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointerRaf = null
    })
  }
}

onMounted(() => {
  // Check the universal site theme preference. Defaults to dark. - Matching AppDevelopment.vue
  const savedTheme = localStorage.getItem('webhive-theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    isDarkMode.value = true
  }

  // Keep root context token up-to-date instantly
  applyGlobalThemeClass(isDarkMode.value)

  window.addEventListener('mousemove', handlePointerMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handlePointerMove)
  cancelAnimationFrame(pointerRaf)
})
</script>
