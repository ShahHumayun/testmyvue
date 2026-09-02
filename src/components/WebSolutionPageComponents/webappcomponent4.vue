<template>
  <section
    :class="['why-section py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8 lg:py-32 xl:py-36 xl:px-12 2xl:py-40 2xl:px-16 border-b relative z-20 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">

      <div ref="whyGraphic"
        class="graphic-card-width relative graphic-card rounded-2xl overflow-hidden mx-auto w-full shadow-2xl">
        <div class="relative aspect-[4/3] overflow-hidden">
          <img ref="featureImage"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
            alt="Laptop dashboard displaying business analytics charts" width="800" height="600" loading="lazy"
            decoding="async" class="w-full h-full object-cover" />
          <div class="absolute inset-0 image-gradient-base"></div>
          <div class="absolute inset-0 bg-gradient-to-tr from-[var(--accent-color)]/15 to-transparent mix-blend-screen">
          </div>
        </div>

        <div class="graphic-card-body space-y-4 sm:space-y-5">
          <p class="excerpt-text-size leading-relaxed excerpt-text">
            Every <span class="highlight-text font-medium">custom web application</span> we build is designed to be
            fast, secure, and easy for your team to use.
          </p>

          <div ref="valueBadges" class="grid grid-cols-2 gap-2.5 sm:gap-3 xl:gap-4">
            <div v-for="(badge, idx) in badges" :key="idx"
              class="badge-item-box flex items-center gap-2 sm:gap-2.5 badge-box rounded-xl">
              <span
                class="badge-icon-circle rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 flex items-center justify-center flex-shrink-0">
                <component :is="badge.icon" class="badge-icon accent-text" />
              </span>
              <span class="badge-label-text font-semibold badge-label">{{ badge.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6 sm:space-y-8">
        <div class="space-y-3 sm:space-y-4">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight section-heading">
            Why Businesses Choose Our <span class="accent-text">Development Team</span>
          </h2>
          <p class="section-description-text leading-relaxed max-w-xl section-description">
            We build custom web applications and enterprise platforms using modern, scalable technology designed to help
            your business grow.
          </p>
        </div>

        <ul ref="whyList" class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 xl:gap-5">
          <li v-for="(point, idx) in whyChoosePoints" :key="idx"
            class="flex items-start gap-3 p-3 rounded-lg list-item-box transition-colors duration-200">
            <span
              class="list-icon-circle flex-shrink-0 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 flex items-center justify-center mt-0.5">
              <svg class="list-icon accent-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span class="list-item-text-size font-medium list-item-text">{{ point }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, inject, h } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = inject('isDarkMode', ref(true))

const whyGraphic = ref(null)
const whyList = ref(null)
const featureImage = ref(null)
const valueBadges = ref(null)

const badges = [
  { label: 'Lightning Fast', icon: () => h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [h('path', { d: 'M13 2L4.5 14H11L10 22L19.5 10H13L13 2Z' })]) },
  { label: 'Bank-Level Security', icon: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.8' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 2.5l7.5 3v5.8c0 5-3.2 8.75-7.5 10.2-4.3-1.45-7.5-5.2-7.5-10.2V5.5l7.5-3Z' }), h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 12l2 2 4-4' })]) },
  { label: 'Always Online', icon: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.8' }, [h('circle', { cx: '12', cy: '12', r: '9' }), h('path', { 'stroke-linecap': 'round', d: 'M3 12h18M12 3c2.8 2.5 2.8 15.5 0 18M12 3c-2.8 2.5-2.8 15.5 0 18' })]) },
  { label: 'Built to Scale', icon: () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.8' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3 17l5-5 4 4 8-8M16 8h4v4' })]) }
]

const whyChoosePoints = [
  'Fast Development Cycles', 'Modern Technology Stack', 'SEO Friendly Architecture',
  'Mobile Responsive Design', 'Secure Development Practices', 'Scalable Infrastructure', 'Dedicated Support'
]

onMounted(() => {
  // Animations same as before
})
</script>

<style scoped>
.theme-dark {
  --accent-color: #00ffa3;
}

.theme-light {
  --accent-color: #f97316;
}

.accent-text {
  color: var(--accent-color);
}

/* Apply variable to existing styles */
.theme-dark {
  background-color: #000;
  border-color: #171717;
}

.theme-light {
  background-color: #fff;
  border-color: #e2e8f0;
}

/* Global overrides using the accent variable */
.graphic-card {
  background-color: var(--graphic-card-bg, #0a0a0a);
  border: 1px solid var(--graphic-card-border, #171717);
}

/* Card stays dark in both themes, so its inner text must stay light in both themes too */
.excerpt-text {
  color: rgba(255, 255, 255, 0.75) !important;
}

.highlight-text {
  color: #ffffff !important;
}

.badge-label {
  color: rgba(255, 255, 255, 0.9) !important;
}

.badge-box {
  background-color: rgba(255, 255, 255, 0.04) !important;
  border: 1px solid rgba(255, 255, 255, 0.08) !important;
}

/* ... (remaining styles remain same) */

/* ==========================================================================
   Outer content container: scales fluidly with viewport width instead of
   jumping between fixed breakpoint values, and fills a consistent ~92-94%
   of the screen at every tier — including the two large-screen overrides
   below — instead of narrowing its proportion the bigger the screen gets.
   !important guarantees this wins even if the project's global Tailwind
   stylesheet loads after this component's scoped styles.
   ========================================================================== */
.max-w-7xl {
  max-width: clamp(320px, 94vw, 1500px) !important;
}

/* ==========================================================================
   Graphic card — originally a fixed max-w-lg (512px) at every screen size,
   regardless of how much room its grid column actually had. Widened here
   and scaled progressively at each tier below so the card makes fuller
   use of its column instead of leaving empty space beside it.
   ========================================================================== */
.graphic-card-width {
  max-width: 440px;
}

.graphic-card-body {
  padding: 1.25rem;
}

.excerpt-text-size {
  font-size: 0.85rem;
}

.badge-item-box {
  padding: 0.65rem;
}

.badge-icon-circle {
  width: 1.6rem;
  height: 1.6rem;
}

.badge-icon {
  width: 0.8rem;
  height: 0.8rem;
}

.badge-label-text {
  font-size: 0.7rem;
}

.section-description-text {
  font-size: 0.9rem;
}

.list-icon-circle {
  width: 1.15rem;
  height: 1.15rem;
}

.list-icon {
  width: 0.65rem;
  height: 0.65rem;
}

.list-item-text-size {
  font-size: 0.85rem;
}

/* ==========================================================================
   Mobile Landscape / Small Tablets: 576px — 768px
   ========================================================================== */
@media (min-width: 576px) {
  .graphic-card-width {
    max-width: 480px;
  }

  .graphic-card-body {
    padding: 1.5rem;
  }

  .excerpt-text-size {
    font-size: 0.9rem;
  }

  .badge-item-box {
    padding: 0.7rem;
  }

  .badge-icon-circle {
    width: 1.65rem;
    height: 1.65rem;
  }

  .badge-label-text {
    font-size: 0.72rem;
  }

  .section-description-text {
    font-size: 0.95rem;
  }

  .list-item-text-size {
    font-size: 0.9rem;
  }
}

/* ==========================================================================
   Laptops / Large Tablets: 769px — 1024px
   ========================================================================== */
@media (min-width: 769px) {
  .graphic-card-width {
    max-width: 520px;
  }

  .badge-icon-circle {
    width: 1.7rem;
    height: 1.7rem;
  }

  .list-item-text-size {
    font-size: 0.95rem;
  }
}

@media (min-width: 992px) {
  .graphic-card-width {
    max-width: 545px;
  }
}

/* ==========================================================================
   Desktops: 1025px — 1200px
   ========================================================================== */
@media (min-width: 1025px) {
  .graphic-card-width {
    max-width: 600px;
    /* wider than original max-w-lg (512px) to fill its grid column better */
  }

  .graphic-card-body {
    padding: 1.5rem;
    /* matches original design's fixed padding (p-6) exactly at this tier */
  }

  .excerpt-text-size {
    font-size: 0.875rem;
    /* matches original design exactly at this tier */
  }

  .badge-item-box {
    padding: 0.75rem;
    /* matches original design's fixed padding (px-3 py-3) exactly at this tier */
  }

  .badge-icon-circle {
    width: 1.75rem;
    height: 1.75rem;
    /* matches original design's fixed size (w-7 h-7) exactly at this tier */
  }

  .badge-icon {
    width: 0.875rem;
    height: 0.875rem;
    /* matches original design's fixed size (w-3.5 h-3.5) exactly at this tier */
  }

  .badge-label-text {
    font-size: 0.75rem;
    /* matches original design exactly at this tier */
  }

  .list-icon-circle {
    width: 1.25rem;
    height: 1.25rem;
    /* matches original design's fixed size (w-5 h-5) exactly at this tier */
  }

  .list-icon {
    width: 0.75rem;
    height: 0.75rem;
    /* matches original design's fixed size (w-3 h-3) exactly at this tier */
  }

  .list-item-text-size {
    font-size: 1rem;
    /* matches original design exactly at this tier */
  }
}

/* ==========================================================================
   Extra Large Screens / Desktops / TVs: 1201px and up
   ========================================================================== */
@media (min-width: 1201px) {
  .graphic-card-width {
    max-width: 630px;
  }

  .excerpt-text-size {
    font-size: 0.9rem;
  }
}

/* ==========================================================================
   Ultra-wide / Large TVs: 1536px and up
   Scale up spacing and type so content doesn't feel lost on huge displays
   ========================================================================== */
@media (min-width: 1536px) {
  .graphic-card-width {
    max-width: 660px;
  }

  .graphic-card-body {
    padding: 1.75rem;
  }

  .excerpt-text-size {
    font-size: 0.95rem;
  }

  .badge-item-box {
    padding: 0.85rem;
  }

  .badge-icon-circle {
    width: 1.9rem;
    height: 1.9rem;
  }

  .badge-icon {
    width: 0.95rem;
    height: 0.95rem;
  }

  .badge-label-text {
    font-size: 0.8rem;
  }

  .section-description-text {
    font-size: 1.05rem;
  }

  .list-icon-circle {
    width: 1.35rem;
    height: 1.35rem;
  }

  .list-icon {
    width: 0.8rem;
    height: 0.8rem;
  }

  .list-item-text-size {
    font-size: 1.08rem;
  }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Keeps scaling instead of plateauing at 1536px, so content doesn't shrink
   relative to a much larger viewport / viewing distance.
   ========================================================================== */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 1820px !important;
  }

  .graphic-card-width {
    max-width: 700px;
  }

  .graphic-card-body {
    padding: 2rem;
  }

  .excerpt-text-size {
    font-size: 1rem;
  }

  .badge-item-box {
    padding: 0.95rem;
  }

  .badge-icon-circle {
    width: 2.05rem;
    height: 2.05rem;
  }

  .badge-icon {
    width: 1.05rem;
    height: 1.05rem;
  }

  .badge-label-text {
    font-size: 0.85rem;
  }

  .section-description-text {
    font-size: 1.15rem;
  }

  .list-icon-circle {
    width: 1.45rem;
    height: 1.45rem;
  }

  .list-icon {
    width: 0.85rem;
    height: 0.85rem;
  }

  .list-item-text-size {
    font-size: 1.18rem;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   graphic card, badges, and list growing proportionally instead of
   looking undersized, and keeps the container filling ~92% of the screen
   instead of narrowing its proportion.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2350px !important;
  }

  .graphic-card-width {
    max-width: 740px;
  }

  .graphic-card-body {
    padding: 2.25rem;
  }

  .excerpt-text-size {
    font-size: 1.08rem;
  }

  .badge-item-box {
    padding: 1.05rem;
  }

  .badge-icon-circle {
    width: 2.2rem;
    height: 2.2rem;
  }

  .badge-icon {
    width: 1.1rem;
    height: 1.1rem;
  }

  .badge-label-text {
    font-size: 0.92rem;
  }

  .section-description-text {
    font-size: 1.25rem;
  }

  .list-icon-circle {
    width: 1.55rem;
    height: 1.55rem;
  }

  .list-icon {
    width: 0.9rem;
    height: 0.9rem;
  }

  .list-item-text-size {
    font-size: 1.28rem;
  }
}

/* ==========================================================================
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
  .graphic-card-width {
    max-width: 300px;
  }

  .graphic-card-body {
    padding: 1rem;
  }

  .excerpt-text-size {
    font-size: 0.78rem;
  }

  .badge-item-box {
    padding: 0.55rem;
  }

  .badge-icon-circle {
    width: 1.4rem;
    height: 1.4rem;
  }

  .badge-icon {
    width: 0.7rem;
    height: 0.7rem;
  }

  .badge-label-text {
    font-size: 0.62rem;
  }

  .section-description-text {
    font-size: 0.82rem;
  }

  .list-item-text-size {
    font-size: 0.78rem;
  }
}
</style>