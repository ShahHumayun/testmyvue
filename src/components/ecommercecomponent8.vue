<template>
  <section
    :class="['conversion-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center section-heading">
        Magento, <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Engineered To Convert</span>
      </h2>

      <div class="space-y-4 relative">
        <div v-for="(c, idx) in cards" :key="idx"
          class="sticky-conversion-card p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-8 lg:gap-16 sticky top-24 shadow-2xl transition-colors">
          <div class="space-y-2 sm:w-2/5">
            <span class="text-[10px] font-bold tracking-widest uppercase accent-text">{{ c.tag }}</span>
            <h3 class="text-2xl font-bold card-inner-title">{{ c.title }}</h3>
          </div>
          <p class="text-sm sm:w-3/5 max-w-xl leading-relaxed card-inner-desc">{{ c.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const cards = [
  {
    tag: 'Checkout Optimization',
    title: 'Frictionless Magento Checkout',
    desc: 'Custom-tuned one-step and multi-step checkout flows built on Magento 2, reducing cart abandonment with smart defaults, saved payment methods, and guest checkout options.'
  },
  {
    tag: 'Catalog Intelligence',
    title: 'Smart Product Recommendations',
    desc: 'Native Magento merchandising rules combined with custom recommendation modules to surface the right products at the right moment — increasing average order value.'
  },
  {
    tag: 'Performance Engineering',
    title: 'Sub-Second Store Speed',
    desc: 'Full-page cache tuning, Elasticsearch optimization, and CDN configuration purpose-built for Magento — keeping load times fast even under heavy catalog and traffic loads.'
  },
  {
    tag: 'Scalable Architecture',
    title: 'Built for B2B & Multi-Store Growth',
    desc: "Magento's native multi-store, multi-currency, and B2B module support configured and extended by our team to scale with your business without rebuilding from scratch."
  },
]
</script>

<style scoped>
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --section-title-color: #ffffff;
  --card-bg-gradient: linear-gradient(to right, #0a0a0a, #000000);
  --card-border-color: #171717;
  --card-hover-border: rgba(0, 255, 163, 0.3);
  --card-title-color: #ffffff;
  --card-desc-color: #a3a3a3;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --section-title-color: #0f172a;
  --card-bg-gradient: linear-gradient(to right, #ffffff, #ffffff);
  --card-border-color: #e2e8f0;
  --card-hover-border: rgba(249, 115, 22, 0.25);
  --card-title-color: #000000;
  --card-desc-color: #000000;
}

.conversion-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.max-w-5xl {
  max-width: 100% !important;
}

.section-heading {
  color: var(--section-title-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(2rem, 3.5vw, 4rem);
}

.accent-text {
  color: var(--accent-color) !important;
  font-size: clamp(0.7rem, 0.95vw, 0.9rem);
}

.sticky-conversion-card {
  background: var(--card-bg-gradient) !important;
  border: 1px solid var(--card-border-color) !important;
  border-radius: 0.75rem !important;
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
  padding: clamp(2rem, 3vw, 3.5rem) !important;
}

.sticky-conversion-card:hover {
  border-color: var(--card-hover-border) !important;
}

.card-inner-title {
  color: var(--card-title-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(1.35rem, 1.9vw, 2.15rem);
}

.card-inner-desc {
  color: var(--card-desc-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(0.95rem, 1.3vw, 1.3rem);
  line-height: 1.75;
  letter-spacing: 0.01em;
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .conversion-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .section-heading {
    font-size: 2.85rem;
  }

  .accent-text {
    font-size: 0.75rem;
  }

  .card-inner-title {
    font-size: 1.7rem;
  }

  .card-inner-desc {
    font-size: 1.05rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .conversion-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .section-heading {
    font-size: 3.6rem;
  }

  .accent-text {
    font-size: 0.8rem;
  }

  .card-inner-title {
    font-size: 2rem;
  }

  .card-inner-desc {
    font-size: 1.15rem;
  }
}

@media (min-width: 1536px) {
  .conversion-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .section-heading {
    font-size: 4.25rem;
  }

  .accent-text {
    font-size: 0.85rem;
  }

  .card-inner-title {
    font-size: 2.35rem;
  }

  .card-inner-desc {
    font-size: 1.3rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .conversion-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .section-heading {
    font-size: 5.25rem;
  }

  .accent-text {
    font-size: 1rem;
  }

  .card-inner-title {
    font-size: 2.9rem;
  }

  .card-inner-desc {
    font-size: 1.55rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .conversion-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .section-heading {
    font-size: 2.6rem;
  }

  .accent-text {
    font-size: 0.72rem;
  }

  .card-inner-title {
    font-size: 1.6rem;
  }

  .card-inner-desc {
    font-size: 1rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .conversion-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .section-heading {
    font-size: 2.3rem;
  }

  .accent-text {
    font-size: 0.7rem;
  }

  .card-inner-title {
    font-size: 1.45rem;
  }

  .card-inner-desc {
    font-size: 0.95rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .conversion-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .section-heading {
    font-size: 1.9rem;
    margin-bottom: 2.5rem;
  }

  .accent-text {
    font-size: 0.65rem;
  }

  .card-inner-title {
    font-size: 1.3rem;
  }

  .card-inner-desc {
    font-size: 0.9rem;
  }

  .sticky-conversion-card {
    padding: 1.25rem !important;
  }
}

@media (max-width: 360px) {
  .conversion-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .section-heading {
    font-size: 1.7rem;
  }

  .card-inner-title {
    font-size: 1.2rem;
  }

  .card-inner-desc {
    font-size: 0.85rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .conversion-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>