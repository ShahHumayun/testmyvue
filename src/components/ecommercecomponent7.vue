<template>
  <section
    :class="['platforms-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center main-section-title">
        Platforms <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">We Work With</span>
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div
          class="lg:col-span-3 featured-card rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden group transition-all">
          <div class="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl accent-glow-circle transition-colors">
          </div>

          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-6">
              <div class="text-4xl logo-float">🏬</div>
              <div>
                <span
                  class="inline-block text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-1 featured-badge-tag">Our
                  Core Expertise</span>
                <h3 class="text-2xl font-bold tracking-tight title-text-accent">Magento</h3>
              </div>
            </div>

            <p class="text-sm leading-relaxed mb-6 max-w-xl body-description-text">
              Magento is our primary e-commerce platform. We specialize in building, migrating, and scaling
              enterprise-grade Magento 2 stores — from custom theme development and module engineering to complex
              B2B/B2C configurations, third-party API integrations, and performance tuning for high-traffic stores.
            </p>

            <ul class="grid grid-cols-2 gap-x-6 gap-y-2 text-xs bullet-list-text">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full list-bullet-node"></span>Magento
                2 Development</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full list-bullet-node"></span>Custom
                Module Builds</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full list-bullet-node"></span>Store
                Migration</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full list-bullet-node"></span>B2B &
                Multi-Store Setup</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full list-bullet-node"></span>API &
                ERP Integrations</li>
              <li class="flex items-center gap-2"><span
                  class="w-1.5 h-1.5 rounded-full list-bullet-node"></span>Performance Optimization</li>
            </ul>
          </div>
        </div>

        <div class="lg:col-span-2 secondary-card rounded-2xl p-10 flex flex-col justify-between group transition-all">
          <div>
            <div class="flex items-center gap-4 mb-6">
              <div class="text-4xl logo-float">🪄</div>
              <h3 class="text-2xl font-bold tracking-tight secondary-card-title transition-colors">WooCommerce</h3>
            </div>

            <p class="text-sm leading-relaxed mb-6 secondary-body-text">
              For businesses looking for a lightweight, WordPress-native storefront, we build and customize WooCommerce
              solutions with clean checkout flows, plugin integrations, and theme customization.
            </p>

            <ul class="flex flex-col gap-2 text-xs secondary-bullet-text">
              <li class="flex items-center gap-2"><span
                  class="w-1.5 h-1.5 rounded-full secondary-bullet-node"></span>Store Setup & Customization</li>
              <li class="flex items-center gap-2"><span
                  class="w-1.5 h-1.5 rounded-full secondary-bullet-node"></span>Plugin & Payment Integration</li>
              <li class="flex items-center gap-2"><span
                  class="w-1.5 h-1.5 rounded-full secondary-bullet-node"></span>Theme Development</li>
            </ul>
          </div>
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
  --section-title: #ffffff;
  --featured-bg: #0a0a0a;
  --featured-border: rgba(0, 255, 163, 0.3);
  --featured-hover-border: #00ffa3;
  --badge-bg: rgba(0, 255, 163, 0.1);
  --featured-title: #ffffff;
  --featured-desc: #a3a3a3;
  --featured-bullets: #d4d4d4;
  --sec-bg: #0a0a0a;
  --sec-border: #171717;
  --sec-hover-border: #262626;
  --sec-title: #e5e5e5;
  --sec-desc: #737373;
  --sec-bullets: #a3a3a3;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --section-title: #0f172a;
  --featured-bg: #ffffff;
  --featured-border: #e2e8f0;
  --featured-hover-border: #f97316;
  --badge-bg: rgba(249, 115, 22, 0.1);
  --featured-title: #000000;
  --featured-desc: #000000;
  --featured-bullets: #000000;
  --sec-bg: #ffffff;
  --sec-border: #e2e8f0;
  --sec-hover-border: #cbd5e1;
  --sec-title: #000000;
  --sec-desc: #000000;
  --sec-bullets: #000000;
}

.platforms-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.max-w-7xl {
  max-width: 100% !important;
}

.main-section-title {
  color: var(--section-title) !important;
  font-size: clamp(2rem, 3.5vw, 4rem);
}

.featured-card,
.secondary-card {
  padding: clamp(2rem, 3vw, 4rem) !important;
}

.featured-card {
  background-color: var(--featured-bg) !important;
  border: 1px solid var(--featured-border) !important;
}

.featured-card:hover {
  border-color: var(--accent-color) !important;
}

.accent-glow-circle {
  background-color: color-mix(in srgb, var(--accent-color), transparent 90%) !important;
}

.featured-card:hover .accent-glow-circle {
  background-color: color-mix(in srgb, var(--accent-color), transparent 80%) !important;
}

.featured-badge-tag {
  color: var(--accent-color) !important;
  background-color: var(--badge-bg) !important;
  font-size: clamp(0.65rem, 0.9vw, 0.85rem);
}

.title-text-accent,
.secondary-card-title {
  color: var(--featured-title) !important;
  font-size: clamp(1.4rem, 2vw, 2.2rem);
}

.body-description-text,
.secondary-body-text {
  color: var(--featured-desc) !important;
  font-size: clamp(0.9rem, 1.2vw, 1.2rem);
}

.bullet-list-text,
.secondary-bullet-text {
  color: var(--featured-bullets) !important;
  font-size: clamp(0.8rem, 1.1vw, 1.1rem);
}

.list-bullet-node {
  background-color: var(--accent-color) !important;
}

.secondary-card {
  background-color: var(--sec-bg) !important;
  border: 1px solid var(--sec-border) !important;
}

.secondary-card:hover {
  border-color: var(--sec-hover-border) !important;
}

.secondary-card-title {
  color: var(--sec-title) !important;
}

.secondary-card:hover .secondary-card-title {
  color: var(--accent-color) !important;
}

.secondary-bullet-node {
  background-color: var(--sec-desc) !important;
}

.logo-float {
  animation: logoFloating 3s infinite ease-in-out;
  font-size: clamp(2rem, 3vw, 3.5rem);
}

@keyframes logoFloating {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-6px);
  }
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .platforms-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .main-section-title {
    font-size: 2.75rem;
  }

  .title-text-accent,
  .secondary-card-title {
    font-size: 1.75rem;
  }

  .body-description-text,
  .secondary-body-text {
    font-size: 0.95rem;
  }

  .bullet-list-text,
  .secondary-bullet-text {
    font-size: 0.85rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .platforms-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .main-section-title {
    font-size: 3.4rem;
  }

  .title-text-accent,
  .secondary-card-title {
    font-size: 2rem;
  }

  .body-description-text,
  .secondary-body-text {
    font-size: 1.05rem;
  }

  .bullet-list-text,
  .secondary-bullet-text {
    font-size: 0.95rem;
  }
}

@media (min-width: 1536px) {
  .platforms-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .main-section-title {
    font-size: 4rem;
  }

  .title-text-accent,
  .secondary-card-title {
    font-size: 2.3rem;
  }

  .body-description-text,
  .secondary-body-text {
    font-size: 1.15rem;
  }

  .bullet-list-text,
  .secondary-bullet-text {
    font-size: 1.05rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .platforms-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .main-section-title {
    font-size: 5rem;
  }

  .title-text-accent,
  .secondary-card-title {
    font-size: 2.8rem;
  }

  .body-description-text,
  .secondary-body-text {
    font-size: 1.4rem;
  }

  .bullet-list-text,
  .secondary-bullet-text {
    font-size: 1.25rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .platforms-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .main-section-title {
    font-size: 2.5rem;
  }

  .title-text-accent,
  .secondary-card-title {
    font-size: 1.6rem;
  }

  .body-description-text,
  .secondary-body-text {
    font-size: 0.9rem;
  }

  .bullet-list-text,
  .secondary-bullet-text {
    font-size: 0.8rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .platforms-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .grid-cols-1 {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .main-section-title {
    font-size: 2.2rem;
  }

  .title-text-accent,
  .secondary-card-title {
    font-size: 1.4rem;
  }

  .body-description-text,
  .secondary-body-text {
    font-size: 0.85rem;
  }

  .bullet-list-text,
  .secondary-bullet-text {
    font-size: 0.8rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .platforms-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .grid-cols-1 {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  .main-section-title {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }

  .title-text-accent,
  .secondary-card-title {
    font-size: 1.25rem;
  }

  .body-description-text,
  .secondary-body-text {
    font-size: 0.85rem;
  }

  .bullet-list-text,
  .secondary-bullet-text {
    font-size: 0.75rem;
  }

  .featured-card,
  .secondary-card {
    padding: 1.5rem !important;
  }
}

@media (max-width: 360px) {
  .platforms-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .main-section-title {
    font-size: 1.6rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .platforms-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
```[cite: 7]