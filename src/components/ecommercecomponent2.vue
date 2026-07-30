<template>
  <section ref="counterContainer"
    :class="['ecommerce-stats py-24 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-center text-sm font-bold tracking-widest uppercase mb-16 section-subtitle">
        Powering Ecommerce Growth
      </h2>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(stat, idx) in stats" :key="idx"
          class="trust-card p-6 rounded-xl text-center space-y-2 transition-all duration-300">
          <div class="text-3xl md:text-5xl font-black tracking-tight counter-display">
            <span class="trust-counter" :data-target="stat.value">0</span>{{ stat.suffix }}
          </div>
          <p class="text-xs md:text-sm font-medium tracking-wide uppercase stat-label">{{ stat.label }}</p>
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

const counterContainer = ref(null)

const stats = [
  { value: 250, suffix: '+', label: 'Products Successfully Launched' },
  { value: 100, suffix: '+', label: 'Ecommerce Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 500, suffix: '+', label: 'In Online Sales Generated' }
]

onMounted(() => {
  const counters = counterContainer.value.querySelectorAll('.trust-counter')

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-target'))

    gsap.fromTo(counter,
      { innerText: 0 },
      {
        innerText: target,
        duration: 2.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: counterContainer.value,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        snap: { innerText: 1 },
        modifiers: {
          innerText: (value) => Math.floor(value)
        }
      }
    )
  })
})
</script>

<style scoped>
/* ── Encapsulated Visual Protection Boundaries ── */
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --subtitle-color: #737373;
  --card-bg: rgba(10, 10, 10, 0.4);
  --card-border: rgba(23, 23, 23, 0.6);
  --card-hover-border: rgba(0, 255, 163, 0.3);
  --counter-color: #00ffa3;
  --label-color: #a3a3a3;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --subtitle-color: #475569;
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --card-hover-border: rgba(15, 23, 42, 0.2);
  --counter-color: #0f172a;
  --label-color: #0f172a;
}

/* ── Explicit Selector Rule Overrides & 100% Width ── */
.ecommerce-stats {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 8rem);
  padding-right: clamp(2rem, 5vw, 8rem);
  box-sizing: border-box;
}

.max-w-7xl {
  max-width: 100% !important;
}

.section-subtitle {
  color: var(--subtitle-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(0.85rem, 1.2vw, 1.15rem);
}

.trust-card {
  background-color: var(--card-bg) !important;
  border: 1px solid var(--card-border) !important;
  padding: clamp(1.5rem, 2.5vw, 3rem) !important;
}

.trust-card:hover {
  border-color: var(--card-hover-border) !important;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.02);
}

.counter-display {
  color: var(--counter-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(2.5rem, 4.5vw, 5.5rem);
}

.stat-label {
  color: var(--label-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(0.85rem, 1.3vw, 1.25rem);
}

/* =========================================================================
   BREAKPOINT TIERS (Expanded Text & Width for Large Screens)
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .ecommerce-stats {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .counter-display {
    font-size: 3.5rem;
  }

  .stat-label {
    font-size: 0.95rem;
  }

  .section-subtitle {
    font-size: 0.95rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .ecommerce-stats {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .counter-display {
    font-size: 4.2rem;
  }

  .stat-label {
    font-size: 1.1rem;
  }

  .section-subtitle {
    font-size: 1.05rem;
  }
}

@media (min-width: 1536px) {
  .ecommerce-stats {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .counter-display {
    font-size: 5rem;
  }

  .stat-label {
    font-size: 1.25rem;
  }

  .section-subtitle {
    font-size: 1.2rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .ecommerce-stats {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .counter-display {
    font-size: 6.5rem;
  }

  .stat-label {
    font-size: 1.5rem;
  }

  .section-subtitle {
    font-size: 1.4rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .ecommerce-stats {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .counter-display {
    font-size: 3rem;
  }

  .stat-label {
    font-size: 0.9rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .ecommerce-stats {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .counter-display {
    font-size: 2.5rem;
  }

  .stat-label {
    font-size: 0.85rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .ecommerce-stats {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .counter-display {
    font-size: 2.2rem;
  }

  .stat-label {
    font-size: 0.8rem;
  }

  .section-subtitle {
    font-size: 0.8rem;
  }
}

@media (max-width: 360px) {
  .ecommerce-stats {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .counter-display {
    font-size: 1.9rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .ecommerce-stats {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>