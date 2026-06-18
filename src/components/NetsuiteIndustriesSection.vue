<template>
  <!-- 10. INDUSTRIES WE SERVE -->
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center mb-20">
        NetSuite Integrations <span class="text-[#00ffa3]">Across Industries</span>
      </h2>
      <div ref="industriesTargetGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(ind, i) in industryVerticals"
          :key="i"
          class="bg-neutral-950 border border-neutral-900 rounded-lg p-6 hover:bg-neutral-900/60 hover:border-[#00ffa3]/40 transition-all duration-300 group"
        >
          <h3 class="text-lg font-bold text-white group-hover:text-[#00ffa3] transition-colors mb-2">
            {{ ind }}
          </h3>
          <p class="text-xs text-neutral-500 leading-relaxed font-mono">
            Deploying verified baseline integrations specialized for {{ ind.toLowerCase() }} optimization vectors.
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

const industriesTargetGrid = ref(null)

const industryVerticals = [
  'Manufacturing', 'Retail', 'Wholesale Distribution', 'Healthcare', 'Financial Services', 'Technology', 'Logistics', 'Professional Services', 'Ecommerce'
]

let scrollTriggerInstance = null

onMounted(() => {
  // Industry Verticals Section Nodes Rendering Sequence
  const anim = gsap.fromTo(industriesTargetGrid.value.children, { opacity: 0, y: 20 }, {
    opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out',
    scrollTrigger: { trigger: industriesTargetGrid.value, start: 'top 85%' }
  })
  scrollTriggerInstance = anim.scrollTrigger
})

onUnmounted(() => {
  if (scrollTriggerInstance) scrollTriggerInstance.kill()
})
</script>