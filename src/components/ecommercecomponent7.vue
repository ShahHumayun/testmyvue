<template>
  <section :class="['platforms-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center main-section-title">
        Platforms <span class="text-[#00ffa3]">We Work With</span>
      </h2>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">

        <div class="lg:col-span-3 featured-card rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden group transition-all">
          <div class="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl accent-glow-circle transition-colors"></div>

          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-6">
              <div class="text-4xl logo-float">🏬</div>
              <div>
                <span class="inline-block text-[10px] font-bold tracking-widest uppercase bg-[#00ffa3]/10 px-3 py-1 rounded-full mb-1 featured-badge-tag">Our Core Expertise</span>
                <h3 class="text-2xl font-bold tracking-tight title-text-accent">Magento</h3>
              </div>
            </div>

            <p class="text-sm leading-relaxed mb-6 max-w-xl body-description-text">
              Magento is our primary e-commerce platform. We specialize in building, migrating, and scaling enterprise-grade Magento 2 stores — from custom theme development and module engineering to complex B2B/B2C configurations, third-party API integrations, and performance tuning for high-traffic stores.
            </p>

            <ul class="grid grid-cols-2 gap-x-6 gap-y-2 text-xs bullet-list-text">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full list-bullet-node"></span>Magento 2 Development</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full list-bullet-node"></span>Custom Module Builds</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full list-bullet-node"></span>Store Migration</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full list-bullet-node"></span>B2B & Multi-Store Setup</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full list-bullet-node"></span>API & ERP Integrations</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full list-bullet-node"></span>Performance Optimization</li>
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
              For businesses looking for a lightweight, WordPress-native storefront, we build and customize WooCommerce solutions with clean checkout flows, plugin integrations, and theme customization.
            </p>

            <ul class="flex flex-col gap-2 text-xs secondary-bullet-text">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full secondary-bullet-node"></span>Store Setup & Customization</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full secondary-bullet-node"></span>Plugin & Payment Integration</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full secondary-bullet-node"></span>Theme Development</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'

// Inject global theme state context seamlessly
const isDarkMode = inject('isDarkMode', ref(true))
</script>

<style scoped>
/* ── Encapsulated Visual Protection Boundaries ── */
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important; /* border-neutral-900 equivalent */
  --section-title: #ffffff;
  
  /* Featured Magento Card */
  --featured-bg: #0a0a0a; /* bg-neutral-950 equivalent */
  --featured-border: rgba(0, 255, 163, 0.3);
  --featured-hover-border: #00ffa3;
  --glow-bg: rgba(0, 255, 163, 0.1);
  --glow-hover-bg: rgba(0, 255, 163, 0.2);
  --badge-text-color: #00ffa3;
  --featured-title: #ffffff;
  --featured-desc: #a3a3a3; /* text-neutral-400 equivalent */
  --featured-bullets: #d4d4d4; /* text-neutral-300 equivalent */
  --bullet-node-color: #00ffa3;

  /* Secondary WooCommerce Card */
  --sec-bg: #0a0a0a;
  --sec-border: #171717;
  --sec-hover-border: #262626; /* border-neutral-800 equivalent */
  --sec-title: #e5e5e5; /* text-neutral-200 equivalent */
  --sec-title-hover: #ffffff;
  --sec-desc: #737373; /* text-neutral-500 equivalent */
  --sec-bullets: #a3a3a3;
  --sec-bullet-node-color: #525252; /* bg-neutral-600 equivalent */
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important; /* border-slate-200 equivalent */
  --section-title: #0f172a;
  
  /* Featured Magento Card */
  --featured-bg: #ffffff;
  --featured-border: #e2e8f0;
  --featured-hover-border: rgba(0, 255, 163, 0.6);
  --glow-bg: rgba(0, 255, 163, 0.04);
  --glow-hover-bg: rgba(0, 255, 163, 0.08);
  --badge-text-color: #0f172a;
  --featured-title: #000000;
  --featured-desc: #000000; /* requested pure black text rules */
  --featured-bullets: #000000;
  --bullet-node-color: #00ffa3;

  /* Secondary WooCommerce Card */
  --sec-bg: #ffffff;
  --sec-border: #e2e8f0;
  --sec-hover-border: rgba(15, 23, 42, 0.2);
  --sec-title: #000000;
  --sec-title-hover: #00ffa3;
  --sec-desc: #000000;
  --sec-bullets: #000000;
  --sec-bullet-node-color: #000000;
}

/* ── Explicit Selector Rule Mappings ── */
.platforms-section {
  width: 100% !important;
}

.main-section-title {
  color: var(--section-title) !important;
  transition: color 0.4s ease;
}

/* ── Featured Card Rules ── */
.featured-card {
  background-color: var(--featured-bg) !important;
  border: 1px solid var(--featured-border) !important;
}

.featured-card:hover {
  border-color: var(--featured-hover-border) !important;
}

.accent-glow-circle {
  background-color: var(--glow-bg) !important;
}

.featured-card:hover .accent-glow-circle {
  background-color: var(--glow-hover-bg) !important;
}

.featured-badge-tag {
  color: var(--badge-text-color) !important;
}

.title-text-accent {
  color: var(--featured-title) !important;
}

.body-description-text {
  color: var(--featured-desc) !important;
  transition: color 0.4s ease;
}

.bullet-list-text {
  color: var(--featured-bullets) !important;
  transition: color 0.4s ease;
}

.list-bullet-node {
  background-color: var(--bullet-node-color) !important;
}

/* ── Secondary Card Rules ── */
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
  color: var(--sec-title-hover) !important;
}

.secondary-body-text {
  color: var(--sec-desc) !important;
  transition: color 0.4s ease;
}

.secondary-bullet-text {
  color: var(--sec-bullets) !important;
  transition: color 0.4s ease;
}

.secondary-bullet-node {
  background-color: var(--sec-bullet-node-color) !important;
  transition: background-color 0.4s ease;
}

/* ── Core Layout Animations ── */
@keyframes logoFloating { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
.logo-float { animation: logoFloating 3s infinite ease-in-out; }
</style>