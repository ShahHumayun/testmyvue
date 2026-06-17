<template>
  <section class="py-24 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-center text-sm font-bold tracking-widest text-neutral-500 uppercase mb-16">
        Trusted By Startups & Growing Businesses
      </h2>
      <div ref="counterContainer" class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div v-for="(stat, idx) in stats" :key="idx" class="space-y-2">
          <div class="text-4xl md:text-5xl font-black text-[#00ffa3] tracking-tight">
            <span class="trust-counter" :data-target="stat.value">0</span>{{ stat.suffix }}
          </div>
          <p class="text-xs md:text-sm text-neutral-400 font-medium tracking-wide uppercase">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const counterContainer = ref(null)
const stats = [
  { value: 150, suffix: '+', label: 'Mobile Features Delivered' },
  { value: 50, suffix: '+', label: 'Apps Developed' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
  { value: 500, suffix: 'K+', label: 'End Users Reached' }
]

onMounted(() => {
  const trustCounters = document.querySelectorAll('.trust-counter')
  trustCounters.forEach((counter) => {
    const targetVal = parseInt(counter.getAttribute('data-target'), 10)
    gsap.fromTo(counter, { textContent: 0 }, {
      textContent: targetVal,
      duration: 2.5,
      ease: 'power3.out',
      snap: { textContent: 1 },
      scrollTrigger: { trigger: counterContainer.value, start: 'top 85%' }
    })
  })
})
</script>