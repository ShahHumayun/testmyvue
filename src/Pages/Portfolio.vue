<template>
  <div :class="['hero-wrapper', isDarkMode ? 'theme-dark' : 'theme-light']" @mousemove="handleMouseMove">
    <div class="bg-overlay">
      <div class="bg-grid-lines" :style="{ transform: `translate(${parallax.bgX}px, ${parallax.bgY}px)` }"></div>
    </div>

    <header class="navbar">
      <a href="#" class="company-branding logo">
        WEBHIVE<span class="dot">.</span>
      </a>

      <div class="nav-actions">
        <router-link to="/" class="consult-btn">
          Home
        </router-link>

        <button @click="toggleTheme" class="theme-toggle"
          :aria-label="isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'">
          <div class="toggle-thumb" :class="{ 'toggle-active': isDarkMode }">
            <span class="toggle-icon" aria-hidden="true">{{ isDarkMode ? '🌙' : '☀️' }}</span>
          </div>
        </button>

        <button @click="toggleMenu" class="menu-trigger" :class="{ 'menu-active': isMenuOpen }"
          :aria-expanded="isMenuOpen" aria-label="Toggle navigation menu">
          <span class="burger-line line-top"></span>
          <span class="burger-line line-mid"></span>
          <span class="burger-line line-bot"></span>
        </button>
      </div>
    </header>

    <Transition @enter="onMenuEnter" @leave="onMenuLeave" :css="false">
      <div v-if="isMenuOpen" class="nav-overlay">
        <nav class="nav-links-container">
          <div v-for="(item, index) in menuItems" :key="item" class="menu-item-wrap">
            <span class="menu-index">0{{ index + 1 }}</span>
            <router-link :to="item === 'Home' ? '/' : '/' + item.toLowerCase()" @click="toggleMenu" class="menu-link">
              {{ item }}
            </router-link>
          </div>

          <div class="menu-item-wrap overlay-btn-item">
            <span class="menu-index">0{{ menuItems.length + 1 }}</span>
            <router-link to="/" @click="toggleMenu" class="consult-btn-overlay">
              Home
            </router-link>
          </div>
        </nav>
      </div>
    </Transition>

    <main class="hero-main">
      <section class="portfolio-hero">
        <span class="section-tag animate-fade-in">Our Portfolio</span>
        <h1 class="portfolio-title animate-title">
          Projects Built <br>
          <span class="highlight-text">to Perform.</span>
        </h1>
        <p class="portfolio-subtitle animate-fade-in">
          A curated selection of web platforms, mobile apps, and e-commerce builds — each engineered for speed, scale,
          and measurable results.
        </p>

        <div class="cta-button-group animate-fade-in">
          <button @click="scrollToWork" class="btn-our-work">
            Our Work
          </button>
          <router-link to="/consultation" class="btn-start-project">
            Start a Project
          </router-link>
        </div>
      </section>

      <div ref="workSection" class="full-width-section-group">
        <WebDevelopmentPortfolioSection :isDarkMode="isDarkMode" />
        <AppDevelopmentProjectSection :isDarkMode="isDarkMode" @open-modal="openModal" />
        <EcommerceprojectsSection :isDarkMode="isDarkMode" />
      </div>

      <section class="culture-cta animate-scroll-element">
        <div class="cta-glow"></div>
        <h2 class="cta-title">
          Build Something <span class="highlight-text">Great</span> With Us.
        </h2>
        <p class="cta-subtitle">
          Whether you're a client or a future teammate — there's always room
          at the table.
        </p>
        <router-link to="/consultation" class="btn-start-project">
          Start a Project
        </router-link>
      </section>

      <div class="back-btn-row">
        <button class="go-back-btn" @click="goBack" aria-label="Go back to previous page">
          <span class="go-back-arrow" aria-hidden="true">←</span>
          Go Back
        </button>
      </div>
    </main>

    <Footer :darkMode="isDarkMode" />

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

    <button class="chat-fab" @click="isChatOpen = !isChatOpen" :aria-label="isChatOpen ? 'Close chat' : 'Open chat'">
      <svg v-if="!isChatOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="24" height="24">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.06 0-2.077-.16-3.02-.457L3 21l1.5-4.5C3.55 15.163 3 13.632 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        stroke-width="2" width="22" height="22">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>

    <Transition name="chat-pop">
      <div v-if="isChatOpen" class="chat-popup">
        <button class="chat-popup-close" @click="isChatOpen = false" aria-label="Close chat">✕</button>
        <ChatBot variant="popup" />
      </div>
    </Transition>

  </div>
</template>

<script setup>
import WebDevelopmentPortfolioSection from '../components/webdevelopmentportfoliosection.vue'
import AppDevelopmentProjectSection from '../components/AppDevelopmentProjectSection.vue'
import EcommerceprojectsSection from '../components/EcommerceprojectsSection.vue'
import ChatBot from '../components/ChatBot.vue'
import Footer from '../components/footer.vue'

// ✅ All four app components
import TaylorAllergyApp from '../components/TaylorAllergyApp.vue'
import MyExpenseTrackerApp from '../components/MyExpenseTrackerApp.vue'
import BookLibraryApp from '../components/BookLibraryApp.vue'
import MagentoConnectorApp from '../components/MagentoConnectorApp.vue'

import { ref, reactive, watch, onMounted, onUnmounted, provide } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()

function goBack() {
  router.back()
}

// 1. Keeps initial state true so default load mounts as dark mode directly
const isDarkMode = ref(true)
const isMenuOpen = ref(false)
const activeModal = ref(null)
const isChatOpen = ref(false)
const workSection = ref(null)

const scrollToWork = () => {
  if (workSection.value) {
    workSection.value.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

// ✅ Map project titles to their components
const modalMap = {
  'Taylor Allergy': TaylorAllergyApp,
  'My Expense Tracker': MyExpenseTrackerApp,
  'Book Library': BookLibraryApp,
  'Magento Connector': MagentoConnectorApp,
}

const openModal = (projectTitle) => {
  const component = modalMap[projectTitle]
  if (component) {
    activeModal.value = component
  }
}

const closeModal = () => {
  activeModal.value = null
}

// Helper function to update the global HTML class token
const applyGlobalThemeClass = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add('theme-dark')
    document.documentElement.classList.remove('theme-light')
  } else {
    document.documentElement.classList.add('theme-light')
    document.documentElement.classList.remove('theme-dark')
  }
}

// CHANGED: Saved under the unified webhive-theme key and updates root HTML element classes
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  const activeTheme = isDarkMode.value ? 'dark' : 'light'

  localStorage.setItem('webhive-theme', activeTheme)
  applyGlobalThemeClass(isDarkMode.value)
}

// Provide reactive state + toggle so any child component that injects
// 'isDarkMode' / 'toggleTheme' (the convention used across every other
// section component in this project) receives the real, live value —
// not just whichever ones happen to also accept it as a prop.
provide('isDarkMode', isDarkMode)
provide('toggleTheme', toggleTheme)

// Lock body scroll when modal is open
watch(activeModal, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

// Close on Escape key
const handleKeydown = (e) => {
  if (e.key === 'Escape') closeModal()
}
watch(activeModal, (val) => {
  if (val) window.addEventListener('keydown', handleKeydown)
  else window.removeEventListener('keydown', handleKeydown)
})

const menuItems = ['Home', 'About', 'Services', 'Culture', 'Studio', 'Policies']
const currentYear = new Date().getFullYear()

const parallax = reactive({ bgX: 0, bgY: 0 })

const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window
  const xWeight = (clientX / innerWidth) - 0.5
  const yWeight = (clientY / innerHeight) - 0.5
  parallax.bgX = xWeight * -15
  parallax.bgY = yWeight * -15
}

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }

const onMenuEnter = (el, done) => {
  gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' })
  gsap.fromTo(el.querySelectorAll('.menu-link, .consult-btn-overlay'),
    { yPercent: 100 },
    { yPercent: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out', delay: 0.1, onComplete: done }
  )
}

const onMenuLeave = (el, done) => {
  gsap.to(el.querySelectorAll('.menu-link, .consult-btn-overlay'), { yPercent: -100, duration: 0.4, stagger: 0.03, ease: 'power3.in' })
  gsap.to(el, { opacity: 0, duration: 0.4, ease: 'power2.in', delay: 0.15, onComplete: done })
}

onMounted(() => {
  // CHANGED: Check the universal site theme preference. Defaults to dark.
  const savedTheme = localStorage.getItem('webhive-theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    // 2. Ensuring fallback on first load is always dark mode
    isDarkMode.value = true
  }

  // Keep root context token up-to-date instantly on view mount
  applyGlobalThemeClass(isDarkMode.value)

  gsap.fromTo('.animate-title',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.2 }
  )

  gsap.fromTo('.animate-fade-in',
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.4 }
  )

  gsap.set('.culture-cta', { opacity: 1 })

  gsap.from('.culture-cta', {
    scrollTrigger: {
      trigger: '.culture-cta',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out'
  })

  setTimeout(() => ScrollTrigger.refresh(), 300)
})

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
  overflow-y: auto !important;
  overflow-x: hidden !important;
  height: auto !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

:global(html::-webkit-scrollbar) {
  display: none;
  width: 0;
  height: 0;
}

:global(body) {
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  height: auto !important;
  width: 100% !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

:global(body::-webkit-scrollbar) {
  display: none;
  width: 0;
  height: 0;
}

.hero-wrapper {
  --brand-accent: #00ffa3;
  --transition-speed: 0.5s;
  --space-sm: clamp(18px, 2.6vw, 36px);
  --space-md: clamp(22px, 3.6vw, 56px);
  --space-lg: clamp(32px, 5.5vw, 96px);

  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: system-ui, -apple-system, sans-serif;
  box-sizing: border-box;
  z-index: 1;
  overflow-x: hidden;
  transition: background-color var(--transition-speed), color var(--transition-speed);
}

.theme-dark {
  background-color: #000000;
  color: #ffffff;
}

.theme-light {
  --brand-accent: #f97316;
  background-color: #ffffff;
  color: #0f172a;
}

.bg-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.2;
  pointer-events: none;
  overflow: hidden;
}

.bg-grid-lines {
  position: absolute;
  inset: -40px;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  background-size: 40px 40px;
}

.theme-dark .bg-grid-lines {
  background-image:
    linear-gradient(to right, rgba(0, 255, 163, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 255, 163, 0.04) 1px, transparent 1px);
}

.theme-light .bg-grid-lines {
  background-image:
    linear-gradient(to right, rgba(15, 23, 42, 0.05) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(15, 23, 42, 0.05) 1px, transparent 1px);
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0;
  will-change: backdrop-filter;
  width: 100%;
  max-width: 100%;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px) saturate(180%);
  -webkit-backdrop-filter: blur(15px) saturate(180%);
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 0;
  padding: clamp(0.55rem, 1.4vw, 0.8rem) clamp(1rem, 2.6vw, 1.5rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
}

.theme-light .navbar {
  background: rgba(15, 23, 42, 0.03);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.logo {
  font-size: clamp(1.1rem, 2.4vw, 1.4rem);
  font-weight: 800;
  text-decoration: none;
  color: #ffffff;
  font-style: italic;
  letter-spacing: -0.04em;
  display: flex;
  align-items: center;
}

.theme-light .logo {
  color: #0f172a;
}

.logo .dot {
  color: var(--brand-accent);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: clamp(6px, 1.5vw, 20px);
  flex-shrink: 0;
}

.consult-btn {
  text-decoration: none;
  display: inline-block;
  background-color: var(--brand-accent);
  color: #0f172a;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 13px;
  padding: 10px 18px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;
  white-space: nowrap;
}

.consult-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 255, 163, 0.3);
}

.theme-light .consult-btn:hover {
  box-shadow: 0 4px 12px rgba(249, 115, 22, 0.3);
}

.consult-btn:active {
  transform: translateY(0);
}

.theme-toggle {
  width: 40px;
  height: 22px;
  border-radius: 9999px;
  padding: 3px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: #cbd5e1;
  transition: background-color 0.3s;
  flex-shrink: 0;
}

.theme-dark .theme-toggle {
  background-color: rgba(0, 255, 163, 0.1);
  border: 1px solid rgba(0, 255, 163, 0.2);
}

.toggle-thumb {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: #fbbf24;
}

.toggle-active {
  transform: translateX(18px);
  background-color: #111827;
  border: 1px solid var(--brand-accent);
}

.toggle-icon {
  font-size: 9px;
  user-select: none;
}

.menu-trigger {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  border: none;
  z-index: 55;
  transition: background-color 0.3s, border-color 0.3s;
  flex-shrink: 0;
}

.theme-dark .menu-trigger {
  background-color: rgba(24, 24, 27, 0.8);
  border: 1px solid #27272a;
}

.theme-light .menu-trigger {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
}

.burger-line {
  height: 1.5px;
  width: 15px;
  transition: transform 0.3s, opacity 0.3s, background-color 0.3s;
}

.theme-dark .burger-line {
  background-color: #ffffff;
}

.theme-light .burger-line {
  background-color: #0f172a;
}

.menu-active .line-top {
  transform: translateY(5px) rotate(45deg);
  background-color: var(--brand-accent) !important;
}

.menu-active .line-mid {
  opacity: 0;
}

.menu-active .line-bot {
  transform: translateY(-5px) rotate(-45deg);
  background-color: var(--brand-accent) !important;
}

.nav-overlay {
  position: fixed;
  inset: 0;
  z-index: 40;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  width: 100%;
  height: 100dvh;
  overflow: hidden !important;
  padding: clamp(24px, 5vh, 48px) clamp(20px, 6vw, 48px);
  padding-top: max(clamp(24px, 5vh, 48px), env(safe-area-inset-top));
  padding-bottom: max(clamp(24px, 5vh, 48px), env(safe-area-inset-bottom));
}

.theme-dark .nav-overlay {
  background-color: rgba(11, 12, 16, 0.96);
}

.theme-light .nav-overlay {
  background-color: rgba(255, 255, 255, 0.96);
}

.nav-links-container {
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 2.5vh, 24px);
  width: 100%;
  max-width: 800px;
}

.menu-item-wrap {
  overflow: hidden;
  display: flex;
  align-items: center;
}

.overlay-btn-item {
  margin-top: clamp(4px, 1vh, 12px);
}

.menu-index {
  font-family: monospace;
  font-size: clamp(12px, 1.5vw, 14px);
  color: var(--brand-accent);
  min-width: clamp(28px, 5vw, 42px);
  margin-right: clamp(12px, 3vw, 28px);
  letter-spacing: 0.15em;
  opacity: 0.7;
  flex-shrink: 0;
}

.menu-link {
  font-size: clamp(1.1rem, 3vw, 2.2rem);
  font-weight: 900;
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: color 0.3s, transform 0.3s;
  display: inline-block;
  line-height: 1.1;
  word-break: break-word;
}

.theme-dark .menu-link {
  color: #ffffff;
}

.theme-light .menu-link {
  color: #0f172a;
}

.menu-link:hover {
  color: var(--brand-accent);
}

.consult-btn-overlay {
  text-decoration: none;
  background-color: var(--brand-accent);
  color: #0f172a;
  border: none;
  border-radius: 5px;
  font-weight: 800;
  font-size: clamp(1rem, 3.5vw, 1.8rem);
  padding: clamp(8px, 1.5vw, 12px) clamp(20px, 4vw, 32px);
  cursor: pointer;
  display: inline-block;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  will-change: transform;
  white-space: nowrap;
}

.consult-btn-overlay:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 255, 163, 0.4);
}

.theme-light .consult-btn-overlay:hover {
  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.4);
}

@media (min-width: 1024px) {
  .nav-overlay {
    align-items: center;
    padding-left: clamp(80px, 10vw, 180px);
    justify-content: flex-start;
  }
}

@media (max-height: 500px) and (orientation: landscape) {
  .menu-link {
    font-size: clamp(1.2rem, 4.5vw, 2rem);
  }

  .nav-links-container {
    gap: clamp(4px, 1.2vh, 10px);
  }

  .menu-index {
    font-size: 11px;
  }

  .consult-btn-overlay {
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    padding: 6px clamp(14px, 2.5vw, 24px);
  }
}

.hero-main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 100vw;
  padding-inline: 0;
  margin: 0;
  box-sizing: border-box;
  gap: clamp(18px, 2.4vw, 24px);
  padding-top: clamp(96px, 15vh, 150px);
  padding-bottom: clamp(48px, 8vh, 90px);
  overflow-x: hidden;
}

.portfolio-hero {
  width: 100%;
  max-width: 100%;
  padding-inline: clamp(20px, 5vw, 60px);
  margin: clamp(20px, 3vh, 40px) auto clamp(40px, 6vw, 80px);
  text-align: center;
  position: relative;
  z-index: 5;
  box-sizing: border-box;
}

.section-tag {
  font-family: monospace;
  font-size: clamp(11px, 1.2vw, 13px);
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--brand-accent);
  display: inline-block;
  margin-bottom: clamp(16px, 2.4vh, 24px);
}

.theme-light .section-tag {
  font-weight: 600;
}

.portfolio-title {
  font-size: clamp(2.1rem, 6.5vw, 5rem);
  font-weight: 950;
  line-height: 1.15;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  margin-bottom: clamp(20px, 3vh, 28px);
  color: #ffffff;
}

.theme-light .portfolio-title {
  color: #0f172a;
}

.portfolio-subtitle {
  font-size: clamp(15px, 2vw, 19px);
  line-height: 1.7;
  max-width: 760px;
  margin: 0 auto clamp(28px, 4.4vh, 44px);
  color: rgba(255, 255, 255, 0.65);
}

.theme-light .portfolio-subtitle {
  color: #475569;
}

.cta-button-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(12px, 1.6vw, 20px);
  flex-wrap: wrap;
}

.btn-our-work {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: clamp(14px, 1.6vw, 18px) clamp(26px, 3vw, 38px);
  font-weight: 700;
  font-size: clamp(12.5px, 1vw, 14px);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  cursor: pointer;
  border-radius: 4px;
  transition: color 0.3s, border-color 0.3s, transform 0.2s;
}

.btn-our-work:hover {
  color: var(--brand-accent);
  border-color: var(--brand-accent);
  transform: translateY(-2px);
}

.theme-light .btn-our-work {
  background-color: #0f172a;
  border-color: rgba(15, 23, 42, 0.15);
}

.theme-light .btn-our-work:hover {
  color: var(--brand-accent);
  border-color: var(--brand-accent);
}

.full-width-section-group {
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.culture-cta {
  position: relative;
  width: 100%;
  max-width: 100%;
  margin: 0;
  text-align: center;
  padding: clamp(44px, 6vw, 80px) clamp(24px, 4vw, 40px);
  border-radius: 0;
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background-color: rgba(255, 255, 255, 0.01);
  overflow: hidden;
  box-sizing: border-box;
}

.theme-light .culture-cta {
  background-color: #ffffff;
  border-color: rgba(15, 23, 42, 0.06);
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.02);
}

.cta-glow {
  position: absolute;
  width: 400px;
  height: 400px;
  background-color: var(--brand-accent);
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(150px);
  opacity: 0.1;
  pointer-events: none;
}

.theme-light .cta-glow {
  opacity: 0.15;
  background-color: #fdba74;
}

.cta-title {
  font-size: clamp(1.7rem, 4vw, 3rem);
  font-weight: 900;
  letter-spacing: -0.01em;
  margin-bottom: 18px;
  position: relative;
  z-index: 1;
}

.highlight-text {
  background: linear-gradient(135deg, #ffffff 20%, var(--brand-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.theme-light .highlight-text {
  background: linear-gradient(135deg, #0f172a 40%, #f97316 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.cta-subtitle {
  font-size: clamp(14px, 1.6vw, 17px);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  max-width: 560px;
  margin: 0 auto 36px;
  position: relative;
  z-index: 1;
}

.theme-light .cta-subtitle {
  color: #475569;
}

.btn-start-project {
  position: relative;
  z-index: 1;
  text-decoration: none;
  display: inline-block;
  background-color: #ffffff;
  color: #0b0c10;
  border: 1px solid transparent;
  padding: clamp(14px, 1.6vw, 18px) clamp(26px, 3vw, 38px);
  font-weight: 700;
  font-size: clamp(12.5px, 1vw, 14px);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
}

.theme-light .btn-start-project {
  background-color: #f97316;
  color: #ffffff;
}

.btn-start-project:hover {
  background-color: var(--brand-accent);
  color: #0b0c10;
  transform: translateY(-2px);
}

.back-btn-row {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  margin-top: clamp(2rem, 4vw, 3rem);
  padding-inline: clamp(20px, 5vw, 60px);
}

.go-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  color: #0b0c10;
  border: 1px solid transparent;
  font-family: inherit;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
}

.theme-light .go-back-btn {
  background-color: #f97316;
  color: #ffffff;
}

.go-back-btn:hover {
  background-color: var(--brand-accent);
  color: #0b0c10;
  transform: translateY(-2px);
}

.go-back-arrow {
  transition: transform 0.2s ease;
}

.go-back-btn:hover .go-back-arrow {
  transform: translateX(-3px);
}

.animate-scroll-element {
  opacity: 0;
}

.footer-group {
  width: 100%;
  position: relative;
  z-index: 10;
  margin-top: auto;
}

.copyright-section {
  width: 100%;
  text-align: center;
  padding: 30px 20px;
  font-size: 11px;
  letter-spacing: 0.05em;
  border-top: 1px solid;
}

.theme-dark .copyright-section {
  color: rgba(255, 255, 255, 0.4);
  background-color: rgba(9, 9, 11, 0.6);
  border-top-color: rgba(255, 255, 255, 0.05);
}

.theme-light .copyright-section {
  color: rgba(15, 23, 42, 0.5);
  background-color: rgba(241, 245, 249, 0.6);
  border-top-color: rgba(15, 23, 42, 0.06);
}

.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(12px, 3vw, 24px);
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

.modal-scroll-inner {
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 255, 163, 0.2) transparent;
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

.modal-close-btn {
  position: fixed;
  top: clamp(12px, 2.5vw, 20px);
  right: clamp(14px, 3vw, 28px);
  z-index: 10000;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: clamp(7px, 1vw, 9px) clamp(14px, 2vw, 18px);
  background: #00ffa3;
  color: #000000;
  font-weight: 800;
  font-size: clamp(12px, 1vw, 13px);
  letter-spacing: 0.04em;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(0, 255, 163, 0.45);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.modal-close-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 255, 163, 0.6);
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

.modal-fade-enter-from {
  opacity: 0;
  transform: scale(0.97);
}

.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.97);
}

.chat-fab {
  position: fixed;
  bottom: clamp(16px, 4vw, 28px);
  right: clamp(16px, 4vw, 28px);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: var(--brand-accent);
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 950;
  box-shadow: 0 8px 24px rgba(0, 255, 163, 0.35);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.theme-light .chat-fab {
  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.35);
}

.chat-fab:hover {
  transform: translateY(-2px) scale(1.05);
}

.chat-fab:active {
  transform: scale(0.95);
}

.chat-popup {
  position: fixed;
  bottom: clamp(84px, 12vh, 100px);
  right: clamp(16px, 4vw, 28px);
  width: min(380px, calc(100vw - 32px));
  height: min(400px, calc(100dvh - 140px));
  z-index: 940;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.chat-popup-close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  font-size: 13px;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;
}

.chat-popup-close:hover {
  background: rgba(255, 255, 255, 0.2);
}

.chat-pop-enter-active,
.chat-pop-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.chat-pop-enter-from,
.chat-pop-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.96);
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .navbar {
    padding: 0.75rem 1.8rem;
  }

  .logo {
    font-size: 1.3rem;
  }

  .nav-actions {
    gap: 16px;
  }
}

@media (min-width: 1201px) {
  .navbar {
    padding: 0.85rem 2.2rem;
  }

  .logo {
    font-size: 1.45rem;
  }

  .nav-actions {
    gap: 22px;
  }

  .consult-btn {
    font-size: 14px;
    padding: 11px 20px;
  }

  .portfolio-title {
    font-size: clamp(2.6rem, 5.4vw, 5.4rem);
  }
}

@media (min-width: 1536px) {
  .navbar {
    padding: 1rem 2.6rem;
  }

  .logo {
    font-size: 1.6rem;
  }

  .nav-actions {
    gap: 26px;
  }

  .consult-btn {
    font-size: 15px;
    padding: 12px 24px;
  }

  .theme-toggle {
    width: 44px;
    height: 24px;
  }

  .toggle-thumb {
    width: 18px;
    height: 18px;
  }

  .toggle-active {
    transform: translateX(20px);
  }

  .menu-trigger {
    width: 38px;
    height: 38px;
  }

  .portfolio-title {
    font-size: clamp(3rem, 4.8vw, 6rem);
  }

  .portfolio-subtitle {
    max-width: 860px;
    font-size: 1.2rem;
  }

  .cta-title {
    font-size: clamp(2rem, 3vw, 3.4rem);
  }

  .cta-subtitle {
    max-width: 680px;
    font-size: 1.15rem;
  }

  .modal-card {
    max-width: 1300px;
  }
}

@media (min-width: 1921px) {
  .navbar {
    padding: 1.1rem 3.2rem;
  }

  .logo {
    font-size: 1.8rem;
  }

  .nav-actions {
    gap: 30px;
  }

  .consult-btn {
    font-size: 16px;
    padding: 13px 26px;
  }

  .portfolio-title {
    font-size: clamp(3.6rem, 4.4vw, 7rem);
    margin-bottom: 36px;
  }

  .portfolio-subtitle {
    max-width: 1000px;
    font-size: 1.35rem;
    line-height: 1.75;
  }

  .btn-our-work {
    font-size: 15px;
    padding: 20px 44px;
  }

  .culture-cta {
    padding: 96px 60px;
  }

  .cta-title {
    font-size: clamp(2.4rem, 2.6vw, 3.8rem);
  }

  .cta-subtitle {
    max-width: 760px;
    font-size: 1.25rem;
  }

  .btn-start-project {
    font-size: 15px;
    padding: 20px 44px;
  }

  .modal-card {
    max-width: 1600px;
    max-height: 84vh;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .navbar {
    padding: 0.7rem 1.6rem;
  }

  .logo {
    font-size: 1.25rem;
  }

  .nav-actions {
    gap: 14px;
  }

  .consult-btn {
    font-size: 12.5px;
    padding: 9px 16px;
  }

  .hero-main {
    padding-top: clamp(84px, 14vh, 116px);
    padding-bottom: clamp(40px, 7vh, 72px);
  }

  .portfolio-title {
    font-size: clamp(2rem, 5.6vw, 3.4rem);
  }

  .cta-button-group {
    gap: 14px;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .navbar {
    padding: 0.6rem 1.1rem;
  }

  .logo {
    font-size: 1.15rem;
  }

  .nav-actions {
    gap: clamp(8px, 2vw, 14px);
  }

  .consult-btn {
    font-size: 12px;
    padding: 8px 14px;
  }

  .hero-main {
    padding-top: clamp(78px, 15vh, 104px);
    padding-bottom: clamp(32px, 6vh, 56px);
  }

  .culture-cta {
    padding: clamp(36px, 7vw, 56px) clamp(20px, 5vw, 32px);
  }

  .portfolio-title {
    font-size: clamp(1.9rem, 7vw, 2.7rem);
  }

  .portfolio-subtitle {
    max-width: 90%;
  }

  .modal-card {
    max-height: 90vh;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.55rem 0.85rem;
  }

  .logo {
    font-size: 1.05rem;
  }

  .nav-actions {
    gap: 8px;
  }

  .consult-btn {
    display: none;
  }

  .theme-toggle {
    width: 34px;
    height: 18px;
    padding: 2px;
  }

  .toggle-thumb {
    width: 13px;
    height: 13px;
  }

  .toggle-active {
    transform: translateX(15px);
  }

  .menu-trigger {
    width: 30px;
    height: 30px;
    gap: 3px;
  }

  .hero-main {
    padding-top: clamp(74px, 15vh, 96px);
    padding-bottom: clamp(28px, 5vh, 44px);
    gap: 16px;
  }

  .portfolio-hero {
    margin-bottom: clamp(32px, 9vw, 48px);
    padding-inline: 16px;
  }

  .portfolio-title {
    font-size: clamp(1.5rem, 8vw, 2rem);
    margin-bottom: 16px;
  }

  .portfolio-subtitle {
    font-size: 0.95rem;
    max-width: 100%;
  }

  .cta-button-group {
    flex-direction: column;
    align-items: stretch;
    width: 100%;
  }

  .btn-our-work {
    width: 100%;
    text-align: center;
  }

  .culture-cta {
    padding: 32px 20px;
  }

  .cta-title {
    font-size: clamp(1.4rem, 7.5vw, 1.9rem);
  }

  .cta-subtitle {
    max-width: 100%;
  }

  .btn-start-project {
    width: 100%;
    text-align: center;
  }

  .back-btn-row {
    margin-top: 2rem;
    padding-inline: 16px;
  }

  .go-back-btn {
    width: 100%;
    justify-content: center;
    text-align: center;
  }

  .modal-backdrop {
    padding: 10px;
  }

  .modal-card {
    border-radius: 16px;
    max-height: 92vh;
  }

  .modal-close-btn {
    top: 10px;
    right: 10px;
  }

  .chat-popup {
    left: 16px;
    right: 16px;
    width: auto;
  }
}

@media (max-width: 360px) {
  .navbar {
    padding: 0.5rem 0.7rem;
  }

  .logo {
    font-size: 1rem;
  }

  .cta-title {
    font-size: clamp(1.3rem, 8vw, 1.7rem);
  }

  .portfolio-title {
    font-size: clamp(1.3rem, 8.5vw, 1.75rem);
  }
}
</style>