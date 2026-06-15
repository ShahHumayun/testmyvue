
<template>
  <div 
    :class="['hero-wrapper', isDarkMode ? 'theme-dark' : 'theme-light']"
    @mousemove="handleMouseMove"
  >
    <div class="bg-overlay">
      <div 
        class="bg-grid-lines"
        :style="{ transform: `translate(${parallax.bgX}px, ${parallax.bgY}px)` }"
      ></div>
    </div>

    <header class="navbar">
      <div class="company-branding">
        <span class="status-dot"></span>
        <span class="brand-text">WebHive Technologies</span>
      </div>

      <div class="nav-actions">
        <router-link to="/consultation" class="consult-btn">
          Consultation
        </router-link>

        <button 
          @click="isDarkMode = !isDarkMode"
          class="theme-toggle"
          :aria-label="isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'"
        >
          <div 
            class="toggle-thumb"
            :class="{ 'toggle-active': isDarkMode }"
          >
            <span class="toggle-icon" aria-hidden="true">{{ isDarkMode ? '🌙' : '☀️' }}</span>
          </div>
        </button>

        <button 
          @click="toggleMenu" 
          class="menu-trigger"
          :class="{ 'menu-active': isMenuOpen }"
          :aria-expanded="isMenuOpen"
          aria-label="Toggle navigation menu"
        >
          <span class="burger-line line-top"></span>
          <span class="burger-line line-mid"></span>
          <span class="burger-line line-bot"></span>
        </button>
      </div>
    </header>

    <Transition @enter="onMenuEnter" @leave="onMenuLeave" :css="false">
      <div v-if="isMenuOpen" class="nav-overlay">
        <nav class="nav-links-container">
          <div 
            v-for="(item, index) in menuItems" 
            :key="item"
            class="menu-item-wrap"
          >
            <span class="menu-index">0{{ index + 1 }}</span>
            <router-link 
              :to="'/' + item.toLowerCase()" 
              @click="toggleMenu" 
              class="menu-link"
            >
              {{ item }}
            </router-link>
          </div>

          <div class="menu-item-wrap overlay-btn-item">
            <span class="menu-index">0{{ menuItems.length + 1 }}</span>
            <router-link to="/consultation" @click="toggleMenu" class="consult-btn-overlay">
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
                  <svg class="studio-icon" viewBox="0 0 24 24" fill="none" stroke="#00ffa3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                  <svg class="studio-icon" viewBox="0 0 24 24" fill="none" stroke="#00ffa3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
              <a 
                href="https://maps.app.goo.gl/G91jE1zsYYUYa3qa6" 
                target="_blank" 
                class="navigation-link"
              >
                <span>Direct Navigation Map</span>
                <svg class="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="#00ffa3" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </a>
            </div>
          </div>

          <div class="map-panel">
            <div class="map-wrapper-card">
              <!-- ✅ FIX 1: Simple coordinate-based URL — always drops a pin, no broken pb= blob -->
              <iframe
                src="https://maps.google.com/maps?q=33.669397,73.074073&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style="border:0;"
                class="embedded-map"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

        </div>
      </section>
    </main>

    <footer class="footer-group">
      <div class="copyright-section">
        <p>© {{ currentYear }} WebHive Technologies. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import gsap from 'gsap'

const isDarkMode = ref(true)
const isMenuOpen = ref(false)

const menuItems = ['About', 'Services', 'Portfolio', 'Culture', 'Studio', 'Contact']

const currentYear = new Date().getFullYear()

const parallax = reactive({
  bgX: 0,
  bgY: 0
})

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
  height: 100%;
  width: 100%;
}

/* ----------------------------------------- */
/* 1. CORE BACKGROUND ENVIRONMENT            */
/* ----------------------------------------- */
.hero-wrapper {
  --brand-accent: #00ffa3;
  --transition-speed: 0.5s;

  position: relative;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: system-ui, -apple-system, sans-serif;
  box-sizing: border-box;
  z-index: 1;
  overflow-x: hidden;
}

@media (min-width: 1024px) {
  .hero-wrapper {
    position: fixed;
    inset: 0;
    height: 100dvh;
    overflow: hidden;
  }
  :global(html),
  :global(body) {
    overflow: hidden !important;
  }
}

.hero-wrapper *,
.hero-wrapper *::before,
.hero-wrapper *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.theme-dark {
  background-color: #060606; 
  color: #ffffff;
}
.theme-light {
  background-color: #f4f6f9;
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

/* ----------------------------------------- */
/* 2. TOP NAVBAR SYSTEM                      */
/* ----------------------------------------- */
.navbar {
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: clamp(14px, 2vw, 24px) clamp(20px, 5vw, 60px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
}

.company-branding {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
  flex-shrink: 1;
  overflow: hidden;
}

.brand-text {
  font-family: system-ui, sans-serif;
  font-weight: 700;
  font-size: clamp(12px, 1vw, 14px);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: linear-gradient(to right, #ffffff, rgba(255, 255, 255, 0.7));
  -webkit-background-clip: text;
  background-clip: text;
  transition: color var(--transition-speed);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.theme-light .brand-text {
  background: none;
  color: #0f172a;
}

.status-dot {
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  background-color: var(--brand-accent);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--brand-accent);
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: .4; transform: scale(0.9); }
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
  .consult-btn { display: none; }
}
.consult-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 255, 163, 0.3);
}
.consult-btn:active { transform: translateY(0); }

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
  .theme-toggle { width: 34px; height: 18px; padding: 2px; }
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
  .toggle-thumb { width: 13px; height: 13px; }
  .toggle-active { transform: translateX(15px); }
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
  .menu-trigger { width: 30px; height: 30px; gap: 3px; }
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
.theme-dark .burger-line { background-color: #ffffff; }
.theme-light .burger-line { background-color: #0f172a; }

.menu-active .line-top { transform: translateY(5px) rotate(45deg); background-color: var(--brand-accent) !important; }
.menu-active .line-mid { opacity: 0; }
.menu-active .line-bot { transform: translateY(-5px) rotate(-45deg); background-color: var(--brand-accent) !important; }

/* ----------------------------------------- */
/* NAVIGATION OVERLAY                        */
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
  background: rgba(5,5,5,0.95);
  width: 100%;
  height: 100dvh;
  overflow: hidden !important;
  padding: clamp(24px, 5vh, 48px) clamp(20px, 6vw, 48px);
  padding-top: max(clamp(24px, 5vh, 48px), env(safe-area-inset-top));
  padding-bottom: max(clamp(24px, 5vh, 48px), env(safe-area-inset-bottom));
}
.theme-light .nav-overlay { background-color: rgba(255, 255, 255, 0.96); }

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
  color: #fff;
}
.theme-light .menu-link { color: #0f172a; }
.menu-link:hover { color: var(--brand-accent); }

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
  white-space: nowrap;
}
.consult-btn-overlay:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 255, 163, 0.4);
}

@media (min-width: 1024px) {
  .nav-overlay {
    align-items: center;
    padding-left: clamp(80px, 10vw, 180px);
    justify-content: flex-start;
  }
}

@media (max-height: 500px) and (orientation: landscape) {
  .menu-link { font-size: clamp(1.2rem, 4.5vw, 2rem); }
  .nav-links-container { gap: clamp(4px, 1.2vh, 10px); }
  .menu-index { font-size: 11px; }
  .consult-btn-overlay { font-size: clamp(0.9rem, 2.5vw, 1.2rem); padding: 6px clamp(14px, 2.5vw, 24px); }
}

/* ----------------------------------------- */
/* 3. HERO MAIN CONTENT CANVAS ENGINE       */
/* ----------------------------------------- */
.hero-main {
  flex: 1 1 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  width: 100%;
  padding: calc(clamp(16px, 2vw, 40px) + clamp(14px, 2vw, 24px) + 56px) clamp(20px, 6vw, 80px) clamp(24px, 3vw, 48px);
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
/* 4. EXACT PHOTO SPECIFICATION STYLES       */
/* ----------------------------------------- */
.info-panel {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.section-title {
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 20px;
}
.theme-light .section-title { color: #0f172a; }

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
  background: rgba(255, 255, 255, 0.75);
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
}

.info-text {
  display: flex;
  flex-direction: column;
}

.info-heading {
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}
.theme-light .info-heading { color: #0f172a; }

.info-description {
  font-size: 13.5px;
  line-height: 1.5;
  color: #9ca3af; 
}
.theme-light .info-description { color: #4b5563; }

.closed-status {
  color: var(--brand-accent);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.05em;
  margin-top: 10px;
}

.cta-container {
  margin-top: 20px;
}
.navigation-link {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: var(--brand-accent);
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  transition: opacity 0.2s;
}
.navigation-link:hover {
  opacity: 0.85;
}
.nav-arrow {
  width: 16px;
  height: 16px;
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
/* 5. FOOTER & COPYRIGHT                     */
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
  padding: 14px 20px;
  font-size: 11px;
  color: rgba(255,255,255,0.3);
  border-top: 1px solid rgba(255,255,255,0.02);
}
.theme-light .copyright-section { color: rgba(0,0,0,0.4); }
</style>
