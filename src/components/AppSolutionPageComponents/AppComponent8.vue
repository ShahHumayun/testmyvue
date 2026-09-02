<template>
  <section :class="[
    'py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8 lg:py-32 xl:py-36 xl:px-12 2xl:py-40 2xl:px-16 border-b relative z-20 transition-colors duration-400',
    isDarkMode ? 'bg-[#1c1c1c] border-neutral-900' : 'bg-[#f2f2f2] border-neutral-200'
  ]">
    <div class="max-w-7xl mx-auto">
      <h2
        :class="['section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight mb-12 sm:mb-16 md:mb-20 xl:mb-24 text-center', isDarkMode ? 'text-white' : 'text-black']">
        Features That
        <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Users Expect</span>
      </h2>
      <div ref="featuresGrid"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 xl:gap-7 2xl:gap-8">
        <div v-for="(feat, idx) in featureCards" :key="idx" :class="[
          'feature-node border rounded-xl p-5 sm:p-6 xl:p-7 2xl:p-8 transition-all duration-300',
          isDarkMode
            ? 'bg-neutral-950 border-neutral-900 hover:bg-neutral-950/40 hover:border-neutral-800'
            : 'bg-neutral-50 border-neutral-200 hover:bg-neutral-100 hover:border-orange-200'
        ]">
          <h3
            :class="['feature-title text-sm sm:text-base xl:text-lg 2xl:text-xl font-bold tracking-tight', isDarkMode ? 'text-white' : 'text-black']">
            {{ feat }}</h3>
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
const featuresGrid = ref(null)

const featureCards = [
  'Secure Authentication', 'Push Notifications', 'Real-Time Messaging', 'Payment Gateway Integration',
  'Cloud Synchronization', 'Advanced Analytics', 'GPS & Maps Integration', 'Offline Functionality'
]

onMounted(() => {
  const featureNodes = featuresGrid.value.querySelectorAll('.feature-node')
  featureNodes.forEach((node, idx) => {
    const xVector = idx % 2 === 0 ? -40 : 40
    gsap.fromTo(node, { opacity: 0, x: xVector }, {
      opacity: 1, x: 0, duration: 0.8, ease: 'power2.out',
      scrollTrigger: { trigger: node, start: 'top 90%' }
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
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
  section.border-b {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }

  .feature-node {
    padding: 1.1rem;
  }

  .feature-title {
    font-size: 0.85rem;
  }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Tailwind's own scale tops out at 2xl (1536px), so everything below is
   already handled by the responsive classes above. This tier keeps the
   heading, card padding, and feature titles growing further instead of
   plateauing at 1536px.
   ========================================================================== */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 1750px !important;
  }

  .section-heading {
    font-size: 4.75rem;
  }

  .feature-node {
    padding: 2.25rem;
  }

  .feature-title {
    font-size: 1.35rem;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   cards, and titles growing proportionally instead of looking undersized.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2050px !important;
  }

  .section-heading {
    font-size: 5.25rem;
  }

  .feature-node {
    padding: 2.6rem;
  }

  .feature-title {
    font-size: 1.5rem;
  }
}
</style>