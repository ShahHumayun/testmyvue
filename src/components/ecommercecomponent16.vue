<template>
  <section
    :class="['cta-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <h2 class="text-3xl md:text-6xl font-bold tracking-tight cta-main-title">
        Ready To Build An <span class="accent-text">Ecommerce Store That Sells?</span>
      </h2>
      <p class="text-lg max-w-2xl mx-auto cta-description-text">
        Let's create a powerful ecommerce experience that attracts customers, increases conversions, and drives
        long-term growth.
      </p>
      <button
        class="pulse-glow-btn px-10 py-5 bg-[var(--accent-color)] text-black font-bold rounded-lg transition-all cta-action-button">
        Start Your Ecommerce Project
      </button>

      <div class="cta-back-wrap">
        <button class="cta-back-btn" @click="goBack" aria-label="Go back to previous page">
          <span class="cta-back-arrow" aria-hidden="true">←</span>
          Go Back
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'
import { useRouter } from 'vue-router'

const isDarkMode = inject('isDarkMode', ref(true))

const router = useRouter()

function goBack() {
  router.back()
}
</script>

<style scoped>
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --title-color: #ffffff;
  --desc-color: #a3a3a3;
  --pulse-low: rgba(0, 255, 163, 0.2);
  --pulse-mid: rgba(0, 255, 163, 0.5);
  --pulse-high: rgba(0, 255, 163, 0.75);
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --title-color: #0f172a;
  --desc-color: #000000;
  --pulse-low: rgba(249, 115, 22, 0.15);
  --pulse-mid: rgba(249, 115, 22, 0.35);
  --pulse-high: rgba(249, 115, 22, 0.55);
}

.cta-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.max-w-4xl {
  max-width: 100% !important;
}

.accent-text {
  color: var(--accent-color) !important;
}

.cta-main-title {
  color: var(--title-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(2rem, 3.8vw, 4.5rem);
}

.cta-description-text {
  color: var(--desc-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(0.95rem, 1.2vw, 1.25rem);
  max-width: 100% !important;
}

.cta-action-button {
  font-size: clamp(0.9rem, 1.1vw, 1.15rem);
  padding: clamp(0.875rem, 1.5vw, 1.25rem) clamp(2rem, 3.5vw, 3.5rem) !important;
}

@keyframes continuousPulse {

  0%,
  100% {
    box-shadow: 0 0 25px var(--pulse-low);
  }

  50% {
    box-shadow: 0 0 45px var(--pulse-mid);
  }
}

.pulse-glow-btn {
  animation: continuousPulse 4s infinite ease-in-out;
}

.pulse-glow-btn:hover {
  box-shadow: 0 0 55px var(--pulse-high) !important;
}

.cta-back-wrap {
  display: flex;
  justify-content: center;
  padding-top: 8px;
}

.cta-back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff !important;
  color: #000000 !important;
  border: 1px solid #000000 !important;
  font-family: inherit;
  font-weight: 800;
  font-size: clamp(0.75rem, 0.95vw, 0.95rem);
  padding: clamp(0.5rem, 0.8vw, 0.75rem) clamp(1rem, 1.5vw, 1.5rem);
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-back-btn:hover {
  background-color: var(--accent-color) !important;
  transform: scale(1.03);
  box-shadow: 0 0 55px color-mix(in srgb, var(--accent-color), transparent 25%);
}

.cta-back-arrow {
  transition: transform 0.2s ease;
}

.cta-back-btn:hover .cta-back-arrow {
  transform: translateX(-3px);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .cta-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .cta-main-title {
    font-size: 3rem;
  }

  .cta-description-text {
    font-size: 1.05rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .cta-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .cta-main-title {
    font-size: 3.8rem;
  }

  .cta-description-text {
    font-size: 1.15rem;
  }
}

@media (min-width: 1536px) {
  .cta-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .cta-main-title {
    font-size: 4.5rem;
  }

  .cta-description-text {
    font-size: 1.3rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .cta-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .cta-main-title {
    font-size: 5.5rem;
  }

  .cta-description-text {
    font-size: 1.5rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .cta-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .cta-main-title {
    font-size: 2.75rem;
  }

  .cta-description-text {
    font-size: 1rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .cta-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .cta-main-title {
    font-size: 2.2rem;
  }

  .cta-description-text {
    font-size: 0.95rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .cta-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .cta-main-title {
    font-size: 1.8rem;
  }

  .cta-description-text {
    font-size: 0.875rem;
  }
}

@media (max-width: 360px) {
  .cta-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .cta-main-title {
    font-size: 1.6rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .cta-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
