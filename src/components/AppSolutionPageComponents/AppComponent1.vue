<template>
  <div ref="pageContainer" :class="[
    'font-sans relative overflow-hidden selection:bg-[#00ffa3] selection:text-[#000000]',
    isDarkMode ? 'bg-[#000000] text-[#FFFFFF]' : 'bg-white text-[#0f172a]'
  ]">

    <div class="pointer-events-none fixed inset-0 z-10 opacity-25 transition-opacity duration-300 will-change-transform"
      :style="{ background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, ${isDarkMode ? 'rgba(0, 255, 163, 0.12)' : 'rgba(249, 115, 22, 0.12)'}, transparent 80%)` }">
    </div><br>

    <section :class="[
      'relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 overflow-hidden border-b z-20',
      isDarkMode ? 'border-neutral-900' : 'border-neutral-200'
    ]">
      <div :class="['absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_70%)]']"
        :style="{ '--glow': isDarkMode ? 'rgba(0,255,163,0.03)' : 'rgba(249,115,22,0.05)' }"></div>
      <div
        :class="['absolute -top-40 -right-40 rounded-full blur-[120px] pointer-events-none animate-pulse hero-glow-circle', isDarkMode ? 'bg-[#00ffa3]/5' : 'bg-orange-500/10']">
      </div>

      <div
        class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16 2xl:gap-20 items-center relative z-20 w-full pt-16 sm:pt-20 md:pt-24 lg:pt-20 xl:pt-24 2xl:pt-28 pb-10 sm:pb-12 md:pb-14">

        <div class="lg:col-span-7 space-y-4 sm:space-y-6 text-left order-2 lg:order-1">
          <span ref="heroLabel"
            :class="['inline-block text-[10px] sm:text-xs xl:text-sm 2xl:text-base font-bold tracking-[0.3em] uppercase px-3 py-1 sm:px-4 sm:py-1.5 xl:px-5 xl:py-2 rounded-full border shadow-[0_0_15px_rgba(0,0,0,0.05)]', isDarkMode ? 'text-[#00ffa3] bg-[#00ffa3]/10 border-[#00ffa3]/20' : 'text-[#f97316] bg-[#f97316]/10 border-[#f97316]/20']">
            Mobile App Development
          </span>
          <h1 ref="heroTitle"
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight leading-[1.1]">
            <span class="inline-block mr-3">Build</span>
            <span
              :class="['inline-block mr-3 text-transparent bg-clip-text bg-gradient-to-r', isDarkMode ? 'from-[#00ffa3] to-emerald-400' : 'from-[#f97316] to-orange-500']">Mobile
              Apps</span>
            <br>
            <span class="inline-block mr-3">People</span>
            <span class="inline-block mr-3">Love</span>
            <span class="inline-block mr-3">To</span>
            <span class="inline-block">Use</span>
          </h1>
          <p ref="heroSubtitle" :class="[
            'text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl leading-relaxed max-w-2xl',
            isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
          ]">
            Transform your ideas into powerful mobile applications that engage users, drive growth, and create
            lasting digital experiences. We design and develop high-performance iOS and Android applications built
            for the future.
          </p>
          <div ref="heroButtons" class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
            <router-link to="/consultation"
              :class="['w-full sm:w-auto text-center px-6 py-3.5 sm:px-8 sm:py-4 xl:px-9 2xl:px-10 2xl:py-5 font-bold rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:scale-[1.02] text-sm sm:text-base 2xl:text-lg', isDarkMode ? 'bg-[#00ffa3] text-[#000000] shadow-[0_0_30px_rgba(0,255,163,0.2)]' : 'bg-[#f97316] text-white shadow-[0_0_30px_rgba(249,115,22,0.3)]']">
              Start Your App Project
            </router-link>
            <router-link to="/portfolio" :class="[
              'w-full sm:w-auto text-center px-6 py-3.5 sm:px-8 sm:py-4 xl:px-9 2xl:px-10 2xl:py-5 font-medium rounded-lg transition-all duration-300 border text-sm sm:text-base 2xl:text-lg',
              isDarkMode
                ? 'bg-neutral-900 border-neutral-800 text-white hover:bg-neutral-800 hover:border-neutral-700'
                : 'bg-neutral-100 border-neutral-200 text-neutral-900 hover:bg-neutral-200 hover:border-neutral-300'
            ]">
              View Portfolio
            </router-link>
          </div>
        </div>

        <div class="lg:col-span-5 flex justify-center order-1 lg:order-2 perspective-1000">
          <div ref="phoneWireframe" :class="[
            'phone-frame relative border-[4px] rounded-[44px] p-3.5 transition-transform duration-200 ease-out will-change-transform ring-1',
            isDarkMode
              ? 'border-neutral-800 bg-neutral-950 border-t-neutral-700 border-b-neutral-900 ring-neutral-800/50 shadow-[0_0_60px_rgba(0,255,163,0.18)]'
              : 'border-black bg-neutral-50 border-t-black border-b-black ring-black/20 shadow-[0_0_60px_rgba(249,115,22,0.15)]'
          ]" :style="{ transform: `rotateY(${phoneRotation.y}deg) rotateX(${phoneRotation.x}deg)` }">
            <div :class="[
              'absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4.5 rounded-full z-30 flex items-center justify-end px-3',
              isDarkMode ? 'bg-black' : 'bg-neutral-900'
            ]">
              <div class="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-1"></div>
              <div class="w-1 h-1 bg-neutral-950 rounded-full"></div>
            </div>

            <div :class="[
              'w-full h-full rounded-[32px] flex flex-col justify-between p-4 overflow-hidden relative select-none border',
              isDarkMode ? 'bg-black border-neutral-900/60' : 'bg-white border-neutral-200'
            ]">

              <div
                :class="['absolute top-1/4 -right-20 w-40 h-40 rounded-full blur-2xl pointer-events-none', isDarkMode ? 'bg-[#00ffa3]/10' : 'bg-[#f97316]/10']">
              </div>
              <div
                :class="['absolute bottom-12 -left-20 w-40 h-40 rounded-full blur-2xl pointer-events-none', isDarkMode ? 'bg-emerald-500/5' : 'bg-orange-500/10']">
              </div>

              <div class="pt-6 flex items-center justify-between relative z-10">
                <div class="space-y-0.5">
                  <span
                    :class="['text-[9px] uppercase tracking-widest font-bold', isDarkMode ? 'text-neutral-500' : 'text-neutral-400']">Current
                    Location</span>
                  <h4
                    :class="['text-xs font-bold flex items-center gap-1', isDarkMode ? 'text-neutral-200' : 'text-neutral-800']">
                    📍 Tokyo, Japan
                  </h4>
                </div>
                <div :class="[
                  'w-7 h-7 rounded-full flex items-center justify-center text-[10px] shadow-sm border',
                  isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
                ]">
                  ✈️
                </div>
              </div>

              <div
                :class="['relative w-full phone-image-area rounded-2xl overflow-hidden my-3 z-10 border', isDarkMode ? 'border-neutral-900' : 'border-neutral-200']">
                <transition-group name="travel-fade">
                  <div v-for="(dot, dotIdx) in travelDots" :key="dot.id" v-show="currentDot === dotIdx"
                    class="absolute inset-0 w-full h-full">
                    <img :src="dot.imageUrl" class="w-full h-full object-cover" :alt="dot.title" />
                    <div
                      class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-3 pt-8">
                      <p class="text-[11px] font-bold text-white tracking-wide">{{ dot.title }}</p>
                    </div>
                  </div>
                </transition-group>

                <div class="absolute top-3 right-3 flex gap-1 z-20 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full">
                  <button v-for="(_, dotIdx) in travelDots" :key="dotIdx" @click="setDot(dotIdx)"
                    :class="['w-1.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none', currentDot === dotIdx ? (isDarkMode ? 'bg-[#00ffa3] w-3.5' : 'bg-[#f97316] w-3.5') : 'bg-white/40']"></button>
                </div>
              </div>

              <div :class="[
                'backdrop-blur-md rounded-2xl p-3 space-y-1.5 relative z-10 border',
                isDarkMode ? 'bg-neutral-900/40 border-neutral-800/60' : 'bg-neutral-100/70 border-neutral-200'
              ]">
                <div class="flex justify-between items-center">
                  <span :class="['text-[9px] font-medium', isDarkMode ? 'text-neutral-400' : 'text-neutral-500']">Next
                    Destination</span>
                  <span
                    :class="['text-[9px] px-1.5 py-0.5 rounded font-bold', isDarkMode ? 'text-[#00ffa3] bg-[#00ffa3]/10' : 'text-[#f97316] bg-[#f97316]/10']">Kyoto
                    Autumn</span>
                </div>
                <div class="flex items-baseline justify-between">
                  <span
                    :class="['text-sm font-black tracking-tight', isDarkMode ? 'text-white' : 'text-neutral-900']">Trip
                    Explorer Analytics</span>
                  <span class="text-[9px] text-emerald-400 font-medium">☀️ 22°C</span>
                </div>

                <div class="h-8 w-full flex items-end gap-1 pt-1">
                  <div :class="['h-1/3 flex-1 rounded-sm', isDarkMode ? 'bg-neutral-800' : 'bg-neutral-300']"></div>
                  <div :class="['h-1/2 flex-1 rounded-sm', isDarkMode ? 'bg-neutral-800' : 'bg-neutral-300']"></div>
                  <div :class="['h-2/3 flex-1 rounded-sm', isDarkMode ? 'bg-[#00ffa3]/30' : 'bg-[#f97316]/30']"></div>
                  <div :class="['h-3/5 flex-1 rounded-sm', isDarkMode ? 'bg-[#00ffa3]/50' : 'bg-[#f97316]/50']"></div>
                  <div
                    :class="['h-4/5 flex-1 rounded-sm shadow-[0_0_10px]', isDarkMode ? 'bg-[#00ffa3] shadow-[rgba(0,255,163,0.3)]' : 'bg-[#f97316] shadow-[rgba(249,115,22,0.3)]']">
                  </div>
                  <div
                    :class="['h-full flex-1 rounded-sm shadow-[0_0_15px]', isDarkMode ? 'bg-[#00ffa3] shadow-[rgba(0,255,163,0.5)]' : 'bg-[#f97316] shadow-[rgba(249,115,22,0.5)]']">
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-2 my-1.5 relative z-10">
                <div
                  :class="['p-2.5 rounded-xl flex flex-col justify-between h-16 transition-colors border', isDarkMode ? 'bg-neutral-900/30 border-neutral-900/80 hover:border-[#00ffa3]/30' : 'bg-neutral-100/70 border-neutral-200 hover:border-[#f97316]/30']">
                  <div class="w-4 h-4 rounded bg-emerald-500/10 flex items-center justify-center text-[10px]">🧳</div>
                  <div :class="['text-[10px] font-bold', isDarkMode ? 'text-neutral-300' : 'text-neutral-700']">Book
                    Flights</div>
                </div>
                <div
                  :class="['p-2.5 rounded-xl flex flex-col justify-between h-16 transition-colors border', isDarkMode ? 'bg-neutral-900/30 border-neutral-900/80 hover:border-[#00ffa3]/30' : 'bg-neutral-100/70 border-neutral-200 hover:border-[#f97316]/30']">
                  <div class="w-4 h-4 rounded flex items-center justify-center text-[10px]"
                    :class="isDarkMode ? 'bg-[#00ffa3]/10' : 'bg-[#f97316]/10'">🎟️</div>
                  <div :class="['text-[10px] font-bold', isDarkMode ? 'text-neutral-300' : 'text-neutral-700']">My
                    Tickets</div>
                </div>
              </div>

              <button
                :class="['mt-1 w-full py-2.5 font-extrabold text-[11px] rounded-xl shadow-[0_4px_15px] transition-all relative z-10 active:scale-[0.98]', isDarkMode ? 'bg-gradient-to-r from-[#00ffa3] to-emerald-500 text-black shadow-[rgba(0,255,163,0.25)]' : 'bg-gradient-to-r from-[#f97316] to-orange-500 text-white shadow-[rgba(249,115,22,0.25)]']">
                Discover New Adventures
              </button>

              <div
                :class="['mt-3 pt-2 border-t flex justify-around items-center relative z-10', isDarkMode ? 'border-neutral-900 text-neutral-600' : 'border-neutral-200 text-neutral-400']">
                <span
                  :class="['text-xs cursor-pointer scale-110', isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]']">🗺️</span>
                <span
                  :class="['text-xs cursor-pointer transition-colors', isDarkMode ? 'hover:text-neutral-400' : 'hover:text-neutral-600']">❤️</span>
                <span
                  :class="['text-xs cursor-pointer transition-colors', isDarkMode ? 'hover:text-neutral-400' : 'hover:text-neutral-600']">💬</span>
                <span
                  :class="['text-xs cursor-pointer transition-colors', isDarkMode ? 'hover:text-neutral-400' : 'hover:text-neutral-600']">👤</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

defineProps({ isDarkMode: { type: Boolean, default: true } })

const pageContainer = ref(null)
const heroLabel = ref(null)
const heroTitle = ref(null)
const heroSubtitle = ref(null)
const heroButtons = ref(null)
const phoneWireframe = ref(null)

const mouse = reactive({ x: 0, y: 0 })
const phoneRotation = reactive({ x: 0, y: 0 })
let rafId = null

const handleMouseMove = (e) => {
  if (!rafId) {
    rafId = requestAnimationFrame(() => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      const halfW = window.innerWidth / 2
      const halfH = window.innerHeight / 2
      phoneRotation.y = ((e.clientX - halfW) / halfW) * 15
      phoneRotation.x = -((e.clientY - halfH) / halfH) * 15
      rafId = null
    })
  }
}

const currentDot = ref(0)
let travelCarouselInterval = null
const travelDots = [
  { id: 1, title: 'Kyoto Imperial Wilderness, Japan', imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop' },
  { id: 2, title: 'Amalfi Coastal Horizons, Italy', imageUrl: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=600&auto=format&fit=crop' },
  { id: 3, title: 'Santorini Sunset Calderas, Greece', imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=600&auto=format&fit=crop' },
  { id: 4, title: 'Banff Glacial Retreats, Canada', imageUrl: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=600&auto=format&fit=crop' },
  { id: 5, title: 'Swiss Alpine Ridges, Zermatt', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop' }
]

const setDot = (index) => { currentDot.value = index; resetTravelInterval() }
const nextDot = () => { currentDot.value = (currentDot.value + 1) % travelDots.length }
const resetTravelInterval = () => {
  if (travelCarouselInterval) clearInterval(travelCarouselInterval)
  travelCarouselInterval = setInterval(nextDot, 4500)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
  resetTravelInterval()
  const heroTl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } })
  heroTl.fromTo(heroLabel.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, delay: 0.2 })
    .fromTo(heroTitle.value.children, { opacity: 0, y: 35 }, { opacity: 1, y: 0, stagger: 0.08 }, '-=0.9')
    .fromTo(heroSubtitle.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.9')
    .fromTo(heroButtons.value, { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, '-=0.9')
    .fromTo(phoneWireframe.value, { opacity: 0, scale: 0.9, rotateY: -30 }, { opacity: 1, scale: 1, rotateY: 0, duration: 1.6 }, '-=1.4')
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(rafId)
  if (travelCarouselInterval) clearInterval(travelCarouselInterval)
})
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
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

/* Phone mockup frame — kept at the component's original fixed 288x560px
   design at every breakpoint. Only the 2560px+ tier below changes this. */
.phone-frame {
  width: 288px;
  height: 560px;
}

/* Decorative blur circle behind the hero — original fixed w-96 h-96
   (384px) design, kept unchanged at every breakpoint except 2560px+. */
.hero-glow-circle {
  width: 24rem;
  height: 24rem;
}

/* Phone screen's image/carousel area — original fixed h-44 (176px) design,
   kept unchanged at every breakpoint except 2560px+. */
.phone-image-area {
  height: 176px;
}

/* ==========================================================================
   Mobile Landscape / Small Tablets: 576px — 768px
   No changes here — mockup stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Laptops / Large Tablets: 769px — 1024px
   No changes here — mockup stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Desktops: 1025px — 1200px
   No changes here — mockup stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Extra Large Screens / Desktops / TVs: 1201px and up
   No changes here — mockup stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Ultra-wide / Large TVs: 1536px and up
   No changes here — mockup stays at its original fixed design size.
   ========================================================================== */

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   No changes here — mockup stays at its original fixed design size.
   ========================================================================== */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 1750px !important;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   This is the ONLY breakpoint where the phone mockup, its image area, and
   the glow circle grow beyond their original fixed design size — every
   other breakpoint above and below this keeps the mockup completely
   unchanged, exactly as it was originally designed.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2050px !important;
  }

  .phone-frame {
    width: 385px;
    height: 745px;
  }

  .phone-image-area {
    height: 235px;
  }

  .hero-glow-circle {
    width: 34rem;
    height: 34rem;
  }
}

/* ==========================================================================
   Very small phones: no changes here either — mockup stays at its
   original fixed design size, exactly as requested.
   ========================================================================== */
</style>