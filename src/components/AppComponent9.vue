<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center">
        Delivering Real <span class="text-[#00ffa3]">Business Results</span>
      </h2>
      <div ref="impactGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(metric, idx) in impactMetrics" :key="idx" class="bg-gradient-to-b from-neutral-950 to-black border border-neutral-900 rounded-2xl p-8 text-center space-y-2 relative group hover:border-neutral-800 transition-colors">
          <div class="text-4xl md:text-5xl font-black text-white tracking-tight group-hover:text-[#00ffa3] transition-colors duration-300">
            +<span class="impact-counter" :data-target="metric.value">0</span>%
          </div>
          <p class="text-xs text-neutral-400 uppercase tracking-wider font-semibold">{{ metric.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

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