<template>
  <section
    :class="['faq-section py-32 px-6 border-b relative z-20 transition-colors duration-400 w-full', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-4xl mx-auto faq-container w-full">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center faq-heading">
        Frequently Asked <span class="accent-text">Questions</span>
      </h2>
      <div ref="faqAccordion" class="space-y-4 w-full">
        <div v-for="(item, idx) in faqs" :key="idx"
          :class="['faq-card border rounded-xl overflow-hidden transition-colors duration-300 w-full', activeFaq === idx ? 'faq-card--active' : '']">
          <button @click="toggleFaq(idx)"
            class="w-full flex items-center justify-between p-6 text-left focus:outline-none group">
            <h3 class="font-bold text-base md:text-lg faq-question transition-colors duration-200">
              {{ item.question }}
            </h3>
            <span
              :class="['ml-4 flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-transform duration-300 arrow-circle', activeFaq === idx ? 'rotate-180 arrow-circle--active' : '']">
              <svg class="w-3 h-3 arrow-icon transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <div class="accordion-drawer" :style="{
            'grid-template-rows': activeFaq === idx ? '1fr' : '0fr',
            'opacity': activeFaq === idx ? 1 : 0
          }">
            <div class="drawer-content">
              <p class="faq-answer text-sm md:text-base leading-relaxed border-t pt-4">
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
import { ref, onMounted, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = inject('isDarkMode', ref(true))
const faqAccordion = ref(null)
const activeFaq = ref(null)

const faqs = [
  { question: 'What is web application development?', answer: 'Web application development involves creating secure, browser-accessible systems that allow companies to automate workflows, manage proprietary client datasets, and serve functional utilities globally without desktop software limitations.' },
  { question: 'How much does a custom web application cost?', answer: 'Costs scale proportionately with functional complexity, data API architecture overheads, dynamic portal views, integration scope, and specific performance/scaling requirements.' },
  { question: 'How long does development take?', answer: 'Standard applications typically move from product mapping to active deployment within 4 to 16 weeks, which includes comprehensive testing and staging loops.' },
  { question: 'Do you provide support after launch?', answer: 'Yes, we deliver persistent post-launch DevOps infrastructure engineering, updates, and maintenance agreements keeping systems highly performant and secure.' },
  { question: 'Can you redesign an existing web application?', answer: 'Absolutely. We refactor legacy software into advanced architectures, clean up spaghetti codebases, optimize databases, and completely refresh modern user experiences.' }
]

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

onMounted(() => {
  if (faqAccordion.value) {
    gsap.fromTo(faqAccordion.value.children,
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: faqAccordion.value, start: 'top 85%' }
      }
    )
  }
})
</script>

<style scoped>
.theme-dark {
  --accent-color: #00ffa3;
}

.theme-light {
  --accent-color: #f97316;
}

.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --heading-color: #ffffff;
  --card-bg: #0a0a0a;
  --card-border: #171717;
  --card-active-bg: rgba(10, 10, 10, 0.8);
  --card-active-border: #262626;
  --question-color: #ffffff;
  --arrow-bg: #171717;
  --arrow-border: #262626;
  --arrow-svg-color: #a3a3a3;
  --answer-color: #a3a3a3;
  --answer-border: #171717;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --heading-color: #0f172a;
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --card-active-bg: #f8fafc;
  --card-active-border: #cbd5e1;
  --question-color: #0f172a;
  --arrow-bg: #f1f5f9;
  --arrow-border: #cbd5e1;
  --arrow-svg-color: #64748b;
  --answer-color: #475569;
  --answer-border: #e2e8f0;
}

.accent-text {
  color: var(--accent-color);
}

.faq-section {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

.faq-container {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

.faq-heading {
  color: var(--heading-color) !important;
}

.faq-card {
  background-color: var(--card-bg) !important;
  border: 1px solid var(--card-border) !important;
  width: 100% !important;
}

.faq-card--active {
  background-color: var(--card-active-bg) !important;
  border-color: var(--card-active-border) !important;
}

.faq-question {
  color: var(--question-color) !important;
}

.group:hover .faq-question {
  color: var(--accent-color) !important;
}

.arrow-circle {
  background-color: var(--arrow-bg) !important;
  border-color: var(--arrow-border) !important;
}

.arrow-circle--active {
  border-color: color-mix(in srgb, var(--accent-color), transparent 70%) !important;
}

.arrow-icon {
  color: var(--arrow-svg-color) !important;
}

.group:hover .arrow-icon {
  color: var(--question-color) !important;
}

.faq-answer {
  color: var(--answer-color) !important;
  border-color: var(--answer-border) !important;
}

.accordion-drawer {
  display: grid;
  transition: grid-template-rows 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease;
  padding: 0 24px;
}

.drawer-content {
  overflow: hidden;
}

.accordion-drawer[style*="grid-template-rows: 1fr"] {
  padding-bottom: 24px;
}

/* =========================================================================
   BREAKPOINT TIERS WITH FULL 100% WIDTH AND RESPONSIVE SIZING
   ========================================================================= */

@media (max-width: 360px) {
  .faq-section {
    width: 100% !important;
    padding-left: 14px !important;
    padding-right: 14px !important;
    padding-top: 4rem !important;
    padding-bottom: 4rem !important;
  }

  .faq-heading {
    font-size: 1.5rem !important;
    margin-bottom: 2.5rem !important;
  }

  .faq-question {
    font-size: 0.95rem !important;
  }

  .faq-answer {
    font-size: 0.85rem !important;
  }
}

@media (min-width: 361px) and (max-width: 480px) {
  .faq-section {
    width: 100% !important;
    padding-left: 16px !important;
    padding-right: 16px !important;
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
  }

  .faq-heading {
    font-size: 1.75rem !important;
    margin-bottom: 3rem !important;
  }

  .faq-question {
    font-size: 1rem !important;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .faq-section {
    width: 100% !important;
    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  .faq-container {
    max-width: 100% !important;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .faq-section {
    width: 100% !important;
    padding-left: 32px !important;
    padding-right: 32px !important;
  }

  .faq-container {
    max-width: 100% !important;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .faq-section {
    width: 100% !important;
    padding-left: 40px !important;
    padding-right: 40px !important;
  }

  .faq-container {
    max-width: 1000px !important;
  }
}

@media (min-width: 1201px) and (max-width: 1535px) {
  .faq-section {
    width: 100% !important;
    padding-left: 48px !important;
    padding-right: 48px !important;
  }

  .faq-container {
    max-width: 1150px !important;
  }
}

@media (min-width: 1536px) and (max-width: 1920px) {
  .faq-section {
    width: 100% !important;
    padding-left: 64px !important;
    padding-right: 64px !important;
  }

  .faq-container {
    max-width: 1350px !important;
  }

  .faq-heading {
    font-size: 3rem !important;
  }

  .faq-question {
    font-size: 1.25rem !important;
  }

  .faq-answer {
    font-size: 1.1rem !important;
  }
}

@media (min-width: 1921px) {
  .faq-section {
    width: 100% !important;
    padding-left: 80px !important;
    padding-right: 80px !important;
    padding-top: 10rem !important;
    padding-bottom: 10rem !important;
  }

  .faq-container {
    max-width: 1600px !important;
  }

  .faq-heading {
    font-size: 3.75rem !important;
    margin-bottom: 5rem !important;
  }

  .faq-card {
    padding: 1rem 1.5rem !important;
  }

  .faq-question {
    font-size: 1.5rem !important;
  }

  .faq-answer {
    font-size: 1.25rem !important;
  }
}
</style>
