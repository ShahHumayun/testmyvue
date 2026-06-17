<template>
  <section class="relative py-36 px-6 overflow-hidden text-center z-20">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#00ffa3]/10 rounded-full blur-[140px] pointer-events-none"></div>
    
    <div class="max-w-3xl mx-auto relative z-10 space-y-6">
      <h2 ref="ctaHeading" class="text-3xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
        Ready To Build Your Next <br><span class="text-[#00ffa3]">Web Application?</span>
      </h2>
      <p ref="ctaText" class="text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
        Let's turn your idea into a secure, scalable and high-performing digital solution.
      </p>
      <div ref="ctaBtnContainer" class="pt-6">
        <button @click="emitNavigate" class="cta-pulse-btn px-10 py-5 bg-[#00ffa3] text-[#000000] font-black rounded-xl tracking-wide shadow-[0_0_30px_rgba(0,255,163,0.25)] hover:scale-[1.03] transition-transform duration-300">
          Schedule A Free Consultation
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
@keyframes pulseGlow {
  0%, 100% { box-shadow: 0 0 25px rgba(0, 255, 163, 0.2); }
  50% { box-shadow: 0 0 45px rgba(0, 255, 163, 0.5); }
}
.cta-pulse-btn {
  animation: pulseGlow 4s infinite ease-in-out;
}
.cta-pulse-btn:hover {
  box-shadow: 0 0 55px rgba(0, 255, 163, 0.75);
}
</style>