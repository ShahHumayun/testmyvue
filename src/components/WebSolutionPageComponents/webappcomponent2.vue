<template>
  <section :class="['stats-section', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="section-subtitle">
        Trusted By Growing Businesses Worldwide
      </h2>
      <div ref="counterContainer"
        class="stats-grid grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-14 2xl:gap-16">
        <div v-for="(stat, idx) in stats" :key="idx" class="text-center space-y-2">
          <div class="counter-display">
            <span class="counter-val" :data-target="stat.value">0</span>{{ stat.suffix }}
          </div>
          <p class="stat-label">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const isDarkMode = inject('isDarkMode', ref(true))

gsap.registerPlugin(ScrollTrigger)
const counterContainer = ref(null)

const stats = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 50, suffix: '+', label: 'Business Solutions Created' },
  { value: 15, suffix: '+', label: 'Years Experience' }
]

onMounted(() => {
  const counters = counterContainer.value.querySelectorAll('.counter-val')
  counters.forEach((counter) => {
    const targetValue = parseInt(counter.getAttribute('data-target'), 10)
    gsap.fromTo(counter,
      { textContent: 0 },
      {
        textContent: targetValue,
        duration: 2.5,
        ease: 'power3.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: counterContainer.value,
          start: 'top 85%'
        }
      }
    )
  })
})
</script>

<style scoped>
.stats-section {
  padding: 3.5rem 1rem;
  position: relative;
  z-index: 20;
  width: 100% !important;
  background-color: var(--bg-main) !important;
  color: var(--text-main) !important;
  border-bottom: 1px solid var(--border-color) !important;
  transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
}

.stats-section:where(.theme-dark) {
  --bg-main: #000000;
  --text-main: #ffffff;
  --text-muted: #a3a3a3;
  --text-sub: #525252;
  --border-color: #171717;
  --accent-color: #00ffa3;
}

.stats-section:where(.theme-light) {
  --bg-main: #ffffff;
  --text-main: #0f172a;
  --text-muted: #475569;
  --text-sub: #64748b;
  --border-color: #e2e8f0;
  --accent-color: #000000;
  /* Changed from green to black */
}

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

.section-subtitle {
  text-align: center;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 2.5rem;
  color: var(--text-sub) !important;
  transition: color 0.5s ease;
}

.counter-display {
  font-size: 2rem;
  font-weight: 900;
  color: var(--accent-color) !important;
  letter-spacing: -0.025em;
  transition: color 0.5s ease;
}

.stat-label {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-muted) !important;
  transition: color 0.5s ease;
  white-space: nowrap;
}

/* ==========================================================================
   Mobile Landscape / Small Tablets: 576px — 768px
   ========================================================================== */
@media (min-width: 576px) {
  .stats-section {
    padding: 4rem 1.5rem;
  }

  .section-subtitle {
    font-size: 0.85rem;
    margin-bottom: 3rem;
  }

  .counter-display {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 0.75rem;
  }
}

/* ==========================================================================
   Laptops / Large Tablets: 769px — 1024px
   ========================================================================== */
@media (min-width: 769px) {
  .stats-section {
    padding: 5rem 2rem;
  }

  .section-subtitle {
    font-size: 0.875rem;
    margin-bottom: 3.5rem;
  }

  .counter-display {
    font-size: 3.75rem;
  }

  .stat-label {
    font-size: 0.875rem;
  }
}

@media (min-width: 992px) {
  .stats-section {
    padding: 5.5rem 2rem;
  }
}

/* ==========================================================================
   Desktops: 1025px — 1200px
   ========================================================================== */
@media (min-width: 1025px) {
  .stats-section {
    padding: 6rem 1.5rem;
    /* matches original design's fixed padding exactly at this tier */
  }

  .section-subtitle {
    margin-bottom: 4rem;
    /* matches original design exactly at this tier */
  }
}

/* ==========================================================================
   Extra Large Screens / Desktops / TVs: 1201px and up
   ========================================================================== */
@media (min-width: 1201px) {
  .counter-display {
    font-size: 4rem;
  }

  .stat-label {
    font-size: 0.9rem;
  }
}

/* ==========================================================================
   Ultra-wide / Large TVs: 1536px and up
   Scale up spacing and type so content doesn't feel lost on huge displays
   ========================================================================== */
@media (min-width: 1536px) {
  .stats-section {
    padding: 7rem 2rem;
  }

  .section-subtitle {
    font-size: 0.95rem;
    margin-bottom: 4.5rem;
  }

  .counter-display {
    font-size: 4.5rem;
  }

  .stat-label {
    font-size: 0.95rem;
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

  .stats-section {
    padding: 8rem 2rem;
  }

  .section-subtitle {
    font-size: 1.05rem;
    margin-bottom: 5rem;
  }

  .counter-display {
    font-size: 5rem;
  }

  .stat-label {
    font-size: 1.02rem;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   counters, and labels growing proportionally instead of looking
   undersized, and keeps the container filling ~92% of the screen instead
   of narrowing its proportion.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2350px !important;
  }

  .stats-section {
    padding: 9rem 2rem;
  }

  .section-subtitle {
    font-size: 1.15rem;
    margin-bottom: 5.5rem;
  }

  .counter-display {
    font-size: 5.75rem;
  }

  .stat-label {
    font-size: 1.1rem;
  }

  .stats-grid {
    gap: 4.5rem;
  }
}

/* ==========================================================================
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
  .stats-section {
    padding: 2.75rem 0.875rem;
  }

  .section-subtitle {
    font-size: 0.7rem;
    margin-bottom: 2rem;
    letter-spacing: 0.1em;
  }

  .counter-display {
    font-size: 1.7rem;
  }

  .stat-label {
    font-size: 0.62rem;
  }
}
</style>