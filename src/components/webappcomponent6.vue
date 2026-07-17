<template>
  <section :class="['tech-section py-32 px-6 border-b relative z-20 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center tech-heading">
        Technologies <span class="accent-text">We Use</span>
      </h2>
      <div ref="techGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(cat, idx) in techStack" :key="idx" class="tech-card border rounded-xl p-6 transition-all duration-300">
          <h3 class="text-xs font-bold tracking-[0.2em] uppercase mb-4 border-b pb-2 category-title">
            {{ cat.category }}
          </h3>
          <ul class="space-y-2.5">
            <li v-for="(tech, tIdx) in cat.items" :key="tIdx" class="tech-item flex items-center gap-3 font-medium transition-colors duration-200 cursor-default">
              <span class="w-1.5 h-1.5 rounded-full dot-indicator"></span>
              <span class="tech-name-text">{{ tech }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = inject('isDarkMode', ref(true))
const techGrid = ref(null)

const techStack = [
  { category: 'Frontend', items: ['Vue.js', 'React.js', 'Next.js'] },
  { category: 'Backend', items: ['Node.js', 'Laravel', 'Python'] },
  { category: 'Database', items: ['MySQL', 'PostgreSQL', 'MongoDB'] },
  { category: 'Cloud', items: ['AWS', 'Azure', 'Google Cloud'] }
]

onMounted(() => {
  if (techGrid.value) {
    gsap.fromTo(techGrid.value.children, { opacity: 0, y: 30 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: techGrid.value, start: 'top 85%' }
    })
  }
})
</script>

<style scoped>
/* Theme variable mapping */
.theme-dark { --accent-color: #00ffa3; }
.theme-light { --accent-color: #f97316; }

.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --heading-color: #ffffff;
  --card-bg: #0a0a0a;
  --card-border: #171717;
  --category-color: #737373;
  --category-border: #171717;
  --tech-text-color: #d4d4d4;
  --dot-bg: #262626;
  --shadow-hover: rgba(0, 255, 163, 0.02);
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --heading-color: #0f172a;
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --category-color: #64748b;
  --category-border: #e2e8f0;
  --tech-text-color: #334155;
  --dot-bg: #cbd5e1;
  --shadow-hover: rgba(249, 115, 22, 0.05);
}

.accent-text { color: var(--accent-color); }

.tech-heading { color: var(--heading-color) !important; }
.tech-card { background-color: var(--card-bg) !important; border: 1px solid var(--card-border) !important; }
.tech-card:hover { box-shadow: 0 0 30px var(--shadow-hover) !important; }

.category-title { color: var(--category-color) !important; border-color: var(--category-border) !important; }
.tech-name-text { color: var(--tech-text-color) !important; }
.dot-indicator { background-color: var(--dot-bg) !important; }

.tech-item:hover .tech-name-text { color: var(--accent-color) !important; }
.tech-item:hover .dot-indicator { background-color: var(--accent-color) !important; box-shadow: 0 0 8px var(--accent-color) !important; }
</style>