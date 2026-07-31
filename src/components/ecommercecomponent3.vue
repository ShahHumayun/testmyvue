<template>
  <section
    :class="['ecommerce-solutions py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center solutions-heading">
        Complete <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Ecommerce Solutions</span>
      </h2>

      <div ref="servicesGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="(service, idx) in services" :key="idx"
          class="service-card group rounded-2xl p-8 cursor-pointer relative overflow-hidden">
          <div
            class="w-12 h-12 rounded-xl flex items-center justify-center mb-6 icon-wrap transition-transform duration-500 group-hover:rotate-6">
            <span class="text-xl group-hover:scale-110 transition-transform duration-300">{{ service.icon }}</span>
          </div>
          <h3 class="text-xl font-bold mb-3 tracking-tight service-title transition-colors">
            {{ service.title }}
          </h3>
          <p class="text-sm leading-relaxed service-description">
            {{ service.description }}
          </p>
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
const servicesGrid = ref(null)

const services = [
  { title: 'Custom Ecommerce Development', description: 'Fully customized online stores tailored to your business goals.', icon: '💎' },
  { title: 'Shopify Development', description: 'Scalable Shopify stores designed for growth and conversions.', icon: '🛍️' },
  { title: 'WooCommerce Solutions', description: 'Flexible ecommerce experiences powered by WordPress.', icon: '🔌' },
  { title: 'Marketplace Development', description: 'Build multi-vendor ecommerce platforms similar to Amazon or Etsy.', icon: '🏢' },
  { title: 'B2B Ecommerce Platforms', description: 'Advanced solutions for wholesale and enterprise businesses.', icon: '🤝' },
  { title: 'Headless Commerce Solutions', description: 'Future-ready ecommerce experiences with maximum flexibility.', icon: '⚡' }
]

onMounted(() => {
  const cards = servicesGrid.value.querySelectorAll('.service-card')
  gsap.fromTo(cards,
    { opacity: 0, y: 50 },
    {
      opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: "power2.out",
      scrollTrigger: { trigger: servicesGrid.value, start: "top 85%", toggleActions: "play none none none" }
    }
  )
})
</script>

<style scoped>
/* CHANGED: colour-only update — this section now uses the same alternating
   background pair as the full-bleed sections on services.vue / culture.vue
   (#1c1c1c on dark, #f2f2f2 on light) instead of pure #000/#fff, so it
   reads as the same "light grey on white / light black on black" band.
   Nothing else (service cards, icon boxes, accent colors, breakpoints)
   touched. */
.theme-dark {
  background-color: #1c1c1c !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --heading-color: #ffffff;
  --card-bg: #0a0a0a;
  --card-border: #171717;
  --card-hover-shadow: rgba(0, 255, 163, 0.04);
  --icon-bg: #171717;
  --icon-border: #262626;
  --title-color: #ffffff;
  --desc-color: #a3a3a3;
}

.theme-light {
  background-color: #f2f2f2 !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --heading-color: #0f172a;
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --card-hover-shadow: rgba(249, 115, 22, 0.1);
  --icon-bg: #f1f5f9;
  --icon-border: #cbd5e1;
  --title-color: #000000;
  --desc-color: #000000;
}

.ecommerce-solutions {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.max-w-7xl {
  max-width: 100% !important;
}

.solutions-heading {
  color: var(--heading-color) !important;
  font-size: clamp(2rem, 3.5vw, 4rem);
}

.service-card {
  background-color: var(--card-bg) !important;
  border: 1px solid var(--card-border) !important;
  padding: clamp(1.5rem, 2.5vw, 3rem) !important;
  transition: transform 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
}

.service-card:hover {
  transform: translateY(-8px) !important;
  border-color: var(--accent-color) !important;
  box-shadow: 0 20px 40px var(--card-hover-shadow) !important;
}

.icon-wrap {
  background-color: var(--icon-bg) !important;
  border: 1px solid var(--icon-border) !important;
  color: var(--accent-color) !important;
  transition: background-color 0.4s ease, border-color 0.4s ease;
  width: clamp(3rem, 4vw, 4.5rem) !important;
  height: clamp(3rem, 4vw, 4.5rem) !important;
}

.icon-wrap span {
  font-size: clamp(1.25rem, 1.8vw, 2.2rem) !important;
}

.service-title {
  color: var(--title-color) !important;
  font-size: clamp(1.25rem, 1.8vw, 1.8rem);
}

.service-card:hover .service-title {
  color: var(--accent-color) !important;
}

.service-description {
  color: var(--desc-color) !important;
  font-size: clamp(0.9rem, 1.2vw, 1.2rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .ecommerce-solutions {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .solutions-heading {
    font-size: 2.75rem;
  }

  .service-title {
    font-size: 1.35rem;
  }

  .service-description {
    font-size: 0.95rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .ecommerce-solutions {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .solutions-heading {
    font-size: 3.4rem;
  }

  .service-title {
    font-size: 1.5rem;
  }

  .service-description {
    font-size: 1.05rem;
  }
}

@media (min-width: 1536px) {
  .ecommerce-solutions {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .solutions-heading {
    font-size: 4rem;
  }

  .service-title {
    font-size: 1.75rem;
  }

  .service-description {
    font-size: 1.15rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .ecommerce-solutions {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .solutions-heading {
    font-size: 5rem;
  }

  .service-title {
    font-size: 2.2rem;
  }

  .service-description {
    font-size: 1.4rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .ecommerce-solutions {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .solutions-heading {
    font-size: 2.5rem;
  }

  .service-title {
    font-size: 1.25rem;
  }

  .service-description {
    font-size: 0.9rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .ecommerce-solutions {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .solutions-heading {
    font-size: 2.2rem;
  }

  .service-title {
    font-size: 1.15rem;
  }

  .service-description {
    font-size: 0.85rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .ecommerce-solutions {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .solutions-heading {
    font-size: 1.8rem;
    margin-bottom: 2.5rem;
  }

  .service-title {
    font-size: 1.1rem;
  }

  .service-description {
    font-size: 0.85rem;
  }
}

@media (max-width: 360px) {
  .ecommerce-solutions {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .solutions-heading {
    font-size: 1.6rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .ecommerce-solutions {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>