<template>
  <div :class="['services-wrapper', isDarkMode ? 'theme-dark' : 'theme-light']" @mousemove="handleMouseMove">
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

    <main class="services-main">
      <div class="ambient-glow"></div>

      <section class="services-hero">
        <span class="section-tag animate-fade-in">Our Services</span>
        <h1 class="services-title animate-title">
          High-Performance <br>
          <span class="highlight-text">Digital Architecture.</span>
        </h1>
        <p class="services-subtitle animate-fade-in">
          We combine cutting-edge frontend engineering with robust system design to build highly secure, beautiful, and
          fluid digital platforms. Explore our technical capabilities below.
        </p>

        <div class="cta-button-group animate-fade-in">
          <router-link to="/portfolio" class="btn-our-work">
            Our Work
          </router-link>
          <router-link to="/consultation" class="btn-start-project">
            Start a Project
          </router-link>
        </div>
      </section>

      <section class="showcase-rows">
        <div v-for="service in servicesList" :key="service.title" class="showcase-row animate-scroll-element"
          :class="{ 'row-reverse': service.reverse }">
          <div class="row-media">
            <img :src="service.image" :alt="service.title" class="row-img" />
            <div class="row-img-tint"></div>
            <div class="row-glow-dot"></div>
          </div>

          <div class="row-content">
            <span class="row-tag">{{ service.tag }}</span>
            <h2 class="row-title">{{ service.title }}</h2>
            <p class="row-desc">{{ service.desc }}</p>
            <ul class="row-points">
              <li v-for="point in service.points" :key="point">
                <span class="point-dot"></span>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="services-cta animate-scroll-element">
        <div class="cta-glow"></div>
        <h2 class="cta-title">
          Ready to Elevate Your <span class="highlight-text">Digital Stack</span>?
        </h2>
        <p class="cta-subtitle">
          Let's align your product vision with production-grade architectural builds. Partner with WebHive to construct
          cleaner infrastructure.
        </p>
        <router-link to="/consultation" class="btn-start-project">
          Start a Project
        </router-link>
      </section>

      <div class="back-btn-row">
        <button class="go-back-btn" @click="goBack" aria-label="Go back to previous page">
          <span class="go-back-arrow" aria-hidden="true">←</span>
          Back
        </button>
      </div>
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
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ChatBot from '../components/ChatBot.vue'
import Footer from '../components/footer.vue'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()

function goBack() {
  router.back()
}

const isDarkMode = ref(true)
const isMenuOpen = ref(false)
const currentYear = new Date().getFullYear()
const isChatOpen = ref(false)

const menuItems = ['Home', 'About', 'Portfolio', 'Culture', 'Studio', 'Policies']

const servicesList = ref([
  {
    tag: 'Web App Development',
    title: 'Immersive Interfaces, Premium Motion',
    desc: 'Crafting ultra-responsive, highly optimized single page applications and portals. Specializing in advanced state architectures matched with micro-interactions tailored for elite web environments.',
    points: [
      'Vue 3, Composition API & high-performance state layers',
      'Advanced GSAP & ScrollTrigger timeline animations',
      'Flawless Tailwind structural scaffolding and design execution'
    ],
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=80',
    reverse: false
  },
  {
    tag: 'App Development',
    title: 'Native-Fluid Mobile Experiences',
    desc: 'Engineering cross-platform mobile solutions built for speed, performance, and accessibility. We deploy production-ready applications with beautiful interface scaling across Android and iOS.',
    points: [
      'Reactive, multi-threaded mobile frameworks',
      'Smooth layout logic optimized for modern smartphone viewports',
      'Clean hardware-level API and peripheral integration'
    ],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80',
    reverse: true
  },
  {
    tag: 'E-commerce Solutions',
    title: 'High-Conversion Architecture',
    desc: 'Building transaction-resilient store setups optimized for conversion and rapid loading benchmarks. We separate front-end experiences from heavy database tasks to keep shopping journeys fast.',
    points: [
      'Scalable, clean relational database structures (MySQL)',
      'Secure transaction processing and customized checking flows',
      'Decoupled architecture built to survive peak sales traffic'
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80',
    reverse: false
  },
  {
    tag: 'NetSuite Integrations',
    title: 'Enterprise ERP Synchronization',
    desc: 'Bridging front-end transactional stacks directly into your Oracle NetSuite ecosystem. Automate and handle your inventory tracking, analytical accounting data, and logistics mapping symmetrically without data drops.',
    points: [
      'Custom SuiteScript routines and robust SuiteTalk API linking',
      'Real-time automated data validation and workflow tracking',
      'Decoupled backends via Laravel middleware processing'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    reverse: true
  }
])

const parallax = reactive({ bgX: 0, bgY: 0 })

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

const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window
  const xWeight = (clientX / innerWidth) - 0.5
  const yWeight = (clientY / innerHeight) - 0.5
  parallax.bgX = xWeight * -20
  parallax.bgY = yWeight * -20
}

const toggleMenu = () => { isMenuOpen.value = !isMenuOpen.value }

onMounted(() => {
  // CHANGED: Check the universal site theme preference. Defaults to dark.
  const savedTheme = localStorage.getItem('webhive-theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    isDarkMode.value = true // Keep dark as default when visiting fresh
  }

  // Keep root context token up-to-date instantly on view mount
  applyGlobalThemeClass(isDarkMode.value)

  gsap.set('.showcase-row, .services-cta', { opacity: 1 })

  gsap.fromTo('.animate-title',
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.2 }
  )

  gsap.fromTo('.animate-fade-in',
    { opacity: 0, y: 25 },
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.4 }
  )

  gsap.utils.toArray('.showcase-row').forEach((row) => {
    const media = row.querySelector('.row-media')
    const content = row.querySelector('.row-content')
    const isReverse = row.classList.contains('row-reverse')

    gsap.fromTo(media,
      { opacity: 0, x: isReverse ? 60 : -60, scale: 0.95 },
      {
        opacity: 1, x: 0, scale: 1, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: row, start: 'top 75%', toggleActions: 'play none none none' }
      }
    )

    gsap.fromTo(content,
      { opacity: 0, x: isReverse ? -60 : 60 },
      {
        opacity: 1, x: 0, duration: 0.9, ease: 'power3.out', delay: 0.15,
        scrollTrigger: { trigger: row, start: 'top 75%', toggleActions: 'play none none none' }
      }
    )

    gsap.fromTo(row.querySelectorAll('.row-points li'),
      { opacity: 0, x: 15 },
      {
        opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out', delay: 0.4,
        scrollTrigger: { trigger: row, start: 'top 75%', toggleActions: 'play none none none' }
      }
    )
  })

  gsap.from('.services-cta', {
    scrollTrigger: {
      trigger: '.services-cta',
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

onUnmounted(() => {
  ScrollTrigger.getAll().forEach(t => t.kill())
  // CHANGED: Removed the item removal function to prevent wiping user preference on route changes
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

/* ----------------------------------------- */
/* CORE WRAPPER & BACKGROUND                 */
/* ----------------------------------------- */
.services-wrapper {
  --brand-accent: #00ffa3;
  --transition-speed: 0.5s;
  /* Shared vertical rhythm used across the page, matching Home/About/etc. */
  --space-sm: clamp(18px, 2.6vw, 36px);
  --space-md: clamp(22px, 3.6vw, 56px);
  --space-lg: clamp(32px, 5.5vw, 96px);
  width: 100%;
  min-height: 100vh;
  position: relative;
  font-family: system-ui, -apple-system, sans-serif;
  transition: background-color var(--transition-speed), color var(--transition-speed);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.theme-dark {
  background-color: #0b0c10;
  color: #ffffff;
}

/* Light theme overrides --brand-accent to vibrant orange and uses a solid white background */
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
  z-index: 1;
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
   NAVBAR — full width, flush to the top and side edges, no
   floating pill margin. Matches the Home.vue / About.vue
   redesign exactly. Fluid base + explicit per-tier
   growth/shrink further down.
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

/* Light theme: solid navbar, no blur */
.theme-light .navbar {
  background: #ffffff;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
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

/* ----------------------------------------- */
/* NAVIGATION OVERLAY BLOCK                  */
/* ----------------------------------------- */
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
}

.theme-dark .nav-overlay {
  background-color: rgba(11, 12, 16, 0.96);
}

.theme-light .nav-overlay {
  background-color: #ffffff;
  backdrop-filter: none;
  -webkit-backdrop-filter: none;
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
}

.menu-link {
  font-size: clamp(1.1rem, 3vw, 2.2rem);
  font-weight: 900;
  text-decoration: none;
  letter-spacing: -0.02em;
  transition: color 0.3s, transform 0.3s;
  display: inline-block;
  line-height: 1.1;
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

/* ----------------------------------------- */
/* SERVICES CANVAS — fixed calc()-based top   */
/* padding (tuned for the old floating navbar)*/
/* replaced with fluid clamp() values so nav   */
/* clearance scales cleanly at every breakpoint*/
/* ----------------------------------------- */
.services-main {
  flex: 1 1 0;
  position: relative;
  z-index: 10;
  width: 100%;
  padding: clamp(96px, 15vh, 150px) clamp(16px, 5vw, 60px) clamp(48px, 8vh, 90px);
}

.ambient-glow {
  position: absolute;
  width: min(700px, 85vw);
  height: min(700px, 85vw);
  background-color: var(--brand-accent);
  border-radius: 50%;
  top: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(150px);
  opacity: 0.08;
  pointer-events: none;
  z-index: 1;
}

/* Glow removed entirely in light theme (would otherwise look like a blurry orange stain on white) */
.theme-light .ambient-glow {
  display: none;
}

.services-hero {
  max-width: 920px;
  margin: clamp(20px, 3vh, 40px) auto clamp(50px, 8vw, 90px);
  text-align: center;
  position: relative;
  z-index: 5;
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

.services-title {
  font-size: clamp(2.1rem, 6.5vw, 5rem);
  font-weight: 950;
  line-height: 1.15;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  margin-bottom: clamp(20px, 3vh, 28px);
  color: #ffffff;
}

.theme-light .services-title {
  color: #0f172a;
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

.services-subtitle {
  font-size: clamp(15px, 2vw, 19px);
  line-height: 1.7;
  max-width: 760px;
  margin: 0 auto clamp(28px, 4.4vh, 44px);
  color: rgba(255, 255, 255, 0.65);
}

.theme-light .services-subtitle {
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

/* ----------------------------------------- */
/* ALTERNATING SHOWCASE GRID                 */
/* ----------------------------------------- */
.showcase-rows {
  max-width: 1300px;
  margin: 0 auto clamp(56px, 9vw, 110px);
  display: flex;
  flex-direction: column;
  gap: clamp(48px, 8vw, 100px);
  position: relative;
  z-index: 5;
}

.showcase-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 5vw, 70px);
  align-items: center;
}

.row-reverse {
  direction: rtl;
}

.row-reverse .row-content,
.row-reverse .row-media {
  direction: ltr;
}

@media (max-width: 860px) {

  .showcase-row,
  .row-reverse {
    grid-template-columns: 1fr;
    direction: ltr;
  }

  .row-reverse .row-media {
    order: -1;
  }
}

.row-media {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.theme-light .row-media {
  border-color: rgba(15, 23, 42, 0.08);
}

.row-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.row-media:hover .row-img {
  transform: scale(1.04);
}

.row-img-tint {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 255, 163, 0.12), transparent 60%);
  pointer-events: none;
}

.theme-light .row-img-tint {
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.12), transparent 60%);
}

.row-glow-dot {
  position: absolute;
  bottom: -30px;
  right: -30px;
  width: 130px;
  height: 130px;
  background-color: var(--brand-accent);
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.25;
}

/* Removed in light theme — same reasoning as ambient-glow, avoids an orange blur smear on white */
.theme-light .row-glow-dot {
  display: none;
}

.row-content {
  display: flex;
  flex-direction: column;
}

.row-tag {
  font-family: monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--brand-accent);
  margin-bottom: 14px;
}

.theme-light .row-tag {
  font-weight: 600;
}

.row-title {
  font-size: clamp(1.5rem, 3vw, 2.4rem);
  font-weight: 900;
  margin-bottom: 16px;
}

.row-desc {
  font-size: clamp(14px, 1.1vw, 15px);
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 24px;
}

.theme-light .row-desc {
  color: #475569;
}

.row-points {
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
}

.row-points li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
}

.theme-light .row-points li {
  color: #1e293b;
}

.point-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--brand-accent);
  box-shadow: 0 0 8px var(--brand-accent);
}

/* ----------------------------------------- */
/* CLOSING CTA BLOCK (FIXED HITBOX CONTEXT)   */
/* ----------------------------------------- */
.services-cta {
  position: relative;
  z-index: 30;
  /* Elevated above background layouts and blurring elements */
  pointer-events: auto;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: clamp(44px, 6vw, 80px) clamp(24px, 4vw, 40px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background-color: rgba(255, 255, 255, 0.01);
  overflow: hidden;
}

.theme-light .services-cta {
  background-color: #ffffff;
  border-color: rgba(15, 23, 42, 0.06);
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
  z-index: 1;
}

/* Removed in light theme — no blurry orange background behind the CTA */
.theme-light .cta-glow {
  display: none;
}

.cta-title {
  font-size: clamp(1.6rem, 4vw, 3rem);
  font-weight: 900;
  margin-bottom: 18px;
  position: relative;
  z-index: 5;
}

.cta-subtitle {
  font-size: clamp(14px, 1.6vw, 17px);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  max-width: 560px;
  margin: 0 auto 36px;
  position: relative;
  z-index: 5;
}

.theme-light .cta-subtitle {
  color: #475569;
}

.btn-start-project {
  position: relative;
  z-index: 10;
  /* Placed over internal glow layer */
  pointer-events: auto !important;
  /* Explicit browser directive to accept click actions */
  text-decoration: none;
  display: inline-block;
  background-color: #ffffff;
  color: #0b0c10;
  padding: clamp(14px, 1.6vw, 18px) clamp(26px, 3vw, 38px);
  font-weight: 700;
  font-size: clamp(12.5px, 1vw, 14px);
  text-transform: uppercase;
  border-radius: 4px;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-start-project:hover {
  background-color: var(--brand-accent);
  color: #0b0c10;
  transform: translateY(-2px);
}

/* Light theme: background stays the brand accent orange at all times; text is white normally and flips to black on hover, with the same lift as Portfolio.vue */
.theme-light .btn-start-project {
  background-color: var(--brand-accent);
  color: #ffffff;
}

.theme-light .btn-start-project:hover {
  background-color: var(--brand-accent);
  color: #000000;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.3);
}

/* ----------------------------------------- */
/* GO BACK BUTTON (matches Start a Project)   */
/* ----------------------------------------- */
.back-btn-row {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: center;
  margin-top: clamp(2rem, 4vw, 3rem);
}

.go-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  color: #0b0c10;
  border: none;
  font-family: inherit;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
}

.go-back-btn:hover {
  background-color: var(--brand-accent);
  color: #0b0c10;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 255, 163, 0.3);
}

/* Light theme: background stays the brand accent orange at all times; text is white normally and flips to black on hover, matching Start a Project */
.theme-light .go-back-btn {
  background-color: var(--brand-accent);
  color: #ffffff;
}

.theme-light .go-back-btn:hover {
  background-color: var(--brand-accent);
  color: #000000;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(249, 115, 22, 0.3);
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

/* ----------------------------------------- */
/* FOOTER                                    */
/* ----------------------------------------- */
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
  border-top: 1px solid;
}

.theme-dark .copyright-section {
  color: rgba(255, 255, 255, 0.4);
  background-color: rgba(9, 9, 11, 0.6);
  border-top-color: rgba(255, 255, 255, 0.05);
}

.theme-light .copyright-section {
  color: rgba(15, 23, 42, 0.5);
  background-color: #ffffff;
  border-top-color: rgba(15, 23, 42, 0.06);
}

/* ── Floating Chat Widget (new, isolated) ── */
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

/* =========================================================================
   BREAKPOINT TIERS
   Organized by the exact ranges used across the rest of the site,
   desktop-first (max-width cascades down). Navbar sizing mirrors the
   Home.vue / About.vue implementation tier-for-tier.
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
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

  .services-hero {
    max-width: 800px;
  }

  .showcase-rows {
    max-width: 1100px;
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

  .services-hero {
    max-width: 980px;
  }

  .services-title {
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

  .services-hero {
    max-width: 1100px;
  }

  .services-title {
    font-size: clamp(3rem, 4.8vw, 6rem);
  }

  .services-subtitle {
    max-width: 860px;
    font-size: 1.2rem;
  }

  .showcase-rows {
    max-width: 1560px;
  }

  .row-title {
    font-size: clamp(1.8rem, 2.2vw, 2.6rem);
  }

  .services-cta {
    max-width: 1180px;
  }

  .cta-title {
    font-size: clamp(2rem, 3vw, 3.4rem);
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

  .services-hero {
    max-width: 1360px;
  }

  .services-title {
    font-size: clamp(3.6rem, 4.4vw, 7rem);
    margin-bottom: 36px;
  }

  .services-subtitle {
    max-width: 1000px;
    font-size: 1.35rem;
    line-height: 1.75;
  }

  .showcase-rows {
    max-width: 1900px;
  }

  .row-title {
    font-size: clamp(2rem, 1.8vw, 3rem);
  }

  .row-desc {
    font-size: 16px;
  }

  .services-cta {
    max-width: 1400px;
    padding: 96px 60px;
  }

  .cta-title {
    font-size: clamp(2.4rem, 2.6vw, 3.8rem);
  }

  .cta-subtitle {
    max-width: 700px;
    font-size: 1.15rem;
  }

  .btn-our-work,
  .btn-start-project {
    font-size: 15px;
    padding: 20px 44px;
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

  .services-main {
    padding: clamp(84px, 14vh, 116px) clamp(24px, 6vw, 48px) clamp(40px, 7vh, 72px);
  }

  .services-hero {
    max-width: 660px;
  }

  .services-title {
    font-size: clamp(2rem, 5.4vw, 3.2rem);
  }

  .showcase-rows {
    max-width: 100%;
    gap: clamp(56px, 8vw, 80px);
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

  .services-main {
    padding: clamp(78px, 15vh, 104px) clamp(20px, 6vw, 40px) clamp(32px, 6vh, 56px);
  }

  .services-hero {
    max-width: 540px;
  }

  .services-title {
    font-size: clamp(1.9rem, 7vw, 2.7rem);
  }

  .services-subtitle {
    max-width: 90%;
  }

  .services-cta {
    padding: clamp(36px, 7vw, 56px) clamp(20px, 5vw, 32px);
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

  .services-main {
    padding: clamp(74px, 15vh, 96px) 20px clamp(28px, 5vh, 44px);
  }

  .services-hero {
    max-width: 100%;
    margin-bottom: clamp(40px, 10vw, 60px);
  }

  .section-tag {
    margin-bottom: 14px;
  }

  .services-title {
    font-size: clamp(1.5rem, 8vw, 2rem);
    margin-bottom: 16px;
  }

  .services-subtitle {
    font-size: 0.95rem;
    max-width: 100%;
  }

  .showcase-rows {
    gap: clamp(40px, 12vw, 56px);
    margin-bottom: 48px;
  }

  .row-title {
    font-size: clamp(1.3rem, 6.5vw, 1.7rem);
  }

  .services-cta {
    padding: 32px 20px;
  }

  .cta-title {
    font-size: clamp(1.4rem, 7.5vw, 1.9rem);
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

  .btn-start-project {
    width: 100%;
    text-align: center;
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

  .services-main {
    padding-left: 16px;
    padding-right: 16px;
  }

  .services-title {
    font-size: clamp(1.3rem, 8.5vw, 1.75rem);
  }
}
</style>