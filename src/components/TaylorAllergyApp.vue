<template>
  <div class="bg-black overflow-y-auto lg:overflow-hidden">
    <section class="h-auto py-10 lg:py-0 lg:h-[620px] px-6 border-b border-neutral-900 relative z-20 bg-black flex items-center">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        <div class="flex justify-center">
          <div class="w-64 h-[500px] border-[6px] border-neutral-900 rounded-[44px] bg-black p-2 shadow-[0_0_50px_rgba(0,255,163,0.15)] relative overflow-hidden ring-1 ring-neutral-800 will-change-transform transform-gpu">
            <div class="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-neutral-900 rounded-full z-30"></div>

            <!-- ✅ pt-20 instead of pt-16 — more gap below Dynamic Island -->
            <div class="w-full h-full rounded-[34px] overflow-hidden relative bg-white pt-20 pb-20 isolate">
              <div
                v-for="(slide, sIdx) in carouselSlides"
                :key="slide.id"
                class="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
                :class="currentSlide === sIdx ? 'opacity-100' : 'opacity-0'"
              >
                <img
                  :src="slide.image"
                  :alt="`Screen ${slide.id}`"
                  class="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-40">
              <button
                v-for="(_, sIdx) in carouselSlides"
                :key="sIdx"
                @click="goToSlide(sIdx)"
                class="h-1.5 rounded-full transition-all duration-300 ease-out focus:outline-none"
                :class="currentSlide === sIdx ? 'bg-[#00ffa3] w-3' : 'bg-neutral-500 w-1.5'"
                :aria-label="`Show screen ${sIdx + 1}`"
              ></button>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Why Your Business <br><span class="text-[#00ffa3]">Needs A Mobile App</span>
          </h2>
          <ul ref="whyList" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li v-for="(benefit, idx) in appBenefits" :key="idx" class="flex items-start gap-3 p-2">
              <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/20 flex items-center justify-center mt-1">
                <svg class="w-3 h-3 text-[#00ffa3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span class="text-neutral-300 font-medium text-sm md:text-base">{{ benefit }}</span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const whyList = ref(null)
const currentSlide = ref(0)
let slideInterval = null

const carouselSlides = ref([
  { id: 1, image: '/src/assets/TaylorAllergy/screen1.jpg' },
  { id: 2, image: '/src/assets/TaylorAllergy/screen2.jpg' },
  { id: 3, image: '/src/assets/TaylorAllergy/screen3.jpg' },
  { id: 4, image: '/src/assets/TaylorAllergy/screen4.jpg' },
  { id: 5, image: '/src/assets/TaylorAllergy/screen5.jpg' },
  { id: 6, image: '/src/assets/TaylorAllergy/screen6.jpg' }
])

const appBenefits = [
  'Direct Customer Engagement', 'Increased Brand Loyalty', 'Better User Experience',
  'Higher Revenue Opportunities', 'Push Notification Marketing', 'Competitive Market Advantage', 'Real-Time Customer Access'
]

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % carouselSlides.value.length
}

function goToSlide(idx) {
  currentSlide.value = idx
  restartAutoplay()
}

function restartAutoplay() {
  clearInterval(slideInterval)
  slideInterval = setInterval(nextSlide, 4000)
}

onMounted(() => {
  restartAutoplay()
  if (whyList.value) {
    gsap.fromTo(whyList.value.children, { opacity: 0, x: 25 }, {
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: whyList.value, start: 'top 85%' }
    })
  }
})

onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>

<style scoped>
.isolate {
  isolation: isolate;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
}
</style>