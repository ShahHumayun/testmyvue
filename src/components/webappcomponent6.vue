<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center">
        Technologies <span class="text-[#00ffa3]">We Use</span>
      </h2>
      <div ref="techGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(cat, idx) in techStack" :key="idx" class="bg-neutral-950 border border-neutral-900 rounded-xl p-6 hover:shadow-[0_0_30px_rgba(0,255,163,0.02)] transition-shadow duration-300">
          <h3 class="text-xs font-bold tracking-[0.2em] uppercase text-neutral-500 mb-4 border-b border-neutral-900 pb-2">
            {{ cat.category }}
          </h3>
          <ul class="space-y-2.5">
            <li v-for="(tech, tIdx) in cat.items" :key="tIdx" class="tech-item flex items-center gap-3 text-neutral-300 font-medium hover:text-[#00ffa3] transition-colors duration-200 cursor-default">
              <span class="w-1.5 h-1.5 rounded-full bg-neutral-800 dot-indicator"></span>
              {{ tech }}
            </li>
          </ul>
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
const techGrid = ref(null)

const techStack = [
  { category: 'Frontend', items: ['Vue.js', 'React.js', 'Next.js'] },
  { category: 'Backend', items: ['Node.js', 'Laravel', 'Python'] },
  { category: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud'] }
]

onMounted(() => {
  gsap.fromTo(techGrid.value.children, { opacity: 0, y: 30 }, {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.12,
    ease: 'power3.out',
    scrollTrigger: { trigger: techGrid.value, start: 'top 85%' }
  })
})
</script>

<style scoped>
.tech-item:hover .dot-indicator {
  background-color: #00ffa3;
  box-shadow: 0 0 8px #00ffa3;
}
</style>