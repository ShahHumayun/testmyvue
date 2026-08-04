<template>
    <section
        :class="['metrics-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center metrics-main-heading">
                Driving Real <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Ecommerce Results</span>
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="(m, idx) in metrics" :key="idx"
                    class="flex flex-col items-center text-center space-y-4 metric-card p-8 rounded-2xl group">
                    <div
                        class="w-32 h-32 rounded-full border-4 flex items-center justify-center relative transition-colors speed-outer-ring">
                        <div
                            class="absolute inset-0 rounded-full border-4 border-t-[var(--accent-color)] border-r-transparent border-b-transparent border-l-transparent animate-spin">
                        </div>
                        <span class="text-xl font-bold metric-value-node">+{{ m.value }}%</span>
                    </div>
                    <p class="text-xs uppercase tracking-wider font-semibold max-w-[150px] metric-label-row">{{ m.label
                        }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const metrics = [
    { value: 215, label: 'Avg Conversion Lift' }, { value: 320, label: 'Revenue Growth' },
    { value: 180, label: 'Mobile Engagement' }, { value: 145, label: 'Retention Increase' },
]
</script>

<style scoped>
.theme-dark {
    background-color: #000000 !important;
    border-color: #171717 !important;
    --accent-color: #00ffa3;
    --heading-color: #ffffff;
    --card-bg: #0a0a0a;
    --card-border: #171717;
    --ring-border: #171717;
    --ring-hover-border: rgba(0, 255, 163, 0.3);
    --value-color: #ffffff;
    --label-color: #a3a3a3;
}

.theme-light {
    background-color: #ffffff !important;
    border-color: #e2e8f0 !important;
    --accent-color: #f97316;
    --heading-color: #0f172a;
    --card-bg: #ffffff;
    --card-border: #e2e8f0;
    --ring-border: #e2e8f0;
    --ring-hover-border: rgba(249, 115, 22, 0.2);
    --value-color: #000000;
    --label-color: #000000;
}

.metrics-section {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: clamp(2rem, 5vw, 12rem);
    padding-right: clamp(2rem, 5vw, 12rem);
    box-sizing: border-box;
}

.max-w-7xl {
    max-width: 100% !important;
}

.metrics-main-heading {
    color: var(--heading-color) !important;
    transition: color 0.4s ease;
    font-size: clamp(2rem, 3.5vw, 4rem);
}

.metric-card {
    background-color: var(--card-bg) !important;
    border: 1px solid var(--card-border) !important;
    transition: background-color 0.4s ease, border-color 0.4s ease;
    padding: clamp(1.5rem, 2.5vw, 2.5rem) !important;
}

.speed-outer-ring {
    border-color: var(--ring-border) !important;
    width: clamp(6.5rem, 9vw, 9.5rem) !important;
    height: clamp(6.5rem, 9vw, 9.5rem) !important;
}

.metric-card:hover .speed-outer-ring {
    border-color: var(--ring-hover-border) !important;
}

.metric-value-node {
    color: var(--value-color) !important;
    transition: color 0.4s ease;
    font-size: clamp(1.15rem, 1.6vw, 1.75rem);
}

.metric-label-row {
    color: var(--label-color) !important;
    transition: color 0.4s ease;
    font-size: clamp(0.75rem, 1vw, 1rem);
    max-width: 100% !important;
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
    .metrics-section {
        padding-left: 4rem;
        padding-right: 4rem;
    }

    .metrics-main-heading {
        font-size: 2.75rem;
    }

    .metric-value-node {
        font-size: 1.35rem;
    }

    .metric-label-row {
        font-size: 0.85rem;
    }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
    .metrics-section {
        padding-left: 6rem;
        padding-right: 6rem;
    }

    .metrics-main-heading {
        font-size: 3.4rem;
    }

    .metric-value-node {
        font-size: 1.5rem;
    }

    .metric-label-row {
        font-size: 0.95rem;
    }
}

@media (min-width: 1536px) {
    .metrics-section {
        padding-left: 8rem;
        padding-right: 8rem;
    }

    .metrics-main-heading {
        font-size: 4rem;
    }

    .metric-value-node {
        font-size: 1.75rem;
    }

    .metric-label-row {
        font-size: 1.05rem;
    }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
    .metrics-section {
        padding-left: 12rem;
        padding-right: 12rem;
    }

    .metrics-main-heading {
        font-size: 5rem;
    }

    .metric-value-node {
        font-size: 2.2rem;
    }

    .metric-label-row {
        font-size: 1.3rem;
    }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
    .metrics-section {
        padding-left: 3rem;
        padding-right: 3rem;
    }

    .metrics-main-heading {
        font-size: 2.5rem;
    }

    .metric-value-node {
        font-size: 1.25rem;
    }

    .metric-label-row {
        font-size: 0.8rem;
    }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
    .metrics-section {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .metrics-main-heading {
        font-size: 2.2rem;
    }

    .metric-value-node {
        font-size: 1.15rem;
    }

    .metric-label-row {
        font-size: 0.8rem;
    }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
    .metrics-section {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    .grid-cols-1 {
        grid-template-columns: 1fr;
        gap: 1.25rem;
    }

    .metrics-main-heading {
        font-size: 1.8rem;
        margin-bottom: 2.5rem;
    }

    .metric-value-node {
        font-size: 1.1rem;
    }

    .metric-label-row {
        font-size: 0.75rem;
    }

    .metric-card {
        padding: 1.25rem !important;
    }
}

@media (max-width: 360px) {
    .metrics-section {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }

    .metrics-main-heading {
        font-size: 1.6rem;
    }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
    .metrics-section {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
}
</style>
