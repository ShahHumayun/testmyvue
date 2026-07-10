<template>
  <section :class="['conversion-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center section-heading">
        Magento, <span class="text-[#00ffa3]">Engineered To Convert</span>
      </h2>
      
      <div class="space-y-4 relative">
        <div 
          v-for="(c, idx) in cards" 
          :key="idx" 
          class="sticky-conversion-card p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 sticky top-24 shadow-2xl transition-colors"
        >
          <div class="space-y-2 sm:w-2/5">
            <span class="text-[10px] font-bold tracking-widest uppercase text-[#00ffa3]">{{ c.tag }}</span>
            <h3 class="text-2xl font-bold card-inner-title">{{ c.title }}</h3>
          </div>
          <p class="text-sm max-w-md leading-relaxed card-inner-desc">{{ c.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'

// Inject global theme state context seamlessly
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
/* ── Encapsulated Visual Protection Boundaries ── */
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important; /* border-neutral-900 equivalent */
  --section-title-color: #ffffff;
  --card-bg-gradient: linear-gradient(to right, #0a0a0a, #000000);
  --card-border-color: #171717;
  --card-hover-border: rgba(0, 255, 163, 0.3);
  --card-title-color: #ffffff;
  --card-desc-color: #a3a3a3; /* text-neutral-400 equivalent */
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important; /* border-slate-200 equivalent */
  --section-title-color: #0f172a;
  --card-bg-gradient: linear-gradient(to right, #ffffff, #ffffff); /* Overrides gradient to solid white */
  --card-border-color: #e2e8f0;
  --card-hover-border: rgba(15, 23, 42, 0.25);
  --card-title-color: #000000;
  --card-desc-color: #000000; /* requested pure black description text layout */
}

/* ── Explicit Selector Rule Mappings ── */
.conversion-section {
  width: 100% !important;
}

.section-heading {
  color: var(--section-title-color) !important;
  transition: color 0.4s ease;
}

.sticky-conversion-card {
  background: var(--card-bg-gradient) !important;
  border: 1px solid var(--card-border-color) !important;
  border-radius: 0.75rem !important; /* rounded-xl replacement */
  transition: border-color 0.4s ease, box-shadow 0.4s ease;
}

.sticky-conversion-card:hover {
  border-color: var(--card-hover-border) !important;
}

.card-inner-title {
  color: var(--card-title-color) !important;
  transition: color 0.4s ease;
}

.card-inner-desc {
  color: var(--card-desc-color) !important;
  transition: color 0.4s ease;
}
</style>