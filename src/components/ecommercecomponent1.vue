<template>
  <section
    :class="['hero-section relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 overflow-hidden border-b z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="absolute inset-0 bg-radial-glow"></div>
    <div class="absolute inset-0 grid-overlay pointer-events-none"></div>

    <div
      class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16 2xl:gap-20 items-center relative z-20 w-full pt-20 sm:pt-24 md:pt-24 lg:pt-24 xl:pt-28 2xl:pt-32 pb-10 sm:pb-12">

      <div class="lg:col-span-7 space-y-4 sm:space-y-6 text-left order-2 lg:order-1">
        <span ref="heroLabel"
          class="inline-block text-[10px] sm:text-xs xl:text-sm 2xl:text-base font-bold tracking-[0.3em] uppercase px-3 py-1 sm:px-4 sm:py-1.5 xl:px-5 xl:py-2 rounded-full border shadow-[0_0_15px_var(--shadow-color)] hero-label-badge">
          Ecommerce Development Solutions
        </span>
        <h1 ref="heroTitle"
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight leading-[1.1] hero-main-title">
          <span class="inline-block mr-3">Build</span>
          <span class="inline-block mr-3">Online</span>
          <span
            class="inline-block mr-3 text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-gradient-end)]">Stores</span>
          <br>
          <span class="inline-block mr-3">That</span>
          <span class="inline-block mr-3">Convert</span>
          <span class="inline-block">Visitors</span>
        </h1>
        <p ref="heroSubtitle"
          class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl leading-relaxed max-w-2xl hero-description">
          We create high-performance ecommerce platforms that deliver seamless shopping experiences, increase
          conversions, and help businesses scale globally. From startup stores to enterprise commerce solutions, we
          build platforms designed to sell.
        </p>
        <div ref="heroButtons" class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
          <button
            class="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 xl:px-9 2xl:px-10 2xl:py-5 text-sm sm:text-base 2xl:text-lg bg-[var(--accent-color)] text-[var(--btn-text-color)] font-bold rounded-lg shadow-[0_0_30px_var(--shadow-color)] hover:shadow-[0_0_40px_var(--shadow-color-hover)] transition-all duration-300 transform hover:scale-[1.02]">
            Launch Your Store
          </button>
          <button
            class="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 xl:px-9 2xl:px-10 2xl:py-5 text-sm sm:text-base 2xl:text-lg border font-medium rounded-lg transition-all duration-300 secondary-action-btn">
            View Ecommerce Projects
          </button>
        </div>
      </div>

      <div class="lg:col-span-5 flex justify-center order-1 lg:order-2 content-perspective">
        <div ref="floatingPanel"
          class="floating-panel-frame relative rounded-2xl border p-6 shadow-2xl transition-transform duration-300 ease-out will-change-transform flex flex-col justify-between interactive-panel"
          :style="{ transform: `rotateY(${parallax.y}deg) rotateX(${parallax.x}deg) translateY(${floatingOffset}px)` }">
          <div class="flex items-center justify-between border-b pb-4 panel-header-border">
            <span class="text-[10px] font-mono uppercase tracking-widest matrix-tag">TRANSACTION MATRIX</span>
            <div class="w-2 h-2 rounded-full bg-[var(--accent-color)] animate-ping"></div>
          </div>
          <div class="flex-1 py-6 flex flex-col justify-center space-y-4">
            <div
              class="w-full h-32 bg-gradient-to-tr from-[var(--accent-color-transparent)] to-transparent border border-[var(--accent-color-border)] rounded-xl flex items-center justify-center text-4xl shadow-inner">
              📦
            </div>
            <div class="space-y-2">
              <div class="h-4 rounded w-2/3 dummy-skeleton"></div>
              <div class="h-3 rounded w-full dummy-skeleton"></div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span class="font-mono font-bold text-[var(--accent-color)] text-lg">$2,450.00</span>
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

const isDarkMode = inject('isDarkMode', ref(true))

const heroLabel = ref(null)
const heroTitle = ref(null)
const heroSubtitle = ref(null)
const heroButtons = ref(null)
const floatingPanel = ref(null)

const parallax = reactive({ x: 0, y: 0 })
const floatingOffset = ref(0)
let rafId = null

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
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --accent-gradient-end: #10b981;
  --accent-color-transparent: rgba(0, 255, 163, 0.1);
  --accent-color-border: rgba(0, 255, 163, 0.2);
  --btn-text-color: #000000;
  --shadow-color: rgba(0, 255, 163, 0.08);
  --shadow-color-hover: rgba(0, 255, 163, 0.4);
  --bg-radial: radial-gradient(ellipse at center, rgba(0, 255, 163, 0.02), transparent 70%);
  --grid-line-color: #031f14;
  --badge-txt: #00ffa3;
  --badge-bg: rgba(0, 255, 163, 0.1);
  --badge-border: rgba(0, 255, 163, 0.2);
  --title-txt: #ffffff;
  --desc-txt: #a3a3a3;
  --btn-sec-bg: #171717;
  --btn-sec-border: #262626;
  --btn-sec-text: #ffffff;
  --btn-sec-hover-bg: #262626;
  --btn-sec-hover-border: #404040;
  --panel-bg: rgba(0, 0, 0, 0.4);
  --panel-border: #262626;
  --panel-divider: #262626;
  --panel-tag: #737373;
  --panel-skeleton: #171717;
  --panel-status-bg: #171717;
  --panel-status-border: #262626;
  --panel-status-text: #737373;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --accent-gradient-end: #fb923c;
  --accent-color-transparent: rgba(249, 115, 22, 0.1);
  --accent-color-border: rgba(249, 115, 22, 0.2);
  --btn-text-color: #ffffff;
  --shadow-color: rgba(249, 115, 22, 0.15);
  --shadow-color-hover: rgba(249, 115, 22, 0.4);
  --bg-radial: radial-gradient(ellipse at center, rgba(249, 115, 22, 0.04), transparent 75%);
  --grid-line-color: #f1f5f9;
  --badge-txt: #f97316;
  --badge-bg: rgba(249, 115, 22, 0.1);
  --badge-border: rgba(249, 115, 22, 0.2);
  --title-txt: #000000;
  --desc-txt: #000000;
  --btn-sec-bg: #ffffff;
  --btn-sec-border: #000000;
  --btn-sec-text: #000000;
  --btn-sec-hover-bg: #000000;
  --btn-sec-hover-border: #000000;
  --panel-bg: rgba(255, 255, 255, 0.8);
  --panel-border: #e2e8f0;
  --panel-divider: #e2e8f0;
  --panel-tag: #475569;
  --panel-skeleton: #f1f5f9;
  --panel-status-bg: #f8fafc;
  --panel-status-border: #cbd5e1;
  --panel-status-text: #475569;
}

.hero-label-badge {
  color: var(--badge-txt) !important;
  background-color: var(--badge-bg) !important;
  border-color: var(--badge-border) !important;
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

.interactive-panel {
  background-color: var(--panel-bg) !important;
  border-color: var(--panel-border) !important;
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

/* ==========================================================================
   Outer content container: scales fluidly with viewport width instead of
   jumping between fixed breakpoint values. !important guarantees this wins
   even if the project's global Tailwind stylesheet loads after this
   component's scoped styles.
   ========================================================================== */
.max-w-7xl {
  max-width: clamp(320px, 94vw, 1500px) !important;
}

/* ==========================================================================
   Floating panel mockup — this was a fixed w-72 h-96 (288 x 384px) with
   zero responsive variants, exactly the same issue found in
   AppComponent1's phone mockup. Kept at its original fixed size at every
   breakpoint below; only the 2560px+ tier changes this, matching the same
   principle applied there: everything else stays completely unchanged.
   ========================================================================== */
.floating-panel-frame {
  width: 288px;
  height: 384px;
}

/* ==========================================================================
   Mobile Landscape / Small Tablets: 576px — 768px
   No changes here — floating panel stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Laptops / Large Tablets: 769px — 1024px
   No changes here — floating panel stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Desktops: 1025px — 1200px
   No changes here — floating panel stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Extra Large Screens / Desktops / TVs: 1201px and up
   No changes here — floating panel stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Ultra-wide / Large TVs: 1536px and up
   No changes here — floating panel stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   ========================================================================== */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 1750px !important;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   This is the ONLY breakpoint where the floating panel mockup grows beyond
   its original fixed design size — every other breakpoint above and below
   this keeps the mockup completely unchanged, exactly as it was originally
   designed.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2050px !important;
  }

  .floating-panel-frame {
    width: 385px;
    height: 512px;
  }
}

/* ==========================================================================
   Very small phones: no changes to the mockup here either — it stays at
   its original fixed design size.
   ========================================================================== */
</style>