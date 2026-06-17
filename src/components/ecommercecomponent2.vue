<template>
  <section ref="counterContainer" class="py-24 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-center text-sm font-bold tracking-widest text-neutral-500 uppercase mb-16">
        Powering Ecommerce Growth
      </h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(stat, idx) in stats" :key="idx" 
             class="trust-card bg-neutral-950/40 border border-neutral-900/60 p-6 rounded-xl text-center space-y-2 transition-all duration-300 hover:border-[#00ffa3]/30">
          <div class="text-3xl md:text-5xl font-black text-[#00ffa3] tracking-tight">
            <span class="trust-counter" :data-target="stat.value">0</span>{{ stat.suffix }}
          </div>
          <p class="text-xs md:text-sm text-neutral-400 font-medium tracking-wide uppercase">{{ stat.label }}</p>
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

const counterContainer = ref(null)

const stats = [
  { value: 250, suffix: '+', label: 'Products Successfully Launched' },
  { value: 100, suffix: '+', label: 'Ecommerce Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 500, suffix: '+', label: 'In Online Sales Generated' } // Adjusted suffix as per logic
]

onMounted(() => {
  const counters = counterContainer.value.querySelectorAll('.trust-counter')

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-target'))
    
    gsap.fromTo(counter, 
      { innerText: 0 },
      {
        innerText: target,
        duration: 2.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: counterContainer.value,
          start: "top 80%", // Starts animation when section is 80% into view
          toggleActions: "play none none none"
        },
        // Using snap to ensure whole numbers are shown during the count
        snap: { innerText: 1 },
        modifiers: {
          innerText: (value) => Math.floor(value)
        }
      }
    )
  })
})
</script>