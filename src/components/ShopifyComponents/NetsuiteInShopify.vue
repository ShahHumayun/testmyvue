<template>
    <section
        :class="['essay-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
        <div class="max-w-4xl mx-auto space-y-8 tracking-wide text-sm md:text-base leading-relaxed content-wrapper">

            <h2 class="text-2xl md:text-4xl font-extrabold tracking-tight text-center mb-12 main-essay-heading">
                Shopify NetSuite Integration For <span class="accent-text">Growing Businesses</span>
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
        body: "As Shopify stores grow, order volume, inventory complexity, and financial reporting needs quickly outgrow spreadsheets and manual data entry. NetSuite integration connects your storefront directly to a full ERP backbone, so orders, inventory, customers, and accounting data all stay in sync automatically — without anyone re-typing numbers between systems."
    },
    {
        heading: 'What Shopify NetSuite Integration Actually Does',
        body: "The integration links your Shopify storefront to NetSuite's ERP platform so the two systems share data continuously. Instead of Shopify and NetSuite operating as separate silos, every order, payment, and inventory change in one system reflects automatically in the other, giving you a single source of truth across sales, operations, and finance."
    },
    {
        heading: 'How The Integration Works',
        body: "We connect Shopify and NetSuite through a secure API-based middleware layer, either a proven connector or a custom-built integration depending on your workflows. This layer maps fields between the two systems — product SKUs, pricing tiers, tax rules, customer records — so data moves across in a structure NetSuite can process correctly, on a schedule or in real time."
    },
    {
        heading: 'Real-Time Order & Inventory Sync',
        body: 'When a customer places an order on Shopify, it flows into NetSuite automatically for fulfillment, invoicing, and financial recognition. In return, stock levels, warehouse updates, and multi-location inventory counts sync back to Shopify, so your storefront never sells products you no longer have on hand.'
    },
    {
        heading: 'Financial & Accounting Sync',
        body: 'Sales, taxes, discounts, and payment data post directly into NetSuite\'s general ledger, removing the need for manual reconciliation at month-end. Your finance team gets accurate, up-to-date revenue reporting without exporting and re-entering Shopify order data by hand.'
    },
    {
        heading: 'Customer & Fulfillment Data Sync',
        body: "Customer profiles, shipping addresses, and order history sync between platforms so support and fulfillment teams always work from current information. Shipping confirmations and tracking updates generated in NetSuite can flow back to Shopify, keeping customers informed automatically."
    },
    {
        heading: 'Our Integration Process',
        body: 'We start by mapping your existing Shopify and NetSuite data structures and workflows, then configure or build the connector to match. Every integration is tested in a sandbox environment against real order scenarios before go-live, and we monitor the sync closely in the weeks after launch to catch and resolve any edge cases early.'
    },
    {
        heading: 'Why This Matters As You Scale',
        body: 'Manual data entry between systems does not scale — it introduces errors, delays fulfillment, and eats staff hours that could go toward growth. A properly built Shopify NetSuite integration removes that bottleneck, giving you accurate inventory, faster order processing, and financial reporting you can trust as order volume increases.'
    },
]
</script>

<style scoped>
/* CHANGED: colour-only update — this section now uses the same alternating
   background pair as the full-bleed sections on services.vue / culture.vue
   (#1c1c1c on dark, #f2f2f2 on light) instead of pure #000/#fff, so it
   reads as the same "light grey on white / light black on black" band.
   Nothing else (typography, spacing, accent colors, breakpoints) touched. */
.theme-dark {
    background-color: #1c1c1c !important;
    border-color: #171717 !important;
    --accent-color: #00ffa3;
    --main-title-color: #ffffff;
    --subheading-color: #ffffff;
    --body-text-color: #a3a3a3;
}

.theme-light {
    background-color: #f2f2f2 !important;
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