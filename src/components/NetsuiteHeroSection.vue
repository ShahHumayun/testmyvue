<template>
  <!-- 1. HERO SECTION -->
  <section
    :class="[
      'relative min-h-screen flex items-center justify-center px-6 overflow-hidden border-b z-20',
      isDarkMode ? 'border-neutral-900' : 'border-neutral-200'
    ]"
  >
    <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#00ffa3_1px,transparent_1px)] [background-size:32px_32px]"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-20 w-full pt-32 pb-20">

      <!-- Headline Context Copy Block -->
      <div class="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
        <span ref="heroTag" class="inline-block text-xs font-mono font-bold tracking-[0.4em] text-[#00ffa3] uppercase bg-[#00ffa3]/5 px-4 py-2 rounded-md border border-[#00ffa3]/20 shadow-[0_0_20px_rgba(0,255,163,0.05)]">
          NetSuite Integration Services
        </span>
        <h1
          ref="heroHeadline"
          :class="['text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]', isDarkMode ? 'text-white' : 'text-black']"
        >
          Netsuite Meganto <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffa3] via-emerald-400 to-teal-500">
            Integration.
          </span>
        </h1>
        <p ref="heroPara" :class="['text-base md:text-lg leading-relaxed max-w-xl', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
          NetSuite Magento Integration automates data sync between NetSuite ERP and Magento, streamlining products, orders, and customers data when orders are synced for improved efficiency and real-time updates.
        </p>
        <div ref="heroActions" class="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <router-link to="/consultation" class="w-full sm:w-auto px-8 py-4 bg-[#00ffa3] text-[#000000] font-bold text-sm uppercase tracking-wider rounded border border-[#00ffa3] hover:bg-transparent hover:text-[#00ffa3] transition-all duration-300 shadow-[0_0_25px_rgba(0,255,163,0.15)]">
            Schedule A Consultation
          </router-link>
          <button
            :class="[
              'w-full sm:w-auto px-8 py-4 font-medium text-sm uppercase tracking-wider rounded transition-colors border',
              isDarkMode
                ? 'bg-neutral-950 border-neutral-800 text-white hover:bg-neutral-900'
                : 'bg-neutral-100 border-neutral-200 text-black hover:bg-neutral-200'
            ]"
          >
            Explore Integrations
          </button>
        </div>
      </div>

      <!-- System Orbit Data Flow Visualizer Hub -->
      <div class="lg:col-span-6 flex justify-center items-center order-1 lg:order-2 min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] relative">
        <div
          :class="[
            'absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl border-2 border-[#00ffa3] shadow-[0_0_40px_rgba(0,255,163,0.15)] flex flex-col items-center justify-center z-30 text-center p-2 group',
            isDarkMode ? 'bg-black' : 'bg-white'
          ]"
        >
          <span class="text-xs font-mono font-bold tracking-widest text-[#00ffa3]">ORACLE</span>
          <span :class="['text-xs font-black tracking-tight', isDarkMode ? 'text-white' : 'text-black']">NETSUITE</span>
          <div class="absolute inset-0 border border-[#00ffa3]/30 rounded-2xl animate-ping opacity-40"></div>
        </div>

        <!-- Outer System Orbit Elements Ring -->
        <div :class="['w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border absolute animate-[spin_50s_linear_infinite] pointer-events-none', isDarkMode ? 'border-neutral-800/60' : 'border-neutral-300/60']"></div>
        <div :class="['w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full border absolute animate-[spin_80s_linear_infinite] pointer-events-none', isDarkMode ? 'border-neutral-900' : 'border-neutral-200']"></div>

        <!-- Interactive Floating Orbit Nodes Mapping -->
        <div
          v-for="(node, index) in orbitNodes"
          :key="index"
          :class="[
            'absolute w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center text-base lg:text-lg shadow-xl transition-transform duration-300 hover:border-[#00ffa3] border',
            isDarkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-50 border-neutral-200'
          ]"
          :style="getOrbitStyle(index)"
        >
          <span :title="node.label">{{ node.icon }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { gsap } from 'gsap'

// Injected from the parent page's provide() — makes this section
// resolve its own theme value rather than depending on a prop being
// passed correctly, or any other component's state
const isDarkMode = inject('isDarkMode', ref(true))

// Template Container Identity Linkage State Mapping
const heroTag = ref(null)
const heroHeadline = ref(null)
const heroPara = ref(null)
const heroActions = ref(null)

const orbitNodes = [
  { label: 'CRM', icon: '👤' },
  { label: 'Ecommerce', icon: '🛒' },
  { label: 'Inventory', icon: '📦' },
  { label: 'Accounting', icon: '💵' },
  { label: 'Marketing', icon: '📢' },
  { label: 'Payment Gateways', icon: '💳' },
  { label: 'Shipping Systems', icon: '🚢' },
  { label: 'ERP Extension', icon: '🧬' }
]

const getOrbitStyle = (idx) => {
  const count = orbitNodes.length
  const angle = (idx * (360 / count)) * (Math.PI / 180)
  const radius = window.innerWidth < 640 ? 110 : window.innerWidth < 1024 ? 140 : 175
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius
  return {
    transform: `translate(${x}px, ${y}px)`
  }
}

const handleResize = () => {
  orbitNodes.forEach((_, i) => getOrbitStyle(i))
}

let heroTl = null

onMounted(() => {
  window.addEventListener('resize', handleResize)

  // Hero Presentation Launch Entry Flow
  heroTl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power4.out' } })
  heroTl.fromTo(heroTag.value, { opacity: 0, y: 15 }, { opacity: 1, y: 0, delay: 0.1 })
        .fromTo(heroHeadline.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=0.9')
        .fromTo(heroPara.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.9')
        .fromTo(heroActions.value, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=0.9')
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>