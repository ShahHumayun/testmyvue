<template>
  <div
    ref="pageContainer"
    :class="[
      'font-sans relative overflow-hidden',
      selectionClasses,
      isDarkMode ? 'bg-[#000000] text-[#FFFFFF] theme-dark' : 'bg-white text-[#0f172a] theme-light'
    ]"
  >

    <Header />

    <div 
      class="pointer-events-none fixed inset-0 z-10 opacity-25 transition-opacity duration-300 will-change-transform"
      :style="{ background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, rgba(${glowRGB}, 0.12), transparent 80%)` }"
    ></div>

   <ecommercecomponent1 :isDarkMode="isDarkMode" />
    <ecommercecomponent2 :isDarkMode="isDarkMode" />
    <EcommerceprojectsSection/>
     <ecommercecomponent3 :isDarkMode="isDarkMode" />
      <ecommercecomponent4 :isDarkMode="isDarkMode" />
      <ecommercecomponent5 :isDarkMode="isDarkMode" />
      <ecommercecomponent6 :isDarkMode="isDarkMode" />
      <ecommercecomponent7 :isDarkMode="isDarkMode" />
      <ecommercecomponent8 :isDarkMode="isDarkMode" />
      <ecommercecomponent9 :isDarkMode="isDarkMode" />
      <ecommercecomponent10 :isDarkMode="isDarkMode" />
      <ecommercecomponent11 :isDarkMode="isDarkMode" />
      <ecommercecomponent12 :isDarkMode="isDarkMode" />
      <ecommercecomponent13 :isDarkMode="isDarkMode" />
      <ecommercecomponent14 :isDarkMode="isDarkMode" />
      <ecommercecomponent15 :isDarkMode="isDarkMode" />
      <ecommercecomponent16 :isDarkMode="isDarkMode" />
      <Footer/>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive, computed, provide } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from '../components/Header.vue'
import ecommercecomponent1 from '../components/ecommercecomponent1.vue'
import ecommercecomponent2 from '../components/ecommercecomponent2.vue'
import ecommercecomponent3 from '../components/ecommercecomponent3.vue'
import EcommerceprojectsSection from '../components/EcommerceprojectsSection.vue'
import ecommercecomponent4 from '../components/ecommercecomponent4.vue'
import ecommercecomponent5 from '../components/ecommercecomponent5.vue'
import ecommercecomponent6 from '../components/ecommercecomponent6.vue'
import ecommercecomponent7 from '../components/ecommercecomponent7.vue'
import ecommercecomponent8 from '../components/ecommercecomponent8.vue'
import ecommercecomponent9 from '../components/ecommercecomponent9.vue'
import ecommercecomponent10 from '../components/ecommercecomponent10.vue'
import ecommercecomponent11 from '../components/ecommercecomponent11.vue'
import ecommercecomponent12 from '../components/ecommercecomponent12.vue'
import ecommercecomponent13 from '../components/ecommercecomponent13.vue'
import ecommercecomponent14 from '../components/ecommercecomponent14.vue'
import ecommercecomponent15 from '../components/ecommercecomponent15.vue'
import ecommercecomponent16 from '../components/ecommercecomponent16.vue'
import Footer from '../components/footer.vue'


gsap.registerPlugin(ScrollTrigger)

const pageContainer = ref(null)
const mouse = reactive({ x: 0, y: 0 })
const phoneRotation = reactive({ x: 0, y: 0 })
let rafId = null

// ── Theme state — matches ReplacementGlass.vue / AppDevelopment.vue / WebDevelopment.vue exactly ──
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
// components can inject them, same pattern as the other page components
provide('isDarkMode', isDarkMode)
provide('toggleTheme', toggleTheme)

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
  // Check the universal site theme preference. Defaults to dark. - Matching AppDevelopment.vue
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
  cancelAnimationFrame(rafId)
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>