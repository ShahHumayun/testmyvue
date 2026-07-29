<template>
  <div ref="pageContainer" :class="[
    'font-sans relative overflow-hidden w-full max-w-full',
    selectionClasses,
    isDarkMode ? 'bg-[#000000] text-[#FFFFFF] theme-dark' : 'bg-white text-[#0f172a] theme-light'
  ]">

    <Header />

    <div class="pointer-events-none fixed inset-0 z-10 opacity-25 transition-opacity duration-300 will-change-transform"
      :style="{ background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, rgba(${glowRGB}, 0.12), transparent 80%)` }">
    </div>
    <br><br>

    <div class="w-full max-w-full">
      <AppComponent1 :phone-rotation="phoneRotation" :isDarkMode="isDarkMode" />
    </div>
    <div class="w-full max-w-full">
      <AppComponent2 :isDarkMode="isDarkMode" />
    </div>
    <div class="w-full max-w-full">
      <AppDevelopmentProjectSection :isDarkMode="isDarkMode" @open-modal="openModal" />
    </div>
    <div class="w-full max-w-full">
      <AppComponent3 :isDarkMode="isDarkMode" />
    </div>
    <div class="w-full max-w-full">
      <AppComponent4 :isDarkMode="isDarkMode" />
    </div>
    <div class="w-full max-w-full">
      <AppComponent5 :isDarkMode="isDarkMode" />
    </div>
    <div class="w-full max-w-full">
      <AppComponent6 :isDarkMode="isDarkMode" />
    </div>
    <div class="w-full max-w-full">
      <AppComponent7 :isDarkMode="isDarkMode" />
    </div>
    <div class="w-full max-w-full">
      <AppComponent8 :isDarkMode="isDarkMode" />
    </div>
    <div class="w-full max-w-full">
      <AppComponent9 :isDarkMode="isDarkMode" />
    </div>
    <div class="w-full max-w-full">
      <AppComponent10 :isDarkMode="isDarkMode" />
    </div>
    <div class="w-full max-w-full">
      <AppComponent11 :isDarkMode="isDarkMode" />
    </div>
    <div class="w-full max-w-full">
      <AppComponent12 :isDarkMode="isDarkMode" />
    </div>
    <div class="w-full max-w-full">
      <Footer />
    </div>

    <!-- ✅ Same modal overlay as Portfolio.vue -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div v-if="activeModal" class="modal-backdrop" @click.self="closeModal">
          <button @click="closeModal" class="modal-close-btn" aria-label="Close app preview">
            <span class="close-x">✕</span>
            <span class="close-text">Close</span>
          </button>

          <div class="modal-card">
            <div class="modal-scroll-inner">
              <component :is="activeModal" />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { ref, reactive, computed, watch, onMounted, onUnmounted, provide } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import AppComponent1 from '../components/AppComponent1.vue'
import AppComponent2 from '../components/AppComponent2.vue'
import AppComponent3 from '../components/AppComponent3.vue'

import AppDevelopmentProjectSection from '../components/AppDevelopmentProjectSection.vue'

// ✅ All four app components for the modal
import TaylorAllergyApp from '../components/TaylorAllergyApp.vue'
import MyExpenseTrackerApp from '../components/MyExpenseTrackerApp.vue'
import BookLibraryApp from '../components/BookLibraryApp.vue'
import MagentoConnectorApp from '../components/MagentoConnectorApp.vue'

import AppComponent4 from '../components/AppComponent4.vue'
import AppComponent5 from '../components/AppComponent5.vue'
import AppComponent6 from '../components/AppComponent6.vue'
import AppComponent7 from '../components/AppComponent7.vue'
import AppComponent8 from '../components/AppComponent8.vue'
import AppComponent9 from '../components/AppComponent9.vue'
import AppComponent10 from '../components/AppComponent10.vue'
import AppComponent11 from '../components/AppComponent11.vue'
import AppComponent12 from '../components/AppComponent12.vue'
import Footer from '../components/footer.vue'

gsap.registerPlugin(ScrollTrigger)

const pageContainer = ref(null)
const mouse = reactive({ x: 0, y: 0 })
const phoneRotation = reactive({ x: 0, y: 0 })
let rafId = null

// ── Theme state — matches ReplacementGlass.vue exactly ──
const isDarkMode = ref(true)

// Accent color driving the cursor spotlight glow: brand green in dark mode, orange in light mode
const glowRGB = computed(() => (isDarkMode.value ? '0, 255, 163' : '249, 115, 22'))

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
// components can inject them, same pattern as ReplacementGlass.vue
provide('isDarkMode', isDarkMode)
provide('toggleTheme', toggleTheme)

// ✅ Modal logic — now URL/history-aware instead of a plain ref.
// activeModal is derived from route.query.app, so browser back/forward
// naturally restores it after navigating away (e.g. to /consultation).
const route = useRoute()
const router = useRouter()

const modalMap = {
  'Taylor Allergy': TaylorAllergyApp,
  'My Expense Tracker': MyExpenseTrackerApp,
  'Book Library': BookLibraryApp,
  'Magento Connector': MagentoConnectorApp,
}

const activeModal = computed(() => {
  const key = route.query.app
  return key && modalMap[key] ? modalMap[key] : null
})

const openModal = (projectTitle) => {
  if (!modalMap[projectTitle]) return
  router.push({ query: { ...route.query, app: projectTitle } })
}

const closeModal = () => {
  const newQuery = { ...route.query }
  delete newQuery.app
  router.push({ query: newQuery })
}

watch(activeModal, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

const handleKeydown = (e) => { if (e.key === 'Escape') closeModal() }
watch(activeModal, (val) => {
  if (val) window.addEventListener('keydown', handleKeydown)
  else window.removeEventListener('keydown', handleKeydown)
})

const handleMouseMove = (e) => {
  if (!rafId) {
    rafId = requestAnimationFrame(() => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      const halfW = window.innerWidth / 2
      const halfH = window.innerHeight / 2
      phoneRotation.y = ((e.clientX - halfW) / halfW) * 15
      phoneRotation.x = -((e.clientY - halfH) / halfH) * 15
      rafId = null
    })
  }
}

onMounted(() => {
  // Check the universal site theme preference. Defaults to dark. - Matching ReplacementGlass.vue
  const savedTheme = localStorage.getItem('webhive-theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    isDarkMode.value = true
  }

  // Keep root context token up-to-date instantly
  applyGlobalThemeClass(isDarkMode.value)

  window.addEventListener('mousemove', handleMouseMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('keydown', handleKeydown)
  cancelAnimationFrame(rafId)
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<style scoped>
/* ✅ Identical modal styles to Portfolio.vue, with a light-theme accent override.
   The modal is Teleported to <body>, outside this component's themed wrapper,
   so the light-theme variant targets the theme class already applied to <html>. */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.modal-card {
  position: relative;
  width: 100%;
  max-width: 1100px;
  max-height: 88vh;
  background: #0b0c10;
  border-radius: 24px;
  border: 1px solid rgba(0, 255, 163, 0.25);
  box-shadow:
    0 0 0 1px rgba(0, 255, 163, 0.1),
    0 0 40px rgba(0, 255, 163, 0.15),
    0 0 80px rgba(0, 255, 163, 0.08),
    0 30px 60px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

:global(html.theme-light) .modal-card {
  border: 1px solid rgba(249, 115, 22, 0.25);
  box-shadow:
    0 0 0 1px rgba(249, 115, 22, 0.1),
    0 0 40px rgba(249, 115, 22, 0.15),
    0 0 80px rgba(249, 115, 22, 0.08),
    0 30px 60px rgba(0, 0, 0, 0.8);
}

.modal-scroll-inner {
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 255, 163, 0.2) transparent;
}

:global(html.theme-light) .modal-scroll-inner {
  scrollbar-color: rgba(249, 115, 22, 0.2) transparent;
}

.modal-scroll-inner::-webkit-scrollbar {
  width: 4px;
}

.modal-scroll-inner::-webkit-scrollbar-track {
  background: transparent;
}

.modal-scroll-inner::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 163, 0.2);
  border-radius: 4px;
}

:global(html.theme-light) .modal-scroll-inner::-webkit-scrollbar-thumb {
  background: rgba(249, 115, 22, 0.2);
}

.modal-close-btn {
  position: fixed;
  top: 20px;
  right: 28px;
  z-index: 10000;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  background: #00ffa3;
  color: #000000;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.04em;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(0, 255, 163, 0.45);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

:global(html.theme-light) .modal-close-btn {
  background: #f97316;
  box-shadow: 0 4px 24px rgba(249, 115, 22, 0.45);
}

.modal-close-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 255, 163, 0.6);
}

:global(html.theme-light) .modal-close-btn:hover {
  box-shadow: 0 8px 32px rgba(249, 115, 22, 0.6);
}

.modal-close-btn:active {
  transform: translateY(0);
}

.close-x {
  font-size: 11px;
  font-weight: 900;
  line-height: 1;
}

.close-text {
  line-height: 1;
}

.modal-fade-enter-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.modal-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.97);
}

@media (max-width: 600px) {
  .modal-card {
    border-radius: 16px;
    max-height: 92vh;
  }

  .modal-backdrop {
    padding: 12px;
  }

  .modal-close-btn {
    top: 12px;
    right: 14px;
    padding: 8px 14px;
    font-size: 12px;
  }
}
</style>