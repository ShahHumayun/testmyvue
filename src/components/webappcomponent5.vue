<template>
  <section :class="['process-section py-32 px-6 border-b relative z-20 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-24 text-center process-heading">
        Our <span class="text-[#00ffa3]">Development Process</span>
      </h2>
      <div ref="processTimeline" class="relative block lg:flex items-start justify-between gap-6 space-y-12 lg:space-y-0">
        <div class="hidden lg:block absolute top-[27px] left-0 right-0 h-[2px] timeline-track-bg z-0"></div>
        <div ref="timelineProgress" class="hidden lg:block absolute top-[27px] left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 to-[#00ffa3] z-0 transform-origin-left scale-x-0"></div>

        <div v-for="(step, idx) in processSteps" :key="idx" class="process-step relative z-10 flex-1 group">
          <div class="flex lg:flex-col items-center lg:items-start gap-6 lg:gap-0">
            <div class="step-node w-14 h-14 rounded-full flex items-center justify-center font-mono font-bold transition-all duration-500 shadow-xl lg:mb-6 flex-shrink-0">
              0{{ idx + 1 }}
            </div>
            <div>
              <h3 class="text-xl font-bold mb-2 tracking-tight step-title transition-colors duration-300">
                {{ step.title }}
              </h3>
              <p class="text-sm leading-relaxed max-w-sm step-description">
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

// Inject global theme state context seamlessly
const isDarkMode = inject('isDarkMode', ref(true))

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

<style scoped>
/* ── Encapsulated Visual Protection Boundaries ── */
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important; /* border-neutral-900 equivalent */
  --heading-color: #ffffff;
  --track-bg: #171717;
  --node-bg: #0a0a0a; /* bg-neutral-950 equivalent */
  --node-border: #262626; /* border-neutral-800 equivalent */
  --node-text: #737373; /* text-neutral-500 equivalent */
  --title-color: #ffffff;
  --desc-color: #a3a3a3; /* text-neutral-400 equivalent */
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important; /* border-slate-200 equivalent */
  --heading-color: #0f172a; /* text-slate-900 equivalent */
  --track-bg: #e2e8f0;
  --node-bg: #ffffff;
  --node-border: #cbd5e1; /* border-slate-300 equivalent */
  --node-text: #64748b; /* text-slate-500 equivalent */
  --title-color: #0f172a;
  --desc-color: #475569; /* text-slate-600 equivalent */
}

/* ── Explicit Rule Selector Mappings ── */
.process-section {
  width: 100% !important;
}

.process-heading {
  color: var(--heading-color) !important;
  transition: color 0.4s ease;
}

.timeline-track-bg {
  background-color: var(--track-bg) !important;
}

.step-node {
  background-color: var(--node-bg) !important;
  border: 2px solid var(--node-border) !important;
  color: var(--node-text) !important;
}

.process-step:hover .step-node {
  border-color: #00ffa3 !important;
  color: #00ffa3 !important;
}

.step-title {
  color: var(--title-color) !important;
}

.process-step:hover .step-title {
  color: #00ffa3 !important;
}

.step-description {
  color: var(--desc-color) !important;
  transition: color 0.4s ease;
}
</style>