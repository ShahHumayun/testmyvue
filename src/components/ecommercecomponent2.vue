<template>
  <section ref="counterContainer" :class="['ecommerce-stats py-24 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-center text-sm font-bold tracking-widest uppercase mb-16 section-subtitle">
        Powering Ecommerce Growth
      </h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(stat, idx) in stats" :key="idx" 
             class="trust-card p-6 rounded-xl text-center space-y-2 transition-all duration-300">
          <div class="text-3xl md:text-5xl font-black tracking-tight counter-display">
            <span class="trust-counter" :data-target="stat.value">0</span>{{ stat.suffix }}
          </div>
          <p class="text-xs md:text-sm font-medium tracking-wide uppercase stat-label">{{ stat.label }}</p>
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

// Inject global theme state context seamlessly
const isDarkMode = inject('isDarkMode', ref(true))

const counterContainer = ref(null)

const stats = [
  { value: 250, suffix: '+', label: 'Products Successfully Launched' },
  { value: 100, suffix: '+', label: 'Ecommerce Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 500, suffix: '+', label: 'In Online Sales Generated' }
]

onMounted(() => {
  const counters = counterContainer.value.querySelectorAll('.trust-counter')

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-target'))
    
    gsap.fromTo(counter, 
      { innerText: 0 },
      {
        innerText: target,
        duration: 2.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: counterContainer.value,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        snap: { innerText: 1 },
        modifiers: {
          innerText: (value) => Math.floor(value)
        }
      }
    )
  })
})
</script>

<style scoped>
/* ── Encapsulated Visual Protection Boundaries ── */
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important; /* border-neutral-900 equivalent */
  --subtitle-color: #737373; /* text-neutral-500 equivalent */
  --card-bg: rgba(10, 10, 10, 0.4); /* bg-neutral-950/40 equivalent */
  --card-border: rgba(23, 23, 23, 0.6); /* border-neutral-900/60 equivalent */
  --card-hover-border: rgba(0, 255, 163, 0.3);
  --counter-color: #00ffa3;
  --label-color: #a3a3a3; /* text-neutral-400 equivalent */
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important; /* border-slate-200 equivalent */
  --subtitle-color: #475569; /* text-slate-600 equivalent */
  --card-bg: #ffffff;
  --card-border: #e2e8f0; /* slate-200 equivalent */
  --card-hover-border: rgba(15, 23, 42, 0.2);
  --counter-color: #0f172a; /* high contrast black counters for pure white layout */
  --label-color: #0f172a; /* text-black/slate-900 equivalent */
}

/* ── Explicit Selector Rule Overrides ── */
.ecommerce-stats {
  width: 100% !important;
}

.section-subtitle {
  color: var(--subtitle-color) !important;
  transition: color 0.4s ease;
}

.trust-card {
  background-color: var(--card-bg) !important;
  border: 1px solid var(--card-border) !important;
}

.trust-card:hover {
  border-color: var(--card-hover-border) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
}

.counter-display {
  color: var(--counter-color) !important;
  transition: color 0.4s ease;
}

.stat-label {
  color: var(--label-color) !important;
  transition: color 0.4s ease;
}
</style>