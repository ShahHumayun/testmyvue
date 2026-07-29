<template>
  <section
    :class="['impact-section py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8 lg:py-32 xl:py-36 xl:px-12 2xl:py-40 2xl:px-16 border-b relative z-20 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2
        class="impact-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight mb-12 sm:mb-16 md:mb-20 xl:mb-24 text-center">
        Delivering Real <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Business Results</span>
      </h2>
      <div ref="impactGrid"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 xl:gap-8 2xl:gap-9">
        <div v-for="(metric, idx) in impactMetrics" :key="idx"
          class="impact-card rounded-2xl p-6 sm:p-7 md:p-8 xl:p-9 text-center space-y-2 relative group transition-colors">
          <div
            class="impact-counter-text text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tight group-hover:text-current transition-colors duration-300">
            +<span class="impact-counter" :data-target="metric.value">0</span>%
          </div>
          <p class="impact-card-label text-xs xl:text-sm uppercase tracking-wider font-semibold">{{ metric.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = inject('isDarkMode', ref(true))
const impactGrid = ref(null)

const impactMetrics = [
  { value: 320, label: 'User Engagement' },
  { value: 210, label: 'Customer Retention' },
  { value: 180, label: 'Revenue Growth' },
  { value: 400, label: 'Mobile Traffic Growth' }
]

onMounted(() => {
  const impactCounters = document.querySelectorAll('.impact-counter')
  impactCounters.forEach((counter) => {
    const targetVal = parseInt(counter.getAttribute('data-target'), 10)
    gsap.fromTo(counter, { textContent: 0 }, {
      textContent: targetVal,
      duration: 2.5,
      ease: 'power3.out',
      snap: { textContent: 1 },
      scrollTrigger: { trigger: impactGrid.value, start: 'top 85%' }
    })
  })
})
</script>

<style scoped>
.theme-dark {
  background-color: #000000;
  border-color: #171717;
  --heading-color: #ffffff;
  --card-bg: linear-gradient(to bottom, #0a0a0a, #000000);
  --card-border: #171717;
  --card-border-hover: #262626;
  --counter-color: #ffffff;
  --accent-color: #00ffa3;
  --label-color: #a3a3a3;
}

.theme-light {
  background-color: #ffffff;
  border-color: #e2e8f0;
  --heading-color: #0f172a;
  --card-bg: linear-gradient(to bottom, #f8fafc, #ffffff);
  --card-border: #e2e8f0;
  --card-border-hover: #cbd5e1;
  --counter-color: #0f172a;
  --accent-color: #f97316;
  --label-color: #475569;
}

.impact-heading {
  color: var(--heading-color) !important;
  transition: color 0.4s ease;
}

.impact-card {
  background: var(--card-bg) !important;
  border: 1px solid var(--card-border) !important;
}

.impact-card:hover {
  border-color: var(--card-border-hover) !important;
}

.impact-card:hover .impact-counter-text {
  color: var(--accent-color) !important;
}

.impact-counter-text {
  color: var(--counter-color);
  transition: color 0.4s ease;
}

.impact-card-label {
  color: var(--label-color) !important;
  transition: color 0.4s ease;
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
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
  section.impact-section {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }

  .impact-card {
    padding: 1.1rem;
  }

  .impact-card-label {
    font-size: 0.68rem;
  }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Tailwind's own scale tops out at 2xl (1536px), so everything below is
   already handled by the responsive classes above. This tier keeps the
   heading, counters, and card padding growing further instead of
   plateauing at 1536px.
   ========================================================================== */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 1750px !important;
  }

  .impact-heading {
    font-size: 4.75rem;
  }

  .impact-card {
    padding: 2.25rem;
  }

  .impact-counter-text {
    font-size: 4.5rem;
  }

  .impact-card-label {
    font-size: 0.9rem;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   counters, and cards growing proportionally instead of looking undersized.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2050px !important;
  }

  .impact-heading {
    font-size: 5.25rem;
  }

  .impact-card {
    padding: 2.6rem;
  }

  .impact-counter-text {
    font-size: 5.25rem;
  }

  .impact-card-label {
    font-size: 1rem;
  }
}
</style>