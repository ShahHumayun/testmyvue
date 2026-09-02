<template>
  <section :class="['why-webhive-section', props.darkMode ? 'theme-dark' : 'theme-light']">
    <div class="section-container">

      <div class="section-header">
        <span class="mini-title">Value Proposition</span>
        <h2 class="section-heading">Why Webhive</h2><br>
      </div>

      <div class="cards-grid">
        <div v-for="(card, index) in pillars" :key="index" class="value-card"
          :class="{ 'featured-card': card.featured }">
          <div class="card-inner-padding-box">
            <div class="card-top-row">
              <div class="icon-wrapper">
                <div class="icon-glow"></div>
                <div class="icon-inner" v-html="card.icon"></div>
              </div>
            </div>

            <div class="card-content">
              <h3 class="card-title">{{ card.title }}</h3>
              <p class="card-desc">{{ card.desc }}</p>
            </div>
          </div>

          <div class="card-bottom-accent"></div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  darkMode: {
    type: Boolean,
    default: true
  }
})

const pillars = ref([
  {
    title: 'Unified Operational Intelligence',
    desc: 'Move beyond fragmented software. We unify isolated workflows into responsive, data-driven revenue engines powered by advanced, adaptive logic.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94-3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" /></svg>`,
    featured: false
  },
  {
    title: 'End-to-End Delivery Excellence',
    desc: 'From advanced Web platforms and high-performance mobile apps to seamless NetSuite integrations, we consolidate all engineering capabilities into a single cohesive stack.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>`,
    featured: false
  },
  {
    title: 'Radical Enterprise Speed',
    desc: 'We aggressively compress engineering timelines using automated workflow development, microservices architecture, and deeply agile production pipelines.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" /></svg>`,
    featured: false
  },
  {
    title: 'AI-Native Engineering',
    desc: 'We don’t just "add AI" as an afterthought; we deploy machine learning frameworks at the fundamental core. Your products will adapt, auto-optimize, and self-correct over time.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 21l8.982-8.983m-1.985-3.413L17 3.5l-8.982 8.983M3.204 12a10.045 10.045 0 0 0 1.554 4.356l-1.381 1.382A11.962 11.962 0 0 1 2.25 12c0-2.3.646-4.45 1.77-6.28l1.381 1.382A10.045 10.045 0 0 0 3.204 12Zm14.242 4.356A10.045 10.045 0 0 0 19.043 12c0-1.593-.37-3.097-1.026-4.436l1.382-1.382C20.535 7.9 21.152 9.878 21.152 12c0 2.122-.617 4.1-1.753 5.736l-1.382-1.382ZM16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Z" /></svg>`,
    featured: true
  },
  {
    title: 'Outcome-Driven Ecosystems',
    desc: 'Every business contract, deployment strategy, and system optimization is bound tightly to clear, trackable metrics engineered to grow your financial and system operations.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.59 2.51a14.98 14.98 0 0 0-6.16 12.12A14.98 14.98 0 0 0 15.59 14.37Zm0 0a15.01 15.01 0 0 1-5.84 7.37m5.84-7.37v3.75m-5.84-3.75v3.75m-3.42-4.74a14.98 14.98 0 0 1-3.42-4.74M6.75 12a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" /></svg>`,
    featured: false
  },
  {
    title: 'Future-Proof Foundations',
    desc: 'Say goodbye to breaking updates and system rebuilds. Our cloud architecture scales symmetrically to handle rising web requests, database transactions, and sudden traffic surges.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12v18H3V3Z" /></svg>`,
    featured: false
  }
])
</script>

<style scoped>
.why-webhive-section {
  --accent-color: #00ffa3;
  --transition-speed: 0.5s;

  width: 100%;
  max-width: 100%;
  padding: clamp(48px, 8vh, 120px) clamp(16px, 4vw, 24px);
  font-family: system-ui, -apple-system, sans-serif;
  position: relative;
  z-index: 10;
  transition: background-color var(--transition-speed) ease, color var(--transition-speed) ease;

  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  box-sizing: border-box !important;
}

.theme-dark {
  background-color: #0b0c10;
  color: #ffffff;
  --accent-color: #00ffa3;
}

.theme-light {
  background-color: #f8fafc;
  color: #0f172a;
  --accent-color: #f97316;
}

.why-webhive-section *,
.why-webhive-section *::before,
.why-webhive-section *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.section-container {
  width: 100%;
  /* Fluid width: scales continuously with the viewport instead of jumping
     between fixed breakpoint values. margin: auto keeps it centered at
     every screen size, from the smallest phone to the largest TV. */
  max-width: clamp(320px, 92vw, 1500px);
  margin: 0 auto !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
}

.section-header {
  text-align: center !important;
  margin-bottom: clamp(32px, 6vh, 64px);
}

.mini-title {
  font-family: monospace;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  color: var(--accent-color);
  display: block;
  margin-bottom: 8px;
}

.section-heading {
  font-size: clamp(1.7rem, 4.5vw, 3.2rem);
  font-weight: 950;
  text-transform: uppercase;
  letter-spacing: -0.02em;
}

.cards-grid {
  display: grid !important;
  grid-template-columns: repeat(1, 1fr);
  gap: 16px;
  width: 100%;
  max-width: clamp(320px, 92vw, 1500px);
  margin: 0 auto !important;
}

.value-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 220px;
  border-radius: 14px;
  position: relative;
  overflow: hidden;
  padding: 0 !important;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, box-shadow 0.3s, background-color var(--transition-speed);
}

.theme-dark .value-card {
  background-color: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.theme-light .value-card {
  background-color: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02);
}

.value-card:hover {
  transform: translateY(-8px);
  border-color: color-mix(in srgb, var(--accent-color), transparent 65%);
}

.theme-dark .value-card:hover {
  background-color: rgba(255, 255, 255, 0.03);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.45);
}

.theme-light .value-card:hover {
  background-color: #ffffff;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);
}

.theme-dark .value-card.featured-card {
  background: linear-gradient(160deg, color-mix(in srgb, var(--accent-color), transparent 93%), rgba(255, 255, 255, 0.015) 60%);
  border-color: color-mix(in srgb, var(--accent-color), transparent 75%);
}

.theme-light .value-card.featured-card {
  background: linear-gradient(160deg, color-mix(in srgb, var(--accent-color), transparent 96%), #ffffff 60%);
  border-color: color-mix(in srgb, var(--accent-color), transparent 80%);
}

.card-inner-padding-box {
  padding: 28px 22px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
}

.card-top-row {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
}

.icon-wrapper {
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-inner {
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  border: 1px solid color-mix(in srgb, var(--accent-color), transparent 80%);
  transition: transform 0.3s ease, background-color 0.3s ease;
  background: color-mix(in srgb, var(--accent-color), transparent 94%);
}

.icon-inner :deep(svg) {
  width: 24px;
  height: 24px;
  stroke: var(--accent-color);
  transition: stroke 0.3s;
}

.icon-glow {
  position: absolute;
  inset: -4px;
  background-color: var(--accent-color);
  border-radius: 16px;
  filter: blur(16px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 1;
}

.value-card:hover .icon-glow {
  opacity: 0.2;
}

.value-card:hover .icon-inner {
  transform: scale(1.08) rotate(-4deg);
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex-grow: 1;
  text-align: center;
  align-items: center;
}

.card-title {
  font-size: 1.15rem;
  font-weight: 800;
  line-height: 1.3;
}

.card-desc {
  font-size: 13.5px;
  line-height: 1.6;
  transition: color var(--transition-speed);
}

.theme-dark .card-desc {
  color: rgba(255, 255, 255, 0.6);
}

.theme-light .card-desc {
  color: #475569;
}

.card-bottom-accent {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  transform: scaleX(0);
  transform-origin: center;
  background: var(--accent-color);
  transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
}

.value-card:hover .card-bottom-accent {
  transform: scaleX(1);
}

/* ==========================================================================
   Mobile Landscape / Small Tablets: 576px — 768px
   Still a single column here — the cards read better full-width until
   there's genuinely enough room for two columns side by side.
   ========================================================================== */
@media (min-width: 576px) {
  .cards-grid {
    gap: 18px;
  }

  .card-inner-padding-box {
    padding: 32px 26px !important;
  }

  .value-card {
    min-height: 240px;
  }

  .card-title {
    font-size: 1.2rem;
  }

  .card-desc {
    font-size: 14px;
  }
}

/* ==========================================================================
   Laptops / Large Tablets: 769px — 1024px
   Two-column grid begins here.
   ========================================================================== */
@media (min-width: 769px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
  }

  .value-card {
    min-height: 260px;
  }

  .card-inner-padding-box {
    padding: 36px 30px !important;
  }

  .icon-wrapper {
    width: 52px;
    height: 52px;
  }

  .icon-inner :deep(svg) {
    width: 26px;
    height: 26px;
  }

  .card-title {
    font-size: clamp(19px, 2vw, 22px);
  }

  .card-desc {
    font-size: 14px;
  }
}

@media (min-width: 992px) {
  .cards-grid {
    gap: 26px;
  }

  .card-inner-padding-box {
    padding: 40px 32px !important;
  }
}

/* ==========================================================================
   Desktops: 1025px — 1200px
   ========================================================================== */
@media (min-width: 1025px) {
  .cards-grid {
    gap: 30px;
  }

  .value-card {
    min-height: 270px;
  }

  .card-inner-padding-box {
    padding: 42px 34px !important;
  }

  .icon-wrapper {
    width: 56px;
    height: 56px;
  }

  .icon-inner :deep(svg) {
    width: 28px;
    height: 28px;
  }

  .card-title {
    font-size: clamp(20px, 2.1vw, 25px);
  }

  .card-desc {
    font-size: 14.5px;
  }
}

/* ==========================================================================
   Extra Large Screens / Desktops / TVs: 1201px and up
   ========================================================================== */
@media (min-width: 1201px) {
  .cards-grid {
    gap: 32px;
  }

  .card-inner-padding-box {
    padding: 45px 36px !important;
  }

  .icon-wrapper {
    width: 60px;
    height: 60px;
  }

  .icon-inner :deep(svg) {
    width: 30px;
    height: 30px;
  }
}

/* ==========================================================================
   Ultra-wide / Large TVs: 1536px and up
   Scale up spacing and type so content doesn't feel lost on huge displays
   ========================================================================== */
@media (min-width: 1536px) {
  .section-heading {
    font-size: 3.5rem;
  }

  .cards-grid {
    gap: 36px;
  }

  .value-card {
    min-height: 290px;
  }

  .card-inner-padding-box {
    padding: 50px 40px !important;
  }

  .icon-wrapper {
    width: 66px;
    height: 66px;
  }

  .icon-inner :deep(svg) {
    width: 33px;
    height: 33px;
  }

  .card-title {
    font-size: 1.7rem;
  }

  .card-desc {
    font-size: 15.5px;
  }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Keeps scaling instead of plateauing at 1536px, so cards don't shrink
   relative to a much larger viewport / viewing distance.
   ========================================================================== */
@media (min-width: 1920px) {
  .section-heading {
    font-size: 3.9rem;
  }

  .cards-grid {
    gap: 40px;
  }

  .value-card {
    min-height: 310px;
  }

  .card-inner-padding-box {
    padding: 54px 44px !important;
  }

  .icon-wrapper {
    width: 72px;
    height: 72px;
  }

  .icon-inner :deep(svg) {
    width: 36px;
    height: 36px;
  }

  .card-title {
    font-size: 1.85rem;
  }

  .card-desc {
    font-size: 16.5px;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   cards, and icons growing proportionally instead of looking undersized.
   ========================================================================== */
@media (min-width: 2560px) {
  .section-container {
    max-width: 1900px;
  }

  .cards-grid {
    max-width: 1900px;
    gap: 46px;
  }

  .section-heading {
    font-size: 4.4rem;
  }

  .value-card {
    min-height: 330px;
  }

  .card-inner-padding-box {
    padding: 60px 48px !important;
  }

  .icon-wrapper {
    width: 80px;
    height: 80px;
  }

  .icon-inner :deep(svg) {
    width: 40px;
    height: 40px;
  }

  .card-title {
    font-size: 2rem;
  }

  .card-desc {
    font-size: 17.5px;
  }
}

/* ==========================================================================
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
  .why-webhive-section {
    padding-left: 14px;
    padding-right: 14px;
  }

  .section-heading {
    font-size: 1.55rem;
  }

  .mini-title {
    font-size: 10px;
  }

  .card-inner-padding-box {
    padding: 22px 16px !important;
  }

  .value-card {
    min-height: 200px;
  }

  .icon-wrapper {
    width: 42px;
    height: 42px;
  }

  .icon-inner :deep(svg) {
    width: 21px;
    height: 21px;
  }

  .card-title {
    font-size: 1.02rem;
  }

  .card-desc {
    font-size: 12.5px;
  }
}
</style>