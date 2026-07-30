<template>
  <section
    :class="['cta-section relative py-36 px-6 overflow-hidden text-center z-20 transition-colors duration-400 w-full', isDarkMode ? 'theme-dark' : 'theme-light']">

    <div class="max-w-3xl mx-auto relative z-10 space-y-6 cta-container w-full">
      <h2 ref="ctaHeading" class="text-3xl md:text-6xl font-extrabold tracking-tight leading-tight cta-title">
        Ready To Build Your Next <br><span class="accent-text">Web Application?</span>
      </h2>
      <p ref="ctaText" class="text-base md:text-lg max-w-xl mx-auto leading-relaxed cta-description">
        Let's turn your idea into a secure, scalable and high-performing digital solution.
      </p>
      <div ref="ctaBtnContainer" class="pt-6">
        <button @click="emitNavigate"
          class="cta-pulse-btn px-10 py-5 bg-[var(--accent-color)] text-[#000000] font-black rounded-xl tracking-wide transition-transform duration-300">
          Schedule A Free Consultation
        </button>
      </div>

      <div class="cta-back-wrap">
        <button class="cta-back-btn" @click="goBack" aria-label="Go back to previous page">
          <span class="cta-back-arrow" aria-hidden="true">←</span>
          Go Back
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = inject('isDarkMode', ref(true))

const router = useRouter()

function goBack() {
  router.back()
}

const emit = defineEmits(['navigate'])
const ctaHeading = ref(null)
const ctaText = ref(null)
const ctaBtnContainer = ref(null)

const emitNavigate = () => {
  emit('navigate')
}

onMounted(() => {
  const finalCtaTl = gsap.timeline({
    scrollTrigger: {
      trigger: ctaHeading.value,
      start: 'top 85%'
    }
  })
  finalCtaTl.fromTo(ctaHeading.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: 'power3.out' })
    .fromTo(ctaText.value, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
    .fromTo(ctaBtnContainer.value, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.8, ease: 'elastic.out(1, 0.75)' }, '-=0.4')
})
</script>

<style scoped>
/* Theme variable mapping */
.theme-dark {
  --accent-color: #00ffa3;
}

.theme-light {
  --accent-color: #f97316;
}

.theme-dark {
  background-color: #000000 !important;
  --title-color: #ffffff;
  --desc-color: #a3a3a3;
}

.theme-light {
  background-color: #ffffff !important;
  --title-color: #0f172a;
  --desc-color: #475569;
}

.accent-text {
  color: var(--accent-color);
}

.cta-section {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

.cta-container {
  width: 100% !important;
  max-width: 100% !important;
  box-sizing: border-box !important;
}

.cta-back-wrap {
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.cta-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff !important;
  color: #000000 !important;
  border: 1px solid #000000 !important;
  font-family: inherit;
  font-weight: 800;
  font-size: 13.5px;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-back-btn:hover {
  background-color: var(--accent-color) !important;
  transform: scale(1.03);
  box-shadow: 0 0 55px color-mix(in srgb, var(--accent-color), transparent 25%);
}

/* Light theme: background stays locked to the accent orange; text is white normally and flips to black on hover */
.theme-light .cta-back-btn {
  background-color: var(--accent-color) !important;
  color: #ffffff !important;
  border: 1px solid transparent !important;
}

.theme-light .cta-back-btn:hover {
  background-color: var(--accent-color) !important;
  color: #000000 !important;
  transform: scale(1.03);
  box-shadow: 0 0 55px color-mix(in srgb, var(--accent-color), transparent 25%);
}

.cta-back-arrow {
  transition: transform 0.2s ease;
}

.cta-back-btn:hover .cta-back-arrow {
  transform: translateX(-3px);
}

.cta-title {
  color: var(--title-color) !important;
  transition: color 0.4s ease;
}

.cta-description {
  color: var(--desc-color) !important;
  transition: color 0.4s ease;
}

/* Pulsing glow removed per request — button keeps its hover scale but no longer glows */
.cta-pulse-btn:hover {
  transform: scale(1.03) !important;
}

/* =========================================================================
   BREAKPOINT TIERS WITH FULL 100% WIDTH AND RESPONSIVE SIZING
   ========================================================================= */

@media (max-width: 360px) {
  .cta-section {
    width: 100% !important;
    padding-left: 14px !important;
    padding-right: 14px !important;
    padding-top: 4rem !important;
    padding-bottom: 4rem !important;
  }

  .cta-title {
    font-size: 1.5rem !important;
  }

  .cta-description {
    font-size: 0.85rem !important;
  }

  .cta-pulse-btn {
    padding: 0.75rem 1.25rem !important;
    font-size: 0.85rem !important;
  }
}

@media (min-width: 361px) and (max-width: 480px) {
  .cta-section {
    width: 100% !important;
    padding-left: 16px !important;
    padding-right: 16px !important;
    padding-top: 5rem !important;
    padding-bottom: 5rem !important;
  }

  .cta-title {
    font-size: 1.75rem !important;
  }

  .cta-pulse-btn {
    padding: 0.85rem 1.5rem !important;
    font-size: 0.9rem !important;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .cta-section {
    width: 100% !important;
    padding-left: 24px !important;
    padding-right: 24px !important;
  }

  .cta-container {
    max-width: 100% !important;
  }

  .cta-title {
    font-size: 2.25rem !important;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .cta-section {
    width: 100% !important;
    padding-left: 32px !important;
    padding-right: 32px !important;
  }

  .cta-container {
    max-width: 100% !important;
  }

  .cta-title {
    font-size: 2.75rem !important;
  }
}

@media (min-width: 1025px) and (max-width: 1200px) {
  .cta-section {
    width: 100% !important;
    padding-left: 40px !important;
    padding-right: 40px !important;
  }

  .cta-container {
    max-width: 1000px !important;
  }

  .cta-title {
    font-size: 3.25rem !important;
  }
}

@media (min-width: 1201px) and (max-width: 1535px) {
  .cta-section {
    width: 100% !important;
    padding-left: 48px !important;
    padding-right: 48px !important;
  }

  .cta-container {
    max-width: 1200px !important;
  }

  .cta-title {
    font-size: 3.75rem !important;
  }
}

@media (min-width: 1536px) and (max-width: 1920px) {
  .cta-section {
    width: 100% !important;
    padding-left: 64px !important;
    padding-right: 64px !important;
  }

  .cta-container {
    max-width: 1400px !important;
  }

  .cta-title {
    font-size: 4.25rem !important;
  }

  .cta-description {
    font-size: 1.2rem !important;
    max-width: 800px !important;
  }
}

@media (min-width: 1921px) {
  .cta-section {
    width: 100% !important;
    padding-left: 80px !important;
    padding-right: 80px !important;
    padding-top: 12rem !important;
    padding-bottom: 12rem !important;
  }

  .cta-container {
    max-width: 1650px !important;
  }

  .cta-title {
    font-size: 5rem !important;
  }

  .cta-description {
    font-size: 1.35rem !important;
    max-width: 950px !important;
  }

  .cta-pulse-btn {
    padding: 1.25rem 2.5rem !important;
    font-size: 1.2rem !important;
  }
}
</style>
