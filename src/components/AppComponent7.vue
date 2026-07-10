<template>
  <section
    :class="[
      'py-32 px-6 border-b relative z-20',
      isDarkMode ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
    ]"
  >
    <div class="max-w-7xl mx-auto">
      <h2 :class="['text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center', isDarkMode ? 'text-white' : 'text-black']">
        Modern Technologies For <span class="text-[#00ffa3]">Future-Ready Apps</span>
      </h2>
      
      <div ref="techGrid" class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div v-for="(cat, idx) in techStack" :key="idx" class="flex flex-col items-center">
          <h3
            :class="[
              'text-sm font-bold tracking-[0.2em] uppercase text-[#00ffa3] mb-8 pb-4 border-b whitespace-nowrap',
              isDarkMode ? 'border-neutral-800' : 'border-neutral-200'
            ]"
          >
            {{ cat.category }}
          </h3>
          
          <ul class="w-full max-w-[200px] space-y-4">
            <li 
              v-for="(tech, tIdx) in cat.items" 
              :key="tIdx" 
              :class="['group flex items-center gap-4 font-medium cursor-default', isDarkMode ? 'text-neutral-300' : 'text-neutral-700']"
            >
              <div class="w-6 flex justify-center">
                <span
                  :class="[
                    'w-2 h-2 rounded-full group-hover:bg-[#00ffa3] group-hover:shadow-[0_0_8px_#00ffa3] transition-all duration-300',
                    isDarkMode ? 'bg-neutral-800' : 'bg-neutral-300'
                  ]"
                ></span>
              </div>
              
              <span :class="['transition-colors', isDarkMode ? 'group-hover:text-white' : 'group-hover:text-black']">
                {{ tech }}
              </span>
            </li>
          </ul>
        </div>
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

const techGrid = ref(null)

const techStack = [
  { category: 'Frontend Skill', items: ['Vue', 'React', 'Flutter', 'React Native'] },
  { category: 'Backend Engine', items: ['Laravel', 'Python', 'Node.js', 'Firebase'] },
  { category: 'Cloud Stack', items: ['AWS', 'Azure', 'Google Cloud'] }
]

onMounted(() => {
  if (techGrid.value) {
    gsap.fromTo(techGrid.value.children, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out',
      scrollTrigger: { trigger: techGrid.value, start: 'top 85%' }
    })
  }
})
</script>