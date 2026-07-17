<template>
  <!-- 7. OUR INTEGRATION PROCESS -->
  <section
    :class="[
      'py-32 px-6 border-b relative z-20 transition-colors duration-500',
      isDarkMode ? 'border-neutral-900 theme-dark' : 'border-neutral-200 theme-light'
    ]"
  >
    <div class="max-w-7xl mx-auto">
      <h2 :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-24', isDarkMode ? 'text-white' : 'text-black']">
        Our Proven <span class="accent-text">Integration Methodology</span>
      </h2>

      <div ref="processContainer" class="relative block lg:flex items-start justify-between gap-6 space-y-12 lg:space-y-0">
        <!-- Central Connecting Sequence Timeline Wire -->
        <div :class="['hidden lg:block absolute top-[23px] left-0 right-0 h-[1px] z-0', isDarkMode ? 'bg-neutral-900' : 'bg-neutral-200']"></div>
        <div ref="processLineFiller" class="hidden lg:block absolute top-[23px] left-0 h-[1px] bg-[var(--accent-color)] z-0 origin-left scale-x-0"></div>

        <div v-for="(step, idx) in sequenceSteps" :key="idx" class="process-card relative z-10 flex-1 group">
          <div class="flex lg:flex-col items-center lg:items-start gap-6 lg:gap-0">
            <div
              :class="[
                'w-12 h-12 rounded flex items-center justify-center font-mono font-bold text-xs group-hover:border-[var(--accent-color)] group-hover:text-[var(--accent-color)] transition-all duration-500 shadow-xl lg:mb-6 flex-shrink-0 border',
                isDarkMode ? 'bg-black border-neutral-800 text-neutral-500' : 'bg-white border-neutral-300 text-neutral-500'
              ]"
            >
              0{{ idx + 1 }}
            </div>
            <div>
              <h3 :class="['text-lg font-bold mb-2 tracking-tight group-hover:text-[var(--accent-color)] transition-colors', isDarkMode ? 'text-white' : 'text-black']">
                {{ step.title }}
              </h3>
              <p :class="['text-xs md:text-sm leading-relaxed max-w-sm', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
                {{ step.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = inject('isDarkMode', ref(true))
const processContainer = ref(null)
const processLineFiller = ref(null)

const sequenceSteps = [
  { title: 'Discovery & Analysis', desc: 'Review active legacy platforms and core architectural mandates.' },
  { title: 'Integration Architecture', desc: 'Design secure multi-tier data mapping maps and system models.' },
  { title: 'Development', desc: 'Write precise custom connector APIs and transaction logic hooks.' },
  { title: 'Testing & Validation', desc: 'Verify pipeline payload structural accuracy and edge recovery safety.' },
  { title: 'Deployment', desc: 'Launch complete integration pipelines with zero runtime operational delay.' },
  { title: 'Monitoring & Support', desc: 'Provide continuous log tracking and network infrastructure updates.' }
]

let triggers = []

onMounted(() => {
  const lineAnim = gsap.fromTo(processLineFiller.value, { scaleX: 0 }, {
    scaleX: 1, ease: 'none',
    scrollTrigger: {
      trigger: processContainer.value,
      start: 'top 70%', end: 'bottom 60%', scrub: true
    }
  })
  if (lineAnim.scrollTrigger) triggers.push(lineAnim.scrollTrigger)

  const processCards = processContainer.value.querySelectorAll('.process-card')
  processCards.forEach((card) => {
    const cardAnim = gsap.fromTo(card, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: card, start: 'top 85%' }
    })
    if (cardAnim.scrollTrigger) triggers.push(cardAnim.scrollTrigger)
  })
})

onUnmounted(() => {
  triggers.forEach(t => t.kill())
})
</script>

<style scoped>
.theme-dark { --accent-color: #00ffa3; }
.theme-light { --accent-color: #f97316; }

.accent-text { color: var(--accent-color); }
</style>