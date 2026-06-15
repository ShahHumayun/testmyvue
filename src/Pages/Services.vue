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

    <main class="services-container">
      <div 
        class="ambient-glow"
        :style="{ transform: `translate(${parallax.headingX * 1.2}px, ${parallax.headingY * 1.2}px)` }"
      ></div>

      <header class="section-header">
        <span class="section-tag animate-text">Capabilities</span>
        <h1 class="section-title animate-text">Our Services</h1>
        <p class="section-subtitle animate-text">Transforming complex ideas into high-performance digital ecosystems.</p>
      </header>

      <div class="services-grid">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          class="service-card"
          @mouseenter="animateCardIn(index)"
          @mouseleave="animateCardOut(index)"
          :ref="el => cardRefs[index] = el"
        >
          <div class="card-border-glow"></div>
          <div class="card-content">
            <div class="card-top">
              <span class="service-number">0{{ index + 1 }}</span>
              <div class="service-icon" v-html="service.icon"></div>
            </div>
            
            <h3 class="service-name">{{ service.title }}</h3>
            <p class="service-desc">{{ service.description }}</p>
            
            <router-link :to="service.link" class="card-footer-action">
              <span class="action-text">Explore Track</span>
              <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </main>

    <footer class="footer-group">
      <div class="copyright-section">
        <p>&copy; {{ currentYear }} WebHive Technologies. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, onBeforeUpdate, onMounted } from 'vue'
import gsap from 'gsap'

const isDarkMode = ref(true)
const isMenuOpen = ref(false)

const menuItems = ['About', 'Services', 'Portfolio', 'Culture', 'Studio', 'Contact']
const currentYear = new Date().getFullYear()

const services = ref([
  {
    title: 'Web Development',
    description: 'Engineering ultra-fast, robust, and scalable full-stack web applications tailored for modern architecture.',
    link: '/services/web-development',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'
  },
  {
    title: 'Web Designing',
    description: 'Crafting immersive digital spaces with glassmorphism, responsive aesthetics, and premium layouts.',
    link: '/services/web-designing',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path><path d="M12 16V12"></path><path d="M8 12H16"></path></svg>'
  },
  {
    title: 'App Development',
    description: 'Building premium multi-platform native mobile applications running seamless performance on iOS and Android.',
    link: '/services/app-development',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>'
  },
  {
    title: 'E-commerce Solutions',
    description: 'Architecting dynamic storefronts optimized cleanly for conversion rates, database integrity, and workflows.',
    link: '/services/ecommerce-solutions',
    icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>'
  }
])

const cardRefs = ref([])
onBeforeUpdate(() => {
  cardRefs.value = []
})

const parallax = reactive({
  rotateX: 0,
  rotateY: 0,
  headingX: 0,
  headingY: 0,
  bgX: 0,
  bgY: 0
})

onMounted(() => {
  // Beautiful fade upside animation for header text elements
  gsap.fromTo('.animate-text', 
    { 
      opacity: 0, 
      y: 30 
    }, 
    { 
      opacity: 1, 
      y: 0, 
      duration: 1, 
      stagger: 0.15, 
      ease: 'power3.out' 
    }
  )
})

const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const { innerWidth, innerHeight } = window

  const xWeight = (clientX / innerWidth) - 0.5
  const yWeight = (clientY / innerHeight) - 0.5

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

const animateCardIn = (index) => {
  const card = cardRefs.value[index]
  if (!card) return
  
  gsap.to(card, {
    y: -8,
    scale: 1.02,
    duration: 0.3,
    ease: 'power2.out',
    overwrite: 'auto'
  })
  gsap.to(card.querySelector('.card-border-glow'), {
    opacity: 1,
    duration: 0.3
  })
  gsap.to(card.querySelector('.arrow-icon'), {
    x: 4,
    color: '#00ffa3',
    duration: 0.2
  })
}

const animateCardOut = (index) => {
  const card = cardRefs.value[index]
  if (!card) return

  gsap.to(card, {
    y: 0,
    scale: 1,
    duration: 0.3,
    ease: 'power2.out',
    overwrite: 'auto'
  })
  gsap.to(card.querySelector('.card-border-glow'), {
    opacity: 0,
    duration: 0.3
  })
  gsap.to(card.querySelector('.arrow-icon'), {
    x: 0,
    color: 'inherit',
    duration: 0.2
  })
}

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
  overflow-x: hidden !important;
  height: 100%;
  width: 100%;
}

/* ----------------------------------------- */
/* 1. CORE SETUP & VARIABLES                 */
/* ----------------------------------------- */
.hero-wrapper {
  --brand-accent: #00ffa3;
  --transition-speed: 0.5s;
  
  position: relative;
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  overflow-x: hidden;
  
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

/* ----------------------------------------- */
/* 2. BACKGROUND INTERACTIVE NET GRID        */
/* ----------------------------------------- */
.bg-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.2;
  pointer-events: none;
  overflow: hidden;
  z-index: 0;
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
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
  position: relative;
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
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s, background-color 0.3s;
  transform-origin: center center;
}
.theme-dark .burger-line { background-color: #ffffff; }
.theme-light .burger-line { background-color: #0f172a; }

.menu-active .line-top { 
  position: absolute;
  transform: rotate(45deg); 
  background-color: var(--brand-accent) !important; 
}
.menu-active .line-mid { 
  opacity: 0; 
}
.menu-active .line-bot { 
  position: absolute;
  transform: rotate(-45deg); 
  background-color: var(--brand-accent) !important; 
}

/* ----------------------------------------- */
/* 4. NAVIGATION OVERLAY                     */
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
  height: 100%;
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
/* 5. SERVICES CONTENT DESIGN                */
/* ----------------------------------------- */
.services-container {
  flex: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: calc(clamp(20px, 4vh, 40px) + clamp(10px, 2vw, 22px) + 50px) clamp(16px, 4vw, 40px) clamp(20px, 4vh, 40px);
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.ambient-glow {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: min(600px, 80vw);
  height: min(600px, 80vw);
  border-radius: 50%;
  filter: blur(160px);
  -webkit-filter: blur(160px);
  pointer-events: none;
  opacity: 0.15;
  z-index: -1;
}
.theme-dark .ambient-glow { background-color: var(--brand-accent); mix-blend-mode: screen; }
.theme-light .ambient-glow { background-color: #a7f3d0; mix-blend-mode: multiply; opacity: 0.25; }

.section-header {
  text-align: center;
  margin-bottom: clamp(30px, 5vh, 50px);
}

.section-tag {
  font-family: monospace;
  font-size: clamp(10px, 1.5vw, 12px);
  color: var(--brand-accent);
  text-transform: uppercase;
  letter-spacing: 0.3em;
  display: inline-block;
  margin-bottom: 8px;
}
.theme-light .section-tag {
  color: #059669;
  font-weight: 600;
}

.section-title {
  font-size: clamp(2.2rem, 6vw, 4.5rem);
  font-weight: 950;
  letter-spacing: -0.03em;
  text-transform: uppercase;
  line-height: 1.1;
  margin-bottom: 12px;
  background: linear-gradient(to right, #ffffff 40%, var(--brand-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.theme-light .section-title {
  background: linear-gradient(to right, #0f172a 50%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: clamp(13px, 1.8vw, 16px);
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.5;
}
.theme-dark .section-subtitle { color: #94a3b8; }
.theme-light .section-subtitle { color: #475569; }

/* ----------------------------------------- */
/* 6. FIXED FORCE SINGLE ROW CARDS GRID      */
/* ----------------------------------------- */
.services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: clamp(12px, 2vw, 24px);
  width: 100%;
}

.service-card {
  position: relative;
  border-radius: 12px;
  padding: clamp(18px, 2.5vw, 28px);
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.4s, border-color 0.4s;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 640px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}

.theme-dark .service-card {
  background-color: rgba(24, 24, 27, 0.4);
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.theme-light .service-card {
  background-color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(15, 23, 42, 0.06);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
}

.card-border-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  pointer-events: none;
  border-radius: 12px;
  padding: 1px;
  background: linear-gradient(135deg, var(--brand-accent), transparent 60%);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  z-index: 2;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.service-number {
  font-family: monospace;
  font-size: 14px;
  font-weight: 700;
  opacity: 0.3;
  letter-spacing: 0.1em;
}

.service-icon {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: transform 0.3s;
}
.service-icon :deep(svg) {
  width: 24px;
  height: 24px;
}
.theme-dark .service-icon {
  background-color: rgba(0, 255, 163, 0.05);
  color: var(--brand-accent);
}
.theme-light .service-icon {
  background-color: rgba(5, 150, 105, 0.08);
  color: #059669;
}

.service-card:hover .service-icon {
  transform: rotate(-5deg) scale(1.05);
}

.service-name {
  font-size: clamp(16px, 1.8vw, 20px);
  font-weight: 800;
  letter-spacing: -0.01em;
  margin-bottom: 12px;
}
.theme-dark .service-name { color: #f4f4f5; }
.theme-light .service-name { color: #0f172a; }

.service-desc {
  font-size: 13.5px;
  line-height: 1.6;
  margin-bottom: 32px;
  flex-grow: 1;
}
.theme-dark .service-desc { color: #a1a1aa; }
.theme-light .service-desc { color: #475569; }

.card-footer-action {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  width: fit-content;
  transition: color 0.2s;
}
.theme-dark .card-footer-action { color: rgba(255, 255, 255, 0.5); }
.theme-light .card-footer-action { color: #475569; }
.card-footer-action:hover { color: var(--brand-accent); }

.arrow-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.2s, color 0.2s;
}

/* ----------------------------------------- */
/* 7. COPYRIGHT FOOTER                       */
/* ----------------------------------------- */
.footer-group {
  width: 100%;
  position: relative;
  z-index: 10;
  flex-shrink: 0;
  margin-top: auto; /* Pushes footer tightly to the absolute bottom */
}

.copyright-section {
  width: 100%;
  text-align: center;
  padding: 24px 20px;
  font-size: 11px;
  letter-spacing: 0.05em;
  border-top: 1px solid transparent;
  transition: color var(--transition-speed);
}
.theme-dark .copyright-section {
  color: rgba(255, 255, 255, 0.4);
  background-color: rgba(9, 9, 11, 0.4);
  border-top-color: rgba(255, 255, 255, 0.03);
}
.theme-light .copyright-section {
  color: rgba(15, 23, 42, 0.5);
  background-color: rgba(241, 245, 249, 0.4);
  border-top-color: rgba(15, 23, 42, 0.04);
}
</style>