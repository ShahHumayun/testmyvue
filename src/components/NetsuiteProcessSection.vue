<template>
  <!-- 7. OUR INTEGRATION PROCESS -->
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center mb-24">
        Our Proven <span class="text-[#00ffa3]">Integration Methodology</span>
      </h2>

      <div ref="processContainer" class="relative block lg:flex items-start justify-between gap-6 space-y-12 lg:space-y-0">
        <!-- Central Connecting Sequence Timeline Wire -->
        <div class="hidden lg:block absolute top-[23px] left-0 right-0 h-[1px] bg-neutral-900 z-0"></div>
        <div ref="processLineFiller" class="hidden lg:block absolute top-[23px] left-0 h-[1px] bg-[#00ffa3] z-0 origin-left scale-x-0"></div>

        <div v-for="(step, idx) in sequenceSteps" :key="idx" class="process-card relative z-10 flex-1 group">
          <div class="flex lg:flex-col items-center lg:items-start gap-6 lg:gap-0">
            <div class="w-12 h-12 rounded bg-black border border-neutral-800 flex items-center justify-center font-mono font-bold text-xs text-neutral-500 group-hover:border-[#00ffa3] group-hover:text-[#00ffa3] transition-all duration-500 shadow-xl lg:mb-6 flex-shrink-0">
              0{{ idx + 1 }}
            </div>
            <div>
              <h3 class="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#00ffa3] transition-colors">
                {{ step.title }}
              </h3>
              <p class="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-sm">
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
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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
  // Methodology Sequential Process Connecting Filler Wire Progression
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