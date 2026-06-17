<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center">
        Complete <span class="text-[#00ffa3]">Ecommerce Solutions</span>
      </h2>
      
      <div ref="servicesGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(service, idx) in services" 
          :key="idx"
          class="service-card group bg-neutral-950 border border-neutral-900 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#00ffa3] hover:shadow-[0_0_40px_rgba(0,255,163,0.04)] cursor-pointer relative overflow-hidden"
        >
          <div class="w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 text-[#00ffa3] transition-transform duration-500 group-hover:rotate-6">
            <span class="text-xl group-hover:scale-110 transition-transform duration-300">{{ service.icon }}</span>
          </div>
          <h3 class="text-xl font-bold mb-3 tracking-tight text-white group-hover:text-[#00ffa3] transition-colors">
            {{ service.title }}
          </h3>
          <p class="text-neutral-400 text-sm leading-relaxed">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const servicesGrid = ref(null)

const services = [
  { title: 'Custom Ecommerce Development', description: 'Fully customized online stores tailored to your business goals.', icon: '💎' },
  { title: 'Shopify Development', description: 'Scalable Shopify stores designed for growth and conversions.', icon: '🛍️' },
  { title: 'WooCommerce Solutions', description: 'Flexible ecommerce experiences powered by WordPress.', icon: '🔌' },
  { title: 'Marketplace Development', description: 'Build multi-vendor ecommerce platforms similar to Amazon or Etsy.', icon: '🏢' },
  { title: 'B2B Ecommerce Platforms', description: 'Advanced solutions for wholesale and enterprise businesses.', icon: '🤝' },
  { title: 'Headless Commerce Solutions', description: 'Future-ready ecommerce experiences with maximum flexibility.', icon: '⚡' }
]

onMounted(() => {
  // Select all individual service cards inside the grid
  const cards = servicesGrid.value.querySelectorAll('.service-card')

  gsap.fromTo(cards, 
    { 
      opacity: 0, 
      y: 50 
    },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      stagger: 0.15, // Creates the staggered entry effect
      ease: "power2.out",
      scrollTrigger: {
        trigger: servicesGrid.value,
        start: "top 85%", // Trigger animation when section is visible
        toggleActions: "play none none none"
      }
    }
  )
})
</script>