<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center">
        Benefits Of <span class="text-[#00ffa3]">Custom Web Applications</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(benefit, idx) in benefits" 
          :key="idx" 
          class="benefit-card bg-gradient-to-b from-neutral-950 to-black border border-neutral-900 p-8 rounded-2xl flex flex-col justify-between group hover:border-neutral-800 transition-colors duration-300"
        >
          <div class="space-y-4">
            <span class="text-xs font-mono text-neutral-600 group-hover:text-[#00ffa3] transition-colors duration-300">0{{ idx + 1 }}.</span>
            <h3 class="text-2xl font-bold tracking-tight text-white">{{ benefit.title }}</h3>
            <p class="text-neutral-400 leading-relaxed max-w-xl">{{ benefit.description }}</p>
          </div>
          <div class="pt-8 flex justify-end">
            <div class="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bg-[#00ffa3]/10 transition-all duration-300">
              <svg class="w-4 h-4 text-[#00ffa3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  { title: 'Business Automation', description: 'Reduce manual work and improve efficiency.' },
  { title: 'Better Customer Experience', description: 'Deliver seamless digital interactions.' },
  { title: 'Data Driven Decisions', description: 'Gain valuable insights through analytics.' },
  { title: 'Scalable Growth', description: 'Grow without limitations.' }
]

onMounted(() => {
  const cards = document.querySelectorAll('.benefit-card')
  cards.forEach((card, idx) => {
    const direction = idx % 2 === 0 ? -60 : 60
    gsap.fromTo(card, 
      { opacity: 0, x: direction },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%'
        }
      }
    )
  })
})
</script>