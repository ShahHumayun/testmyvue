<template>
  <section :class="['stats-section', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="section-subtitle">
        Trusted By Growing Businesses Worldwide
      </h2>
      <div ref="counterContainer" class="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
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
  padding: 6rem 1.5rem;
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
  --accent-color: #000000; /* Changed from green to black */
}

.section-subtitle {
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 4rem;
  color: var(--text-sub) !important;
  transition: color 0.5s ease;
}

.counter-display {
  font-size: 2.25rem;
  font-weight: 900;
  color: var(--accent-color) !important;
  letter-spacing: -0.025em;
  transition: color 0.5s ease;
}

@media (min-width: 768px) {
  .counter-display {
    font-size: 3.75rem;
  }
}

.stat-label {
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--text-muted) !important;
  transition: color 0.5s ease;
}

@media (min-width: 768px) {
  .stat-label {
    font-size: 0.875rem;
  }
}
</style>