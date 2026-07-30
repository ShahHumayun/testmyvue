<template>
  <section :class="[
    'bottleneck-section py-32 px-6 border-b relative z-20 transition-colors duration-500',
    isDarkMode ? 'border-neutral-900 theme-dark' : 'border-neutral-200 theme-light'
  ]">
    <div class="max-w-7xl mx-auto bottleneck-container-wrapper">
      <h2
        :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-20 bottleneck-main-heading', isDarkMode ? 'text-white' : 'text-black']">
        Eliminate Operational <span class="accent-text">Bottlenecks</span>
      </h2>
      <div ref="challengesGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bottleneck-grid-container">
        <div v-for="(card, idx) in challengeMatrix" :key="idx" :class="[
          'challenge-node-card border rounded-xl p-6 min-h-[160px] flex flex-col justify-between transition-all duration-500 cursor-pointer group',
          isDarkMode ? 'bg-neutral-950 border-neutral-900' : 'bg-white border-neutral-200'
        ]">
          <div>
            <span
              :class="['text-[10px] font-mono tracking-widest block mb-2 uppercase bottleneck-system-state', isDarkMode ? 'text-neutral-600' : 'text-neutral-500']">SYSTEM
              STATE INTERCEPT</span>
            <h3
              :class="['text-base font-bold transition-colors group-hover:text-[var(--accent-color)] bottleneck-card-title', isDarkMode ? 'text-neutral-300' : 'text-black']">
              {{ card.challenge }}
            </h3>
          </div>
          <div :class="[
            'border-t pt-4 text-xs font-mono transition-colors flex items-center justify-between bottleneck-footer-layer',
            isDarkMode ? 'border-neutral-900/60 text-neutral-500 group-hover:text-white' : 'border-neutral-200 text-neutral-500 group-hover:text-black'
          ]">
            <span class="bottleneck-resolution-text">Resolution Layer</span>
            <span
              class="opacity-0 group-hover:opacity-100 transition-opacity accent-text font-bold bottleneck-solution-text">→
              {{ card.solution }}</span>
          </div>
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
const challengesGrid = ref(null)

const challengeMatrix = [
  { challenge: 'Manual Data Entry Operations', solution: 'Automated Realtime Sync' },
  { challenge: 'Disconnected Application Frameworks', solution: 'Unified Network Hub' },
  { challenge: 'Inaccurate Multi-Warehouse Quantities', solution: 'True Inventory Ledger' },
  { challenge: 'Delayed Reporting Syntheses', solution: 'Instant Analytics Stream' },
  { challenge: 'Isolated Customer Insight Profiles', solution: 'Omnichannel Single Log' },
  { challenge: 'Frequent Financial Balancing Discrepancies', solution: 'Ledger Audit Lockdown' },
  { challenge: 'Fulfillment Sequence Delivery Lag', solution: 'Direct Webhook Execution' },
  { challenge: 'Obscured Executive Management Visibility', solution: 'Live Performance View' }
]

let scrollTriggerInstance = null

onMounted(() => {
  const anim = gsap.fromTo(challengesGrid.value.children, { opacity: 0, y: 25 }, {
    opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out',
    scrollTrigger: { trigger: challengesGrid.value, start: 'top 85%' }
  })
  scrollTriggerInstance = anim.scrollTrigger
})

onUnmounted(() => { if (scrollTriggerInstance) scrollTriggerInstance.kill() })
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

.challenge-node-card:hover {
  border-color: color-mix(in srgb, var(--accent-color), transparent 60%);
}

.theme-dark .challenge-node-card:hover {
  background-color: #050505;
}

.theme-light .challenge-node-card:hover {
  background-color: #f8fafc;
}

.bottleneck-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.bottleneck-container-wrapper,
.max-w-7xl {
  max-width: 100% !important;
}

.bottleneck-main-heading {
  font-size: clamp(1.8rem, 3.5vw, 4rem);
}

.bottleneck-system-state {
  font-size: clamp(0.65rem, 0.8vw, 0.8rem);
}

.bottleneck-card-title {
  font-size: clamp(0.95rem, 1.25vw, 1.25rem);
}

.bottleneck-resolution-text,
.bottleneck-solution-text {
  font-size: clamp(0.7rem, 0.9vw, 0.95rem);
}

.challenge-node-card {
  padding: clamp(1.25rem, 2vw, 2rem);
  min-height: clamp(140px, 18vw, 200px);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .bottleneck-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .bottleneck-main-heading {
    font-size: 2.8rem;
  }

  .bottleneck-card-title {
    font-size: 1.1rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .bottleneck-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .bottleneck-main-heading {
    font-size: 3.5rem;
  }

  .bottleneck-card-title {
    font-size: 1.2rem;
  }
}

@media (min-width: 1536px) {
  .bottleneck-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .bottleneck-main-heading {
    font-size: 4.2rem;
  }

  .bottleneck-card-title {
    font-size: 1.35rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .bottleneck-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .bottleneck-main-heading {
    font-size: 5.2rem;
  }

  .bottleneck-card-title {
    font-size: 1.6rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .bottleneck-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .bottleneck-main-heading {
    font-size: 2.5rem;
  }

  .bottleneck-card-title {
    font-size: 1.05rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .bottleneck-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .bottleneck-main-heading {
    font-size: 2.1rem;
    margin-bottom: 2.5rem;
  }

  .bottleneck-card-title {
    font-size: 1rem;
  }

  .bottleneck-grid-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .bottleneck-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .bottleneck-main-heading {
    font-size: 1.65rem;
    margin-bottom: 2rem;
  }

  .bottleneck-grid-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.875rem;
  }

  .challenge-node-card {
    padding: 1rem;
    min-height: auto;
  }

  .bottleneck-card-title {
    font-size: 0.95rem;
  }
}

@media (max-width: 360px) {
  .bottleneck-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .bottleneck-main-heading {
    font-size: 1.5rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .bottleneck-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
