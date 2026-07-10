<template>
  <section :class="['cta-section relative py-40 px-6 overflow-hidden text-center z-20 border-b transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] cta-ambient-glow rounded-full blur-[160px] pointer-events-none"></div>
    <div class="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,255,163,0.02)_50%,transparent)] animate-pulse"></div>
    
    <div class="max-w-3xl mx-auto relative z-10 space-y-6">
      <h2 ref="ctaHeading" class="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight cta-title">
        Ready To Launch <br>Your <span class="text-[#00ffa3]">Mobile App?</span>
      </h2>
      <p ref="ctaText" class="text-base md:text-lg max-w-xl mx-auto leading-relaxed cta-desc">
        Let's transform your vision into a powerful mobile experience that users love and businesses trust.
      </p>
      <div ref="ctaBtnContainer" class="pt-6">
        <button class="neon-glow-btn px-10 py-5 bg-[#00ffa3] text-[#000000] font-black rounded-xl tracking-wide transition-all duration-300 hover:scale-[1.03]">
          Book A Free Consultation
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

// Inject the shared site theme preference seamlessly
const isDarkMode = inject('isDarkMode', ref(true))

const ctaHeading = ref(null)
const ctaText = ref(null)
const ctaBtnContainer = ref(null)

onMounted(() => {
  const ctaTl = gsap.timeline({ scrollTrigger: { trigger: ctaHeading.value, start: 'top 85%' } })
  ctaTl.fromTo(ctaHeading.value, { opacity: 0, y: 25 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' })
       .fromTo(ctaText.value, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5')
       .fromTo(ctaBtnContainer.value, { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' }, '-=0.3')
})
</script>

<style scoped>
/* Encapsulated Visual Protection Boundaries */
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important; /* border-neutral-900 */
  --title-color: #ffffff;
  --desc-color: #a3a3a3; /* text-neutral-400 */
  --glow-bg: rgba(0, 255, 163, 0.1);
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important; /* border-slate-200 */
  --title-color: #0f172a;
  --desc-color: #475569; /* text-slate-600 */
  --glow-bg: rgba(0, 255, 163, 0.05);
}

/* Explicit Application Rules to lock design formatting */
.cta-title {
  color: var(--title-color) !important;
  transition: color 0.4s ease;
}

.cta-desc {
  color: var(--desc-color) !important;
  transition: color 0.4s ease;
}

.cta-ambient-glow {
  background: var(--glow-bg) !important;
  transition: background 0.4s ease;
}

/* Standalone Keyframe Glow Effects */
@keyframes neonPulse {
  0%, 100% { box-shadow: 0 0 25px rgba(0, 255, 163, 0.25); }
  50% { box-shadow: 0 0 45px rgba(0, 255, 163, 0.55); }
}

.neon-glow-btn { 
  border: none !important;
  cursor: pointer !important;
  animation: neonPulse 3.5s infinite ease-in-out; 
}

.neon-glow-btn:hover { 
  box-shadow: 0 0 60px rgba(0, 255, 163, 0.8) !important; 
}
</style>