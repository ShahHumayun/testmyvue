<template>
  <section :class="['benefits-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <div class="video-showcase-box border rounded-2xl overflow-hidden aspect-square shadow-[0_0_50px_-15px_rgba(0,0,0,0.3)] relative">
        <video 
          autoplay loop muted playsinline preload="auto"
          poster="https://images.pexels.com/photos/5903961/pexels-photo-5903961.jpeg?auto=compress&cs=tinysrgb&w=1200"
          class="w-full h-full object-cover video-mask"
          src="https://videos.pexels.com/video-files/5903961/5903961-hd_1920_1080_25fps.mp4"
        ></video>
        <div class="absolute inset-0 media-gradient-overlay"></div>
        
        <div class="absolute top-8 left-8">
          <h4 class="text-xs font-bold uppercase tracking-widest media-label-tag">Global Operations</h4>
          <p class="text-4xl font-black mt-2 media-label-title">Scalable Tech</p>
        </div>
      </div>

      <div class="space-y-8">
        <h2 class="text-5xl font-bold tracking-tight leading-tight section-main-title">
          Why Businesses <br/><span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Invest In Ecommerce</span>
        </h2>
        
        <ul ref="whyList" class="space-y-6">
          <li v-for="(benefit, idx) in commerceBenefits" :key="idx" class="benefit-item flex items-center gap-4">
            <span class="w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 svg-circle">
              <svg class="w-3 h-3 check-vector" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"><path d="M5 13l4 4L19 7" /></svg>
            </span>
            <span class="text-lg font-medium benefit-text-row">{{ benefit }}</span>
          </li>
        </ul>
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
const whyList = ref(null)

const commerceBenefits = [
  'Sell 24/7 Without Limits', 'Reach Global Customers',
  'Increase Revenue Opportunities', 'Better Customer Experience',
  'Automated Order Management', 'Powerful Analytics & Insights',
  'Scalable Business Growth'
]

onMounted(() => {
  const items = whyList.value.querySelectorAll('.benefit-item')
  gsap.set(items, { opacity: 0, x: -20 })
  gsap.to(items, {
    opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power2.out",
    scrollTrigger: { trigger: whyList.value, start: "top 80%" }
  })
})
</script>

<style scoped>
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --section-title-color: #ffffff;
  --benefit-txt: #ffffff;
  --showcase-bg: #0a0a0a;
  --showcase-border: #171717;
  --video-opacity: 0.8;
  --video-overlay: rgba(0, 0, 0, 0.4);
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --section-title-color: #000000;
  --benefit-txt: #000000;
  --showcase-bg: #ffffff;
  --showcase-border: #e2e8f0;
  --video-opacity: 0.95;
  --video-overlay: rgba(0, 0, 0, 0.15);
}

.video-showcase-box { background-color: var(--showcase-bg) !important; border: 1px solid var(--showcase-border) !important; }
.video-mask { opacity: var(--video-opacity) !important; }
.media-gradient-overlay { background-color: var(--video-overlay) !important; }
.media-label-tag, .media-label-title { color: #ffffff !important; }
.section-main-title { color: var(--section-title-color) !important; }
.svg-circle { border-color: var(--accent-color) !important; }
.check-vector { color: var(--accent-color) !important; }
.benefit-text-row { color: var(--benefit-txt) !important; }
</style>