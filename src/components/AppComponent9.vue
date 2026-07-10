<template>
  <section :class="['impact-section py-32 px-6 border-b relative z-20 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center impact-heading">
        Delivering Real <span class="text-[#00ffa3]">Business Results</span>
      </h2>
      <div ref="impactGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(metric, idx) in impactMetrics" :key="idx" class="impact-card rounded-2xl p-8 text-center space-y-2 relative group transition-colors">
          <div class="text-4xl md:text-5xl font-black tracking-tight impact-counter-text group-hover:text-[#00ffa3] transition-colors duration-300">
            +<span class="impact-counter" :data-target="metric.value">0</span>%
          </div>
          <p class="text-xs uppercase tracking-wider font-semibold impact-card-label">{{ metric.label }}</p>
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

// Inject the shared site theme preference seamlessly
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
      scrollTrigger: { 
        trigger: impactGrid.value, 
        start: 'top 85%' 
      }
    })
  })
})
</script>

<style scoped>
/* Encapsulated Theme Properties Matrix */
.theme-dark {
  background-color: #000000;
  border-color: #171717; /* border-neutral-900 equivalent */
  --heading-color: #ffffff;
  --card-bg: linear-gradient(to bottom, #0a0a0a, #000000); /* from-neutral-950 to-black */
  --card-border: #171717;
  --card-border-hover: #262626; /* border-neutral-800 */
  --counter-color: #ffffff;
  --label-color: #a3a3a3; /* text-neutral-400 */
}

.theme-light {
  background-color: #ffffff;
  border-color: #e2e8f0; /* border-slate-200 equivalent */
  --heading-color: #0f172a; /* text-slate-900 */
  --card-bg: linear-gradient(to bottom, #f8fafc, #ffffff);
  --card-border: #e2e8f0;
  --card-border-hover: #cbd5e1;
  --counter-color: #0f172a;
  --label-color: #475569; /* text-slate-600 */
}

/* Explicit Application Rules to bypass external inheritances */
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

.impact-counter-text {
  color: var(--counter-color);
  transition: color 0.4s ease;
}

.impact-card-label {
  color: var(--label-color) !important;
  transition: color 0.4s ease;
}
</style>