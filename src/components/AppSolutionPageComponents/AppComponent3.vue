<template>
  <section :class="[
    'py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8 lg:py-32 xl:py-36 xl:px-12 2xl:py-40 2xl:px-16 border-b relative z-20',
    isDarkMode ? 'border-neutral-900 bg-black' : 'border-neutral-200 bg-white'
  ]">
    <div class="max-w-7xl mx-auto">
      <h2 :class="[
        'section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight mb-12 sm:mb-16 md:mb-20 xl:mb-24 2xl:mb-28 text-center max-w-3xl mx-auto',
        isDarkMode ? 'text-white' : 'text-black'
      ]">
        Mobile Solutions
        <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Built For Growth</span>
      </h2>
      <div ref="servicesGrid"
        class="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 xl:gap-8 2xl:gap-10">
        <div v-for="(service, idx) in services" :key="idx" :class="[
          'service-card group relative rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 xl:p-9 2xl:p-10 transition-all duration-500 cursor-pointer overflow-hidden border',
          isDarkMode
            ? 'bg-neutral-950 border-neutral-900 hover:border-[#00ffa3]/50 hover:shadow-[0_0_30px_rgba(0,255,163,0.05)]'
            : 'bg-neutral-50 border-neutral-200 hover:border-[#f97316]/50 hover:shadow-[0_0_30px_rgba(249,115,22,0.05)]'
        ]">
          <div
            :class="['service-glow absolute -right-16 -top-16 w-32 h-32 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 rounded-full blur-2xl group-hover:transition-all duration-500', isDarkMode ? 'bg-[#00ffa3]/5 group-hover:bg-[#00ffa3]/10' : 'bg-[#f97316]/5 group-hover:bg-[#f97316]/10']">
          </div>

          <div :class="[
            'service-icon-wrap w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 xl:mb-7 transition-colors duration-300 border',
            isDarkMode ? 'bg-neutral-900 border-neutral-800 group-hover:border-[#00ffa3]/30' : 'bg-white border-neutral-200 group-hover:border-[#f97316]/30'
          ]">
            <component :is="service.icon"
              :class="['service-icon w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 transition-transform duration-500 group-hover:rotate-12', isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]']" />
          </div>

          <h3 :class="[
            'service-title text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-bold mb-2 sm:mb-3 tracking-tight transition-colors duration-300',
            isDarkMode
              ? 'text-white group-hover:text-[#00ffa3]'
              : 'text-black group-hover:text-[#f97316]'
          ]">
            {{ service.title }}
          </h3>
          <p
            :class="['service-desc leading-relaxed text-sm xl:text-base 2xl:text-lg', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
            {{ service.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, h, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = inject('isDarkMode', ref(true))
const servicesGrid = ref(null)

// Generic icon helper to allow dynamic color styling via parent component class
const createIcon = (dPaths) => () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' },
  dPaths.map(d => h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d }))
)

const IconIos = createIcon(['M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z', 'M12 6v12M8 10h8M9 14h6'])
const IconAndroid = createIcon(['M7 11V7a5 5 0 0110 0v4M5 11h14v6a4 4 0 01-4 4H9a4 4 0 01-4-4v-6z', 'M9 15h.01M15 15h.01M8 3l1.5 2M16 3l-1.5 2'])
const IconCrossPlatform = createIcon(['M20 7h-9m0 0l3-3m-3 3l3 3M4 17h9m0 0l-3 3m3-3l-3-3M4 7a3 3 0 013-3M20 17a3 3 0 01-3 3'])
const IconEnterprise = createIcon(['M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5'])
const IconOnDemand = createIcon(['M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'])
const IconMvc = createIcon(['M13 10V3L4 14h7v7l9-11h-7z'])

const services = [
  { title: 'iOS App Development', description: 'High-performance applications built specifically for Apple devices.', icon: IconIos },
  { title: 'Android App Development', description: 'Scalable Android applications optimized for performance and usability.', icon: IconAndroid },
  { title: 'Cross Platform Development', description: 'Single codebase solutions using modern frameworks.', icon: IconCrossPlatform },
  { title: 'Enterprise Mobile Applications', description: 'Powerful business applications for internal operations and productivity.', icon: IconEnterprise },
  { title: 'On-Demand Applications', description: 'Taxi, delivery, booking and service marketplace applications.', icon: IconOnDemand },
  { title: 'Startup MVP Development', description: 'Launch quickly and validate your idea faster.', icon: IconMvc }
]

onMounted(() => {
  if (servicesGrid.value) {
    gsap.fromTo(servicesGrid.value.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: servicesGrid.value, start: 'top 80%' }
      }
    )
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

/* ==========================================================================
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
  section.border-b {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }

  .service-card {
    padding: 1.1rem;
  }

  .service-icon-wrap {
    width: 2.25rem;
    height: 2.25rem;
  }

  .service-title {
    font-size: 1.05rem;
  }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Tailwind's own scale tops out at 2xl (1536px), so everything below is
   already handled by the responsive classes above. These two tiers keep
   the heading, cards, icons, and gaps growing further instead of
   plateauing at 1536px.
   ========================================================================== */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 1750px !important;
  }

  .section-heading {
    font-size: 5rem;
  }

  .services-grid {
    gap: 3rem;
  }

  .service-card {
    padding: 3rem;
  }

  .service-glow {
    width: 13rem;
    height: 13rem;
  }

  .service-icon-wrap {
    width: 4.5rem;
    height: 4.5rem;
  }

  .service-icon {
    width: 2.25rem;
    height: 2.25rem;
  }

  .service-title {
    font-size: 2rem;
  }

  .service-desc {
    font-size: 1.2rem;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   cards, icons, and type growing proportionally instead of looking
   undersized.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2050px !important;
  }

  .section-heading {
    font-size: 5.75rem;
  }

  .services-grid {
    gap: 3.5rem;
  }

  .service-card {
    padding: 3.5rem;
  }

  .service-glow {
    width: 14rem;
    height: 14rem;
  }

  .service-icon-wrap {
    width: 5rem;
    height: 5rem;
  }

  .service-icon {
    width: 2.5rem;
    height: 2.5rem;
  }

  .service-title {
    font-size: 2.25rem;
  }

  .service-desc {
    font-size: 1.3rem;
  }
}
</style>