<template>
  <section :class="[
    'faq-section py-32 px-6 border-b relative z-20 transition-colors duration-500',
    isDarkMode ? 'border-neutral-800 bg-[#1c1c1c] theme-dark' : 'border-neutral-200 bg-[#f2f2f2] theme-light'
  ]">
    <div class="max-w-4xl mx-auto faq-container-wrapper">
      <h2
        :class="['text-3xl md:text-4xl font-bold tracking-tight text-center mb-16 faq-main-heading', isDarkMode ? 'text-white' : 'text-black']">
        Frequently Asked <span class="accent-text">Questions</span>
      </h2>

      <div ref="faqContainer" class="space-y-4">
        <div v-for="(item, idx) in faqsList" :key="idx" :class="[
          'border rounded-xl overflow-hidden faq-card-box',
          isDarkMode ? 'bg-black border-neutral-800' : 'bg-white border-neutral-200'
        ]">
          <button @click="toggleFaq(idx)"
            class="w-full flex items-center justify-between p-6 text-left group faq-toggle-button">
            <h3
              :class="['font-bold text-base md:text-lg group-hover:text-[var(--accent-color)] transition-colors faq-question-text', isDarkMode ? 'text-white' : 'text-black']">
              {{ item.question }}
            </h3>
            <span :class="[
              'ml-4 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 border faq-icon-box',
              isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200',
              { 'border-[var(--accent-color)]/30': activeFaq === idx }
            ]" :style="{ transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0deg)' }">
              <svg class="w-3 h-3 faq-svg-icon" :class="isDarkMode ? 'text-neutral-400' : 'text-neutral-500'"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

          <div class="answer-wrapper overflow-hidden" style="height: 0;">
            <div
              :class="['p-6 pt-0 text-sm md:text-base leading-relaxed border-t faq-answer-text', isDarkMode ? 'text-neutral-400 border-neutral-900' : 'text-neutral-600 border-neutral-200']">
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
const faqContainer = ref(null)
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
  const elements = faqContainer.value.querySelectorAll('.answer-wrapper')
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
  --accent-color: #00ffa3;
}

.theme-light {
  --accent-color: #f97316;
}

.accent-text {
  color: var(--accent-color);
}

.faq-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.faq-container-wrapper,
.max-w-4xl {
  max-width: 100% !important;
}

.faq-main-heading {
  font-size: clamp(1.8rem, 3.5vw, 4rem);
}

.faq-question-text {
  font-size: clamp(0.95rem, 1.25vw, 1.25rem);
}

.faq-answer-text {
  font-size: clamp(0.85rem, 1.1vw, 1.1rem);
}

.faq-toggle-button {
  padding: clamp(1.25rem, 2vw, 1.75rem);
}

.faq-icon-box {
  width: clamp(1.5rem, 2vw, 2rem);
  height: clamp(1.5rem, 2vw, 2rem);
}

.faq-svg-icon {
  width: clamp(0.75rem, 1vw, 1rem);
  height: clamp(0.75rem, 1vw, 1rem);
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
    font-size: 2.8rem;
  }

  .faq-question-text {
    font-size: 1.1rem;
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
    font-size: 3.5rem;
  }

  .faq-question-text {
    font-size: 1.2rem;
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
    font-size: 4.2rem;
  }

  .faq-question-text {
    font-size: 1.35rem;
  }

  .faq-answer-text {
    font-size: 1.15rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .faq-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .faq-main-heading {
    font-size: 5.2rem;
  }

  .faq-question-text {
    font-size: 1.6rem;
  }

  .faq-answer-text {
    font-size: 1.35rem;
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

  .faq-question-text {
    font-size: 1.05rem;
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
    font-size: 2.1rem;
    margin-bottom: 2.5rem;
  }

  .faq-question-text {
    font-size: 1rem;
  }

  .faq-answer-text {
    font-size: 0.85rem;
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
    font-size: 1.65rem;
    margin-bottom: 2rem;
  }

  .faq-toggle-button {
    padding: 1rem;
  }

  .faq-question-text {
    font-size: 0.9rem;
  }

  .faq-answer-text {
    font-size: 0.8rem;
    padding: 1rem;
    padding-top: 0;
  }
}

@media (max-width: 360px) {
  .faq-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .faq-main-heading {
    font-size: 1.5rem;
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