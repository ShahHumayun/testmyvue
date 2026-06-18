<template>
  <!-- 8. BUSINESS CHALLENGES WE SOLVE -->
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center mb-20">
        Eliminate Operational <span class="text-[#00ffa3]">Bottlenecks</span>
      </h2>
      <div ref="challengesGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(card, idx) in challengeMatrix"
          :key="idx"
          class="challenge-node-card bg-neutral-950 border border-neutral-900 rounded-xl p-6 min-h-[160px] flex flex-col justify-between transition-all duration-500 cursor-pointer group"
        >
          <div>
            <span class="text-[10px] font-mono tracking-widest text-neutral-600 block mb-2 uppercase">SYSTEM STATE INTERCEPT</span>
            <h3 class="text-base font-bold text-neutral-300 group-hover:text-[#00ffa3] transition-colors">
              {{ card.challenge }}
            </h3>
          </div>
          <!-- Interactive Dynamic Transformation Hint Text Node -->
          <div class="border-t border-neutral-900/60 pt-4 text-xs font-mono text-neutral-500 group-hover:text-white transition-colors flex items-center justify-between">
            <span>Resolution Layer</span>
            <span class="opacity-0 group-hover:opacity-100 transition-opacity text-[#00ffa3] font-bold">→ {{ card.solution }}</span>
          </div>
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
  // Challenges Conversion Matrix Grid Cascade Loading
  const anim = gsap.fromTo(challengesGrid.value.children, { opacity: 0, y: 25 }, {
    opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out',
    scrollTrigger: { trigger: challengesGrid.value, start: 'top 85%' }
  })
  scrollTriggerInstance = anim.scrollTrigger
})

onUnmounted(() => {
  if (scrollTriggerInstance) scrollTriggerInstance.kill()
})
</script>

<style scoped>
/* System challenge conversion dynamic text updates overlay metrics */
.challenge-node-card:hover {
  border-color: rgba(0, 255, 163, 0.4);
  background-color: #050505;
}
</style>