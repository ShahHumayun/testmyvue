<template>
  <!-- 1. HERO SECTION -->
  <section class="relative min-h-screen flex items-center justify-center px-6 overflow-hidden border-b border-neutral-900 z-20">
    <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#00ffa3_1px,transparent_1px)] [background-size:32px_32px]"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-20 w-full pt-32 pb-20">

      <!-- Headline Context Copy Block -->
      <div class="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
        <span ref="heroTag" class="inline-block text-xs font-mono font-bold tracking-[0.4em] text-[#00ffa3] uppercase bg-[#00ffa3]/5 px-4 py-2 rounded-md border border-[#00ffa3]/20 shadow-[0_0_20px_rgba(0,255,163,0.05)]">
          NetSuite Integration Services
        </span>
        <h1 ref="heroHeadline" class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
          Netsuite Meganto <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffa3] via-emerald-400 to-teal-500">
            Integration.
          </span>
        </h1>
        <p ref="heroPara" class="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl">
          NetSuite Magento Integration automates data sync between NetSuite ERP and Magento, streamlining products, orders, and customers data when orders are synced for improved efficiency and real-time updates.
        </p>
        <div ref="heroActions" class="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <button class="w-full sm:w-auto px-8 py-4 bg-[#00ffa3] text-[#000000] font-bold text-sm uppercase tracking-wider rounded border border-[#00ffa3] hover:bg-transparent hover:text-[#00ffa3] transition-all duration-300 shadow-[0_0_25px_rgba(0,255,163,0.15)]">
            Schedule A Consultation
          </button>
          <button class="w-full sm:w-auto px-8 py-4 bg-neutral-950 border border-neutral-800 text-white font-medium text-sm uppercase tracking-wider rounded hover:bg-neutral-900 transition-colors">
            Explore Integrations
          </button>
        </div>
      </div>

      <!-- System Orbit Data Flow Visualizer Hub -->
      <div class="lg:col-span-6 flex justify-center items-center order-1 lg:order-2 min-h-[420px] relative">
        <div class="absolute w-28 h-28 rounded-2xl bg-black border-2 border-[#00ffa3] shadow-[0_0_40px_rgba(0,255,163,0.15)] flex flex-col items-center justify-center z-30 text-center p-2 group">
          <span class="text-xs font-mono font-bold tracking-widest text-[#00ffa3]">ORACLE</span>
          <span class="text-xs font-black tracking-tight text-white">NETSUITE</span>
          <div class="absolute inset-0 border border-[#00ffa3]/30 rounded-2xl animate-ping opacity-40"></div>
        </div>

        <!-- Outer System Orbit Elements Ring -->
        <div class="w-80 h-80 rounded-full border border-neutral-800/60 absolute animate-[spin_50s_linear_infinite] pointer-events-none"></div>
        <div class="w-[420px] h-[420px] rounded-full border border-neutral-900 absolute animate-[spin_80s_linear_infinite] pointer-events-none"></div>

        <!-- Interactive Floating Orbit Nodes Mapping -->
        <div
          v-for="(node, index) in orbitNodes"
          :key="index"
          class="absolute w-14 h-14 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-lg shadow-xl transition-transform duration-300 hover:border-[#00ffa3]"
          :style="getOrbitStyle(index)"
        >
          <span v-attr="node.label" :title="node.label">{{ node.icon }}</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

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
  const radius = 175 // Middle spatial threshold boundary tracking circle radius
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius
  return {
    transform: `translate(${x}px, ${y}px)`
  }
}

let heroTl = null

onMounted(() => {
  // Hero Presentation Launch Entry Flow
  heroTl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power4.out' } })
  heroTl.fromTo(heroTag.value, { opacity: 0, y: 15 }, { opacity: 1, y: 0, delay: 0.1 })
        .fromTo(heroHeadline.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=0.9')
        .fromTo(heroPara.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.9')
        .fromTo(heroActions.value, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=0.9')
})
</script>