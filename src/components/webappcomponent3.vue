<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center max-w-3xl mx-auto">
        Custom Web Applications Built For <span class="text-[#00ffa3]">Modern Businesses</span>
      </h2>
      <div ref="servicesGrid" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div 
          v-for="(service, idx) in services" 
          :key="idx"
          class="group relative bg-neutral-950 border border-neutral-900 rounded-2xl p-8 transition-all duration-500 hover:border-[#00ffa3]/50 hover:shadow-[0_0_30px_rgba(0,255,163,0.05)] cursor-pointer overflow-hidden"
        >
          <div class="absolute -right-16 -top-16 w-32 h-32 bg-[#00ffa3]/5 rounded-full blur-2xl group-hover:bg-[#00ffa3]/10 transition-all duration-500"></div>
          <div class="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:border-[#00ffa3]/30 transition-colors duration-300">
            <component :is="service.icon" class="w-6 h-6 text-[#00ffa3] transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <h3 class="text-xl font-bold mb-3 text-white tracking-tight group-hover:text-[#00ffa3] transition-colors duration-300">
            {{ service.title }}
          </h3>
          <p class="text-neutral-400 leading-relaxed text-sm">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, h } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const servicesGrid = ref(null)

/* ----------------------------------------- */
/* FUNCTIONAL SVG RENDER COMPONENTS          */
/* ----------------------------------------- */
// Grid/Dashboard Icon
const IconGrid = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25A2.25 2.25 0 0 1 13.5 8.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 17.25v-2.25Z' })
])

// Users/Portal Icon
const IconUsers = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z' })
])

// Layers/Enterprise Architecture Icon
const IconLayers = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M6.429 9.75 2.25 12l4.179 2.25m11.142 0L21.75 12l-4.179-2.25M12 5.75 6.429 8.75 12 11.75l5.571-3L12 5.75Zm0 12.5-5.571-3L12 18.25l5.571-3-5.571 3Z' })
])

// CPU/SaaS Engine Icon
const IconCpu = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M8.25 3v1.5M4.5 8.25H3m1.5 7.5H3m15-7.5h1.5m-1.5 7.5h1.5m-11.25 3.75V21m3.75-18v1.5m0 15V21m3.75-18v1.5m0 15V21m3.75-18V4.5M19.5 8.25a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 8.25v7.5A1.5 1.5 0 0 0 6 17.25h12a1.5 1.5 0 0 0 1.5-1.5v-7.5Zm-12 1.5h7.5v4.5h-7.5v-4.5Z' })
])

const services = [
  { title: 'Business Management Systems', description: 'Custom dashboards, portals, reporting systems and workflow automation.', icon: IconGrid },
  { title: 'Customer Portals', description: 'Secure customer platforms that improve engagement and retention.', icon: IconUsers },
  { title: 'Enterprise Solutions', description: 'Scalable software built for growing organizations.', icon: IconLayers },
  { title: 'SaaS Platforms', description: 'Subscription-based products designed for rapid growth.', icon: IconCpu }
]

onMounted(() => {
  if (servicesGrid.value) {
    gsap.fromTo(servicesGrid.value.children, 
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: servicesGrid.value,
          start: 'top 80%'
        }
      }
    )
  }
})
</script>