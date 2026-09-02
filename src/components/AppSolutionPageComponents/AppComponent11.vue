<template>
  <section
    :class="['faq-section py-14 px-4 sm:py-16 sm:px-6 md:py-20 lg:py-24 xl:py-28 2xl:py-32 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="faq-container mx-auto">
      <h2
        class="faq-heading text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold tracking-tight mb-8 sm:mb-10 md:mb-12 xl:mb-14 text-center">
        Frequently Asked
        <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Questions</span>
      </h2>

      <div class="space-y-3 sm:space-y-4">
        <div v-for="(item, idx) in faqs" :key="idx"
          :class="['faq-card border rounded-xl overflow-hidden transition-colors duration-300', activeFaq === idx ? 'faq-card--active' : '']">
          <button @click="toggleFaq(idx)"
            class="faq-question-btn w-full flex items-center justify-between p-4 sm:p-5 md:p-6 xl:p-7 text-left focus:outline-none group">
            <span class="faq-question font-bold transition-colors text-sm sm:text-base xl:text-lg 2xl:text-xl">
              {{ item.question }}
            </span>
            <span
              :class="['faq-icon-circle ml-4 flex items-center justify-center transition-all duration-300', activeFaq === idx ? 'rotate-180 faq-icon-circle--active' : '']">
              <svg class="faq-chevron" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <div class="grid transition-all duration-300 ease-in-out faq-answer-panel"
            :style="{ gridTemplateRows: activeFaq === idx ? '1fr' : '0fr' }">
            <div class="overflow-hidden">
              <p
                class="faq-answer-text px-4 sm:px-5 md:px-6 xl:px-7 pb-4 sm:pb-5 md:pb-6 xl:pb-7 pt-0 text-sm md:text-base xl:text-lg leading-relaxed border-t">
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

.faq-heading {
  color: var(--heading-color) !important;
  transition: color 0.4s ease;
}

.faq-card {
  background-color: var(--card-bg) !important;
  border-color: var(--card-border) !important;
}

.faq-card--active {
  border-color: var(--card-border-active) !important;
}

.faq-card:hover .faq-question {
  color: var(--accent-color) !important;
}

.faq-question {
  color: var(--question-color) !important;
  transition: color 0.3s ease;
}

.faq-icon-circle {
  background-color: var(--circle-bg) !important;
  border: 1px solid var(--circle-border) !important;
  width: 24px;
  height: 24px;
  border-radius: 9999px;
}

.faq-icon-circle--active {
  border-color: var(--accent-color) !important;
}

.faq-chevron {
  color: var(--chevron-color) !important;
  width: 12px;
  height: 12px;
}

.faq-answer-panel {
  color: var(--answer-color) !important;
}

.faq-answer-text {
  border-color: var(--divider-color) !important;
}

/* ==========================================================================
   Outer content container: scales fluidly with viewport width instead of
   jumping between fixed breakpoint values. mx-auto (in the template) keeps
   it centered at every width, from the smallest phone to the largest TV.
   ========================================================================== */
.faq-container {
  max-width: clamp(300px, 90vw, 768px);
}

/* ==========================================================================
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
  section.faq-section {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .faq-question-btn {
    padding: 0.9rem;
  }

  .faq-answer-text {
    padding-left: 0.9rem;
    padding-right: 0.9rem;
    padding-bottom: 0.9rem;
    font-size: 0.82rem;
  }

  .faq-icon-circle {
    width: 20px;
    height: 20px;
  }

  .faq-chevron {
    width: 10px;
    height: 10px;
  }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Tailwind's own scale tops out at 2xl (1536px), so everything below is
   already handled by the responsive classes above. This tier keeps the
   container, heading, and question/answer text growing further instead
   of plateauing at 1536px.
   ========================================================================== */
@media (min-width: 1920px) {
  .faq-container {
    max-width: 900px;
  }

  .faq-heading {
    font-size: 3.75rem;
  }

  .faq-question {
    font-size: 1.25rem;
  }

  .faq-answer-text {
    font-size: 1.15rem;
  }

  .faq-icon-circle {
    width: 30px;
    height: 30px;
  }

  .faq-chevron {
    width: 15px;
    height: 15px;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   heading, and cards growing proportionally instead of looking
   undersized.
   ========================================================================== */
@media (min-width: 2560px) {
  .faq-container {
    max-width: 1050px;
  }

  .faq-heading {
    font-size: 4.2rem;
  }

  .faq-question {
    font-size: 1.35rem;
  }

  .faq-answer-text {
    font-size: 1.25rem;
  }

  .faq-icon-circle {
    width: 34px;
    height: 34px;
  }

  .faq-chevron {
    width: 17px;
    height: 17px;
  }
}
</style>