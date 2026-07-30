<template>
  <section
    :class="['benefits-section py-16 px-5 sm:py-20 sm:px-6 md:py-24 md:px-8 lg:py-28 lg:px-10 xl:px-12 2xl:py-36 2xl:px-16 border-b relative z-20 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto benefits-container">
      <h2
        class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-bold tracking-tight mb-12 sm:mb-16 md:mb-20 text-center benefits-heading">
        Benefits Of <span class="accent-text">Custom Web Applications</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 2xl:gap-12">
        <div v-for="(benefit, idx) in benefits" :key="idx"
          class="benefit-card p-6 sm:p-8 lg:p-10 2xl:p-12 rounded-2xl flex flex-col justify-between group transition-colors duration-300">
          <div class="space-y-4">
            <span class="text-xs sm:text-sm 2xl:text-base font-mono step-index transition-colors duration-300">0{{ idx +
              1 }}.</span>
            <h3 class="text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl font-bold tracking-tight benefit-title">{{
              benefit.title }}</h3>
            <p class="text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl benefit-description">{{
              benefit.description }}</p>
          </div>
          <div class="pt-8 flex justify-end">
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center arrow-circle opacity-0 group-hover:opacity-100 transition-all duration-300">
              <svg class="w-4 h-4 accent-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, inject, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = inject('isDarkMode', ref(true))

const benefits = [
  { title: 'Business Automation', description: 'Reduce manual work and improve efficiency.' },
  { title: 'Better Customer Experience', description: 'Deliver seamless digital interactions.' },
  { title: 'Data Driven Decisions', description: 'Gain valuable insights through analytics.' },
  { title: 'Scalable Growth', description: 'Grow without limitations.' }
]

onMounted(() => {
  const cards = document.querySelectorAll('.benefit-card')
  cards.forEach((card, idx) => {
    const direction = idx % 2 === 0 ? -60 : 60
    gsap.fromTo(card,
      { opacity: 0, x: direction },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power4.out',
        scrollTrigger: { trigger: card, start: 'top 85%' }
      }
    )
  })
})
</script>

<style scoped>
/* Theme variable mapping */
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
  --card-bg: linear-gradient(to bottom, #0a0a0a, #000000) !important;
  --card-border: #171717;
  --card-border-hover: #262626;
  --index-color: #404040;
  --title-color: #ffffff;
  --desc-color: #a3a3a3;
  --arrow-bg: #171717;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --heading-color: #0f172a;
  --card-bg: #ffffff !important;
  --card-border: #e2e8f0;
  --card-border-hover: #cbd5e1;
  --index-color: #94a3b8;
  --title-color: #0f172a;
  --desc-color: #475569;
  --arrow-bg: #f1f5f9;
}

/* The section itself is a full-width block element with no max-width,
   so it already spans 100% of the viewport at every breakpoint —
   only the inner content container below is ever width-capped. */
.benefits-section {
  width: 100%;
}

.accent-text {
  color: var(--accent-color);
}

.benefits-heading {
  color: var(--heading-color) !important;
}

.benefit-card {
  background: var(--card-bg) !important;
  border: 1px solid var(--card-border) !important;
}

.benefit-card:hover {
  border-color: var(--card-border-hover) !important;
}

.step-index {
  color: var(--index-color) !important;
}

.benefit-card:hover .step-index {
  color: var(--accent-color) !important;
}

.benefit-title {
  color: var(--title-color) !important;
}

.benefit-description {
  color: var(--desc-color) !important;
}

.arrow-circle {
  background-color: var(--arrow-bg) !important;
}

.benefit-card:hover .arrow-circle {
  background-color: color-mix(in srgb, var(--accent-color), transparent 90%) !important;
}

/* =========================================================================
   BREAKPOINT TIERS
   Base sizing (mobile through 1536px) is handled via the responsive
   Tailwind utility classes in the template (sm/md/lg/xl/2xl). This block
   covers what Tailwind's default scale doesn't reach — the true 4K/2560px
   tier — plus container width growth and a couple of extra-small-phone
   refinements, matching the pattern used across the rest of the site.
   ========================================================================= */

/* ---------- Mobile Portrait — down to 360px ---------- */
@media (max-width: 360px) {
  .benefits-heading {
    font-size: 1.35rem;
    margin-bottom: 2.5rem;
  }

  .benefit-card {
    padding: 1.25rem;
  }

  .benefit-title {
    font-size: 1.1rem;
  }
}

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .benefits-container {
    max-width: 1120px;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .benefits-container {
    max-width: 1280px;
  }
}

@media (min-width: 1536px) {
  .benefits-container {
    max-width: 1400px !important;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up (e.g. 2560px) ---------- */
@media (min-width: 1921px) {
  .benefits-container {
    max-width: 1800px !important;
  }

  .benefits-heading {
    font-size: 4rem;
    margin-bottom: 5rem;
  }

  .benefit-card {
    padding: 3.5rem;
  }

  .benefit-title {
    font-size: 2.5rem;
  }

  .benefit-description {
    font-size: 1.2rem;
  }

  .step-index {
    font-size: 1.05rem;
  }

  .arrow-circle {
    width: 3rem;
    height: 3rem;
  }

  .arrow-circle svg {
    width: 1.35rem;
    height: 1.35rem;
  }
}
</style>