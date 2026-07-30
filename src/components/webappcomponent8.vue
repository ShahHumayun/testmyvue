<template>
  <section
    :class="['story-section py-32 px-6 border-b relative z-20 transition-colors duration-400 w-full', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-5xl mx-auto text-center space-y-12 story-container w-full">
      <h2 class="text-sm font-semibold tracking-widest uppercase accent-text story-eyebrow">
        Helping Businesses Scale Digitally
      </h2>
      <blockquote ref="storyQuote"
        class="text-2xl md:text-4xl font-medium tracking-tight leading-relaxed max-w-4xl mx-auto italic story-quote-text">
        "We transformed outdated business processes into a modern web platform that improved operational efficiency and
        accelerated growth."
      </blockquote>
      <div ref="storyStats"
        class="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 max-w-3xl mx-auto border-t divider-line stats-grid">
        <div v-for="(sStat, idx) in storyStatsData" :key="idx" class="space-y-1">
          <div class="text-3xl md:text-5xl font-black tracking-tight counter-number">
            <span class="success-counter accent-text" :data-target="sStat.value">0</span>%
          </div>
          <p class="text-xs uppercase tracking-wider font-semibold counter-label">{{ sStat.label }}</p>
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

const storyQuote = ref(null)
const storyStats = ref(null)

const storyStatsData = [
  { value: 250, label: 'Increase in Efficiency' },
  { value: 180, label: 'User Engagement' },
  { value: 300, label: 'Process Speed' }
]

onMounted(() => {
  gsap.fromTo(storyQuote.value, { opacity: 0, y: 20 }, {
    opacity: 1,
    y: 0,
    duration: 1.5,
    ease: 'power3.out',
    scrollTrigger: { trigger: storyQuote.value, start: 'top 80%' }
  })

  const successCounters = document.querySelectorAll('.success-counter')
  successCounters.forEach((counter) => {
    const targetValue = parseInt(counter.getAttribute('data-target'), 10)
    gsap.fromTo(counter,
      { textContent: 0 },
      {
        textContent: targetValue,
        duration: 2.5,
        ease: 'power3.out',
        snap: { textContent: 1 },
        scrollTrigger: { trigger: storyStats.value, start: 'top 85%' }
      }
    )
  })
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
  background: #000000 !important;
  border-color: #171717 !important;
  --quote-color: #ffffff;
  --divider-color: #171717;
  --label-color: #a3a3a3;
}

.theme-light {
  background: #ffffff !important;
  border-color: #e2e8f0 !important;
  --quote-color: #0f172a;
  --divider-color: #e2e8f0;
  --label-color: #475569;
}

.accent-text {
  color: var(--accent-color);
}

.story-section {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

.story-container {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

.story-quote-text {
  color: var(--quote-color) !important;
  transition: color 0.4s ease;
}

.divider-line {
  border-color: var(--divider-color) !important;
  transition: border-color 0.4s ease;
}

.counter-label {
  color: var(--label-color) !important;
  transition: color 0.4s ease;
}

/* =========================================================================
   BREAKPOINT TIERS WITH FULL 100% WIDTH AND RESPONSIVE SIZING
   ========================================================================= */

@media (max-width: 360px) {
  .story-section {
    width: 100% !important;
    padding-left: 14px !important;
    padding-right: 14px !important;
    padding-top: 4rem !important;
    padding-bottom: 4rem !important;
  }

  .story-eyebrow {
    font-size: 0.7rem;
  }

  .story-quote-text {
    font-size: 1.25rem !important;
  }

  .counter-number {
    font-size: 1.75rem !important;
  }

  .counter-label {
    font-size: 0.65rem;
  }
}

@media (min-width: 361px) and (max-width: 480px) {
  .story-section {
    width: 100% !important;
    padding-left: 16px !important;
    padding-right: 16px !important;
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
  }

  .story-quote-text {
    font-size: 1.4rem !important;
  }

  .counter-number {
    font-size: 2rem !important;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .story-section {
    width: 100% !important;
    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  .story-container {
    max-width: 100% !important;
  }

  .story-quote-text {
    font-size: 1.75rem !important;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .story-section {
    width: 100% !important;
    padding-left: 32px !important;
    padding-right: 32px !important;
  }

  .story-container {
    max-width: 100% !important;
  }

  .story-quote-text {
    font-size: 2.1rem !important;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .story-section {
    width: 100% !important;
    padding-left: 40px !important;
    padding-right: 40px !important;
  }

  .story-container {
    max-width: 1140px !important;
  }

  .story-quote-text {
    font-size: 2.3rem !important;
  }
}

@media (min-width: 1201px) and (max-width: 1535px) {
  .story-section {
    width: 100% !important;
    padding-left: 48px !important;
    padding-right: 48px !important;
  }

  .story-container {
    max-width: 1320px !important;
  }

  .story-quote-text {
    font-size: 2.5rem !important;
  }
}

@media (min-width: 1536px) and (max-width: 1920px) {
  .story-section {
    width: 100% !important;
    padding-left: 64px !important;
    padding-right: 64px !important;
  }

  .story-container {
    max-width: 1560px !important;
  }

  .story-quote-text {
    font-size: 2.8rem !important;
    max-width: 1200px !important;
  }

  .counter-number {
    font-size: 3.5rem !important;
  }
}

@media (min-width: 1921px) {
  .story-section {
    width: 100% !important;
    padding-left: 80px !important;
    padding-right: 80px !important;
    padding-top: 10rem !important;
    padding-bottom: 10rem !important;
  }

  .story-container {
    max-width: 1850px !important;
  }

  .story-eyebrow {
    font-size: 0.95rem;
  }

  .story-quote-text {
    font-size: 3.5rem !important;
    max-width: 1400px !important;
  }

  .counter-number {
    font-size: 4.5rem !important;
  }

  .counter-label {
    font-size: 0.9rem;
  }
}
</style>
