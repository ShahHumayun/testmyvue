<template>
  <section
    :class="[
      'py-32 px-6 border-b relative z-20',
      isDarkMode ? 'border-neutral-900' : 'border-neutral-200'
    ]"
  >
    <div class="max-w-7xl mx-auto">
      <h2 :class="['text-3xl md:text-5xl font-bold tracking-tight mb-24 text-center', isDarkMode ? 'text-white' : 'text-black']">
        How We Turn Ideas 
        <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Into Successful Apps</span>
      </h2>
      <div ref="processTimeline" class="relative block lg:flex items-start justify-between gap-6 space-y-12 lg:space-y-0">
        <div :class="['hidden lg:block absolute top-[27px] left-0 right-0 h-[2px] z-0', isDarkMode ? 'bg-neutral-900' : 'bg-neutral-200']"></div>
        <div 
          ref="timelineProgress" 
          :class="[
            'hidden lg:block absolute top-[27px] left-0 h-[2px] z-0 transform-origin-left scale-x-0 bg-gradient-to-r',
            isDarkMode ? 'from-emerald-500 to-[#00ffa3]' : 'from-orange-400 to-[#f97316]'
          ]"
        ></div>

        <div v-for="(step, idx) in processSteps" :key="idx" class="process-card relative z-10 flex-1 group">
          <div class="flex lg:flex-col items-center lg:items-start gap-6 lg:gap-0">
            <div
              :class="[
                'w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold transition-all duration-500 shadow-xl lg:mb-6 flex-shrink-0 border-2',
                isDarkMode 
                  ? 'bg-neutral-950 border-neutral-800 text-neutral-500 group-hover:border-[#00ffa3] group-hover:text-[#00ffa3]' 
                  : 'bg-neutral-50 border-neutral-300 text-neutral-500 group-hover:border-[#f97316] group-hover:text-[#f97316]'
              ]"
            >
              0{{ idx + 1 }}
            </div>
            <div>
              <h3 :class="[
                'text-lg font-bold mb-2 tracking-tight transition-colors',
                isDarkMode 
                  ? 'text-white group-hover:text-[#00ffa3]' 
                  : 'text-black group-hover:text-[#f97316]'
              ]">
                {{ step.title }}
              </h3>
              <p :class="['text-sm leading-relaxed max-w-sm', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
                {{ step.description }}
              </p>
            </div>
          </div>
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
const processTimeline = ref(null)
const timelineProgress = ref(null)

const processSteps = [
  { title: 'Discovery & Research', description: 'Understanding your users and business goals.' },
  { title: 'UI/UX Design', description: 'Creating beautiful user experiences.' },
  { title: 'App Development', description: 'Building secure and scalable applications.' },
  { title: 'Testing & Optimization', description: 'Ensuring smooth performance on all devices.' },
  { title: 'Launch & Growth', description: 'Deployment, monitoring, and future improvements.' }
]

onMounted(() => {
  gsap.fromTo(timelineProgress.value, { scaleX: 0 }, {
    scaleX: 1, ease: 'none',
    scrollTrigger: {
      trigger: processTimeline.value,
      start: 'top 70%', end: 'bottom 60%', scrub: true
    }
  })

  const processCards = processTimeline.value.querySelectorAll('.process-card')
  processCards.forEach((card) => {
    gsap.fromTo(card, { opacity: 0, y: 25 }, {
      opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
      scrollTrigger: { trigger: card, start: 'top 85%' }
    })
  })
})
</script>