<template>
    <section :class="[
        'py-24 px-6 relative z-20',
        isDarkMode ? 'bg-[#1c1c1c]' : 'bg-[#f2f2f2]'
    ]">
        <div class="max-w-7xl mx-auto">
            <div class="cta-header">
                <h2 :class="['cta-heading', isDarkMode ? 'text-white' : 'text-black']">
                    Let's work together
                </h2>
                <p :class="['cta-paragraph', isDarkMode ? 'text-neutral-400' : 'text-neutral-500']">
                    Tell us about your project. We respond within one business day with a clear scope, timeline, and
                    estimate.
                </p>

                <div class="cta-actions">
                    <router-link to="/consultation" class="cta-button"
                        :class="isDarkMode ? 'cta-button-primary-dark' : 'cta-button-primary-light'">
                        Get a Consultation
                    </router-link>
                    <router-link to="/services" class="cta-button"
                        :class="isDarkMode ? 'cta-button-secondary-dark' : 'cta-button-secondary-light'">
                        Our Services
                    </router-link>
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

.cta-header {
    max-width: clamp(280px, 90vw, 720px);
    margin: 0 auto;
    text-align: center;
}

.cta-heading {
    font-size: clamp(1.6rem, 7vw, 2.75rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 12px;
}

.cta-paragraph {
    font-size: clamp(0.9rem, 3.6vw, 1.1rem);
    line-height: 1.6;
    max-width: clamp(260px, 85vw, 560px);
    margin: 0 auto;
}

.cta-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 24px;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 0.85rem;
    font-weight: 700;
    padding: 12px 22px;
    border-radius: 10px;
    border: 1px solid;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease, color 0.25s ease;
}

.cta-button-primary-dark {
    background-color: var(--brand-accent, #00ffa3);
    border-color: var(--brand-accent, #00ffa3);
    color: #000;
}

.cta-button-primary-dark:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 40px rgba(0, 255, 163, 0.25);
}

.cta-button-primary-light {
    background-color: var(--brand-accent, #f97316);
    border-color: var(--brand-accent, #f97316);
    color: #fff;
}

.cta-button-primary-light:hover {
    transform: translateY(-3px);
    box-shadow: 0 16px 40px rgba(249, 115, 22, 0.25);
}

.cta-button-secondary-dark {
    background-color: rgba(255, 255, 255, 0.02);
    border-color: rgba(255, 255, 255, 0.08);
    color: #ffffff;
}

.cta-button-secondary-dark:hover {
    transform: translateY(-3px);
    border-color: var(--brand-accent, #00ffa3);
    box-shadow: 0 16px 40px rgba(0, 255, 163, 0.08);
    background-color: rgba(255, 255, 255, 0.035);
}

.cta-button-secondary-light {
    background-color: #fafafa;
    border-color: rgba(15, 23, 42, 0.08);
    color: #000000;
}

.cta-button-secondary-light:hover {
    transform: translateY(-3px);
    border-color: var(--brand-accent, #f97316);
    box-shadow: 0 16px 40px rgba(249, 115, 22, 0.1);
    background-color: #ffffff;
}

/* ==========================================================================
   Mobile Landscape / Small Tablets: 576px — 768px
   ========================================================================== */
@media (min-width: 576px) {
    .cta-heading {
        margin-bottom: 14px;
    }

    .cta-actions {
        gap: 14px;
        margin-top: 28px;
    }

    .cta-button {
        font-size: 0.9rem;
        padding: 13px 25px;
    }
}

/* ==========================================================================
   Laptops / Large Tablets: 768px — 992px
   ========================================================================== */
@media (min-width: 768px) {
    .cta-heading {
        margin-bottom: 16px;
    }

    .cta-actions {
        gap: 16px;
        margin-top: 32px;
    }

    .cta-button {
        font-size: 0.95rem;
        padding: 14px 28px;
    }
}

/* ==========================================================================
   Laptops / Large Tablets (upper range): 992px — 1024px
   ========================================================================== */
@media (min-width: 992px) {
    .cta-actions {
        margin-top: 36px;
    }
}

/* ==========================================================================
   Desktops: 1025px — 1200px
   ========================================================================== */
@media (min-width: 1025px) {
    .cta-actions {
        gap: 18px;
        margin-top: 40px;
    }

    .cta-button {
        padding: 15px 30px;
    }
}

/* ==========================================================================
   Extra Large Screens / Desktops / TVs: 1201px and up
   ========================================================================== */
@media (min-width: 1201px) {
    .cta-actions {
        gap: 20px;
        margin-top: 44px;
    }

    .cta-button {
        font-size: 1rem;
        padding: 16px 32px;
    }
}

/* ==========================================================================
   Ultra-wide / Large TVs: 1536px and up
   Scale up spacing and type so content doesn't feel lost on huge displays
   ========================================================================== */
@media (min-width: 1536px) {
    .cta-heading {
        font-size: 3rem;
        margin-bottom: 18px;
    }

    .cta-paragraph {
        font-size: 1.15rem;
    }

    .cta-actions {
        gap: 22px;
        margin-top: 48px;
    }

    .cta-button {
        font-size: 1.05rem;
        padding: 17px 34px;
    }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Keeps scaling instead of plateauing at 1536px, so content doesn't shrink
   relative to a much larger viewport / viewing distance.
   ========================================================================== */
@media (min-width: 1920px) {
    .cta-heading {
        font-size: 3.4rem;
        margin-bottom: 20px;
    }

    .cta-paragraph {
        font-size: 1.25rem;
    }

    .cta-actions {
        gap: 24px;
        margin-top: 52px;
    }

    .cta-button {
        font-size: 1.1rem;
        padding: 18px 36px;
    }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   heading, and buttons growing proportionally instead of looking undersized.
   ========================================================================== */
@media (min-width: 2560px) {
    .max-w-7xl {
        max-width: 2100px;
    }

    .cta-header {
        max-width: 860px;
    }

    .cta-heading {
        font-size: 4rem;
        margin-bottom: 24px;
    }

    .cta-paragraph {
        font-size: 1.4rem;
        max-width: 680px;
    }

    .cta-actions {
        gap: 28px;
        margin-top: 58px;
    }

    .cta-button {
        font-size: 1.2rem;
        padding: 20px 40px;
    }
}

/* ==========================================================================
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
    .cta-heading {
        font-size: 1.45rem;
        margin-bottom: 10px;
    }

    .cta-paragraph {
        font-size: 0.85rem;
    }

    .cta-actions {
        gap: 10px;
        margin-top: 20px;
    }

    .cta-button {
        font-size: 0.8rem;
        padding: 11px 18px;
    }
}
</style>