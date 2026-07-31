<template>
  <section :class="[
    'industry-section py-32 px-6 border-b relative z-20 transition-colors duration-500',
    isDarkMode ? 'border-neutral-900 bg-[#1c1c1c] theme-dark' : 'border-neutral-200 bg-[#f2f2f2] theme-light'
  ]">
    <div class="max-w-7xl mx-auto industry-container-wrapper">
      <h2
        :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-20 industry-main-heading', isDarkMode ? 'text-white' : 'text-black']">
        NetSuite Integrations <span class="accent-text">Across Industries</span>
      </h2>
      <div ref="industriesTargetGrid"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 industry-grid-container">
        <div v-for="(ind, i) in industryVerticals" :key="i" :class="[
          'border rounded-lg p-6 transition-all duration-300 group hover:border-[var(--accent-color)]/40 industry-card-box',
          isDarkMode
            ? 'bg-neutral-950 border-neutral-900 hover:bg-neutral-900/60'
            : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70'
        ]">
          <h3
            :class="['text-lg font-bold group-hover:text-[var(--accent-color)] transition-colors mb-2 industry-card-title', isDarkMode ? 'text-white' : 'text-black']">
            {{ ind }}
          </h3>
          <p
            :class="['text-xs leading-relaxed font-mono industry-card-desc', isDarkMode ? 'text-neutral-500' : 'text-neutral-600']">
            Deploying verified baseline integrations specialized for {{ ind.toLowerCase() }} optimization vectors.
          </p>
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
const industriesTargetGrid = ref(null)

const industryVerticals = [
  'Manufacturing', 'Retail', 'Wholesale Distribution', 'Healthcare', 'Financial Services', 'Technology', 'Logistics', 'Professional Services', 'Ecommerce'
]

let scrollTriggerInstance = null

onMounted(() => {
  const anim = gsap.fromTo(industriesTargetGrid.value.children, { opacity: 0, y: 20 }, {
    opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out',
    scrollTrigger: { trigger: industriesTargetGrid.value, start: 'top 85%' }
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
}

.theme-light {
  --accent-color: #f97316;
}

.accent-text {
  color: var(--accent-color);
}

.industry-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.industry-container-wrapper,
.max-w-7xl {
  max-width: 100% !important;
}

.industry-main-heading {
  font-size: clamp(1.8rem, 3.5vw, 4rem);
}

.industry-card-box {
  padding: clamp(1.25rem, 2vw, 2rem);
}

.industry-card-title {
  font-size: clamp(1rem, 1.3vw, 1.35rem);
}

.industry-card-desc {
  font-size: clamp(0.7rem, 0.9vw, 0.95rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .industry-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .industry-main-heading {
    font-size: 2.8rem;
  }

  .industry-card-title {
    font-size: 1.15rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .industry-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .industry-main-heading {
    font-size: 3.5rem;
  }

  .industry-card-title {
    font-size: 1.25rem;
  }
}

@media (min-width: 1536px) {
  .industry-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .industry-main-heading {
    font-size: 4.2rem;
  }

  .industry-card-title {
    font-size: 1.4rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .industry-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .industry-main-heading {
    font-size: 5.2rem;
  }

  .industry-card-title {
    font-size: 1.7rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .industry-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .industry-main-heading {
    font-size: 2.5rem;
  }

  .industry-card-title {
    font-size: 1.1rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .industry-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .industry-main-heading {
    font-size: 2.1rem;
    margin-bottom: 2.5rem;
  }

  .industry-card-title {
    font-size: 1.05rem;
  }

  .industry-grid-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .industry-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .industry-main-heading {
    font-size: 1.65rem;
    margin-bottom: 2rem;
  }

  .industry-grid-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.875rem;
  }

  .industry-card-box {
    padding: 1rem;
  }

  .industry-card-title {
    font-size: 1rem;
  }
}

@media (max-width: 360px) {
  .industry-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .industry-main-heading {
    font-size: 1.5rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .industry-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>