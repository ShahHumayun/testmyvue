<template>
  <section
    :class="['tech-stack-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center stack-main-heading">
        Built Using Modern Commerce Technologies
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(cat, idx) in stack" :key="idx" class="stack-category-card rounded-xl p-6">
          <h3 class="text-xs font-bold tracking-widest uppercase mb-4 accent-text stack-category-title">{{ cat.category
          }}</h3>
          <ul class="space-y-2">
            <li v-for="tech in cat.items" :key="tech" class="tech-item flex items-center gap-3 text-sm stack-tech-row">
              <span class="marker-dot w-1.5 h-1.5 rounded-full transition-all"></span>{{ tech }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const stack = [
  { category: 'Frontend', items: ['Next.js', 'Vue', 'Nuxt', 'Astro'] },
  { category: 'Commerce', items: ['Magento', 'Medusa', 'Commerce.js', 'Saleor'] },
  { category: 'Backend', items: ['Node.js', 'GraphQL', 'PostgreSQL', 'Redis'] },
  { category: 'Infra', items: ['Vercel', 'AWS', 'Cloudflare', 'Docker'] },
]
</script>

<style scoped>
/* CHANGED: colour-only update — this section now uses the same alternating
   background pair as the full-bleed sections on services.vue / culture.vue
   (#1c1c1c on dark, #f2f2f2 on light) instead of pure #000/#fff, so it
   reads as the same "light grey on white / light black on black" band.
   Nothing else (stack card colors, accent colors, breakpoints) touched. */
.theme-dark {
  background-color: #1c1c1c !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --heading-color: #ffffff;
  --card-bg: #0a0a0a;
  --card-border: #171717;
  --tech-row-color: #d4d4d4;
  --dot-bg: #404040;
}

.theme-light {
  background-color: #f2f2f2 !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --heading-color: #0f172a;
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --tech-row-color: #000000;
  --dot-bg: #000000;
}

.tech-stack-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.max-w-7xl {
  max-width: 100% !important;
}

.stack-main-heading {
  color: var(--heading-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(2rem, 3.5vw, 4.25rem);
}

.accent-text {
  color: var(--accent-color) !important;
}

.stack-category-title {
  font-size: clamp(0.75rem, 1vw, 0.95rem);
}

.stack-category-card {
  background-color: var(--card-bg) !important;
  border: 1px solid var(--card-border) !important;
  transition: background-color 0.4s ease, border-color 0.4s ease;
  padding: clamp(1.25rem, 2.5vw, 2.25rem) !important;
}

.stack-tech-row {
  color: var(--tech-row-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(0.85rem, 1.1vw, 1.1rem);
}

.marker-dot {
  background-color: var(--dot-bg) !important;
  width: clamp(0.35rem, 0.5vw, 0.55rem) !important;
  height: clamp(0.35rem, 0.5vw, 0.55rem) !important;
}

.tech-item:hover .marker-dot {
  background-color: var(--accent-color) !important;
  box-shadow: 0 0 10px var(--accent-color) !important;
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .tech-stack-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .stack-main-heading {
    font-size: 3rem;
  }

  .stack-category-title {
    font-size: 0.8rem;
  }

  .stack-tech-row {
    font-size: 0.95rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .tech-stack-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .stack-main-heading {
    font-size: 3.6rem;
  }

  .stack-category-title {
    font-size: 0.85rem;
  }

  .stack-tech-row {
    font-size: 1.05rem;
  }
}

@media (min-width: 1536px) {
  .tech-stack-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .stack-main-heading {
    font-size: 4.25rem;
  }

  .stack-category-title {
    font-size: 0.95rem;
  }

  .stack-tech-row {
    font-size: 1.2rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .tech-stack-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .stack-main-heading {
    font-size: 5.2rem;
  }

  .stack-category-title {
    font-size: 1.15rem;
  }

  .stack-tech-row {
    font-size: 1.4rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .tech-stack-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .stack-main-heading {
    font-size: 2.6rem;
  }

  .stack-category-title {
    font-size: 0.78rem;
  }

  .stack-tech-row {
    font-size: 0.9rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .tech-stack-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .grid-cols-1 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stack-main-heading {
    font-size: 2.2rem;
    margin-bottom: 3rem;
  }

  .stack-category-title {
    font-size: 0.75rem;
  }

  .stack-tech-row {
    font-size: 0.875rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .tech-stack-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .grid-cols-1 {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .stack-main-heading {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }

  .stack-category-title {
    font-size: 0.7rem;
  }

  .stack-tech-row {
    font-size: 0.85rem;
  }

  .stack-category-card {
    padding: 1.25rem !important;
  }
}

@media (max-width: 360px) {
  .tech-stack-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .stack-main-heading {
    font-size: 1.6rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .tech-stack-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>