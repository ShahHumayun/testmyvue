<template>
  <!-- 12. CASE STUDY SECTION -->
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
        Real Integration <span class="text-[#00ffa3]">Success Stories</span>
      </h2>
      <div ref="caseWrapper" class="bg-neutral-950 border border-neutral-900 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div class="md:col-span-7 space-y-6">
          <span class="text-[10px] font-mono text-[#00ffa3] tracking-[0.3em] uppercase block">SYSTEM CASE LOG // ENTERPRISE DATA MIGRATION</span>
          <div class="space-y-2">
            <h3 class="text-xs uppercase font-bold text-neutral-500 tracking-wider">The Challenge:</h3>
            <p class="text-sm text-neutral-300 leading-relaxed">
              Multiple disconnected enterprise software platforms causing severe synchronization gaps, redundant validation workflows, and delayed business updates.
            </p>
          </div>
          <div class="space-y-2">
            <h3 class="text-xs uppercase font-bold text-[#00ffa3] tracking-wider">The Engineering Solution:</h3>
            <p class="text-sm text-neutral-300 leading-relaxed">
              Architected a centralized high-availability NetSuite integration ecosystem linking active channel nodes with core accounting layers via secure event-driven API modules.
            </p>
          </div>
        </div>
        <div class="md:col-span-5 bg-black border border-neutral-900 rounded-xl p-6 font-mono text-xs space-y-4">
          <h4 class="text-neutral-500 font-bold uppercase tracking-wide">Validated Metrics Yield</h4>
          <ul class="space-y-2 text-neutral-300">
            <li class="flex justify-between border-b border-neutral-900 pb-2"><span>Operational Clarity:</span> <span class="text-[#00ffa3] font-bold">100% Core Visibility</span></li>
            <li class="flex justify-between border-b border-neutral-900 pb-2"><span>Manual Operations Friction:</span> <span class="text-[#00ffa3] font-bold">-82% Reduction</span></li>
            <li class="flex justify-between pb-1"><span>System Response Lag:</span> <span class="text-[#00ffa3] font-bold">Realtime Enabled</span></li>
          </ul>
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

const caseWrapper = ref(null)

let scrollTriggerInstance = null

onMounted(() => {
  // Case Study Structural Box Display Trigger Overlay
  const anim = gsap.fromTo(caseWrapper.value, { opacity: 0, scale: 0.99, y: 30 }, {
    opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: caseWrapper.value, start: 'top 85%' }
  })
  scrollTriggerInstance = anim.scrollTrigger
})

onUnmounted(() => {
  if (scrollTriggerInstance) scrollTriggerInstance.kill()
})
</script>