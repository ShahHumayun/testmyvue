<template>
  <section
    :class="[
      'py-32 px-6 border-b relative z-20 transition-colors duration-500',
      isDarkMode ? 'border-neutral-900 theme-dark' : 'border-neutral-200 theme-light'
    ]"
  >
    <div class="max-w-7xl mx-auto">
      <h2 :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-20', isDarkMode ? 'text-white' : 'text-black']">
        Eliminate Operational <span class="accent-text">Bottlenecks</span>
      </h2>
      <div ref="challengesGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(card, idx) in challengeMatrix"
          :key="idx"
          :class="[
            'challenge-node-card border rounded-xl p-6 min-h-[160px] flex flex-col justify-between transition-all duration-500 cursor-pointer group',
            isDarkMode ? 'bg-neutral-950 border-neutral-900' : 'bg-white border-neutral-200'
          ]"
        >
          <div>
            <span :class="['text-[10px] font-mono tracking-widest block mb-2 uppercase', isDarkMode ? 'text-neutral-600' : 'text-neutral-500']">SYSTEM STATE INTERCEPT</span>
            <h3 :class="['text-base font-bold transition-colors group-hover:text-[var(--accent-color)]', isDarkMode ? 'text-neutral-300' : 'text-black']">
              {{ card.challenge }}
            </h3>
          </div>
          <div
            :class="[
              'border-t pt-4 text-xs font-mono transition-colors flex items-center justify-between',
              isDarkMode ? 'border-neutral-900/60 text-neutral-500 group-hover:text-white' : 'border-neutral-200 text-neutral-500 group-hover:text-black'
            ]"
          >
            <span>Resolution Layer</span>
            <span class="opacity-0 group-hover:opacity-100 transition-opacity accent-text font-bold">→ {{ card.solution }}</span>
          </div>
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
const challengesGrid = ref(null)

const challengeMatrix = [
  { challenge: 'Manual Data Entry Operations', solution: 'Automated Realtime Sync' },
  { challenge: 'Disconnected Application Frameworks', solution: 'Unified Network Hub' },
  { challenge: 'Inaccurate Multi-Warehouse Quantities', solution: 'True Inventory Ledger' },
  { challenge: 'Delayed Reporting Syntheses', solution: 'Instant Analytics Stream' },
  { challenge: 'Isolated Customer Insight Profiles', solution: 'Omnichannel Single Log' },
  { challenge: 'Frequent Financial Balancing Discrepancies', solution: 'Ledger Audit Lockdown' },
  { challenge: 'Fulfillment Sequence Delivery Lag', solution: 'Direct Webhook Execution' },
  { challenge: 'Obscured Executive Management Visibility', solution: 'Live Performance View' }
]

let scrollTriggerInstance = null

onMounted(() => {
  const anim = gsap.fromTo(challengesGrid.value.children, { opacity: 0, y: 25 }, {
    opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out',
    scrollTrigger: { trigger: challengesGrid.value, start: 'top 85%' }
  })
  scrollTriggerInstance = anim.scrollTrigger
})

onUnmounted(() => { if (scrollTriggerInstance) scrollTriggerInstance.kill() })
</script>

<style scoped>
.theme-dark { --accent-color: #00ffa3; }
.theme-light { --accent-color: #f97316; }

.accent-text { color: var(--accent-color); }

.challenge-node-card:hover {
  border-color: color-mix(in srgb, var(--accent-color), transparent 60%);
}

.theme-dark .challenge-node-card:hover { background-color: #050505; }
.theme-light .challenge-node-card:hover { background-color: #f8fafc; }
</style>