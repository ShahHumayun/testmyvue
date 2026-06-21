<template>
  <div :class="['page-wrapper', isDarkMode ? 'theme-dark' : 'theme-light']">
    <Header v-model:isDarkMode="isDarkMode" />

    <section class="relative min-h-screen flex items-center justify-center px-6 overflow-hidden border-b border-neutral-900 z-20 pt-24">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,255,163,0.05),transparent_70%)]"></div>
      
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20 w-full">
        
        <div class="lg:col-span-6 space-y-6 text-left">
          <span ref="heroLabel" class="inline-block text-xs font-bold tracking-[0.3em] text-[#00ffa3] uppercase bg-[#00ffa3]/10 px-4 py-1.5 rounded-full border border-[#00ffa3]/20 shadow-[0_0_15px_rgba(0,255,163,0.1)]">
            Web Application Development
          </span>
          <h1 ref="heroTitle" class="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-400">
            Building Powerful Web Applications <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffa3] to-emerald-400">That Grow Your Business</span>
          </h1>
          <p ref="heroSubtitle" class="text-neutral-400 text-base md:text-xl leading-relaxed max-w-2xl">
            We design and develop high-performance web applications that help businesses automate operations, improve customer experiences, and scale faster. From startups to enterprise solutions, we build web platforms that deliver measurable results.
          </p>
          <div ref="heroButtons" class="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button 
              @click="router.push('/consultation')" 
              class="w-full sm:w-auto px-8 py-4 bg-[#00ffa3] text-[#000000] font-bold rounded-lg shadow-[0_0_30px_rgba(0,255,163,0.3)] hover:shadow-[0_0_40px_rgba(0,255,163,0.5)] transition-all duration-300 hover:scale-[1.02]"
            >
              Start Your Project
            </button>
            <button 
              @click="router.push('/portfolio')" 
              class="w-full sm:w-auto px-8 py-4 bg-neutral-900 border border-neutral-800 text-white font-medium rounded-lg hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-300"
            >
              View Our Work
            </button>
          </div>
        </div>

        <div class="lg:col-span-6 flex justify-center perspective-1000">
          <div ref="monitor" class="w-full max-w-[650px] aspect-[16/10] bg-neutral-900 border-[8px] border-neutral-800 rounded-lg shadow-[0_0_80px_rgba(0,255,163,0.1)] relative">
            <div class="h-8 bg-neutral-950 flex items-center px-4 border-b border-neutral-800">
              <div class="flex gap-1.5 mr-4">
                <div class="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <span class="text-neutral-500 text-[10px] font-bold tracking-widest uppercase">The Explorers</span>
            </div>
            
            <div class="relative w-full h-[calc(100%-32px)] overflow-hidden">
              <transition-group name="travel-fade">
                <div v-for="(dot, dotIdx) in travelDots" :key="dot.id" v-show="currentDot === dotIdx" class="absolute inset-0">
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router' // Import useRouter
import { gsap } from 'gsap'
import Header from './Header.vue'

const router = useRouter() // Initialize router
const heroLabel = ref(null)
const heroTitle = ref(null)
const heroSubtitle = ref(null)
const heroButtons = ref(null)
const monitor = ref(null)
const isDarkMode = ref(true)
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
.page-wrapper { --brand-accent: #00ffa3; --transition-speed: 0.5s; width: 100%; min-height: 100vh; position: relative; }
.theme-dark { background-color: #000000; color: #ffffff; }
.travel-fade-enter-active, .travel-fade-leave-active { transition: opacity 0.6s ease-in-out; }
.travel-fade-enter-from, .travel-fade-leave-to { opacity: 0; }
</style>