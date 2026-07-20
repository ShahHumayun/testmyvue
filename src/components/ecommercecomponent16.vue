<template>
  <section :class="['cta-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <h2 class="text-3xl md:text-6xl font-bold tracking-tight cta-main-title">
        Ready To Build An <span class="accent-text">Ecommerce Store That Sells?</span>
      </h2>
      <p class="text-lg max-w-2xl mx-auto cta-description-text">
        Let's create a powerful ecommerce experience that attracts customers, increases conversions, and drives long-term growth.
      </p>
      <button class="pulse-glow-btn px-10 py-5 bg-[var(--accent-color)] text-black font-bold rounded-lg transition-all">
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

.cta-section { width: 100% !important; }
.accent-text { color: var(--accent-color) !important; }

.cta-main-title {
  color: var(--title-color) !important;
  transition: color 0.4s ease;
}

.cta-description-text {
  color: var(--desc-color) !important;
  transition: color 0.4s ease;
}

@keyframes continuousPulse {
  0%, 100% { box-shadow: 0 0 25px var(--pulse-low); }
  50% { box-shadow: 0 0 45px var(--pulse-mid); }
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
  font-size: 13.5px;
  padding: 10px 20px;
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
</style>