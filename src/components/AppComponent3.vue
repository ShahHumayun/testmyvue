<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20 bg-black">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center max-w-3xl mx-auto">
        Mobile Solutions <span class="text-[#00ffa3]">Built For Growth</span>
      </h2>
      <div ref="servicesGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

/* ------------------------------------------------------------- */
/* SECURE COMPATIBLE SVG RENDER FUNCTIONS (No JSX configuration required) */
/* ------------------------------------------------------------- */

// iOS Phone Chassis Icon
const IconIos = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 6v12M8 10h8M9 14h6' })
])

// Android Core Node Icon
const IconAndroid = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M7 11V7a5 5 0 0110 0v4M5 11h14v6a4 4 0 01-4 4H9a4 4 0 01-4-4v-6z' }),
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M9 15h.01M15 15h.01M8 3l1.5 2M16 3l-1.5 2' })
])

// Cross-Platform Code Base Sync Icon
const IconCrossPlatform = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M20 7h-9m0 0l3-3m-3 3l3 3M4 17h9m0 0l-3 3m3-3l-3-3M4 7a3 3 0 013-3M20 17a3 3 0 01-3 3' })
])

// Enterprise Corporate Infrastructure Matrix Icon
const IconEnterprise = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5' })
])

// On-Demand Time Optimization / Realtime Telemetry Icon
const IconOnDemand = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' })
])

// Startup MVP High Intensity Energy Bolt Icon
const IconMvc = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [
  h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M13 10V3L4 14h7v7l9-11h-7z' })
])

/* ----------------------------------------- */
/* MOBILE APPLICATION DATA MAPPING          */
/* ----------------------------------------- */
const services = [
  { title: 'iOS App Development', description: 'High-performance applications built specifically for Apple devices.', icon: IconIos },
  { title: 'Android App Development', description: 'Scalable Android applications optimized for performance and usability.', icon: IconAndroid },
  { title: 'Cross Platform Development', description: 'Single codebase solutions using modern frameworks.', icon: IconCrossPlatform },
  { title: 'Enterprise Mobile Applications', description: 'Powerful business applications for internal operations and productivity.', icon: IconEnterprise },
  { title: 'On-Demand Applications', description: 'Taxi, delivery, booking and service marketplace applications.', icon: IconOnDemand },
  { title: 'Startup MVP Development', description: 'Launch quickly and validate your idea faster.', icon: IconMvc }
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