<template>
  <section :class="['magento-features py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center features-heading">
        Everything Your <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Magento Store Needs</span>
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

const isDarkMode = inject('isDarkMode', ref(true))

const features = [
  'Custom Magento Themes', 'Magento 2 Migration', 'Multi-Store Management', 'B2B & B2C Modules',
  'Custom Module Development', 'Magento API Integrations', 'Performance Optimization', 'PWA Storefronts',
  'Payment Gateway Integration', 'Extension Customization'
]
</script>

<style scoped>
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --heading-color: #ffffff;
  --pill-bg: #0a0a0a;
  --pill-border: #171717;
  --pill-hover-border: #262626;
  --glow-color: rgba(0, 255, 163, 0.05);
  --glow-hover-color: rgba(0, 255, 163, 0.1);
  --title-color: #e5e5e5;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --heading-color: #0f172a;
  --pill-bg: #ffffff;
  --pill-border: #e2e8f0;
  --pill-hover-border: #cbd5e1;
  --glow-color: rgba(249, 115, 22, 0.05);
  --glow-hover-color: rgba(249, 115, 22, 0.15);
  --title-color: #000000;
}

.magento-features { width: 100% !important; }
.features-heading { color: var(--heading-color) !important; transition: color 0.4s ease; }

.feature-pill {
  background-color: var(--pill-bg) !important;
  border: 1px solid var(--pill-border) !important;
}

.feature-pill:hover { border-color: var(--pill-hover-border) !important; }

.pill-corner-glow {
  background-color: var(--glow-color) !important;
  transition: background-color 0.3s ease;
}

.feature-pill:hover .pill-corner-glow { background-color: var(--glow-hover-color) !important; }
.pill-title { color: var(--title-color) !important; }
.feature-pill:hover .pill-title { color: var(--accent-color) !important; }
</style>