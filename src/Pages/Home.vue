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
      <div 
        class="ambient-glow"
        :style="{ transform: `translate(${parallax.headingX * 1.5}px, ${parallax.headingY * 1.5}px)` }"
      ></div>

      <h1
        class="main-title"
        :style="{
          transform: `
            perspective(1000px)
            rotateX(${parallax.rotateX}deg)
            rotateY(${parallax.rotateY}deg)
          `
        }"
      >
        WebHive
      </h1>

      <p class="hero-subtitle">
        Crafting Next-Gen Digital Ecosystems
      </p>
    </main>

    <footer class="footer-group">
      <div class="marquee-footer">
        <div class="marquee-track">
          <div class="marquee-content animate-marquee">
            <div v-for="(tech, idx) in technologies" :key="'a-' + idx" class="marquee-item">
              <span class="tech-name">{{ tech }}</span>
            </div>
          </div>
          <div class="marquee-content animate-marquee" aria-hidden="true">
            <div v-for="(tech, idx) in technologies" :key="'b-' + idx" class="marquee-item">
              <span class="tech-name">{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="copyright-section">
        <p>&copy; {{ currentYear }} WebHive Technologies. All rights reserved.</p>
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
const technologies = ['Magento', 'React Native', 'PHP', 'Laravel', 'Next.js', 'Vue.js']

const currentYear = new Date().getFullYear()

const parallax = reactive({
  rotateX: 0,
  rotateY: 0,
  headingX: 0, // Added to prevent undefined reference errors in template ambient-glow
  headingY: 0,
  bgX: 0,
  bgY: 0
})

const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window

  const xWeight = (clientX / innerWidth) - 0.5
  const yWeight = (clientY / innerHeight) - 0.5

  // Calculations refined and cleared of duplicate assignments
  parallax.rotateY = xWeight * 12
  parallax.rotateX = yWeight * -12

  parallax.bgX = xWeight * -20
  parallax.bgY = yWeight * -20
  
  parallax.headingX = xWeight * 15
  parallax.headingY = yWeight * 15
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

// Optimized GSAP Animation Hooks with GPU acceleration hints
const onMenuEnter = (el, done) => {
  gsap.set(el, { willChange: 'opacity' })
  gsap.set(el.querySelectorAll('.menu-link, .consult-btn-overlay'), { willChange: 'transform' })

  gsap.fromTo(el, 
    { opacity: 0 }, 
    { opacity: 1, duration: 0.4, ease: 'power2.out' }
  )
  gsap.fromTo(el.querySelectorAll('.menu-link, .consult-btn-overlay'), 
    { yPercent: 100 }, 
    { 
      yPercent: 0, 
      duration: 0.6, 
      stagger: 0.06, 
      ease: 'power3.out', 
      delay: 0.1, 
      onComplete: () => {
        gsap.set([el, el.querySelectorAll('.menu-link, .consult-btn-overlay')], { clearProps: 'willChange' })
        done()
      }
    }
  )
}

const onMenuLeave = (el, done) => {
  gsap.set(el, { willChange: 'opacity' })
  gsap.set(el.querySelectorAll('.menu-link, .consult-btn-overlay'), { willChange: 'transform' })

  gsap.to(el.querySelectorAll('.menu-link, .consult-btn-overlay'), 
    { yPercent: -100, duration: 0.4, stagger: 0.03, ease: 'power3.in' }
  )
  gsap.to(el, 
    { 
      opacity: 0, 
      duration: 0.4, 
      ease: 'power2.in', 
      delay: 0.15, 
      onComplete: () => {
        gsap.set([el, el.querySelectorAll('.menu-link, .consult-btn-overlay')], { clearProps: 'willChange' })
        done()
      }
    }
  )
}
</script>

<style scoped>
:global(html),
:global(body) {
  margin: 0;
  padding: 0;
  overflow: hidden !important;
  height: 100% !important;
  width: 100% !important;
}

/* ----------------------------------------- */
/* 1. CORE SETUP & VARIABLES                 */
/* ----------------------------------------- */
.hero-wrapper {
  --brand-accent: #00ffa3;
  --transition-speed: 0.5s;
  
  position: fixed;
  inset: 0;
  height: 100vh;
  height: 100dvh;
  max-height: 100dvh;
  width: 100vw;
  overflow: hidden !important;
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: system-ui, -apple-system, sans-serif;
  transition: background-color var(--transition-speed), color var(--transition-speed);
  box-sizing: border-box;
  z-index: 1;
}

.hero-wrapper *,
.hero-wrapper *::before,
.hero-wrapper *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.theme-dark {
  background-color: #0b0c10;
  color: #ffffff;
}
.theme-light {
  background-color: #f4f6f9;
  color: #0f172a;
}
.main-title {
  transform-style: preserve-3d;
  transform-origin: center center;
  transition: transform 0.15s ease-out;
}

/* ----------------------------------------- */
/* 2. BACKGROUND INTERACTIVE NET GRID        */
/* ----------------------------------------- */
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

/* ----------------------------------------- */
/* 3. TOP NAVBAR SYSTEM                      */
/* ----------------------------------------- */
.navbar {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: clamp(10px, 2vw, 22px) clamp(14px, 4vw, 40px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 50;
  position: relative;
  min-height: 0;
  flex-shrink: 0;
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
/* 4. NAVIGATION OVERLAY (GLASSMORPHISM)     */
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
  padding-top: max(clamp(24px, 5vh, 48px), env(safe-area-inset-top));
  padding-bottom: max(clamp(24px, 5vh, 48px), env(safe-area-inset-bottom));
}
.theme-dark .nav-overlay { 
  background-color: rgba(11, 12, 16, 0.85); 
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.theme-light .nav-overlay { 
  background-color: rgba(255, 255, 255, 0.85); 
  border: 1px solid rgba(15, 23, 42, 0.05);
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
.theme-dark .menu-link { color: #ffffff; }
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

/* ----------------------------------------- */
/* 5. HERO MAIN BODY                         */
/* ----------------------------------------- */
.hero-main {
  flex: 1 1 0;
  min-height: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  gap: 15px;
  padding: clamp(12px, 3vw, 40px) clamp(16px, 4vw, 40px);
  z-index: 10;
  user-select: none;
  pointer-events: none;
  width: 100%;
  max-width: 100%;
  overflow: visible;
}

.ambient-glow {
  position: absolute;
  width: min(550px, 80vw);
  height: min(550px, 80vw);
  border-radius: 50%;
  filter: blur(140px);
  -webkit-filter: blur(140px);
  mix-blend-mode: screen;
  transition: transform 0.2s cubic-bezier(0.25, 1, 0.5, 1);
  pointer-events: none;
  opacity: 0.25;
}
.theme-dark .ambient-glow { background-color: var(--brand-accent); }
.theme-light .ambient-glow { background-color: #a7f3d0; mix-blend-mode: multiply; opacity: 0.35; }

.main-title {
  font-size: clamp(3rem, 10vw, 8rem);
  font-weight: 950;
  letter-spacing: -0.04em;
  line-height: 1;
  text-transform: uppercase;
  pointer-events: auto;
  background: linear-gradient(to right, #ffffff 30%, var(--brand-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  will-change: transform;
  transition: transform 0.15s cubic-bezier(0.25, 1, 0.5, 1);
  width: fit-content;
  max-width: 92vw;
  text-align: center;
  word-break: break-word;
  flex-shrink: 1;
}
.theme-light .main-title {
  background: linear-gradient(to right, #0f172a 40%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-family: monospace;
  font-size: clamp(10px, 2.2vw, 14px);
  text-transform: uppercase;
  letter-spacing: 0.2em;
  width: 100%;
  max-width: 520px;
  padding: 0 clamp(10px, 3vw, 24px);
  transition: color var(--transition-speed);
  word-break: break-word;
  overflow-wrap: break-word;
  flex-shrink: 0;
}
@media (max-width: 360px) {
  .hero-subtitle {
    letter-spacing: 0.1em;
    font-size: 10px;
  }
}
.theme-dark .hero-subtitle { color: #94a3b8; }
.theme-light .hero-subtitle { color: #475569; }

/* ----------------------------------------- */
/* 6. INFINITE MARQUEE FOOTER & COPYRIGHT    */
/* ----------------------------------------- */
.footer-group {
  width: 100%;
  position: relative;
  z-index: 10;
  flex-shrink: 0;
}

.marquee-footer {
  width: 100%;
  border-top: 1px solid;
  padding: 24px 0;
  overflow: hidden;
  position: relative;
  transition: border-color var(--transition-speed), background-color var(--transition-speed);
}
.theme-dark .marquee-footer {
  border-color: rgba(255, 255, 255, 0.06);
  background-color: rgba(9, 9, 11, 0.4);
}
.theme-light .marquee-footer {
  border-color: rgba(15, 23, 42, 0.08);
  background-color: rgba(241, 245, 249, 0.4);
}

.marquee-track {
  display: flex;
  width: max-content;
}
.marquee-content {
  display: flex;
  gap: clamp(32px, 8vw, 90px);
  padding-right: clamp(32px, 8vw, 90px);
}

.marquee-item {
  display: flex;
  align-items: center;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: clamp(10px, 1.6vw, 13px);
}
.theme-dark .tech-name { color: #f4f4f5; }
.theme-light .tech-name { color: #1e293b; }

.theme-dark .marquee-item:hover .tech-name {
  color: var(--brand-accent);
  transition: color 0.2s ease;
}

@keyframes marquee-loop {
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-100%, 0, 0); }
}
.animate-marquee {
  animation: marquee-loop 28s linear infinite;
}

@media (prefers-reduced-motion: reduce) {
  .animate-marquee {
    animation-play-state: paused;
  }
}

.copyright-section {
  width: 100%;
  text-align: center;
  padding: 12px 20px;
  font-size: 11px;
  letter-spacing: 0.05em;
  border-top: 1px solid transparent;
  transition: color var(--transition-speed);
}
.theme-dark .copyright-section {
  color: rgba(255, 255, 255, 0.4);
  background-color: rgba(9, 9, 11, 0.6);
  border-top-color: rgba(255, 255, 255, 0.03);
}
.theme-light .copyright-section {
  color: rgba(15, 23, 42, 0.5);
  background-color: rgba(241, 245, 249, 0.6);
  border-top-color: rgba(15, 23, 42, 0.04);
}
</style>