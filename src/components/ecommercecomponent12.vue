<template>
  <section
    :class="['testimonials-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-4xl mx-auto text-center space-y-12">
      <h2 class="text-sm font-bold tracking-widest uppercase accent-text testimonials-main-tag">Trusted By Ecommerce
        Brands</h2>

      <div class="relative min-h-[120px] flex items-center justify-center">
        <transition name="carousel-fade" mode="out-in">
          <blockquote :key="active" class="text-xl md:text-2xl font-medium leading-relaxed italic max-w-2xl quote-text">
            "{{ testimonials[active] }}"
          </blockquote>
        </transition>
      </div>

      <div class="flex justify-center gap-1.5">
        <button v-for="(_, idx) in testimonials" :key="idx" @click="active = idx"
          class="h-2 rounded-full transition-all duration-300 dot-indicator"
          :class="{ 'active-dot': active === idx }" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const testimonials = [
  'The team rebuilt our store from the ground up — conversions doubled within a quarter.',
  'Best technical partner we have worked with. Performance is unreal.',
  'They handled our global rollout flawlessly across 12 markets.',
]

const active = ref(0)
let timer

onMounted(() => {
  timer = setInterval(() => { active.value = (active.value + 1) % testimonials.length }, 5000)
})

onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.theme-dark {
  background: linear-gradient(to bottom, #000000, #0a0a0a, #000000) !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --text-quote: #ffffff;
  --dot-bg: #262626;
}

.theme-light {
  background: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --text-quote: #000000;
  --dot-bg: #cbd5e1;
}

.testimonials-section {
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

.testimonials-main-tag {
  font-size: clamp(0.7rem, 0.95vw, 0.9rem);
}

.quote-text {
  color: var(--text-quote) !important;
  transition: color 0.4s ease;
  font-size: clamp(1.2rem, 1.9vw, 2.15rem);
  max-width: 100% !important;
}

.dot-indicator {
  background-color: var(--dot-bg) !important;
  width: 0.5rem !important;
}

.dot-indicator.active-dot {
  background-color: var(--accent-color) !important;
  width: 1.5rem !important;
}

.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity .4s ease, transform .4s ease;
}

.carousel-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.carousel-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .testimonials-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .testimonials-main-tag {
    font-size: 0.75rem;
  }

  .quote-text {
    font-size: 1.65rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .testimonials-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .testimonials-main-tag {
    font-size: 0.8rem;
  }

  .quote-text {
    font-size: 1.9rem;
  }
}

@media (min-width: 1536px) {
  .testimonials-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .testimonials-main-tag {
    font-size: 0.85rem;
  }

  .quote-text {
    font-size: 2.25rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .testimonials-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .testimonials-main-tag {
    font-size: 1rem;
  }

  .quote-text {
    font-size: 2.75rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .testimonials-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .testimonials-main-tag {
    font-size: 0.72rem;
  }

  .quote-text {
    font-size: 1.5rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .testimonials-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .testimonials-main-tag {
    font-size: 0.7rem;
  }

  .quote-text {
    font-size: 1.35rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .testimonials-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .testimonials-main-tag {
    font-size: 0.65rem;
  }

  .quote-text {
    font-size: 1.2rem;
  }
}

@media (max-width: 360px) {
  .testimonials-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .testimonials-main-tag {
    font-size: 0.6rem;
  }

  .quote-text {
    font-size: 1.1rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .testimonials-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>
