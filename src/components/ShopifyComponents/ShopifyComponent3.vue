<template>
    <section
        :class="['process-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
        <div class="max-w-7xl mx-auto">
            <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-24 text-center process-heading">
                Shopify Services <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">We Provide</span>
            </h2>

            <div class="relative block lg:flex items-start justify-between gap-6 space-y-12 lg:space-y-0">
                <div class="hidden lg:block absolute top-[27px] left-0 right-0 h-[2px] desktop-timeline-line z-0"></div>

                <div v-for="(step, idx) in steps" :key="idx" class="relative z-10 flex-1 group">
                    <div class="flex lg:flex-col items-center lg:items-start gap-6 lg:gap-0">
                        <div
                            class="w-14 h-14 rounded-full border-2 flex items-center justify-center font-mono font-bold transition-all duration-500 lg:mb-6 flex-shrink-0 step-badge-node">
                            0{{ idx + 1 }}
                        </div>
                        <div>
                            <h3 class="text-lg font-bold mb-2 step-card-title transition-colors">
                                {{ step.title }}
                            </h3>
                            <p class="text-sm leading-relaxed max-w-sm step-card-description">
                                {{ step.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const steps = [
    { title: 'Store Setup & Migration', description: 'Launch a new Shopify store or migrate seamlessly from your existing platform with zero data loss.' },
    { title: 'Custom Theme Design & Development', description: 'On-brand, conversion-focused storefronts built and coded to match your vision.' },
    { title: 'App Integration & Automation', description: 'Connect the tools you rely on and automate workflows to save time and reduce errors.' },
    { title: 'Speed & Performance Optimization', description: 'Faster load times and smoother checkout flows that keep customers from bouncing.' },
    { title: 'Ongoing Maintenance & Support', description: 'Continuous monitoring, updates, and support so your store stays secure and reliable.' },
]
</script>

<style scoped>
/* CHANGED: colour-only update — this section now uses the same alternating
   background pair as the full-bleed sections on services.vue / culture.vue
   (#1c1c1c on dark, #f2f2f2 on light) instead of pure #000/#fff, so it
   reads as the same "light grey on white / light black on black" band.
   Nothing else (timeline line, step badge/node colors, accent colors,
   breakpoints) touched. */
.theme-dark {
    background-color: #1c1c1c !important;
    border-color: #171717 !important;
    --accent-color: #00ffa3;
    --heading-color: #ffffff;
    --line-color: #171717;
    --node-bg: #0a0a0a;
    --node-border: #262626;
    --node-text: #737373;
    --title-color: #ffffff;
    --desc-color: #a3a3a3;
}

.theme-light {
    background-color: #f2f2f2 !important;
    border-color: #e2e8f0 !important;
    --accent-color: #f97316;
    --heading-color: #0f172a;
    --line-color: #e2e8f0;
    --node-bg: #ffffff;
    --node-border: #cbd5e1;
    --node-text: #475569;
    --title-color: #000000;
    --desc-color: #000000;
}

.process-section {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: clamp(2rem, 5vw, 12rem);
    padding-right: clamp(2rem, 5vw, 12rem);
    box-sizing: border-box;
}

.max-w-7xl {
    max-width: 100% !important;
}

.process-heading {
    color: var(--heading-color) !important;
    transition: color 0.4s ease;
    font-size: clamp(2rem, 3.5vw, 4rem);
}

.desktop-timeline-line {
    background-color: var(--line-color) !important;
    transition: background-color 0.4s ease;
}

.step-badge-node {
    background-color: var(--node-bg) !important;
    border-color: var(--node-border) !important;
    color: var(--node-text) !important;
    width: clamp(3rem, 4vw, 4.5rem) !important;
    height: clamp(3rem, 4vw, 4.5rem) !important;
    font-size: clamp(1rem, 1.3vw, 1.4rem);
}

.group:hover .step-badge-node {
    border-color: var(--accent-color) !important;
    color: var(--accent-color) !important;
    box-shadow: 0 0 20px rgba(0, 255, 163, 0.15);
}

.step-card-title {
    color: var(--title-color) !important;
    font-size: clamp(1.2rem, 1.6vw, 1.75rem);
}

.group:hover .step-card-title {
    color: var(--accent-color) !important;
}

.step-card-description {
    color: var(--desc-color) !important;
    transition: color 0.4s ease;
    font-size: clamp(0.9rem, 1.2vw, 1.15rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
    .process-section {
        padding-left: 4rem;
        padding-right: 4rem;
    }

    .process-heading {
        font-size: 2.75rem;
    }

    .step-card-title {
        font-size: 1.35rem;
    }

    .step-card-description {
        font-size: 0.95rem;
    }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
    .process-section {
        padding-left: 6rem;
        padding-right: 6rem;
    }

    .process-heading {
        font-size: 3.4rem;
    }

    .step-card-title {
        font-size: 1.5rem;
    }

    .step-card-description {
        font-size: 1.05rem;
    }
}

@media (min-width: 1536px) {
    .process-section {
        padding-left: 8rem;
        padding-right: 8rem;
    }

    .process-heading {
        font-size: 4rem;
    }

    .step-card-title {
        font-size: 1.75rem;
    }

    .step-card-description {
        font-size: 1.15rem;
    }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
    .process-section {
        padding-left: 12rem;
        padding-right: 12rem;
    }

    .process-heading {
        font-size: 5rem;
    }

    .step-card-title {
        font-size: 2.2rem;
    }

    .step-card-description {
        font-size: 1.4rem;
    }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
    .process-section {
        padding-left: 3rem;
        padding-right: 3rem;
    }

    .process-heading {
        font-size: 2.5rem;
    }

    .step-card-title {
        font-size: 1.25rem;
    }

    .step-card-description {
        font-size: 0.9rem;
    }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
    .process-section {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .process-heading {
        font-size: 2.2rem;
    }

    .step-card-title {
        font-size: 1.15rem;
    }

    .step-card-description {
        font-size: 0.85rem;
    }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
    .process-section {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    .process-heading {
        font-size: 1.8rem;
        margin-bottom: 2.5rem;
    }

    .step-card-title {
        font-size: 1.1rem;
    }

    .step-card-description {
        font-size: 0.85rem;
    }
}

@media (max-width: 360px) {
    .process-section {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }

    .process-heading {
        font-size: 1.6rem;
    }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
    .process-section {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
}
</style>