<template>
  <section class="relative py-40 px-6 overflow-hidden text-center z-20 border-b border-neutral-900">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#00ffa3]/10 rounded-full blur-[160px] pointer-events-none"></div>
    <div class="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,255,163,0.02)_50%,transparent)] animate-pulse"></div>
    
    <div class="max-w-3xl mx-auto relative z-10 space-y-6">
      <h2 ref="ctaHeading" class="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
        Ready To Launch <br>Your <span class="text-[#00ffa3]">Mobile App?</span>
      </h2>
      <p ref="ctaText" class="text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
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
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

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
@keyframes neonPulse {
  0%, 100% { box-shadow: 0 0 25px rgba(0, 255, 163, 0.25); }
  50% { box-shadow: 0 0 45px rgba(0, 255, 163, 0.55); }
}
.neon-glow-btn { animation: neonPulse 3.5s infinite ease-in-out; }
.neon-glow-btn:hover { box-shadow: 0 0 60px rgba(0, 255, 163, 0.8); }
</style>