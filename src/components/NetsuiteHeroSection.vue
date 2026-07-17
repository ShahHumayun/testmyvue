<template>
  <section
    :class="[
      'relative min-h-screen flex items-center justify-center px-6 overflow-hidden border-b z-20 transition-colors duration-500',
      isDarkMode ? 'border-neutral-900 theme-dark' : 'border-neutral-200 theme-light'
    ]"
  >
    <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(var(--accent-color)_1px,transparent_1px)] [background-size:32px_32px]"></div>

    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-20 w-full pt-32 pb-20">

      <div class="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
        <span ref="heroTag" class="inline-block text-xs font-mono font-bold tracking-[0.4em] text-[var(--accent-color)] uppercase bg-[var(--accent-color)]/5 px-4 py-2 rounded-md border border-[var(--accent-color)]/20 shadow-[0_0_20px_rgba(var(--accent-rgb),0.05)]">
          NetSuite Integration Services
        </span>
        <h1
          ref="heroHeadline"
          :class="['text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]', isDarkMode ? 'text-white' : 'text-black']"
        >
          Netsuite Meganto <br>
          <span :class="['integration-text', isDarkMode ? 'dark-gradient' : 'light-solid']">
            Integration.
          </span>
        </h1>
        <p ref="heroPara" :class="['text-base md:text-lg leading-relaxed max-w-xl', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
          NetSuite Magento Integration automates data sync between NetSuite ERP and Magento, streamlining products, orders, and customers data when orders are synced for improved efficiency and real-time updates.
        </p>
        <div ref="heroActions" class="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <router-link to="/consultation" class="w-full sm:w-auto px-8 py-4 bg-[var(--accent-color)] text-[#000000] font-bold text-sm uppercase tracking-wider rounded border border-[var(--accent-color)] hover:bg-transparent hover:text-[var(--accent-color)] transition-all duration-300 shadow-[0_0_25px_rgba(var(--accent-rgb),0.15)]">
            Schedule A Consultation
          </router-link>
          <button :class="['w-full sm:w-auto px-8 py-4 font-medium text-sm uppercase tracking-wider rounded transition-colors border', isDarkMode ? 'bg-neutral-950 border-neutral-800 text-white hover:bg-neutral-900' : 'bg-neutral-100 border-neutral-200 text-black hover:bg-neutral-200']">
            Explore Integrations
          </button>
        </div>
      </div>

      <div class="lg:col-span-6 flex justify-center items-center order-1 lg:order-2 min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] relative">
        <div :class="['absolute w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-2xl border-2 border-[var(--accent-color)] shadow-[0_0_40px_rgba(var(--accent-rgb),0.15)] flex flex-col items-center justify-center z-30 text-center p-2', isDarkMode ? 'bg-black' : 'bg-white']">
          <span class="text-xs font-mono font-bold tracking-widest text-[var(--accent-color)]">ORACLE</span>
          <span :class="['text-xs font-black tracking-tight', isDarkMode ? 'text-white' : 'text-black']">NETSUITE</span>
          <div class="absolute inset-0 border border-[var(--accent-color)]/30 rounded-2xl animate-ping opacity-40"></div>
        </div>

        <div :class="['w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full border absolute animate-[spin_50s_linear_infinite] pointer-events-none', isDarkMode ? 'border-neutral-800/60' : 'border-neutral-300/60']"></div>
        <div :class="['w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] rounded-full border absolute animate-[spin_80s_linear_infinite] pointer-events-none', isDarkMode ? 'border-neutral-900' : 'border-neutral-200']"></div>

        <div v-for="(node, index) in orbitNodes" :key="index" :class="['absolute w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center text-base lg:text-lg shadow-xl transition-transform duration-300 hover:border-[var(--accent-color)] border', isDarkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-50 border-neutral-200']" :style="getOrbitStyle(index)">
          <span :title="node.label">{{ node.icon }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { gsap } from 'gsap'

const isDarkMode = inject('isDarkMode', ref(true))
const heroTag = ref(null), heroHeadline = ref(null), heroPara = ref(null), heroActions = ref(null)

const orbitNodes = [
  { label: 'CRM', icon: '👤' }, { label: 'Ecommerce', icon: '🛒' },
  { label: 'Inventory', icon: '📦' }, { label: 'Accounting', icon: '💵' },
  { label: 'Marketing', icon: '📢' }, { label: 'Payment Gateways', icon: '💳' },
  { label: 'Shipping Systems', icon: '🚢' }, { label: 'ERP Extension', icon: '🧬' }
]

const getOrbitStyle = (idx) => {
  const count = orbitNodes.length
  const angle = (idx * (360 / count)) * (Math.PI / 180)
  const radius = window.innerWidth < 640 ? 110 : window.innerWidth < 1024 ? 140 : 175
  return { transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)` }
}

onMounted(() => {
  const heroTl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power4.out' } })
  heroTl.fromTo(heroTag.value, { opacity: 0, y: 15 }, { opacity: 1, y: 0, delay: 0.1 })
        .fromTo(heroHeadline.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=0.9')
})
</script>

<style scoped>
.theme-dark { --accent-color: #00ffa3; --accent-rgb: 0, 255, 163; }
.theme-light { --accent-color: #f97316; --accent-rgb: 249, 115, 22; }

.dark-gradient { 
  background: linear-gradient(to right, #00ffa3, #34d399, #14b8a6); 
  -webkit-background-clip: text; 
  background-clip: text; 
  color: transparent; 
}
.light-solid { color: var(--accent-color); }
</style>