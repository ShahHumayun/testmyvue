<template>
  <section :class="['tech-stack-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center stack-main-heading">
        Built Using Modern Commerce Technologies
      </h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(cat, idx) in stack" :key="idx" class="stack-category-card rounded-xl p-6">
          <h3 class="text-xs font-bold tracking-widest uppercase mb-4 accent-text">{{ cat.category }}</h3>
          <ul class="space-y-2">
            <li v-for="tech in cat.items" :key="tech" class="tech-item flex items-center gap-3 text-sm stack-tech-row">
              <span class="marker-dot w-1.5 h-1.5 rounded-full transition-all"></span>{{ tech }}
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

const stack = [
  { category: 'Frontend', items: ['Next.js', 'Vue', 'Nuxt', 'Astro'] },
  { category: 'Commerce', items: ['Magento', 'Medusa', 'Commerce.js', 'Saleor'] },
  { category: 'Backend', items: ['Node.js', 'GraphQL', 'PostgreSQL', 'Redis'] },
  { category: 'Infra', items: ['Vercel', 'AWS', 'Cloudflare', 'Docker'] },
]
</script>

<style scoped>
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --heading-color: #ffffff;
  --card-bg: #0a0a0a;
  --card-border: #171717;
  --tech-row-color: #d4d4d4;
  --dot-bg: #404040;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --heading-color: #0f172a;
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --tech-row-color: #000000;
  --dot-bg: #000000;
}

.tech-stack-section { width: 100% !important; }
.stack-main-heading { color: var(--heading-color) !important; transition: color 0.4s ease; }
.accent-text { color: var(--accent-color) !important; }

.stack-category-card {
  background-color: var(--card-bg) !important;
  border: 1px solid var(--card-border) !important;
  transition: background-color 0.4s ease, border-color 0.4s ease;
}

.stack-tech-row { color: var(--tech-row-color) !important; transition: color 0.4s ease; }
.marker-dot { background-color: var(--dot-bg) !important; }

.tech-item:hover .marker-dot {
  background-color: var(--accent-color) !important;
  box-shadow: 0 0 10px var(--accent-color) !important;
}
</style>