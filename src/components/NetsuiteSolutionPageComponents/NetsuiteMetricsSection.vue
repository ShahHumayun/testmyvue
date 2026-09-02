<template>
  <!-- 11. SUCCESS METRICS -->
  <section :class="[
    'metrics-section py-32 px-6 border-b relative z-20 transition-colors duration-500',
    isDarkMode ? 'border-neutral-900 theme-dark' : 'border-neutral-200 theme-light'
  ]">
    <div class="max-w-7xl mx-auto metrics-container-wrapper">
      <h2
        :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-20 metrics-main-heading', isDarkMode ? 'text-white' : 'text-black']">
        Delivering Measurable <span class="accent-text">Business Impact</span>
      </h2>
      <div ref="metricsTargetGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 metrics-grid-container">
        <div v-for="(m, idx) in impactMetrics" :key="idx" :class="[
          'border rounded-xl p-8 flex flex-col justify-between min-h-[180px] relative overflow-hidden group metrics-card-box',
          isDarkMode
            ? 'bg-neutral-950 border-neutral-900'
            : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70 transition-shadow duration-300'
        ]">
          <div
            class="absolute bottom-0 right-0 w-16 h-16 accent-bg-5 blur-xl group-hover:accent-bg-10 transition-colors metrics-blob">
          </div>
          <div class="text-4xl md:text-5xl font-black accent-text font-mono tracking-tight metrics-counter-text">
            <span class="impact-value-counter" :data-target="m.value">0</span>{{ m.suffix }}
          </div>
          <p :class="[
            'text-xs font-mono uppercase tracking-wider pt-4 border-t mt-4 metrics-label-text',
            isDarkMode ? 'text-neutral-400 border-neutral-900' : 'text-neutral-600 border-neutral-200'
          ]">
            {{ m.label }}
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
const metricsTargetGrid = ref(null)

const impactMetrics = [
  { value: 80, suffix: '%', label: 'Reduction In Manual Tasks' },
  { value: 65, suffix: '%', label: 'Faster Reporting Cycles' },
  { value: 90, suffix: '%', label: 'Data Accuracy Improvement' },
  { value: 3, suffix: 'X', label: 'Operational Efficiency Boost' }
]

let triggers = []

onMounted(() => {
  const impactCounters = metricsTargetGrid.value.querySelectorAll('.impact-value-counter')
  impactCounters.forEach((counter) => {
    const targetVal = parseInt(counter.getAttribute('data-target'), 10)
    const anim = gsap.fromTo(counter, { textContent: 0 }, {
      textContent: targetVal, duration: 2.5, ease: 'power3.out', snap: { textContent: 1 },
      scrollTrigger: { trigger: metricsTargetGrid.value, start: 'top 85%' }
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

.accent-text {
  color: var(--accent-color);
}

.accent-bg-5 {
  background-color: color-mix(in srgb, var(--accent-color), transparent 95%);
}

.accent-bg-10 {
  background-color: color-mix(in srgb, var(--accent-color), transparent 90%);
}

.metrics-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.metrics-container-wrapper,
.max-w-7xl {
  max-width: 100% !important;
}

.metrics-main-heading {
  font-size: clamp(1.8rem, 3.5vw, 4rem);
}

.metrics-card-box {
  padding: clamp(1.25rem, 2vw, 2rem);
  min-height: clamp(150px, 18vw, 200px);
}

.metrics-counter-text {
  font-size: clamp(2rem, 3.5vw, 3.5rem);
}

.metrics-label-text {
  font-size: clamp(0.7rem, 0.9vw, 0.95rem);
}

.metrics-blob {
  width: clamp(3rem, 5vw, 5rem);
  height: clamp(3rem, 5vw, 5rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .metrics-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .metrics-main-heading {
    font-size: 2.8rem;
  }

  .metrics-counter-text {
    font-size: 2.8rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .metrics-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .metrics-main-heading {
    font-size: 3.5rem;
  }

  .metrics-counter-text {
    font-size: 3.2rem;
  }
}

@media (min-width: 1536px) {
  .metrics-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .metrics-main-heading {
    font-size: 4.2rem;
  }

  .metrics-counter-text {
    font-size: 3.8rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .metrics-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .metrics-main-heading {
    font-size: 5.2rem;
  }

  .metrics-counter-text {
    font-size: 4.5rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .metrics-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .metrics-main-heading {
    font-size: 2.5rem;
  }

  .metrics-counter-text {
    font-size: 2.6rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .metrics-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .metrics-main-heading {
    font-size: 2.1rem;
    margin-bottom: 2.5rem;
  }

  .metrics-grid-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  .metrics-counter-text {
    font-size: 2.4rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .metrics-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .metrics-main-heading {
    font-size: 1.65rem;
    margin-bottom: 2rem;
  }

  .metrics-grid-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.875rem;
  }

  .metrics-card-box {
    padding: 1rem;
    min-height: auto;
  }

  .metrics-counter-text {
    font-size: 2.2rem;
  }
}

@media (max-width: 360px) {
  .metrics-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .metrics-main-heading {
    font-size: 1.5rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .metrics-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
