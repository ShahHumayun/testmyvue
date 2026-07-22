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
        <router-link to="/consultation" class="consult-btn">
          Consultation
        </router-link>

        <button @click="toggleTheme" class="theme-toggle" aria-label="Toggle Theme">
          <div class="toggle-thumb" :class="{ 'toggle-active': isDarkMode }">
            <span class="toggle-icon">{{ isDarkMode ? '🌙' : '☀️' }}</span>
          </div>
        </button>

        <button @click="toggleMenu" class="menu-trigger" :class="{ 'menu-active': isMenuOpen }">
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
            <router-link to="/consultation" class="consult-btn-overlay" @click="toggleMenu">
              Consultation
            </router-link>
          </div>
        </nav>
      </div>
    </Transition>

    <main class="hero-main">
      <div class="hero-intro-viewport">
        <div class="ambient-glow-hero"
          :style="{ transform: `translate(${parallax.headingX * 1.5}px, ${parallax.headingY * 1.5}px)` }"></div>

        <canvas ref="networkCanvas" class="network-canvas" aria-hidden="true"></canvas>

        <div class="hero-content-left" ref="heroContentRef"
          :style="{ transform: `translate(${parallax.headingX * 0.6}px, ${parallax.headingY * 0.6}px)` }">
          <div class="hero-eyebrow">
            <span>Headless CMS</span>
            <span class="eyebrow-sep">·</span>
            <span>Next.js</span>
            <span class="eyebrow-sep">·</span>
            <span>Senior-led</span>
          </div>

          <h1 class="main-title">
            <span class="title-line">Content systems that scale.</span>
            <span class="title-accent">Shipped on Next.js.</span>
          </h1>

          <p class="hero-subtitle">
            Headless CMS and Next.js for marketing teams that need to ship without waiting on developers. Strapi,
            Contentful, Sanity, Builder.io, Shopify, and WordPress — built for speed, SEO, and editorial teams.
          </p>

          <div class="hero-cta-group">
            <router-link to="/free-estimate" class="hero-btn hero-btn-primary">
              Get a Free Estimate
            </router-link>
            <router-link to="/headless-cms-implementation" class="hero-btn hero-btn-secondary">
              Headless CMS Implementation
            </router-link>
          </div>
        </div>
      </div>

      <TrustSection class="home-trust-layout" :darkMode="isDarkMode" />

      <CompaniesTrustSection class="home-company-trust-layout" :darkMode="isDarkMode" />

      <HomeComponent1 class="home-services-layout" :darkMode="isDarkMode" />

      <WhyWebhive class="home-why-webhive-layout" :darkMode="isDarkMode" />

      <HomeServicesSection class="home-services-section-layout" :darkMode="isDarkMode" />

      <HowWeWork class="home-how-we-work-layout" :darkMode="isDarkMode" />

      <TechnologySection class="home-technology-layout" :darkMode="isDarkMode" />

      <ProofOfWork class="home-proof-of-work-layout" :darkMode="isDarkMode" />

      <Reviews class="home-reviews-layout" :darkMode="isDarkMode" />

      <Insights class="home-insights-layout" :darkMode="isDarkMode" />

      <HomeCtaSection class="home-cta-layout" :darkMode="isDarkMode" />

    </main>

    <Footer :darkMode="isDarkMode" />

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
import { ref, reactive, onMounted, onUnmounted, provide } from 'vue'
import gsap from 'gsap'
import TrustSection from '../components/HomeComponents/TrustSection.vue'
import CompaniesTrustSection from '../components/HomeComponents/CompaniesTrustSection.vue'
import HomeComponent1 from '../components/HomeComponent1.vue'
import WhyWebhive from '../components/WhyWebhive.vue'
import HomeServicesSection from '../components/HomeComponents/HomeServicesSection.vue'
import HowWeWork from '../components/HomeComponents/HowWeWork.vue'
import TechnologySection from '../components/HomeComponents/TechnologySection.vue'
import ProofOfWork from '../components/HomeComponents/ProofOfWork.vue'
import Insights from '../components/HomeComponents/Insights.vue'
import Reviews from '../components/HomeComponents/Reviews.vue'
import HomeCtaSection from '../components/HomeComponents/HomeCtaSection.vue'
import Footer from '../components/footer.vue'
import ChatBot from '../components/ChatBot.vue'

const isChatOpen = ref(false)

// Set default theme state to true (Pure Black/Dark mode by default)
const isDarkMode = ref(true)
const isMenuOpen = ref(false)
const isScrolled = ref(false)

// Provided so components using inject('isDarkMode', ...) — like TrustSection —
// receive the real reactive theme state instead of falling back to their default
provide('isDarkMode', isDarkMode)

const menuItems = ['About', 'Services', 'Portfolio', 'Culture', 'Studio', 'Policies']
const currentYear = new Date().getFullYear()

const parallax = reactive({
  headingX: 0,
  headingY: 0,
  bgX: 0,
  bgY: 0
})

// --- Neuron / molecule style network animation (canvas + GSAP ticker) ---
const networkCanvas = ref(null)
const heroContentRef = ref(null)

let ctx = null
let nodes = []
let canvasWidth = 0
let canvasHeight = 0
let dpr = 1
let networkTicker = null

const NODE_COUNT = 42
const LINK_DISTANCE = 130

const getAccentRgb = () => {
  const el = networkCanvas.value || document.documentElement
  const hex = getComputedStyle(el).getPropertyValue('--brand-accent').trim() || '#00ffa3'
  const clean = hex.replace('#', '')
  const bigint = parseInt(clean, 16)
  return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 }
}

const resizeCanvas = () => {
  if (!networkCanvas.value) return
  const parent = networkCanvas.value.parentElement
  dpr = window.devicePixelRatio || 1
  canvasWidth = parent.clientWidth
  canvasHeight = parent.clientHeight
  networkCanvas.value.width = canvasWidth * dpr
  networkCanvas.value.height = canvasHeight * dpr
  networkCanvas.value.style.width = canvasWidth + 'px'
  networkCanvas.value.style.height = canvasHeight + 'px'
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

const createNodes = () => {
  nodes = Array.from({ length: NODE_COUNT }, () => ({
    x: Math.random() * canvasWidth,
    y: Math.random() * canvasHeight,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.4 + 1.4
  }))
}

const drawNetwork = () => {
  if (!ctx || canvasWidth === 0) return
  ctx.clearRect(0, 0, canvasWidth, canvasHeight)
  const { r, g, b } = getAccentRgb()

  nodes.forEach((node) => {
    node.x += node.vx
    node.y += node.vy
    if (node.x < 0 || node.x > canvasWidth) node.vx *= -1
    if (node.y < 0 || node.y > canvasHeight) node.vy *= -1
  })

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const dx = nodes[i].x - nodes[j].x
      const dy = nodes[i].y - nodes[j].y
      const dist = Math.sqrt(dx * dx + dy * dy)
      if (dist < LINK_DISTANCE) {
        const opacity = (1 - dist / LINK_DISTANCE) * 0.35
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(nodes[i].x, nodes[i].y)
        ctx.lineTo(nodes[j].x, nodes[j].y)
        ctx.stroke()
      }
    }
  }

  nodes.forEach((node) => {
    ctx.beginPath()
    ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.85)`
    ctx.fill()
  })
}

const initNetworkAnimation = () => {
  if (!networkCanvas.value) return
  ctx = networkCanvas.value.getContext('2d')
  resizeCanvas()
  createNodes()
  networkTicker = () => drawNetwork()
  gsap.ticker.add(networkTicker)
}

const handleNetworkResize = () => {
  resizeCanvas()
  createNodes()
}
// --- end network animation ---

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

// CHANGED: Saved under a unified local storage key and updates root HTML element classes
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  const activeTheme = isDarkMode.value ? 'dark' : 'light'

  localStorage.setItem('webhive-theme', activeTheme)
  applyGlobalThemeClass(isDarkMode.value)
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window

  const xWeight = (clientX / innerWidth) - 0.5
  const yWeight = (clientY / innerHeight) - 0.5

  parallax.bgX = xWeight * -20
  parallax.bgY = yWeight * -20

  parallax.headingX = xWeight * 15
  parallax.headingY = yWeight * 15
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('resize', handleNetworkResize)

  // CHANGED: Check the universal site theme preference. Defaults to dark.
  const savedTheme = localStorage.getItem('webhive-theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    isDarkMode.value = true
  }

  // Keep root context token up-to-date
  applyGlobalThemeClass(isDarkMode.value)

  initNetworkAnimation()

  if (heroContentRef.value) {
    gsap.fromTo(
      heroContentRef.value,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.15 }
    )
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleNetworkResize)
  if (networkTicker) gsap.ticker.remove(networkTicker)
})

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
</script>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
  overflow-y: auto !important;
  height: auto !important;
}

:global(body) {
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  height: auto !important;
  width: 100% !important;
}

.hero-wrapper {
  --brand-accent: #00ffa3;
  --transition-speed: 0.5s;
  position: relative;
  width: 100%;
  min-height: 100vh;
  font-family: system-ui, -apple-system, sans-serif;
  transition: background-color var(--transition-speed), color var(--transition-speed);
  overflow-x: hidden;
}

/* CHANGED: Made dark mode default background pitch pure black */
.theme-dark {
  background-color: #000000;
  color: #ffffff;
}

/* CHANGED: light theme now overrides --brand-accent to vibrant orange and uses a solid white background */
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
  top: 16px;
  left: 50%;
  transform: translateX(-50%) translateZ(0);
  will-change: transform, backdrop-filter;
  width: 92%;
  max-width: 1200px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px) saturate(180%);
  -webkit-backdrop-filter: blur(15px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 0.8rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
}

.theme-light .navbar {
  background: rgba(15, 23, 42, 0.03);
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

.logo {
  font-size: 1.4rem;
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

@media (max-width: 480px) {
  .consult-btn {
    display: none;
  }
}

.consult-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 255, 163, 0.3);
}

/* CHANGED: orange hover glow for light theme */
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

@media (max-width: 480px) {
  .theme-toggle {
    width: 34px;
    height: 18px;
    padding: 2px;
  }
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

@media (max-width: 480px) {
  .toggle-thumb {
    width: 13px;
    height: 13px;
  }

  .toggle-active {
    transform: translateX(15px);
  }
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

@media (max-width: 480px) {
  .menu-trigger {
    width: 30px;
    height: 30px;
    gap: 3px;
  }
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

/* CHANGED: orange hover glow for light theme */
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 10;
}

.hero-intro-viewport {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  position: relative;
  padding: clamp(100px, 16vh, 160px) clamp(20px, 6vw, 80px) clamp(60px, 10vh, 100px);
  overflow: hidden;
  box-sizing: border-box;
}

.ambient-glow-hero {
  position: absolute;
  width: min(550px, 80vw);
  height: min(550px, 80vw);
  border-radius: 50%;
  filter: blur(140px);
  mix-blend-mode: screen;
  pointer-events: none;
  opacity: 0.12;
}

.theme-dark .ambient-glow-hero {
  background-color: var(--brand-accent);
}

/* CHANGED: glow removed entirely in light theme for a clean solid white background */
.theme-light .ambient-glow-hero {
  display: none;
}

/* Neuron / molecule style connected-dots background animation */
.network-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.hero-content-left {
  position: relative;
  z-index: 2;
  max-width: 720px;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-family: monospace;
  font-size: clamp(13px, 2vw, 16px);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 600;
  margin-top: clamp(10px, 2.5vh, 24px);
  margin-bottom: clamp(16px, 2.5vh, 24px);
  color: var(--brand-accent);
}

.eyebrow-sep {
  opacity: 0.5;
}

.main-title {
  font-size: clamp(1.05rem, 5.15vw, 4.9rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  line-height: 1.15;
  text-transform: none;
  margin-bottom: clamp(20px, 3vh, 28px);
}

.theme-dark .main-title {
  color: #ffffff;
}

.theme-light .main-title {
  color: #0f172a;
}

.title-line {
  display: block;
  white-space: nowrap;
}

.title-accent {
  display: block;
  color: var(--brand-accent);
  white-space: nowrap;
}

.hero-subtitle {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: clamp(1.05rem, 2vw, 1.35rem);
  line-height: 1.65;
  max-width: 640px;
  text-transform: none;
  letter-spacing: normal;
}

.theme-dark .hero-subtitle {
  color: rgba(255, 255, 255, 0.85);
}

.theme-light .hero-subtitle {
  color: rgba(15, 23, 42, 0.82);
}

.hero-cta-group {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: clamp(12px, 2vw, 16px);
  margin-top: clamp(28px, 4vh, 40px);
}

.hero-btn {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 700;
  font-size: clamp(13px, 1.4vw, 15px);
  padding: clamp(12px, 1.6vw, 15px) clamp(20px, 2.6vw, 28px);
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.hero-btn-primary {
  background-color: var(--brand-accent);
  color: #0f172a;
  border: 1px solid var(--brand-accent);
}

.hero-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 255, 163, 0.3);
}

.theme-light .hero-btn-primary:hover {
  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.3);
}

.hero-btn-primary:active {
  transform: translateY(0);
}

.hero-btn-secondary {
  background-color: transparent;
  border: 1px solid;
}

.theme-dark .hero-btn-secondary {
  color: #ffffff;
  border-color: rgba(255, 255, 255, 0.25);
}

.theme-light .hero-btn-secondary {
  color: #0f172a;
  border-color: rgba(15, 23, 42, 0.2);
}

.hero-btn-secondary:hover {
  border-color: var(--brand-accent);
  color: var(--brand-accent);
  transform: translateY(-2px);
}

.hero-btn-secondary:active {
  transform: translateY(0);
}

@media (max-width: 480px) {
  .hero-cta-group {
    flex-direction: column;
    align-items: stretch;
  }

  .hero-btn {
    white-space: normal;
    text-align: center;
  }
}

.home-trust-layout {
  margin-top: clamp(60px, 10vh, 120px);
  width: 100%;
  max-width: 1400px;
  padding-left: clamp(16px, 4vw, 40px);
  padding-right: clamp(16px, 4vw, 40px);
}

.home-company-trust-layout {
  margin-top: clamp(60px, 10vh, 120px);
  width: 100%;
  max-width: 1400px;
  padding-left: clamp(16px, 4vw, 40px);
  padding-right: clamp(16px, 4vw, 40px);
}

.home-services-layout {
  margin-top: clamp(60px, 10vh, 120px);
  width: 100%;
  max-width: 1400px;
  padding-left: clamp(16px, 4vw, 40px);
  padding-right: clamp(16px, 4vw, 40px);
}

.home-why-webhive-layout {
  margin-top: clamp(80px, 12vh, 160px);
  padding-bottom: clamp(100px, 15vh, 200px);
  width: 100%;
  max-width: 1400px;
  padding-left: clamp(16px, 4vw, 40px);
  padding-right: clamp(16px, 4vw, 40px);
}

.home-services-section-layout {
  margin-top: clamp(60px, 10vh, 120px);
  width: 100%;
  max-width: 1400px;
  padding-left: clamp(16px, 4vw, 40px);
  padding-right: clamp(16px, 4vw, 40px);
}

.home-how-we-work-layout {
  margin-top: clamp(60px, 10vh, 120px);
  width: 100%;
  max-width: 1400px;
  padding-left: clamp(16px, 4vw, 40px);
  padding-right: clamp(16px, 4vw, 40px);
}

.home-technology-layout {
  margin-top: clamp(60px, 10vh, 120px);
  width: 100%;
  max-width: 1400px;
  padding-left: clamp(16px, 4vw, 40px);
  padding-right: clamp(16px, 4vw, 40px);
}

.home-proof-of-work-layout {
  margin-top: clamp(60px, 10vh, 120px);
  width: 100%;
  max-width: 1400px;
  padding-left: clamp(16px, 4vw, 40px);
  padding-right: clamp(16px, 4vw, 40px);
}

.home-reviews-layout {
  margin-top: clamp(60px, 10vh, 120px);
  width: 100%;
  max-width: 1400px;
  padding-left: clamp(16px, 4vw, 40px);
  padding-right: clamp(16px, 4vw, 40px);
}

.home-insights-layout {
  margin-top: clamp(60px, 10vh, 120px);
  width: 100%;
  max-width: 1400px;
  padding-left: clamp(16px, 4vw, 40px);
  padding-right: clamp(16px, 4vw, 40px);
}

.home-cta-layout {
  margin-top: clamp(60px, 10vh, 120px);
  padding-bottom: clamp(100px, 15vh, 200px);
  width: 100%;
  max-width: 1400px;
  padding-left: clamp(16px, 4vw, 40px);
  padding-right: clamp(16px, 4vw, 40px);
}

.copyright-section {
  width: 100%;
  text-align: center;
  padding: 30px 20px;
  font-size: 11px;
  letter-spacing: 0.05em;
  border-top: 1px solid;
  transition: color var(--transition-speed);
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

/* CHANGED: light-theme chat button glow now vibrant orange (background already inherits --brand-accent) */
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

@media (max-width: 480px) {
  .chat-popup {
    left: 16px;
    right: 16px;
    width: auto;
  }
}
</style>