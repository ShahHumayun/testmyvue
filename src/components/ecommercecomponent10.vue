<template>
  <section :class="['metrics-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center metrics-main-heading">
        Driving Real <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Ecommerce Results</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(m, idx) in metrics" :key="idx" class="flex flex-col items-center text-center space-y-4 metric-card p-8 rounded-2xl group">
          <div class="w-24 h-24 rounded-full border-4 flex items-center justify-center relative transition-colors speed-outer-ring">
            <div class="absolute inset-0 rounded-full border-4 border-t-[var(--accent-color)] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            <span class="text-xl font-bold metric-value-node">+{{ m.value }}%</span>
          </div>
          <p class="text-xs uppercase tracking-wider font-semibold max-w-[150px] metric-label-row">{{ m.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const metrics = [
  { value: 215, label: 'Avg Conversion Lift' }, { value: 320, label: 'Revenue Growth' },
  { value: 180, label: 'Mobile Engagement' }, { value: 145, label: 'Retention Increase' },
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
  --ring-border: #171717;
  --ring-hover-border: rgba(0, 255, 163, 0.3);
  --value-color: #ffffff;
  --label-color: #a3a3a3;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --heading-color: #0f172a;
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --ring-border: #e2e8f0;
  --ring-hover-border: rgba(249, 115, 22, 0.2);
  --value-color: #000000;
  --label-color: #000000;
}

.metrics-section { width: 100% !important; }
.metrics-main-heading { color: var(--heading-color) !important; transition: color 0.4s ease; }

.metric-card {
  background-color: var(--card-bg) !important;
  border: 1px solid var(--card-border) !important;
  transition: background-color 0.4s ease, border-color 0.4s ease;
}

.speed-outer-ring { border-color: var(--ring-border) !important; }
.metric-card:hover .speed-outer-ring { border-color: var(--ring-hover-border) !important; }

.metric-value-node { color: var(--value-color) !important; transition: color 0.4s ease; }
.metric-label-row { color: var(--label-color) !important; transition: color 0.4s ease; }
</style>