<template>
    <section :class="[
        'py-24 px-6 relative z-20',
        isDarkMode ? 'bg-[#1c1c1c]' : 'bg-[#f2f2f2]'
    ]">
        <div class="max-w-7xl mx-auto">
            <div class="services-header">
                <span :class="['services-eyebrow', isDarkMode ? 'accent-dark' : 'accent-light']">
                    Services
                </span>
                <h2 :class="['services-heading', isDarkMode ? 'text-white' : 'text-black']">
                    What we build
                </h2>
                <p :class="['services-paragraph', isDarkMode ? 'text-neutral-400' : 'text-neutral-500']">
                    Full-stack expertise across content platforms, applications, and commerce — senior-led from day one.
                </p>
            </div>

            <div class="services-grid">
                <router-link v-for="service in services" :key="service.title" :to="service.link" class="service-card"
                    :class="isDarkMode ? 'service-card-dark' : 'service-card-light'">
                    <div class="service-icon-badge" :class="isDarkMode ? 'icon-badge-dark' : 'icon-badge-light'">
                        <svg v-if="service.icon === 'layers'" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
                            aria-hidden="true">
                            <path d="M12 2 2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg>
                        <svg v-else-if="service.icon === 'code'" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
                            aria-hidden="true">
                            <polyline points="16 18 22 12 16 6" />
                            <polyline points="8 6 2 12 8 18" />
                        </svg>
                        <svg v-else-if="service.icon === 'bag'" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
                            aria-hidden="true">
                            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        <svg v-else-if="service.icon === 'globe'" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"
                            aria-hidden="true">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="2" y1="12" x2="22" y2="12" />
                            <path
                                d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                        <svg v-else-if="service.icon === 'refresh'" width="24" height="24" viewBox="0 0 24 24"
                            fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"
                            stroke-linejoin="round" aria-hidden="true">
                            <polyline points="1 4 1 10 7 10" />
                            <polyline points="23 20 23 14 17 14" />
                            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4-4.64 4.36A9 9 0 0 1 3.51 15" />
                        </svg>
                        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <line x1="3" y1="9" x2="21" y2="9" />
                            <line x1="9" y1="21" x2="9" y2="9" />
                        </svg>
                    </div>

                    <h3 :class="['service-title', isDarkMode ? 'text-white' : 'text-black']">
                        {{ service.title }}
                    </h3>
                    <p :class="['service-description', isDarkMode ? 'text-neutral-400' : 'text-neutral-500']">
                        {{ service.description }}
                    </p>

                    <span :class="['service-link', isDarkMode ? 'accent-dark' : 'accent-light']">
                        Learn more
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="service-link-arrow"
                            aria-hidden="true">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                        </svg>
                    </span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, inject, computed } from 'vue'

// Accept an explicit :darkMode prop (Home.vue already passes one, but it was
// previously being silently dropped since this component never declared it).
// Falls back to inject() so it still works if a page uses provide() instead.
const props = defineProps({
    darkMode: { type: Boolean, default: undefined }
})

const injectedIsDarkMode = inject('isDarkMode', ref(true))

const isDarkMode = computed(() =>
    props.darkMode !== undefined ? props.darkMode : injectedIsDarkMode.value
)

const services = [
    {
        icon: 'layers',
        title: 'Headless CMS Implementations',
        description: 'Production-grade headless CMS implementations with Strapi, Contentful, Sanity, Prismic, and Storyblok on Next.js.',
        link: '/services/headless-cms-implementations'
    },
    {
        icon: 'code',
        title: 'Web Application Development',
        description: 'Full-stack SaaS, dashboards, and internal tools built with modern TypeScript stacks.',
        link: '/services/web-application-development'
    },
    {
        icon: 'bag',
        title: 'Shopify & E-commerce',
        description: 'Custom storefronts, theme development, and headless commerce integrations.',
        link: '/services/shopify-ecommerce'
    },
    {
        icon: 'globe',
        title: 'WordPress Solutions',
        description: 'Headless WordPress, custom plugins, and enterprise-grade migrations.',
        link: '/services/wordpress-solutions'
    },
    {
        icon: 'refresh',
        title: 'Product Engineering Retainers',
        description: 'Dedicated engineering capacity for teams that need senior talent on demand.',
        link: '/services/product-engineering'
    },
    {
        icon: 'layout',
        title: 'Templates & Boilerplates',
        description: 'Production-ready starters that accelerate your launch — or ours.',
        link: '/services/templates-boilerplates'
    }
]
</script>

<style scoped>
/* ==========================================================================
   Fluid outer container — scales continuously with viewport width instead
   of jumping between fixed breakpoint values. mx-auto keeps it centered.
   ========================================================================== */
.max-w-7xl {
    max-width: clamp(320px, 94vw, 1600px);
}

/* ==========================================================================
   Base (mobile-first foundation — applies from 0px up unless overridden)
   ========================================================================== */

.services-header {
    max-width: clamp(280px, 90vw, 640px);
    margin-bottom: clamp(32px, 8vh, 80px);
}

.services-eyebrow {
    display: block;
    font-family: monospace;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    margin-bottom: 10px;
}

.services-heading {
    font-size: clamp(1.6rem, 7vw, 2.75rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 14px;
}

.services-paragraph {
    font-size: clamp(0.9rem, 3.6vw, 1.1rem);
    line-height: 1.6;
    max-width: clamp(260px, 85vw, 560px);
}

.accent-dark {
    color: var(--brand-accent, #00ffa3);
}

.accent-light {
    color: var(--brand-accent, #f97316);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 14px;
}

.service-card {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    border-radius: 14px;
    border: 1px solid;
    padding: 22px 20px;
    height: 100%;
    box-sizing: border-box;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
}

.service-card-dark {
    background-color: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.08);
}

.service-card-dark:hover {
    transform: translateY(-5px);
    border-color: var(--brand-accent, #00ffa3);
    box-shadow: 0 16px 40px rgba(0, 255, 163, 0.08);
    background-color: rgba(255, 255, 255, 0.035);
}

.service-card-light {
    background-color: #fafafa;
    border-color: rgba(15, 23, 42, 0.08);
}

.service-card-light:hover {
    transform: translateY(-5px);
    border-color: var(--brand-accent, #f97316);
    box-shadow: 0 16px 40px rgba(249, 115, 22, 0.1);
    background-color: #ffffff;
}

.service-icon-badge {
    width: 42px;
    height: 42px;
    border-radius: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    flex-shrink: 0;
}

.icon-badge-dark {
    background-color: rgba(0, 255, 163, 0.08);
    color: var(--brand-accent, #00ffa3);
}

.icon-badge-light {
    background-color: rgba(249, 115, 22, 0.08);
    color: var(--brand-accent, #f97316);
}

.service-title {
    font-size: 1.03rem;
    font-weight: 800;
    letter-spacing: -0.01em;
    margin-bottom: 8px;
    line-height: 1.3;
}

.service-description {
    font-size: 0.86rem;
    line-height: 1.6;
    flex-grow: 1;
}

.service-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.82rem;
    font-weight: 700;
    margin-top: 18px;
}

.service-link-arrow {
    transition: transform 0.2s ease;
}

.service-card:hover .service-link-arrow {
    transform: translateX(3px);
}

/* ==========================================================================
   Mobile Landscape / Small Tablets: 576px — 768px
   ========================================================================== */
@media (min-width: 576px) {
    .services-grid {
        gap: 16px;
    }

    .service-card {
        padding: 24px 22px;
    }

    .service-icon-badge {
        width: 44px;
        height: 44px;
        margin-bottom: 18px;
    }

    .service-title {
        font-size: 1.06rem;
    }
}

/* ==========================================================================
   Laptops / Large Tablets: 768px — 992px
   ========================================================================== */
@media (min-width: 768px) {
    .services-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 18px;
    }

    .service-card {
        padding: 26px 24px;
    }

    .service-icon-badge {
        width: 46px;
        height: 46px;
        margin-bottom: 20px;
    }

    .service-title {
        font-size: 1.1rem;
    }

    .service-description {
        font-size: 0.88rem;
    }
}

/* ==========================================================================
   Laptops / Large Tablets (upper range): 992px — 1024px
   ========================================================================== */
@media (min-width: 992px) {
    .services-grid {
        gap: 19px;
    }

    .service-card {
        padding: 28px 26px;
    }
}

/* ==========================================================================
   Desktops: 1025px — 1200px
   Three-column layout begins here (matches original 1024px breakpoint)
   ========================================================================== */
@media (min-width: 1025px) {
    .services-grid {
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 20px;
    }

    .service-card {
        padding: 32px 28px;
    }

    .service-icon-badge {
        width: 50px;
        height: 50px;
        margin-bottom: 22px;
    }

    .service-title {
        font-size: 1.15rem;
    }

    .service-description {
        font-size: 0.9rem;
    }

    .service-link {
        margin-top: 24px;
    }
}

/* ==========================================================================
   Extra Large Screens / Desktops / TVs: 1201px and up
   ========================================================================== */
@media (min-width: 1201px) {
    .services-grid {
        gap: 22px;
    }

    .service-card {
        padding: 34px 30px;
    }
}

/* ==========================================================================
   Ultra-wide / Large TVs: 1536px and up
   Scale up spacing and type so content doesn't feel lost on huge displays
   ========================================================================== */
@media (min-width: 1536px) {
    .services-heading {
        font-size: 3rem;
    }

    .services-paragraph {
        font-size: 1.15rem;
    }

    .services-grid {
        gap: 26px;
    }

    .service-card {
        padding: 38px 34px;
    }

    .service-icon-badge {
        width: 54px;
        height: 54px;
        margin-bottom: 24px;
    }

    .service-title {
        font-size: 1.22rem;
    }

    .service-description {
        font-size: 0.94rem;
    }

    .service-link {
        font-size: 0.88rem;
    }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Keeps scaling instead of plateauing at 1536px, so content doesn't shrink
   relative to a much larger viewport / viewing distance.
   ========================================================================== */
@media (min-width: 1920px) {
    .services-heading {
        font-size: 3.4rem;
    }

    .services-paragraph {
        font-size: 1.25rem;
    }

    .services-grid {
        gap: 30px;
    }

    .service-card {
        padding: 42px 38px;
    }

    .service-icon-badge {
        width: 58px;
        height: 58px;
        margin-bottom: 26px;
    }

    .service-title {
        font-size: 1.3rem;
    }

    .service-description {
        font-size: 0.98rem;
    }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   cards, and type growing proportionally instead of looking undersized.
   ========================================================================== */
@media (min-width: 2560px) {
    .max-w-7xl {
        max-width: 2100px;
    }

    .services-heading {
        font-size: 4rem;
    }

    .services-paragraph {
        font-size: 1.4rem;
    }

    .services-grid {
        gap: 36px;
    }

    .service-card {
        padding: 48px 44px;
    }

    .service-icon-badge {
        width: 64px;
        height: 64px;
        margin-bottom: 30px;
    }

    .service-title {
        font-size: 1.45rem;
    }

    .service-description {
        font-size: 1.05rem;
    }
}

/* ==========================================================================
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
    .services-eyebrow {
        font-size: 10px;
    }

    .services-heading {
        font-size: 1.45rem;
    }

    .services-paragraph {
        font-size: 0.85rem;
    }

    .service-card {
        padding: 18px 16px;
    }

    .service-icon-badge {
        width: 38px;
        height: 38px;
        margin-bottom: 14px;
    }

    .service-title {
        font-size: 0.98rem;
    }

    .service-description {
        font-size: 0.82rem;
    }
}
</style>