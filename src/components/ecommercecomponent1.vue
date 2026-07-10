<template>
  <section :class="['hero-section relative min-h-screen flex items-center justify-center px-6 overflow-hidden border-b z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="absolute inset-0 bg-radial-glow"></div>
    <div class="absolute inset-0 grid-overlay pointer-events-none"></div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 w-full pt-24 pb-12">
      
      <div class="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
        <span ref="heroLabel" class="inline-block text-xs font-bold tracking-[0.3em] uppercase bg-[#00ffa3]/10 px-4 py-1.5 rounded-full border border-[#00ffa3]/20 shadow-[0_0_15px_rgba(0,255,163,0.08)] hero-label-badge">
          Ecommerce Development Solutions
        </span>
        <h1 ref="heroTitle" class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] hero-main-title">
          <span class="inline-block mr-3">Build</span>
          <span class="inline-block mr-3">Online</span>
          <span class="inline-block mr-3 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffa3] to-emerald-400">Stores</span>
          <br>
          <span class="inline-block mr-3">That</span>
          <span class="inline-block mr-3">Convert</span>
          <span class="inline-block">Visitors</span>
        </h1>
        <p ref="heroSubtitle" class="text-base md:text-xl leading-relaxed max-w-2xl hero-description">
          We create high-performance ecommerce platforms that deliver seamless shopping experiences, increase conversions, and help businesses scale globally. From startup stores to enterprise commerce solutions, we build platforms designed to sell.
        </p>
        <div ref="heroButtons" class="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <button class="w-full sm:w-auto px-8 py-4 bg-[#00ffa3] text-[#000000] font-bold rounded-lg shadow-[0_0_30px_rgba(0,255,163,0.2)] hover:shadow-[0_0_40px_rgba(0,255,163,0.4)] transition-all duration-300 transform hover:scale-[1.02]">
            Launch Your Store
          </button>
          <button class="w-full sm:w-auto px-8 py-4 border font-medium rounded-lg transition-all duration-300 secondary-action-btn">
            View Ecommerce Projects
          </button>
        </div>
      </div>

      <div class="lg:col-span-5 flex justify-center order-1 lg:order-2 content-perspective">
        <div 
          ref="floatingPanel"
          class="relative w-72 h-96 rounded-2xl border p-6 shadow-2xl transition-transform duration-300 ease-out will-change-transform flex flex-col justify-between interactive-panel"
          :style="{ transform: `rotateY(${parallax.y}deg) rotateX(${parallax.x}deg) translateY(${floatingOffset}px)` }"
        >
          <div class="flex items-center justify-between border-b pb-4 panel-header-border">
            <span class="text-[10px] font-mono uppercase tracking-widest matrix-tag">TRANSACTION MATRIX</span>
            <div class="w-2 h-2 rounded-full bg-[#00ffa3] animate-ping"></div>
          </div>
          <div class="flex-1 py-6 flex flex-col justify-center space-y-4">
            <div class="w-full h-32 bg-gradient-to-tr from-[#00ffa3]/10 to-transparent border border-[#00ffa3]/20 rounded-xl flex items-center justify-center text-4xl shadow-inner">
              📦
            </div>
            <div class="space-y-2">
              <div class="h-4 rounded w-2/3 dummy-skeleton"></div>
              <div class="h-3 rounded w-full dummy-skeleton"></div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span class="font-mono font-bold text-[#00ffa3] text-lg">$2,450.00</span>
            <span class="text-xs px-2 py-1 rounded border status-badge">Success</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Inject global theme state context seamlessly
const isDarkMode = inject('isDarkMode', ref(true))

// References
const heroLabel = ref(null)
const heroTitle = ref(null)
const heroSubtitle = ref(null)
const heroButtons = ref(null)
const floatingPanel = ref(null)

// Animation State
const parallax = reactive({ x: 0, y: 0 })
const floatingOffset = ref(0)
let rafId = null

// Handle Parallax & Floating Animation
const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  parallax.y = (clientX - centerX) / 50
  parallax.x = (centerY - clientY) / 50
}

const animateFloating = (time) => {
  floatingOffset.value = Math.sin(time * 0.002) * 20
  rafId = requestAnimationFrame(animateFloating)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  rafId = requestAnimationFrame(animateFloating)
  
  // Entrance Animations
  const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1 } })
  tl.from([heroLabel.value, heroTitle.value, heroSubtitle.value, heroButtons.value], {
    y: 40,
    opacity: 0,
    stagger: 0.15
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(rafId)
})
</script>

<style scoped>
/* ── Encapsulated Visual Protection Boundaries ── */
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important; /* border-neutral-900 equivalent */
  --bg-radial: radial-gradient(ellipse at center, rgba(0, 255, 163, 0.02), transparent 70%);
  --grid-line-color: #031f14;
  --badge-txt: #00ffa3;
  --title-txt: #ffffff;
  --desc-txt: #a3a3a3; /* text-neutral-400 equivalent */
  --btn-sec-bg: #171717; /* bg-neutral-900 equivalent */
  --btn-sec-border: #262626; /* border-neutral-800 equivalent */
  --btn-sec-text: #ffffff;
  --btn-sec-hover-bg: #262626;
  --btn-sec-hover-border: #404040;
  
  /* Matrix Panel Specifics */
  --panel-bg: rgba(0, 0, 0, 0.4);
  --panel-border: #262626; /* border-neutral-800 equivalent */
  --panel-divider: #262626;
  --panel-tag: #737373; /* text-neutral-500 equivalent */
  --panel-skeleton: #171717;
  --panel-status-bg: #171717;
  --panel-status-border: #262626;
  --panel-status-text: #737373;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important; /* border-slate-200 equivalent */
  --bg-radial: radial-gradient(ellipse at center, rgba(0, 255, 163, 0.04), transparent 75%);
  --grid-line-color: #f1f5f9; /* pure light-slate alignment lines */
  --badge-txt: #0f172a; /* high contrast theme description text */
  --title-txt: #000000;
  --desc-txt: #000000; /* requested black text layout rules */
  --btn-sec-bg: #ffffff;
  --btn-sec-border: #000000;
  --btn-sec-text: #000000;
  --btn-sec-hover-bg: #000000;
  --btn-sec-hover-border: #000000;
  
  /* Matrix Panel Specifics */
  --panel-bg: rgba(255, 255, 255, 0.8);
  --panel-border: #e2e8f0; /* border-slate-200 equivalent */
  --panel-divider: #e2e8f0;
  --panel-tag: #475569; /* text-slate-600 equivalent */
  --panel-skeleton: #f1f5f9;
  --panel-status-bg: #f8fafc;
  --panel-status-border: #cbd5e1;
  --panel-status-text: #475569;
}

/* ── Explicit Selector Rule Mappings ── */
.hero-section {
  width: 100% !important;
}

.bg-radial-glow {
  background: var(--bg-radial) !important;
}

.grid-overlay {
  background-image: linear-gradient(to right, var(--grid-line-color) 1px, transparent 1px), 
                    linear-gradient(to bottom, var(--grid-line-color) 1px, transparent 1px) !important;
  background-size: 5rem 5rem !important;
}

.hero-label-badge {
  color: var(--badge-txt) !important;
}

.hero-main-title {
  color: var(--title-txt) !important;
}

.hero-description {
  color: var(--desc-txt) !important;
}

.secondary-action-btn {
  background-color: var(--btn-sec-bg) !important;
  border-color: var(--btn-sec-border) !important;
  color: var(--btn-sec-text) !important;
}

.secondary-action-btn:hover {
  background-color: var(--btn-sec-hover-bg) !important;
  border-color: var(--btn-sec-hover-border) !important;
}

.theme-light .secondary-action-btn:hover {
  color: #ffffff !important;
}

/* ── Interactive Panel Bounding Rules ── */
.content-perspective {
  perspective: 1000px;
}

.interactive-panel {
  background-color: var(--panel-bg) !important;
  border-color: var(--panel-border) !important;
  backdrop-filter: blur(24px);
}

.panel-header-border {
  border-color: var(--panel-divider) !important;
}

.matrix-tag {
  color: var(--panel-tag) !important;
}

.dummy-skeleton {
  background-color: var(--panel-skeleton) !important;
}

.status-badge {
  background-color: var(--panel-status-bg) !important;
  border-color: var(--panel-status-border) !important;
  color: var(--panel-status-text) !important;
}
</style>