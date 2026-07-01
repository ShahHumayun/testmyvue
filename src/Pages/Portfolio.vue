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
      <WebDevelopmentPortfolioSection :isDarkMode="isDarkMode" />
      <AppDevelopmentProjectSection 
        :isDarkMode="isDarkMode"
        @open-modal="openModal"
      />
      <EcommerceprojectsSection :isDarkMode="isDarkMode"/>
    </main>

    <footer class="footer-group">
      <div class="copyright-section">
        <p>&copy; {{ currentYear }} WebHive Technologies. All rights reserved.</p>
      </div>
    </footer>

    <!-- ✅ App Preview Modal Overlay -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div
          v-if="activeModal"
          class="modal-backdrop"
          @click.self="closeModal"
        >
          <!-- Close Button -->
          <button
            @click="closeModal"
            class="modal-close-btn"
            aria-label="Close app preview"
          >
            <span class="close-x">✕</span>
            <span class="close-text">Close</span>
          </button>

          <!-- Rounded Card -->
          <div class="modal-card">
            <div class="modal-scroll-inner">
              <component :is="activeModal" />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

    <!-- Floating chat widget -->
    <button
      class="chat-fab"
      @click="isChatOpen = !isChatOpen"
      :aria-label="isChatOpen ? 'Close chat' : 'Open chat'"
    >
      <svg v-if="!isChatOpen" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="24" height="24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8-1.06 0-2.077-.16-3.02-.457L3 21l1.5-4.5C3.55 15.163 3 13.632 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8Z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22">
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
import WebDevelopmentPortfolioSection from '../components/webdevelopmentportfoliosection.vue'
import AppDevelopmentProjectSection from '../components/AppDevelopmentProjectSection.vue'
import EcommerceprojectsSection from '../components/EcommerceprojectsSection.vue'
import ChatBot from '../components/ChatBot.vue'

// ✅ All four app components
import TaylorAllergyApp from '../components/TaylorAllergyApp.vue'
import MyExpenseTrackerApp from '../components/MyExpenseTrackerApp.vue'
import BookLibraryApp from '../components/BookLibraryApp.vue'
import MagentoConnectorApp from '../components/MagentoConnectorApp.vue'

import { ref, reactive, watch } from 'vue'
import gsap from 'gsap'

const isDarkMode = ref(true)
const isMenuOpen = ref(false)
const activeModal = ref(null)
const isChatOpen = ref(false)

// ✅ Map project titles to their components
const modalMap = {
  'Taylor Allergy':     TaylorAllergyApp,
  'My Expense Tracker': MyExpenseTrackerApp,
  'Book Library':       BookLibraryApp,
  'Magento Connector':  MagentoConnectorApp,
}

const openModal = (projectTitle) => {
  const component = modalMap[projectTitle]
  if (component) {
    activeModal.value = component
  }
}

const closeModal = () => {
  activeModal.value = null
}

// Lock body scroll when modal is open
watch(activeModal, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

// Close on Escape key
const handleKeydown = (e) => {
  if (e.key === 'Escape') closeModal()
}
watch(activeModal, (val) => {
  if (val) window.addEventListener('keydown', handleKeydown)
  else window.removeEventListener('keydown', handleKeydown)
})

const menuItems = ['Home', 'About', 'Services', 'Culture', 'Studio', 'Contact']
const currentYear = new Date().getFullYear()

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

/* .hero-wrapper *,
.hero-wrapper *::before,
.hero-wrapper *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
} */

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

/* NAVBAR */
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
@media (max-width: 480px) { .consult-btn { display: none; } }
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
@media (max-width: 480px) { .theme-toggle { width: 34px; height: 18px; padding: 2px; } }
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
@media (max-width: 480px) { .menu-trigger { width: 30px; height: 30px; gap: 3px; } }
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

/* NAV OVERLAY */
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
  .consult-btn-overlay { font-size: clamp(0.9rem, 2.5vw, 1.2rem); padding: 6px clamp(14px, 2.5vw, 24px); }
}

.hero-main {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-inline: clamp(20px, 5vw, 60px);
  gap: 24px;
  padding-top: calc(60px + clamp(10px, 2vw, 22px) + 50px);
  padding-bottom: 60px;
}

/* FOOTER */
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

/* =============================================
   ✅ APP PREVIEW MODAL
   ============================================= */

/* Full screen solid black backdrop — hides everything behind it */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

/* Centered rounded card with green glow */
.modal-card {
  position: relative;
  width: 100%;
  max-width: 1100px;
  max-height: 88vh;
  background: #0b0c10;
  border-radius: 24px;
  border: 1px solid rgba(0, 255, 163, 0.25);
  box-shadow:
    0 0 0 1px rgba(0, 255, 163, 0.1),
    0 0 40px rgba(0, 255, 163, 0.15),
    0 0 80px rgba(0, 255, 163, 0.08),
    0 30px 60px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Scrollable inner area so long components scroll inside the card */
.modal-scroll-inner {
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  /* Hide scrollbar but keep scroll functional */
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 255, 163, 0.2) transparent;
}
.modal-scroll-inner::-webkit-scrollbar {
  width: 4px;
}
.modal-scroll-inner::-webkit-scrollbar-track {
  background: transparent;
}
.modal-scroll-inner::-webkit-scrollbar-thumb {
  background: rgba(0, 255, 163, 0.2);
  border-radius: 4px;
}

/* Close button — top right, above the card */
.modal-close-btn {
  position: fixed;
  top: 20px;
  right: 28px;
  z-index: 10000;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  background: #00ffa3;
  color: #000000;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.04em;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(0, 255, 163, 0.45);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.modal-close-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 32px rgba(0, 255, 163, 0.6);
}
.modal-close-btn:active {
  transform: translateY(0);
}
.close-x {
  font-size: 11px;
  font-weight: 900;
  line-height: 1;
}
.close-text {
  line-height: 1;
}

/* Fade + scale transition */
.modal-fade-enter-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.modal-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.modal-fade-enter-from {
  opacity: 0;
  transform: scale(0.97);
}
.modal-fade-leave-to {
  opacity: 0;
  transform: scale(0.97);
}

@media (max-width: 600px) {
  .modal-card {
    border-radius: 16px;
    max-height: 92vh;
  }
  .modal-backdrop {
    padding: 12px;
  }
  .modal-close-btn {
    top: 12px;
    right: 14px;
    padding: 8px 14px;
    font-size: 12px;
  }
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
.chat-fab:hover { transform: translateY(-2px) scale(1.05); }
.chat-fab:active { transform: scale(0.95); }

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
.chat-popup-close:hover { background: rgba(255, 255, 255, 0.2); }

.chat-pop-enter-active,
.chat-pop-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.chat-pop-enter-from,
.chat-pop-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.96);
}

@media (max-width: 480px) {
  .chat-popup {
    left: 16px;
    right: 16px;
    width: auto;
  }
}
</style>