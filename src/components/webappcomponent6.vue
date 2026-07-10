<template>
  <section :class="['tech-section py-32 px-6 border-b relative z-20 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center tech-heading">
        Technologies <span class="text-[#00ffa3]">We Use</span>
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

// Inject global theme state context seamlessly
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
/* ── Encapsulated Visual Protection Boundaries ── */
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important; /* border-neutral-900 equivalent */
  --heading-color: #ffffff;
  --card-bg: #0a0a0a; /* bg-neutral-950 equivalent */
  --card-border: #171717; /* border-neutral-900 equivalent */
  --category-color: #737373; /* text-neutral-500 equivalent */
  --category-border: #171717;
  --tech-text-color: #d4d4d4; /* text-neutral-300 equivalent */
  --dot-bg: #262626; /* bg-neutral-800 equivalent */
  --shadow-hover: rgba(0, 255, 163, 0.02);
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important; /* border-slate-200 equivalent */
  --heading-color: #0f172a; /* text-slate-900 equivalent */
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --category-color: #64748b; /* text-slate-500 equivalent */
  --category-border: #e2e8f0;
  --tech-text-color: #334155; /* text-slate-700 equivalent */
  --dot-bg: #cbd5e1; /* bg-slate-300 equivalent */
  --shadow-hover: rgba(15, 23, 42, 0.03);
}

/* ── Explicit Selector Rule Overrides ── */
.tech-section {
  width: 100% !important;
}

.tech-heading {
  color: var(--heading-color) !important;
  transition: color 0.4s ease;
}

.tech-card {
  background-color: var(--card-bg) !important;
  border: 1px solid var(--card-border) !important;
  transition: background-color 0.4s ease, border-color 0.4s ease, box-shadow 0.3s ease;
}

.tech-card:hover {
  box-shadow: 0 0 30px var(--shadow-hover) !important;
}

.category-title {
  color: var(--category-color) !important;
  border-color: var(--category-border) !important;
  transition: color 0.4s ease, border-color 0.4s ease;
}

.tech-name-text {
  color: var(--tech-text-color) !important;
  transition: color 0.2s ease;
}

.dot-indicator {
  background-color: var(--dot-bg) !important;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

/* ── Precise Deep Interactions ── */
.tech-item:hover .tech-name-text {
  color: #00ffa3 !important;
}

.tech-item:hover .dot-indicator {
  background-color: #00ffa3 !important;
  box-shadow: 0 0 8px #00ffa3 !important;
}
</style>