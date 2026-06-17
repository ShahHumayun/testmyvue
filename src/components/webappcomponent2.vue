<template>
  <section :class="['stats-section', props.darkMode ? 'theme-dark' : 'theme-light']">
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
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const props = defineProps({
  darkMode: {
    type: Boolean,
    default: true
  }
})

gsap.registerPlugin(ScrollTrigger)
const counterContainer = ref(null)

const stats = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 50, suffix: '+', label: 'Business Solutions Created' },
  { value: 15, suffix: '+', label: 'Years Experience' }
]

onMounted(() => {
  const counters = document.querySelectorAll('.counter-val')
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
/* ----------------------------------------- */
/* ROOT STYLES & THEME SWITCHING             */
/* ----------------------------------------- */
.stats-section {
  padding: 6rem 1.5rem;
  position: relative;
  z-index: 20;
  
  /* Bind structural styles dynamically to the root variables */
  background-color: var(--bg-main) !important;
  color: var(--text-main) !important;
  border-bottom: 1px solid var(--border-color) !important;
  transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
}

/* Using :where() makes sure Vue targets the variables directly 
  on the root .stats-section element when the class shifts.
*/
.stats-section:where(.theme-dark) {
  --bg-main: #000000;
  --text-main: #ffffff;
  --text-muted: #a3a3a3;   /* neutral-400 */
  --text-sub: #525252;     /* neutral-500 */
  --border-color: #171717; /* neutral-900 */
}

.stats-section:where(.theme-light) {
  --bg-main: #f4f6f9;
  --text-main: #0f172a;
  --text-muted: #64748b;   /* slate-500 */
  --text-sub: #94a3b8;     /* slate-400 */
  --border-color: #e2e8f0; /* slate-200 */
}

/* ----------------------------------------- */
/* TYPOGRAPHY ELEMENTS                       */
/* ----------------------------------------- */
.section-subtitle {
  text-align: center;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin-bottom: 4rem;
  color: var(--text-sub);
  transition: color 0.5s ease;
}

.counter-display {
  font-size: 2.25rem;
  font-weight: 900;
  color: #00ffa3;
  letter-spacing: -0.025em;
  text-shadow: 0 0 15px rgba(0, 255, 163, 0.15);
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
  color: var(--text-muted);
  transition: color 0.5s ease;
}

@media (min-width: 768px) {
  .stat-label {
    font-size: 0.875rem;
  }
}
</style>