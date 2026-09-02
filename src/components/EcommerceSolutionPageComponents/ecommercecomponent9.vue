<template>
  <section
    :class="['industries-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center industries-main-heading">
        Ecommerce Solutions For <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Every Industry</span>
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="(ind, idx) in industries" :key="idx" class="industry-card p-6 rounded-xl transition-all group">
          <h3 class="text-base font-bold transition-colors industry-card-title">
            {{ ind.name }}
          </h3>
          <p class="text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity industry-card-info">
            {{ ind.info }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const industries = [
  { name: 'Fashion & Apparel', info: 'Lookbooks, size guides, configurators.' },
  { name: 'Electronics', info: 'Spec comparison, bundles, warranties.' },
  { name: 'Beauty & Cosmetics', info: 'AR try-on, ingredient transparency.' },
  { name: 'Food & Beverage', info: 'Subscriptions, scheduling, fulfillment.' },
  { name: 'Home & Furniture', info: '3D previews, white-glove logistics.' },
  { name: 'Health & Wellness', info: 'Compliance, recurring orders, education.' },
  { name: 'B2B Commerce', info: 'Quoting, net terms, bulk pricing.' },
  { name: 'Digital Goods', info: 'Instant delivery, licensing, downloads.' },
]
</script>

<style scoped>
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --heading-color: #ffffff;
  --card-bg: #0a0a0a;
  --card-hover-bg: #171717;
  --card-border: #171717;
  --title-color: #ffffff;
  --info-color: #737373;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --heading-color: #0f172a;
  --card-bg: #ffffff;
  --card-hover-bg: #f8fafc;
  --card-border: #e2e8f0;
  --title-color: #000000;
  --info-color: #000000;
}

.industries-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.max-w-7xl {
  max-width: 100% !important;
}

.industries-main-heading {
  color: var(--heading-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(2rem, 3.5vw, 4rem);
}

.industry-card {
  background-color: var(--card-bg) !important;
  border: 1px solid var(--card-border) !important;
  padding: clamp(1.25rem, 2vw, 2.25rem) !important;
}

.industry-card:hover {
  background-color: var(--card-hover-bg) !important;
}

.industry-card-title {
  color: var(--title-color) !important;
  font-size: clamp(1rem, 1.4vw, 1.35rem);
}

/* Uses the dynamic accent color on hover */
.industry-card:hover .industry-card-title {
  color: var(--accent-color) !important;
}

.industry-card-info {
  color: var(--info-color) !important;
  transition: opacity 0.3s ease, color 0.4s ease;
  font-size: clamp(0.8rem, 1.1vw, 1.05rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .industries-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .industries-main-heading {
    font-size: 2.75rem;
  }

  .industry-card-title {
    font-size: 1.15rem;
  }

  .industry-card-info {
    font-size: 0.9rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .industries-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .industries-main-heading {
    font-size: 3.4rem;
  }

  .industry-card-title {
    font-size: 1.25rem;
  }

  .industry-card-info {
    font-size: 0.95rem;
  }
}

@media (min-width: 1536px) {
  .industries-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .industries-main-heading {
    font-size: 4rem;
  }

  .industry-card-title {
    font-size: 1.45rem;
  }

  .industry-card-info {
    font-size: 1.1rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .industries-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .industries-main-heading {
    font-size: 5rem;
  }

  .industry-card-title {
    font-size: 1.8rem;
  }

  .industry-card-info {
    font-size: 1.35rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .industries-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .industries-main-heading {
    font-size: 2.5rem;
  }

  .industry-card-title {
    font-size: 1.1rem;
  }

  .industry-card-info {
    font-size: 0.85rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .industries-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .industries-main-heading {
    font-size: 2.2rem;
  }

  .industry-card-title {
    font-size: 1rem;
  }

  .industry-card-info {
    font-size: 0.85rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .industries-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .grid-cols-2 {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .industries-main-heading {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }

  .industry-card-title {
    font-size: 1rem;
  }

  .industry-card-info {
    font-size: 0.85rem;
  }

  .industry-card {
    padding: 1.25rem !important;
  }
}

@media (max-width: 360px) {
  .industries-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .industries-main-heading {
    font-size: 1.6rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .industries-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
```[cite: 9]