<template>
  <div :class="[
    'page-wrapper',
    isDarkMode ? 'bg-black text-white theme-dark' : 'bg-white text-[#0f172a] theme-light'
  ]">
    <section :class="[
      'relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 overflow-hidden border-b z-20 pt-20 sm:pt-24 md:pt-24 lg:pt-24 xl:pt-28 2xl:pt-32',
      isDarkMode ? 'border-neutral-900' : 'border-neutral-200'
    ]">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent-gradient-fade),transparent_70%)]">
      </div>

      <div
        class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16 2xl:gap-20 items-center relative z-20 w-full">

        <div class="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
          <span ref="heroLabel"
            class="inline-block text-[10px] sm:text-xs xl:text-sm 2xl:text-base font-bold tracking-[0.3em] text-[var(--accent-color)] uppercase bg-[var(--accent-bg-light)] px-3 py-1 sm:px-4 sm:py-1.5 xl:px-5 xl:py-2 rounded-full border border-[var(--accent-border)] shadow-[0_0_15px_var(--accent-shadow)]">
            Web Application Development
          </span>
          <h1 ref="heroTitle" :class="[
            'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b',
            isDarkMode ? 'from-white to-neutral-400' : 'from-black to-neutral-600'
          ]">
            Building Powerful Web Applications <br>
            <span
              class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-secondary)]">That
              Grow Your Business</span>
          </h1>
          <p ref="heroSubtitle"
            :class="['text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl leading-relaxed max-w-2xl', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
            We design and develop high-performance web applications that help businesses automate operations, improve
            customer experiences, and scale faster. From startups to enterprise solutions, we build web platforms
            that deliver measurable results.
          </p>
          <div ref="heroButtons" class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
            <button @click="router.push('/consultation')"
              class="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 xl:px-9 2xl:px-10 2xl:py-5 text-sm sm:text-base 2xl:text-lg bg-[var(--accent-color)] text-black font-bold rounded-lg shadow-[0_0_30px_var(--accent-shadow-intense)] hover:shadow-[0_0_40px_var(--accent-shadow-hover)] transition-all duration-300 hover:scale-[1.02]">
              Start Your Project
            </button>
            <button @click="router.push('/portfolio')" :class="[
              'w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 xl:px-9 2xl:px-10 2xl:py-5 text-sm sm:text-base 2xl:text-lg font-medium rounded-lg transition-all duration-300 border',
              isDarkMode
                ? 'bg-neutral-900 border-neutral-800 text-white hover:bg-neutral-800 hover:border-neutral-700'
                : 'bg-neutral-100 border-neutral-200 text-black hover:bg-neutral-200 hover:border-neutral-300'
            ]">
              View Our Work
            </button>
          </div>
        </div>

        <div class="lg:col-span-6 flex justify-center perspective-1000">
          <div ref="monitor" :class="[
            'monitor-frame w-full aspect-[16/10] border-[8px] rounded-lg shadow-[0_0_80px_var(--accent-shadow)] relative',
            isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-black'
          ]">
            <div
              :class="['h-8 flex items-center px-4 border-b', isDarkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-100 border-neutral-300']">
              <div class="flex gap-1.5 mr-4">
                <div class="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-[var(--accent-color)]/50"></div>
              </div>
              <span
                :class="['text-[10px] font-bold tracking-widest uppercase', isDarkMode ? 'text-neutral-500' : 'text-neutral-500']">The
                Explorers</span>
            </div>

            <div class="relative w-full h-[calc(100%-32px)] overflow-hidden">
              <transition-group name="travel-fade">
                <div v-for="(dot, dotIdx) in travelDots" :key="dot.id" v-show="currentDot === dotIdx"
                  class="absolute inset-0">
                  <img :src="dot.imageUrl" class="w-full h-full object-cover" :alt="dot.title" />
                  <div class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <p class="text-white font-bold text-sm">{{ dot.title }}</p>
                  </div>
                </div>
              </transition-group>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'

const router = useRouter()
const heroLabel = ref(null)
const heroTitle = ref(null)
const heroSubtitle = ref(null)
const heroButtons = ref(null)
const monitor = ref(null)

const isDarkMode = inject('isDarkMode', ref(true))
const currentDot = ref(0)
let interval = null

const travelDots = [
  { id: 1, title: 'Kyoto Imperial Wilderness', imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200' },
  { id: 2, title: 'Amalfi Coastal Horizons', imageUrl: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1200' },
  { id: 3, title: 'Santorini Sunset', imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200' },
  { id: 4, title: 'Banff Glacial Retreats', imageUrl: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1200' },
  { id: 5, title: 'Swiss Alpine Ridges', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200' }
]

onMounted(() => {
  interval = setInterval(() => { currentDot.value = (currentDot.value + 1) % travelDots.length }, 4000)

  const heroTl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } })
  heroTl.fromTo(heroLabel.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 0.2 })
    .fromTo(heroTitle.value, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, '-=0.9')
    .fromTo(heroSubtitle.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.9')
    .fromTo(heroButtons.value, { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, '-=0.9')
    .fromTo(monitor.value, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1 }, '-=0.8')
})

onUnmounted(() => clearInterval(interval))
</script>

<style scoped>
.page-wrapper {
  width: 100%;
  min-height: 100vh;
  position: relative;
}

/* Dynamic theme variables */
.theme-dark {
  --accent-color: #00ffa3;
  --accent-secondary: #34d399;
  --accent-bg-light: rgba(0, 255, 163, 0.1);
  --accent-border: rgba(0, 255, 163, 0.2);
  --accent-shadow: rgba(0, 255, 163, 0.1);
  --accent-shadow-intense: rgba(0, 255, 163, 0.3);
  --accent-shadow-hover: rgba(0, 255, 163, 0.5);
  --accent-gradient-fade: rgba(0, 255, 163, 0.05);
}

.theme-light {
  --accent-color: #f97316;
  --accent-secondary: #fb923c;
  --accent-bg-light: rgba(249, 115, 22, 0.1);
  --accent-border: rgba(249, 115, 22, 0.2);
  --accent-shadow: rgba(249, 115, 22, 0.1);
  --accent-shadow-intense: rgba(249, 115, 22, 0.3);
  --accent-shadow-hover: rgba(249, 115, 22, 0.5);
  --accent-gradient-fade: rgba(249, 115, 22, 0.05);
}

.travel-fade-enter-active,
.travel-fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}

.travel-fade-enter-from,
.travel-fade-leave-to {
  opacity: 0;
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
   Monitor mockup frame — kept at the component's original fixed 650px cap
   (w-full max-w-[650px], scaling naturally with its column via w-full and
   aspect-[16/10] at every breakpoint below). Only the 2560px+ tier changes
   this, matching the exact same principle applied to AppComponent1's phone
   mockup: everything else stays completely unchanged.
   ========================================================================== */
.monitor-frame {
  max-width: 650px;
}

/* ==========================================================================
   Mobile Landscape / Small Tablets: 576px — 768px
   No changes here — monitor mockup stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Laptops / Large Tablets: 769px — 1024px
   No changes here — monitor mockup stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Desktops: 1025px — 1200px
   No changes here — monitor mockup stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Extra Large Screens / Desktops / TVs: 1201px and up
   No changes here — monitor mockup stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Ultra-wide / Large TVs: 1536px and up
   No changes here — monitor mockup stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   ========================================================================== */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 1750px !important;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   This is the ONLY breakpoint where the monitor mockup grows beyond its
   original fixed design size — every other breakpoint above and below this
   keeps the mockup completely unchanged, exactly as it was originally
   designed.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2050px !important;
  }

  .monitor-frame {
    max-width: 900px;
  }
}

/* ==========================================================================
   Very small phones: no changes to the mockup here either — it stays at
   its original fixed design size.
   ========================================================================== */
</style>