<template>
  <section :class="[
    'py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8 lg:py-32 xl:py-36 xl:px-12 2xl:py-40 2xl:px-16 border-b relative z-20',
    isDarkMode ? 'border-neutral-900' : 'border-neutral-200'
  ]">
    <div class="max-w-7xl mx-auto">
      <h2 :class="[
        'section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight mb-14 sm:mb-18 md:mb-20 lg:mb-24 xl:mb-28 text-center',
        isDarkMode ? 'text-white' : 'text-black'
      ]">
        How We Turn Ideas
        <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Into Successful Apps</span>
      </h2>
      <div ref="processTimeline"
        class="relative block lg:flex items-start justify-between gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 space-y-10 lg:space-y-0">
        <div
          :class="['timeline-track hidden lg:block absolute left-0 right-0 h-[2px] z-0', isDarkMode ? 'bg-neutral-900' : 'bg-neutral-200']">
        </div>
        <div ref="timelineProgress" :class="[
          'timeline-progress hidden lg:block absolute left-0 h-[2px] z-0 transform-origin-left scale-x-0 bg-gradient-to-r',
          isDarkMode ? 'from-emerald-500 to-[#00ffa3]' : 'from-orange-400 to-[#f97316]'
        ]"></div>

        <div v-for="(step, idx) in processSteps" :key="idx" class="process-card relative z-10 flex-1 group">
          <div class="flex lg:flex-col items-center lg:items-start gap-5 sm:gap-6 lg:gap-0">
            <div :class="[
              'step-circle w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-mono font-bold transition-all duration-500 shadow-xl lg:mb-6 flex-shrink-0 border-2',
              isDarkMode
                ? 'bg-neutral-950 border-neutral-800 text-neutral-500 group-hover:border-[#00ffa3] group-hover:text-[#00ffa3]'
                : 'bg-neutral-50 border-neutral-300 text-neutral-500 group-hover:border-[#f97316] group-hover:text-[#f97316]'
            ]">
              0{{ idx + 1 }}
            </div>
            <div>
              <h3 :class="[
                'step-title text-base sm:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2 tracking-tight transition-colors',
                isDarkMode
                  ? 'text-white group-hover:text-[#00ffa3]'
                  : 'text-black group-hover:text-[#f97316]'
              ]">
                {{ step.title }}
              </h3>
              <p
                :class="['step-desc text-sm xl:text-base 2xl:text-lg leading-relaxed max-w-sm', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
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

<style scoped>
/* ==========================================================================
   Outer content container: scales fluidly with viewport width instead of
   jumping between fixed breakpoint values. !important guarantees this wins
   even if the project's global Tailwind stylesheet loads after this
   component's scoped styles.
   ========================================================================== */
.max-w-7xl {
  max-width: clamp(320px, 94vw, 1500px) !important;
}

/* ==========================================================================
   Timeline track + progress line — vertically centered on the step
   circle. The circle is 56px tall (w-14/h-14) at lg and up, so the line
   sits at 27px from the top of the row (half the circle height, nudged
   1px for optical alignment with the 2px border). This position only
   needs to change if the circle itself grows — which only happens at
   the 2560px+ tier below.
   ========================================================================== */
.timeline-track,
.timeline-progress {
  top: 27px;
}

/* ==========================================================================
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
  section.border-b {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }

  .section-heading {
    margin-bottom: 2.5rem;
  }

  .step-circle {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 0.85rem;
  }

  .step-title {
    font-size: 0.95rem;
  }

  .step-desc {
    font-size: 0.8rem;
  }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Tailwind's own scale tops out at 2xl (1536px), so everything below is
   already handled by the responsive classes above. This tier keeps the
   heading, step titles, and descriptions growing further instead of
   plateauing at 1536px. The step circle and timeline line stay at their
   original fixed size here too — only 2560px+ changes those.
   ========================================================================== */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 1750px !important;
  }

  .section-heading {
    font-size: 4.75rem;
  }

  .step-title {
    font-size: 1.5rem;
  }

  .step-desc {
    font-size: 1.15rem;
    max-width: 26rem;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   This is the ONLY breakpoint where the step circle grows beyond its
   original fixed design size — every other breakpoint above and below
   this keeps it completely unchanged. The timeline line position is
   nudged to match the larger circle's new center point.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2050px !important;
  }

  .section-heading {
    font-size: 5.25rem;
  }

  .step-circle {
    width: 4rem;
    height: 4rem;
    font-size: 1.1rem;
  }

  .timeline-track,
  .timeline-progress {
    top: 31px;
  }

  .step-title {
    font-size: 1.65rem;
  }

  .step-desc {
    font-size: 1.25rem;
    max-width: 28rem;
  }
}
</style>