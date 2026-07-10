<template>
  <section :class="['rg-features', isDarkMode ? 'theme-dark' : 'theme-light']" ref="sectionRef">
    <span class="rg-label">Key Features</span>
    <h2 class="rg-features__heading">What the site does</h2>

    <div class="rg-features__grid" ref="gridRef">
      <div class="rg-card" v-for="f in features" :key="f.title">
        <div class="rg-card__glow"></div>
        <div class="rg-card__icon" v-html="f.icon"></div>
        <h3 class="rg-card__title">{{ f.title }}</h3>
        <p class="rg-card__desc">{{ f.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, inject } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Inject the shared site theme preference seamlessly
const isDarkMode = inject('isDarkMode', ref(true))

const sectionRef = ref(null)
const gridRef = ref(null)

const features = [
  {
    title: 'Instant Quote Calculator',
    desc: 'Customers enter dimensions, glass type, and edge finish, and get a live price estimate before checkout.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="2" width="16" height="20" rx="2" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="14" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M8 7h8M8 10h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
  },
  {
    title: 'Custom Dimension Rules',
    desc: 'Validates maximum and minimum surface area thresholds dynamically, handling structural glass constraint configurations safely.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 18h18M6 6v4M10 6v4M14 6v4M18 6v4M6 14v4M12 14v4M18 14v4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
  },
  {
    title: 'Shape Selection Wizard',
    desc: 'Interactive grid allowing selectors to toggle between rectangles, circles, arches, or sketch uploads cleanly.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" stroke-width="1.6"/><circle cx="17" cy="7" r="3" stroke="currentColor" stroke-width="1.6"/><path d="M4 17l4-4 4 4M14 20h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  },
  {
    title: 'Edge & Corner Finishes',
    desc: 'Supports high-end configuration variables, mapping seamed, flat-polished, beveled, and radiused corner premiums automatically.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 20V8a4 4 0 014-4h12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><path d="M8 14h8M12 10v8" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>'
  },
  {
    title: 'WooCommerce B2B Wholesale',
    desc: 'Unlocks tailored tiered discounts, dynamic structural pricing matrices, and business-tier quote approvals.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 9l9-5 9 5v10a1 1 0 01-1 1H4a1 1 0 01-1-1V9z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M9 20V12h6v8" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>'
  },
  {
    title: 'Custom Shipping Logic',
    desc: 'Complex checkout routing matrix optimizing dynamic local freight versus heavy crate courier carrier allocations.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="15" height="13" rx="1" stroke="currentColor" stroke-width="1.6"/><path d="M17 8h4l2 3v5h-6V8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="6" cy="18" r="2" stroke="currentColor" stroke-width="1.6"/><circle cx="18" cy="18" r="2" stroke="currentColor" stroke-width="1.6"/></svg>'
  }
]

let st

onMounted(() => {
  gsap.set(gridRef.value.children, { opacity: 0, y: 30 })
  st = ScrollTrigger.create({
    trigger: sectionRef.value,
    start: 'top 75%',
    once: true,
    onEnter: () => {
      gsap.to(gridRef.value.children, {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power3.out'
      })
    }
  })
})

onBeforeUnmount(() => st?.kill())
</script>

<style scoped>
/* CSS Theme Variable Mapping Matrix */
.theme-dark {
  --features-bg: #000000;
  --text-heading: #ffffff;
  --card-bg: rgba(255, 255, 255, 0.015);
  --card-border: rgba(255, 255, 255, 0.1);
  --card-title: #ffffff;
  --card-desc: rgba(255, 255, 255, 0.6);
  --card-glow: radial-gradient(circle, rgba(0, 255, 163, 0.07) 0%, transparent 70%);
  --icon-wrap-bg: rgba(0, 255, 163, 0.06);
}

.theme-light {
  --features-bg: #ffffff;
  --text-heading: #0f172a;
  --card-bg: #f8fafc;
  --card-border: rgba(15, 23, 42, 0.08);
  --card-title: #0f172a;
  --card-desc: #475569;
  --card-glow: radial-gradient(circle, rgba(0, 255, 163, 0.04) 0%, transparent 70%);
  --icon-wrap-bg: rgba(0, 255, 163, 0.12);
}

.rg-features {
  background: var(--features-bg);
  padding: 100px 24px;
  transition: background-color 0.4s ease;
}

.rg-label {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 12.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #00ffa3;
  margin-bottom: 12px;
}

.rg-features__heading {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: clamp(1.5rem, 2.8vw, 2rem);
  color: var(--text-heading);
  margin: 0 0 40px;
  transition: color 0.4s ease;
}

.rg-features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.rg-card {
  position: relative;
  padding: 26px 22px;
  border-radius: 14px;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease, background-color 0.4s ease;
}

.rg-card:hover {
  border-color: rgba(0, 255, 163, 0.4);
  transform: translateY(-4px);
}

.rg-card__glow {
  position: absolute;
  top: -40%;
  right: -30%;
  width: 200px;
  height: 200px;
  background: var(--card-glow);
  pointer-events: none;
  z-index: 0;
}

.rg-card__icon {
  position: relative;
  z-index: 1;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: var(--icon-wrap-bg);
  color: #00ffa3;
  margin-bottom: 20px;
  transition: background-color 0.4s ease;
}

.rg-card__title {
  position: relative;
  z-index: 1;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: var(--card-title);
  margin: 0 0 10px;
  transition: color 0.4s ease;
}

.rg-card__desc {
  position: relative;
  z-index: 1;
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  line-height: 1.6;
  color: var(--card-desc);
  margin: 0;
  transition: color 0.4s ease;
}

@media (max-width: 960px) {
  .rg-features__grid { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 600px) {
  .rg-features__grid { grid-template-columns: 1fr; }
  .rg-card { padding: 22px 18px; }
}
</style>