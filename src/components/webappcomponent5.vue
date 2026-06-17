<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-24 text-center">
        Our <span class="text-[#00ffa3]">Development Process</span>
      </h2>
      <div ref="processTimeline" class="relative block lg:flex items-start justify-between gap-6 space-y-12 lg:space-y-0">
        <div class="hidden lg:block absolute top-[27px] left-0 right-0 h-[2px] bg-neutral-900 z-0"></div>
        <div ref="timelineProgress" class="hidden lg:block absolute top-[27px] left-0 h-[2px] bg-gradient-to-r from-emerald-500 to-[#00ffa3] z-0 transform-origin-left scale-x-0"></div>

        <div v-for="(step, idx) in processSteps" :key="idx" class="process-step relative z-10 flex-1 group">
          <div class="flex lg:flex-col items-center lg:items-start gap-6 lg:gap-0">
            <div class="step-node w-14 h-14 rounded-full bg-neutral-950 border-2 border-neutral-800 flex items-center justify-center font-mono font-bold text-neutral-500 group-hover:border-[#00ffa3] group-hover:text-[#00ffa3] transition-all duration-500 shadow-xl lg:mb-6 flex-shrink-0">
              0{{ idx + 1 }}
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2 tracking-tight text-white group-hover:text-[#00ffa3] transition-colors duration-300">
                {{ step.title }}
              </h3>
              <p class="text-neutral-400 text-sm leading-relaxed max-w-sm">
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
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const processTimeline = ref(null)
const timelineProgress = ref(null)

const processSteps = [
  { title: 'Discovery & Strategy', description: 'Understanding business goals and requirements.' },
  { title: 'UI/UX Design', description: 'Creating engaging user experiences.' },
  { title: 'Development', description: 'Building scalable frontend and backend systems.' },
  { title: 'Testing', description: 'Performance, security and quality assurance.' },
  { title: 'Launch & Support', description: 'Deployment and continuous improvement.' }
]

onMounted(() => {
  const pipelineSteps = document.querySelectorAll('.process-step')
  
  gsap.fromTo(timelineProgress.value, 
    { scaleX: 0 },
    {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: processTimeline.value,
        start: 'top 70%',
        end: 'bottom 60%',
        scrub: true
      }
    }
  )

  pipelineSteps.forEach((step) => {
    gsap.fromTo(step, 
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: step,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    )
  })
})
</script>