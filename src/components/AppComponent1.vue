<template>
  <div ref="pageContainer" class="bg-[#000000] text-[#FFFFFF] font-sans relative overflow-hidden selection:bg-[#00ffa3] selection:text-[#000000]">
<Header/><br>
    <div
      class="pointer-events-none fixed inset-0 z-10 opacity-25 transition-opacity duration-300 will-change-transform"
      :style="{ background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, rgba(0, 255, 163, 0.12), transparent 80%)` }"
    ></div>

    <section class="relative min-h-screen flex items-center justify-center px-6 overflow-hidden border-b border-neutral-900 z-20">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,163,0.03),transparent_70%)]"></div>
      <div class="absolute -top-40 -right-40 w-96 h-96 bg-[#00ffa3]/5 rounded-full blur-[120px] pointer-events-none animate-pulse"></div>

      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 w-full pt-20 pb-12">

        <div class="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
          <span ref="heroLabel" class="inline-block text-xs font-bold tracking-[0.3em] text-[#00ffa3] uppercase bg-[#00ffa3]/10 px-4 py-1.5 rounded-full border border-[#00ffa3]/20 shadow-[0_0_15px_rgba(0,255,163,0.1)]">
            Mobile App Development
          </span>
          <h1 ref="heroTitle" class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
            <span class="inline-block mr-3">Build</span>
            <span class="inline-block mr-3 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffa3] to-emerald-400">Mobile Apps</span>
            <br>
            <span class="inline-block mr-3">People</span>
            <span class="inline-block mr-3">Love</span>
            <span class="inline-block mr-3">To</span>
            <span class="inline-block">Use</span>
          </h1>
          <p ref="heroSubtitle" class="text-neutral-400 text-base md:text-xl leading-relaxed max-w-2xl">
            Transform your ideas into powerful mobile applications that engage users, drive growth, and create lasting digital experiences. We design and develop high-performance iOS and Android applications built for the future.
          </p>
          <div ref="heroButtons" class="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button class="w-full sm:w-auto px-8 py-4 bg-[#00ffa3] text-[#000000] font-bold rounded-lg shadow-[0_0_30px_rgba(0,255,163,0.2)] hover:shadow-[0_0_40px_rgba(0,255,163,0.4)] transition-all duration-300 transform hover:scale-[1.02]">
              Start Your App Project
            </button>
            <button class="w-full sm:w-auto px-8 py-4 bg-neutral-900 border border-neutral-800 text-white font-medium rounded-lg hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300">
              View Portfolio
            </button>
          </div>
        </div>

        <div class="lg:col-span-5 flex justify-center order-1 lg:order-2 perspective-1000">
          <div
            ref="phoneWireframe"
            class="relative w-72 h-[560px] border-[4px] border-neutral-800 rounded-[44px] p-3.5 bg-neutral-950 shadow-[0_0_60px_rgba(0,255,163,0.18)] border-t-neutral-700 border-b-neutral-900 transition-transform duration-200 ease-out will-change-transform ring-1 ring-neutral-800/50"
            :style="{ transform: `rotateY(${phoneRotation.y}deg) rotateX(${phoneRotation.x}deg)` }"
          >
            <div class="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-30 flex items-center justify-end px-3">
              <div class="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-1"></div>
              <div class="w-1 h-1 bg-neutral-950 rounded-full"></div>
            </div>

            <div class="w-full h-full rounded-[32px] bg-black border border-neutral-900/60 flex flex-col justify-between p-4 overflow-hidden relative select-none">

              <div class="absolute top-1/4 -right-20 w-40 h-40 bg-[#00ffa3]/10 rounded-full blur-2xl pointer-events-none"></div>
              <div class="absolute bottom-12 -left-20 w-40 h-40 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>

              <div class="pt-6 flex items-center justify-between relative z-10">
                <div class="space-y-0.5">
                  <span class="text-[9px] uppercase tracking-widest font-bold text-neutral-500">Current Location</span>
                  <h4 class="text-xs font-bold text-neutral-200 flex items-center gap-1">
                    📍 Tokyo, Japan
                  </h4>
                </div>
                <div class="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-[10px] shadow-sm">
                  ✈️
                </div>
              </div>

              <div class="relative w-full h-44 rounded-2xl overflow-hidden my-3 z-10 border border-neutral-900">
                <transition-group name="travel-fade">
                  <div
                    v-for="(dot, dotIdx) in travelDots"
                    :key="dot.id"
                    v-show="currentDot === dotIdx"
                    class="absolute inset-0 w-full h-full"
                  >
                    <img
                      :src="dot.imageUrl"
                      class="w-full h-full object-cover"
                      :alt="dot.title"
                    />
                    <div class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-3 pt-8">
                      <p class="text-[11px] font-bold text-white tracking-wide">{{ dot.title }}</p>
                    </div>
                  </div>
                </transition-group>

                <div class="absolute top-3 right-3 flex gap-1 z-20 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full">
                  <button
                    v-for="(_, dotIdx) in travelDots"
                    :key="dotIdx"
                    @click="setDot(dotIdx)"
                    class="w-1.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none"
                    :class="currentDot === dotIdx ? 'bg-[#00ffa3] w-3.5' : 'bg-white/40'"
                  ></button>
                </div>
              </div>

              <div class="bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-md rounded-2xl p-3 space-y-1.5 relative z-10">
                <div class="flex justify-between items-center">
                  <span class="text-[9px] text-neutral-400 font-medium">Next Destination</span>
                  <span class="text-[9px] text-[#00ffa3] bg-[#00ffa3]/10 px-1.5 py-0.5 rounded font-bold">Kyoto Autumn</span>
                </div>
                <div class="flex items-baseline justify-between">
                  <span class="text-sm font-black tracking-tight text-white">Trip Explorer Analytics</span>
                  <span class="text-[9px] text-emerald-400 font-medium">☀️ 22°C</span>
                </div>

                <div class="h-8 w-full flex items-end gap-1 pt-1">
                  <div class="bg-neutral-800 h-1/3 flex-1 rounded-sm"></div>
                  <div class="bg-neutral-800 h-1/2 flex-1 rounded-sm"></div>
                  <div class="bg-[#00ffa3]/30 h-2/3 flex-1 rounded-sm"></div>
                  <div class="bg-[#00ffa3]/50 h-3/5 flex-1 rounded-sm"></div>
                  <div class="bg-[#00ffa3] h-4/5 flex-1 rounded-sm shadow-[0_0_10px_rgba(0,255,163,0.3)]"></div>
                  <div class="bg-[#00ffa3] h-full flex-1 rounded-sm shadow-[0_0_15px_rgba(0,255,163,0.5)]"></div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-2 my-1.5 relative z-10">
                <div class="bg-neutral-900/30 border border-neutral-900/80 p-2.5 rounded-xl flex flex-col justify-between h-16 hover:border-[#00ffa3]/30 transition-colors">
                  <div class="w-4 h-4 rounded bg-emerald-500/10 flex items-center justify-center text-[10px]">🧳</div>
                  <div class="text-[10px] font-bold text-neutral-300">Book Flights</div>
                </div>
                <div class="bg-neutral-900/30 border border-neutral-900/80 p-2.5 rounded-xl flex flex-col justify-between h-16 hover:border-[#00ffa3]/30 transition-colors">
                  <div class="w-4 h-4 rounded bg-[#00ffa3]/10 flex items-center justify-center text-[10px]">🎟️</div>
                  <div class="text-[10px] font-bold text-neutral-300">My Tickets</div>
                </div>
              </div>

              <button class="mt-1 w-full py-2.5 bg-gradient-to-r from-[#00ffa3] to-emerald-500 text-black font-extrabold text-[11px] rounded-xl shadow-[0_4px_15px_rgba(0,255,163,0.25)] transition-all relative z-10 active:scale-[0.98]">
                Discover New Adventures
              </button>

              <div class="mt-3 pt-2 border-t border-neutral-900 flex justify-around items-center text-neutral-600 relative z-10">
                <span class="text-xs text-[#00ffa3] cursor-pointer scale-110">🗺️</span>
                <span class="text-xs cursor-pointer hover:text-neutral-400 transition-colors">❤️</span>
                <span class="text-xs cursor-pointer hover:text-neutral-400 transition-colors">💬</span>
                <span class="text-xs cursor-pointer hover:text-neutral-400 transition-colors">👤</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import Header from './Header.vue'
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'

// Template Refs
const pageContainer = ref(null)
const heroLabel = ref(null)
const heroTitle = ref(null)
const heroSubtitle = ref(null)
const heroButtons = ref(null)
const phoneWireframe = ref(null)

// Mouse-reactive background glow + 3D phone tilt
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

// Travel photo carousel inside the phone mockup
const currentDot = ref(0)
let travelCarouselInterval = null

const travelDots = [
  { id: 1, title: 'Kyoto Imperial Wilderness, Japan', imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop' },
  { id: 2, title: 'Amalfi Coastal Horizons, Italy', imageUrl: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=600&auto=format&fit=crop' },
  { id: 3, title: 'Santorini Sunset Calderas, Greece', imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=600&auto=format&fit=crop' },
  { id: 4, title: 'Banff Glacial Retreats, Canada', imageUrl: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=600&auto=format&fit=crop' },
  { id: 5, title: 'Swiss Alpine Ridges, Zermatt', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop' }
]

const setDot = (index) => {
  currentDot.value = index
  resetTravelInterval()
}

const nextDot = () => {
  currentDot.value = (currentDot.value + 1) % travelDots.length
}

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

.travel-fade-enter-active, .travel-fade-leave-active {
  transition: opacity 0.6s ease-in-out;
}
.travel-fade-enter-from, .travel-fade-leave-to {
  opacity: 0;
}
</style>