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
    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))
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
</style>