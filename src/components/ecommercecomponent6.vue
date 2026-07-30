<template>
  <section
    :class="['magento-features py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center features-heading">
        Everything Your <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Magento Store Needs</span>
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div v-for="(f, idx) in features" :key="idx"
          class="feature-pill p-6 rounded-xl transition-colors group relative overflow-hidden">
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

.magento-features {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.max-w-7xl {
  max-width: 100% !important;
}

.features-heading {
  color: var(--heading-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(2rem, 3.5vw, 4rem);
}

.feature-pill {
  background-color: var(--pill-bg) !important;
  border: 1px solid var(--pill-border) !important;
  padding: clamp(1.25rem, 2vw, 2.25rem) !important;
}

.feature-pill:hover {
  border-color: var(--pill-hover-border) !important;
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
  font-size: clamp(0.9rem, 1.2vw, 1.25rem);
}

.feature-pill:hover .pill-title {
  color: var(--accent-color) !important;
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .magento-features {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .features-heading {
    font-size: 2.75rem;
  }

  .pill-title {
    font-size: 1rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .magento-features {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .features-heading {
    font-size: 3.4rem;
  }

  .pill-title {
    font-size: 1.1rem;
  }
}

@media (min-width: 1536px) {
  .magento-features {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .features-heading {
    font-size: 4rem;
  }

  .pill-title {
    font-size: 1.25rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .magento-features {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .features-heading {
    font-size: 5rem;
  }

  .pill-title {
    font-size: 1.5rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .magento-features {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .features-heading {
    font-size: 2.5rem;
  }

  .pill-title {
    font-size: 0.95rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .magento-features {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .features-heading {
    font-size: 2.2rem;
  }

  .pill-title {
    font-size: 0.9rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .magento-features {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .features-heading {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }

  .pill-title {
    font-size: 0.9rem;
  }
}

@media (max-width: 360px) {
  .magento-features {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .features-heading {
    font-size: 1.6rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .magento-features {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>