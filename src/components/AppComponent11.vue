<template>
  <section class="py-20 px-6 bg-black text-white">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
        Frequently Asked <span class="text-[#00ffa3]">Questions</span>
      </h2>
      
      <div class="space-y-4">
        <div 
          v-for="(item, idx) in faqs" 
          :key="idx" 
          class="bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden transition-colors duration-300"
          :class="{ 'border-neutral-800': activeFaq === idx }"
        >
          <button 
            @click="toggleFaq(idx)"
            class="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
          >
            <span class="font-bold text-white group-hover:text-[#00ffa3] transition-colors">
              {{ item.question }}
            </span>
            <span 
              class="ml-4 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center transition-all duration-300" 
              :class="{ 'rotate-180 border-[#00ffa3]/30': activeFaq === idx }"
            >
              <svg class="w-3 h-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <div 
            class="grid transition-all duration-300 ease-in-out text-neutral-400"
            :style="{ gridTemplateRows: activeFaq === idx ? '1fr' : '0fr' }"
          >
            <div class="overflow-hidden">
              <p class="px-6 pb-6 pt-0 text-sm md:text-base leading-relaxed border-t border-neutral-900/50">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeFaq = ref(null)

const faqs = [
  { question: 'What is mobile app development?', answer: 'Mobile app development is the process of designing and building applications for smartphones and tablets, enabling businesses to engage users and deliver services digitally.' },
  { question: 'How much does app development cost?', answer: 'The cost depends on complexity, features, integrations, and platform requirements.' },
  { question: 'How long does it take to build a mobile app?', answer: 'Most projects take between 6 and 20 weeks depending on requirements.' },
  { question: 'Do you develop apps for both Android and iOS?', answer: 'Yes, we develop native and cross-platform applications for both operating systems.' },
  { question: 'Do you provide post-launch support?', answer: 'Yes, we offer maintenance, updates, performance monitoring, and feature enhancements.' },
  { question: 'Can you redesign an existing app?', answer: 'Absolutely. We can modernize outdated applications and improve usability and performance.' }
]

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}
</script>