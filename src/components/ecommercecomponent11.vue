<template>
  <section :class="['case-study-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center main-section-heading">
        Helping Brands <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Scale on Magento</span>
      </h2>
      
      <div class="case-study-banner border rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div class="space-y-6">
          <div>
            <span class="text-xs font-mono accent-text uppercase tracking-widest">Case Study Analysis</span>
            <h3 class="text-2xl font-bold mt-1 banner-main-title">Legacy Store to Magento 2 Migration</h3>
          </div>
          <div class="space-y-2">
            <p class="text-sm font-semibold challenge-label">Challenge:</p>
            <p class="text-sm leading-relaxed block-paragraph-text">
              An outdated storefront running on legacy infrastructure struggled with slow load times, a clunky checkout flow, and no support for multi-store or B2B operations — resulting in high cart abandonment and stalled growth.
            </p>
          </div>
          <div class="space-y-2">
            <p class="text-sm font-semibold accent-text">Solution:</p>
            <p class="text-sm leading-relaxed block-paragraph-text">
              We led a full migration to Magento 2, rebuilding the storefront with a custom theme, optimized checkout flow, Elasticsearch-powered catalog search, and multi-store architecture — with third-party API integrations to unify inventory and order data.
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

.case-study-section { width: 100% !important; }
.main-section-heading { color: var(--main-heading) !important; transition: color 0.4s ease; }
.accent-text { color: var(--accent-color) !important; }

.case-study-banner {
  background-color: var(--banner-bg) !important;
  border: 1px solid var(--banner-border) !important;
}

.banner-main-title { color: var(--banner-title) !important; }
.challenge-label { color: var(--challenge-tag) !important; }
.block-paragraph-text { color: var(--paragraph-txt) !important; transition: color 0.4s ease; }

.results-display-box {
  background-color: var(--results-bg) !important;
  border: 1px solid var(--results-border) !important;
}

.results-box-label { color: var(--results-label) !important; transition: color 0.4s ease; }
.list-item-row {
  color: var(--list-row-txt) !important;
  border-color: var(--row-divider) !important;
  transition: color 0.4s ease, border-color 0.4s ease;
}
</style>