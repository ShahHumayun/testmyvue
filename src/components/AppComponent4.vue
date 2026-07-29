<template>
  <section :class="[
    'py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8 lg:py-32 xl:py-36 xl:px-12 2xl:py-40 2xl:px-16 border-b relative z-20',
    isDarkMode ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
  ]">
    <div
      class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24 items-center">

      <div class="flex justify-center">
        <div :class="[
          'phone-frame border-[6px] rounded-[44px] p-2 relative overflow-hidden ring-1 will-change-transform transform-gpu',
          isDarkMode ? 'border-neutral-900 bg-black ring-neutral-800 shadow-[0_0_50px_rgba(0,255,163,0.15)]' : 'border-black bg-white ring-black/20 shadow-[0_0_50px_rgba(249,115,22,0.15)]'
        ]">
          <div
            :class="['absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full z-30', isDarkMode ? 'bg-neutral-900' : 'bg-black']">
          </div>

          <div
            :class="['w-full h-full rounded-[34px] overflow-hidden relative isolate', isDarkMode ? 'bg-neutral-950' : 'bg-neutral-50']">
            <div v-for="(slide, sIdx) in investmentSlides" :key="slide.id"
              class="absolute inset-0 flex flex-col justify-between p-6 text-center w-full h-full transition-opacity duration-700 ease-in-out"
              :class="currentSlide === sIdx ? 'opacity-100' : 'opacity-0'">
              <div class="pt-8 space-y-2 z-10 relative">
                <div
                  :class="['font-mono text-xs tracking-widest uppercase', isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]']">
                  Metric Panel</div>
                <h4
                  :class="['text-xl font-bold tracking-tight drop-shadow-md', isDarkMode ? 'text-white' : 'text-black']">
                  {{ slide.title }}</h4>
              </div>

              <div :class="[
                'phone-image-area w-full rounded-xl flex items-center justify-center relative overflow-hidden group shadow-inner border',
                isDarkMode ? 'bg-neutral-900 border-neutral-800/60' : 'bg-neutral-100 border-neutral-200'
              ]">
                <img :src="slide.image" :alt="slide.title" crossorigin="anonymous" loading="lazy" decoding="async"
                  class="w-full h-full object-cover transition-transform duration-700 brightness-90 group-hover:scale-105 block"
                  @error="handleImageError($event, sIdx)" />
                <div class="absolute inset-0 bg-gradient-to-t from-neutral-950/50 to-transparent pointer-events-none">
                </div>
              </div>

              <p
                :class="['text-xs leading-relaxed mb-4 z-10 relative', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
                {{ slide.desc }}</p>
            </div>
          </div>

          <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
            <button v-for="(_, sIdx) in investmentSlides" :key="sIdx" @click="goToSlide(sIdx)"
              class="h-1.5 rounded-full transition-all duration-300 ease-out focus:outline-none" :class="currentSlide === sIdx
                ? (isDarkMode ? 'bg-[#00ffa3] w-3' : 'bg-[#f97316] w-3')
                : (isDarkMode ? 'bg-neutral-800 w-1.5' : 'bg-neutral-300 w-1.5')"
              :aria-label="`Show ${investmentSlides[sIdx].title}`"></button>
          </div>
        </div>
      </div>

      <div class="space-y-6 sm:space-y-8">
        <h2
          :class="['section-heading text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight', isDarkMode ? 'text-white' : 'text-black']">
          Why Your Business <br>
          <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Needs A Mobile App</span>
        </h2>
        <ul ref="whyList" class="benefits-list grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 xl:gap-5">
          <li v-for="(benefit, idx) in appBenefits" :key="idx" class="flex items-start gap-3 p-2">
            <span :class="[
              'flex-shrink-0 w-5 h-5 xl:w-6 xl:h-6 rounded-full border flex items-center justify-center mt-1',
              isDarkMode ? 'bg-[#00ffa3]/10 border-[#00ffa3]/20' : 'bg-[#f97316]/10 border-[#f97316]/20'
            ]">
              <svg :class="['w-3 h-3 xl:w-3.5 xl:h-3.5', isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]']" fill="none"
                viewBox="0 0 24 24" stroke="currentColor" stroke-width="3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span
              :class="['benefit-text font-medium text-sm md:text-base xl:text-lg 2xl:text-xl', isDarkMode ? 'text-neutral-300' : 'text-neutral-700']">{{
                benefit }}</span>
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

const investmentSlides = ref([
  { id: 1, title: 'Customer Retention', desc: 'Keep users returning via optimized fluid UI layouts.', image: 'https://images.unsplash.com/photo-1758611972271-fce956444233?q=80&w=600&auto=format&fit=crop' },
  { id: 2, title: 'Brand Equity', desc: 'Premium real estate directly inside your client\'s pocket.', image: 'https://images.unsplash.com/photo-1758770478125-4850521fd941?q=80&w=600&auto=format&fit=crop' },
  { id: 3, title: 'Instantaneous Conversions', desc: 'Secure payment tunnels that optimize final transactional friction.', image: 'https://images.unsplash.com/photo-1742836531239-1fe146bf7e3f?q=80&w=600&auto=format&fit=crop' }
])

const appBenefits = ['Direct Customer Engagement', 'Increased Brand Loyalty', 'Better User Experience', 'Higher Revenue Opportunities', 'Push Notification Marketing', 'Competitive Market Advantage', 'Real-Time Customer Access']

const handleImageError = (event, index) => { event.target.style.display = 'none' }
function nextSlide() { currentSlide.value = (currentSlide.value + 1) % investmentSlides.value.length }
function goToSlide(idx) { currentSlide.value = idx; restartAutoplay() }
function restartAutoplay() { clearInterval(slideInterval); slideInterval = setInterval(nextSlide, 4000) }

onMounted(() => {
  restartAutoplay()
  if (whyList.value) {
    gsap.fromTo(whyList.value.children, { opacity: 0, x: 25 }, {
      opacity: 1, x: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: whyList.value, start: 'top 85%' }
    })
  }
})

onUnmounted(() => { clearInterval(slideInterval) })
</script>

<style scoped>
.isolate {
  isolation: isolate;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

/* ==========================================================================
   Outer content container: scales fluidly with viewport width instead of
   jumping between fixed breakpoint values. !important guarantees this wins
   even if the project's global Tailwind stylesheet loads after this
   component's scoped styles.
   ========================================================================== */
.max-w-7xl {
  max-width: clamp(320px, 94vw, 1500px) !important;
}

/* ==========================================================================
   Phone mockup frame — this was a fixed w-64 h-[500px] (256 x 500px) with
   zero responsive variants, the same issue found in AppComponent1's phone
   mockup, WebComponent1's monitor, and EcommerceComponent1's floating
   panel. Kept at its original fixed size at every breakpoint below; only
   the 2560px+ tier changes this, matching the same principle applied
   there: everything else stays completely unchanged.
   ========================================================================== */
.phone-frame {
  width: 256px;
  height: 500px;
}

/* Phone screen's image area — original fixed h-44 (176px) design, kept
   unchanged at every breakpoint except 2560px+. */
.phone-image-area {
  height: 176px;
}

/* ==========================================================================
   Mobile Landscape / Small Tablets: 576px — 768px
   No changes here — phone mockup stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Laptops / Large Tablets: 769px — 1024px
   No changes here — phone mockup stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Desktops: 1025px — 1200px
   No changes here — phone mockup stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Extra Large Screens / Desktops / TVs: 1201px and up
   No changes here — phone mockup stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Ultra-wide / Large TVs: 1536px and up
   No changes here — phone mockup stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   ========================================================================== */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 1750px !important;
  }

  .section-heading {
    font-size: 4.75rem;
  }

  .benefit-text {
    font-size: 1.3rem;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   This is the ONLY breakpoint where the phone mockup grows beyond its
   original fixed design size — every other breakpoint above and below this
   keeps the mockup completely unchanged, exactly as it was originally
   designed.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2050px !important;
  }

  .phone-frame {
    width: 340px;
    height: 665px;
  }

  .phone-image-area {
    height: 234px;
  }

  .section-heading {
    font-size: 5.25rem;
  }

  .benefit-text {
    font-size: 1.4rem;
  }
}

/* ==========================================================================
   Very small phones: no changes to the mockup here either — it stays at
   its original fixed design size.
   ========================================================================== */
</style>