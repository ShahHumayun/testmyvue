<template>
  <!-- 2. TRUST SECTION -->
  <section
    :class="[
      'py-20 px-6 border-b relative z-20',
      isDarkMode ? 'border-neutral-900 bg-neutral-950/20' : 'border-neutral-200 bg-white'
    ]"
  >
    <div class="max-w-7xl mx-auto">
      <h2 :class="['text-center text-xs font-mono font-bold tracking-[0.3em] uppercase mb-12', isDarkMode ? 'text-neutral-500' : 'text-neutral-500']">
        Helping Businesses Operate Smarter
      </h2>
      <div ref="trustGrid" class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(stat, idx) in trustStats"
          :key="idx"
          :class="[
            'p-8 rounded-lg text-center relative group overflow-hidden border',
            isDarkMode
              ? 'bg-black border-neutral-900'
              : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70 transition-shadow duration-300'
          ]"
        >
          <div class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-[#00ffa3]/40 to-transparent"></div>
          <div :class="['text-3xl md:text-5xl font-black tracking-tight font-mono mb-2', isDarkMode ? 'text-white' : 'text-black']">
            <span class="trust-value-counter" :data-target="stat.value">0</span>{{ stat.suffix }}
          </div>
          <p :class="['text-xs font-mono tracking-wider uppercase', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">{{ stat.label }}</p>
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

const trustGrid = ref(null)

const trustStats = [
  { value: 20, suffix: '+', label: 'Successful Integrations' },
  { value: 50000, suffix: '+', label: 'Orders Synced' },
  { value: 100, suffix: '%', label: 'Satisfied Clients' },
  { value: 120000, suffix: '+', label: 'Products Synced' }
]

let triggers = []

onMounted(() => {
  // Trust Value Accumulation Metrics Counter Logic
  const trustCounters = trustGrid.value.querySelectorAll('.trust-value-counter')
  trustCounters.forEach((cnt) => {
    const targetVal = parseInt(cnt.getAttribute('data-target'), 10)
    const anim = gsap.fromTo(cnt, { textContent: 0 }, {
      textContent: targetVal, duration: 2.2, ease: 'power3.out', snap: { textContent: 1 },
      scrollTrigger: { trigger: trustGrid.value, start: 'top 85%' }
    })
    if (anim.scrollTrigger) triggers.push(anim.scrollTrigger)
  })
})

onUnmounted(() => {
  triggers.forEach(t => t.kill())
})
</script>