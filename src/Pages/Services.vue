<template>
  <div 
    :class="['services-wrapper', isDarkMode ? 'theme-dark' : 'theme-light']"
    @mousemove="handleMouseMove"
  >
    <div class="bg-overlay">
      <div 
        class="bg-grid-lines"
        :style="{ transform: `translate(${parallax.bgX}px, ${parallax.bgY}px)` }"
      ></div>
    </div>

    <!-- Exact Copy of Fixed Navbar Code from culture.vue -->
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
          aria-label="Toggle Theme"
        >
          <div 
            class="toggle-thumb"
            :class="{ 'toggle-active': isDarkMode }"
          >
            <span class="toggle-icon">{{ isDarkMode ? '🌙' : '☀️' }}</span>
          </div>
        </button>

        <button 
          @click="toggleMenu" 
          class="menu-trigger"
          :class="{ 'menu-active': isMenuOpen }"
        >
          <span class="burger-line line-top"></span>
          <span class="burger-line line-mid"></span>
          <span class="burger-line line-bot"></span>
        </button>
      </div>
    </header>

    <!-- Exact Copy of Navigation Overlay from culture.vue -->
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
            <router-link to="/consultation" class="consult-btn-overlay" @click="toggleMenu">
              Consultation
            </router-link>
          </div>
        </nav>
      </div>
    </Transition>

    <main class="services-main">
      <div class="ambient-glow"></div>

      <!-- SERVICES HERO INTRO -->
      <section class="services-hero">
        <span class="section-tag animate-fade-in">Our Services</span>
        <h1 class="services-title animate-title">
          High-Performance <br>
          <span class="highlight-text">Digital Architecture.</span>
        </h1>
        <p class="services-subtitle animate-fade-in">
          We combine cutting-edge frontend engineering with robust system design to build highly secure, beautiful, and fluid digital platforms. Explore our technical capabilities below.
        </p>
      </section>

      <!-- SERVICES SHOWCASE GRID / LIST -->
      <section class="showcase-rows">
        <div 
          v-for="service in servicesList" 
          :key="service.title"
          class="showcase-row animate-scroll-element"
          :class="{ 'row-reverse': service.reverse }"
        >
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

      <!-- CLOSING CTA - Layer Stack Corrected to Ensure Clicks Register -->
      <section class="services-cta animate-scroll-element">
        <div class="cta-glow"></div>
        <h2 class="cta-title">
          Ready to Elevate Your <span class="highlight-text">Digital Stack</span>?
        </h2>
        <p class="cta-subtitle">
          Let's align your product vision with production-grade architectural builds. Partner with WebHive to construct cleaner infrastructure.
        </p>
        <router-link to="/consultation" class="btn-start-project">
          Start a Project
        </router-link>
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
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = ref(true)
const isMenuOpen = ref(false)
const currentYear = new Date().getFullYear()

const menuItems = ['Home', 'About', 'Portfolio', 'Culture', 'Studio', 'Contact']

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
})
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
/* CORE WRAPPER & BACKGROUND                 */
/* ----------------------------------------- */
.services-wrapper {
  --brand-accent: #00ffa3;
  --transition-speed: 0.5s;
  width: 100%;
  min-height: 100vh;
  position: relative;
  font-family: system-ui, -apple-system, sans-serif;
  transition: background-color var(--transition-speed), color var(--transition-speed);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.services-wrapper *,
.services-wrapper *::before,
.services-wrapper *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.theme-dark { background-color: #0b0c10; color: #ffffff; }
.theme-light { background-color: #f4f6f9; color: #0f172a; }

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

/* ----------------------------------------- */
/* NAVBAR ACCORDING TO CULTURE.VUE           */
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

.theme-light .logo { color: #0f172a; }
.logo .dot { color: var(--brand-accent); }

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
  .toggle-active { transform: translateX(15px); }
}
.toggle-icon { font-size: 9px; user-select: none; }

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
.theme-dark .burger-line { background-color: #ffffff; }
.theme-light .burger-line { background-color: #0f172a; }

.menu-active .line-top { transform: translateY(5px) rotate(45deg); background-color: var(--brand-accent) !important; }
.menu-active .line-mid { opacity: 0; }
.menu-active .line-bot { transform: translateY(-5px) rotate(-45deg); background-color: var(--brand-accent) !important; }

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
.theme-dark .nav-overlay { background-color: rgba(11, 12, 16, 0.96); }
.theme-light .nav-overlay { background-color: rgba(255, 255, 255, 0.96); }

.nav-links-container {
  display: flex;
  flex-direction: column;
  gap: clamp(8px, 2.5vh, 24px);
  width: 100%;
  max-width: 800px;
}
.menu-item-wrap { overflow: hidden; display: flex; align-items: center; }
.overlay-btn-item { margin-top: clamp(4px, 1vh, 12px); }
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

/* ----------------------------------------- */
/* SERVICES CANVAS                           */
/* ----------------------------------------- */
.services-main {
  flex: 1 1 0;
  position: relative;
  z-index: 10;
  width: 100%;
  padding: calc(60px + clamp(10px, 2vw, 22px) + 50px) clamp(16px, 5vw, 60px) 60px;
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
.theme-light .ambient-glow { opacity: 0.15; background-color: #a7f3d0; }

.services-hero {
  max-width: 920px;
  margin: 40px auto 90px;
  text-align: center;
  position: relative;
  z-index: 5;
}

.section-tag {
  font-family: monospace;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--brand-accent);
  display: inline-block;
  margin-bottom: 24px;
}
.theme-light .section-tag { color: #059669; font-weight: 600; }

.services-title {
  font-size: clamp(2.4rem, 6.5vw, 5rem);
  font-weight: 950;
  line-height: 1.15;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  margin-bottom: 28px;
  color: #ffffff;
}
.theme-light .services-title { color: #0f172a; }

.highlight-text {
  background: linear-gradient(135deg, #ffffff 20%, var(--brand-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.theme-light .highlight-text {
  background: linear-gradient(135deg, #0f172a 40%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.services-subtitle {
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.7;
  max-width: 760px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.65);
}
.theme-light .services-subtitle { color: #475569; }

/* ----------------------------------------- */
/* ALTERNATING SHOWCASE GRID                 */
/* ----------------------------------------- */
.showcase-rows {
  max-width: 1300px;
  margin: 0 auto 110px;
  display: flex;
  flex-direction: column;
  gap: 100px;
  position: relative;
  z-index: 5;
}
.showcase-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(28px, 5vw, 70px);
  align-items: center;
}
.row-reverse { direction: rtl; }
.row-reverse .row-content, .row-reverse .row-media { direction: ltr; }

@media (max-width: 860px) {
  .showcase-row, .row-reverse { grid-template-columns: 1fr; direction: ltr; }
  .row-reverse .row-media { order: -1; }
}

.row-media {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.06);
}
.theme-light .row-media { border-color: rgba(15, 23, 42, 0.08); }
.row-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
.row-media:hover .row-img { transform: scale(1.04); }

.row-img-tint {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(0, 255, 163, 0.12), transparent 60%);
  pointer-events: none;
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

.row-content { display: flex; flex-direction: column; }
.row-tag {
  font-family: monospace;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--brand-accent);
  margin-bottom: 14px;
}
.theme-light .row-tag { color: #059669; font-weight: 600; }
.row-title { font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 900; margin-bottom: 16px; }
.row-desc { font-size: 15px; line-height: 1.7; color: rgba(255, 255, 255, 0.65); margin-bottom: 24px; }
.theme-light .row-desc { color: #475569; }

.row-points { display: flex; flex-direction: column; gap: 12px; list-style: none; }
.row-points li { display: flex; align-items: center; gap: 12px; font-size: 14px; color: rgba(255, 255, 255, 0.85); }
.theme-light .row-points li { color: #1e293b; }
.point-dot { width: 7px; height: 7px; border-radius: 50%; background-color: var(--brand-accent); box-shadow: 0 0 8px var(--brand-accent); }

/* ----------------------------------------- */
/* CLOSING CTA BLOCK (FIXED HITBOX CONTEXT)   */
/* ----------------------------------------- */
.services-cta {
  position: relative;
  z-index: 30; /* Elevated above background layouts and blurring elements */
  pointer-events: auto;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 80px 40px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background-color: rgba(255, 255, 255, 0.01);
  overflow: hidden;
}
.theme-light .services-cta { background-color: #ffffff; border-color: rgba(15, 23, 42, 0.06); }
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

.cta-title { font-size: clamp(1.8rem, 4vw, 3rem); font-weight: 900; margin-bottom: 18px; position: relative; z-index: 5; }
.cta-subtitle { font-size: clamp(14px, 1.6vw, 17px); line-height: 1.6; color: rgba(255, 255, 255, 0.65); max-width: 560px; margin: 0 auto 36px; position: relative; z-index: 5; }
.theme-light .cta-subtitle { color: #475569; }

.btn-start-project {
  position: relative;
  z-index: 10; /* Placed over internal glow layer */
  pointer-events: auto !important; /* Explicit browser directive to accept click actions */
  text-decoration: none;
  display: inline-block;
  background-color: #ffffff;
  color: #0b0c10;
  padding: 18px 38px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  transition: background-color 0.3s, transform 0.2s;
}
.theme-light .btn-start-project { background-color: #0f172a; color: #ffffff; }
.btn-start-project:hover { background-color: var(--brand-accent); color: #0b0c10; transform: translateY(-2px); }

.animate-scroll-element { opacity: 0; }

/* ----------------------------------------- */
/* FOOTER                                    */
/* ----------------------------------------- */
.footer-group { width: 100%; position: relative; z-index: 10; margin-top: auto; }
.copyright-section {
  width: 100%;
  text-align: center;
  padding: 30px 20px;
  font-size: 11px;
  border-top: 1px solid;
}
.theme-dark .copyright-section { color: rgba(255, 255, 255, 0.4); background-color: rgba(9, 9, 11, 0.6); border-top-color: rgba(255, 255, 255, 0.05); }
.theme-light .copyright-section { color: rgba(15, 23, 42, 0.5); background-color: rgba(241, 245, 249, 0.6); border-top-color: rgba(15, 23, 42, 0.06); }
</style>