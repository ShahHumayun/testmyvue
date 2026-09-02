<template>
  <section
    :class="['benefits-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <div
        class="video-showcase-box border rounded-2xl overflow-hidden aspect-square shadow-[0_0_50px_-15px_rgba(0,0,0,0.3)] relative">
        <video autoplay loop muted playsinline preload="auto"
          poster="https://images.pexels.com/photos/5903961/pexels-photo-5903961.jpeg?auto=compress&cs=tinysrgb&w=1200"
          class="w-full h-full object-cover video-mask"
          src="https://videos.pexels.com/video-files/5903961/5903961-hd_1920_1080_25fps.mp4"></video>
        <div class="absolute inset-0 media-gradient-overlay"></div>

        <div class="absolute top-8 left-8">
          <h4 class="text-xs font-bold uppercase tracking-widest media-label-tag">Global Operations</h4>
          <p class="text-4xl font-black mt-2 media-label-title">Scalable Tech</p>
        </div>
      </div>

      <div class="space-y-8">
        <h2 class="text-5xl font-bold tracking-tight leading-tight section-main-title">
          Why Businesses <br /><span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Invest In
            Ecommerce</span>
        </h2>

        <ul ref="whyList" class="space-y-6">
          <li v-for="(benefit, idx) in commerceBenefits" :key="idx" class="benefit-item flex items-center gap-4">
            <span class="w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 svg-circle">
              <svg class="w-3 h-3 check-vector" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span class="text-lg font-medium benefit-text-row">{{ benefit }}</span>
          </li>
        </ul>
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
const whyList = ref(null)

const commerceBenefits = [
  'Sell 24/7 Without Limits', 'Reach Global Customers',
  'Increase Revenue Opportunities', 'Better Customer Experience',
  'Automated Order Management', 'Powerful Analytics & Insights',
  'Scalable Business Growth'
]

onMounted(() => {
  const items = whyList.value.querySelectorAll('.benefit-item')
  gsap.set(items, { opacity: 0, x: -20 })
  gsap.to(items, {
    opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power2.out",
    scrollTrigger: { trigger: whyList.value, start: "top 80%" }
  })
})
</script>

<style scoped>
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --section-title-color: #ffffff;
  --benefit-txt: #ffffff;
  --showcase-bg: #0a0a0a;
  --showcase-border: #171717;
  --video-opacity: 0.8;
  --video-overlay: rgba(0, 0, 0, 0.4);
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --section-title-color: #000000;
  --benefit-txt: #000000;
  --showcase-bg: #ffffff;
  --showcase-border: #e2e8f0;
  --video-opacity: 0.95;
  --video-overlay: rgba(0, 0, 0, 0.15);
}

.benefits-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.max-w-7xl {
  max-width: 100% !important;
}

.video-showcase-box {
  background-color: var(--showcase-bg) !important;
  border: 1px solid var(--showcase-border) !important;
  width: 100% !important;
}

.video-mask {
  opacity: var(--video-opacity) !important;
}

.media-gradient-overlay {
  background-color: var(--video-overlay) !important;
}

.media-label-tag {
  color: #ffffff !important;
  font-size: clamp(0.75rem, 1vw, 1.1rem);
}

.media-label-title {
  color: #ffffff !important;
  font-size: clamp(2rem, 3.5vw, 4.2rem);
}

.section-main-title {
  color: var(--section-title-color) !important;
  font-size: clamp(2.2rem, 4vw, 4.5rem);
}

.svg-circle {
  border-color: var(--accent-color) !important;
  width: clamp(1.5rem, 2vw, 2.2rem) !important;
  height: clamp(1.5rem, 2vw, 2.2rem) !important;
}

.check-vector {
  color: var(--accent-color) !important;
  width: clamp(0.75rem, 1vw, 1.2rem) !important;
  height: clamp(0.75rem, 1vw, 1.2rem) !important;
}

.benefit-text-row {
  color: var(--benefit-txt) !important;
  font-size: clamp(1rem, 1.4vw, 1.5rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .benefits-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .section-main-title {
    font-size: 3rem;
  }

  .media-label-title {
    font-size: 3rem;
  }

  .benefit-text-row {
    font-size: 1.1rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .benefits-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .section-main-title {
    font-size: 3.8rem;
  }

  .media-label-title {
    font-size: 3.5rem;
  }

  .benefit-text-row {
    font-size: 1.2rem;
  }
}

@media (min-width: 1536px) {
  .benefits-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .section-main-title {
    font-size: 4.5rem;
  }

  .media-label-title {
    font-size: 4.2rem;
  }

  .benefit-text-row {
    font-size: 1.35rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .benefits-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .section-main-title {
    font-size: 5.5rem;
  }

  .media-label-title {
    font-size: 5rem;
  }

  .benefit-text-row {
    font-size: 1.6rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .benefits-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .section-main-title {
    font-size: 2.75rem;
  }

  .media-label-title {
    font-size: 2.75rem;
  }

  .benefit-text-row {
    font-size: 1.05rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .benefits-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .grid-cols-1 {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .section-main-title {
    font-size: 2.4rem;
  }

  .media-label-title {
    font-size: 2.4rem;
  }

  .benefit-text-row {
    font-size: 1rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .benefits-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .grid-cols-1 {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .section-main-title {
    font-size: 1.9rem;
    line-height: 1.2;
  }

  .media-label-title {
    font-size: 1.9rem;
  }

  .media-label-tag {
    font-size: 0.65rem;
  }

  .benefit-text-row {
    font-size: 0.9rem;
  }
}

@media (max-width: 360px) {
  .benefits-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .section-main-title {
    font-size: 1.7rem;
  }

  .media-label-title {
    font-size: 1.7rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .benefits-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>