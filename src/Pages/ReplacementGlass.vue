<template>
  <div :class="['showcase-page-container', isDarkMode ? 'theme-dark' : 'theme-light']">
    <Header />

    <main>
      <HeroSection :isDarkMode="isDarkMode" />
      <Overview :isDarkMode="isDarkMode" />
      <ResultSection :isDarkMode="isDarkMode" />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { ref, provide, onMounted } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/footer.vue'

// Keeping your exact import names intact
import HeroSection from '../components/ReplacementGlassComponents/HeroSection.vue'
import Overview from '../components/ReplacementGlassComponents/Overview.vue'
import ResultSection from '../components/ReplacementGlassComponents/ResultSection.vue'

// Set default theme state to true (Pure Black/Dark mode by default) - Matching Home.vue
const isDarkMode = ref(true)

// Helper function to update the global HTML class token - Matching Home.vue
const applyGlobalThemeClass = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add('theme-dark')
    document.documentElement.classList.remove('theme-light')
  } else {
    document.documentElement.classList.add('theme-light')
    document.documentElement.classList.remove('theme-dark')
  }
}

// Saved under a unified local storage key and updates root HTML element classes - Matching Home.vue
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  const activeTheme = isDarkMode.value ? 'dark' : 'light'
  
  localStorage.setItem('webhive-theme', activeTheme)
  applyGlobalThemeClass(isDarkMode.value)
}

// ── CRITICAL ADDITION FOR THE HEADER TOGGLE BUTTON TO WORK ──
// We provide the reactive state and the toggle function so Header.vue can inject them
provide('isDarkMode', isDarkMode)
provide('toggleTheme', toggleTheme)

onMounted(() => {
  // Check the universal site theme preference. Defaults to dark. - Matching Home.vue
  const savedTheme = localStorage.getItem('webhive-theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    isDarkMode.value = true
  }
  
  // Keep root context token up-to-date instantly - Matching Home.vue
  applyGlobalThemeClass(isDarkMode.value)
})

// --- Mock Data Structures for Props ---
const projectStats = [
  { label: 'E-Commerce Funnel Steps', value: '3 Steps' },
  { label: 'Asset Payload Reduction', value: '42%' },
  { label: 'Mobile Core Web Vitals', value: '98/100' }
]

const techTags = ['Vue 3', 'Vite', 'Tailwind CSS', 'GSAP Animations', 'JavaScript']

const coreFeatures = [
  { title: 'Custom Glass Configurator', detail: 'An interactive, step-by-step layout wizard tailored to input exact shape specifications cleanly.' },
  { title: 'Instant Quote Engine', detail: 'Calculates dimension adjustments and structural properties on-the-fly inside the client frontend.' }
]

const galleryImages = [
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200'
]

const projectChallenges = {
  problem: 'Handling variable dimensional matrices dynamically without compounding heavy rendering overhead or complex layout shifts on budget viewports.',
  solution: 'Engineered clean utility grids that handle isolated dynamic prop updates on sub-components using lightweight Vue reactive states.'
}

const processSteps = [
  { phase: '01. System Layout', detail: 'Structuring layout grids and implementing strict scoping across deep component wrappers.' },
  { phase: '02. Optimization', detail: 'Refining animation cycles using lightweight scroll trigger timelines to preserve frames.' }
]
</script>

<style scoped>
/* Unified structural view layout styles */
.showcase-page-container {
  min-height: 100vh;
  transition: background-color 0.4s ease, color 0.4s ease;
}

.showcase-page-container.theme-dark {
  background-color: #000000;
  color: #ffffff;
}

.showcase-page-container.theme-light {
  background-color: #ffffff;
  color: #000000;
}

main {
  display: flex;
  flex-direction: column;
  gap: 6rem; /* Space between sections */
  padding-top: 100px; /* Protect content from spilling under the fixed navigation navbar */
}
</style>