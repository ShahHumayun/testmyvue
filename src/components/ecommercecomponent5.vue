<template>
  <section :class="['process-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-24 text-center process-heading">
        From Idea <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">To Revenue Generation</span>
      </h2>
      
      <div class="relative block lg:flex items-start justify-between gap-6 space-y-12 lg:space-y-0">
        <div class="hidden lg:block absolute top-[27px] left-0 right-0 h-[2px] desktop-timeline-line z-0"></div>
        
        <div v-for="(step, idx) in steps" :key="idx" class="relative z-10 flex-1 group">
          <div class="flex lg:flex-col items-center lg:items-start gap-6 lg:gap-0">
            <div class="w-14 h-14 rounded-full border-2 flex items-center justify-center font-mono font-bold transition-all duration-500 lg:mb-6 flex-shrink-0 step-badge-node">
              0{{ idx + 1 }}
            </div>
            <div>
              <h3 class="text-lg font-bold mb-2 step-card-title transition-colors">
                {{ step.title }}
              </h3>
              <p class="text-sm leading-relaxed max-w-sm step-card-description">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const steps = [
  { title: 'Discovery & Strategy', description: 'Deep dive into your goals, audience, and competitive landscape.' },
  { title: 'UX & Design', description: 'Conversion-driven interface design rooted in your brand.' },
  { title: 'Development', description: 'Engineering performant, scalable, secure commerce infrastructure.' },
  { title: 'Testing & QA', description: 'Rigorous validation across devices, browsers, and payment flows.' },
  { title: 'Launch & Growth', description: 'Deployment, monitoring, and ongoing optimization for sustained growth.' },
]
</script>

<style scoped>
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --heading-color: #ffffff;
  --line-color: #171717;
  --node-bg: #0a0a0a;
  --node-border: #262626;
  --node-text: #737373;
  --title-color: #ffffff;
  --desc-color: #a3a3a3;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --heading-color: #0f172a;
  --line-color: #e2e8f0;
  --node-bg: #ffffff;
  --node-border: #cbd5e1;
  --node-text: #475569;
  --title-color: #000000;
  --desc-color: #000000;
}

.process-section { width: 100% !important; }
.process-heading { color: var(--heading-color) !important; transition: color 0.4s ease; }
.desktop-timeline-line { background-color: var(--line-color) !important; transition: background-color 0.4s ease; }

.step-badge-node {
  background-color: var(--node-bg) !important;
  border-color: var(--node-border) !important;
  color: var(--node-text) !important;
}

.group:hover .step-badge-node {
  border-color: var(--accent-color) !important;
  color: var(--accent-color) !important;
  box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.15);
}

.step-card-title { color: var(--title-color) !important; }
.group:hover .step-card-title { color: var(--accent-color) !important; }
.step-card-description { color: var(--desc-color) !important; transition: color 0.4s ease; }
</style>