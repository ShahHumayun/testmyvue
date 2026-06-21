<template>
  <section class="py-32 px-6 border-b border-neutral-800 bg-black relative z-20">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16 text-white">
        Frequently Asked <span class="text-[#00ffa3]">Questions</span>
      </h2>
      
      <div ref="faqContainer" class="space-y-4">
        <div 
          v-for="(item, idx) in faqsList" 
          :key="idx" 
          class="bg-black border border-neutral-800 rounded-xl overflow-hidden"
        >
          <!-- Question Button -->
          <button @click="toggleFaq(idx)" class="w-full flex items-center justify-between p-6 text-left group">
            <h3 class="font-bold text-base md:text-lg text-white group-hover:text-[#00ffa3] transition-colors">
              {{ item.question }}
            </h3>
            <span class="ml-4 flex-shrink-0 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center transition-transform duration-300" 
                  :class="{ 'rotate-180 border-[#00ffa3]/30': activeFaq === idx }">
              <svg class="w-3 h-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>
          
          <!-- Animated Answer Wrapper -->
          <div class="answer-wrapper overflow-hidden" style="height: 0;">
            <div class="p-6 pt-0 text-neutral-400 text-sm md:text-base leading-relaxed border-t border-neutral-900">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const activeFaq = ref(null)

const faqsList = [
  { question: 'What is NetSuite integration?', answer: 'NetSuite integration connects Oracle NetSuite ERP with other business applications to automate cross-platform workflows and maintain real-time data synchronization.' },
  { question: 'Why should businesses integrate NetSuite?', answer: 'Integration eliminates manual errors, speeds up processing loops, and aggregates tracking datasets into a reliable single source of truth.' },
  { question: 'Can you integrate NetSuite with Shopify?', answer: 'Yes. We deploy custom event-driven Shopify connectors that automatically synchronize orders, current item balances, and customer profiles.' },
  { question: 'Do you provide custom NetSuite integrations?', answer: 'Absolutely. We architect custom Restlet and SuiteTalk solutions configured explicitly around your complex processing mandates.' },
  { question: 'How long does a NetSuite integration project take?', answer: 'Timelines scale depending on data complexity, historical validation steps, and system configurations. Custom estimations are provided post-discovery.' },
  { question: 'Do you offer post-integration support?', answer: 'Yes. We establish persistent monitoring protocols, API load checking, and iterative logic balancing support logs.' }
]

const toggleFaq = (idx) => {
  const elements = document.querySelectorAll('.answer-wrapper')
  
  if (activeFaq.value === idx) {
    gsap.to(elements[idx], { height: 0, duration: 0.4, ease: "power2.inOut" })
    activeFaq.value = null
  } else {
    if (activeFaq.value !== null) {
      gsap.to(elements[activeFaq.value], { height: 0, duration: 0.4, ease: "power2.inOut" })
    }
    gsap.to(elements[idx], { height: "auto", duration: 0.4, ease: "power2.inOut" })
    activeFaq.value = idx
  }
}
</script>