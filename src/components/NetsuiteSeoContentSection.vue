<template>
  <section :class="[
    'why-netsuite-section py-32 px-6 border-b relative z-20 transition-colors duration-500',
    isDarkMode ? 'border-neutral-900 bg-neutral-950/20 text-neutral-400 theme-dark' : 'border-neutral-200 bg-white text-neutral-600 theme-light'
  ]">
    <div
      class="max-w-4xl mx-auto space-y-8 tracking-wide text-sm md:text-base leading-relaxed why-netsuite-container-wrapper">

      <h2
        :class="['text-2xl md:text-4xl font-extrabold tracking-tight text-center mb-12 why-netsuite-main-heading', isDarkMode ? 'text-white' : 'text-black']">
        Why NetSuite Integration Is Essential For <span class="accent-text">Modern Businesses</span>
      </h2>

      <div class="space-y-8 why-netsuite-grid-container">
        <div v-for="(item, index) in contentBlocks" :key="index" class="why-netsuite-card-box">
          <h3
            :class="['text-lg font-bold tracking-tight mb-3 why-netsuite-card-title', isDarkMode ? 'text-white' : 'text-black']">
            {{ item.title }}
          </h3>
          <p class="why-netsuite-card-text">{{ item.text }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const contentBlocks = [
  {
    title: 'Achieve Operational Agility',
    text: 'Manual data entry and disconnected systems break corporate agility. Integrating your software stack with Oracle NetSuite transforms fragmented information into a unified digital entity, providing the foundation for long-term scalability.'
  },
  {
    title: 'Maximize Core Efficiency',
    text: 'Operating in silos limits visibility and creates administrative bottlenecks. Linking third-party systems to NetSuite syncs operational metrics dynamically, ensuring every team works from a single, accurate source of truth.'
  },
  {
    title: 'Automate Business Processes',
    text: 'Manual entry is prone to error and slows down delivery. Our automated data pipelines replace human-led workflows with secure, real-time validation loops, allowing your staff to focus on strategic growth rather than clerical tasks.'
  },
  {
    title: 'Real-Time Data Synchronization',
    text: 'Batch processing is too slow for today\'s global market. Event-driven API networks ensure your sales, procurement, and financial data update instantly, providing leadership with the accurate insights needed for rapid decision-making.'
  },
  {
    title: 'Optimize Ecommerce Pipelines',
    text: 'Connecting your store to NetSuite prevents inventory conflicts and taxation errors. Automated synchronization maps web transactions directly to accounting, ensuring your retail front-end and back-end inventory stay perfectly aligned.'
  },
  {
    title: 'Omnichannel CRM Visibility',
    text: 'Disconnected sales and support logs hide the true health of your client accounts. Systematically mapping CRM data to NetSuite records gives your team a 360-degree view, reducing onboarding friction and improving customer satisfaction.'
  },
  {
    title: 'Precision Inventory Management',
    text: 'Avoid stockouts and logistics bottlenecks with centralized inventory tracking. Custom API services provide distribution managers with real-time visibility across all warehouse locations, maximizing fulfillment performance.'
  },
  {
    title: 'Data-Driven Growth',
    text: 'Stop wasting time on manual CSV assembly. Direct data linking populates your dashboards with verified financial and operational metrics instantly, giving leadership the predictive power to scale efficiently.'
  }
]
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

.why-netsuite-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.why-netsuite-container-wrapper,
.max-w-4xl {
  max-width: 100% !important;
}

.why-netsuite-main-heading {
  font-size: clamp(1.6rem, 3.2vw, 3.5rem);
}

.why-netsuite-card-title {
  font-size: clamp(1rem, 1.3vw, 1.35rem);
}

.why-netsuite-card-text {
  font-size: clamp(0.8rem, 1vw, 1.05rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .why-netsuite-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .why-netsuite-main-heading {
    font-size: 2.6rem;
  }

  .why-netsuite-card-title {
    font-size: 1.15rem;
  }

  .why-netsuite-card-text {
    font-size: 0.95rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .why-netsuite-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .why-netsuite-main-heading {
    font-size: 3.2rem;
  }

  .why-netsuite-card-title {
    font-size: 1.25rem;
  }

  .why-netsuite-card-text {
    font-size: 1rem;
  }
}

@media (min-width: 1536px) {
  .why-netsuite-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .why-netsuite-main-heading {
    font-size: 3.8rem;
  }

  .why-netsuite-card-title {
    font-size: 1.4rem;
  }

  .why-netsuite-card-text {
    font-size: 1.1rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .why-netsuite-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .why-netsuite-main-heading {
    font-size: 4.5rem;
  }

  .why-netsuite-card-title {
    font-size: 1.7rem;
  }

  .why-netsuite-card-text {
    font-size: 1.25rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .why-netsuite-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .why-netsuite-main-heading {
    font-size: 2.3rem;
  }

  .why-netsuite-card-title {
    font-size: 1.1rem;
  }

  .why-netsuite-card-text {
    font-size: 0.9rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .why-netsuite-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .why-netsuite-main-heading {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .why-netsuite-card-title {
    font-size: 1.05rem;
  }

  .why-netsuite-card-text {
    font-size: 0.85rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .why-netsuite-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .why-netsuite-main-heading {
    font-size: 1.55rem;
    margin-bottom: 2rem;
  }

  .why-netsuite-card-title {
    font-size: 1rem;
  }

  .why-netsuite-card-text {
    font-size: 0.8rem;
  }
}

@media (max-width: 360px) {
  .why-netsuite-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .why-netsuite-main-heading {
    font-size: 1.4rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .why-netsuite-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>