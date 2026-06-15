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
        <router-link to="/" class="consult-btn">
          Home
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
            <router-link to="/" @click="toggleMenu" class="consult-btn-overlay">
              Home
            </router-link>
          </div>
        </nav>
      </div>
    </Transition>

    <main class="hero-main page-scroll-container">
      <div 
        class="ambient-glow"
        :style="{ transform: `translate(${parallax.bgX * -0.5}px, ${parallax.bgY * -0.5}px)` }"
      ></div>

      <section id="contact" class="contact-section">
        <div class="contact-header">
          <h2 class="contact-title">
            Start a <span class="accent">Conversation</span>
          </h2>
          <p class="contact-subtitle">
            Reach out at atiq@web-hive.com or call +92 333 5499639
          </p>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <div class="form-row">
            <div class="input-container">
              <input
                v-model="form.name"
                type="text"
                placeholder="Your Name"
                class="form-input"
                :class="{ 'input-validation-failed': fieldErrors.name }"
                @input="fieldErrors.name = ''"
              />
              <span v-if="fieldErrors.name" class="validation-message">{{ fieldErrors.name }}</span>
            </div>

            <div class="input-container">
              <input
                v-model="form.email"
                type="email"
                placeholder="Email Address"
                class="form-input"
                :class="{ 'input-validation-failed': fieldErrors.email }"
                @input="fieldErrors.email = ''"
              />
              <span v-if="fieldErrors.email" class="validation-message">{{ fieldErrors.email }}</span>
            </div>
          </div>
          
          <div class="input-container field-group">
            <label class="input-label">What type of solution do you need?</label>
            <div class="pill-grid">
              <button 
                type="button" 
                :class="['pill-btn', form.projectType === 'web' ? 'active' : '']"
                @click="form.projectType = 'web'"
              >
                🌐 Web-Based Solution
              </button>
              <button 
                type="button" 
                :class="['pill-btn', form.projectType === 'app' ? 'active' : '']"
                @click="form.projectType = 'app'"
              >
                📱 App-Based Solution
              </button>
              <button 
                type="button" 
                :class="['pill-btn', form.projectType === 'both' ? 'active' : '']"
                @click="form.projectType = 'both'"
              >
                🚀 Both / Hybrid
              </button>
            </div>
          </div>

          <div class="input-container field-group">
            <label class="input-label">Estimated Budget (USD)</label>
            <div class="pill-grid budgets">
              <button 
                type="button" 
                v-for="tier in ['<$1k', '$1k - $5k', '$5k - $10k', '$10k+']" 
                :key="tier"
                :class="['pill-btn tier', form.budget === tier ? 'active' : '']"
                @click="form.budget = tier"
              >
                {{ tier }}
              </button>
            </div>
          </div>

          <div class="input-container">
            <textarea
              v-model="form.message"
              placeholder="Tell us about your goals"
              rows="5"
              class="form-input form-textarea"
              :class="{ 'input-validation-failed': fieldErrors.message }"
              @input="fieldErrors.message = ''"
            ></textarea>
            <span v-if="fieldErrors.message" class="validation-message">{{ fieldErrors.message }}</span>
          </div>

          <div v-if="apiResponse.message" :class="['api-status-banner', apiResponse.status]">
            {{ apiResponse.message }}
          </div>

          <button type="submit" class="submit-btn" :disabled="submissionPending">
            {{ submissionPending ? 'Processing Request...' : 'Send Message' }}
          </button>
        </form>
      </section>
    </main>

    <footer class="footer-group">
      <div class="copyright-section">
        <p>&copy; {{ new Date().getFullYear() }} WebHive Technologies. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { createClient } from '@supabase/supabase-js'
import gsap from 'gsap'

const isDarkMode = ref(true)
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const submissionPending = ref(false)

const menuItems = ['About', 'Services', 'Portfolio', 'Culture', 'Studio', 'Contact']

const SUPABASE_URL = 'https://sfdmzyvhwrqzcschtudb.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmZG16eXZod3JxemNzY2h0dWRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzMDUxMzAsImV4cCI6MjA5Njg4MTEzMH0.HSleUjf4AzorG5GBoTGnmwuGhQ2uGNBG84gZsf4NwuY'
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const form = reactive({
  name: '',
  email: '',
  projectType: 'web', // Default selection setup
  budget: '$1k - $5k', // Default budget setup
  message: ''
})

const fieldErrors = reactive({
  name: '',
  email: '',
  message: ''
})

const apiResponse = reactive({
  message: '',
  status: ''
})

const parallax = reactive({
  bgX: 0,
  bgY: 0
})

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
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const evaluateClientForm = () => {
  let passed = true
  fieldErrors.name = ''
  fieldErrors.email = ''
  fieldErrors.message = ''

  if (!form.name.trim()) {
    fieldErrors.name = 'Please state your name.'
    passed = false
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!form.email.trim()) {
    fieldErrors.email = 'An email mapping identifier is required.'
    passed = false
  } else if (!emailPattern.test(form.email)) {
    fieldErrors.email = 'Check your dynamic syntax structure for email format.'
    passed = false
  }

  if (!form.message.trim()) {
    fieldErrors.message = 'Please provide context regarding your goals.'
    passed = false
  }

  return passed
}

const handleSubmit = async () => {
  apiResponse.message = ''
  if (!evaluateClientForm()) return

  submissionPending.value = true

  try {
    // Insert structured payload directly to Supabase cloud table
    const { data, error } = await supabase
      .from('consultations')
      .insert([
        {
          name: form.name,
          email: form.email,
          project_type: form.projectType, // Matches your fixed column layout!
          budget: form.budget,
          message: form.message
        }
      ])

    if (error) throw error

    apiResponse.message = 'Inquiry transmitted successfully to cloud architecture!'
    apiResponse.status = 'success'
    
    // Clear textual input fields
    form.name = ''
    form.email = ''
    form.message = ''
    
  } catch (error) {
    apiResponse.message = 'Transit pipeline broken: Unable to write data stream.'
    apiResponse.status = 'error'
    console.error('Supabase error stack:', error.message)
  } finally {
    submissionPending.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const onMenuEnter = (el, done) => {
  gsap.fromTo(el, 
    { opacity: 0 }, 
    { opacity: 1, duration: 0.4, ease: 'power2.out' }
  )
  gsap.fromTo(el.querySelectorAll('.menu-link, .consult-btn-overlay'), 
    { yPercent: 100 }, 
    { yPercent: 0, duration: 0.6, stagger: 0.06, ease: 'power3.out', delay: 0.1, onComplete: done }
  )
}

const onMenuLeave = (el, done) => {
  gsap.to(el.querySelectorAll('.menu-link, .consult-btn-overlay'), 
    { yPercent: -100, duration: 0.4, stagger: 0.03, ease: 'power3.in' }
  )
  gsap.to(el, 
    { opacity: 0, duration: 0.4, ease: 'power2.in', delay: 0.15, onComplete: done }
  )
}
</script>

<style scoped>
:global(html),
:global(body) {
  margin: 0;
  padding: 0;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  height: auto !important;
  width: 100% !important;
}

/* ----------------------------------------- */
/* 1. CORE SETUP & VARIABLES                 */
/* ----------------------------------------- */
.hero-wrapper {
  --brand-accent: #00ffa3;
  --transition-speed: 0.5s;
  
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: system-ui, -apple-system, sans-serif;
  transition: background-color var(--transition-speed), color var(--transition-speed);
  box-sizing: border-box;
  position: relative;
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

.field-group {
  margin-bottom: 0.5rem;
}
.input-label {
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #6b7280;
  text-align: left;
}
.theme-dark .input-label { color: rgba(255, 255, 255, 0.6); }

.pill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 0.5rem;
  width: 100%;
}
.pill-btn {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: inherit;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  text-align: center;
}
.theme-light .pill-btn {
  background: rgba(15, 23, 42, 0.05);
  border: 1px solid rgba(15, 23, 42, 0.1);
}
.pill-btn:hover {
  border-color: rgba(0, 255, 163, 0.4);
}
.pill-btn.active {
  background: rgba(0, 255, 163, 0.1);
  border-color: #00ffa3;
  color: #00ffa3;
  box-shadow: 0 0 15px rgba(0, 255, 163, 0.1);
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
  .consult-btn-overlay {
    font-size: clamp(0.9rem, 2.5vw, 1.2rem);
    padding: 6px clamp(14px, 2.5vw, 24px);
  }
}

/* ----------------------------------------- */
/* 5. CONTENT BODY CONFIGURATION             */
/* ----------------------------------------- */
.hero-main {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 10;
  width: 100%;
}
.page-scroll-container {
  overflow-y: visible;
  padding: calc(60px + clamp(10px, 2vw, 22px) + 50px) clamp(16px, 4vw, 40px) 100px;
}

.ambient-glow {
  position: absolute;
  width: min(550px, 80vw);
  height: min(550px, 80vw);
  border-radius: 50%;
  filter: blur(140px);
  -webkit-filter: blur(140px);
  mix-blend-mode: screen;
  pointer-events: none;
  opacity: 0.15;
  top: 10%;
  z-index: -1;
}
.theme-dark .ambient-glow { background-color: var(--brand-accent); }
.theme-light .ambient-glow { background-color: #a7f3d0; mix-blend-mode: multiply; opacity: 0.25; }

/* ----------------------------------------- */
/* CONTACT SECTION                           */
/* ----------------------------------------- */
.contact-section {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.contact-header {
  max-width: 56rem;
  margin: 0 auto 2.5rem;
  text-align: center;
  padding: 0 1rem;
}

.contact-title {
  font-family: 'Inter', sans-serif;
  font-size: clamp(1.75rem, 5vw, 3rem);
  font-weight: 800;
  margin: 0 0 1rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
}
.theme-dark .contact-title { color: #ffffff; }
.theme-light .contact-title { color: #0f172a; }

.accent {
  color: #00ffa3;
}

.contact-subtitle {
  color: #6b7280;
  font-size: clamp(0.875rem, 2vw, 1rem);
  margin: 0;
  word-break: break-words;
}

/* Form block metrics */
.contact-form {
  max-width: 42rem;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  transition: border-color 0.5s cubic-bezier(0.23, 1, 0.32, 1),
              box-shadow 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}
.theme-light .contact-form {
  background: rgba(15, 23, 42, 0.03);
  border: 1px solid rgba(15, 23, 42, 0.1);
}
@media (min-width: 640px) {
  .contact-form {
    padding: 2.5rem;
    gap: 1.5rem;
  }
}
.contact-form:hover {
  border-color: #00ffa3;
  box-shadow: 0 0 30px rgba(0, 255, 163, 0.15);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
}
@media (min-width: 640px) {
  .form-row {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }
}

.input-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.form-input {
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 0.875rem 1rem;
  font-size: 0.875rem;
  font-family: 'Inter', sans-serif;
  outline: none;
  transition: border-color 0.3s, color 0.3s, background-color 0.3s;
  box-sizing: border-box;
}
.theme-dark .form-input { color: #ffffff; }
.theme-light .form-input {
  background: rgba(15, 23, 42, 0.05);
  border: 1px solid rgba(15, 23, 42, 0.1);
  color: #0f172a;
}
.form-input::placeholder { color: #6b7280; }
.form-input:focus { border-color: #00ffa3; }

.form-input.input-validation-failed {
  border-color: #ef4444 !important;
}
.validation-message {
  color: #ef4444;
  font-size: 0.75rem;
  margin-top: 0.35rem;
  padding-left: 0.15rem;
  text-align: left;
}

.form-textarea {
  resize: vertical;
  min-height: 130px;
}

.api-status-banner {
  padding: 0.75rem 1rem;
  border-radius: 6px;
  font-size: 0.85rem;
  text-align: center;
}
.api-status-banner.success {
  background: rgba(0, 255, 163, 0.1);
  color: #00ffa3;
  border: 1px solid rgba(0, 255, 163, 0.2);
}
.api-status-banner.error {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.2);
}

.submit-btn {
  width: 100%;
  background-color: #00ffa3;
  color: #000000;
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.7rem, 1.5vw, 0.875rem);
  font-weight: 900;
  padding: 1rem 1.25rem;
  border: none;
  border-radius: 8px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s;
  box-shadow: 0 4px 20px rgba(0, 255, 163, 0.2);
}
.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
@media (min-width: 640px) {
  .submit-btn { padding: 1.25rem; }
}
.submit-btn:not(:disabled):hover {
  transform: scale(1.02);
  box-shadow: 0 6px 24px rgba(0, 255, 163, 0.3);
}
.submit-btn:not(:disabled):active {
  transform: scale(0.99);
}

/* ----------------------------------------- */
/* 6. INFINITE MARQUEE FOOTER & COPYRIGHT    */
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