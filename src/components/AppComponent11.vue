<template>
  <section :class="['faq-section py-20 px-6 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center faq-heading">
        Frequently Asked 
        <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Questions</span>
      </h2>
      
      <div class="space-y-4">
        <div 
          v-for="(item, idx) in faqs" 
          :key="idx" 
          :class="['faq-card border rounded-xl overflow-hidden transition-colors duration-300', activeFaq === idx ? 'faq-card--active' : '']"
        >
          <button 
            @click="toggleFaq(idx)"
            class="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
          >
            <span class="font-bold transition-colors faq-question">
              {{ item.question }}
            </span>
            <span 
              :class="['ml-4 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 faq-icon-circle', activeFaq === idx ? 'rotate-180 faq-icon-circle--active' : '']" 
            >
              <svg class="w-3 h-3 faq-chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <div 
            class="grid transition-all duration-300 ease-in-out faq-answer-panel"
            :style="{ gridTemplateRows: activeFaq === idx ? '1fr' : '0fr' }"
          >
            <div class="overflow-hidden">
              <p class="px-6 pb-6 pt-0 text-sm md:text-base leading-relaxed border-t faq-answer-text">
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
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))
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

<style scoped>
.theme-dark {
  background-color: #000000 !important;
  --accent-color: #00ffa3;
  --heading-color: #ffffff;
  --card-bg: #0a0a0a;
  --card-border: #171717;
  --card-border-active: #262626;
  --question-color: #ffffff;
  --circle-bg: #171717;
  --circle-border: #262626;
  --chevron-color: #a3a3a3;
  --answer-color: #a3a3a3;
  --divider-color: rgba(23, 23, 23, 0.5);
}

.theme-light {
  background-color: #ffffff !important;
  --accent-color: #f97316;
  --heading-color: #0f172a;
  --card-bg: #f8fafc;
  --card-border: rgba(15, 23, 42, 0.08);
  --card-border-active: rgba(15, 23, 42, 0.15);
  --question-color: #0f172a;
  --circle-bg: #f1f5f9;
  --circle-border: rgba(15, 23, 42, 0.08);
  --chevron-color: #475569;
  --answer-color: #475569;
  --divider-color: rgba(15, 23, 42, 0.06);
}

.faq-heading { color: var(--heading-color) !important; transition: color 0.4s ease; }
.faq-card { background-color: var(--card-bg) !important; border-color: var(--card-border) !important; }
.faq-card--active { border-color: var(--card-border-active) !important; }
.faq-card:hover .faq-question { color: var(--accent-color) !important; }
.faq-question { color: var(--question-color) !important; transition: color 0.3s ease; }
.faq-icon-circle { background-color: var(--circle-bg) !important; border: 1px solid var(--circle-border) !important; }
.faq-icon-circle--active { border-color: var(--accent-color) !important; }
.faq-chevron { color: var(--chevron-color) !important; }
.faq-answer-panel { color: var(--answer-color) !important; }
.faq-answer-text { border-color: var(--divider-color) !important; }
</style>