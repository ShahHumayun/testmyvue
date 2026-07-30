<template>
  <section
    :class="['services-section py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8 lg:py-32 xl:py-36 xl:px-12 2xl:py-40 2xl:px-16 border-b relative z-20 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2
        class="section-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight mb-12 sm:mb-16 md:mb-20 xl:mb-24 text-center max-w-3xl mx-auto services-heading">
        Custom Web Applications Built For <span class="accent-text">Modern Businesses</span>
      </h2>
      <div ref="servicesGrid"
        class="services-grid grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6 xl:gap-8 2xl:gap-10">
        <div v-for="(service, idx) in services" :key="idx"
          class="group relative service-card rounded-2xl p-5 sm:p-6 md:p-7 xl:p-9 2xl:p-10 transition-all duration-500 cursor-pointer overflow-hidden">
          <div
            class="service-glow absolute -right-16 -top-16 w-32 h-32 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 service-card-aura rounded-full blur-2xl transition-all duration-500">
          </div>
          <div
            class="service-icon-wrap w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-xl flex items-center justify-center mb-4 sm:mb-5 md:mb-6 xl:mb-7 service-icon-box transition-colors duration-300">
            <component :is="service.icon"
              class="service-icon w-5 h-5 md:w-6 md:h-6 xl:w-7 xl:h-7 2xl:w-8 2xl:h-8 accent-text transition-transform duration-500 group-hover:rotate-12" />
          </div>
          <h3
            class="service-title-text text-lg md:text-xl xl:text-2xl 2xl:text-3xl font-bold mb-2 sm:mb-3 tracking-tight transition-colors duration-300 service-title">
            {{ service.title }}
          </h3>
          <p class="service-desc-text leading-relaxed text-sm xl:text-base 2xl:text-lg service-description">
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

const IconGrid = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25A2.25 2.25 0 0 1 13.5 8.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 17.25v-2.25Z' })])
const IconUsers = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z' })])
const IconLayers = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M6.429 9.75 2.25 12l4.179 2.25m11.142 0L21.75 12l-4.179-2.25M12 5.75 6.429 8.75 12 11.75l5.571-3L12 5.75Zm0 12.5-5.571-3L12 18.25l5.571-3-5.571 3Z' })])
const IconCpu = () => h('svg', { fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor', 'stroke-width': '1.5' }, [h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', d: 'M8.25 3v1.5M4.5 8.25H3m1.5 7.5H3m15-7.5h1.5m-1.5 7.5h1.5m-11.25 3.75V21m3.75-18v1.5m0 15V21m3.75-18v1.5m0 15V21m3.75-18V4.5M19.5 8.25a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 8.25v7.5A1.5 1.5 0 0 0 6 17.25h12a1.5 1.5 0 0 0 1.5-1.5v-7.5Zm-12 1.5h7.5v4.5h-7.5v-4.5Z' })])

const services = [
  { title: 'Business Management Systems', description: 'Custom dashboards, portals, reporting systems and workflow automation.', icon: IconGrid },
  { title: 'Customer Portals', description: 'Secure customer platforms that improve engagement and retention.', icon: IconUsers },
  { title: 'Enterprise Solutions', description: 'Scalable software built for growing organizations.', icon: IconLayers },
  { title: 'SaaS Platforms', description: 'Subscription-based products designed for rapid growth.', icon: IconCpu }
]

onMounted(() => {
  if (servicesGrid.value) {
    gsap.fromTo(servicesGrid.value.children,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: servicesGrid.value, start: 'top 80%' } }
    )
  }
})
</script>

<style scoped>
.theme-dark {
  --accent-color: #00ffa3;
  --card-bg: #0a0a0a;
  --card-border: #171717;
  --card-aura: rgba(0, 255, 163, 0.05);
  --card-aura-hover: rgba(0, 255, 163, 0.1);
  --shadow-hover: rgba(0, 255, 163, 0.05);
  --title-color: #ffffff;
  --desc-color: #ffffff;
  --icon-box-bg: #111111;
  --icon-box-border: #222222;
}

.theme-light {
  --accent-color: #f97316;
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --card-aura: rgba(249, 115, 22, 0.02);
  --card-aura-hover: rgba(249, 115, 22, 0.06);
  --shadow-hover: rgba(249, 115, 22, 0.15);
  --title-color: #0f172a;
  --desc-color: #475569;
  --icon-box-bg: #f8fafc;
  --icon-box-border: #cbd5e1;
}

.accent-text {
  color: var(--accent-color);
}

.services-heading {
  color: var(--title-color);
}

/* CHANGED: colour-only update — this section now uses the same alternating
   background pair as the full-bleed sections on services.vue / culture.vue
   (#1c1c1c on dark, #f2f2f2 on light) instead of pure #000/#fff, so it
   reads as a distinct "light grey on white / light black on black" band
   rather than blending into the page background. Nothing else (layout,
   card variables, spacing, borders elsewhere) touched. */
.theme-dark {
  background-color: #1c1c1c;
  border-color: #171717;
}

.theme-light {
  background-color: #f2f2f2;
  border-color: #e2e8f0;
}

.service-card {
  background-color: var(--card-bg);
  border: 1px solid var(--card-border);
}

.service-card:hover {
  border-color: var(--accent-color) !important;
  box-shadow: 0 0 30px var(--shadow-hover) !important;
}

.service-card-aura {
  background-color: var(--card-aura);
}

.service-card:hover .service-card-aura {
  background-color: var(--card-aura-hover);
}

.service-icon-box {
  background-color: var(--icon-box-bg);
  border: 1px solid var(--icon-box-border);
}

.service-card:hover .service-icon-box {
  border-color: var(--accent-color);
}

.service-title {
  color: var(--title-color);
}

.service-description {
  color: var(--desc-color);
}

.service-card:hover .service-title {
  color: var(--accent-color);
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
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
  section.services-section {
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

  .service-title-text {
    font-size: 1.05rem;
  }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Tailwind's own scale tops out at 2xl (1536px), so everything below is
   already handled by the responsive classes above. This tier keeps the
   container, heading, cards, and icons growing further instead of
   plateauing at 1536px, and keeps the container filling ~92% of the
   screen instead of narrowing its proportion.
   ========================================================================== */
@media (min-width: 1920px) {
  .max-w-7xl {
    max-width: 1820px !important;
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

  .service-title-text {
    font-size: 2rem;
  }

  .service-desc-text {
    font-size: 1.2rem;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   cards, icons, and type growing proportionally instead of looking
   undersized, and keeps the container filling ~92% of the screen instead
   of narrowing its proportion.
   ========================================================================== */
@media (min-width: 2560px) {
  .max-w-7xl {
    max-width: 2350px !important;
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

  .service-title-text {
    font-size: 2.25rem;
  }

  .service-desc-text {
    font-size: 1.3rem;
  }
}
</style>