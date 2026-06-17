<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center">
        Features That <span class="text-[#00ffa3]">Users Expect</span>
      </h2>
      <div ref="featuresGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(feat, idx) in featureCards" 
          :key="idx"
          class="feature-node bg-neutral-950 border border-neutral-900 rounded-xl p-6 hover:bg-neutral-950/40 hover:border-neutral-800 transition-colors"
        >
          
          <h3 class="text-base font-bold text-white tracking-tight">{{ feat }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const featuresGrid = ref(null)

const featureCards = [
  'Secure Authentication', 'Push Notifications', 'Real-Time Messaging', 'Payment Gateway Integration',
  'Cloud Synchronization', 'Advanced Analytics', 'GPS & Maps Integration', 'Offline Functionality'
]

onMounted(() => {
  const featureNodes = document.querySelectorAll('.feature-node')
  featureNodes.forEach((node, idx) => {
    const xVector = idx % 2 === 0 ? -40 : 40
    gsap.fromTo(node, { opacity: 0, x: xVector }, {
      opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: node, start: 'top 90%' }
    })
  })
})
</script>