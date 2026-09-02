<template>
  <section :class="[
    'magento-features-section py-32 px-6 border-b relative z-20 transition-colors duration-500',
    isDarkMode ? 'border-neutral-900 bg-[#1c1c1c] theme-dark' : 'border-neutral-200 bg-[#f2f2f2] theme-light'
  ]">
    <div class="max-w-5xl mx-auto magento-container-wrapper">

      <div class="text-center space-y-6 mb-20 fade-up-animation magento-header-box">
        <h2
          :class="['text-3xl md:text-5xl font-bold tracking-tight leading-tight magento-main-heading', isDarkMode ? 'text-white' : 'text-black']">
          Seamless Integration: <span class="accent-text">Magento to NetSuite</span> and <br />
          <span class="accent-text">NetSuite to Magento</span> for Enhanced eCommerce Efficiency
        </h2>
        <p
          :class="['max-w-3xl mx-auto text-lg md:text-xl leading-relaxed magento-intro-text', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
          NetSuite Magento Integration enables businesses to connect their ERP and eCommerce platforms,
          creating a unified, efficient system that synchronizes products, orders and customers data
          when orders are synced in real time.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 magento-grid-container">
        <div v-for="(feature, index) in features" :key="index" :class="[
          'p-6 rounded-2xl border hover:border-[var(--accent-color)]/30 transition-all duration-300 magento-card-box',
          isDarkMode
            ? 'bg-neutral-900/30 border-neutral-800'
            : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70'
        ]">
          <div class="flex items-start gap-3 mb-3">
            <div class="mt-1 flex-shrink-0">
              <div
                class="w-5 h-5 rounded-full bg-[var(--accent-color)]/10 border border-[var(--accent-color)] flex items-center justify-center magento-check-badge">
                <svg class="w-3 h-3 accent-text magento-check-svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  stroke-width="4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3
              :class="['text-lg font-bold tracking-tight magento-card-title', isDarkMode ? 'text-white' : 'text-black']">
              {{ feature.title }}</h3>
          </div>
          <p
            :class="['text-sm leading-relaxed pl-8 magento-card-desc', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
            {{ feature.desc }}
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const features = [
  { title: 'Real-Time Inventory Updates', desc: 'Updates in Netsuite are instantly reflected in Magento, ensuring accurate stock levels across all channels.' },
  { title: 'Customizable CRON Schedule', desc: 'The user can set up a customized CRON schedule, selecting the desired time frame for when the scripts will run and choosing which specific scripts to execute.' },
  { title: 'Better Customer Experience', desc: 'Accurate inventory and order information enhance the shopping experience for Magento customers, ensuring they have up-to-date details for a smoother purchasing process.' },
  { title: 'Custom Features Selection', desc: 'The user has the option to select only the customized features they need from the list of available options, rather than all features.' },
  { title: 'Bulk Product Synchronization', desc: 'Import all Netsuite products into Magento by either adding new products or updating existing product details to keep data aligned.' },
  { title: 'Reduced Manual Data Entry', desc: 'Automation minimizes the need for manual data entry, saving significant time and reducing the risk of human errors.' },
  { title: 'Order Status Updates', desc: 'Changes in order status in NetSuite are automatically reflected in Magento, enhancing transparency without manual admin intervention.' },
  { title: 'Data Synchronization', desc: 'New and updated product data from NetSuite is automatically pushed to Magento, centralizing information across platforms.' },
  { title: 'Bulk Orders Synchronization', desc: 'After setting up the store, the user has the option to import all Netsuite products into Magento. In this case, the user has two options: add all products to the Magento store or update all existing product details. The user must select one of these options to sync product details between NetSuite and the connector app.' },
  { title: 'Multi-Store Management', desc: 'The user can link multiple Magento stores to NetSuite via the connector app, allowing them to connect each store to either the same or different NetSuite ERP systems. This enables seamless data synchronization, ensuring that inventory, orders, and product details are consistently updated across all stores from a single interface.' },
  { title: 'Product Synchronization Options', desc: 'The user has multiple flexible options to add or update products efficiently. The first option is to manually import products into Magento. The second option allows the user to import newly added or updated products via a button click, based on the specified CRON time frame. The third option is to use a CRON job to automate the product add/update process.' },
  { title: 'Automated Order Management', desc: 'Magento orders are automatically synced to Netsuite, streamlining order processing. The user has multiple options to sync orders. The first option is to manually import orders into NetSuite. The second option allows the user to import newly added orders via a button click, based on the specified CRON time frame. The third option is to use a CRON job to automate the order sync process.' }
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

.fade-up-animation {
  animation: fadeUp 1s ease-out forwards;
}

@keyframes fadeUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.magento-features-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.magento-container-wrapper,
.max-w-5xl {
  max-width: 100% !important;
}

.magento-main-heading {
  font-size: clamp(1.8rem, 3.5vw, 4rem);
}

.magento-intro-text {
  font-size: clamp(0.95rem, 1.2vw, 1.25rem);
}

.magento-card-box {
  padding: clamp(1.25rem, 2.5vw, 2.25rem);
}

.magento-card-title {
  font-size: clamp(1.1rem, 1.35vw, 1.4rem);
}

.magento-card-desc {
  font-size: clamp(0.75rem, 0.95vw, 1.05rem);
}

.magento-check-badge {
  width: clamp(1.25rem, 1.5vw, 1.5rem);
  height: clamp(1.25rem, 1.5vw, 1.5rem);
}

.magento-check-svg {
  width: clamp(0.75rem, 0.9vw, 1rem);
  height: clamp(0.75rem, 0.9vw, 1rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .magento-features-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .magento-main-heading {
    font-size: 2.8rem;
  }

  .magento-intro-text {
    font-size: 1.1rem;
  }

  .magento-card-title {
    font-size: 1.2rem;
  }

  .magento-card-desc {
    font-size: 0.9rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .magento-features-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .magento-main-heading {
    font-size: 3.5rem;
  }

  .magento-intro-text {
    font-size: 1.2rem;
  }

  .magento-card-title {
    font-size: 1.3rem;
  }

  .magento-card-desc {
    font-size: 1rem;
  }
}

@media (min-width: 1536px) {
  .magento-features-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .magento-main-heading {
    font-size: 4.2rem;
  }

  .magento-intro-text {
    font-size: 1.35rem;
  }

  .magento-card-title {
    font-size: 1.45rem;
  }

  .magento-card-desc {
    font-size: 1.1rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .magento-features-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .magento-main-heading {
    font-size: 5.2rem;
  }

  .magento-intro-text {
    font-size: 1.6rem;
  }

  .magento-card-title {
    font-size: 1.75rem;
  }

  .magento-card-desc {
    font-size: 1.3rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .magento-features-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .magento-main-heading {
    font-size: 2.5rem;
  }

  .magento-intro-text {
    font-size: 1.05rem;
  }

  .magento-card-title {
    font-size: 1.15rem;
  }

  .magento-card-desc {
    font-size: 0.85rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .magento-features-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .magento-main-heading {
    font-size: 2.1rem;
  }

  .magento-intro-text {
    font-size: 1rem;
  }

  .magento-grid-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1.25rem;
  }

  .magento-card-title {
    font-size: 1.1rem;
  }

  .magento-card-desc {
    font-size: 0.85rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .magento-features-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .magento-main-heading {
    font-size: 1.65rem;
  }

  .magento-intro-text {
    font-size: 0.9rem;
  }

  .magento-header-box {
    margin-bottom: 2.5rem;
  }

  .magento-grid-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
  }

  .magento-card-box {
    padding: 1.125rem;
  }

  .magento-card-title {
    font-size: 1.05rem;
  }

  .magento-card-desc {
    font-size: 0.8rem;
    padding-left: 1.75rem;
  }
}

@media (max-width: 360px) {
  .magento-features-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .magento-main-heading {
    font-size: 1.5rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .magento-features-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>