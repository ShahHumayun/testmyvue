<template>
  <!-- 13. TECHNOLOGY SECTION -->
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center mb-20">
        Built Using Modern <span class="text-[#00ffa3]">Integration Technologies</span>
      </h2>
      <div ref="techWrapper" class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div
          v-for="(tech, idx) in techInfrastructure"
          :key="idx"
          class="bg-neutral-950 border border-neutral-900 p-6 rounded-lg text-center font-mono text-xs text-neutral-300 hover:text-[#00ffa3] hover:border-[#00ffa3]/40 transition-all duration-300 flex flex-col justify-center items-center min-h-[100px]"
        >
          <span class="w-1.5 h-1.5 bg-neutral-800 rounded-full mb-3 inline-block marker-indicator"></span>
          {{ tech }}
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

const techWrapper = ref(null)

const techInfrastructure = [
  'NetSuite SuiteTalk API', 'REST APIs Architecture', 'SOAP Web Services', 'Middleware Enterprise Solutions',
  'Custom Enterprise Connectors', 'Cloud Infrastructure Services', 'Advanced Automation Platforms', 'Secure Data Pipelines'
]

let scrollTriggerInstance = null

onMounted(() => {
  // Infrastructure Tech Nodes Cascade Matrix Entry Mapping
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
/* Custom interactive technology framework grid selection tag tracking highlight */
.bg-neutral-950:hover .marker-indicator {
  background-color: #00ffa3;
  box-shadow: 0 0 8px #00ffa3;
}
</style>