<template>
    <section :class="[
        'relative z-20 overflow-hidden py-14 px-4 sm:py-16 sm:px-6 md:py-20 lg:py-20 xl:py-24 2xl:py-28',
        isDarkMode ? 'bg-[#1c1c1c]' : 'bg-[#f2f2f2]'
    ]">
        <div class="max-w-5xl mx-auto relative z-10 text-center">
            <h2 :class="[
                'text-xl sm:text-2xl md:text-3xl xl:text-4xl font-black tracking-tight mb-3 sm:mb-4 md:mb-4',
                isDarkMode ? 'text-white' : 'text-black'
            ]">
                Trusted by teams we've shipped for
            </h2>
            <p :class="[
                'text-sm sm:text-base xl:text-lg max-w-2xl mx-auto mb-10 sm:mb-12 md:mb-14 xl:mb-16 leading-relaxed',
                isDarkMode ? 'text-neutral-400' : 'text-neutral-500'
            ]">
                Headless CMS, marketing sites, and e-commerce — delivered for brands across restoration, pharma, ad
                tech, associations, and retail.
            </p>

            <div
                class="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-10 sm:gap-y-7 md:gap-x-12 md:gap-y-8 xl:gap-x-14 xl:gap-y-9 2xl:gap-x-16 2xl:gap-y-10">
                <div v-for="company in companies" :key="company.name" class="company-badge"
                    :class="isDarkMode ? 'company-badge-dark' : 'company-badge-light'">
                    <svg v-if="company.shape === 'square'" width="18" height="18" viewBox="0 0 18 18"
                        aria-hidden="true">
                        <rect x="1" y="1" width="16" height="16" rx="3" fill="currentColor" />
                    </svg>
                    <svg v-else-if="company.shape === 'triangle'" width="18" height="18" viewBox="0 0 18 18"
                        aria-hidden="true">
                        <path d="M9 1 L17 16 L1 16 Z" fill="currentColor" />
                    </svg>
                    <svg v-else-if="company.shape === 'circle'" width="18" height="18" viewBox="0 0 18 18"
                        aria-hidden="true">
                        <circle cx="9" cy="9" r="8" fill="currentColor" />
                    </svg>
                    <svg v-else-if="company.shape === 'diamond'" width="18" height="18" viewBox="0 0 18 18"
                        aria-hidden="true">
                        <rect x="3" y="3" width="12" height="12" rx="2" transform="rotate(45 9 9)"
                            fill="currentColor" />
                    </svg>
                    <svg v-else width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                        <rect x="7" y="1" width="4" height="16" rx="1" fill="currentColor" />
                        <rect x="1" y="7" width="16" height="4" rx="1" fill="currentColor" />
                    </svg>
                    <span class="company-name">{{ company.name }}</span>
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

const companies = [
    { name: 'Northbridge', shape: 'square' },
    { name: 'Vertex Supply', shape: 'triangle' },
    { name: 'Meridian Labs', shape: 'circle' },
    { name: 'Solstice Retail', shape: 'diamond' },
    { name: 'Ashgrove Pharma', shape: 'cross' }
]
</script>

<style scoped>
/* ==========================================================================
   Fluid container width — scales continuously with the viewport instead of
   jumping between fixed breakpoint values. mx-auto (in the template) keeps
   it centered at every width, from the smallest phone to the largest TV.
   ========================================================================== */
.max-w-5xl {
    max-width: clamp(300px, 90vw, 1300px) !important;
}

.max-w-2xl {
    max-width: clamp(260px, 78vw, 640px) !important;
}

/* ==========================================================================
   Badge type + icon — base mobile portrait sizing
   ========================================================================== */
.company-badge {
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 700;
    font-size: 13px;
    letter-spacing: -0.01em;
    opacity: 0.55;
    transition: opacity 0.25s ease, color 0.25s ease;
}

.company-badge:hover {
    opacity: 1;
}

.company-badge-dark {
    color: #e5e5e5;
}

.company-badge-dark:hover {
    color: var(--brand-accent, #00ffa3);
}

.company-badge-light {
    color: #262626;
}

.company-badge-light:hover {
    color: var(--brand-accent, #f97316);
}

.company-name {
    white-space: nowrap;
}

.company-badge svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
}

/* ==========================================================================
   Mobile Landscape / Small Tablets: 576px — 768px
   ========================================================================== */
@media (min-width: 576px) {
    .company-badge {
        font-size: 14px;
        gap: 7px;
    }

    .company-badge svg {
        width: 16px;
        height: 16px;
    }
}

/* ==========================================================================
   Laptops / Large Tablets: 768px — 992px
   ========================================================================== */
@media (min-width: 768px) {
    .company-badge {
        font-size: 15px;
        gap: 8px;
    }

    .company-badge svg {
        width: 18px;
        height: 18px;
    }
}

/* ==========================================================================
   Desktops: 1025px — 1200px
   ========================================================================== */
@media (min-width: 1025px) {
    .company-badge {
        font-size: 15.5px;
    }
}

/* ==========================================================================
   Extra Large Screens / Desktops / TVs: 1201px and up
   ========================================================================== */
@media (min-width: 1201px) {
    .company-badge {
        font-size: 16px;
        gap: 9px;
    }

    .company-badge svg {
        width: 19px;
        height: 19px;
    }
}

/* ==========================================================================
   Ultra-wide / Large TVs: 1536px and up
   Scale up type/icon size so badges don't feel lost on huge displays
   ========================================================================== */
@media (min-width: 1536px) {
    .company-badge {
        font-size: 17px;
        gap: 10px;
    }

    .company-badge svg {
        width: 21px;
        height: 21px;
    }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Keeps scaling instead of plateauing at 1536px
   ========================================================================== */
@media (min-width: 1920px) {
    .company-badge {
        font-size: 18px;
        gap: 11px;
    }

    .company-badge svg {
        width: 23px;
        height: 23px;
    }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   heading, paragraph, and badges growing proportionally instead of
   looking undersized.
   ========================================================================== */
@media (min-width: 2560px) {
    .max-w-5xl {
        max-width: 1650px !important;
    }

    .max-w-2xl {
        max-width: 780px !important;
    }

    .xl\:text-4xl {
        font-size: 2.9rem;
    }

    .xl\:text-lg {
        font-size: 1.35rem;
    }

    .company-badge {
        font-size: 20px;
        gap: 13px;
    }

    .company-badge svg {
        width: 26px;
        height: 26px;
    }
}

/* ==========================================================================
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
    .company-badge {
        font-size: 12px;
        gap: 5px;
    }

    .company-badge svg {
        width: 14px;
        height: 14px;
    }
}
</style>