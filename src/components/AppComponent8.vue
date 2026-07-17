<template>
  <section
    :class="[
      'py-32 px-6 border-b relative z-20',
      isDarkMode ? 'border-neutral-900' : 'border-neutral-200'
    ]"
  >
    <div class="max-w-7xl mx-auto">
      <h2 :class="['text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center', isDarkMode ? 'text-white' : 'text-black']">
        Features That 
        <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Users Expect</span>
      </h2>
      <div ref="featuresGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(feat, idx) in featureCards" 
          :key="idx"
          :class="[
            'feature-node border rounded-xl p-6 transition-all duration-300',
            isDarkMode
              ? 'bg-neutral-950 border-neutral-900 hover:bg-neutral-950/40 hover:border-neutral-800'
              : 'bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-orange-200'
          ]"
        >
          <h3 :class="['text-base font-bold tracking-tight', isDarkMode ? 'text-white' : 'text-black']">{{ feat }}</h3>
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
const featuresGrid = ref(null)

const featureCards = [
  'Secure Authentication', 'Push Notifications', 'Real-Time Messaging', 'Payment Gateway Integration',
  'Cloud Synchronization', 'Advanced Analytics', 'GPS & Maps Integration', 'Offline Functionality'
]

onMounted(() => {
  const featureNodes = featuresGrid.value.querySelectorAll('.feature-node')
  featureNodes.forEach((node, idx) => {
    const xVector = idx % 2 === 0 ? -40 : 40
    gsap.fromTo(node, { opacity: 0, x: xVector }, {
      opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: node, start: 'top 90%' }
    })
  })
})
</script>