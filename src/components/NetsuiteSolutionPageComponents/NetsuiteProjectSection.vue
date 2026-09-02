<template>
  <!-- PROJECT SECTION -->
  <section :class="[
    'project-section py-32 px-6 border-b relative z-20',
    isDarkMode ? 'border-neutral-900 bg-black text-white theme-dark' : 'border-neutral-200 bg-white text-black theme-light'
  ]">
    <div class="max-w-7xl mx-auto project-container-wrapper">

      <!--
        Example heading pattern used across the other Netsuite sections:

        <h2 :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-20', isDarkMode ? 'text-white' : 'text-black']">
          Your Heading <span class="text-[#00ffa3]">Highlighted Part</span>
        </h2>
      -->

      <!--
        Example content grid pattern (with a template ref for the stagger-reveal
        animation below) — swap sectionItems for your real data array:

        <div ref="sectionGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 project-grid-container">
          <div
            v-for="(item, idx) in sectionItems"
            :key="idx"
            :class="[
              'border rounded-xl p-6 transition-all duration-300 project-card-box',
              isDarkMode
                ? 'bg-neutral-950 border-neutral-900'
                : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70'
            ]"
          >
            <h3 :class="['text-lg font-bold mb-2 project-card-title', isDarkMode ? 'text-white' : 'text-black']">{{ item.title }}</h3>
            <p :class="['text-sm leading-relaxed project-card-desc', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">{{ item.description }}</p>
          </div>
        </div>
      -->

      <div ref="sectionGrid"></div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Injected from the parent page's provide() — same pattern as every
// other Netsuite*Section component
const isDarkMode = inject('isDarkMode', ref(true))

// Template ref for whatever grid/list you build inside this section.
// Used below for the scroll-triggered reveal animation, scoped to this
// component's own container so it never touches elements from other
// sections on the page.
const sectionGrid = ref(null)

// Replace with your real content array once you have it, e.g.:
// const sectionItems = [
//   { title: 'Example Title', description: 'Example description text.' },
// ]

let triggers = []

onMounted(() => {
  // Standard stagger-reveal for direct children of sectionGrid, matching
  // the pattern used in NetsuiteIndustriesSection / NetsuiteMetricsSection etc.
  // Safe to leave in place even before content exists — it will simply
  // animate zero children until sectionGrid has items in it.
  if (sectionGrid.value && sectionGrid.value.children.length) {
    const anim = gsap.fromTo(sectionGrid.value.children, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: sectionGrid.value, start: 'top 85%' }
    })
    if (anim.scrollTrigger) triggers.push(anim.scrollTrigger)
  }
})

onUnmounted(() => {
  triggers.forEach(t => t.kill())
})
</script>

<style scoped>
.theme-dark {
  --accent-color: #00ffa3;
  --accent-rgb: 0, 255, 163;
}

.theme-light {
  --accent-color: #f97316;
  --accent-rgb: 249, 115, 22;
}

.accent-text {
  color: var(--accent-color);
}

.project-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.project-container-wrapper,
.max-w-7xl {
  max-width: 100% !important;
}

.project-card-box {
  padding: clamp(1.25rem, 2vw, 2rem);
}

.project-card-title {
  font-size: clamp(1rem, 1.3vw, 1.35rem);
}

.project-card-desc {
  font-size: clamp(0.7rem, 0.9vw, 0.95rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .project-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .project-card-title {
    font-size: 1.15rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .project-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .project-card-title {
    font-size: 1.25rem;
  }
}

@media (min-width: 1536px) {
  .project-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .project-card-title {
    font-size: 1.4rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .project-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .project-card-title {
    font-size: 1.7rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .project-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .project-card-title {
    font-size: 1.1rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .project-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .project-card-title {
    font-size: 1.05rem;
  }

  .project-grid-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .project-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .project-grid-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.875rem;
  }

  .project-card-box {
    padding: 1rem;
  }

  .project-card-title {
    font-size: 1rem;
  }
}

@media (max-width: 360px) {
  .project-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .project-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>