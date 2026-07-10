<template>
  <!-- 9. AUTOMATION SHOWCASE -->
  <section
    :class="[
      'py-32 px-6 border-b relative z-20 overflow-hidden',
      isDarkMode ? 'border-neutral-900 bg-neutral-950/20' : 'border-neutral-200 bg-white'
    ]"
  >
    <div class="max-w-5xl mx-auto">
      <h2 :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-6', isDarkMode ? 'text-white' : 'text-black']">
        Watch Your Business <span class="text-[#00ffa3]">Run Automatically</span>
      </h2>
      <p :class="['text-center max-w-xl mx-auto text-sm md:text-base mb-20', isDarkMode ? 'text-neutral-400' : 'text-black']">
        An production blueprint mapping individual application signals to automated execution points across the enterprise network.
        <span class="text-[#00ffa3] block mt-2 text-xs font-mono">AUTOMATION LOOP ACTIVE</span>
      </p>

      <!-- Interactive Real-time Order Process Stage Flow Pipeline Grid -->
      <div ref="automationTrack" class="space-y-4 relative">
        <div :class="['absolute left-6 top-4 bottom-4 w-[1px] z-0', isDarkMode ? 'bg-neutral-900' : 'bg-neutral-300']"></div>

        <div
          v-for="(node, index) in automationChain"
          :key="index"
          class="automation-row flex items-center gap-6 relative z-10 transition-all duration-500"
          :class="{ 'opacity-40 scale-[0.98]': activeShowcaseStep !== index && activeShowcaseStep !== null }"
        >
          <div
            :class="[
              'w-12 h-12 rounded-full border flex items-center justify-center font-mono font-bold text-sm transition-all duration-500 shrink-0',
              isDarkMode ? 'bg-black' : 'bg-white',
              activeShowcaseStep === index
                ? 'border-[#00ffa3] text-[#00ffa3] shadow-[0_0_15px_rgba(0,255,163,0.3)] scale-105'
                : (isDarkMode ? 'border-neutral-800 text-neutral-500' : 'border-neutral-300 text-black')
            ]"
          >
            {{ index + 1 }}
          </div>
          <div
            :class="[
              'flex-1 border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors duration-500',
              isDarkMode ? 'bg-black border-neutral-900' : 'bg-white border-neutral-200',
              activeShowcaseStep === index ? (isDarkMode ? 'border-[#00ffa3]/40 bg-neutral-950' : 'border-[#00ffa3]/40 bg-neutral-50') : ''
            ]"
          >
            <div>
              <h3 class="text-base font-bold transition-colors" :class="activeShowcaseStep === index ? 'text-[#00ffa3]' : (isDarkMode ? 'text-white' : 'text-black')">
                {{ node.title }}
              </h3>
              <p :class="['text-xs mt-0.5', isDarkMode ? 'text-neutral-400' : 'text-black']">{{ node.details }}</p>
            </div>
            <span
              :class="[
                'text-[10px] font-mono uppercase border px-2.5 py-1 rounded',
                isDarkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-400' : 'bg-white border-neutral-300 text-black'
              ]"
            >
              {{ node.meta }}
            </span>
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

const automationTrack = ref(null)
const activeShowcaseStep = ref(0)

const automationChain = [
  { title: 'Customer Order Triggered', details: 'Direct checkout signal received from digital store channel.', meta: 'Payload Transmitted' },
  { title: 'Inventory Levels Updated', details: 'Item inventory counts adjusted globally across all warehouses.', meta: 'NetSuite Sync Active' },
  { title: 'Payment Gateways Processed', details: 'Cryptographic capture verification processed instantly.', meta: 'Tokenized Validation' },
  { title: 'Corporate Invoice Generated', details: 'Transactional matching entry logged inside active accounts.', meta: 'Ledger Sealed' },
  { title: 'Logistics Shipment Created', details: 'Fulfillment routing commands dispatched to distribution points.', meta: 'Fulfillment Fired' },
  { title: 'Customer Notified Automatically', details: 'Tracking codes compiled and communicated to the buyer.', meta: 'Channel Closed' }
]

let continuousShowcaseTimer = null
let scrollTriggerInstance = null

onMounted(() => {
  // Automated Sequential Pipeline Automation Showcase Loop Driver
  continuousShowcaseTimer = setInterval(() => {
    activeShowcaseStep.value = (activeShowcaseStep.value + 1) % automationChain.length
  }, 3500)

  // Automation Flow Showcase Tracker Rows Reveals
  const anim = gsap.fromTo(automationTrack.value.children, { opacity: 0, y: 20 }, {
    opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
    scrollTrigger: { trigger: automationTrack.value, start: 'top 80%' }
  })
  scrollTriggerInstance = anim.scrollTrigger
})

onUnmounted(() => {
  clearInterval(continuousShowcaseTimer)
  if (scrollTriggerInstance) scrollTriggerInstance.kill()
})
</script>