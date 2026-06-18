<template>
  <!-- 14. FAQ SECTION -->
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
        Frequently Asked <span class="text-[#00ffa3]">Questions</span>
      </h2>
      <div ref="faqWrapper" class="space-y-4">
        <div
          v-for="(item, idx) in faqsList"
          :key="idx"
          class="bg-neutral-950 border border-neutral-900 rounded-lg overflow-hidden transition-all duration-300"
          :class="{ 'border-neutral-800': activeFaqStep === idx }"
        >
          <button @click="toggleFaqStep(idx)" class="w-full flex items-center justify-between p-6 text-left group">
            <h3 class="font-bold text-base md:text-lg text-white group-hover:text-[#00ffa3] transition-colors">
              {{ item.question }}
            </h3>
            <span class="ml-4 shrink-0 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center transition-transform duration-300" :class="{ 'rotate-180 border-[#00ffa3]/40': activeFaqStep === idx }">
              <svg class="w-3 h-3 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </span>
          </button>
          <div class="transition-all duration-300 ease-in-out max-h-0 opacity-0 overflow-hidden" :style="activeFaqStep === idx ? { 'max-h': '250px', 'opacity': 1, 'padding': '0 24px 24px 24px' } : {}">
            <p class="text-neutral-400 text-sm md:text-base leading-relaxed border-t border-neutral-900 pt-4">
              {{ item.answer }}
            </p>
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

const faqWrapper = ref(null)
const activeFaqStep = ref(null)

const faqsList = [
  { question: 'What is NetSuite integration?', answer: 'NetSuite integration connects Oracle NetSuite ERP with other business applications to automate cross-platform workflows and maintain real-time data synchronization.' },
  { question: 'Why should businesses integrate NetSuite?', answer: 'Integration eliminates manual errors, speeds up processing loops, and aggregates tracking datasets into a reliable single source of truth.' },
  { question: 'Can you integrate NetSuite with Shopify?', answer: 'Yes. We deploy custom event-driven Shopify connectors that automatically synchronize orders, current item balances, and customer profiles.' },
  { question: 'Do you provide custom NetSuite integrations?', answer: 'Absolutely. We architect custom Restlet and SuiteTalk solutions configured explicitly around your complex processing mandates.' },
  { question: 'How long does a NetSuite integration project take?', answer: 'Timelines scale depending on data complexity, historical validation steps, and system configurations. Custom estimations are provided post-discovery.' },
  { question: 'Do you offer post-integration support?', answer: 'Yes. We establish persistent monitoring protocols, API load checking, and iterative logic balancing support logs.' }
]

const toggleFaqStep = (idx) => {
  activeFaqStep.value = activeFaqStep.value === idx ? null : idx
}

let scrollTriggerInstance = null

onMounted(() => {
  // FAQ Component Blocks Accumulation Rows Reveal
  const anim = gsap.fromTo(faqWrapper.value.children, { opacity: 0, y: 15 }, {
    opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
    scrollTrigger: { trigger: faqWrapper.value, start: 'top 85%' }
  })
  scrollTriggerInstance = anim.scrollTrigger
})

onUnmounted(() => {
  if (scrollTriggerInstance) scrollTriggerInstance.kill()
})
</script>