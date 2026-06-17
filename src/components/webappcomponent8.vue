<template>
  <section class="py-32 px-6 border-b border-neutral-900 bg-gradient-to-b from-black via-neutral-950 to-black relative z-20">
    <div class="max-w-5xl mx-auto text-center space-y-12">
      <h2 class="text-sm font-semibold tracking-widest text-[#00ffa3] uppercase">
        Helping Businesses Scale Digitally
      </h2>
      <blockquote ref="storyQuote" class="text-2xl md:text-4xl font-medium tracking-tight text-white leading-relaxed max-w-4xl mx-auto italic">
        "We transformed outdated business processes into a modern web platform that improved operational efficiency and accelerated growth."
      </blockquote>
      <div ref="storyStats" class="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 max-w-3xl mx-auto border-t border-neutral-900">
        <div v-for="(sStat, idx) in storyStatsData" :key="idx" class="space-y-1">
          <div class="text-3xl md:text-5xl font-black text-white tracking-tight">
            <span class="success-counter" :data-target="sStat.value">0</span>%
          </div>
          <p class="text-xs text-neutral-400 uppercase tracking-wider font-semibold">{{ sStat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const storyQuote = ref(null)
const storyStats = ref(null)

const storyStatsData = [
  { value: 250, label: 'Increase in Efficiency' },
  { value: 180, label: 'User Engagement' },
  { value: 300, label: 'Process Speed' }
]

onMounted(() => {
  gsap.fromTo(storyQuote.value, { opacity: 0, y: 20 }, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: { trigger: storyQuote.value, start: 'top 80%' }
  })

  const successCounters = document.querySelectorAll('.success-counter')
  successCounters.forEach((counter) => {
    const targetValue = parseInt(counter.getAttribute('data-target'), 10)
    gsap.fromTo(counter, 
      { textContent: 0 },
      {
        textContent: targetValue,
        duration: 2.5,
        ease: 'power3.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: storyStats.value,
          start: 'top 85%'
        }
      }
    )
  })
})
</script>