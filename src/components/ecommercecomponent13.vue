<template>
  <section
    :class="['faq-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center faq-main-heading">
        Frequently Asked <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Questions</span>
      </h2>

      <div ref="faqContainer" class="space-y-4">
        <div v-for="(item, idx) in faqs" :key="idx"
          class="faq-accordion-row border rounded-xl overflow-hidden transition-colors"
          :class="{ 'active-faq-row': activeFaq === idx }">
          <button @click="toggleFaq(idx)" class="w-full flex items-center justify-between p-6 text-left group">
            <h3 class="font-bold text-base md:text-lg transition-colors faq-question-title">
              {{ item.question }}
            </h3>
            <span
              class="ml-4 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 arrow-circle-node"
              :class="{ 'rotate-180 active-arrow-node': activeFaq === idx }">
              <svg class="w-3 h-3 arrow-icon-vector" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
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
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --heading-color: #ffffff;
  --row-bg: #0a0a0a;
  --row-border: #171717;
  --row-active-border: #262626;
  --question-color: #ffffff;
  --answer-color: #a3a3a3;
  --divider-color: #171717;
  --circle-bg: #171717;
  --circle-border: #262626;
  --arrow-color: #a3a3a3;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --heading-color: #0f172a;
  --row-bg: #ffffff;
  --row-border: #e2e8f0;
  --row-active-border: #cbd5e1;
  --question-color: #000000;
  --answer-color: #000000;
  --divider-color: #e2e8f0;
  --circle-bg: #f1f5f9;
  --circle-border: #cbd5e1;
  --arrow-color: #000000;
}

.faq-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.max-w-4xl {
  max-width: 100% !important;
}

.faq-main-heading {
  color: var(--heading-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(2rem, 3.5vw, 4rem);
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
  font-size: clamp(1rem, 1.4vw, 1.35rem);
}

.group:hover .faq-question-title {
  color: var(--accent-color) !important;
}

.arrow-circle-node {
  background-color: var(--circle-bg) !important;
  border: 1px solid var(--circle-border) !important;
  width: clamp(1.5rem, 2.2vw, 2.25rem) !important;
  height: clamp(1.5rem, 2.2vw, 2.25rem) !important;
}

.active-arrow-node {
  border-color: var(--accent-color) !important;
  color: var(--accent-color) !important;
}

.arrow-icon-vector {
  color: var(--arrow-color) !important;
  width: clamp(0.75rem, 1vw, 1.1rem) !important;
  height: clamp(0.75rem, 1vw, 1.1rem) !important;
}

.faq-answer-text {
  color: var(--answer-color) !important;
  border-color: var(--divider-color) !important;
  font-size: clamp(0.85rem, 1.15vw, 1.1rem);
  line-height: 1.7;
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .faq-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .faq-main-heading {
    font-size: 2.75rem;
  }

  .faq-question-title {
    font-size: 1.15rem;
  }

  .faq-answer-text {
    font-size: 0.95rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .faq-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .faq-main-heading {
    font-size: 3.4rem;
  }

  .faq-question-title {
    font-size: 1.25rem;
  }

  .faq-answer-text {
    font-size: 1.05rem;
  }
}

@media (min-width: 1536px) {
  .faq-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .faq-main-heading {
    font-size: 4rem;
  }

  .faq-question-title {
    font-size: 1.45rem;
  }

  .faq-answer-text {
    font-size: 1.2rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .faq-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .faq-main-heading {
    font-size: 5rem;
  }

  .faq-question-title {
    font-size: 1.8rem;
  }

  .faq-answer-text {
    font-size: 1.4rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .faq-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .faq-main-heading {
    font-size: 2.5rem;
  }

  .faq-question-title {
    font-size: 1.1rem;
  }

  .faq-answer-text {
    font-size: 0.9rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .faq-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .faq-main-heading {
    font-size: 2.2rem;
  }

  .faq-question-title {
    font-size: 1rem;
  }

  .faq-answer-text {
    font-size: 0.875rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .faq-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .faq-main-heading {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }

  .faq-question-title {
    font-size: 0.95rem;
  }

  .faq-answer-text {
    font-size: 0.85rem;
  }
}

@media (max-width: 360px) {
  .faq-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .faq-main-heading {
    font-size: 1.6rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .faq-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
