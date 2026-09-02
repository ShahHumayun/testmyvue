<template>
  <!-- 4. INTEGRATION SERVICES -->
  <section :class="[
    'services-section py-32 px-6 border-b relative z-20 transition-colors duration-500',
    isDarkMode ? 'border-neutral-900 theme-dark' : 'border-neutral-200 theme-light'
  ]">
    <div class="max-w-7xl mx-auto services-container-wrapper">
      <h2
        :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-20 services-main-heading', isDarkMode ? 'text-white' : 'text-black']">
        Comprehensive <span class="accent-text">NetSuite Integration Solutions</span>
      </h2>
      <div ref="servicesContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 services-grid-container">
        <div v-for="(svc, idx) in coreServices" :key="idx" :class="[
          'group rounded-xl p-8 hover:border-[var(--accent-color)] transition-all duration-500 relative overflow-hidden flex flex-col justify-between border services-card-box',
          isDarkMode
            ? 'bg-neutral-950 border-neutral-900'
            : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70'
        ]">
          <!-- Decorative Vector Corner Mesh -->
          <div class="absolute top-0 right-0 w-24 h-24 accent-mesh transition-colors"></div>

          <div class="space-y-4">
            <div :class="[
              'w-10 h-10 rounded flex items-center justify-center text-lg accent-text border services-icon-box',
              isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
            ]">
              {{ svc.icon }}
            </div>
            <h3
              :class="['text-xl font-bold tracking-tight group-hover:text-[var(--accent-color)] transition-colors services-card-title', isDarkMode ? 'text-white' : 'text-black']">
              {{ svc.title }}
            </h3>
            <p
              :class="['text-sm leading-relaxed services-card-desc', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
              {{ svc.description }}
            </p>
          </div>
          <div :class="[
            'mt-8 pt-4 border-t flex items-center justify-between text-xs font-mono transition-colors services-card-footer',
            isDarkMode ? 'border-neutral-900 text-neutral-500 group-hover:text-neutral-300' : 'border-neutral-200 text-neutral-500 group-hover:text-neutral-700'
          ]">
            <span>Standard Connectivity</span>
            <span>REST / SOAP</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = inject('isDarkMode', ref(true))
const servicesContainer = ref(null)

const coreServices = [
  { title: 'NetSuite CRM Integration', description: 'Synchronize customer profiles, baseline tracking, and nested sales pipelines.', icon: '📊' },
  { title: 'NetSuite Ecommerce Integration', description: 'Connect retail digital store channels with central backend inventory tracking tools.', icon: '🛒' },
  { title: 'NetSuite Accounting Integration', description: 'Automate global transactional summaries and internal balance tracking.', icon: '📑' },
  { title: 'NetSuite Inventory Integration', description: 'Maintain complete cross-platform warehouse balance mapping.', icon: '📦' },
  { title: 'NetSuite Payment Gateway Integration', description: 'Deploy secure multi-currency payment validation and batch reconciliation paths.', icon: '💳' },
  { title: 'Custom API Integrations', description: 'Connect modern proprietary software infrastructure straight into standard NetSuite setups.', icon: '💻' }
]

let scrollTriggerInstance = null

onMounted(() => {
  const anim = gsap.fromTo(servicesContainer.value.children, { opacity: 0, y: 30 }, {
    opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
    scrollTrigger: { trigger: servicesContainer.value, start: 'top 80%' }
  })
  scrollTriggerInstance = anim.scrollTrigger
})

onUnmounted(() => {
  if (scrollTriggerInstance) scrollTriggerInstance.kill()
})
</script>

<style scoped>
.theme-dark {
  --accent-color: #00ffa3;
}

.theme-light {
  --accent-color: #f97316;
}

.accent-text {
  color: var(--accent-color);
}

.accent-mesh {
  background: radial-gradient(ellipse at top right, color-mix(in srgb, var(--accent-color), transparent 97%), transparent 60%);
}

.group:hover .accent-mesh {
  background: radial-gradient(ellipse at top right, color-mix(in srgb, var(--accent-color), transparent 92%), transparent 60%);
}

.services-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.services-container-wrapper,
.max-w-7xl {
  max-width: 100% !important;
}

.services-main-heading {
  font-size: clamp(1.8rem, 3.5vw, 4rem);
}

.services-card-box {
  padding: clamp(1.25rem, 2.5vw, 2.25rem);
}

.services-card-title {
  font-size: clamp(1.1rem, 1.4vw, 1.45rem);
}

.services-card-desc {
  font-size: clamp(0.75rem, 0.95vw, 1.05rem);
}

.services-icon-box {
  width: clamp(2.5rem, 3.5vw, 3.5rem);
  height: clamp(2.5rem, 3.5vw, 3.5rem);
  font-size: clamp(1.1rem, 1.5vw, 1.5rem);
}

.services-card-footer {
  font-size: clamp(0.7rem, 0.85vw, 0.9rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .services-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .services-main-heading {
    font-size: 2.8rem;
  }

  .services-card-title {
    font-size: 1.25rem;
  }

  .services-card-desc {
    font-size: 0.9rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .services-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .services-main-heading {
    font-size: 3.5rem;
  }

  .services-card-title {
    font-size: 1.35rem;
  }

  .services-card-desc {
    font-size: 1rem;
  }
}

@media (min-width: 1536px) {
  .services-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .services-main-heading {
    font-size: 4.2rem;
  }

  .services-card-title {
    font-size: 1.5rem;
  }

  .services-card-desc {
    font-size: 1.1rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .services-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .services-main-heading {
    font-size: 5.2rem;
  }

  .services-card-title {
    font-size: 1.8rem;
  }

  .services-card-desc {
    font-size: 1.3rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .services-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .services-main-heading {
    font-size: 2.5rem;
  }

  .services-card-title {
    font-size: 1.15rem;
  }

  .services-card-desc {
    font-size: 0.85rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .services-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .services-main-heading {
    font-size: 2.1rem;
    margin-bottom: 2rem;
  }

  .services-grid-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .services-card-title {
    font-size: 1.1rem;
  }

  .services-card-desc {
    font-size: 0.85rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .services-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .services-main-heading {
    font-size: 1.65rem;
    margin-bottom: 2rem;
  }

  .services-grid-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
  }

  .services-card-box {
    padding: 1.25rem;
  }

  .services-card-title {
    font-size: 1.05rem;
  }

  .services-card-desc {
    font-size: 0.8rem;
  }

  .services-icon-box {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
  }
}

@media (max-width: 360px) {
  .services-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .services-main-heading {
    font-size: 1.5rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .services-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
