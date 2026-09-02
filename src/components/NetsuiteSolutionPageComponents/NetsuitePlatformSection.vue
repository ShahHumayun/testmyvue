<template>
  <!-- 5. COMMON PLATFORMS WE INTEGRATE -->
  <section :class="[
    'platform-section py-32 px-6 border-b relative z-20 overflow-hidden transition-colors duration-500',
    isDarkMode ? 'border-neutral-900 bg-[#1c1c1c] theme-dark' : 'border-neutral-200 bg-[#f2f2f2] theme-light'
  ]">
    <div class="max-w-7xl mx-auto relative platform-container-wrapper">
      <h2
        :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-24 platform-main-heading', isDarkMode ? 'text-white' : 'text-black']">
        Platforms We Connect <span class="accent-text">With NetSuite</span>
      </h2>

      <!-- Platform Integration Central Hub Grid Node Display -->
      <div ref="platformTargetGrid"
        class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 platform-grid-container">
        <div v-for="(plat, idx) in platformsList" :key="idx" :class="[
          'p-6 rounded-lg text-center group cursor-default transition-all duration-300 hover:border-[var(--accent-color)]/60 hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.03)] border platform-card-box',
          isDarkMode
            ? 'bg-black border-neutral-900'
            : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70'
        ]">
          <div class="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110 platform-icon-size">{{
            plat.icon }}</div>
          <h3 :class="[
            'text-xs font-mono font-bold tracking-wider transition-colors platform-name-text',
            isDarkMode ? 'text-neutral-400 group-hover:text-white' : 'text-neutral-600 group-hover:text-black'
          ]">
            {{ plat.name }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = inject('isDarkMode', ref(true))
const platformTargetGrid = ref(null)

const platformsList = [
  { name: 'Shopify', icon: '🛍️' }, { name: 'Salesforce', icon: '☁️' }, { name: 'HubSpot', icon: '🎯' },
  { name: 'Stripe', icon: '💳' }, { name: 'PayPal', icon: '🟡' }, { name: 'QuickBooks', icon: '📉' },
  { name: 'Amazon', icon: '📦' }, { name: 'WooCommerce', icon: '🔌' }, { name: 'Magento', icon: '🎛️' },
  { name: 'Custom Apps', icon: '💻' }
]

let scrollTriggerInstance = null

onMounted(() => {
  const anim = gsap.fromTo(platformTargetGrid.value.children, { opacity: 0, scale: 0.96 }, {
    opacity: 1, scale: 1, duration: 0.6, stagger: 0.05, ease: 'power2.out',
    scrollTrigger: { trigger: platformTargetGrid.value, start: 'top 85%' }
  })
  scrollTriggerInstance = anim.scrollTrigger
})

onUnmounted(() => {
  if (scrollTriggerInstance) scrollTriggerInstance.kill()
})
</script>

<style scoped>
.theme-dark {
  --accent-color: #00ffa3;
  --accent-rgb: 0, 255, 163;
}

.theme-light {
  --accent-color: #f97316;
  --accent-rgb: 249, 115, 22;
}

.accent-text {
  color: var(--accent-color);
}

.platform-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.platform-container-wrapper,
.max-w-7xl {
  max-width: 100% !important;
}

.platform-main-heading {
  font-size: clamp(1.8rem, 3.5vw, 4rem);
}

.platform-card-box {
  padding: clamp(1.25rem, 2vw, 2rem);
}

.platform-icon-size {
  font-size: clamp(1.5rem, 2.5vw, 2.5rem);
}

.platform-name-text {
  font-size: clamp(0.7rem, 0.9vw, 0.95rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .platform-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .platform-main-heading {
    font-size: 2.8rem;
  }

  .platform-name-text {
    font-size: 0.85rem;
  }

  .platform-icon-size {
    font-size: 2rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .platform-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .platform-main-heading {
    font-size: 3.5rem;
  }

  .platform-name-text {
    font-size: 0.9rem;
  }

  .platform-icon-size {
    font-size: 2.25rem;
  }
}

@media (min-width: 1536px) {
  .platform-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .platform-main-heading {
    font-size: 4.2rem;
  }

  .platform-name-text {
    font-size: 1rem;
  }

  .platform-icon-size {
    font-size: 2.75rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .platform-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .platform-main-heading {
    font-size: 5.2rem;
  }

  .platform-name-text {
    font-size: 1.2rem;
  }

  .platform-icon-size {
    font-size: 3.5rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .platform-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .platform-main-heading {
    font-size: 2.5rem;
  }

  .platform-name-text {
    font-size: 0.8rem;
  }

  .platform-icon-size {
    font-size: 1.85rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .platform-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .platform-main-heading {
    font-size: 2.1rem;
    margin-bottom: 2rem;
  }

  .platform-grid-container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
  }

  .platform-name-text {
    font-size: 0.75rem;
  }

  .platform-icon-size {
    font-size: 1.75rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .platform-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .platform-main-heading {
    font-size: 1.65rem;
    margin-bottom: 2rem;
  }

  .platform-grid-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.875rem;
  }

  .platform-card-box {
    padding: 1rem;
  }

  .platform-name-text {
    font-size: 0.7rem;
  }

  .platform-icon-size {
    font-size: 1.5rem;
  }
}

@media (max-width: 360px) {
  .platform-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .platform-main-heading {
    font-size: 1.5rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .platform-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>