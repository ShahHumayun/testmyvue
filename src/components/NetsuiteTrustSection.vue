<template>
  <!-- 2. TRUST SECTION -->
  <section :class="[
    'trust-section py-20 px-6 border-b relative z-20 transition-colors duration-500',
    isDarkMode ? 'border-neutral-900 bg-neutral-950/20 theme-dark' : 'border-neutral-200 bg-white theme-light'
  ]">
    <div class="max-w-7xl mx-auto trust-container-wrapper">
      <h2
        :class="['text-center text-xs font-mono font-bold tracking-[0.3em] uppercase mb-12 trust-section-heading', isDarkMode ? 'text-neutral-500' : 'text-neutral-500']">
        Helping Businesses Operate Smarter
      </h2>
      <div ref="trustGrid" class="grid grid-cols-2 lg:grid-cols-4 gap-8 trust-grid-container">
        <div v-for="(stat, idx) in trustStats" :key="idx" :class="[
          'p-8 rounded-lg text-center relative group overflow-hidden border trust-card-item',
          isDarkMode
            ? 'bg-black border-neutral-900'
            : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70 transition-shadow duration-300'
        ]">
          <!-- Updated gradient to use accent color -->
          <div
            class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent-color)]/40 to-transparent">
          </div>

          <div
            :class="['text-3xl md:text-5xl font-black tracking-tight font-mono mb-2 trust-stat-value', isDarkMode ? 'text-white' : 'text-black']">
            <span class="trust-value-counter" :data-target="stat.value">0</span>{{ stat.suffix }}
          </div>
          <p
            :class="['text-xs font-mono tracking-wider uppercase trust-stat-label', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
            {{ stat.label }}</p>
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
const trustGrid = ref(null)

const trustStats = [
  { value: 20, suffix: '+', label: 'Successful Integrations' },
  { value: 50000, suffix: '+', label: 'Orders Synced' },
  { value: 100, suffix: '%', label: 'Satisfied Clients' },
  { value: 120000, suffix: '+', label: 'Products Synced' }
]

let triggers = []

onMounted(() => {
  const trustCounters = trustGrid.value.querySelectorAll('.trust-value-counter')
  trustCounters.forEach((cnt) => {
    const targetVal = parseInt(cnt.getAttribute('data-target'), 10)
    const anim = gsap.fromTo(cnt, { textContent: 0 }, {
      textContent: targetVal, duration: 2.2, ease: 'power3.out', snap: { textContent: 1 },
      scrollTrigger: { trigger: trustGrid.value, start: 'top 85%' }
    })
    if (anim.scrollTrigger) triggers.push(anim.scrollTrigger)
  })
})

onUnmounted(() => {
  triggers.forEach(t => t.kill())
})
</script>

<style scoped>
.theme-dark {
  --accent-color: #00ffa3;
}

.theme-light {
  --accent-color: #f97316;
}

.trust-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.trust-container-wrapper,
.max-w-7xl {
  max-width: 100% !important;
}

.trust-section-heading {
  font-size: clamp(0.75rem, 1vw, 1.1rem);
}

.trust-stat-value {
  font-size: clamp(1.8rem, 3.2vw, 4rem);
}

.trust-stat-label {
  font-size: clamp(0.7rem, 0.9vw, 1rem);
}

.trust-card-item {
  padding: clamp(1.25rem, 2vw, 2.5rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .trust-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .trust-stat-value {
    font-size: 2.8rem;
  }

  .trust-stat-label {
    font-size: 0.8rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .trust-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .trust-stat-value {
    font-size: 3.5rem;
  }

  .trust-stat-label {
    font-size: 0.9rem;
  }
}

@media (min-width: 1536px) {
  .trust-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .trust-stat-value {
    font-size: 4.2rem;
  }

  .trust-stat-label {
    font-size: 1rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .trust-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .trust-stat-value {
    font-size: 5.2rem;
  }

  .trust-stat-label {
    font-size: 1.2rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .trust-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .trust-stat-value {
    font-size: 2.5rem;
  }

  .trust-stat-label {
    font-size: 0.75rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .trust-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .trust-stat-value {
    font-size: 2.2rem;
  }

  .trust-stat-label {
    font-size: 0.72rem;
  }

  .trust-grid-container {
    gap: 1rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .trust-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .trust-stat-value {
    font-size: 1.8rem;
  }

  .trust-stat-label {
    font-size: 0.68rem;
  }

  .trust-grid-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .trust-card-item {
    padding: 1rem;
  }
}

@media (max-width: 360px) {
  .trust-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .trust-stat-value {
    font-size: 1.5rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .trust-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
