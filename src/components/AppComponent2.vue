<template>
  <section :class="[
    'py-16 px-4 sm:py-20 sm:px-6 md:py-24 lg:py-24 xl:py-28 2xl:py-32 border-b relative z-20',
    isDarkMode ? 'border-neutral-900' : 'border-neutral-200'
  ]">
    <div class="max-w-7xl mx-auto">
      <h2 :class="[
        'text-center text-xs sm:text-sm xl:text-base font-bold tracking-widest uppercase mb-10 sm:mb-12 md:mb-16 xl:mb-20',
        isDarkMode ? 'text-neutral-500' : 'text-neutral-400'
      ]">
        Trusted By Startups & Growing Businesses
      </h2>
      <div ref="counterContainer"
        class="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-8 md:gap-10 xl:gap-12 2xl:gap-16 text-center">
        <div v-for="(stat, idx) in stats" :key="idx" class="space-y-1 sm:space-y-2">
          <div
            :class="['text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-black tracking-tight', isDarkMode ? 'text-[#00ffa3]' : 'text-black']">
            <span class="trust-counter" :data-target="stat.value">0</span>{{ stat.suffix }}
          </div>
          <p :class="[
            'text-xs sm:text-sm md:text-sm xl:text-lg font-medium tracking-wide uppercase whitespace-nowrap',
            isDarkMode ? 'text-neutral-400' : 'text-neutral-500'
          ]">{{ stat.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import { gsap } from 'gsap'

const isDarkMode = inject('isDarkMode', ref(true))

const counterContainer = ref(null)
const stats = [
  { value: 150, suffix: '+', label: 'Mobile Features Delivered' },
  { value: 50, suffix: '+', label: 'Apps Developed' },
  { value: 95, suffix: '%', label: 'Client Satisfaction' },
  { value: 500, suffix: 'K+', label: 'End Users Reached' }
]

onMounted(() => {
  const trustCounters = document.querySelectorAll('.trust-counter')
  trustCounters.forEach((counter) => {
    const targetVal = parseInt(counter.getAttribute('data-target'), 10)
    gsap.fromTo(counter, { textContent: 0 }, {
      textContent: targetVal,
      duration: 2.5,
      ease: 'power3.out',
      snap: { textContent: 1 },
      scrollTrigger: { trigger: counterContainer.value, start: 'top 85%' }
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
   Very Large Desktops / Big TVs: 1920px and up
   Keeps scaling instead of plateauing at the 2xl (1536px) tier, so numbers
   stay legible relative to a much larger viewport / viewing distance.
   ========================================================================== */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 1750px !important;
  }

  section.border-b {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }

  .xl\:text-6xl {
    font-size: 4.5rem;
  }

  .xl\:text-lg {
    font-size: 1.25rem;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   padding, and stat numbers growing proportionally instead of looking
   undersized.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2050px !important;
  }

  section.border-b {
    padding-top: 9rem;
    padding-bottom: 9rem;
  }

  .xl\:text-6xl {
    font-size: 5.25rem;
  }

  .xl\:text-lg {
    font-size: 1.4rem;
  }

  .xl\:gap-12 {
    gap: 3.5rem;
  }
}
</style>