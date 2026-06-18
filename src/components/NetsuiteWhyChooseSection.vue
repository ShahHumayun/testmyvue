<template>
  <!-- 6. WHY BUSINESSES CHOOSE NETSUITE INTEGRATION -->
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <!-- Metrics Automation Graphic Sync Board Container -->
      <div class="bg-neutral-950 border border-neutral-900 rounded-xl p-6 grid grid-cols-2 gap-4 relative overflow-hidden aspect-video lg:aspect-auto lg:h-96">
        <div class="bg-black border border-neutral-900 rounded-lg p-4 flex flex-col justify-between">
          <span class="text-[10px] font-mono text-neutral-500 block">REALTIME DATA SYNC</span>
          <div class="h-2 w-full bg-neutral-900 rounded overflow-hidden">
            <div class="h-full bg-[#00ffa3] rounded animate-[marquee_2s_linear_infinite] w-1/3"></div>
          </div>
          <span class="text-xl font-bold font-mono text-white">4.8ms<span class="text-xs text-neutral-500 font-normal">/avg</span></span>
        </div>
        <div class="bg-black border border-neutral-900 rounded-lg p-4 flex flex-col justify-between">
          <span class="text-[10px] font-mono text-neutral-500 block">WORKFLOW AUTOMATION</span>
          <span class="text-2xl font-black text-[#00ffa3]">ACTIVE</span>
          <span class="text-[10px] font-mono text-neutral-400">Continuous Logic Loops</span>
        </div>
        <div class="bg-black border border-neutral-900 rounded-lg p-4 col-span-2 flex items-center justify-between">
          <div>
            <span class="text-[10px] font-mono text-neutral-500 block mb-1">DATA INTEGRITY FACTOR</span>
            <span class="text-sm font-bold text-white font-mono">99.9998% Validation Rate</span>
          </div>
          <div class="w-3 h-3 rounded-full bg-[#00ffa3] shadow-[0_0_10px_#00ffa3]"></div>
        </div>
      </div>

      <!-- Right Side Content Copy Array Layout -->
      <div class="space-y-8">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Transform Manual Processes <br><span class="text-[#00ffa3]">Into Automated Workflows</span>
        </h2>
        <div ref="benefitsBlock" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div v-for="(b, idx) in structuralBenefits" :key="idx" class="flex items-start gap-3 p-2 rounded hover:bg-neutral-950 transition-colors">
            <span class="text-[#00ffa3] text-sm mt-0.5 font-bold">✓</span>
            <span class="text-neutral-300 font-medium text-sm">{{ b }}</span>
          </div>
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

const benefitsBlock = ref(null)

const structuralBenefits = [
  'Real-Time Data Synchronization', 'Improved Business Visibility', 'Reduced Operational Costs',
  'Elimination Of Duplicate Data Entry', 'Increased Productivity', 'Better Customer Experience',
  'Faster Decision Making', 'Scalable Growth Potential'
]

let scrollTriggerInstance = null

onMounted(() => {
  // Right Side Structural Benefits Cascade Reveal
  const anim = gsap.fromTo(benefitsBlock.value.children, { opacity: 0, x: 15 }, {
    opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
    scrollTrigger: { trigger: benefitsBlock.value, start: 'top 85%' }
  })
  scrollTriggerInstance = anim.scrollTrigger
})

onUnmounted(() => {
  if (scrollTriggerInstance) scrollTriggerInstance.kill()
})
</script>

<style scoped>
/* Keyframe linear layout trace mapping loop for the realtime sync progress bar */
@keyframes marquee {
  0% { transform: translateX(-150%); }
  100% { transform: translateX(250%); }
}
</style>