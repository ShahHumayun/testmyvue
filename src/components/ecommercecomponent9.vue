<template>
  <section :class="['industries-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center industries-main-heading">
        Ecommerce Solutions For <span class="text-[#00ffa3]">Every Industry</span>
      </h2>
      
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div 
          v-for="(ind, idx) in industries" 
          :key="idx" 
          class="industry-card p-6 rounded-xl transition-all group"
        >
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

// Inject global theme state context seamlessly
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
/* ── Encapsulated Visual Protection Boundaries ── */
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important; /* border-neutral-900 equivalent */
  --heading-color: #ffffff;
  --card-bg: #0a0a0a; /* bg-neutral-950 equivalent */
  --card-hover-bg: #171717; /* bg-neutral-900 equivalent */
  --card-border: #171717;
  --title-color: #ffffff;
  --info-color: #737373; /* text-neutral-500 equivalent */
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important; /* border-slate-200 equivalent */
  --heading-color: #0f172a; /* text-slate-900 equivalent */
  --card-bg: #ffffff;
  --card-hover-bg: #f8fafc; /* bg-slate-50 equivalent */
  --card-border: #e2e8f0;
  --title-color: #000000; /* requested text to black */
  --info-color: #000000;  /* requested text to black */
}

/* ── Explicit Selector Rule Mappings ── */
.industries-section {
  width: 100% !important;
}

.industries-main-heading {
  color: var(--heading-color) !important;
  transition: color 0.4s ease;
}

.industry-card {
  background-color: var(--card-bg) !important;
  border: 1px solid var(--card-border) !important;
}

.industry-card:hover {
  background-color: var(--card-hover-bg) !important;
}

.industry-card-title {
  color: var(--title-color) !important;
}

.industry-card:hover .industry-card-title {
  color: #00ffa3 !important;
}

.industry-card-info {
  color: var(--info-color) !important;
  transition: opacity 0.3s ease, color 0.4s ease;
}
</style>