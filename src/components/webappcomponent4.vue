<template>
  <section class="py-32 px-6 bg-[#000000] border-b border-neutral-900 relative">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <div class="bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden aspect-square shadow-[0_0_50px_-15px_rgba(0,0,0,0.5)] relative">
        <video 
          autoplay 
          loop 
          muted 
          playsinline 
          class="w-full h-full object-cover opacity-80"
          src="https://videos.pexels.com/video-files/5903961/5903961-hd_1920_1080_25fps.mp4"
        >
        </video>
        <div class="absolute inset-0 bg-black/40"></div>
        
        <div class="absolute top-8 left-8">
          <h4 class="text-xs font-bold text-neutral-400 uppercase tracking-widest">Global Operations</h4>
          <p class="text-4xl font-black text-white mt-2">Scalable Tech</p>
        </div>
      </div>

      <div class="space-y-8">
        <h2 class="text-5xl font-bold tracking-tight text-white leading-tight">
          Why Businesses <br/><span class="text-[#00ffa3]">Invest In Ecommerce</span>
        </h2>
        
        <ul ref="whyList" class="space-y-6">
          <li v-for="(benefit, idx) in commerceBenefits" :key="idx" class="benefit-item flex items-center gap-4">
            <span class="w-6 h-6 rounded-full border border-[#00ffa3]/50 flex items-center justify-center flex-shrink-0">
              <svg class="w-3 h-3 text-[#00ffa3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4"><path d="M5 13l4 4L19 7" /></svg>
            </span>
            <span class="text-white text-lg font-medium">{{ benefit }}</span>
          </li>
        </ul>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const whyList = ref(null)

const commerceBenefits = [
  'Sell 24/7 Without Limits', 'Reach Global Customers',
  'Increase Revenue Opportunities', 'Better Customer Experience',
  'Automated Order Management', 'Powerful Analytics & Insights',
  'Scalable Business Growth'
]

onMounted(() => {
  // Animate List Items
  const items = whyList.value.querySelectorAll('.benefit-item')
  gsap.set(items, { opacity: 0, x: -20 })
  
  gsap.to(items, {
    opacity: 1,
    x: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: whyList.value,
      start: "top 80%"
    }
  })
})
</script>