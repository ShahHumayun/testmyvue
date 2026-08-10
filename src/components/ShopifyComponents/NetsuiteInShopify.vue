<template>
    <section
        :class="['netsuite-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
        <div class="max-w-7xl mx-auto">

            <!-- Top: pitch + live sync visual -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center mb-24">

                <div>
                    <span class="ns-eyebrow">Featured Integration</span>
                    <h2 class="ns-heading mt-4 mb-5">
                        Sync Shopify With <span class="accent-text">NetSuite</span>
                    </h2>
                    <p class="ns-subtext mb-8">
                        Connect your storefront to a full ERP backbone. Orders, inventory, and financials
                        move automatically between systems — no spreadsheets, no manual re-entry.
                    </p>

                    <ul class="space-y-3 mb-9">
                        <li v-for="(point, i) in checklist" :key="i" class="flex items-center gap-3 ns-checklist-item">
                            <span class="ns-check-icon">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 13L9.5 17.5L19 7" stroke="currentColor" stroke-width="2.4"
                                        stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <span>{{ point }}</span>
                        </li>
                    </ul>

                    <router-link to="/consultation" class="ns-cta-btn">
                        Talk About Your Integration
                    </router-link>
                </div>

                <!-- Live sync diagram -->
                <div class="ns-diagram-frame">
                    <div class="ns-diagram-track">
                        <div class="ns-node">
                            <div class="ns-node-badge">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 8H18L17 21H7L6 8Z" stroke="currentColor" stroke-width="1.7"
                                        stroke-linejoin="round" />
                                    <path d="M9 8V6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V8"
                                        stroke="currentColor" stroke-width="1.7" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </div>
                            <span class="ns-node-label">Shopify</span>
                        </div>

                        <div class="ns-connector">
                            <span class="ns-pulse-dot"></span>
                            <span class="ns-pulse-dot ns-pulse-dot-delay"></span>
                        </div>

                        <div class="ns-node">
                            <div class="ns-node-badge">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="4" y="4" width="16" height="6" rx="1.5" stroke="currentColor"
                                        stroke-width="1.7" />
                                    <rect x="4" y="14" width="16" height="6" rx="1.5" stroke="currentColor"
                                        stroke-width="1.7" />
                                    <circle cx="7.5" cy="7" r="0.9" fill="currentColor" />
                                    <circle cx="7.5" cy="17" r="0.9" fill="currentColor" />
                                </svg>
                            </div>
                            <span class="ns-node-label">NetSuite</span>
                        </div>
                    </div>

                    <div class="ns-data-chips">
                        <span v-for="(chip, i) in dataChips" :key="i" class="ns-chip">{{ chip }}</span>
                    </div>
                </div>
            </div>

            <!-- Capability cards -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
                <div v-for="(cap, i) in capabilities" :key="i" class="ns-cap-card group">
                    <div class="ns-cap-icon" v-html="cap.icon"></div>
                    <h3 class="ns-cap-title">{{ cap.title }}</h3>
                    <p class="ns-cap-desc">{{ cap.desc }}</p>
                </div>
            </div>

            <!-- Compact process strip -->
            <div class="ns-process-strip">
                <div v-for="(step, i) in process" :key="i" class="ns-process-step">
                    <div class="ns-process-dot">{{ i + 1 }}</div>
                    <span class="ns-process-label">{{ step }}</span>
                    <span v-if="i < process.length - 1" class="ns-process-arrow">→</span>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const checklist = [
    'Real-time order & inventory sync',
    'Automated financial reporting',
    'Zero manual data entry',
]

const dataChips = ['Orders', 'Inventory', 'Invoices', 'Customers']

const capabilities = [
    {
        title: 'Order Sync',
        desc: 'Every order flows into NetSuite automatically for fulfillment and invoicing.',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h2l2.4 11.4a2 2 0 002 1.6h8.4a2 2 0 002-1.6L21 8H6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="21" r="1.3" fill="currentColor"/><circle cx="17" cy="21" r="1.3" fill="currentColor"/></svg>`
    },
    {
        title: 'Inventory Sync',
        desc: 'Stock levels stay accurate across every location, in both directions.',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 8L12 3L21 8V16L12 21L3 16V8Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M3 8L12 13L21 8M12 13V21" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`
    },
    {
        title: 'Financial Sync',
        desc: 'Sales, tax, and payment data post straight to your general ledger.',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="8.5" stroke="currentColor" stroke-width="1.7"/><path d="M12 7.5V16.5M9.5 14.3C9.5 15.5 10.5 16.3 12 16.3C13.5 16.3 14.5 15.6 14.5 14.4C14.5 11.9 9.5 12.9 9.5 10.4C9.5 9.2 10.5 8.5 12 8.5C13.2 8.5 14 9 14.3 9.8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
    },
    {
        title: 'Customer Sync',
        desc: 'Customer and shipping records stay current on both platforms.',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="3.3" stroke="currentColor" stroke-width="1.7"/><path d="M5 20C5 16.5 8 14.5 12 14.5C16 14.5 19 16.5 19 20" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`
    },
]

const process = ['Map', 'Connect', 'Test', 'Launch']
</script>

<style scoped>
.theme-dark {
    background-color: #1c1c1c !important;
    border-color: #171717 !important;
    --accent-color: #00ffa3;
    --heading-color: #ffffff;
    --eyebrow-color: #00ffa3;
    --subtext-color: #a3a3a3;
    --check-color: #a3a3a3;
    --checklist-text: #e5e5e5;
    --cta-bg: #00ffa3;
    --cta-text: #000000;
    --node-bg: #0a0a0a;
    --node-border: #262626;
    --node-icon: #a3a3a3;
    --node-label: #ffffff;
    --connector-line: #262626;
    --chip-bg: #0a0a0a;
    --chip-border: #262626;
    --chip-text: #737373;
    --card-bg: #0a0a0a;
    --card-border: #262626;
    --card-title: #ffffff;
    --card-desc: #a3a3a3;
    --process-border: #262626;
    --process-dot-bg: #0a0a0a;
    --process-dot-text: #737373;
    --process-label: #a3a3a3;
}

.theme-light {
    background-color: #f2f2f2 !important;
    border-color: #e2e8f0 !important;
    --accent-color: #f97316;
    --heading-color: #0f172a;
    --eyebrow-color: #f97316;
    --subtext-color: #334155;
    --check-color: #f97316;
    --checklist-text: #1e293b;
    --cta-bg: #f97316;
    --cta-text: #ffffff;
    --node-bg: #ffffff;
    --node-border: #cbd5e1;
    --node-icon: #475569;
    --node-label: #0f172a;
    --connector-line: #cbd5e1;
    --chip-bg: #ffffff;
    --chip-border: #cbd5e1;
    --chip-text: #475569;
    --card-bg: #ffffff;
    --card-border: #e2e8f0;
    --card-title: #000000;
    --card-desc: #334155;
    --process-border: #cbd5e1;
    --process-dot-bg: #ffffff;
    --process-dot-text: #475569;
    --process-label: #334155;
}

.netsuite-section {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: clamp(2rem, 5vw, 12rem);
    padding-right: clamp(2rem, 5vw, 12rem);
    box-sizing: border-box;
}

.accent-text {
    color: var(--accent-color) !important;
}

/* ---------- Left column ---------- */
.ns-eyebrow {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--eyebrow-color) !important;
}

.ns-heading {
    color: var(--heading-color) !important;
    font-weight: 800;
    letter-spacing: -0.02em;
    font-size: clamp(1.9rem, 3vw, 3.2rem);
    line-height: 1.1;
}

.ns-subtext {
    color: var(--subtext-color) !important;
    font-size: clamp(0.95rem, 1.1vw, 1.1rem);
    line-height: 1.7;
    max-width: 32rem;
}

.ns-checklist-item {
    color: var(--checklist-text) !important;
    font-size: 0.95rem;
    font-weight: 500;
}

.ns-check-icon {
    width: 1.4rem;
    height: 1.4rem;
    flex-shrink: 0;
    color: var(--check-color) !important;
}

.ns-check-icon svg {
    width: 100%;
    height: 100%;
}

.ns-cta-btn {
    display: inline-block;
    background-color: var(--cta-bg) !important;
    color: var(--cta-text) !important;
    font-weight: 700;
    font-size: 0.95rem;
    padding: 0.9rem 1.9rem;
    border-radius: 0.6rem;
    transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.ns-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* ---------- Diagram ---------- */
.ns-diagram-frame {
    background-color: var(--node-bg) !important;
    border: 1px solid var(--node-border) !important;
    border-radius: 1.25rem;
    padding: clamp(1.75rem, 3vw, 3rem) clamp(1.25rem, 2.5vw, 2.5rem);
}

.ns-diagram-track {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
}

.ns-node {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.6rem;
    flex-shrink: 0;
}

.ns-node-badge {
    width: clamp(3.25rem, 5vw, 4.5rem);
    height: clamp(3.25rem, 5vw, 4.5rem);
    border-radius: 9999px;
    background-color: var(--node-bg) !important;
    border: 1.5px solid var(--node-border) !important;
    color: var(--node-icon) !important;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ns-node-badge svg {
    width: 45%;
    height: 45%;
}

.ns-node-label {
    color: var(--node-label) !important;
    font-size: 0.8rem;
    font-weight: 700;
}

.ns-connector {
    position: relative;
    flex: 1;
    height: 2px;
    background-color: var(--connector-line) !important;
    margin: 0 0.25rem;
    overflow: visible;
}

.ns-pulse-dot {
    position: absolute;
    top: 50%;
    left: 0;
    width: 8px;
    height: 8px;
    border-radius: 9999px;
    background-color: var(--accent-color) !important;
    transform: translateY(-50%);
    box-shadow: 0 0 10px var(--accent-color);
    animation: ns-travel 3.2s ease-in-out infinite;
}

.ns-pulse-dot-delay {
    animation-delay: 1.6s;
}

@keyframes ns-travel {
    0% {
        left: 0%;
        opacity: 0;
    }

    10% {
        opacity: 1;
    }

    90% {
        opacity: 1;
    }

    100% {
        left: 100%;
        opacity: 0;
    }
}

.ns-data-chips {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6rem;
    margin-top: clamp(1.5rem, 2.5vw, 2.25rem);
}

.ns-chip {
    background-color: var(--chip-bg) !important;
    border: 1px solid var(--chip-border) !important;
    color: var(--chip-text) !important;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.03em;
    padding: 0.35rem 0.85rem;
    border-radius: 9999px;
}

/* ---------- Capability cards ---------- */
.ns-cap-card {
    background-color: var(--card-bg) !important;
    border: 1px solid var(--card-border) !important;
    border-radius: 1rem;
    padding: clamp(1.25rem, 1.8vw, 1.75rem);
    transition: border-color 0.3s ease, transform 0.3s ease;
}

.ns-cap-card:hover {
    border-color: var(--accent-color) !important;
    transform: translateY(-3px);
}

.ns-cap-icon {
    width: 2.5rem;
    height: 2.5rem;
    color: var(--accent-color) !important;
    margin-bottom: 0.9rem;
}

.ns-cap-icon :deep(svg) {
    width: 100%;
    height: 100%;
}

.ns-cap-title {
    color: var(--card-title) !important;
    font-weight: 700;
    font-size: clamp(0.9rem, 1.1vw, 1.05rem);
    margin-bottom: 0.4rem;
}

.ns-cap-desc {
    color: var(--card-desc) !important;
    font-size: clamp(0.78rem, 0.95vw, 0.88rem);
    line-height: 1.55;
}

/* ---------- Process strip ---------- */
.ns-process-strip {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    border-top: 1px solid var(--process-border) !important;
    padding-top: clamp(1.5rem, 2.5vw, 2rem);
}

.ns-process-step {
    display: flex;
    align-items: center;
    gap: 0.6rem;
}

.ns-process-dot {
    width: 1.9rem;
    height: 1.9rem;
    border-radius: 9999px;
    background-color: var(--process-dot-bg) !important;
    border: 1px solid var(--process-border) !important;
    color: var(--process-dot-text) !important;
    font-size: 0.75rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: monospace;
}

.ns-process-label {
    color: var(--process-label) !important;
    font-size: 0.85rem;
    font-weight: 600;
}

.ns-process-arrow {
    color: var(--process-border) !important;
    font-size: 0.85rem;
    margin-left: 0.4rem;
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

@media (min-width: 1025px) and (max-width: 1200px) {
    .netsuite-section {
        padding-left: 4rem;
        padding-right: 4rem;
    }
}

@media (min-width: 1201px) {
    .netsuite-section {
        padding-left: 6rem;
        padding-right: 6rem;
    }
}

@media (min-width: 1536px) {
    .netsuite-section {
        padding-left: 8rem;
        padding-right: 8rem;
    }
}

@media (min-width: 1921px) {
    .netsuite-section {
        padding-left: 12rem;
        padding-right: 12rem;
    }
}

@media (min-width: 769px) and (max-width: 1024px) {
    .netsuite-section {
        padding-left: 3rem;
        padding-right: 3rem;
    }
}

@media (min-width: 481px) and (max-width: 768px) {
    .netsuite-section {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
}

@media (max-width: 480px) {
    .netsuite-section {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    .ns-diagram-track {
        flex-direction: column;
        gap: 1.5rem;
    }

    .ns-connector {
        width: 2px;
        height: 3rem;
        flex: none;
    }

    .ns-pulse-dot {
        left: 50%;
        top: 0;
        transform: translateX(-50%);
        animation-name: ns-travel-vertical;
    }

    @keyframes ns-travel-vertical {
        0% {
            top: 0%;
            opacity: 0;
        }

        10% {
            opacity: 1;
        }

        90% {
            opacity: 1;
        }

        100% {
            top: 100%;
            opacity: 0;
        }
    }
}

@media (max-width: 360px) {
    .netsuite-section {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }
}

@media (max-height: 500px) and (orientation: landscape) {
    .netsuite-section {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
}

@media (prefers-reduced-motion: reduce) {
    .ns-pulse-dot {
        animation: none;
        opacity: 1;
        left: 50%;
    }

    .ns-cap-card:hover,
    .ns-cta-btn:hover {
        transform: none;
    }
}
</style>