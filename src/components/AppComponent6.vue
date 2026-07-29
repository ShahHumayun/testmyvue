<template>
  <section :class="[
    'py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8 lg:py-32 xl:py-36 xl:px-12 2xl:py-40 2xl:px-16 overflow-hidden relative z-20 border-b',
    isDarkMode ? 'bg-[#1c1c1c] border-neutral-900' : 'bg-[#f2f2f2] border-neutral-200'
  ]">
    <div class="max-w-7xl mx-auto">
      <div class="text-center max-w-2xl mx-auto mb-14 sm:mb-16 md:mb-20 xl:mb-24">
        <h2
          :class="['section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight mb-4', isDarkMode ? 'text-white' : 'text-black']">
          Designed To Impress. <br>
          <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Built To Perform.</span>
        </h2>
      </div>

      <div ref="showcaseGrid"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 xl:gap-9 2xl:gap-10">
        <div v-for="(app, idx) in showcaseApps" :key="idx" :class="[
          'showcase-card group rounded-3xl p-4 sm:p-5 md:p-6 xl:p-7 flex flex-col justify-between items-center text-center cursor-pointer transition-all duration-500 border',
          isDarkMode
            ? 'bg-neutral-950 border-neutral-900 hover:border-neutral-800'
            : 'bg-white border-neutral-200 hover:border-neutral-300 shadow-md hover:shadow-xl shadow-neutral-200/60'
        ]">
          <div class="relative pt-2 pb-3">
            <span
              :class="['showcase-notch-1 absolute -left-0.5 rounded-l-full', isDarkMode ? 'bg-neutral-600' : 'bg-neutral-300']"></span>
            <span
              :class="['showcase-notch-2 absolute -left-0.5 rounded-l-full', isDarkMode ? 'bg-neutral-600' : 'bg-neutral-300']"></span>
            <span
              :class="['showcase-notch-3 absolute -right-0.5 rounded-r-full', isDarkMode ? 'bg-neutral-600' : 'bg-neutral-300']"></span>

            <div :class="[
              'showcase-phone-frame border-[3px] ring-1 rounded-[32px] p-1.5 relative overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1',
              isDarkMode
                ? 'bg-black border-neutral-800 ring-neutral-700/40 shadow-[0_25px_50px_-12px_rgba(0,255,163,0.15)]'
                : 'bg-white border-black ring-black/10 shadow-[0_25px_50px_-12px_rgba(249,115,22,0.15)]'
            ]">
              <div
                :class="['w-full h-full rounded-[26px] overflow-hidden relative', isDarkMode ? 'bg-black' : 'bg-white']">
                <img :src="app.image" :alt="app.title" loading="lazy" decoding="async"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/20"></div>
                <div
                  class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none">
                </div>

                <div
                  class="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-20 flex items-center justify-end pr-1 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                  <div class="w-1 h-1 rounded-full bg-neutral-700"></div>
                </div>

                <div class="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-9 h-1 bg-white/80 rounded-full"></div>
              </div>
            </div>
          </div>

          <div class="mt-2 space-y-2">
            <h3
              :class="['showcase-title text-lg sm:text-xl xl:text-2xl font-bold tracking-tight', isDarkMode ? 'text-white' : 'text-black']">
              {{ app.title }}</h3>
            <p
              :class="['showcase-category text-xs xl:text-sm uppercase font-semibold tracking-wider', isDarkMode ? 'text-neutral-500' : 'text-neutral-600']">
              {{ app.category }}</p>
          </div>
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
const showcaseGrid = ref(null)

const showcaseApps = [
  { title: 'Ecommerce App', category: 'Retail Platform', image: 'https://images.unsplash.com/photo-1758273705998-05655eea4635?q=80&w=600&auto=format&fit=crop' },
  { title: 'Healthcare App', category: 'Telehealth System', image: 'https://images.unsplash.com/photo-1758691463384-771db2f192b3?q=80&w=600&auto=format&fit=crop' },
  { title: 'Fintech App', category: 'Digital Banking Node', image: 'https://images.unsplash.com/photo-1758598303866-743838235b41?q=80&w=600&auto=format&fit=crop' },
  { title: 'Business Management App', category: 'Internal Tools', image: 'https://images.unsplash.com/photo-1767424412548-1a1ac7f4b9bc?q=80&w=600&auto=format&fit=crop' },
  { title: 'Food Delivery App', category: 'Logistics Matrix', image: 'https://images.unsplash.com/photo-1572195577046-2f25894c06fc?q=80&w=600&auto=format&fit=crop' },
  { title: 'Booking Application', category: 'Marketplace Automation', image: 'https://images.unsplash.com/photo-1753029995957-f973b37fd0e3?q=80&w=600&auto=format&fit=crop' }
]

onMounted(() => {
  gsap.fromTo(showcaseGrid.value.children, { opacity: 0, y: 50 }, {
    opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
    scrollTrigger: { trigger: showcaseGrid.value, start: 'top 80%' }
  })
})
</script>

<style scoped>
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
   Phone mockup frame — this was a fixed w-36 h-72 (144 x 288px) with zero
   responsive variants, the same issue found in every other mockup in this
   set. Kept at its original fixed size at every breakpoint below; only
   the 2560px+ tier changes this.

   The three decorative side notches (volume/power buttons) are positioned
   in pixels relative to the phone frame's height, so their top offset and
   height are locked to this exact size too — if the phone frame changes,
   these must be recalculated proportionally, which is why they only
   change together with the frame at 2560px+.
   ========================================================================== */
.showcase-phone-frame {
  width: 144px;
  height: 288px;
}

.showcase-notch-1 {
  top: 48px;
  height: 20px;
}

.showcase-notch-2 {
  top: 80px;
  height: 32px;
}

.showcase-notch-3 {
  top: 64px;
  height: 40px;
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

  .showcase-title {
    font-size: 1.6rem;
  }

  .showcase-category {
    font-size: 0.85rem;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   This is the ONLY breakpoint where the phone mockup — and its three
   proportionally-linked side notches — grow beyond their original fixed
   design size. Every other breakpoint above and below this keeps them
   completely unchanged.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2050px !important;
  }

  .section-heading {
    font-size: 5.25rem;
  }

  .showcase-phone-frame {
    width: 172px;
    height: 344px;
  }

  .showcase-notch-1 {
    top: 57px;
    height: 24px;
  }

  .showcase-notch-2 {
    top: 95px;
    height: 38px;
  }

  .showcase-notch-3 {
    top: 76px;
    height: 48px;
  }

  .showcase-title {
    font-size: 1.75rem;
  }

  .showcase-category {
    font-size: 0.95rem;
  }
}

/* ==========================================================================
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
  section.border-b {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }

  .showcase-title {
    font-size: 1rem;
  }

  .showcase-category {
    font-size: 0.68rem;
  }
}
</style>