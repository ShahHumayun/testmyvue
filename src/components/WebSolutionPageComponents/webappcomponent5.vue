<template>
  <section
    :class="['process-section py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8 lg:py-32 xl:py-36 xl:px-12 2xl:py-40 2xl:px-16 border-b relative z-20 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2
        class="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight mb-14 sm:mb-18 md:mb-20 lg:mb-24 xl:mb-28 text-center process-heading">
        Our <span class="accent-text">Development Process</span>
      </h2>
      <div ref="processTimeline"
        class="relative block lg:flex items-start justify-between gap-6 lg:gap-8 xl:gap-10 2xl:gap-12 space-y-10 lg:space-y-0">
        <div class="timeline-track hidden lg:block absolute left-0 right-0 h-[2px] timeline-track-bg z-0"></div>
        <div ref="timelineProgress"
          class="timeline-progress hidden lg:block absolute left-0 right-0 h-[2px] timeline-progress-fill z-0 transform-origin-left scale-x-0">
        </div>

        <div v-for="(step, idx) in processSteps" :key="idx" class="process-step relative z-10 flex-1 group">
          <div class="flex lg:flex-col items-center lg:items-start gap-5 sm:gap-6 lg:gap-0">
            <div
              class="step-node step-circle w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center font-mono font-bold transition-all duration-500 shadow-xl lg:mb-6 flex-shrink-0">
              0{{ idx + 1 }}
            </div>
            <div>
              <h3
                class="step-title-text text-base sm:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2 tracking-tight step-title transition-colors duration-300">
                {{ step.title }}
              </h3>
              <p class="step-desc-text text-sm xl:text-base 2xl:text-lg leading-relaxed max-w-sm step-description">
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
/* Theme variable definitions */
.theme-dark {
  --accent-color: #00ffa3;
}

.theme-light {
  --accent-color: #f97316;
}

.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --heading-color: #ffffff;
  --track-bg: #171717;
  --node-bg: #0a0a0a;
  --node-border: #262626;
  --node-text: #737373;
  --title-color: #ffffff;
  --desc-color: #a3a3a3;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --heading-color: #0f172a;
  --track-bg: #e2e8f0;
  --node-bg: #ffffff;
  --node-border: #cbd5e1;
  --node-text: #64748b;
  --title-color: #0f172a;
  --desc-color: #475569;
}

.accent-text {
  color: var(--accent-color);
}

.process-heading {
  color: var(--heading-color) !important;
}

.timeline-track-bg {
  background-color: var(--track-bg) !important;
}

.timeline-progress-fill {
  background-color: var(--accent-color) !important;
}

.step-node {
  background-color: var(--node-bg) !important;
  border: 2px solid var(--node-border) !important;
  color: var(--node-text) !important;
}

.process-step:hover .step-node {
  border-color: var(--accent-color) !important;
  color: var(--accent-color) !important;
}

.step-title {
  color: var(--title-color) !important;
}

.process-step:hover .step-title {
  color: var(--accent-color) !important;
}

.step-description {
  color: var(--desc-color) !important;
}

/* ==========================================================================
   Outer content container: scales fluidly with viewport width instead of
   jumping between fixed breakpoint values, and fills a consistent ~92-94%
   of the screen at every tier — including the two large-screen overrides
   below — instead of narrowing its proportion the bigger the screen gets.
   !important guarantees this wins even if the project's global Tailwind
   stylesheet loads after this component's scoped styles.
   ========================================================================== */
.max-w-7xl {
  max-width: clamp(320px, 94vw, 1500px) !important;
}

/* ==========================================================================
   Timeline track + progress line — vertically centered on the step
   circle. The circle is 56px tall (w-14/h-14) at lg and up, so the line
   sits at 27px from the top of the row (half the circle height). This
   position only needs to change if the circle itself grows — which only
   happens at the 2560px+ tier below.
   ========================================================================== */
.timeline-track,
.timeline-progress {
  top: 27px;
}

/* ==========================================================================
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
  section.process-section {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }

  .section-heading {
    margin-bottom: 2.5rem;
  }

  .step-node {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 0.85rem;
  }

  .step-title-text {
    font-size: 0.95rem;
  }

  .step-desc-text {
    font-size: 0.8rem;
  }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Tailwind's own scale tops out at 2xl (1536px), so everything below is
   already handled by the responsive classes above. This tier keeps the
   heading, step titles, and descriptions growing further instead of
   plateauing at 1536px, and keeps the container filling ~92% of the
   screen instead of narrowing its proportion. The step node and timeline
   line stay at their original fixed size here too — only 2560px+ changes
   those.
   ========================================================================== */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 1820px !important;
  }

  .section-heading {
    font-size: 4.75rem;
  }

  .step-title-text {
    font-size: 1.5rem;
  }

  .step-desc-text {
    font-size: 1.15rem;
    max-width: 26rem;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   This is the ONLY breakpoint where the step node grows beyond its
   original fixed design size — every other breakpoint above and below
   this keeps it completely unchanged. The timeline line position is
   nudged to match the larger node's new center point, and the container
   keeps filling ~92% of the screen instead of narrowing its proportion.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2350px !important;
  }

  .section-heading {
    font-size: 5.25rem;
  }

  .step-node {
    width: 4rem;
    height: 4rem;
    font-size: 1.1rem;
  }

  .timeline-track,
  .timeline-progress {
    top: 31px;
  }

  .step-title-text {
    font-size: 1.65rem;
  }

  .step-desc-text {
    font-size: 1.25rem;
    max-width: 28rem;
  }
}
</style>