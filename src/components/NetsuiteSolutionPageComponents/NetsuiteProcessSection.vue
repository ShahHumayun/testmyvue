<template>
  <!-- 7. OUR INTEGRATION PROCESS -->
  <section :class="[
    'process-section py-32 px-6 border-b relative z-20 transition-colors duration-500',
    isDarkMode ? 'border-neutral-900 theme-dark' : 'border-neutral-200 theme-light'
  ]">
    <div class="max-w-7xl mx-auto process-container-wrapper">
      <h2
        :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-24 process-main-heading', isDarkMode ? 'text-white' : 'text-black']">
        Our Proven <span class="accent-text">Integration Methodology</span>
      </h2>

      <div ref="processContainer"
        class="relative block lg:flex items-start justify-between gap-6 space-y-12 lg:space-y-0 process-grid-container">
        <!-- Central Connecting Sequence Timeline Wire -->
        <div
          :class="['hidden lg:block absolute top-[23px] left-0 right-0 h-[1px] z-0', isDarkMode ? 'bg-neutral-900' : 'bg-neutral-200']">
        </div>
        <div ref="processLineFiller"
          class="hidden lg:block absolute top-[23px] left-0 h-[1px] bg-[var(--accent-color)] z-0 origin-left scale-x-0">
        </div>

        <div v-for="(step, idx) in sequenceSteps" :key="idx"
          class="process-card relative z-10 flex-1 group process-card-box">
          <div class="flex lg:flex-col items-center lg:items-start gap-6 lg:gap-0">
            <div :class="[
              'w-12 h-12 rounded flex items-center justify-center font-mono font-bold text-xs group-hover:border-[var(--accent-color)] group-hover:text-[var(--accent-color)] transition-all duration-500 shadow-xl lg:mb-6 flex-shrink-0 border process-badge-box',
              isDarkMode ? 'bg-black border-neutral-800 text-neutral-500' : 'bg-white border-neutral-300 text-neutral-500'
            ]">
              0{{ idx + 1 }}
            </div>
            <div>
              <h3
                :class="['text-lg font-bold mb-2 tracking-tight group-hover:text-[var(--accent-color)] transition-colors process-card-title', isDarkMode ? 'text-white' : 'text-black']">
                {{ step.title }}
              </h3>
              <p
                :class="['text-xs md:text-sm leading-relaxed max-w-sm process-card-desc', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
                {{ step.desc }}
              </p>
            </div>
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
const processContainer = ref(null)
const processLineFiller = ref(null)

const sequenceSteps = [
  { title: 'Discovery & Analysis', desc: 'Review active legacy platforms and core architectural mandates.' },
  { title: 'Integration Architecture', desc: 'Design secure multi-tier data mapping maps and system models.' },
  { title: 'Development', desc: 'Write precise custom connector APIs and transaction logic hooks.' },
  { title: 'Testing & Validation', desc: 'Verify pipeline payload structural accuracy and edge recovery safety.' },
  { title: 'Deployment', desc: 'Launch complete integration pipelines with zero runtime operational delay.' },
  { title: 'Monitoring & Support', desc: 'Provide continuous log tracking and network infrastructure updates.' }
]

let triggers = []

onMounted(() => {
  const lineAnim = gsap.fromTo(processLineFiller.value, { scaleX: 0 }, {
    scaleX: 1, ease: 'none',
    scrollTrigger: {
      trigger: processContainer.value,
      start: 'top 70%', end: 'bottom 60%', scrub: true
    }
  })
  if (lineAnim.scrollTrigger) triggers.push(lineAnim.scrollTrigger)

  const processCards = processContainer.value.querySelectorAll('.process-card')
  processCards.forEach((card) => {
    const cardAnim = gsap.fromTo(card, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: card, start: 'top 85%' }
    })
    if (cardAnim.scrollTrigger) triggers.push(cardAnim.scrollTrigger)
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

.accent-text {
  color: var(--accent-color);
}

.process-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.process-container-wrapper,
.max-w-7xl {
  max-width: 100% !important;
}

.process-main-heading {
  font-size: clamp(1.8rem, 3.5vw, 4rem);
}

.process-card-title {
  font-size: clamp(1rem, 1.3vw, 1.35rem);
}

.process-card-desc {
  font-size: clamp(0.7rem, 0.95vw, 1rem);
}

.process-badge-box {
  width: clamp(2.5rem, 3.5vw, 3.5rem);
  height: clamp(2.5rem, 3.5vw, 3.5rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .process-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .process-main-heading {
    font-size: 2.8rem;
  }

  .process-card-title {
    font-size: 1.15rem;
  }

  .process-card-desc {
    font-size: 0.85rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .process-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .process-main-heading {
    font-size: 3.5rem;
  }

  .process-card-title {
    font-size: 1.25rem;
  }

  .process-card-desc {
    font-size: 0.95rem;
  }
}

@media (min-width: 1536px) {
  .process-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .process-main-heading {
    font-size: 4.2rem;
  }

  .process-card-title {
    font-size: 1.4rem;
  }

  .process-card-desc {
    font-size: 1.05rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .process-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .process-main-heading {
    font-size: 5.2rem;
  }

  .process-card-title {
    font-size: 1.7rem;
  }

  .process-card-desc {
    font-size: 1.25rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .process-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .process-main-heading {
    font-size: 2.5rem;
  }

  .process-card-title {
    font-size: 1.1rem;
  }

  .process-card-desc {
    font-size: 0.8rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .process-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .process-main-heading {
    font-size: 2.1rem;
    margin-bottom: 2rem;
  }

  .process-card-title {
    font-size: 1.05rem;
  }

  .process-card-desc {
    font-size: 0.8rem;
  }

  .process-grid-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .process-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .process-main-heading {
    font-size: 1.65rem;
    margin-bottom: 2rem;
  }

  .process-grid-container {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .process-card-box {
    padding: 0.5rem 0;
  }

  .process-card-title {
    font-size: 1rem;
  }

  .process-card-desc {
    font-size: 0.75rem;
  }

  .process-badge-box {
    width: 2.25rem;
    height: 2.25rem;
  }
}

@media (max-width: 360px) {
  .process-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .process-main-heading {
    font-size: 1.5rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .process-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
