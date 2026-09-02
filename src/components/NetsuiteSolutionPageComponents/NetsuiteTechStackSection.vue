<template>
  <!-- 13. TECHNOLOGY SECTION -->
  <section :class="[
    'tech-section py-32 px-6 border-b relative z-20 transition-colors duration-500',
    isDarkMode ? 'border-neutral-900 theme-dark' : 'border-neutral-200 theme-light'
  ]">
    <div class="max-w-7xl mx-auto tech-container-wrapper">
      <h2
        :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-20 tech-main-heading', isDarkMode ? 'text-white' : 'text-black']">
        Built Using Modern <span class="accent-text">Integration Technologies</span>
      </h2>
      <div ref="techWrapper" class="grid grid-cols-2 md:grid-cols-4 gap-4 tech-grid-container">
        <div v-for="(tech, idx) in techInfrastructure" :key="idx" :class="[
          'tech-card p-6 rounded-lg text-center font-mono text-xs hover:text-[var(--accent-color)] hover:border-[var(--accent-color)]/40 transition-all duration-300 flex flex-col justify-center items-center min-h-[100px] border tech-card-box',
          isDarkMode
            ? 'bg-neutral-950 border-neutral-900 text-neutral-300'
            : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70 text-neutral-700'
        ]">
          <span :class="[
            'w-1.5 h-1.5 rounded-full mb-3 inline-block marker-indicator transition-colors tech-indicator',
            isDarkMode ? 'bg-neutral-800' : 'bg-neutral-300'
          ]"></span>
          <span class="tech-card-text">{{ tech }}</span>
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
const techWrapper = ref(null)

const techInfrastructure = [
  'NetSuite SuiteTalk API', 'REST APIs Architecture', 'SOAP Web Services', 'Middleware Enterprise Solutions',
  'Custom Enterprise Connectors', 'Cloud Infrastructure Services', 'Advanced Automation Platforms', 'Secure Data Pipelines'
]

let scrollTriggerInstance = null

onMounted(() => {
  const anim = gsap.fromTo(techWrapper.value.children, { opacity: 0, scale: 0.97 }, {
    opacity: 1, scale: 1, duration: 0.5, stagger: 0.06, ease: 'power2.out',
    scrollTrigger: { trigger: techWrapper.value, start: 'top 85%' }
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

.tech-card:hover .marker-indicator {
  background-color: var(--accent-color);
  box-shadow: 0 0 8px var(--accent-color);
}

.tech-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.tech-container-wrapper,
.max-w-7xl {
  max-width: 100% !important;
}

.tech-main-heading {
  font-size: clamp(1.8rem, 3.5vw, 4rem);
}

.tech-card-box {
  padding: clamp(1rem, 2vw, 1.75rem);
}

.tech-card-text {
  font-size: clamp(0.7rem, 0.95vw, 1.05rem);
}

.tech-indicator {
  width: clamp(0.35rem, 0.5vw, 0.5rem);
  height: clamp(0.35rem, 0.5vw, 0.5rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .tech-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .tech-main-heading {
    font-size: 2.8rem;
  }

  .tech-card-text {
    font-size: 0.9rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .tech-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .tech-main-heading {
    font-size: 3.5rem;
  }

  .tech-card-text {
    font-size: 1rem;
  }
}

@media (min-width: 1536px) {
  .tech-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .tech-main-heading {
    font-size: 4.2rem;
  }

  .tech-card-text {
    font-size: 1.1rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .tech-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .tech-main-heading {
    font-size: 5.2rem;
  }

  .tech-card-text {
    font-size: 1.3rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .tech-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .tech-main-heading {
    font-size: 2.5rem;
  }

  .tech-card-text {
    font-size: 0.85rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .tech-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .tech-main-heading {
    font-size: 2.1rem;
    margin-bottom: 2rem;
  }

  .tech-grid-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .tech-card-text {
    font-size: 0.8rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .tech-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .tech-main-heading {
    font-size: 1.65rem;
    margin-bottom: 2rem;
  }

  .tech-grid-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.875rem;
  }

  .tech-card-box {
    padding: 1rem;
    min-height: 80px;
  }

  .tech-card-text {
    font-size: 0.75rem;
  }
}

@media (max-width: 360px) {
  .tech-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .tech-main-heading {
    font-size: 1.5rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .tech-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
