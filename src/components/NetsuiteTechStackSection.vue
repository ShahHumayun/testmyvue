<template>
  <!-- 13. TECHNOLOGY SECTION -->
  <section
    :class="[
      'py-32 px-6 border-b relative z-20 transition-colors duration-500',
      isDarkMode ? 'border-neutral-900 theme-dark' : 'border-neutral-200 theme-light'
    ]"
  >
    <div class="max-w-7xl mx-auto">
      <h2 :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-20', isDarkMode ? 'text-white' : 'text-black']">
        Built Using Modern <span class="accent-text">Integration Technologies</span>
      </h2>
      <div ref="techWrapper" class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="(tech, idx) in techInfrastructure"
          :key="idx"
          :class="[
            'tech-card p-6 rounded-lg text-center font-mono text-xs hover:text-[var(--accent-color)] hover:border-[var(--accent-color)]/40 transition-all duration-300 flex flex-col justify-center items-center min-h-[100px] border',
            isDarkMode
              ? 'bg-neutral-950 border-neutral-900 text-neutral-300'
              : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70 text-neutral-700'
          ]"
        >
          <span
            :class="[
              'w-1.5 h-1.5 rounded-full mb-3 inline-block marker-indicator transition-colors',
              isDarkMode ? 'bg-neutral-800' : 'bg-neutral-300'
            ]"
          ></span>
          {{ tech }}
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
const techWrapper = ref(null)

const techInfrastructure = [
  'NetSuite SuiteTalk API', 'REST APIs Architecture', 'SOAP Web Services', 'Middleware Enterprise Solutions',
  'Custom Enterprise Connectors', 'Cloud Infrastructure Services', 'Advanced Automation Platforms', 'Secure Data Pipelines'
]

let scrollTriggerInstance = null

onMounted(() => {
  const anim = gsap.fromTo(techWrapper.value.children, { opacity: 0, scale: 0.97 }, {
    opacity: 1, scale: 1, duration: 0.5, stagger: 0.06, ease: 'power2.out',
    scrollTrigger: { trigger: techWrapper.value, start: 'top 85%' }
  })
  scrollTriggerInstance = anim.scrollTrigger
})

onUnmounted(() => {
  if (scrollTriggerInstance) scrollTriggerInstance.kill()
})
</script>

<style scoped>
.theme-dark { --accent-color: #00ffa3; }
.theme-light { --accent-color: #f97316; }

.accent-text { color: var(--accent-color); }

.tech-card:hover .marker-indicator {
  background-color: var(--accent-color);
  box-shadow: 0 0 8px var(--accent-color);
}
</style>