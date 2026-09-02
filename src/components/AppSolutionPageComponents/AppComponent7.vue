<template>
  <section :class="[
    'py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8 lg:py-32 xl:py-36 xl:px-12 2xl:py-40 2xl:px-16 border-b relative z-20',
    isDarkMode ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
  ]">
    <div class="max-w-7xl mx-auto">
      <h2
        :class="['section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight mb-12 sm:mb-16 md:mb-20 xl:mb-24 text-center', isDarkMode ? 'text-white' : 'text-black']">
        Modern Technologies For
        <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Future-Ready Apps</span>
      </h2>

      <div ref="techGrid" class="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 xl:gap-16 2xl:gap-20">
        <div v-for="(cat, idx) in techStack" :key="idx" class="flex flex-col items-center">
          <h3 :class="[
            'category-title text-xs sm:text-sm xl:text-base font-bold tracking-[0.2em] uppercase mb-6 sm:mb-8 pb-3 sm:pb-4 border-b whitespace-nowrap',
            isDarkMode ? 'text-[#00ffa3] border-neutral-800' : 'text-[#f97316] border-neutral-200'
          ]">
            {{ cat.category }}
          </h3>

          <ul class="tech-list w-full space-y-3 sm:space-y-4">
            <li v-for="(tech, tIdx) in cat.items" :key="tIdx"
              :class="['group flex items-center gap-4 font-medium cursor-default', isDarkMode ? 'text-neutral-300' : 'text-neutral-700']">
              <div class="w-6 flex justify-center">
                <span :class="[
                  'tech-dot w-2 h-2 rounded-full transition-all duration-300',
                  isDarkMode
                    ? 'bg-neutral-800 group-hover:bg-[#00ffa3] group-hover:shadow-[0_0_8px_#00ffa3]'
                    : 'bg-neutral-300 group-hover:bg-[#f97316] group-hover:shadow-[0_0_8px_#f97316]'
                ]"></span>
              </div>

              <span
                :class="['tech-item-text text-sm sm:text-base xl:text-lg 2xl:text-xl transition-colors', isDarkMode ? 'group-hover:text-white' : 'group-hover:text-black']">
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

/* Each column's list — originally a fixed max-w-[200px], kept unchanged
   at every breakpoint below; only widens slightly at 2560px+ to match
   the larger list-item text at that tier. */
.tech-list {
  max-width: 200px;
}

/* ==========================================================================
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
  section.border-b {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }

  .category-title {
    font-size: 0.68rem;
    margin-bottom: 1.25rem;
  }

  .tech-item-text {
    font-size: 0.85rem;
  }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Tailwind's own scale tops out at 2xl (1536px), so everything below is
   already handled by the responsive classes above. This tier keeps the
   heading, category titles, and list items growing further instead of
   plateauing at 1536px.
   ========================================================================== */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 1750px !important;
  }

  .section-heading {
    font-size: 4.75rem;
  }

  .category-title {
    font-size: 1.05rem;
  }

  .tech-item-text {
    font-size: 1.3rem;
  }

  .tech-dot {
    width: 0.6rem;
    height: 0.6rem;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   category titles, and list items growing proportionally instead of
   looking undersized.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2050px !important;
  }

  .section-heading {
    font-size: 5.25rem;
  }

  .category-title {
    font-size: 1.15rem;
  }

  .tech-list {
    max-width: 230px;
  }

  .tech-item-text {
    font-size: 1.4rem;
  }

  .tech-dot {
    width: 0.7rem;
    height: 0.7rem;
  }
}
</style>