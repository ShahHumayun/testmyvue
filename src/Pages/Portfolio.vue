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
      <a href="#" class="company-branding logo">
        WEBHIVE<span class="dot">.</span>
      </a>

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
              :to="item === 'Home' ? '/' : '/' + item.toLowerCase()" 
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

      <section id="portfolio" class="portfolio-section">
        <div class="portfolio-header animated-fade-up">
          <span class="section-tag">Portfolio</span>
          <h2 class="section-title">
            Our <span class="accent-text">Work</span>
          </h2>
          <p class="section-subtitle">A showcase of premium full-stack applications and high-performance digital ecosystems.</p>
        </div>
        
        <div class="portfolio-grid">
          <div 
            v-for="(project, idx) in showcaseProjects" 
            :key="idx" 
            class="glass-card project-card animated-fade-up"
            :style="{ animationDelay: `${0.15 + (idx * 0.08)}s` }"
          >
            <div class="project-media">
              <img :src="project.image" :alt="project.name" class="project-img-asset" />
              <div class="img-overlay-tint"></div>
            </div>

            <div class="project-meta">
              <div class="project-type">{{ project.type }}</div>
              <h3 class="project-heading">{{ project.name }}</h3>
              <p class="project-description">{{ project.desc }}</p>
              
              <div class="tech-stack">
                <span v-for="tech in project.tags" :key="tech" class="tech-pill">
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="project-action" v-if="project.url">
              <a :href="project.url" target="_blank" class="navigation-link">
                <span>Launch Platform</span>
                <svg class="nav-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </a>
            </div>
            <div class="project-action" v-else>
              <span class="internal-link">
                <span>Core System Architecture</span>
                <span class="status-indicator-dot"></span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer-group">
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

const menuItems = ['Home', 'About', 'Services', 'Culture', 'Studio', 'Contact']
const currentYear = new Date().getFullYear()

const showcaseProjects = ref([
  {
    name: 'Replacement Glass',
    type: 'Web Platform Architecture',
    desc: 'High-performance interactive web presence deployed with an optimized, responsive custom checkout mapping framework.',
    tags: ['Vue.js', 'Tailwind CSS', 'Vite', 'GSAP Blueprint'],
    url: 'https://www.replacementglass.co/',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Wine Openers Canada',
    type: 'E-Commerce Platform',
    desc: 'Premium commercial digital interface built to ensure lightning-fast item handling, layout responsiveness, and conversion mechanics.',
    tags: ['Liquid', 'Tailwind UX', 'Performance Engineering'],
    url: 'https://wineopeners.ca/',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Taylor Allergy Portal',
    type: 'Full-Stack Application',
    desc: 'Secure digital ecosystem processing customer profiles and healthcare compliance rules smoothly without visual overhead.',
    tags: ['Vue.js 3', 'Laravel Core', 'MySQL DB', 'State Isolation'],
    url: '',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Magento Ecosystem Connector',
    type: 'Integration Module',
    desc: 'Deep-level automated microservice pipeline engineered to safely link cross-platform data stores and transactional inventories.',
    tags: ['Laravel API', 'Magento Core', 'Redis Queue', 'JSON Sync'],
    url: '',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Enterprise Expense Tracker',
    type: 'Fintech Tool',
    desc: 'Dynamic single-page analytics application featuring clean responsive ledger tables and interactive asset allocation matrices.',
    tags: ['Vue.js Composition', 'Tailwind Grid', 'Local Storage Engines'],
    url: '',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80'
  },
  {
    name: 'Omni Book Library',
    type: 'Content Catalog System',
    desc: 'Structured inventory manager utilizing precise relational indices to pull, categorize, and update library inventories in real-time.',
    tags: ['Vue Architecture', 'Tailwind Elements', 'SQL Relations'],
    url: '',
    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=600&q=80'
  }
])

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
  font-family: system-ui, -apple-system, sans-serif;
  box-sizing: border-box;
  z-index: 1;
  overflow-x: hidden;
  transition: background-color var(--transition-speed), color var(--transition-speed);
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
/* 2. FLOATING FIXED NAVBAR ARCHITECTURE     */
/* ----------------------------------------- */
.navbar {
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  width: 92%;
  max-width: 1200px;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
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

/* Inserted accurate culture.vue navbar branding styles */
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
  width: 100%;
  height: 100dvh;
  overflow: hidden !important;
  padding: clamp(24px, 5vh, 48px) clamp(20px, 6vw, 48px);
  padding-top: max(clamp(24px, 5vh, 48px), env(safe-area-inset-top));
  padding-bottom: max(clamp(24px, 5vh, 48px), env(safe-area-inset-bottom));
}
.theme-dark .nav-overlay { background-color: rgba(11, 12, 16, 0.96); }
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
  will-change: transform;
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
/* 3. PORTFOLIO SHOWCASE MAIN CANVAS         */
/* ----------------------------------------- */
.hero-main {
  flex: 1 1 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: relative;
  z-index: 10;
  width: 100%;
  padding: calc(60px + clamp(10px, 2vw, 22px) + 50px) clamp(20px, 5vw, 60px) 60px;
}

.ambient-glow {
  position: absolute;
  width: min(700px, 85vw);
  height: min(700px, 85vw);
  background-color: var(--brand-accent);
  border-radius: 50%;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  filter: blur(150px);
  opacity: 0.08;
  pointer-events: none;
}
.theme-light .ambient-glow {
  opacity: 0.15;
  background-color: #a7f3d0;
}

.portfolio-section {
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
}

.portfolio-header {
  text-align: center;
  margin-bottom: clamp(32px, 4vw, 54px);
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
}

.section-tag {
  font-family: monospace;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--brand-accent);
  display: inline-block;
  margin-bottom: 16px;
}
.theme-light .section-tag {
  color: #059669;
  font-weight: 600;
}

.section-title {
  font-size: clamp(2.4rem, 5.5vw, 4.5rem);
  font-weight: 900;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 18px;
  line-height: 1.1;
}
.theme-light .section-title { color: #0f172a; }

.accent-text {
  background: linear-gradient(135deg, #ffffff 20%, var(--brand-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.theme-light .accent-text {
  background: linear-gradient(135deg, #0f172a 40%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.section-subtitle {
  font-size: clamp(14px, 1.2vw, 17px);
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.65);
  max-width: 540px;
  margin: 0 auto;
}
.theme-light .section-subtitle { color: #475569; }

/* ----------------------------------------- */
/* CSS TRANSITION ENGINES (FADE-UP SETUP)    */
/* ----------------------------------------- */
.animated-fade-up {
  opacity: 0;
  animation: visualFadeUp 0.8s cubic-bezier(0.25, 1, 0.5, 1) forwards;
}

@keyframes visualFadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ----------------------------------------- */
/* 4. GRID ARCHITECTURE & RESPONSIVE SCALING */
/* ----------------------------------------- */
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: clamp(20px, 2.5vw, 32px);
  width: 100%;
  padding-bottom: 40px;
}

@media (min-width: 680px) {
  .portfolio-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1140px) {
  .portfolio-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.glass-card {
  width: 100%;
  border-radius: 8px;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
              border-color 0.3s ease,
              box-shadow 0.4s ease,
              background-color var(--transition-speed);
}
.theme-light .glass-card {
  background-color: #ffffff;
  border-color: rgba(15, 23, 42, 0.06);
}

.glass-card:hover {
  transform: translateY(-6px);
  border-color: var(--brand-accent);
  box-shadow: 0 16px 36px rgba(0, 255, 163, 0.05);
}
.theme-light .glass-card:hover {
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);
}

.project-media {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.1);
}

.project-img-asset {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.glass-card:hover .project-img-asset {
  transform: scale(1.03);
}

.img-overlay-tint {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, rgba(11, 12, 16, 0.3));
  pointer-events: none;
}

.project-meta {
  display: flex;
  flex-direction: column;
  padding: 24px 24px 0 24px;
  flex-grow: 1;
}

.project-type {
  font-family: monospace;
  font-size: 12px;
  text-transform: uppercase;
  color: var(--brand-accent);
  letter-spacing: 0.05em;
  margin-bottom: 12px;
  font-weight: 600;
}
.theme-light .project-type {
  color: #059669;
}

.project-heading {
  font-size: clamp(19px, 1.6vw, 22px);
  font-weight: 800;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
}

.project-description {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 20px;
  flex-grow: 1;
}
.theme-light .project-description { color: #475569; }

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.tech-pill {
  font-family: monospace;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.8);
}
.glass-card:hover .tech-pill {
  border-color: rgba(0, 255, 163, 0.15);
}
.theme-light .tech-pill {
  background-color: #f1f5f9;
  color: #334155;
}

.project-action {
  margin-top: auto;
  padding: 20px 24px 24px 24px;
}

.navigation-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--brand-accent);
  font-weight: 700;
  font-size: 13.5px;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.2s;
}
.theme-light .navigation-link {
  color: #059669;
}
.navigation-link:hover {
  opacity: 0.85;
}
.navigation-link:hover .nav-arrow {
  transform: translate(2px, -2px);
}
.nav-arrow {
  width: 14px;
  height: 14px;
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.enterprise-link, .internal-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 12.5px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.35);
  user-select: none;
}
.theme-light .internal-link {
  color: rgba(15, 23, 42, 0.45);
}
.status-indicator-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
}
.theme-light .status-indicator-dot {
  background: rgba(15, 23, 42, 0.3);
}

/* ----------------------------------------- */
/* 5. MINIMALIST COPYRIGHT FOOTER            */
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
</style>