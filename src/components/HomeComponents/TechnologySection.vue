<template>
    <section :class="[
        'py-24 px-6 relative z-20',
        isDarkMode ? 'bg-black' : 'bg-white'
    ]">
        <div class="max-w-7xl mx-auto">
            <!-- Header Section -->
            <div class="tech-header">
                <span :class="['tech-eyebrow', isDarkMode ? 'text-emerald-400' : 'text-orange-600']">
                    Technology
                </span>
                <h2 :class="['tech-heading', isDarkMode ? 'text-white' : 'text-black']">
                    The right stack for the problem
                </h2>
                <p :class="['tech-paragraph', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
                    Modern, proven tools chosen for performance and long-term maintainability.
                </p>
            </div>

            <!-- Tech Grid (4 per row on desktop) -->
            <div class="tech-grid">
                <div v-for="tech in techStack" :key="tech.name"
                    :class="['tech-card', isDarkMode ? 'tech-card-dark' : 'tech-card-light']">
                    <div class="tech-icon-wrapper">
                        <!-- Custom inline SVG for NetSuite -->
                        <svg v-if="tech.isSvg" class="tech-logo" viewBox="0 0 100 100" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <rect x="10" y="10" width="36" height="36" rx="4" fill="#0073C8" />
                            <rect x="54" y="10" width="36" height="36" rx="4" fill="#0073C8" />
                            <rect x="10" y="54" width="36" height="36" rx="4" fill="#0073C8" />
                            <rect x="54" y="54" width="36" height="36" rx="4" fill="#0073C8" />
                            <circle cx="72" cy="28" r="10" fill="#ffffff" />
                            <path d="M22 62L34 82H22V62Z" fill="#ffffff" />
                        </svg>

                        <!-- Image tag for standard SVGs -->
                        <img v-else :src="tech.logo" :alt="`${tech.name} logo`" class="tech-logo" />
                    </div>
                    <span :class="['tech-name', isDarkMode ? 'text-neutral-200' : 'text-neutral-800']">
                        {{ tech.name }}
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, inject, computed } from 'vue'

// Accept an explicit :darkMode prop, falling back to inject() so this
// component still works on pages using the provide() pattern instead.
const props = defineProps({
    darkMode: { type: Boolean, default: undefined }
})

const injectedIsDarkMode = inject('isDarkMode', ref(true))

const isDarkMode = computed(() =>
    props.darkMode !== undefined ? props.darkMode : injectedIsDarkMode.value
)

const techStack = [
    { name: 'Magento', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg' },
    { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify/7AB55C' },
    { name: 'NetSuite', isSvg: true },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
    { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
]
</script>

<style scoped>
/* ==========================================================================
   Base (mobile-first foundation — applies from 0px up unless overridden)
   ========================================================================== */

.tech-header {
    max-width: 720px;
    margin: 0 auto 40px auto;
    text-align: center;
}

.tech-eyebrow {
    display: block;
    font-size: 0.8rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 10px;
}

.tech-heading {
    font-size: clamp(1.6rem, 7vw, 2.75rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 14px;
}

.tech-paragraph {
    font-size: clamp(0.9rem, 3.6vw, 1.1rem);
    line-height: 1.6;
    max-width: 560px;
    margin: 0 auto;
}

/* Outer section container: scales fluidly with viewport width instead of
   jumping between fixed breakpoint values. Overrides Tailwind's max-w-7xl. */
.max-w-7xl {
    max-width: clamp(320px, 94vw, 1600px);
}

/* Grid layout: single column by default (mobile portrait) */
.tech-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
    max-width: 100%;
    margin: 0 auto;
}

/* Rectangular Card Layout (Horizontal Flex) */
.tech-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 16px 18px;
    border-radius: 12px;
    border: 1px solid;
    gap: 14px;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.tech-card-dark {
    background-color: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.08);
}

.tech-card-dark:hover {
    transform: translateY(-4px);
    border-color: var(--brand-accent, #00ffa3);
    box-shadow: 0 12px 30px rgba(0, 255, 163, 0.1);
    background-color: rgba(255, 255, 255, 0.04);
}

.tech-card-light {
    background-color: #fafafa;
    border-color: rgba(15, 23, 42, 0.08);
}

.tech-card-light:hover {
    transform: translateY(-4px);
    border-color: var(--brand-accent, #f97316);
    box-shadow: 0 12px 30px rgba(249, 115, 22, 0.12);
    background-color: #ffffff;
}

.tech-icon-wrapper {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.tech-logo {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.tech-name {
    font-size: 0.95rem;
    font-weight: 700;
    white-space: nowrap;
}

/* ==========================================================================
   Mobile Landscape / Small Tablets: 576px — 768px
   ========================================================================== */
@media (min-width: 576px) {
    .tech-header {
        margin-bottom: 48px;
    }

    .tech-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

    .tech-card {
        padding: 18px 20px;
    }

    .tech-icon-wrapper {
        width: 34px;
        height: 34px;
    }

    .tech-name {
        font-size: 0.98rem;
    }
}

/* ==========================================================================
   Laptops / Large Tablets: 768px — 992px
   ========================================================================== */
@media (min-width: 768px) {
    .tech-header {
        margin-bottom: 52px;
    }

    .tech-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 18px;
    }

    .tech-card {
        padding: 20px 22px;
    }

    .tech-icon-wrapper {
        width: 36px;
        height: 36px;
    }

    .tech-name {
        font-size: 1rem;
    }
}

/* ==========================================================================
   Laptops / Large Tablets (upper range): 992px — 1024px
   Four-up grid starts to feel comfortable here
   ========================================================================== */
@media (min-width: 992px) {
    .tech-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }

    .tech-header {
        margin-bottom: 56px;
    }

    .tech-card {
        padding: 20px 24px;
    }
}

/* ==========================================================================
   Desktops: 1025px — 1200px
   ========================================================================== */
@media (min-width: 1025px) {
    .tech-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
}

/* ==========================================================================
   Extra Large Screens / Desktops / TVs: 1201px and up
   ========================================================================== */
@media (min-width: 1201px) {
    .tech-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 22px;

    }

    .tech-header {
        margin-bottom: 56px;
    }
}

/* ==========================================================================
   Ultra-wide / Large TVs: 1536px and up
   Scale up spacing and type so content doesn't feel lost on huge displays
   ========================================================================== */
@media (min-width: 1536px) {
    .tech-grid {
        
        gap: 26px;
    }

    .tech-heading {
        font-size: 3rem;
    }

    .tech-paragraph {
        font-size: 1.15rem;
        max-width: 600px;
    }

    .tech-card {
        padding: 24px 26px;
    }

    .tech-icon-wrapper {
        width: 40px;
        height: 40px;
    }

    .tech-name {
        font-size: 1.05rem;
    }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Keeps scaling instead of plateauing at 1536px, so content doesn't shrink
   relative to a much larger viewport / viewing distance.
   ========================================================================== */
@media (min-width: 1920px) {
    .tech-grid {
        
        gap: 30px;
    }

    .tech-heading {
        font-size: 3.4rem;
    }

    .tech-paragraph {
        font-size: 1.25rem;
        max-width: 660px;
    }

    .tech-eyebrow {
        font-size: 1rem;
    }

    .tech-card {
        padding: 28px 30px;
    }

    .tech-icon-wrapper {
        width: 44px;
        height: 44px;
    }

    .tech-name {
        font-size: 1.15rem;
    }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the grid, type,
   and card sizing growing proportionally instead of looking undersized.
   ========================================================================== */
@media (min-width: 2560px) {
    .max-w-7xl {
        max-width: 2100px;
    }

    .tech-grid {
        gap: 38px;
    }

    .tech-eyebrow {
        font-size: 1.1rem;
    }

    .tech-heading {
        font-size: 4rem;
    }

    .tech-paragraph {
        font-size: 1.4rem;
        max-width: 760px;
    }

    .tech-card {
        padding: 34px 36px;
    }

    .tech-icon-wrapper {
        width: 50px;
        height: 50px;
    }

    .tech-name {
        font-size: 1.28rem;
    }
}

/* ==========================================================================
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
    .tech-eyebrow {
        font-size: 0.75rem;
    }

    .tech-heading {
        font-size: 1.45rem;
    }

    .tech-paragraph {
        font-size: 0.85rem;
    }

    .tech-card {
        padding: 14px 16px;
        gap: 12px;
    }

    .tech-icon-wrapper {
        width: 28px;
        height: 28px;
    }

    .tech-name {
        font-size: 0.88rem;
    }
}
</style>