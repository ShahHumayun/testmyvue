<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">
        Frequently Asked <span class="text-[#00ffa3]">Questions</span>
      </h2>
      
      <div ref="faqContainer" class="space-y-4">
        <div 
          v-for="(item, idx) in faqs" 
          :key="idx" 
          class="bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden transition-colors"
          :class="{ 'border-neutral-800': activeFaq === idx }"
        >
          <button @click="toggleFaq(idx)" class="w-full flex items-center justify-between p-6 text-left group">
            <h3 class="font-bold text-base md:text-lg text-white group-hover:text-[#00ffa3] transition-colors">
              {{ item.question }}
            </h3>
            <span class="ml-4 flex-shrink-0 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center transition-transform duration-300" 
                  :class="{ 'rotate-180 border-[#00ffa3]/30': activeFaq === idx }">
              <svg class="w-3 h-3 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </span>
          </button>
          
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
import { ref } from 'vue'
import { gsap } from 'gsap'

const activeFaq = ref(null)

const faqs = [
  { question: 'What is ecommerce development?', answer: 'Ecommerce development involves building online stores and digital shopping platforms that allow businesses to sell products and services online.' },
  { question: 'Which ecommerce platform is best?', answer: 'The best platform depends on business goals, product types, scalability requirements, and budget.' },
  { question: 'Can you migrate my existing store?', answer: 'Yes, we can migrate stores from platforms such as WooCommerce, Magento, Shopify, and custom systems.' },
  { question: 'Do you integrate payment gateways?', answer: 'Yes, we integrate secure payment gateways and transaction systems.' },
  { question: 'Can you optimize my ecommerce store for SEO?', answer: 'Absolutely. We build ecommerce websites with SEO best practices to improve visibility and organic traffic.' },
  { question: 'Do you provide ongoing support?', answer: 'Yes. We provide maintenance, updates, performance monitoring, and growth support.' }
]

const toggleFaq = (idx) => {
  const elements = document.querySelectorAll('.answer-wrapper')
  
  if (activeFaq.value === idx) {
    // Close the current one
    gsap.to(elements[idx], { height: 0, duration: 0.4, ease: "power2.inOut" })
    activeFaq.value = null
  } else {
    // Close the previous one if it exists
    if (activeFaq.value !== null) {
      gsap.to(elements[activeFaq.value], { height: 0, duration: 0.4, ease: "power2.inOut" })
    }
    // Open the new one
    gsap.to(elements[idx], { height: "auto", duration: 0.4, ease: "power2.inOut" })
    activeFaq.value = idx
  }
}
</script>
