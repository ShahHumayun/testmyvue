<template>
  <section :class="['cta-section relative py-36 px-6 overflow-hidden text-center z-20 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] glow-blur rounded-full pointer-events-none"></div>
    
    <div class="max-w-3xl mx-auto relative z-10 space-y-6">
      <h2 ref="ctaHeading" class="text-3xl md:text-6xl font-extrabold tracking-tight leading-tight cta-title">
        Ready To Build Your Next <br><span class="text-[#00ffa3]">Web Application?</span>
      </h2>
      <p ref="ctaText" class="text-base md:text-lg max-w-xl mx-auto leading-relaxed cta-description">
        Let's turn your idea into a secure, scalable and high-performing digital solution.
      </p>
      <div ref="ctaBtnContainer" class="pt-6">
        <button @click="emitNavigate" class="cta-pulse-btn px-10 py-5 bg-[#00ffa3] text-[#000000] font-black rounded-xl tracking-wide transition-transform duration-300">
          Schedule A Free Consultation
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Inject global theme state context seamlessly
const isDarkMode = inject('isDarkMode', ref(true))

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
/* ── Encapsulated Visual Protection Boundaries ── */
.theme-dark {
  background-color: #000000 !important;
  --title-color: #ffffff;
  --desc-color: #a3a3a3; /* text-neutral-400 equivalent */
  --glow-bg: rgba(0, 255, 163, 0.1);
  --glow-filter: blur(140px);
}

.theme-light {
  background-color: #ffffff !important;
  --title-color: #0f172a; /* text-slate-900 equivalent */
  --desc-color: #475569; /* text-slate-600 equivalent */
  --glow-bg: rgba(0, 255, 163, 0.15);
  --glow-filter: blur(100px);
}

/* ── Explicit Selector Rule Overrides ── */
.cta-section {
  width: 100% !important;
}

.glow-blur {
  background-color: var(--glow-bg) !important;
  filter: var(--glow-filter) !important;
  transition: background-color 0.4s ease, filter 0.4s ease;
}

.cta-title {
  color: var(--title-color) !important;
  transition: color 0.4s ease;
}

.cta-description {
  color: var(--desc-color) !important;
  transition: color 0.4s ease;
}

/* ── Precise Pulsing Button Keyframes ── */
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 25px rgba(0, 255, 163, 0.25); }
  50% { box-shadow: 0 0 45px rgba(0, 255, 163, 0.55); }
}

.cta-pulse-btn {
  animation: pulseGlow 4s infinite ease-in-out;
}

.cta-pulse-btn:hover {
  transform: scale(1.03) !important;
  box-shadow: 0 0 55px rgba(0, 255, 163, 0.75) !important;
}
</style>