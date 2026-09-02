<template>
  <section :class="[
    'cta-section py-32 px-6 border-b relative z-20 transition-colors duration-500',
    isDarkMode ? 'border-neutral-900 bg-[#1c1c1c] theme-dark' : 'border-neutral-200 bg-[#f2f2f2] theme-light'
  ]">
    <div class="max-w-7xl mx-auto cta-container-wrapper">
      <h2
        :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-6 cta-main-heading', isDarkMode ? 'text-white' : 'text-black']">
        Ready To Simplify Your <span class="accent-text">NetSuite Integration?</span>
      </h2>
      <p
        :class="['text-center max-w-2xl mx-auto text-sm md:text-base mb-20 cta-subtext', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
        Whether you're connecting Magento, automating order flows, or unifying your entire commerce stack — our team is
        ready to build it with you.
      </p>

      <div ref="ctaTargetGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cta-grid-container">
        <router-link v-for="(cta, i) in ctaPaths" :key="i" :to="cta.link" :class="[
          'border rounded-lg p-6 transition-all duration-300 group hover:border-[var(--accent-color)]/40 block cta-card-box',
          isDarkMode
            ? 'bg-neutral-950 border-neutral-900 hover:bg-neutral-900/60'
            : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70'
        ]">
          <h3
            :class="['text-lg font-bold group-hover:text-[var(--accent-color)] transition-colors mb-2 cta-card-title', isDarkMode ? 'text-white' : 'text-black']">
            {{ cta.title }}
          </h3>
          <p
            :class="['text-xs leading-relaxed font-mono mb-4 cta-card-desc', isDarkMode ? 'text-neutral-500' : 'text-neutral-600']">
            {{ cta.description }}
          </p>
          <span
            class="text-xs font-mono uppercase tracking-wider accent-text group-hover:translate-x-1 transition-transform inline-block cta-action-text">
            {{ cta.action }} →
          </span>
        </router-link>
      </div>

      <div class="text-center mt-16 cta-footer-container">
        <router-link to="/consultation"
          class="inline-block px-10 py-4 bg-[var(--accent-color)] text-[#000000] font-bold text-sm uppercase tracking-wider rounded border border-[var(--accent-color)] hover:bg-transparent hover:text-[var(--accent-color)] transition-all duration-300 shadow-[0_0_25px_rgba(var(--accent-rgb),0.15)] cta-schedule-btn">
          Schedule A Consultation
        </router-link>

        <div class="mt-6">
          <button @click="goBack" class="back-btn" aria-label="Go back to previous page">
            <span class="back-arrow" aria-hidden="true">←</span>
            Go Back
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = inject('isDarkMode', ref(true))
const ctaTargetGrid = ref(null)

const router = useRouter()

function goBack() {
  router.back()
}

const ctaPaths = [
  {
    title: 'Schedule A Free Consultation',
    description: 'Walk through your current systems with an integration specialist and map out the fastest path to a synced NetSuite and Magento stack.',
    action: 'Book A Call',
    link: '/consultation'
  },
  {
    title: 'Get A Custom Integration Quote',
    description: 'Receive tailored pricing based on your data volume, existing platforms, and the complexity of your NetSuite integration requirements.',
    action: 'Request Pricing',
    link: '/consultation'
  },
  {
    title: 'Talk To Our NetSuite Experts',
    description: 'Connect directly with the engineers who have delivered dozens of NetSuite integrations across ecommerce, retail, and distribution.',
    action: 'Start A Conversation',
    link: '/consultation'
  }
]

let scrollTriggerInstance = null

onMounted(() => {
  const anim = gsap.fromTo(ctaTargetGrid.value.children, { opacity: 0, y: 20 }, {
    opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out',
    scrollTrigger: { trigger: ctaTargetGrid.value, start: 'top 85%' }
  })
  scrollTriggerInstance = anim.scrollTrigger
})

onUnmounted(() => {
  if (scrollTriggerInstance) scrollTriggerInstance.kill()
})
</script>

<style scoped>
.theme-dark {
  --accent-color: #00ffa3;
  --accent-rgb: 0, 255, 163;
}

.theme-light {
  --accent-color: #f97316;
  --accent-rgb: 249, 115, 22;
}

.accent-text {
  color: var(--accent-color);
}

.cta-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.cta-container-wrapper,
.max-w-7xl {
  max-width: 100% !important;
}

.cta-main-heading {
  font-size: clamp(1.8rem, 3.5vw, 4rem);
}

.cta-subtext {
  font-size: clamp(0.875rem, 1.15vw, 1.15rem);
  max-width: 100% !important;
}

.cta-card-box {
  padding: clamp(1.25rem, 2vw, 2rem);
}

.cta-card-title {
  font-size: clamp(1rem, 1.3vw, 1.35rem);
}

.cta-card-desc,
.cta-action-text {
  font-size: clamp(0.7rem, 0.9vw, 0.95rem);
}

.cta-schedule-btn {
  font-size: clamp(0.8rem, 1vw, 1rem);
  padding: clamp(0.75rem, 1.2vw, 1rem) clamp(1.5rem, 2.5vw, 2.5rem);
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid color-mix(in srgb, var(--accent-color), transparent 60%);
  color: var(--accent-color);
  font-family: inherit;
  font-weight: 700;
  font-size: clamp(0.7rem, 0.9vw, 0.95px);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 10px 22px;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.back-btn:hover {
  background-color: var(--accent-color);
  color: #000000;
  border-color: var(--accent-color);
  transform: scale(1.03);
  box-shadow: 0 0 25px rgba(var(--accent-rgb), 0.35);
}

.back-arrow {
  transition: transform 0.2s ease;
}

.back-btn:hover .back-arrow {
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

  .cta-main-heading {
    font-size: 2.8rem;
  }

  .cta-card-title {
    font-size: 1.15rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .cta-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .cta-main-heading {
    font-size: 3.5rem;
  }

  .cta-card-title {
    font-size: 1.25rem;
  }
}

@media (min-width: 1536px) {
  .cta-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .cta-main-heading {
    font-size: 4.2rem;
  }

  .cta-card-title {
    font-size: 1.4rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .cta-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .cta-main-heading {
    font-size: 5.2rem;
  }

  .cta-card-title {
    font-size: 1.7rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .cta-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .cta-main-heading {
    font-size: 2.5rem;
  }

  .cta-card-title {
    font-size: 1.1rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .cta-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .cta-main-heading {
    font-size: 2.1rem;
    margin-bottom: 2.5rem;
  }

  .cta-card-title {
    font-size: 1.05rem;
  }

  .cta-grid-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
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

  .cta-main-heading {
    font-size: 1.65rem;
    margin-bottom: 2rem;
  }

  .cta-grid-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.875rem;
  }

  .cta-card-box {
    padding: 1rem;
  }

  .cta-card-title {
    font-size: 1rem;
  }
}

@media (max-width: 360px) {
  .cta-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .cta-main-heading {
    font-size: 1.5rem;
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