<template>
  <section
    :class="['essay-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-4xl mx-auto space-y-8 tracking-wide text-sm md:text-base leading-relaxed content-wrapper">

      <h2 class="text-2xl md:text-4xl font-extrabold tracking-tight text-center mb-12 main-essay-heading">
        Why Ecommerce Development Is Essential For <span class="accent-text">Modern Businesses</span>
      </h2>

      <div class="space-y-6">
        <div v-for="(block, index) in blocks" :key="index">
          <h3 v-if="block.heading" class="text-lg font-bold tracking-tight mt-6 block-subheading">
            {{ block.heading }}
          </h3>
          <p :class="['block-body-paragraph', { 'mt-2': block.heading }]">
            {{ block.body }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const blocks = [
  {
    body: "Digital commerce has shifted from an experimental channel to the primary engine for corporate scaling. To remain competitive, modern enterprises must move beyond traditional storefronts. High-performance custom ecommerce development provides the technical foundation needed to capture market traffic, monetize consumer preferences, and operate at the velocity today's economy demands."
  },
  {
    heading: 'Evolutionary Shifts in Online Shopping',
    body: "Online shopping is no longer just for occasional orders; it is a personalized ecosystem. Consumers now expect instantaneous loading, predictive inventory management, and curated product experiences. Businesses that leverage modern, data-driven systems can effectively target behavioral groups, significantly lowering customer acquisition costs while driving lifetime value."
  },
  {
    heading: 'Decoding Digital Consumer Behavior',
    body: 'The digital user journey is fragile. Issues like non-intuitive navigation, slow loading times, or complex checkout flows often lead to immediate cart abandonment. Our development paradigm prioritizes clarity and speed, removing technical bottlenecks and streamlining interfaces to align perfectly with conversion mapping and user intent.'
  },
  {
    heading: 'The Mobile Commerce Imperative',
    body: 'With mobile devices driving the majority of global transactions, a mobile-first strategy is mandatory. We engineer platforms with touch-target optimization, native integration for digital wallets like Apple and Google Pay, and high-fidelity performance that ensures seamless shopping experiences even over variable cellular networks.'
  },
  {
    heading: 'Optimizing Conversion Curves',
    body: 'True business efficiency comes from maximizing revenue from your existing traffic. We implement server-side optimizations, predictive product indexing, and one-click checkout flows. These technical refinements secure higher conversion rates and help maintain healthy profit margins by reducing friction at the final point of sale.'
  },
  {
    heading: 'Advanced Ecommerce SEO Structure',
    body: 'Organic growth relies on high search visibility. Generic sites often struggle to rank, but our systems use semantic HTML, clean URL architecture, and optimized schema markup. By focusing on technical SEO foundations, we ensure your product categories are easily indexed and highly visible to your target audience.'
  },
  {
    heading: 'Securing Payment Infrastructure',
    body: 'Trust is the currency of ecommerce. Our development process prioritizes security through PCI-compliant infrastructure, end-to-end payload encryption, and strict isolation of sensitive client data. By employing secure tokenization, we protect your brand and your customers from common data vulnerability threats.'
  },
  {
    heading: 'Scalability for Global Reach',
    body: 'Enterprise commerce must scale effortlessly during traffic spikes. By utilizing headless architecture and cloud-edge deployment, we decouple your storefront from heavy backend processes. This keeps your catalog lightning-fast during peak events, providing your brand with an infinitely scalable path to global growth.'
  },
]
</script>

<style scoped>
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --main-title-color: #ffffff;
  --subheading-color: #ffffff;
  --body-text-color: #a3a3a3;
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --main-title-color: #0f172a;
  --subheading-color: #000000;
  --body-text-color: #000000;
}

.essay-section {
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

.main-essay-heading {
  color: var(--main-title-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(1.8rem, 3vw, 3.5rem);
}

.block-subheading {
  color: var(--subheading-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(1.1rem, 1.5vw, 1.4rem);
}

.block-body-paragraph {
  color: var(--body-text-color) !important;
  transition: color 0.4s ease;
  font-size: clamp(0.875rem, 1.15vw, 1.15rem);
  line-height: 1.75;
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .essay-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .main-essay-heading {
    font-size: 2.5rem;
  }

  .block-subheading {
    font-size: 1.2rem;
  }

  .block-body-paragraph {
    font-size: 0.95rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .essay-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .main-essay-heading {
    font-size: 3.2rem;
  }

  .block-subheading {
    font-size: 1.35rem;
  }

  .block-body-paragraph {
    font-size: 1.05rem;
  }
}

@media (min-width: 1536px) {
  .essay-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .main-essay-heading {
    font-size: 3.8rem;
  }

  .block-subheading {
    font-size: 1.5rem;
  }

  .block-body-paragraph {
    font-size: 1.2rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .essay-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .main-essay-heading {
    font-size: 4.8rem;
  }

  .block-subheading {
    font-size: 1.8rem;
  }

  .block-body-paragraph {
    font-size: 1.4rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .essay-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .main-essay-heading {
    font-size: 2.3rem;
  }

  .block-subheading {
    font-size: 1.15rem;
  }

  .block-body-paragraph {
    font-size: 0.9rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .essay-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .main-essay-heading {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }

  .block-subheading {
    font-size: 1.1rem;
  }

  .block-body-paragraph {
    font-size: 0.875rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .essay-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .main-essay-heading {
    font-size: 1.65rem;
    margin-bottom: 2rem;
  }

  .block-subheading {
    font-size: 1rem;
  }

  .block-body-paragraph {
    font-size: 0.85rem;
  }
}

@media (max-width: 360px) {
  .essay-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .main-essay-heading {
    font-size: 1.5rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .essay-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>