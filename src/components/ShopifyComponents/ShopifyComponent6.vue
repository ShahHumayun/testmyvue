<template>
    <section
        :class="['process-flow-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
        <div class="max-w-7xl mx-auto">

            <div class="text-center mb-20 max-w-2xl mx-auto">
                <span class="process-eyebrow">Our Process</span>
                <h2 class="text-3xl md:text-5xl font-bold tracking-tight mt-4 mb-5 process-flow-heading">
                    From First Call To <span class="accent-text">Live Store</span>
                </h2>
                <p class="process-flow-subtext">
                    No black box. Here's exactly what happens at every stage, so you always know what
                    comes next after you reach out.
                </p>
            </div>

            <div class="relative">
                <div class="hidden lg:block absolute top-[34px] left-[12.5%] right-[12.5%] h-[2px] flow-connector-line">
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
                    <div v-for="(step, idx) in steps" :key="idx" class="relative z-10 flow-card group">
                        <div class="flex items-center gap-4 lg:flex-col lg:items-start lg:gap-0">
                            <div class="flow-icon-badge flex-shrink-0 lg:mb-6" v-html="step.icon"></div>
                            <h3 class="text-lg font-bold flow-card-title lg:mt-0">{{ step.title }}</h3>
                        </div>
                        <p class="mt-3 text-sm leading-relaxed flow-card-description">
                            {{ step.description }}
                        </p>
                        <p class="mt-4 text-xs font-medium flow-card-reassurance">
                            {{ step.reassurance }}
                        </p>
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
    {
        title: 'Discovery',
        description: 'We learn your business, goals, and audience so every decision has a clear reason behind it.',
        reassurance: 'You get a written plan before any work begins — no guesswork on either side.',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" stroke-width="1.8"/><path d="M15.5 15.5L20 20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
    },
    {
        title: 'Design',
        description: 'We map the customer journey and design a storefront that looks like you and converts like a machine.',
        reassurance: "You review and sign off on every screen before a single line of code is written.",
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 20L14.5 9.5M14.5 9.5L18 6C18.8 5.2 20 5.2 20.8 6C21.6 6.8 21.6 8 20.8 8.8L17.3 12.3M14.5 9.5L17.3 12.3M6 18L4 20L6 22L8 20L6 18Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"/></svg>`
    },
    {
        title: 'Development',
        description: 'Our developers build the store, integrate your apps, and test every flow end to end before launch.',
        reassurance: 'Scheduled check-ins keep you updated — you always know where things stand.',
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8L3 12L8 16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M16 8L21 12L16 16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><path d="M13.5 5L10.5 19" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`
    },
    {
        title: 'Launch & Support',
        description: 'We launch your store, monitor performance closely, and stay on hand for ongoing updates.',
        reassurance: "Nothing gets handed off and forgotten — we're still here after go-live.",
        icon: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C14 4 16 7.5 16 11C16 13 15.3 14.7 14.5 16L12 19L9.5 16C8.7 14.7 8 13 8 11C8 7.5 10 4 12 2Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><circle cx="12" cy="10" r="1.6" fill="currentColor"/><path d="M9 17L6.5 22M15 17L17.5 22" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`
    },
]
</script>

<style scoped>
/* CHANGED: colour-only update — this section now uses the same alternating
   background pair as the full-bleed sections on services.vue / culture.vue
   (#1c1c1c on dark, #f2f2f2 on light) instead of pure #000/#fff, so it
   reads as the same "light grey on white / light black on black" band.
   Nothing else (connector line, flow card colors, icon badge colors,
   accent colors, breakpoints) touched. */
.theme-dark {
    background-color: #1c1c1c !important;
    border-color: #171717 !important;
    --accent-color: #00ffa3;
    --heading-color: #ffffff;
    --eyebrow-color: #737373;
    --subtext-color: #a3a3a3;
    --connector-color: #171717;
    --card-bg: #0a0a0a;
    --card-border: #171717;
    --card-border-hover: #262626;
    --icon-bg: #171717;
    --icon-border: #262626;
    --title-color: #ffffff;
    --desc-color: #a3a3a3;
    --reassurance-color: #ffffff;
}

.theme-light {
    background-color: #f2f2f2 !important;
    border-color: #e2e8f0 !important;
    --accent-color: #f97316;
    --heading-color: #0f172a;
    --eyebrow-color: #64748b;
    --subtext-color: #334155;
    --connector-color: #e2e8f0;
    --card-bg: #ffffff;
    --card-border: #e2e8f0;
    --card-border-hover: #cbd5e1;
    --icon-bg: #f8fafc;
    --icon-border: #cbd5e1;
    --title-color: #000000;
    --desc-color: #000000;
    --reassurance-color: #000000;
}

.process-flow-section {
    width: 100% !important;
    max-width: 100% !important;
    padding-left: clamp(2rem, 5vw, 12rem);
    padding-right: clamp(2rem, 5vw, 12rem);
    box-sizing: border-box;
}

.accent-text {
    color: var(--accent-color) !important;
}

.process-eyebrow {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--accent-color) !important;
}

.process-flow-heading {
    color: var(--heading-color) !important;
    transition: color 0.4s ease;
    font-size: clamp(2rem, 3.5vw, 4rem);
}

.process-flow-subtext {
    color: var(--subtext-color) !important;
    font-size: clamp(0.95rem, 1.2vw, 1.15rem);
    line-height: 1.7;
    transition: color 0.4s ease;
}

.flow-connector-line {
    background-color: var(--connector-color) !important;
    transition: background-color 0.4s ease;
}

.flow-card {
    background-color: var(--card-bg) !important;
    border: 1px solid var(--card-border) !important;
    border-radius: 1rem;
    padding: clamp(1.5rem, 2vw, 2rem);
    transition: border-color 0.4s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.flow-card:hover {
    border-color: var(--card-border-hover) !important;
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
}

.flow-icon-badge {
    width: clamp(2.75rem, 3.5vw, 3.5rem);
    height: clamp(2.75rem, 3.5vw, 3.5rem);
    border-radius: 9999px;
    background-color: var(--icon-bg) !important;
    border: 1px solid var(--icon-border) !important;
    color: var(--desc-color) !important;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: border-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease;
}

.flow-icon-badge :deep(svg) {
    width: 45%;
    height: 45%;
}

.group:hover .flow-icon-badge {
    border-color: var(--accent-color) !important;
    color: var(--accent-color) !important;
    box-shadow: 0 0 20px rgba(0, 255, 163, 0.15);
}

.flow-card-title {
    color: var(--title-color) !important;
    font-size: clamp(1.1rem, 1.4vw, 1.35rem);
    transition: color 0.4s ease;
}

.flow-card-description {
    color: var(--desc-color) !important;
    font-size: clamp(0.85rem, 1.05vw, 1rem);
    line-height: 1.65;
    transition: color 0.4s ease;
}

.flow-card-reassurance {
    color: var(--reassurance-color) !important;
    opacity: 0.55;
    font-size: clamp(0.72rem, 0.85vw, 0.82rem);
    line-height: 1.5;
    transition: color 0.4s ease;
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
    .process-flow-section {
        padding-left: 4rem;
        padding-right: 4rem;
    }

    .process-flow-heading {
        font-size: 2.75rem;
    }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
    .process-flow-section {
        padding-left: 6rem;
        padding-right: 6rem;
    }

    .process-flow-heading {
        font-size: 3.4rem;
    }
}

@media (min-width: 1536px) {
    .process-flow-section {
        padding-left: 8rem;
        padding-right: 8rem;
    }

    .process-flow-heading {
        font-size: 4rem;
    }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
    .process-flow-section {
        padding-left: 12rem;
        padding-right: 12rem;
    }

    .process-flow-heading {
        font-size: 5rem;
    }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
    .process-flow-section {
        padding-left: 3rem;
        padding-right: 3rem;
    }

    .process-flow-heading {
        font-size: 2.5rem;
    }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
    .process-flow-section {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    .process-flow-heading {
        font-size: 2.2rem;
    }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
    .process-flow-section {
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    .process-flow-heading {
        font-size: 1.8rem;
        margin-bottom: 2.5rem;
    }
}

@media (max-width: 360px) {
    .process-flow-section {
        padding-left: 0.75rem;
        padding-right: 0.75rem;
    }

    .process-flow-heading {
        font-size: 1.6rem;
    }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
    .process-flow-section {
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
}

/* Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
    .flow-card {
        transition: none;
    }

    .flow-card:hover {
        transform: none;
    }
}
</style>