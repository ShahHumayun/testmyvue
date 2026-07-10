<template>
  <section
    :class="[
      'py-32 px-6 border-b relative z-20',
      isDarkMode ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
    ]"
  >
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <div class="flex justify-center">
        <div
          :class="[
            'w-64 h-[500px] border-[6px] rounded-[44px] p-2 shadow-[0_0_50px_rgba(0,255,163,0.15)] relative overflow-hidden ring-1 will-change-transform transform-gpu',
            isDarkMode ? 'border-neutral-900 bg-black ring-neutral-800' : 'border-black bg-white ring-black/20'
          ]"
        >
          <div :class="['absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full z-30', isDarkMode ? 'bg-neutral-900' : 'bg-black']"></div>

          <div :class="['w-full h-full rounded-[34px] overflow-hidden relative isolate', isDarkMode ? 'bg-neutral-950' : 'bg-neutral-50']">
            <div
              v-for="(slide, sIdx) in investmentSlides"
              :key="slide.id"
              class="absolute inset-0 flex flex-col justify-between p-6 text-center w-full h-full transition-opacity duration-700 ease-in-out"
              :class="currentSlide === sIdx ? 'opacity-100' : 'opacity-0'"
            >
              <div class="pt-8 space-y-2 z-10 relative">
                <div class="text-[#00ffa3] font-mono text-xs tracking-widest uppercase">Metric Panel</div>
                <h4 :class="['text-xl font-bold tracking-tight drop-shadow-md', isDarkMode ? 'text-white' : 'text-black']">{{ slide.title }}</h4>
              </div>

              <div
                :class="[
                  'w-full h-44 rounded-xl flex items-center justify-center relative overflow-hidden group shadow-inner border',
                  isDarkMode ? 'bg-neutral-900 border-neutral-800/60' : 'bg-neutral-100 border-neutral-200'
                ]"
              >
                <img
                  :src="slide.image"
                  :alt="slide.title"
                  crossorigin="anonymous"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover transition-transform duration-700 brightness-90 group-hover:scale-105 block"
                  @error="handleImageError($event, sIdx)"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent pointer-events-none"></div>
              </div>

              <p :class="['text-xs leading-relaxed mb-4 z-10 relative', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">{{ slide.desc }}</p>
            </div>
          </div>

          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
            <button
              v-for="(_, sIdx) in investmentSlides"
              :key="sIdx"
              @click="goToSlide(sIdx)"
              class="h-1.5 rounded-full transition-all duration-300 ease-out focus:outline-none"
              :class="currentSlide === sIdx ? 'bg-[#00ffa3] w-3' : (isDarkMode ? 'bg-neutral-800 w-1.5' : 'bg-neutral-300 w-1.5')"
              :aria-label="`Show ${investmentSlides[sIdx].title}`"
            ></button>
          </div>
        </div>
      </div>

      <div class="space-y-8">
        <h2 :class="['text-3xl md:text-5xl font-bold tracking-tight', isDarkMode ? 'text-white' : 'text-black']">
          Why Your Business <br><span class="text-[#00ffa3]">Needs A Mobile App</span>
        </h2>
        <ul ref="whyList" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li v-for="(benefit, idx) in appBenefits" :key="idx" class="flex items-start gap-3 p-2">
            <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/20 flex items-center justify-center mt-1">
              <svg class="w-3 h-3 text-[#00ffa3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span :class="['font-medium text-sm md:text-base', isDarkMode ? 'text-neutral-300' : 'text-neutral-700']">{{ benefit }}</span>
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = inject('isDarkMode', ref(true))

const whyList = ref(null)
const currentSlide = ref(0)
let slideInterval = null

// Real Unsplash photos matched to each metric, free under the Unsplash License:
// Customer Retention: Vitaly Gariev (@silverkblack)
// Brand Equity: Vince Picipo (@buffulutu)
// Instantaneous Conversions: SumUp (@sumup)
const investmentSlides = ref([
  {
    id: 1,
    title: 'Customer Retention',
    desc: 'Keep users returning via optimized fluid UI layouts.',
    image: 'https://images.unsplash.com/photo-1758611972271-fce956444233?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Brand Equity',
    desc: 'Premium real estate directly inside your client\'s pocket.',
    image: 'https://images.unsplash.com/photo-1758770478125-4850521fd941?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Instantaneous Conversions',
    desc: 'Secure payment tunnels that optimize final transactional friction.',
    image: 'https://images.unsplash.com/photo-1742836531239-1fe146bf7e3f?q=80&w=600&auto=format&fit=crop'
  }
])

const appBenefits = [
  'Direct Customer Engagement', 'Increased Brand Loyalty', 'Better User Experience',
  'Higher Revenue Opportunities', 'Push Notification Marketing', 'Competitive Market Advantage', 'Real-Time Customer Access'
]

const handleImageError = (event, index) => {
  console.warn(`Image failed to load on slide index ${index}. Hiding broken image element.`)
  event.target.style.display = 'none'
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % investmentSlides.value.length
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
/* Fixes Webkit/Safari rounded corner overflow bugs */
.isolate {
  isolation: isolate;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>