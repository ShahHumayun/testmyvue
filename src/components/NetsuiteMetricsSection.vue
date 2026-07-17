<template>
  <!-- 11. SUCCESS METRICS -->
  <section
    :class="[
      'py-32 px-6 border-b relative z-20 transition-colors duration-500',
      isDarkMode ? 'border-neutral-900 theme-dark' : 'border-neutral-200 theme-light'
    ]"
  >
    <div class="max-w-7xl mx-auto">
      <h2 :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-20', isDarkMode ? 'text-white' : 'text-black']">
        Delivering Measurable <span class="accent-text">Business Impact</span>
      </h2>
      <div ref="metricsTargetGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(m, idx) in impactMetrics"
          :key="idx"
          :class="[
            'border rounded-xl p-8 flex flex-col justify-between min-h-[180px] relative overflow-hidden group',
            isDarkMode
              ? 'bg-neutral-950 border-neutral-900'
              : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70 transition-shadow duration-300'
          ]"
        >
          <div class="absolute bottom-0 right-0 w-16 h-16 accent-bg-5 blur-xl group-hover:accent-bg-10 transition-colors"></div>
          <div class="text-4xl md:text-5xl font-black accent-text font-mono tracking-tight">
            <span class="impact-value-counter" :data-target="m.value">0</span>{{ m.suffix }}
          </div>
          <p
            :class="[
              'text-xs font-mono uppercase tracking-wider pt-4 border-t mt-4',
              isDarkMode ? 'text-neutral-400 border-neutral-900' : 'text-neutral-600 border-neutral-200'
            ]"
          >
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
.theme-dark { --accent-color: #00ffa3; }
.theme-light { --accent-color: #f97316; }

.accent-text { color: var(--accent-color); }
.accent-bg-5 { background-color: color-mix(in srgb, var(--accent-color), transparent 95%); }
.accent-bg-10 { background-color: color-mix(in srgb, var(--accent-color), transparent 90%); }
</style>