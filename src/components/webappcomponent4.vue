<template>
  <section :class="['why-section py-32 px-6 border-b relative z-20 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <div ref="whyGraphic" class="relative graphic-card rounded-2xl overflow-hidden max-w-lg mx-auto w-full shadow-2xl">
        <div class="relative aspect-[4/3] overflow-hidden">
          <img
            ref="featureImage"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
            alt="Laptop dashboard displaying business analytics charts"
            width="800"
            height="600"
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 image-gradient-base"></div>
          <div class="absolute inset-0 bg-gradient-to-tr from-[var(--accent-color)]/15 to-transparent mix-blend-screen"></div>
        </div>

        <div class="p-6 space-y-5">
          <p class="text-sm leading-relaxed excerpt-text">
            Every <span class="highlight-text font-medium">custom web application</span> we build is designed to be fast, secure, and easy for your team to use.
          </p>

          <div ref="valueBadges" class="grid grid-cols-2 gap-3">
            <div v-for="(badge, idx) in badges" :key="idx" class="flex items-center gap-2.5 badge-box rounded-xl px-3 py-3">
              <span class="w-7 h-7 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 flex items-center justify-center flex-shrink-0">
                <component :is="badge.icon" class="w-3.5 h-3.5 accent-text" />
              </span>
              <span class="text-xs font-semibold badge-label">{{ badge.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-8">
        <div class="space-y-4">
          <h2 class="text-3xl md:text-5xl font-bold tracking-tight section-heading">
            Why Businesses Choose Our <span class="accent-text">Development Team</span>
          </h2>
          <p class="text-base leading-relaxed max-w-xl section-description">
            We build custom web applications and enterprise platforms using modern, scalable technology designed to help your business grow.
          </p>
        </div>

        <ul ref="whyList" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li v-for="(point, idx) in whyChoosePoints" :key="idx" class="flex items-start gap-3 p-3 rounded-lg list-item-box transition-colors duration-200">
            <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)]/20 flex items-center justify-center mt-0.5">
              <svg class="w-3 h-3 accent-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            </span>
            <span class="font-medium text-sm md:text-base list-item-text">{{ point }}</span>
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
.theme-dark { --accent-color: #00ffa3; }
.theme-light { --accent-color: #f97316; }

.accent-text { color: var(--accent-color); }

/* Apply variable to existing styles */
.theme-dark { background-color: #000; border-color: #171717; }
.theme-light { background-color: #fff; border-color: #e2e8f0; }

/* Global overrides using the accent variable */
.graphic-card { background-color: var(--graphic-card-bg, #0a0a0a); border: 1px solid var(--graphic-card-border, #171717); }
/* ... (remaining styles remain same) */
</style>