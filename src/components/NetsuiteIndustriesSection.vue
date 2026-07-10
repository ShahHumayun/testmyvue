<template>
  <!-- 10. INDUSTRIES WE SERVE -->
  <section
    :class="[
      'py-32 px-6 border-b relative z-20',
      isDarkMode ? 'border-neutral-900' : 'border-neutral-200'
    ]"
  >
    <div class="max-w-7xl mx-auto">
      <h2 :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-20', isDarkMode ? 'text-white' : 'text-black']">
        NetSuite Integrations <span class="text-[#00ffa3]">Across Industries</span>
      </h2>
      <div ref="industriesTargetGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(ind, i) in industryVerticals"
          :key="i"
          :class="[
            'border rounded-lg p-6 transition-all duration-300 group hover:border-[#00ffa3]/40',
            isDarkMode
              ? 'bg-neutral-950 border-neutral-900 hover:bg-neutral-900/60'
              : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70'
          ]"
        >
          <h3 :class="['text-lg font-bold group-hover:text-[#00ffa3] transition-colors mb-2', isDarkMode ? 'text-white' : 'text-black']">
            {{ ind }}
          </h3>
          <p :class="['text-xs leading-relaxed font-mono', isDarkMode ? 'text-neutral-500' : 'text-neutral-600']">
            Deploying verified baseline integrations specialized for {{ ind.toLowerCase() }} optimization vectors.
          </p>
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