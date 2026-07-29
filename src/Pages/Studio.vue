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
      <div class="ambient-glow"></div>

      <section id="location" class="studio-section">
        <div class="studio-grid">

          <div class="info-panel">
            <h2 class="section-title">
              Visit Our <span class="accent-text">Studio</span>
            </h2>

            <div class="glass-card">
              <div class="info-row">
                <div class="icon-wrap">
                  <svg class="studio-icon" viewBox="0 0 24 24" fill="none" stroke="#00ffa3" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div class="info-text">
                  <p class="info-heading">WebHive Technologies</p>
                  <p class="info-description">
                    Office # 11, 3rd Floor, Ahmed Center,<br />
                    Street 8, I-8 Markaz, Islamabad 44000
                  </p>
                </div>
              </div>

              <div class="info-row">
                <div class="icon-wrap">
                  <svg class="studio-icon" viewBox="0 0 24 24" fill="none" stroke="#00ffa3" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div class="info-text">
                  <p class="info-heading">Working Hours</p>
                  <p class="info-description">Mon - Fri: 11:00 AM - 8:00 PM</p>
                  <p class="closed-status">SAT - SUN: CLOSED</p>
                </div>
              </div>
            </div>

            <div class="cta-container">
              <a href="https://maps.app.goo.gl/G91jE1zsYYUYa3qa6" target="_blank" class="navigation-link">
                <span>Direct Navigation Map</span>
                <svg class="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="#00ffa3" stroke-width="2.5"
                  stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </a>

              <button type="button" class="navigation-link go-back-link" @click="goBack"
                aria-label="Go back to previous page">
                <svg class="nav-arrow back-arrow" viewBox="0 0 24 24" fill="none" stroke="#00ffa3" stroke-width="2.5"
                  stroke-linecap="round" stroke-linejoin="round">
                  <line x1="19" y1="12" x2="5" y2="12"></line>
                  <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                <span>Go Back</span>
              </button>
            </div>
          </div>

          <div class="map-panel">
            <div class="map-wrapper-card">
              <iframe src="https://maps.google.com/maps?q=33.669397,73.074073&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%" style="border:0;" class="embedded-map" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

        </div>
      </section>
    </main>

    <Footer :darkMode="isDarkMode" />
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import gsap from 'gsap'
import Footer from '../components/footer.vue'

const router = useRouter()

const isDarkMode = ref(true)
const isMenuOpen = ref(false)
const currentYear = new Date().getFullYear()

// Restored local page item sequence context matching architectural layout rules
const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Culture', 'Policies']

const parallax = reactive({
  bgX: 0,
  bgY: 0
})

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

const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window

  const xWeight = (clientX / innerWidth) - 0.5
  const yWeight = (clientY / innerHeight) - 0.5

  parallax.bgX = xWeight * -15
  parallax.bgY = yWeight * -15
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// CHANGED: Saved under the unified webhive-theme key and updates root HTML element classes
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
  const activeTheme = isDarkMode.value ? 'dark' : 'light'

  localStorage.setItem('webhive-theme', activeTheme)
  applyGlobalThemeClass(isDarkMode.value)
}

// NEW: Go back to the previous page in history
function goBack() {
  router.back()
}

onMounted(() => {
  // CHANGED: Check the universal site theme preference. Defaults to dark.
  const savedTheme = localStorage.getItem('webhive-theme')
  if (savedTheme) {
    isDarkMode.value = savedTheme === 'dark'
  } else {
    isDarkMode.value = true // Default theme when visiting fresh
  }

  // Keep root context token up-to-date instantly on view mount
  applyGlobalThemeClass(isDarkMode.value)
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
:global(html),
:global(body) {
  margin: 0;
  padding: 0;
  width: 100%;
  height: auto;
  scroll-behavior: smooth;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

:global(html::-webkit-scrollbar),
:global(body::-webkit-scrollbar) {
  display: none;
  width: 0;
  height: 0;
}

/* ----------------------------------------- */
/* 1. CORE BACKGROUND ENVIRONMENT            */
/* ----------------------------------------- */
.hero-wrapper {
  --brand-accent: #00ffa3;
  --transition-speed: 0.5s;

  position: relative;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: system-ui, -apple-system, sans-serif;
  box-sizing: border-box;
  z-index: 1;
  overflow-x: hidden;
}

.navbar,
.navbar *,
.navbar *::before,
.navbar *::after,
.nav-overlay,
.nav-overlay *,
.nav-overlay *::before,
.nav-overlay *::after,
.hero-main,
.hero-main *,
.hero-main *::before,
.hero-main *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.theme-dark {
  background-color: #060606;
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
  opacity: 0.15;
  pointer-events: none;
  overflow: hidden;
}

.bg-grid-lines {
  position: absolute;
  inset: -40px;
  background-size: 50px 50px;
}

.theme-dark .bg-grid-lines {
  background-image:
    linear-gradient(to right, rgba(0, 255, 163, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 255, 163, 0.03) 1px, transparent 1px);
}

.theme-light .bg-grid-lines {
  background-image:
    linear-gradient(to right, rgba(15, 23, 42, 0.04) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(15, 23, 42, 0.04) 1px, transparent 1px);
}

/* =========================================================
   NAVBAR — full width, flush to the top and side edges, no
   floating pill margin. Matches the Home.vue / About.vue /
   Services.vue / Portfolio.vue / Culture.vue redesign exactly.
   Fluid base + explicit per-tier growth/shrink further down.
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
/* 3. NAVIGATION OVERLAY SYSTEM (SERVICES)  */
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
/* 4. HERO MAIN CONTENT CANVAS ENGINE       */
/* fixed calc()-based top padding (tuned for */
/* the old floating navbar) replaced with    */
/* fluid clamp() values, matching the same   */
/* fix applied to every other page.          */
/* ----------------------------------------- */
.hero-main {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  width: 100%;
  padding: clamp(84px, 12vh, 120px) clamp(20px, 6vw, 80px) clamp(24px, 3vw, 48px);
}

.ambient-glow {
  position: absolute;
  width: 450px;
  height: 450px;
  background: radial-gradient(circle, rgba(0, 255, 163, 0.08) 0%, transparent 70%);
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.theme-light .ambient-glow {
  background: radial-gradient(circle, rgba(249, 115, 22, 0.08) 0%, transparent 70%);
}

.studio-section {
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
}

.studio-grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: clamp(24px, 4vw, 60px);
  align-items: stretch;
}

@media (max-width: 1023px) {
  .studio-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}

/* ----------------------------------------- */
/* 5. EXACT PHOTO SPECIFICATION STYLES       */
/* ----------------------------------------- */
.info-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.section-title {
  font-size: clamp(1.8rem, 3.5vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 20px;
}

.theme-light .section-title {
  color: #0f172a;
}

.accent-text {
  color: var(--brand-accent);
}

.glass-card {
  width: 100%;
  background: rgba(14, 16, 15, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  padding: clamp(20px, 2.5vw, 32px);
  display: flex;
  flex-direction: column;
  gap: clamp(18px, 2vw, 28px);
}

.theme-light .glass-card {
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
}

.info-row {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.icon-wrap {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  margin-top: 2px;
}

.studio-icon {
  width: 22px;
  height: 22px;
  stroke: var(--brand-accent);
}

.info-text {
  display: flex;
  flex-direction: column;
}

.info-heading {
  font-size: clamp(15px, 1.1vw, 16px);
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}

.theme-light .info-heading {
  color: #0f172a;
}

.info-description {
  font-size: clamp(13px, 0.95vw, 13.5px);
  line-height: 1.5;
  color: #9ca3af;
}

.theme-light .info-description {
  color: #4b5563;
}

.closed-status {
  color: var(--brand-accent);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.05em;
  margin-top: 10px;
}

/* CHANGED: cta-container now holds two parallel links (Direct Navigation Map + Go Back) */
.cta-container {
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: clamp(20px, 3vw, 36px);
}

.navigation-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--brand-accent);
  font-weight: 700;
  font-size: clamp(14px, 1.1vw, 16px);
  text-decoration: none;
  transition: opacity 0.2s;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: inherit;
}

.navigation-link:hover {
  opacity: 0.85;
}

.nav-arrow {
  width: 16px;
  height: 16px;
  stroke: var(--brand-accent);
}

/* NEW: Go Back button — same color/typography treatment as navigation-link */
.go-back-link {
  order: -1;
}

.back-arrow {
  transition: transform 0.2s ease;
}

.go-back-link:hover .back-arrow {
  transform: translateX(-3px);
}

/* ----------------------------------------- */
/* MAP PANEL                                 */
/* ----------------------------------------- */
.map-panel {
  width: 100%;
  height: 100%;
}

.map-wrapper-card {
  width: 100%;
  height: 100%;
  background: rgba(14, 16, 15, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  overflow: hidden;
  padding: 12px;
}

.theme-light .map-wrapper-card {
  background: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
}

.embedded-map {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}

.theme-dark .embedded-map {
  filter: grayscale(1) invert(0.9) contrast(1.1) brightness(0.8);
}

/* ----------------------------------------- */
/* 6. FOOTER & COPYRIGHT (preserved styles,  */
/* now unused since <Footer /> handles this, */
/* kept for parity with the rest of the site)*/
/* ----------------------------------------- */
.footer-group {
  width: 100%;
  position: relative;
  z-index: 10;
  flex-shrink: 0;
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

/* =========================================================================
   BREAKPOINT TIERS
   Organized by the exact ranges used across the rest of the site,
   desktop-first (max-width cascades down). Navbar sizing mirrors the
   Home.vue / About.vue / Services.vue / Portfolio.vue / Culture.vue
   implementation tier-for-tier. The 1023/1024px grid-stack and
   fixed-viewport breakpoints above are untouched and independent
   of this navbar/content tiering.
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

  .studio-section {
    max-width: 1140px;
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

  .studio-section {
    max-width: 1360px;
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

  .hero-main {
    padding-inline: clamp(40px, 6vw, 110px);
  }

  .studio-section {
    max-width: 1560px;
  }

  .section-title {
    font-size: clamp(2.4rem, 3.2vw, 3.6rem);
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

  .hero-main {
    padding-inline: clamp(60px, 7vw, 160px);
  }

  .studio-section {
    max-width: 1840px;
  }

  .section-title {
    font-size: clamp(2.8rem, 2.8vw, 4rem);
  }

  .info-heading {
    font-size: 18px;
  }

  .info-description {
    font-size: 15px;
  }

  .navigation-link {
    font-size: 17px;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1023px ---------- */
@media (min-width: 769px) and (max-width: 1023px) {
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
    padding: clamp(84px, 13vh, 112px) clamp(24px, 6vw, 48px) clamp(32px, 5vh, 56px);
  }

  .section-title {
    font-size: clamp(1.9rem, 4.6vw, 2.6rem);
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

  .hero-main {
    padding: clamp(78px, 14vh, 100px) clamp(20px, 6vw, 40px) clamp(28px, 5vh, 44px);
  }

  .section-title {
    font-size: clamp(1.7rem, 6vw, 2.3rem);
  }

  .map-panel {
    height: clamp(260px, 55vw, 380px);
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

  .hero-main {
    padding: clamp(74px, 14vh, 92px) 16px clamp(24px, 5vh, 36px);
  }

  .section-title {
    font-size: clamp(1.5rem, 8vw, 1.9rem);
  }

  .glass-card {
    padding: 18px;
    gap: 16px;
  }

  .info-row {
    gap: 14px;
  }

  .cta-container {
    gap: 16px;
  }

  .map-panel {
    height: clamp(220px, 60vw, 300px);
  }
}

@media (max-width: 360px) {
  .navbar {
    padding: 0.5rem 0.7rem;
  }

  .logo {
    font-size: 1rem;
  }

  .hero-main {
    padding-left: 14px;
    padding-right: 14px;
  }

  .section-title {
    font-size: clamp(1.3rem, 8.5vw, 1.7rem);
  }

  .info-description {
    font-size: 12.5px;
  }
}
</style>