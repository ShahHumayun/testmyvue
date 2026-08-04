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

        <!-- Side carousel arrows: pinned left/right of the carousel, vertically
             centered. Autoplay is untouched — these just call the same
             prevSlide/nextSlide handlers and reset the same timer. -->
        <button class="carousel-side-arrow carousel-side-arrow-left" @click="prevSlide" aria-label="Previous slide">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.25" width="20" height="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button class="carousel-side-arrow carousel-side-arrow-right" @click="nextSlide" aria-label="Next slide">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2.25" width="20" height="20">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div class="hero-content-left" ref="heroContentRef"
          :style="{ transform: `translate(${parallax.headingX * 0.6}px, ${parallax.headingY * 0.6}px)` }"
          @mouseenter="handleHeroMouseEnter" @mouseleave="handleHeroMouseLeave">

          <Transition mode="out-in" :css="false" @enter="onSlideEnter" @leave="onSlideLeave">
            <div class="hero-slide" :key="activeSlide">
              <div class="hero-eyebrow">
                <template v-for="(tag, i) in slides[activeSlide].eyebrow" :key="tag">
                  <span>{{ tag }}</span>
                  <span v-if="i < slides[activeSlide].eyebrow.length - 1" class="eyebrow-sep">·</span>
                </template>
              </div>

              <h1 class="main-title">
                <span class="title-line">{{ slides[activeSlide].titleLine }}</span>
                <span class="title-accent">{{ slides[activeSlide].titleAccent }}</span>
              </h1>

              <p class="hero-subtitle">
                {{ slides[activeSlide].subtitle }}
              </p>

              <div class="hero-cta-group">
                <router-link :to="slides[activeSlide].primaryLink" class="hero-btn hero-btn-primary">
                  {{ slides[activeSlide].primaryText }}
                </router-link>
                <router-link :to="slides[activeSlide].secondaryLink" class="hero-btn hero-btn-secondary">
                  {{ slides[activeSlide].secondaryText }}
                </router-link>
              </div>
            </div>
          </Transition>
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

// --- Hero carousel: rotates through core service pitches (top section only) ---
// Links below match your actual routes.js paths exactly:
// /consultation, /webappdevelopment, /appdevelopment,
// /ecommercesolutions, /netsuiteintegrations.
// Shopify has no route registered yet, so its secondaryLink is left
// pointing at a path that isn't in routes.js on purpose — wire it up
// once ShopifyDevelopment.vue exists and is added to routes.js.
const slides = [
  {
    eyebrow: ['Magento', 'E-commerce', 'Senior-led'],
    titleLine: 'Magento stores built to convert.',
    titleAccent: 'Engineered for scale.',
    subtitle: 'Custom Magento development for merchants who\'ve outgrown templates — from theme builds and performance tuning to full platform migrations that keep checkout fast under real traffic.',
    primaryText: 'Get a Consultation',
    primaryLink: '/consultation',
    secondaryText: 'Magento Development',
    secondaryLink: '/ecommercesolutions'
  },
  {
    eyebrow: ['NetSuite', 'ERP', 'Integrations'],
    titleLine: 'Systems that talk to each other.',
    titleAccent: 'NetSuite, integrated right.',
    subtitle: 'Custom NetSuite integrations and automations that connect your storefront, ERP, and internal tools — no more manual data entry, no more disconnected spreadsheets.',
    primaryText: 'Get a Consultation',
    primaryLink: '/consultation',
    secondaryText: 'Netsuite Integration',
    secondaryLink: '/netsuiteintegrations'
  },
  {
    eyebrow: ['Next.js', 'React', 'Senior-led'],
    titleLine: 'Web apps built on Next.js.',
    titleAccent: 'Fast, scalable, SEO-ready.',
    subtitle: 'Next.js builds for teams that need speed without sacrificing flexibility — server-side rendering, clean architecture, and performance budgets that hold up at scale.',
    primaryText: 'Get a Consultation',
    primaryLink: '/consultation',
    secondaryText: 'Web App Development',
    secondaryLink: '/webappdevelopment'
  },
  {
    eyebrow: ['iOS', 'Android', 'Senior-led'],
    titleLine: 'Mobile apps built to perform.',
    titleAccent: 'Native feel, cross-platform reach.',
    subtitle: 'Custom iOS and Android app development — from product strategy and UI/UX to launch and post-launch support, built by a senior team that ships apps people actually keep.',
    primaryText: 'Get a Consultation',
    primaryLink: '/consultation',
    secondaryText: 'App Development',
    secondaryLink: '/appdevelopment'
  },
  {
    eyebrow: ['Shopify', 'Shopify Plus', 'Custom Storefronts'],
    titleLine: 'Shopify storefronts that sell.',
    titleAccent: 'Built to grow with you.',
    subtitle: 'Shopify and Shopify Plus storefronts engineered for conversion — custom themes, app integrations, and migrations handled end to end by a senior team.',
    primaryText: 'Get a Consultation',
    primaryLink: '/consultation',
    secondaryText: 'Shopify Development',
    secondaryLink: '/shopify-development'
  }
]

const activeSlide = ref(0)
const slideDirection = ref(1) // 1 = moving forward (next), -1 = moving backward (prev)
const isPaused = ref(false)
let autoplayTimer = null
const AUTOPLAY_DELAY = 4000

const goToSlide = (index) => {
  if (index === activeSlide.value) return
  slideDirection.value = index > activeSlide.value ? 1 : -1
  activeSlide.value = index
  startAutoplay()
}

const nextSlide = () => {
  slideDirection.value = 1
  activeSlide.value = (activeSlide.value + 1) % slides.length
  startAutoplay()
}

const prevSlide = () => {
  slideDirection.value = -1
  activeSlide.value = (activeSlide.value - 1 + slides.length) % slides.length
  startAutoplay()
}

const startAutoplay = () => {
  stopAutoplay()
  autoplayTimer = setInterval(() => {
    slideDirection.value = 1
    activeSlide.value = (activeSlide.value + 1) % slides.length
  }, AUTOPLAY_DELAY)
}

const stopAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

// Hover over the hero content pauses autoplay (both the JS timer and the
// dot progress-fill animation, which is driven off the same isPaused flag)
const handleHeroMouseEnter = () => {
  isPaused.value = true
  stopAutoplay()
}

const handleHeroMouseLeave = () => {
  isPaused.value = false
  startAutoplay()
}

const onSlideEnter = (el, done) => {
  gsap.fromTo(
    el,
    { opacity: 0, x: slideDirection.value * 36 },
    { opacity: 1, x: 0, duration: 0.55, ease: 'power3.out', onComplete: done }
  )
}

const onSlideLeave = (el, done) => {
  gsap.to(el, {
    opacity: 0,
    x: slideDirection.value * -36,
    duration: 0.35,
    ease: 'power3.in',
    onComplete: done
  })
}
// --- end hero carousel ---

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
  startAutoplay()

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
  stopAutoplay()
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
  overflow-x: hidden !important;
  height: auto !important;
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE / legacy Edge */
}

:global(html::-webkit-scrollbar) {
  display: none;
  /* Chrome / Safari / Chromium Edge */
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
  /* Shared vertical rhythm for the hero and every section below it.
     Tightened across the board (was 56/88/128 max) so sections sit closer
     together on every screen size, per CEO feedback on excess top/bottom
     whitespace. Still vw-based with tight px ceilings so it scales
     smoothly rather than jumping at breakpoints. */
  --space-sm: clamp(18px, 2.6vw, 36px);
  --space-md: clamp(22px, 3.6vw, 56px);
  --space-lg: clamp(28px, 5vw, 84px);
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

/* =========================================================
   NAVBAR — fluid base (clamp handles most scaling in between
   breakpoints); explicit tier overrides further down.
   ========================================================= */
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

/* =========================================================
   HERO / CAROUSEL — top & bottom padding and min-height cut
   down at every tier so the carousel hugs its content instead
   of leaving large empty margins (CEO feedback).
   Text sizes bumped up across all tiers, with the largest
   increases from tablet through 4K (1201px–2560px+), per
   request.
   ========================================================= */
.hero-intro-viewport {
  width: 100%;
  min-height: clamp(460px, 66vh, 680px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  margin-top: 2%;
  padding: clamp(76px, 6.5vh, 104px) clamp(64px, 9vw, 120px) clamp(20px, 3vh, 36px);
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

/* Carousel side arrows — pinned to the left/right edges of the carousel,
   vertically centered, frosted-glass circles matching the navbar treatment. */
.carousel-side-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  z-index: 5;
  backdrop-filter: blur(15px) saturate(180%);
  -webkit-backdrop-filter: blur(15px) saturate(180%);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease;
}

.theme-dark .carousel-side-arrow {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.75);
}

.theme-light .carousel-side-arrow {
  background: rgba(15, 23, 42, 0.03);
  border: 1px solid rgba(15, 23, 42, 0.08);
  color: rgba(15, 23, 42, 0.7);
}

.carousel-side-arrow:hover {
  background-color: var(--brand-accent);
  color: #0f172a;
  transform: translateY(-50%) scale(1.08);
}

.carousel-side-arrow:active {
  transform: translateY(-50%) scale(0.94);
}

.carousel-side-arrow-left {
  left: clamp(14px, 3vw, 32px);
}

.carousel-side-arrow-right {
  right: clamp(14px, 3vw, 32px);
}

.hero-content-left {
  position: relative;
  z-index: 2;
  max-width: 720px;
  width: 100%;
  min-height: clamp(220px, 28vh, 320px);
  margin: clamp(16px, 2.4vh, 36px) auto 0;
  text-align: center;
}

.hero-slide {
  width: 100%;
}

.hero-eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 8px;
  font-family: monospace;
  font-size: clamp(14px, 2.1vw, 18px);
  text-transform: uppercase;
  letter-spacing: 0.18em;
  font-weight: 600;
  margin-top: clamp(8px, 2vh, 20px);
  margin-bottom: clamp(14px, 2vh, 20px);
  color: var(--brand-accent);
}

.eyebrow-sep {
  opacity: 0.5;
}

.main-title {
  font-size: clamp(1.1rem, 5.3vw, 5.2rem);
  font-weight: 900;
  letter-spacing: 0.01em;
  line-height: 1.15;
  text-transform: none;
  margin-bottom: clamp(16px, 2.4vh, 28px);
  max-width: 100%;
}

.theme-dark .main-title {
  color: #ffffff;
}

.theme-light .main-title {
  color: #0f172a;
}

.title-line,
.title-accent {
  display: block;
  white-space: nowrap;
  text-align: center;
}

.title-accent {
  color: var(--brand-accent);
}

.hero-subtitle {
  font-family: system-ui, -apple-system, sans-serif;
  font-size: clamp(1rem, 1.7vw, 1.45rem);
  line-height: 1.65;
  max-width: 640px;
  margin: 0 auto;
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
  justify-content: center;
  gap: clamp(8px, 1.2vw, 12px);
  margin-top: clamp(22px, 3vh, 36px);
}

.hero-btn {
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 700;
  font-size: clamp(14px, 1.5vw, 16px);
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

/* =========================================================
   HOME SECTIONS — Full width configuration across all breakpoints
   ========================================================= */
.home-trust-layout,
.home-company-trust-layout,
.home-services-layout,
.home-services-section-layout,
.home-how-we-work-layout,
.home-technology-layout,
.home-proof-of-work-layout,
.home-reviews-layout,
.home-insights-layout {
  margin-top: var(--space-md);
  width: 100% !important;
  max-width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  box-sizing: border-box;
}

.home-why-webhive-layout {
  margin-top: var(--space-lg);
  padding-bottom: var(--space-lg);
  width: 100% !important;
  max-width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  box-sizing: border-box;
}

.home-cta-layout {
  margin-top: var(--space-md);
  padding-bottom: var(--space-lg);
  width: 100% !important;
  max-width: 100% !important;
  padding-left: 0 !important;
  padding-right: 0 !important;
  box-sizing: border-box;
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

/* =========================================================================
   BREAKPOINT TIERS
   Organized by the exact ranges requested, desktop-first (max-width
   cascades down).
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .hero-content-left {
    max-width: 760px;
    margin-top: clamp(18px, 2.2vh, 32px);
  }

  .main-title {
    font-size: clamp(2.3rem, 3.2vw, 2.9rem);
  }

  .hero-subtitle {
    max-width: 600px;
    font-size: clamp(1.1rem, 1.4vw, 1.3rem);
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
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

  .hero-intro-viewport {
    min-height: min(64vh, 720px);
  }

  .hero-content-left {
    max-width: 900px;
    margin-top: clamp(22px, 2.6vh, 36px);
  }

  .main-title {
    font-size: clamp(2.7rem, 3vw, 3.4rem);
  }

  .hero-subtitle {
    max-width: 680px;
    font-size: clamp(1.15rem, 1.3vw, 1.4rem);
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

  .hero-intro-viewport {
    padding-left: clamp(96px, 8vw, 160px);
    padding-right: clamp(96px, 8vw, 160px);
    min-height: min(60vh, 760px);
  }

  .hero-content-left {
    max-width: 1220px;
    margin-top: clamp(20px, 2.6vh, 40px);
  }

  .main-title {
    font-size: clamp(3rem, 3.3vw, 3.9rem);
  }

  .hero-subtitle {
    max-width: 760px;
    font-size: clamp(1.3rem, 1.3vw, 1.6rem);
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up (e.g. 2560px) ---------- */
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

  .hero-intro-viewport {
    padding-left: clamp(140px, 9vw, 260px);
    padding-right: clamp(140px, 9vw, 260px);
    min-height: min(56vh, 860px);
  }

  .hero-content-left {
    max-width: 1560px;
    margin-top: clamp(28px, 3vh, 56px);
  }

  .hero-eyebrow {
    font-size: 22px;
  }

  .main-title {
    font-size: clamp(3.6rem, 2.9vw, 5rem);
    margin-bottom: 36px;
  }

  .hero-subtitle {
    max-width: 860px;
    font-size: 1.65rem;
    line-height: 1.7;
  }

  .hero-btn {
    font-size: 19px;
    padding: 18px 34px;
  }

  .carousel-side-arrow {
    width: 54px;
    height: 54px;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
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

  .hero-intro-viewport {
    min-height: clamp(420px, 70svh, 600px);
    padding: clamp(88px, 11vh, 112px) clamp(40px, 6vw, 80px) clamp(18px, 3vh, 32px);
  }

  .hero-content-left {
    min-height: clamp(200px, 26vh, 300px);
    max-width: 640px;
  }

  .main-title {
    font-size: clamp(1.8rem, 4.2vw, 2.3rem);
  }

  .hero-subtitle {
    max-width: 520px;
    font-size: clamp(1.05rem, 1.7vw, 1.25rem);
  }

  .carousel-side-arrow {
    display: none;
  }

  .nav-overlay {
    align-items: center;
    padding-left: clamp(60px, 8vw, 120px);
    justify-content: flex-start;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
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

  .hero-intro-viewport {
    min-height: clamp(400px, 74svh, 560px);
    padding: clamp(84px, 13vh, 104px) clamp(24px, 6vw, 56px) clamp(16px, 3vh, 28px);
  }

  .hero-content-left {
    min-height: clamp(190px, 30vh, 280px);
    max-width: 90%;
  }

  .hero-subtitle {
    max-width: 90%;
  }

  .hero-cta-group {
    flex-wrap: wrap;
  }

  .carousel-side-arrow {
    display: none;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
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

  .hero-intro-viewport {
    min-height: clamp(360px, 76svh, 500px);
    padding: clamp(78px, 14vh, 96px) 20px clamp(14px, 3vh, 22px);
  }

  .hero-content-left {
    min-height: clamp(180px, 34vh, 260px);
  }

  .hero-eyebrow {
    margin-top: 6px;
    margin-bottom: 12px;
    font-size: 12px;
    gap: 6px;
  }

  .main-title {
    font-size: clamp(1.6rem, 8vw, 2.2rem);
    margin-bottom: 14px;
  }

  .hero-subtitle {
    font-size: 1rem;
    max-width: 95%;
  }

  .hero-cta-group {
    flex-direction: column;
    align-items: stretch;
    margin-top: 18px;
  }

  .hero-btn {
    white-space: normal;
    text-align: center;
  }

  .carousel-side-arrow {
    display: none;
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

  .hero-intro-viewport {
    padding-left: 16px;
    padding-right: 16px;
  }
}
</style>