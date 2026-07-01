<template>
  <div :class="['hero-wrapper', isDarkMode ? 'theme-dark' : 'theme-light']" @mousemove="handleMouseMove">
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

    <main class="hero-main">
      <div class="hero-intro-viewport">
        <div 
          class="ambient-glow-hero"
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
      </div>

      <HomeComponent1 
        class="home-services-layout" 
        :darkMode="isDarkMode" 
      />

      <WhyWebhive 
        class="home-why-webhive-layout"
        :darkMode="isDarkMode"
      />

      <!-- chatbot -->
       <section class="chatbot-section">

    <!-- Section label -->
    <div class="chatbot-eyebrow">
      <span class="eyebrow-dot"></span>
      <span class="eyebrow-text">Start a Conversation</span>
    </div>

    <h2 class="chatbot-heading">Tell us about your project</h2>
    <p class="chatbot-subheading">Answer a few quick questions and our team will get back to you within 24 hours.</p>

    <!-- Chat widget -->
    <div class="chatbot-card">

      <!-- Header -->
      <div class="chatbot-header">
        <div class="header-left">
          <div class="header-dot"></div>
          <div>
            <p class="header-title">WebHive Assistant</p>
            <p class="header-sub">Online · Replies instantly</p>
          </div>
        </div>
      </div>

      <!-- Messages -->
      <div ref="chatEl" class="chatbot-messages">
        <div
          v-for="msg in messages"
          :key="msg.id"
          :class="['msg-row', msg.sender === 'user' ? 'msg-row--user' : 'msg-row--bot']"
        >
          <div :class="['msg-bubble', msg.sender === 'user' ? 'msg-bubble--user' : 'msg-bubble--bot']">
            <span class="msg-text">{{ msg.text }}</span>
            <span class="msg-time">{{ msg.time }}</span>
          </div>
        </div>

        <div v-if="isTyping" class="msg-row msg-row--bot">
          <div class="msg-bubble msg-bubble--bot typing-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>

      <!-- Input area -->
      <div class="chatbot-footer">

        <div v-if="stepType === 'buttons' && activeOptions.length" class="options-grid">
          <button
            v-for="opt in activeOptions"
            :key="opt.text"
            class="option-btn"
            @click="handleOption(opt)"
          >
            {{ opt.text }}
          </button>
        </div>

        <div v-else-if="stepType === 'text_input'" class="input-row">
          <input
            v-model="inputValue"
            :type="chatTree[currentStep]?.inputField === 'email' ? 'email' : 'text'"
            :placeholder="chatTree[currentStep]?.placeholder"
            class="chat-input"
            @keydown.enter="handleInput"
          />
          <button class="send-btn" @click="handleInput" aria-label="Send">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="18" height="18">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
          </button>
        </div>

        <div v-else-if="currentStep === 'completed'" class="completed-msg">
          ✓ Message sent — we will be in touch soon!
        </div>

      </div>
    </div>

  </section>
  <!-- chatbot end -->

      <footer class="copyright-section">
        <p>&copy; {{ currentYear }} WebHive Technologies. All rights reserved.</p>
      </footer>
    </main>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted,nextTick, computed } from 'vue'
import emailjs from '@emailjs/browser'
import gsap from 'gsap'
import HomeComponent1 from '../components/HomeComponent1.vue'
import WhyWebhive from '../components/WhyWebhive.vue'

const isDarkMode = ref(true)
const isMenuOpen = ref(false)
const isScrolled = ref(false)

// menuItems matches about.vue structure to support proper internal routing
const menuItems = ['About', 'Services', 'Portfolio', 'Culture', 'Studio', 'Contact']
const currentYear = new Date().getFullYear()

const parallax = reactive({
  rotateX: 0,
  rotateY: 0,
  headingX: 0, 
  headingY: 0,
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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Exact GSAP micro-interactions matches from about.vue
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

// chatbot code
const chatTree = {
  start: {
    sender: 'bot',
    message: "Hi! I'm the WebHive assistant. What kind of solution are you looking to build?",
    type: 'buttons',
    options: [
      { text: '💻 Custom Web App',       value: 'Custom Web Application',  nextStep: 'ask_platform' },
      { text: '📱 Mobile App',           value: 'Mobile App',              nextStep: 'ask_platform' },
      { text: '🛒 E-Commerce Platform',  value: 'E-Commerce Platform',     nextStep: 'ask_platform' },
      { text: '⚡ NetSuite Integration', value: 'NetSuite Integration',    nextStep: 'ask_platform' },
    ],
  },
  ask_platform: {
    sender: 'bot',
    message: 'Great choice! Which platform are you targeting?',
    type: 'buttons',
    options: [
      { text: '🌐 Web',          value: 'Web',          nextStep: 'ask_budget' },
      { text: '📱 Mobile',       value: 'Mobile',       nextStep: 'ask_budget' },
      { text: '🖥️ Both',         value: 'Web & Mobile', nextStep: 'ask_budget' },
      { text: '🤔 Not sure yet', value: 'Not decided',  nextStep: 'ask_budget' },
    ],
  },
  ask_budget: {
    sender: 'bot',
    message: 'What is your estimated budget for this project?',
    type: 'buttons',
    options: [
      { text: 'Under $5K',   value: 'Under $5,000',      nextStep: 'ask_timeline' },
      { text: '$5K – $15K',  value: '$5,000 – $15,000',  nextStep: 'ask_timeline' },
      { text: '$15K – $50K', value: '$15,000 – $50,000', nextStep: 'ask_timeline' },
      { text: '$50K+',       value: '$50,000+',           nextStep: 'ask_timeline' },
    ],
  },
  ask_timeline: {
    sender: 'bot',
    message: 'What is your expected timeline to launch?',
    type: 'buttons',
    options: [
      { text: '< 1 month',    value: 'Less than 1 month', nextStep: 'ask_stage' },
      { text: '1 – 3 months', value: '1–3 months',        nextStep: 'ask_stage' },
      { text: '3 – 6 months', value: '3–6 months',        nextStep: 'ask_stage' },
      { text: 'Flexible',     value: 'Flexible',          nextStep: 'ask_stage' },
    ],
  },
  ask_stage: {
    sender: 'bot',
    message: 'Where is your project right now?',
    type: 'buttons',
    options: [
      { text: '💡 Just an idea',         value: 'Just an idea',                nextStep: 'ask_description' },
      { text: '📄 Have requirements',    value: 'Have requirements',           nextStep: 'ask_description' },
      { text: '🔄 Redesigning existing', value: 'Redesigning existing product',nextStep: 'ask_description' },
      { text: '🚀 Ready to build',       value: 'Ready to build',              nextStep: 'ask_description' },
    ],
  },
  ask_description: {
    sender: 'bot',
    message: 'Briefly describe what you want to build or the problem you want to solve.',
    type: 'text_input',
    inputField: 'description',
    placeholder: 'e.g. An app that helps restaurants manage reservations…',
    nextStep: 'ask_name',
  },
  ask_name: {
    sender: 'bot',
    message: 'Thanks! What is your name?',
    type: 'text_input',
    inputField: 'name',
    placeholder: 'Your full name',
    nextStep: 'ask_email',
  },
  ask_email: {
    sender: 'bot',
    message: (name) => `Nice to meet you, ${name}! What's your email address so our team can reach you?`,
    type: 'text_input',
    inputField: 'email',
    placeholder: 'name@company.com',
    nextStep: 'submit_lead',
  },
}

const currentStep   = ref('start')
const isTyping      = ref(false)
const inputValue    = ref('')
const chatEl        = ref(null)

const lead = reactive({
  service: '', platform: '', budget: '',
  timeline: '', project_stage: '',
  description: '', name: '', email: '',
})

const now = () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
// const messages      = ref([{ id: 1, sender: 'bot', text: chatTree.start.message, time: now() }])
const messages = ref([{ id: 1, sender: 'bot', text: chatTree.start.message, time: now() }])
const activeOptions = ref(chatTree.start.options)
const stepType      = computed(() => chatTree[currentStep.value]?.type ?? '')

const scroll = async () => {
  await nextTick()
  if (chatEl.value) chatEl.value.scrollTop = chatEl.value.scrollHeight
}

const stepFieldMap = {
  ask_platform: 'platform',
  ask_budget:   'budget',
  ask_timeline: 'timeline',
  ask_stage:    'project_stage',
}

const handleOption = (option) => {
  const field = stepFieldMap[currentStep.value] || 'service'
  lead[field] = option.value
  messages.value.push({ id: Date.now(), sender: 'user', text: option.text, time: now() })
  activeOptions.value = []
  advance(option.nextStep)
}

const handleInput = () => {
  const val = inputValue.value.trim()
  if (!val) return
  const step = chatTree[currentStep.value]
  lead[step.inputField] = val
  messages.value.push({ id: Date.now(), sender: 'user', text: val, time: now() })
  inputValue.value = ''
  if (step.nextStep === 'submit_lead') sendEmail()
  else advance(step.nextStep)
}

const advance = (key) => {
  currentStep.value = key
  const step = chatTree[key]
  if (!step) return
  isTyping.value = true
  scroll()
  setTimeout(() => {
    isTyping.value = false
    const text = typeof step.message === 'function' ? step.message(lead.name) : step.message
    messages.value.push({ id: Date.now(), sender: 'bot', text, time: now() })
    if (step.type === 'buttons') activeOptions.value = step.options
    scroll()
  }, 1000)
}

const sendEmail = async () => {
  isTyping.value = true
  scroll()
  try {
    const res = await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name:     lead.name,
        from_email:    lead.email,
        service:       lead.service,
        platform:      lead.platform,
        budget:        lead.budget,
        timeline:      lead.timeline,
        project_stage: lead.project_stage,
        description:   lead.description,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    )
    isTyping.value = false
    if (res.status === 200) {
      messages.value.push({ id: Date.now(), sender: 'bot', text: `✅ All done, ${lead.name}! Your details have been sent to our team. We'll get back to you within 24 hours.`, time: now() })
      currentStep.value = 'completed'
    }
  } catch (err) {
    console.error(err)
    isTyping.value = false
    messages.value.push({ id: Date.now(), sender: 'bot', text: '⚠️ Something went wrong. Please try again or email us directly.', time: now() })
  } finally {
    scroll()
  }
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
/* 1. CORE SETUP & PREMIUM THEME VARIABLES  */
/* ----------------------------------------- */
.hero-wrapper {
  --brand-accent: #00ffa3;
  --transition-speed: 0.5s;
  position: relative;
  width: 100%;
  min-height: 100vh;
  font-family: system-ui, -apple-system, sans-serif;
  transition: background-color var(--transition-speed), color var(--transition-speed);
  overflow-x: hidden;
}

.hero-wrapper *,
.hero-wrapper *::before,
.hero-wrapper *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Theme Colors EXACT match to about.vue dark color palette */
.theme-dark { background-color: #0b0c10; color: #ffffff; }
.theme-light { background-color: #f4f6f9; color: #0f172a; }

/* ----------------------------------------- */
/* 2. BACKGROUND INTERACTIVE NET GRID         */
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
/* 3. EXACT NAVBAR STYLES FROM ABOUT.VUE     */
/* ----------------------------------------- */

.navbar {
  position: fixed;
  top: 16px;
  left: 50%;
  /* Added translateZ(0) to force GPU hardware acceleration locally */
  transform: translateX(-50%) translateZ(0);
  /* Hints the browser engine to prepare for backdrop composite layers */
  will-change: transform, backdrop-filter;
  
  width: 92%;
  max-width: 1200px;
  z-index: 1000;
  
  /* Slightly boosted color saturation to fight dev-server gray washouts */
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(15px) saturate(180%);
  -webkit-backdrop-filter: blur(15px) saturate(180%);
  
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
/* 4. EXACT NAVIGATION OVERLAY FROM ABOUT.VUE */
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
/* 5. HERO LAYOUT ELEMENTS                   */
/* ----------------------------------------- */
.hero-main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 10;
}

.hero-intro-viewport {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding: 0 clamp(16px, 4vw, 40px);
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
.theme-dark .ambient-glow-hero { background-color: var(--brand-accent); }
.theme-light .ambient-glow-hero { background-color: #a7f3d0; mix-blend-mode: multiply; opacity: 0.2; }

.main-title {
  font-size: clamp(3.5rem, 11vw, 9rem);
  font-weight: 950;
  letter-spacing: -0.04em;
  line-height: 1;
  text-transform: uppercase;
  background: linear-gradient(to right, #ffffff 30%, var(--brand-accent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: transform 0.15s cubic-bezier(0.25, 1, 0.5, 1);
  margin-bottom: 20px;
}
.theme-light .main-title {
  background: linear-gradient(to right, #0f172a 40%, #059669 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-family: monospace;
  font-size: clamp(11px, 2.2vw, 15px);
  text-transform: uppercase;
  letter-spacing: 0.25em;
  max-width: 550px;
}
.theme-dark .hero-subtitle { color: #94a3b8; }
.theme-light .hero-subtitle { color: #475569; }

.home-services-layout {
  margin-top: clamp(60px, 10vh, 120px); 
  width: 100%;
  max-width: 1400px;
  padding-left: clamp(16px, 4vw, 40px);
  padding-right: clamp(16px, 4vw, 40px);
}

.home-why-webhive-layout {
  margin-top: clamp(80px, 12vh, 160px); 
  padding-bottom: clamp(100px, 15vh, 200px);
  width: 100%;
  max-width: 1400px;
  padding-left: clamp(16px, 4vw, 40px);
  padding-right: clamp(16px, 4vw, 40px);
}

/* ----------------------------------------- */
/* 6. MINIMALIST COPYRIGHT FOOTER            */
/* ----------------------------------------- */
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

/* ── chatbot design ── */
.chatbot-section {
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: clamp(80px, 12vh, 140px) clamp(16px, 4vw, 24px);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Space Grotesk', 'Inter', sans-serif;
}

/* ── Eyebrow ── */
.chatbot-eyebrow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
}
.eyebrow-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #00ffa3;
  box-shadow: 0 0 8px rgba(0, 255, 163, 0.6);
  animation: pulse-green 2s infinite;
}
.eyebrow-text {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #00ffa3;
}

/* ── Headings ── */
.chatbot-heading {
  font-size: clamp(1.6rem, 4vw, 2.4rem);
  font-weight: 800;
  color: #fff;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 12px;
  line-height: 1.1;
  width: 100%;
  transition: color var(--transition-speed); /* Smooth transition */
}

.theme-light .chatbot-heading {
  color: #0f172a;
}
.chatbot-subheading {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.45);
  text-align: center;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 420px;
  transition: color var(--transition-speed);
}
/* Add theme override */
.theme-light .chatbot-subheading {
  color: #475569;
}

/* ── Card ── */
.chatbot-card {
  width: 100%;
  background: #0a0a0a;
  border-radius: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 560px;
  outline: 1px solid rgba(255, 255, 255, 0.07);
}

/* ── Header ── */
.chatbot-header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: #0d0d0d;
  flex-shrink: 0;
}
.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
}
.header-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00ffa3;
  box-shadow: 0 0 8px rgba(0, 255, 163, 0.7);
  animation: pulse-green 2s infinite;
  flex-shrink: 0;
}
.header-title {
  font-size: 13.5px;
  font-weight: 600;
  color: #fff;
  margin: 0;
  line-height: 1;
  text-align: center;
}
.header-sub {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.35);
  margin: 4px 0 0;
  line-height: 1;
  text-align: center;
}

/* ── Messages ── */
.chatbot-messages {
  flex: 1;
  overflow-y: auto;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  /* justify-content: flex-end; 👈 REMOVE THIS LINE */
  gap: 4px;
  scroll-behavior: smooth;
  background-color: #050505;
  background-image: radial-gradient(rgba(0, 255, 163, 0.025) 1px, transparent 1px);
  background-size: 22px 22px;
}
.chatbot-messages::-webkit-scrollbar { width: 3px; }
.chatbot-messages::-webkit-scrollbar-track { background: transparent; }
.chatbot-messages::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }

.msg-row { display: flex; margin: 4px 0; }
.msg-row--bot  { justify-content: flex-start; }
.msg-row--user { justify-content: flex-end; }

.msg-bubble {
  max-width: 78%;
  padding: 10px 16px;
  border-radius: 0;
  font-size: 13.5px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 6px;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}
.msg-text { flex: 1 1 auto; word-break: break-word; }
.msg-time {
  font-size: 10px;
  flex-shrink: 0;
  margin-left: auto;
  white-space: nowrap;
}

.msg-bubble--bot {
  background: #1c1c1e;
  color: #f0f0f0;
  border-bottom-left-radius: 0;
}
.msg-bubble--bot .msg-time { color: rgba(255, 255, 255, 0.35); }

.msg-bubble--user {
  background: #008f5f;
  color: #fff;
  border-bottom-right-radius: 0;
}
.msg-bubble--user .msg-time { color: rgba(255, 255, 255, 0.65); }

/* ── Typing dots ── */
.typing-dots {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 12px 14px;
  background: #1c1c1e;
  border-bottom-left-radius: 0;
}
.typing-dots span {
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  animation: bounce-dot 1.2s infinite;
}
.typing-dots span:nth-child(2) { animation-delay: 0.15s; }
.typing-dots span:nth-child(3) { animation-delay: 0.3s; }

/* ── Footer ── */
.chatbot-footer {
  padding: 18px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: #0d0d0d;
  flex-shrink: 0;
}

/* ── Options ── */
.options-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.option-btn {
  padding: 16px 14px;
  border-radius: 0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #111;
  color: #bbb;
  font-size: 13px;
  font-family: inherit;
  cursor: pointer;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 0.01em;
  transition: border-color 0.15s, color 0.15s, background 0.15s;
}
.option-btn:hover {
  border-color: #00ffa3;
  color: #00ffa3;
  background: rgba(0, 255, 163, 0.04);
}
.option-btn:active { transform: scale(0.97); }

/* ── Input row ── */
.input-row {
  display: flex;
  gap: 8px;
  align-items: center;
}
.chat-input {
  flex: 1;
  height: 44px;
  padding: 0 16px;
  border-radius: 0;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: #111;
  color: #fff;
  font-size: 13.5px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}
.chat-input::placeholder { color: rgba(255, 255, 255, 0.2); }
.chat-input:focus { border-color: #00ffa3; }

.send-btn {
  width: 44px;
  height: 44px;
  border-radius: 0;
  border: none;
  background: #00ffa3;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: transform 0.15s, background 0.15s;
}
.send-btn:hover  { background: #00e691; }
.send-btn:active { transform: scale(0.94); }

/* ── Completed ── */
.completed-msg {
  text-align: center;
  font-size: 13px;
  color: #00ffa3;
  font-weight: 500;
  padding: 10px 0;
  letter-spacing: 0.01em;
}

/* ── Keyframes ── */
@keyframes pulse-green {
  0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(0,255,163,0.7); }
  50%       { opacity: 0.55; box-shadow: 0 0 4px rgba(0,255,163,0.2); }
}
@keyframes bounce-dot {
  0%, 80%, 100% { transform: translateY(0); }
  40%           { transform: translateY(-5px); }
}

/* ── Mobile ── */
@media (max-width: 480px) {
  .options-grid { grid-template-columns: 1fr; }
}
</style>

