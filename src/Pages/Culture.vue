<template>
  <div 
    :class="['culture-wrapper', isDarkMode ? 'theme-dark' : 'theme-light']"
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

    <main class="culture-main">
      <div class="ambient-glow"></div>

      <!-- HERO INTRO -->
      <section class="culture-hero">
        <span class="section-tag animate-fade-in">Life at WebHive</span>
        <h1 class="culture-title animate-title">
          Where Leads Feel Like <br>
          <span class="highlight-text">Friends, Not Bosses.</span>
        </h1>
        <p class="culture-subtitle animate-fade-in">
          We believe great products come from happy teams. At WebHive, every developer
          works in an environment built on trust, curiosity, and genuine friendship —
          where ideas are shared freely and growth happens together.
        </p>
      </section>

      <!-- PILLARS -->
      <section class="pillars-section">
        <div 
          v-for="pillar in pillars" 
          :key="pillar.title" 
          class="pillar-card animate-scroll-element"
        >
          <div class="pillar-icon">{{ pillar.icon }}</div>
          <h3>{{ pillar.title }}</h3>
          <p>{{ pillar.desc }}</p>
        </div>
      </section>

      <!-- ALTERNATING SHOWCASE ROWS -->
      <section class="showcase-rows">
        <div 
          v-for="row in showcaseRows" 
          :key="row.title"
          class="showcase-row animate-scroll-element"
          :class="{ 'row-reverse': row.reverse }"
        >
          <div class="row-media">
            <img :src="row.image" :alt="row.title" class="row-img" />
            <div class="row-img-tint"></div>
            <div class="row-glow-dot"></div>
          </div>

          <div class="row-content">
            <span class="row-tag">{{ row.tag }}</span>
            <h2 class="row-title">{{ row.title }}</h2>
            <p class="row-desc">{{ row.desc }}</p>
            <ul class="row-points">
              <li v-for="point in row.points" :key="point">
                <span class="point-dot"></span>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- CLOSING CTA -->
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

const menuItems = ['About', 'Services', 'Portfolio', 'Culture', 'Studio', 'Contact']

const pillars = ref([
  {
    icon: '🤝',
    title: 'Friends First',
    desc: 'Leads sit beside you, not above you. Every question is welcome, every idea gets heard.'
  },
  {
    icon: '🚀',
    title: 'Ship With Pride',
    desc: 'We care about clean code and crisp UI — every pixel and every function matters.'
  },
  {
    icon: '💡',
    title: 'Learn Together',
    desc: 'Pair programming, casual knowledge-sharing, and zero judgment for asking "how".'
  },
  {
    icon: '🎉',
    title: 'Celebrate Wins',
    desc: 'Shipped a feature? Closed a bug? We make sure every small win gets a shoutout.'
  }
])

const showcaseRows = ref([
  {
    tag: 'Daily Vibe',
    title: 'A Team That Codes Like Friends',
    desc: 'Our workspace feels less like an office and more like a hangout where great ideas happen. Music playing softly, casual banter between commits, and a lead who\'s always one desk away when you need a second pair of eyes.',
    points: [
      'Open-door policy — leads are approachable, always',
      'Relaxed dress code & flexible working hours',
      'Snacks, music, and good vibes during crunch time'
    ],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80',
    reverse: false
  },
  {
    tag: 'Growth Mindset',
    title: 'Enthusiastic Developers, Neat Code',
    desc: 'Every developer on our team genuinely loves what they build. That enthusiasm shows — in clean component structures, thoughtful naming, and code reviews that feel more like collaboration than critique.',
    points: [
      'Code reviews focused on learning, not blame',
      'Modern stacks: Vue, React, Laravel & more',
      'Every project treated like our own product'
    ],
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=900&q=80',
    reverse: true
  },
  {
    tag: 'Together We Build',
    title: 'Collaboration Over Hierarchy',
    desc: 'Big decisions are made together. Whiteboard sessions, quick stand-ups, and brainstorming over coffee — everyone\'s voice shapes the final product, from junior devs to senior leads.',
    points: [
      'Weekly team syncs that actually feel useful',
      'Cross-functional pairing between design & dev',
      'Mentorship baked into everyday workflow'
    ],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80',
    reverse: false
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
  // Row wrappers themselves should stay visible; children animate individually
  gsap.set('.showcase-row, .culture-cta', { opacity: 1 })

  gsap.fromTo('.animate-title', 
    { y: 50, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.2 }
  )

  gsap.fromTo('.animate-fade-in', 
    { opacity: 0, y: 25 }, 
    { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.4 }
  )

  gsap.from('.pillars-section .pillar-card', {
    scrollTrigger: {
      trigger: '.pillars-section',
      start: 'top 85%',
      toggleActions: 'play none none none'
    },
    y: 40,
    opacity: 0,
    duration: 0.7,
    stagger: 0.12,
    ease: 'power3.out'
  })

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

  // Refresh ScrollTrigger after images/layout settle so triggers are positioned correctly
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
.culture-wrapper {
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

.culture-wrapper *,
.culture-wrapper *::before,
.culture-wrapper *::after {
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
/* NAVBAR (unchanged from About/Portfolio)   */
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
  .consult-btn-overlay {
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    padding: 6px clamp(14px, 2.5vw, 24px);
  }
}

/* ----------------------------------------- */
/* MAIN CANVAS                               */
/* ----------------------------------------- */
.culture-main {
  flex: 1 1 0;
  position: relative;
  z-index: 10;
  width: 100%;
  padding: calc(clamp(20px, 4vw, 50px) + clamp(14px, 2vw, 24px) + 56px) clamp(16px, 5vw, 60px) 60px;
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
}
.theme-light .ambient-glow {
  opacity: 0.15;
  background-color: #a7f3d0;
}

/* ----------------------------------------- */
/* HERO INTRO SECTION                        */
/* ----------------------------------------- */
.culture-hero {
  max-width: 920px;
  margin: 40px auto 90px;
  text-align: center;
  position: relative;
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

.culture-title {
  font-size: clamp(2.4rem, 6.5vw, 5rem);
  font-weight: 950;
  line-height: 1.15;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  margin-bottom: 28px;
  color: #ffffff;
}
.theme-light .culture-title { color: #0f172a; }

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

.culture-subtitle {
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.7;
  max-width: 760px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.65);
}
.theme-light .culture-subtitle { color: #475569; }

/* ----------------------------------------- */
/* PILLARS GRID                              */
/* ----------------------------------------- */
.pillars-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 24px;
  max-width: 1300px;
  margin: 0 auto 110px;
}

.pillar-card {
  padding: 32px 28px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.01);
  border: 1px solid rgba(255, 255, 255, 0.04);
  text-align: left;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s;
}
.theme-light .pillar-card {
  background-color: #ffffff;
  border-color: rgba(15, 23, 42, 0.06);
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.01);
}
.pillar-card:hover {
  transform: translateY(-6px);
  border-color: var(--brand-accent);
}

.pillar-icon {
  font-size: 32px;
  margin-bottom: 18px;
  display: inline-block;
}
.pillar-card h3 {
  font-size: 19px;
  font-weight: 800;
  margin-bottom: 10px;
}
.pillar-card p {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
}
.theme-light .pillar-card p { color: #475569; }

/* ----------------------------------------- */
/* ALTERNATING SHOWCASE ROWS                 */
/* ----------------------------------------- */
.showcase-rows {
  max-width: 1300px;
  margin: 0 auto 110px;
  display: flex;
  flex-direction: column;
  gap: 100px;
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
  background-color: rgba(0, 0, 0, 0.1);
}
.theme-light .row-media {
  border-color: rgba(15, 23, 42, 0.08);
}

.row-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
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
  pointer-events: none;
}
.theme-light .row-glow-dot { opacity: 0.18; }

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
.theme-light .row-tag { color: #059669; font-weight: 600; }

.row-title {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
  line-height: 1.2;
}

.row-desc {
  font-size: 15px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  margin-bottom: 24px;
}
.theme-light .row-desc { color: #475569; }

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
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85);
}
.theme-light .row-points li { color: #1e293b; }

.point-dot {
  flex-shrink: 0;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: var(--brand-accent);
  box-shadow: 0 0 8px var(--brand-accent);
}

/* ----------------------------------------- */
/* CLOSING CTA SECTION                       */
/* ----------------------------------------- */
.culture-cta {
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
  padding: 80px 40px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  background-color: rgba(255, 255, 255, 0.01);
  overflow: hidden;
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
.theme-light .cta-glow { opacity: 0.15; background-color: #a7f3d0; }

.cta-title {
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 900;
  letter-spacing: -0.02em;
  margin-bottom: 18px;
  position: relative;
  z-index: 1;
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
.theme-light .cta-subtitle { color: #475569; }

.btn-start-project {
  position: relative;
  z-index: 1;
  text-decoration: none;
  display: inline-block;
  background-color: #ffffff;
  color: #0b0c10;
  border: 1px solid transparent;
  padding: 18px 38px;
  font-weight: 700;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s, transform 0.2s;
}
.theme-light .btn-start-project { background-color: #0f172a; color: #ffffff; }
.btn-start-project:hover {
  background-color: var(--brand-accent);
  color: #0b0c10;
  transform: translateY(-2px);
}

/* ----------------------------------------- */
/* SCROLL-IN ANIMATION (matches About.vue)   */
/* ----------------------------------------- */
.animate-scroll-element {
  opacity: 0;
}

/* ----------------------------------------- */
/* MINIMALIST COPYRIGHT FOOTER               */
/* ----------------------------------------- */
.footer-group { width: 100%; position: relative; z-index: 10; margin-top: auto; }
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

/* ----------------------------------------- */
/* RESPONSIVE TWEAKS                         */
/* ----------------------------------------- */
@media (max-width: 540px) {
  .culture-hero { margin-bottom: 60px; }
  .pillars-section { margin-bottom: 70px; }
  .showcase-rows { gap: 60px; margin-bottom: 70px; }
  .culture-cta { padding: 50px 24px; }
}
</style>
