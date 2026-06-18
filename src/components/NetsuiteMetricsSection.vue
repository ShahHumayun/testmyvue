<template>
  <!-- 11. SUCCESS METRICS -->
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center mb-20">
        Delivering Measurable <span class="text-[#00ffa3]">Business Impact</span>
      </h2>
      <div ref="metricsTargetGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(m, idx) in impactMetrics" :key="idx" class="bg-neutral-950 border border-neutral-900 rounded-xl p-8 flex flex-col justify-between min-h-[180px] relative overflow-hidden group">
          <div class="absolute bottom-0 right-0 w-16 h-16 bg-[#00ffa3]/5 blur-xl group-hover:bg-[#00ffa3]/10 transition-colors"></div>
          <div class="text-4xl md:text-5xl font-black text-[#00ffa3] font-mono tracking-tight">
            <span class="impact-value-counter" :data-target="m.value">0</span>{{ m.suffix }}
          </div>
          <p class="text-xs font-mono uppercase text-neutral-400 tracking-wider pt-4 border-t border-neutral-900 mt-4">
            {{ m.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const metricsTargetGrid = ref(null)

const impactMetrics = [
  { value: 80, suffix: '%', label: 'Reduction In Manual Tasks' },
  { value: 65, suffix: '%', label: 'Faster Reporting Cycles' },
  { value: 90, suffix: '%', label: 'Data Accuracy Improvement' },
  { value: 3, suffix: 'X', label: 'Operational Efficiency Boost' }
]

let triggers = []

onMounted(() => {
  // Final Operational Metrics Display Block Numbers Rolling Trigger
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