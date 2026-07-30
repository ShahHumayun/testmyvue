<template>
  <section
    :class="['case-study-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center main-section-heading">
        Helping Brands <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Scale on Magento</span>
      </h2>

      <div class="case-study-banner border rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="space-y-6">
          <div>
            <span class="text-xs font-mono uppercase tracking-widest accent-text banner-subtag">Case Study
              Analysis</span>
            <h3 class="text-2xl font-bold mt-1 banner-main-title">Legacy Store to Magento 2 Migration</h3>
          </div>
          <div class="space-y-2">
            <p class="text-sm font-semibold challenge-label">Challenge:</p>
            <p class="text-sm leading-relaxed block-paragraph-text">
              An outdated storefront running on legacy infrastructure struggled with slow load times, a clunky checkout
              flow, and no support for multi-store or B2B operations — resulting in high cart abandonment and stalled
              growth.
            </p>
          </div>
          <div class="space-y-2">
            <p class="text-sm font-semibold accent-text solution-label">Solution:</p>
            <p class="text-sm leading-relaxed block-paragraph-text">
              We led a full migration to Magento 2, rebuilding the storefront with a custom theme, optimized checkout
              flow, Elasticsearch-powered catalog search, and multi-store architecture — with third-party API
              integrations to unify inventory and order data.
            </p>
          </div>
        </div>

        <div class="results-display-box border rounded-2xl p-6 space-y-4">
          <h4 class="text-xs uppercase tracking-wider font-bold results-box-label">Post-Migration Results</h4>
          <ul class="space-y-3 font-mono text-xs results-list-container">
            <li class="flex justify-between border-b pb-2 list-item-row">
              <span>Page Load Speed:</span><span class="accent-text">Significantly Faster</span>
            </li>
            <li class="flex justify-between border-b pb-2 list-item-row">
              <span>Checkout Completion:</span><span class="accent-text">Notably Improved</span>
            </li>
            <li class="flex justify-between list-item-row">
              <span>Store Scalability:</span><span class="accent-text">Multi-Store Ready</span>
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
</script>

<style scoped>
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --main-heading: #ffffff;
  --banner-bg: #0a0a0a;
  --banner-border: #171717;
  --banner-title: #ffffff;
  --challenge-tag: #a3a3a3;
  --paragraph-txt: #d4d4d4;
  --results-bg: #000000;
  --results-border: #171717;
  --results-label: #737373;
  --list-row-txt: #ffffff;
  --row-divider: #171717;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --main-heading: #0f172a;
  --banner-bg: #ffffff;
  --banner-border: #e2e8f0;
  --banner-title: #000000;
  --challenge-tag: #000000;
  --paragraph-txt: #000000;
  --results-bg: #ffffff;
  --results-border: #e2e8f0;
  --results-label: #000000;
  --list-row-txt: #000000;
  --row-divider: #e2e8f0;
}

.case-study-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.max-w-5xl {
  max-width: 100% !important;
}

.main-section-heading {
  color: var(--main-heading) !important;
  transition: color 0.4s ease;
  font-size: clamp(2rem, 3.5vw, 4rem);
}

.accent-text {
  color: var(--accent-color) !important;
}

.banner-subtag {
  font-size: clamp(0.7rem, 0.9vw, 0.85rem);
}

.case-study-banner {
  background-color: var(--banner-bg) !important;
  border: 1px solid var(--banner-border) !important;
  padding: clamp(1.75rem, 3.5vw, 3.5rem) !important;
}

.banner-main-title {
  color: var(--banner-title) !important;
  font-size: clamp(1.35rem, 2vw, 2.25rem);
}

.challenge-label,
.solution-label {
  color: var(--challenge-tag) !important;
  font-size: clamp(0.9rem, 1.1vw, 1.15rem);
}

.block-paragraph-text {
  color: var(--paragraph-txt) !important;
  transition: color 0.4s ease;
  font-size: clamp(0.875rem, 1.15vw, 1.1rem);
  line-height: 1.7;
}

.results-display-box {
  background-color: var(--results-bg) !important;
  border: 1px solid var(--results-border) !important;
  padding: clamp(1.25rem, 2.5vw, 2.25rem) !important;
}

.results-box-label {
  color: var(--results-label) !important;
  transition: color 0.4s ease;
  font-size: clamp(0.75rem, 0.95vw, 0.9rem);
}

.list-item-row {
  color: var(--list-row-txt) !important;
  border-color: var(--row-divider) !important;
  transition: color 0.4s ease, border-color 0.4s ease;
  font-size: clamp(0.75rem, 1vw, 0.95rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .case-study-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .main-section-heading {
    font-size: 2.75rem;
  }

  .banner-main-title {
    font-size: 1.7rem;
  }

  .block-paragraph-text {
    font-size: 0.95rem;
  }

  .list-item-row {
    font-size: 0.825rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .case-study-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .main-section-heading {
    font-size: 3.4rem;
  }

  .banner-main-title {
    font-size: 2rem;
  }

  .block-paragraph-text {
    font-size: 1.05rem;
  }

  .list-item-row {
    font-size: 0.875rem;
  }
}

@media (min-width: 1536px) {
  .case-study-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .main-section-heading {
    font-size: 4rem;
  }

  .banner-main-title {
    font-size: 2.35rem;
  }

  .block-paragraph-text {
    font-size: 1.2rem;
  }

  .list-item-row {
    font-size: 1rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .case-study-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .main-section-heading {
    font-size: 5rem;
  }

  .banner-main-title {
    font-size: 2.9rem;
  }

  .block-paragraph-text {
    font-size: 1.4rem;
  }

  .list-item-row {
    font-size: 1.15rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .case-study-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .main-section-heading {
    font-size: 2.5rem;
  }

  .banner-main-title {
    font-size: 1.6rem;
  }

  .block-paragraph-text {
    font-size: 0.9rem;
  }

  .list-item-row {
    font-size: 0.8rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .case-study-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .main-section-heading {
    font-size: 2.2rem;
  }

  .banner-main-title {
    font-size: 1.45rem;
  }

  .block-paragraph-text {
    font-size: 0.875rem;
  }

  .list-item-row {
    font-size: 0.775rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .case-study-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .grid-cols-1 {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .main-section-heading {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }

  .banner-main-title {
    font-size: 1.3rem;
  }

  .block-paragraph-text {
    font-size: 0.85rem;
  }

  .list-item-row {
    font-size: 0.75rem;
  }

  .case-study-banner {
    padding: 1.25rem !important;
  }

  .results-display-box {
    padding: 1rem !important;
  }
}

@media (max-width: 360px) {
  .case-study-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .main-section-heading {
    font-size: 1.6rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .case-study-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>