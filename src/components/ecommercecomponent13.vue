<template>
  <section :class="['faq-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center faq-main-heading">
        Frequently Asked <span class="text-[#00ffa3]">Questions</span>
      </h2>
      
      <div ref="faqContainer" class="space-y-4">
        <div 
          v-for="(item, idx) in faqs" 
          :key="idx" 
          class="faq-accordion-row border rounded-xl overflow-hidden transition-colors"
          :class="{ 'active-faq-row': activeFaq === idx }"
        >
          <button @click="toggleFaq(idx)" class="w-full flex items-center justify-between p-6 text-left group">
            <h3 class="font-bold text-base md:text-lg transition-colors faq-question-title">
              {{ item.question }}
            </h3>
            <span class="ml-4 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 arrow-circle-node" 
                  :class="{ 'rotate-180 active-arrow-node': activeFaq === idx }">
              <svg class="w-3 h-3 arrow-icon-vector" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </span>
          </button>
          
          <div class="answer-wrapper overflow-hidden" style="height: 0;">
            <div class="p-6 pt-0 text-sm md:text-base leading-relaxed border-t faq-answer-text">
              {{ item.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'
import { gsap } from 'gsap'

// Inject global theme state context seamlessly
const isDarkMode = inject('isDarkMode', ref(true))

const activeFaq = ref(null)

const faqs = [
  { question: 'What is ecommerce development?', answer: 'Ecommerce development involves building online stores and digital shopping platforms that allow businesses to sell products and services online.' },
  { question: 'Which ecommerce platform is best?', answer: 'The best platform depends on business goals, product types, scalability requirements, and budget. For enterprise and B2B businesses with complex catalogs, we typically recommend Magento for its flexibility and scalability.' },
  { question: 'Can you migrate my existing store?', answer: 'Yes, we can migrate stores from platforms such as WooCommerce, Magento, Shopify, and custom systems.' },
  { question: 'Why choose Magento for my store?', answer: 'Magento offers unmatched flexibility for complex product catalogs, multi-store and multi-currency setups, and B2B functionality out of the box. It scales well with business growth and supports deep customization through custom modules and API integrations — making it our go-to recommendation for enterprise-level stores.' },
  { question: 'Do you offer Magento 2 migration services?', answer: 'Yes. We handle full Magento 1 to Magento 2 migrations and legacy platform-to-Magento 2 migrations, including data transfer, custom theme rebuilding, extension compatibility checks, and performance tuning post-migration.' },
  { question: 'Can you build custom Magento modules?', answer: 'Yes, our team develops custom Magento 2 modules tailored to your business logic — from custom checkout flows and pricing rules to third-party API and ERP integrations like NetSuite.' },
  { question: 'Do you integrate payment gateways?', answer: 'Yes, we integrate secure payment gateways and transaction systems.' },
  { question: 'Can you optimize my ecommerce store for SEO?', answer: 'Absolutely. We build ecommerce websites with SEO best practices to improve visibility and organic traffic.' },
  { question: 'Do you provide ongoing support?', answer: 'Yes. We provide maintenance, updates, performance monitoring, and growth support.' }
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

<style scoped>
/* ── Encapsulated Visual Protection Boundaries ── */
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important; /* border-neutral-900 equivalent */
  --heading-color: #ffffff;
  
  /* Accordion Rows */
  --row-bg: #0a0a0a; /* bg-neutral-950 equivalent */
  --row-border: #171717; /* border-neutral-900 equivalent */
  --row-active-border: #262626; /* border-neutral-800 equivalent */
  --question-color: #ffffff;
  --answer-color: #a3a3a3; /* text-neutral-400 equivalent */
  --divider-color: #171717;
  
  /* Controls */
  --circle-bg: #171717; /* bg-neutral-900 equivalent */
  --circle-border: #262626; /* border-neutral-800 equivalent */
  --arrow-color: #a3a3a3;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important; /* border-slate-200 equivalent */
  --heading-color: #0f172a; /* text-slate-900 equivalent */
  
  /* Accordion Rows */
  --row-bg: #ffffff;
  --row-border: #e2e8f0;
  --row-active-border: #cbd5e1; /* border-slate-300 equivalent */
  --question-color: #000000; /* requested text to black */
  --answer-color: #000000; /* requested text to black */
  --divider-color: #e2e8f0;
  
  /* Controls */
  --circle-bg: #f1f5f9; /* bg-slate-100 equivalent */
  --circle-border: #cbd5e1;
  --arrow-color: #000000;
}

/* ── Explicit Selector Rule Mappings ── */
.faq-section {
  width: 100% !important;
}

.faq-main-heading {
  color: var(--heading-color) !important;
  transition: color 0.4s ease;
}

.faq-accordion-row {
  background-color: var(--row-bg) !important;
  border: 1px solid var(--row-border) !important;
}

.faq-accordion-row.active-faq-row {
  border-color: var(--row-active-border) !important;
}

.faq-question-title {
  color: var(--question-color) !important;
}

.group:hover .faq-question-title {
  color: #00ffa3 !important;
}

.arrow-circle-node {
  background-color: var(--circle-bg) !important;
  border: 1px solid var(--circle-border) !important;
}

.arrow-circle-node.active-arrow-node {
  border-color: rgba(0, 255, 163, 0.3) !important;
}

.arrow-icon-vector {
  color: var(--arrow-color) !important;
}

.faq-answer-text {
  color: var(--answer-color) !important;
  border-color: var(--divider-color) !important;
  transition: color 0.4s ease, border-color 0.4s ease;
}
</style>