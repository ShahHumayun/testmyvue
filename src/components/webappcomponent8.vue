<template>
  <section :class="['story-section py-32 px-6 border-b relative z-20 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-5xl mx-auto text-center space-y-12">
      <h2 class="text-sm font-semibold tracking-widest uppercase accent-text">
        Helping Businesses Scale Digitally
      </h2>
      <blockquote ref="storyQuote" class="text-2xl md:text-4xl font-medium tracking-tight leading-relaxed max-w-4xl mx-auto italic story-quote-text">
        "We transformed outdated business processes into a modern web platform that improved operational efficiency and accelerated growth."
      </blockquote>
      <div ref="storyStats" class="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 max-w-3xl mx-auto border-t divider-line">
        <div v-for="(sStat, idx) in storyStatsData" :key="idx" class="space-y-1">
          <div class="text-3xl md:text-5xl font-black tracking-tight counter-number">
            <span class="success-counter accent-text" :data-target="sStat.value">0</span>%
          </div>
          <p class="text-xs uppercase tracking-wider font-semibold counter-label">{{ sStat.label }}</p>
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

const isDarkMode = inject('isDarkMode', ref(true))

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
        scrollTrigger: { trigger: storyStats.value, start: 'top 85%' }
      }
    )
  })
})
</script>

<style scoped>
.theme-dark { --accent-color: #00ffa3; }
.theme-light { --accent-color: #f97316; }

.theme-dark {
  background: #000000 !important;
  border-color: #171717 !important;
  --quote-color: #ffffff;
  --divider-color: #171717;
  --label-color: #a3a3a3;
}

.theme-light {
  background: #ffffff !important;
  border-color: #e2e8f0 !important;
  --quote-color: #0f172a;
  --divider-color: #e2e8f0;
  --label-color: #475569;
}

.accent-text { color: var(--accent-color); }
.story-section { width: 100% !important; }
.story-quote-text { color: var(--quote-color) !important; transition: color 0.4s ease; }
.divider-line { border-color: var(--divider-color) !important; transition: border-color 0.4s ease; }
.counter-label { color: var(--label-color) !important; transition: color 0.4s ease; }
</style>