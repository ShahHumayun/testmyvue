<template>
  <Header/><br>
  <section class="relative min-h-screen flex items-center justify-center px-6 overflow-hidden border-b border-neutral-900 z-20">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,163,0.02),transparent_70%)]"></div>
    <div class="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,#031f14_1px,transparent_1px),linear-gradient(to_bottom,#031f14_1px,transparent_1px)] bg-[size:5rem_5rem]"></div>
    
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 w-full pt-24 pb-12">
      
      <div class="lg:col-span-7 space-y-6 text-left order-2 lg:order-1">
        <span ref="heroLabel" class="inline-block text-xs font-bold tracking-[0.3em] text-[#00ffa3] uppercase bg-[#00ffa3]/10 px-4 py-1.5 rounded-full border border-[#00ffa3]/20 shadow-[0_0_15px_rgba(0,255,163,0.08)]">
          Ecommerce Development Solutions
        </span>
        <h1 ref="heroTitle" class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
          <span class="inline-block mr-3">Build</span>
          <span class="inline-block mr-3">Online</span>
          <span class="inline-block mr-3 text-transparent bg-clip-text bg-gradient-to-r from-[#00ffa3] to-emerald-400">Stores</span>
          <br>
          <span class="inline-block mr-3">That</span>
          <span class="inline-block mr-3">Convert</span>
          <span class="inline-block">Visitors</span>
        </h1>
        <p ref="heroSubtitle" class="text-neutral-400 text-base md:text-xl leading-relaxed max-w-2xl">
          We create high-performance ecommerce platforms that deliver seamless shopping experiences, increase conversions, and help businesses scale globally. From startup stores to enterprise commerce solutions, we build platforms designed to sell.
        </p>
        <div ref="heroButtons" class="flex flex-col sm:flex-row items-center gap-4 pt-4">
          <button class="w-full sm:w-auto px-8 py-4 bg-[#00ffa3] text-[#000000] font-bold rounded-lg shadow-[0_0_30px_rgba(0,255,163,0.2)] hover:shadow-[0_0_40px_rgba(0,255,163,0.4)] transition-all duration-300 transform hover:scale-[1.02]">
            Launch Your Store
          </button>
          <button class="w-full sm:w-auto px-8 py-4 bg-neutral-900 border border-neutral-800 text-white font-medium rounded-lg hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300">
            View Ecommerce Projects
          </button>
        </div>
      </div>

      <div class="lg:col-span-5 flex justify-center order-1 lg:order-2 content-perspective">
        <div 
          ref="floatingPanel"
          class="relative w-72 h-96 rounded-2xl border border-neutral-800 bg-black/40 backdrop-blur-xl p-6 shadow-2xl transition-transform duration-300 ease-out will-change-transform flex flex-col justify-between"
          :style="{ transform: `rotateY(${parallax.y}deg) rotateX(${parallax.x}deg) translateY(${floatingOffset}px)` }"
        >
          <div class="flex items-center justify-between border-b border-neutral-800 pb-4">
            <span class="text-[10px] font-mono uppercase text-neutral-500 tracking-widest">TRANSACTION MATRIX</span>
            <div class="w-2 h-2 rounded-full bg-[#00ffa3] animate-ping"></div>
          </div>
          <div class="flex-1 py-6 flex flex-col justify-center space-y-4">
            <div class="w-full h-32 bg-gradient-to-tr from-[#00ffa3]/10 to-transparent border border-[#00ffa3]/20 rounded-xl flex items-center justify-center text-4xl shadow-inner">
              📦
            </div>
            <div class="space-y-2">
              <div class="h-4 bg-neutral-900 rounded w-2/3"></div>
              <div class="h-3 bg-neutral-900 rounded w-full"></div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span class="font-mono font-bold text-[#00ffa3] text-lg">$2,450.00</span>
            <span class="text-xs text-neutral-500 bg-neutral-900 px-2 py-1 rounded border border-neutral-800">Success</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Header from '../components/Header.vue'
import { ref, reactive, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// References
const heroLabel = ref(null)
const heroTitle = ref(null)
const heroSubtitle = ref(null)
const heroButtons = ref(null)
const floatingPanel = ref(null)

// Animation State
const parallax = reactive({ x: 0, y: 0 })
const floatingOffset = ref(0)
let rafId = null

// Handle Parallax & Floating Animation
const handleMouseMove = (e) => {
  const { clientX, clientY } = e
  const centerX = window.innerWidth / 2
  const centerY = window.innerHeight / 2
  parallax.y = (clientX - centerX) / 50
  parallax.x = (centerY - clientY) / 50
}

const animateFloating = (time) => {
  floatingOffset.value = Math.sin(time * 0.002) * 20
  rafId = requestAnimationFrame(animateFloating)
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove)
  rafId = requestAnimationFrame(animateFloating)
  
  // Entrance Animations
  const tl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1 } })
  tl.from([heroLabel.value, heroTitle.value, heroSubtitle.value, heroButtons.value], {
    y: 40,
    opacity: 0,
    stagger: 0.15
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.content-perspective {
  perspective: 1000px;
}
</style>