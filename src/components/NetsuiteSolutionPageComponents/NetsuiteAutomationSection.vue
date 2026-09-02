<template>
  <section :class="[
    'auto-section py-32 px-6 border-b relative z-20 overflow-hidden transition-colors duration-500',
    isDarkMode ? 'border-neutral-900 bg-neutral-950/20 theme-dark' : 'border-neutral-200 bg-white theme-light'
  ]">
    <div class="max-w-5xl mx-auto auto-container-wrapper">
      <h2
        :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-6 auto-main-heading', isDarkMode ? 'text-white' : 'text-black']">
        Watch Your Business <span class="accent-text">Run Automatically</span>
      </h2>
      <p
        :class="['text-center max-w-xl mx-auto text-sm md:text-base mb-20 auto-subtext', isDarkMode ? 'text-neutral-400' : 'text-black']">
        An production blueprint mapping individual application signals to automated execution points across the
        enterprise network.
        <span class="accent-text block mt-2 text-xs font-mono auto-meta-badge">AUTOMATION LOOP ACTIVE</span>
      </p>

      <div ref="automationTrack" class="space-y-4 relative">
        <div :class="['absolute left-6 top-4 bottom-4 w-[1px] z-0', isDarkMode ? 'bg-neutral-900' : 'bg-neutral-300']">
        </div>

        <div v-for="(node, index) in automationChain" :key="index"
          class="automation-row flex items-center gap-6 relative z-10 transition-all duration-500"
          :class="{ 'opacity-40 scale-[0.98]': activeShowcaseStep !== index && activeShowcaseStep !== null }">
          <div :class="[
            'w-12 h-12 rounded-full border flex items-center justify-center font-mono font-bold text-sm transition-all duration-500 shrink-0 auto-step-number',
            isDarkMode ? 'bg-black' : 'bg-white',
            activeShowcaseStep === index
              ? 'accent-border accent-text shadow-[0_0_15px_rgba(var(--accent-rgb),0.3)] scale-105'
              : (isDarkMode ? 'border-neutral-800 text-neutral-500' : 'border-neutral-300 text-black')
          ]">
            {{ index + 1 }}
          </div>
          <div :class="[
            'flex-1 border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors duration-500 auto-card-box',
            isDarkMode ? 'bg-black border-neutral-900' : 'bg-white border-neutral-200',
            activeShowcaseStep === index ? (isDarkMode ? 'border-[var(--accent-color)]/40 bg-neutral-950' : 'border-[var(--accent-color)]/40 bg-neutral-50') : ''
          ]">
            <div>
              <h3 class="text-base font-bold transition-colors auto-card-title"
                :class="activeShowcaseStep === index ? 'accent-text' : (isDarkMode ? 'text-white' : 'text-black')">
                {{ node.title }}
              </h3>
              <p :class="['text-xs mt-0.5 auto-card-details', isDarkMode ? 'text-neutral-400' : 'text-black']">{{
                node.details }}</p>
            </div>
            <span :class="[
              'text-[10px] font-mono uppercase border px-2.5 py-1 rounded auto-card-meta',
              isDarkMode ? 'bg-neutral-900 border-neutral-800 text-neutral-400' : 'bg-white border-neutral-300 text-black'
            ]">
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
  continuousShowcaseTimer = setInterval(() => {
    activeShowcaseStep.value = (activeShowcaseStep.value + 1) % automationChain.length
  }, 3500)

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

<style scoped>
.theme-dark {
  --accent-color: #00ffa3;
  --accent-rgb: 0, 255, 163;
}

.theme-light {
  --accent-color: #f97316;
  --accent-rgb: 249, 115, 22;
}

.accent-text {
  color: var(--accent-color);
}

.accent-border {
  border-color: var(--accent-color);
}

.auto-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.auto-container-wrapper,
.max-w-5xl {
  max-width: 100% !important;
}

.auto-main-heading {
  font-size: clamp(1.8rem, 3.5vw, 4rem);
}

.auto-subtext {
  font-size: clamp(0.875rem, 1.15vw, 1.15rem);
  max-width: 100% !important;
}

.auto-meta-badge {
  font-size: clamp(0.7rem, 0.85vw, 0.85rem);
}

.auto-step-number {
  width: clamp(2.5rem, 3.5vw, 3.5rem);
  height: clamp(2.5rem, 3.5vw, 3.5rem);
  font-size: clamp(0.8rem, 1vw, 1rem);
}

.auto-card-box {
  padding: clamp(1rem, 1.8vw, 1.75rem);
}

.auto-card-title {
  font-size: clamp(0.95rem, 1.25vw, 1.25rem);
}

.auto-card-details {
  font-size: clamp(0.75rem, 0.95vw, 0.95rem);
}

.auto-card-meta {
  font-size: clamp(0.65rem, 0.8vw, 0.8rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .auto-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .auto-main-heading {
    font-size: 2.8rem;
  }

  .auto-card-title {
    font-size: 1.1rem;
  }

  .auto-card-details {
    font-size: 0.9rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .auto-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .auto-main-heading {
    font-size: 3.5rem;
  }

  .auto-card-title {
    font-size: 1.2rem;
  }

  .auto-card-details {
    font-size: 1rem;
  }
}

@media (min-width: 1536px) {
  .auto-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .auto-main-heading {
    font-size: 4.2rem;
  }

  .auto-card-title {
    font-size: 1.35rem;
  }

  .auto-card-details {
    font-size: 1.1rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .auto-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .auto-main-heading {
    font-size: 5.2rem;
  }

  .auto-card-title {
    font-size: 1.6rem;
  }

  .auto-card-details {
    font-size: 1.3rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .auto-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .auto-main-heading {
    font-size: 2.5rem;
  }

  .auto-card-title {
    font-size: 1.05rem;
  }

  .auto-card-details {
    font-size: 0.85rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .auto-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .auto-main-heading {
    font-size: 2.1rem;
  }

  .auto-card-title {
    font-size: 1rem;
  }

  .auto-card-details {
    font-size: 0.8rem;
  }

  .automation-row {
    gap: 1rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .auto-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .auto-main-heading {
    font-size: 1.65rem;
  }

  .auto-subtext {
    font-size: 0.85rem;
    margin-bottom: 3rem;
  }

  .auto-step-number {
    width: 2.25rem;
    height: 2.25rem;
    font-size: 0.75rem;
  }

  .auto-card-box {
    padding: 0.875rem;
  }

  .auto-card-title {
    font-size: 0.9rem;
  }

  .auto-card-details {
    font-size: 0.75rem;
  }

  .automation-row {
    gap: 0.75rem;
  }
}

@media (max-width: 360px) {
  .auto-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .auto-main-heading {
    font-size: 1.5rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .auto-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
