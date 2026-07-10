<template>
  <section :class="['magento-features py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center features-heading">
        Everything Your <span class="text-[#00ffa3]">Magento Store Needs</span>
      </h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div 
          v-for="(f, idx) in features" 
          :key="idx" 
          class="feature-pill p-6 rounded-xl transition-colors group relative overflow-hidden"
        >
          <div class="absolute -bottom-6 -right-6 w-12 h-12 rounded-full blur-xl pill-corner-glow"></div>
          <h3 class="text-sm font-bold tracking-tight transition-colors pill-title">
            {{ f }}
          </h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'

// Inject global theme state context seamlessly
const isDarkMode = inject('isDarkMode', ref(true))

const features = [
  'Custom Magento Themes', 'Magento 2 Migration', 'Multi-Store Management', 'B2B & B2C Modules',
  'Custom Module Development', 'Magento API Integrations', 'Performance Optimization', 'PWA Storefronts',
  'Payment Gateway Integration', 'Extension Customization'
]
</script>

<style scoped>
/* ── Encapsulated Visual Protection Boundaries ── */
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important; /* border-neutral-900 equivalent */
  --heading-color: #ffffff;
  --pill-bg: #0a0a0a; /* bg-neutral-950 equivalent */
  --pill-border: #171717; /* border-neutral-900 equivalent */
  --pill-hover-border: #262626; /* border-neutral-800 equivalent */
  --glow-color: rgba(0, 255, 163, 0.05);
  --glow-hover-color: rgba(0, 255, 163, 0.1);
  --title-color: #e5e5e5; /* text-neutral-200 equivalent */
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important; /* border-slate-200 equivalent */
  --heading-color: #0f172a; /* text-slate-900 equivalent */
  --pill-bg: #ffffff;
  --pill-border: #e2e8f0;
  --pill-hover-border: rgba(15, 23, 42, 0.2);
  --glow-color: rgba(15, 23, 42, 0.02);
  --glow-hover-color: rgba(0, 255, 163, 0.15);
  --title-color: #000000; /* requested pure black text layout rules */
}

/* ── Explicit Selector Rule Mappings ── */
.magento-features {
  width: 100% !important;
}

.features-heading {
  color: var(--heading-color) !important;
  transition: color 0.4s ease;
}

.feature-pill {
  background-color: var(--pill-bg) !important;
  border: 1px solid var(--pill-border) !important;
}

.feature-pill:hover {
  border-color: var(--pill-hover-border) !important;
}

.theme-dark .feature-pill:hover {
  border-color: #262626 !important; /* Retained raw dark frame shift choice */
}

.pill-corner-glow {
  background-color: var(--glow-color) !important;
  transition: background-color 0.3s ease;
}

.feature-pill:hover .pill-corner-glow {
  background-color: var(--glow-hover-color) !important;
}

.pill-title {
  color: var(--title-color) !important;
}

.feature-pill:hover .pill-title {
  color: #00ffa3 !important;
}
</style>