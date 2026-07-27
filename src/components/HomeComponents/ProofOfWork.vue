<template>
    <section :class="[
        'py-24 px-6 relative z-20',
        isDarkMode ? 'bg-black' : 'bg-white'
    ]">
        <div class="max-w-7xl mx-auto">
            <!-- Header Section -->
            <div class="blog-header-row">
                <div class="tech-header blog-header">
                    <span :class="['tech-eyebrow', isDarkMode ? 'text-emerald-400' : 'text-orange-600']">
                        Proof of Work
                    </span>
                    <h2 :class="['tech-heading', isDarkMode ? 'text-white' : 'text-black']">
                        Production systems clients ship on
                    </h2>
                    <p :class="['tech-paragraph', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
                        Real Upwork engagements — headless CMS, marketing sites, and member platforms delivered with
                        5.0 ratings and long-term retainers.
                    </p>
                </div>

                <router-link to="/portfolio"
                    :class="['view-all-link', isDarkMode ? 'text-emerald-400' : 'text-orange-600']">
                    View all projects
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" class="view-all-arrow" aria-hidden="true">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </router-link>
            </div>

            <!-- Case Study Row (horizontally scrollable, more than 4 cards) -->
            <div class="work-scroll-track">
                <article v-for="project in projects" :key="project.title"
                    :class="['blog-card', 'work-card', isDarkMode ? 'blog-card-dark' : 'blog-card-light']">
                    <div class="blog-image-wrap">
                        <img :src="project.image" :alt="project.title" class="blog-image" loading="lazy" />
                        <span :class="['blog-tag', isDarkMode ? 'blog-tag-dark' : 'blog-tag-light']">
                            {{ project.tech }}
                        </span>
                    </div>

                    <div class="blog-content">
                        <h3 :class="['blog-title', isDarkMode ? 'text-white' : 'text-black']">
                            {{ project.title }}
                        </h3>
                        <p :class="['blog-excerpt', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
                            {{ project.description }}
                        </p>

                        <router-link :to="project.link"
                            :class="['blog-read-link', isDarkMode ? 'text-emerald-400' : 'text-orange-600']">
                            View case study
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="blog-read-arrow"
                                aria-hidden="true">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </router-link>
                    </div>
                </article>
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

const projects = [
    {
        tech: 'Next.js',
        title: 'Book Library App',
        description: 'A fast, searchable library platform with member borrowing history, availability tracking, and a headless content layer for catalog updates.',
        image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&q=80&auto=format&fit=crop',
        link: '/portfolio/book-library-app'
    },
    {
        tech: 'React Native',
        title: 'TaylorAllergyApp',
        description: 'A cross-platform allergy tracking app that lets patients log symptoms, triggers, and medication schedules, then share reports directly with their care team.',
        image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80&auto=format&fit=crop',
        link: '/portfolio/taylorallergyapp'
    },
    {
        tech: 'Magento',
        title: 'Magento Connector App',
        description: 'A custom Magento integration that syncs inventory, orders, and pricing in real time with an external ERP, eliminating manual data entry.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop',
        link: '/portfolio/magento-connector-app'
    },
    {
        tech: 'Vue.js',
        title: 'Expense Tracker App',
        description: 'A budgeting dashboard with category breakdowns, recurring transaction detection, and exportable monthly reports for small teams.',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80&auto=format&fit=crop',
        link: '/portfolio/expense-tracker-app'
    },
    {
        tech: 'WordPress',
        title: 'Replacement Glass Web',
        description: 'A lead-generation site for a glass replacement service, with instant quote requests, service-area routing, and local SEO built in.',
        image: 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=800&q=80&auto=format&fit=crop',
        link: '/portfolio/replacement-glass-web'
    },
    {
        tech: 'WordPress',
        title: 'Blazing Glass Web',
        description: 'A performance-tuned marketing site for a glass and glazing contractor, rebuilt for sub-second load times and higher quote conversion.',
        image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?w=800&q=80&auto=format&fit=crop',
        link: '/portfolio/blazing-glass-web'
    },
    {
        tech: 'Laravel',
        title: 'Fleet Management Dashboard',
        description: 'An internal tool for dispatchers to track vehicle locations, maintenance schedules, and driver assignments across a growing delivery fleet.',
        image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80&auto=format&fit=crop',
        link: '/portfolio/fleet-management-dashboard'
    },
    {
        tech: 'Shopify',
        title: 'Boutique Fashion Storefront',
        description: 'A custom Shopify theme for a boutique fashion label, with lookbook-style merchandising and a streamlined one-page checkout.',
        image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80&auto=format&fit=crop',
        link: '/portfolio/boutique-fashion-storefront'
    }
]
</script>

<style scoped>
/* ==========================================================================
   Base (mobile-first foundation — applies from 0px up unless overridden)
   ========================================================================== */

/* Outer section container: scales fluidly with viewport width instead of
   jumping between fixed breakpoint values. Overrides Tailwind's max-w-7xl. */
.max-w-7xl {
    max-width: clamp(320px, 94vw, 1600px);
}

.tech-header {
    max-width: 720px;
    text-align: left;
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
}

.blog-header-row {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 18px;
    margin-bottom: 32px;
}

.blog-header {
    margin-bottom: 0;
}

.view-all-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.9rem;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
    flex-shrink: 0;
    padding-bottom: 4px;
    transition: gap 0.2s ease, opacity 0.2s ease;
}

.view-all-link:hover {
    gap: 10px;
    opacity: 0.85;
}

.view-all-arrow {
    transition: transform 0.2s ease;
}

/* Horizontally scrollable case-study row (more than 4 cards) */
.work-scroll-track {
    display: flex;
    gap: 14px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding-left: 4px;
    padding-bottom: 12px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: thin;
}

.work-scroll-track::-webkit-scrollbar {
    height: 8px;
}

.work-scroll-track::-webkit-scrollbar-track {
    background: transparent;
}

.work-scroll-track::-webkit-scrollbar-thumb {
    background-color: var(--brand-accent, #00ffa3);
    border-radius: 999px;
    opacity: 0.5;
}

.work-card {
    flex: 0 0 auto;
    width: clamp(240px, 78vw, 300px);
    scroll-snap-align: start;
}

.blog-card {
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.blog-card-dark {
    background-color: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.08);
}

.blog-card-dark:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(255, 255, 255, 0.15);
    background-color: rgba(255, 255, 255, 0.035);
}

.blog-card-light {
    background-color: #fafafa;
    border-color: rgba(15, 23, 42, 0.08);
}

.blog-card-light:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.18);
    background-color: #ffffff;
}

.blog-image-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
}

.blog-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
}

.blog-card:hover .blog-image {
    transform: scale(1.06);
}

.blog-tag {
    position: absolute;
    top: 12px;
    left: 12px;
    font-size: 0.65rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 4px 9px;
    border-radius: 999px;
    backdrop-filter: blur(6px);
}

.blog-tag-dark {
    background-color: rgba(0, 0, 0, 0.55);
    color: #00ffa3;
    border: 1px solid rgba(0, 255, 163, 0.3);
}

.blog-tag-light {
    background-color: rgba(255, 255, 255, 0.85);
    color: #f97316;
    border: 1px solid rgba(249, 115, 22, 0.3);
}

.blog-content {
    display: flex;
    flex-direction: column;
    padding: 18px 16px 20px;
    flex-grow: 1;
}

.blog-title {
    font-size: 1rem;
    font-weight: 800;
    letter-spacing: -0.01em;
    line-height: 1.3;
    margin-bottom: 8px;
}

.blog-excerpt {
    font-size: 0.85rem;
    line-height: 1.6;
    flex-grow: 1;
    margin-bottom: 18px;
}

.blog-read-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.82rem;
    font-weight: 700;
    text-decoration: none;
    width: fit-content;
}

.blog-read-arrow {
    transition: transform 0.2s ease;
}

.blog-read-link:hover .blog-read-arrow {
    transform: translateX(3px);
}

/* ==========================================================================
   Mobile Landscape / Small Tablets: 576px — 768px
   ========================================================================== */
@media (min-width: 576px) {
    .blog-header-row {
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
        gap: 24px;
        margin-bottom: 40px;
    }

    .work-scroll-track {
        gap: 18px;
    }

    .work-card {
        width: clamp(250px, 46vw, 300px);
    }

    .blog-title {
        font-size: 1.03rem;
    }
}

/* ==========================================================================
   Laptops / Large Tablets: 768px — 992px
   ========================================================================== */
@media (min-width: 768px) {
    .blog-header-row {
        margin-bottom: 48px;
    }

    .work-scroll-track {
        gap: 20px;
    }

    .work-card {
        width: clamp(260px, 32vw, 310px);
    }

    .blog-content {
        padding: 20px 18px 22px;
    }

    .blog-excerpt {
        font-size: 0.87rem;
    }
}

/* ==========================================================================
   Laptops / Large Tablets (upper range): 992px — 1024px
   ========================================================================== */
@media (min-width: 992px) {
    .blog-header-row {
        margin-bottom: 52px;
    }

    .work-card {
        width: clamp(270px, 28vw, 315px);
    }
}

/* ==========================================================================
   Desktops: 1025px — 1200px
   ========================================================================== */
@media (min-width: 1025px) {
    .blog-header-row {
        margin-bottom: 56px;
    }

    .work-scroll-track {
        gap: 22px;
    }

    .work-card {
        width: clamp(270px, 26vw, 320px);
    }

    .blog-title {
        font-size: 1.05rem;
    }

    .blog-content {
        padding: 22px 20px 24px;
    }
}

/* ==========================================================================
   Extra Large Screens / Desktops / TVs: 1201px and up
   ========================================================================== */
@media (min-width: 1201px) {
    .work-card {
        width: clamp(280px, 23vw, 320px);
    }
}

/* ==========================================================================
   Ultra-wide / Large TVs: 1536px and up
   Scale up spacing and type so content doesn't feel lost on huge displays
   ========================================================================== */
@media (min-width: 1536px) {
    .tech-heading {
        font-size: 3rem;
    }

    .tech-paragraph {
        font-size: 1.15rem;
        max-width: 600px;
    }

    .work-scroll-track {
        gap: 26px;
    }

    .work-card {
        width: clamp(290px, 20vw, 340px);
    }

    .blog-title {
        font-size: 1.1rem;
    }

    .blog-excerpt {
        font-size: 0.9rem;
    }

    .blog-content {
        padding: 24px 22px 26px;
    }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Keeps scaling instead of plateauing at 1536px, so content doesn't shrink
   relative to a much larger viewport / viewing distance.
   ========================================================================== */
@media (min-width: 1920px) {
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

    .work-scroll-track {
        gap: 30px;
    }

    .work-card {
        width: clamp(300px, 18vw, 360px);
    }

    .blog-title {
        font-size: 1.18rem;
    }

    .blog-excerpt {
        font-size: 0.95rem;
    }

    .blog-content {
        padding: 26px 24px 28px;
    }

    .blog-tag {
        font-size: 0.7rem;
        padding: 5px 11px;
    }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   card width, and type growing proportionally instead of looking undersized.
   ========================================================================== */
@media (min-width: 2560px) {
    .max-w-7xl {
        max-width: 2100px;
    }

    .tech-heading {
        font-size: 4rem;
    }

    .tech-paragraph {
        font-size: 1.4rem;
        max-width: 760px;
    }

    .tech-eyebrow {
        font-size: 1.1rem;
    }

    .work-scroll-track {
        gap: 36px;
    }

    .work-card {
        width: clamp(320px, 16vw, 400px);
    }

    .blog-title {
        font-size: 1.3rem;
    }

    .blog-excerpt {
        font-size: 1.02rem;
    }

    .blog-content {
        padding: 30px 28px 32px;
    }

    .blog-tag {
        font-size: 0.75rem;
        padding: 6px 12px;
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

    .work-card {
        width: 82vw;
    }

    .blog-content {
        padding: 16px 14px 18px;
    }

    .blog-title {
        font-size: 0.95rem;
    }

    .blog-excerpt {
        font-size: 0.82rem;
    }
}
</style>