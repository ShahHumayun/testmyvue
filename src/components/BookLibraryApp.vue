<template>
  <div class="bg-black overflow-y-auto lg:overflow-hidden">
    <section
      class="hero-shell h-auto py-10 lg:py-0 px-4 sm:px-6 md:py-12 lg:px-8 xl:px-12 2xl:px-16 border-b border-neutral-900 relative z-20 bg-black flex items-center">
      <div
        class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24 items-center w-full">

        <div class="flex justify-center">
          <div
            class="phone-frame border-[6px] border-neutral-900 rounded-[44px] bg-black p-2 shadow-[0_0_50px_rgba(0,255,163,0.15)] relative overflow-hidden ring-1 ring-neutral-800 will-change-transform transform-gpu">
            <div class="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 bg-neutral-900 rounded-full z-30"></div>

            <!-- ✅ pt-20 instead of pt-16 — more gap below Dynamic Island -->
            <div class="w-full h-full rounded-[34px] overflow-hidden relative bg-white pt-20 pb-20 isolate">
              <div v-for="(slide, sIdx) in carouselSlides" :key="slide.id"
                class="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
                :class="currentSlide === sIdx ? 'opacity-100' : 'opacity-0'">
                <img :src="slide.image" :alt="`Screen ${slide.id}`" class="w-full h-full object-contain" loading="lazy"
                  decoding="async" />
              </div>
            </div>

            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-40">
              <button v-for="(_, sIdx) in carouselSlides" :key="sIdx" @click="goToSlide(sIdx)"
                class="h-1.5 rounded-full transition-all duration-300 ease-out focus:outline-none"
                :class="currentSlide === sIdx ? 'bg-[#00ffa3] w-3' : 'bg-neutral-500 w-1.5'"
                :aria-label="`Show screen ${sIdx + 1}`"></button>
            </div>
          </div>
        </div>

        <div class="space-y-6 sm:space-y-8">
          <h2
            class="section-heading text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight text-white">
            Book Library <br><span class="text-[#00ffa3]">App Features</span>
          </h2>
          <ul ref="whyList" class="benefits-list grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 xl:gap-5">
            <li v-for="(benefit, idx) in appBenefits" :key="idx" class="flex items-start gap-3 p-2">
              <span
                class="flex-shrink-0 w-5 h-5 xl:w-6 xl:h-6 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/20 flex items-center justify-center mt-1">
                <svg class="w-3 h-3 xl:w-3.5 xl:h-3.5 text-[#00ffa3]" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" stroke-width="3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span class="benefit-text text-neutral-300 font-medium text-sm md:text-base xl:text-lg 2xl:text-xl">{{
                benefit }}</span>
            </li>
          </ul>
          <router-link to="/consultation"
            class="cta-button inline-block px-6 py-3 sm:px-7 sm:py-3.5 xl:px-8 xl:py-4 2xl:px-9 2xl:py-4.5 text-sm sm:text-base xl:text-lg bg-[#00ffa3] text-black font-semibold rounded-lg hover:bg-[#00e691] transition-colors duration-300">
            Get a Quote
          </router-link>
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

const getBookLibraryImage = (fileName) => {
  return new URL(`../assets/BookLibraryImages/${fileName}`, import.meta.url).href
}

const carouselSlides = ref([
  { id: 1, image: getBookLibraryImage('screen1.jpg') },
  { id: 2, image: getBookLibraryImage('screen2.jpg') },
  { id: 3, image: getBookLibraryImage('screen3.jpg') }
])

const appBenefits = [
  'Clean & Intuitive UI',
  'Political & History Book Sections',
  'Stories & Islamic Book Sections',
  'Books Available in English & Urdu',
  'Categorized Book Library',
  'Easy Browse by Category',
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
   Hero shell — on mobile/tablet this is h-auto (content decides height,
   matching the original design exactly). At lg and up, the original
   design locked this to a fixed 620px so the whole hero fits one screen
   without scrolling. That fixed height is preserved exactly here; it only
   changes at 2560px+ where the phone mockup itself grows and needs a
   taller shell to avoid clipping.
   ========================================================================== */
@media (min-width: 1025px) {
  .hero-shell {
    height: 620px;
  }
}

/* ==========================================================================
   Phone mockup frame — this was a fixed w-64 h-[500px] (256 x 500px) with
   zero responsive variants, the same issue found in every other mockup in
   this set (AppComponent1, AppComponent4, WebComponent1, etc.). Kept at
   its original fixed size at every breakpoint below; only the 2560px+
   tier changes this, matching the same principle applied everywhere else:
   everything else stays completely unchanged.
   ========================================================================== */
.phone-frame {
  width: 256px;
  height: 500px;
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
    max-width: 1820px !important;
  }

  .section-heading {
    font-size: 4.75rem;
  }

  .benefit-text {
    font-size: 1.3rem;
  }

  .cta-button {
    font-size: 1.15rem;
    padding: 1.1rem 2.25rem;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   This is the ONLY breakpoint where the phone mockup — and the hero shell
   height it sits inside — grow beyond their original fixed design size.
   Every other breakpoint above and below this keeps them completely
   unchanged.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2350px !important;
  }

  .hero-shell {
    height: 700px;
  }

  .phone-frame {
    width: 340px;
    height: 665px;
  }

  .section-heading {
    font-size: 5.25rem;
  }

  .benefit-text {
    font-size: 1.4rem;
  }

  .cta-button {
    font-size: 1.25rem;
    padding: 1.2rem 2.5rem;
  }
}

/* ==========================================================================
   Very small phones: no changes to the mockup here either — it stays at
   its original fixed design size.
   ========================================================================== */
</style>