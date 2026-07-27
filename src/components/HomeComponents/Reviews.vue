<template>
    <section :class="[
        'py-24 px-6 relative z-20',
        isDarkMode ? 'bg-[#1c1c1c]' : 'bg-[#f2f2f2]'
    ]">
        <div class="max-w-7xl mx-auto">
            <div class="services-header services-header-center">
                <span :class="['services-eyebrow', isDarkMode ? 'accent-dark' : 'accent-light']">
                    Clients Reviews
                </span>
                <h2 :class="['services-heading', isDarkMode ? 'text-white' : 'text-black']">
                    Words from Our Satisfied Clients
                </h2>
                <p :class="['services-paragraph', isDarkMode ? 'text-neutral-400' : 'text-neutral-500']">
                    Feedback from clients we've partnered with on websites, apps, and long-term product work.
                </p>
            </div>

            <div class="services-grid">
                <div v-for="review in reviews" :key="review.name" class="service-card"
                    :class="isDarkMode ? 'service-card-dark' : 'service-card-light'">
                    <div class="review-stars" :class="isDarkMode ? 'accent-dark' : 'accent-light'">
                        <svg v-for="n in 5" :key="n" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M12 2.5l2.94 6.44 7.06.78-5.25 4.82 1.46 6.96L12 17.98l-6.21 3.52 1.46-6.96L2 9.72l7.06-.78z" />
                        </svg>
                    </div>

                    <p :class="['service-description', isDarkMode ? 'text-neutral-400' : 'text-neutral-500']">
                        {{ review.quote }}
                    </p>

                    <span :class="['review-name', isDarkMode ? 'text-white' : 'text-black']">
                        {{ review.name }}
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

const reviews = [
    {
        quote: 'We recently integrated NetSuite with Magento, and the results have been fantastic. The setup process was straightforward, and the data synchronization is seamless. Our inventory management has improved significantly, and our sales team can access real-time data without any hassle. Highly recommend this integration!',
        name: 'Sarah J., E-commerce Manager'
    },
    {
        quote: 'The integration between NetSuite and Magento has significantly streamlined our operations. The automated workflows have greatly improved efficiency, and the tool has been running smoothly since implementation. Overall, it’s a powerful solution that has made our processes much more efficient.',
        name: 'Mark T., Operations Director'
    },
    {
        quote: 'The integration offers great functionality and has been a valuable tool for our IT processes. Once configured, it ran seamlessly and has significantly improved our workflow. The system is efficient and has proven to be a reliable solution for our needs.',
        name: 'Lisa M., IT Specialist'
    },
    {
        quote: 'The NetSuite-Magento integration works flawlessly and has greatly improved our workflow. Usama\'s support was exceptional—quick, efficient, and always on point. The team’s dedication made the process seamless and stress-free. Highly recommend!',
        name: 'Emily R., IT Manager'
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

.services-header-center {
    max-width: clamp(280px, 90vw, 680px);
    margin-left: auto;
    margin-right: auto;
    text-align: center;
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

.services-header-center .services-paragraph {
    margin-left: auto;
    margin-right: auto;
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
    padding: 20px 18px;
    height: 100%;
    box-sizing: border-box;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;
}

.service-card-dark {
    background-color: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(0, 255, 163, 0.04);
}

.service-card-dark:hover {
    transform: translateY(-6px);
    border-color: var(--brand-accent, #00ffa3);
    box-shadow: 0 22px 50px rgba(0, 255, 163, 0.16), 0 8px 24px rgba(0, 0, 0, 0.5);
    background-color: rgba(255, 255, 255, 0.035);
}

.service-card-light {
    background-color: #fafafa;
    border-color: rgba(15, 23, 42, 0.08);
    box-shadow: 0 12px 32px rgba(15, 23, 42, 0.08), 0 2px 8px rgba(15, 23, 42, 0.04);
}

.service-card-light:hover {
    transform: translateY(-6px);
    border-color: var(--brand-accent, #f97316);
    box-shadow: 0 22px 50px rgba(249, 115, 22, 0.18), 0 8px 24px rgba(15, 23, 42, 0.1);
    background-color: #ffffff;
}

.review-stars {
    display: flex;
    gap: 3px;
    margin-bottom: 16px;
}

.review-stars svg {
    width: 15px;
    height: 15px;
}

.service-description {
    font-size: 0.85rem;
    line-height: 1.6;
    flex-grow: 1;
}

.review-name {
    display: block;
    font-size: 0.88rem;
    font-weight: 800;
    letter-spacing: -0.01em;
    margin-top: 18px;
}

/* ==========================================================================
   Mobile Landscape / Small Tablets: 576px — 768px
   ========================================================================== */
@media (min-width: 576px) {
    .services-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
    }

    .service-card {
        padding: 22px 20px;
    }

    .review-stars svg {
        width: 16px;
        height: 16px;
    }
}

/* ==========================================================================
   Laptops / Large Tablets: 768px — 992px
   ========================================================================== */
@media (min-width: 768px) {
    .services-grid {
        gap: 18px;
    }

    .service-card {
        padding: 24px 22px;
    }

    .service-description {
        font-size: 0.87rem;
    }

    .review-name {
        font-size: 0.9rem;
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
        padding: 25px 22px;
    }
}

/* ==========================================================================
   Desktops: 1025px — 1200px
   Four-column layout begins here (matches original 1024px breakpoint)
   ========================================================================== */
@media (min-width: 1025px) {
    .services-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 20px;
    }

    .service-card {
        padding: 26px 22px;
    }

    .review-stars {
        margin-bottom: 22px;
    }

    .service-description {
        font-size: 0.9rem;
    }

    .review-name {
        font-size: 0.95rem;
        margin-top: 24px;
    }

    .review-stars svg {
        width: 18px;
        height: 18px;
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
        padding: 28px 24px;
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
        padding: 32px 28px;
    }

    .service-description {
        font-size: 0.94rem;
    }

    .review-name {
        font-size: 1rem;
    }

    .review-stars svg {
        width: 20px;
        height: 20px;
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
        padding: 36px 32px;
    }

    .service-description {
        font-size: 0.98rem;
    }

    .review-name {
        font-size: 1.05rem;
    }

    .review-stars svg {
        width: 22px;
        height: 22px;
    }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   cards, and review text growing proportionally instead of looking
   undersized.
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
        padding: 42px 38px;
    }

    .service-description {
        font-size: 1.05rem;
    }

    .review-name {
        font-size: 1.15rem;
    }

    .review-stars svg {
        width: 25px;
        height: 25px;
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
        padding: 16px 14px;
    }

    .review-stars {
        margin-bottom: 12px;
    }

    .review-stars svg {
        width: 14px;
        height: 14px;
    }

    .service-description {
        font-size: 0.82rem;
    }

    .review-name {
        font-size: 0.82rem;
        margin-top: 14px;
    }
}
</style>