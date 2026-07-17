<template>
  <!-- 5. COMMON PLATFORMS WE INTEGRATE -->
  <section
    :class="[
      'py-32 px-6 border-b relative z-20 overflow-hidden transition-colors duration-500',
      isDarkMode ? 'border-neutral-900 bg-neutral-950/10 theme-dark' : 'border-neutral-200 bg-white theme-light'
    ]"
  >
    <div class="max-w-7xl mx-auto relative">
      <h2 :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-24', isDarkMode ? 'text-white' : 'text-black']">
        Platforms We Connect <span class="accent-text">With NetSuite</span>
      </h2>

      <!-- Platform Integration Central Hub Grid Node Display -->
      <div ref="platformTargetGrid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          v-for="(plat, idx) in platformsList"
          :key="idx"
          :class="[
            'p-6 rounded-lg text-center group cursor-default transition-all duration-300 hover:border-[var(--accent-color)]/60 hover:shadow-[0_0_20px_rgba(var(--accent-rgb),0.03)] border',
            isDarkMode
              ? 'bg-black border-neutral-900'
              : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70'
          ]"
        >
          <div class="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110">{{ plat.icon }}</div>
          <h3
            :class="[
              'text-xs font-mono font-bold tracking-wider transition-colors',
              isDarkMode ? 'text-neutral-400 group-hover:text-white' : 'text-neutral-600 group-hover:text-black'
            ]"
          >
            {{ plat.name }}
          </h3>
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
const platformTargetGrid = ref(null)

const platformsList = [
  { name: 'Shopify', icon: '🛍️' }, { name: 'Salesforce', icon: '☁️' }, { name: 'HubSpot', icon: '🎯' },
  { name: 'Stripe', icon: '💳' }, { name: 'PayPal', icon: '🟡' }, { name: 'QuickBooks', icon: '📉' },
  { name: 'Amazon', icon: '📦' }, { name: 'WooCommerce', icon: '🔌' }, { name: 'Magento', icon: '🎛️' },
  { name: 'Custom Apps', icon: '💻' }
]

let scrollTriggerInstance = null

onMounted(() => {
  const anim = gsap.fromTo(platformTargetGrid.value.children, { opacity: 0, scale: 0.96 }, {
    opacity: 1, scale: 1, duration: 0.6, stagger: 0.05, ease: 'power2.out',
    scrollTrigger: { trigger: platformTargetGrid.value, start: 'top 85%' }
  })
  scrollTriggerInstance = anim.scrollTrigger
})

onUnmounted(() => {
  if (scrollTriggerInstance) scrollTriggerInstance.kill()
})
</script>

<style scoped>
.theme-dark { --accent-color: #00ffa3; --accent-rgb: 0, 255, 163; }
.theme-light { --accent-color: #f97316; --accent-rgb: 249, 115, 22; }

.accent-text { color: var(--accent-color); }
</style>