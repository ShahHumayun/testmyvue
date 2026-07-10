<template>
  <section :class="['ecommerce-solutions py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center solutions-heading">
        Complete <span class="text-[#00ffa3]">Ecommerce Solutions</span>
      </h2>
      
      <div ref="servicesGrid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="(service, idx) in services" 
          :key="idx"
          class="service-card group rounded-2xl p-8 cursor-pointer relative overflow-hidden"
        >
          <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-[#00ffa3] transition-transform duration-500 group-hover:rotate-6 icon-wrap">
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

// Inject global theme state context seamlessly
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
    { 
      opacity: 0, 
      y: 50 
    },
    { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      scrollTrigger: {
        trigger: servicesGrid.value,
        start: "top 85%",
        toggleActions: "play none none none"
      }
    }
  )
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
  --card-hover-shadow: rgba(0, 255, 163, 0.04);
  --icon-bg: #171717; /* bg-neutral-900 equivalent */
  --icon-border: #262626; /* border-neutral-800 equivalent */
  --title-color: #ffffff;
  --desc-color: #a3a3a3; /* text-neutral-400 equivalent */
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important; /* border-slate-200 equivalent */
  --heading-color: #0f172a; /* text-slate-900 equivalent */
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --card-hover-shadow: rgba(15, 23, 42, 0.05);
  --icon-bg: #f1f5f9; /* bg-slate-100 equivalent */
  --icon-border: #cbd5e1; /* border-slate-300 equivalent */
  --title-color: #000000;
  --desc-color: #000000; /* requested pure black layout rules */
}

/* ── Explicit Selector Rule Mappings ── */
.ecommerce-solutions {
  width: 100% !important;
}

.solutions-heading {
  color: var(--heading-color) !important;
  transition: color 0.4s ease;
}

.service-card {
  background-color: var(--card-bg) !important;
  border: 1px solid var(--card-border) !important;
  transition: transform 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease;
}

.service-card:hover {
  transform: translateY(-8px) !important;
  border-color: #00ffa3 !important;
  box-shadow: 0 20px 40px var(--card-hover-shadow) !important;
}

.icon-wrap {
  background-color: var(--icon-bg) !important;
  border: 1px solid var(--icon-border) !important;
  transition: background-color 0.4s ease, border-color 0.4s ease;
}

.service-title {
  color: var(--title-color) !important;
}

.service-card:hover .service-title {
  color: #00ffa3 !important;
}

.service-description {
  color: var(--desc-color) !important;
  transition: color 0.4s ease;
}
</style>