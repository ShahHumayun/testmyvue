<template>
  <section :class="[
    'benefits-section py-32 px-6 relative z-20 overflow-hidden transition-colors duration-500',
    isDarkMode ? 'bg-black theme-dark' : 'bg-white theme-light'
  ]" ref="sectionRoot">
    <div class="max-w-7xl mx-auto benefits-container-wrapper">

      <h2
        :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-24 benefits-main-heading', isDarkMode ? 'text-white' : 'text-black']">
        Key Benefits of <span class="accent-text">NetSuite Magento Integration</span>
      </h2>

      <div class="space-y-32 benefits-rows-wrapper">
        <div class="feature-row grid lg:grid-cols-2 gap-16 items-center">
          <div class="text-content-left space-y-4">
            <h3 :class="['text-2xl font-bold benefits-card-title', isDarkMode ? 'text-white' : 'text-black']">Automated
              Data Synchronization</h3>
            <p :class="['leading-relaxed benefits-card-desc', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
              Automatically syncs data between Magento and NetSuite, including orders, products, and customers data when
              orders are synced, reducing manual effort and minimizing data entry errors.
            </p>
          </div>
          <div
            :class="['image-content-right overflow-hidden rounded-2xl border benefits-img-box', isDarkMode ? 'border-neutral-800' : 'border-neutral-200']">
            <img
              src="https://images.unsplash.com/photo-1771922748624-b205cf5d002d?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Data Sync" class="w-full h-80 object-cover benefits-img-tag" />
          </div>
        </div>

        <div class="feature-row grid lg:grid-cols-2 gap-16 items-center">
          <div
            :class="['image-content-left order-2 lg:order-1 overflow-hidden rounded-2xl border benefits-img-box', isDarkMode ? 'border-neutral-800' : 'border-neutral-200']">
            <img
              src="https://plus.unsplash.com/premium_photo-1664297989345-f4ff2063b212?q=80&w=1098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Inventory Updates" class="w-full h-80 object-cover benefits-img-tag" />
          </div>
          <div class="text-content-right order-1 lg:order-2 space-y-4">
            <h3 :class="['text-2xl font-bold benefits-card-title', isDarkMode ? 'text-white' : 'text-black']">Real-Time
              Inventory Updates</h3>
            <p :class="['leading-relaxed benefits-card-desc', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
              Keeps inventory levels up to date across both platforms, preventing stock discrepancies and ensuring that
              customers see accurate product availability on your Magento store.
            </p>
          </div>
        </div>

        <div class="feature-row grid lg:grid-cols-2 gap-16 items-center">
          <div class="text-content-left space-y-4">
            <h3 :class="['text-2xl font-bold benefits-card-title', isDarkMode ? 'text-white' : 'text-black']">Faster
              Order Processing</h3>
            <p :class="['leading-relaxed benefits-card-desc', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
              Orders placed in Magento are immediately reflected in NetSuite, streamlining the fulfillment process,
              reducing delays, and improving delivery times.
            </p>
          </div>
          <div
            :class="['image-content-right overflow-hidden rounded-2xl border benefits-img-box', isDarkMode ? 'border-neutral-800' : 'border-neutral-200']">
            <img
              src="https://images.unsplash.com/photo-1751448555253-f39c06e29d82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Order Processing" class="w-full h-80 object-cover benefits-img-tag" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = inject('isDarkMode', ref(true))

const sectionRoot = ref(null)
let triggers = []

onMounted(() => {
  const rows = sectionRoot.value.querySelectorAll('.feature-row')

  rows.forEach((row) => {
    const textLeft = row.querySelector('.text-content-left')
    const imgRight = row.querySelector('.image-content-right')
    const imgLeft = row.querySelector('.image-content-left')
    const textRight = row.querySelector('.text-content-right')

    if (textLeft && imgRight) {
      const a1 = gsap.from(textLeft, { x: -50, opacity: 0, duration: 1, scrollTrigger: { trigger: row, start: 'top 80%' } })
      const a2 = gsap.from(imgRight, { x: 50, opacity: 0, duration: 1, scrollTrigger: { trigger: row, start: 'top 80%' } })
      if (a1.scrollTrigger) triggers.push(a1.scrollTrigger)
      if (a2.scrollTrigger) triggers.push(a2.scrollTrigger)
    }

    if (imgLeft && textRight) {
      const a3 = gsap.from(imgLeft, { x: -50, opacity: 0, duration: 1, scrollTrigger: { trigger: row, start: 'top 80%' } })
      const a4 = gsap.from(textRight, { x: 50, opacity: 0, duration: 1, scrollTrigger: { trigger: row, start: 'top 80%' } })
      if (a3.scrollTrigger) triggers.push(a3.scrollTrigger)
      if (a4.scrollTrigger) triggers.push(a4.scrollTrigger)
    }
  })
})

onUnmounted(() => {
  triggers.forEach(t => t.kill())
})
</script>

<style scoped>
.theme-dark {
  --accent-color: #00ffa3;
}

.theme-light {
  --accent-color: #f97316;
}

.accent-text {
  color: var(--accent-color);
}

.benefits-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.benefits-container-wrapper,
.max-w-7xl {
  max-width: 100% !important;
}

.benefits-main-heading {
  font-size: clamp(1.8rem, 3.5vw, 4rem);
}

.benefits-card-title {
  font-size: clamp(1.2rem, 1.6vw, 1.75rem);
}

.benefits-card-desc {
  font-size: clamp(0.8rem, 1vw, 1.1rem);
}

.benefits-img-tag {
  height: clamp(16rem, 24vw, 32rem);
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

  .benefits-main-heading {
    font-size: 2.8rem;
  }

  .benefits-card-title {
    font-size: 1.4rem;
  }

  .benefits-card-desc {
    font-size: 0.95rem;
  }

  .benefits-img-tag {
    height: 22rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .benefits-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .benefits-main-heading {
    font-size: 3.5rem;
  }

  .benefits-card-title {
    font-size: 1.6rem;
  }

  .benefits-card-desc {
    font-size: 1.05rem;
  }

  .benefits-img-tag {
    height: 26rem;
  }
}

@media (min-width: 1536px) {
  .benefits-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .benefits-main-heading {
    font-size: 4.2rem;
  }

  .benefits-card-title {
    font-size: 1.85rem;
  }

  .benefits-card-desc {
    font-size: 1.15rem;
  }

  .benefits-img-tag {
    height: 30rem;
  }
}

/* ---------- 4K / UHD / large TVs (2560px and up) ---------- */
@media (min-width: 2560px) {
  .benefits-section {
    padding-left: 16rem;
    padding-right: 16rem;
  }

  .benefits-main-heading {
    font-size: 5.8rem;
  }

  .benefits-card-title {
    font-size: 2.5rem;
  }

  .benefits-card-desc {
    font-size: 1.5rem;
  }

  .benefits-img-tag {
    height: 42rem;
  }
}

/* ---------- 4K / UHD Standard Range / 1921px to 2559px ---------- */
@media (min-width: 1921px) and (max-width: 2559px) {
  .benefits-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .benefits-main-heading {
    font-size: 5.2rem;
  }

  .benefits-card-title {
    font-size: 2.2rem;
  }

  .benefits-card-desc {
    font-size: 1.35rem;
  }

  .benefits-img-tag {
    height: 36rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .benefits-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .benefits-main-heading {
    font-size: 2.5rem;
  }

  .benefits-card-title {
    font-size: 1.3rem;
  }

  .benefits-card-desc {
    font-size: 0.9rem;
  }

  .benefits-img-tag {
    height: 18rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .benefits-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .benefits-main-heading {
    font-size: 2.1rem;
    margin-bottom: 3rem;
  }

  .benefits-rows-wrapper {
    gap: 4rem;
  }

  .feature-row {
    grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
    gap: 2rem;
  }

  .benefits-card-title {
    font-size: 1.25rem;
  }

  .benefits-card-desc {
    font-size: 0.9rem;
  }

  .benefits-img-tag {
    height: 16rem;
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

  .benefits-main-heading {
    font-size: 1.65rem;
    margin-bottom: 2.5rem;
  }

  .benefits-rows-wrapper {
    gap: 3rem;
  }

  .feature-row {
    grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
    gap: 1.5rem;
  }

  .benefits-card-title {
    font-size: 1.15rem;
  }

  .benefits-card-desc {
    font-size: 0.85rem;
  }

  .benefits-img-tag {
    height: 13rem;
  }
}

@media (max-width: 360px) {
  .benefits-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .benefits-main-heading {
    font-size: 1.5rem;
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