<template>
    <section :class="[
        'py-24 px-6 relative z-20',
        isDarkMode ? 'bg-black' : 'bg-white'
    ]">
        <div class="max-w-7xl mx-auto">
            <!-- Header Section -->
            <div class="tech-header">
                <span :class="['tech-eyebrow', isDarkMode ? 'text-emerald-400' : 'text-orange-600']">
                    Process
                </span>
                <h2 :class="['tech-heading', isDarkMode ? 'text-white' : 'text-black']">
                    How we work
                </h2>
                <p :class="['tech-paragraph', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
                    Governed, predictable delivery — from discovery to launch and beyond.
                </p>
            </div>

            <!-- Process Grid (4 per row on desktop) -->
            <div class="tech-grid">
                <div v-for="(step, index) in processSteps" :key="step.title" class="tech-card">
                    <span :class="['step-index', isDarkMode ? 'text-emerald-400' : 'text-orange-600']">
                        {{ String(index + 1).padStart(2, '0') }}
                    </span>
                    <h3 :class="['step-title', isDarkMode ? 'text-white' : 'text-black']">
                        {{ step.title }}
                    </h3>
                    <p :class="['step-description', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
                        {{ step.description }}
                    </p>
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

const processSteps = [
    {
        title: 'Discovery',
        description: 'We align on goals, technical constraints, timeline, and success metrics before writing a single line of code.'
    },
    {
        title: 'Architecture',
        description: 'Content models, system design, and a clear scope document — so there are no surprises mid-build.'
    },
    {
        title: 'Build & Iterate',
        description: 'Agile delivery with weekly demos. You see progress early and steer while we ship.'
    },
    {
        title: 'Launch & Scale',
        description: 'Performance tuning, SEO validation, deployment, documentation, and optional ongoing support.'
    }
]
</script>

<style scoped>
/* ==========================================================================
   Base (mobile-first foundation — applies from 0px up unless overridden)
   ========================================================================== */

.tech-header {
    max-width: 720px;
    margin: 0 0 40px 0;
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

/* Outer section container: scales fluidly with viewport width instead of
   jumping between fixed breakpoint values. Overrides Tailwind's max-w-7xl. */
.max-w-7xl {
    max-width: clamp(320px, 94vw, 1600px);
}

/* Grid layout: single column by default (mobile portrait) */
.tech-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    max-width: 100%;
}

/* Borderless card layout */
.tech-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 16px 4px;
    gap: 8px;
}

.step-index {
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    font-family: monospace;
}

.step-title {
    font-size: 1.05rem;
    font-weight: 800;
    letter-spacing: -0.01em;
}

.step-description {
    font-size: 0.875rem;
    line-height: 1.6;
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
        gap: 18px;
    }

    .tech-card {
        padding: 18px 4px;
    }

    .step-title {
        font-size: 1.08rem;
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
        gap: 20px;
    }

    .tech-card {
        padding: 20px 4px;
    }

    .step-description {
        font-size: 0.9rem;
    }
}

/* ==========================================================================
   Laptops / Large Tablets (upper range): 992px — 1024px
   Three-up grid starts to feel comfortable here
   ========================================================================== */
@media (min-width: 992px) {
    .tech-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }

    .tech-header {
        margin-bottom: 56px;
    }
}

/* ==========================================================================
   Desktops: 1025px — 1200px
   ========================================================================== */
@media (min-width: 1025px) {
    .tech-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 22px;
    }

    .step-title {
        font-size: 1.1rem;
    }

    .step-description {
        font-size: 0.9rem;
    }
}

/* ==========================================================================
   Extra Large Screens / Desktops / TVs: 1201px and up
   ========================================================================== */
@media (min-width: 1201px) {
    .tech-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 24px;

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

        gap: 28px;
    }

    .tech-heading {
        font-size: 3rem;
    }

    .tech-paragraph {
        font-size: 1.15rem;
        max-width: 600px;
    }

    .step-title {
        font-size: 1.2rem;
    }

    .step-description {
        font-size: 0.95rem;
    }

    .tech-card {
        padding: 22px 4px;
    }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Keeps scaling instead of plateauing at 1536px, so content doesn't shrink
   relative to a much larger viewport / viewing distance.
   ========================================================================== */
@media (min-width: 1920px) {
    .tech-grid {

        gap: 32px;
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

    .step-title {
        font-size: 1.3rem;
    }

    .step-description {
        font-size: 1.02rem;
    }

    .tech-card {
        padding: 26px 6px;
    }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing because there's simply more
   physical pixel real estate at the same viewing distance. This tier keeps
   the grid, type, and spacing growing proportionally instead of leaving
   everything looking undersized and lost in a sea of empty margin.
   ========================================================================== */
@media (min-width: 2560px) {
    .max-w-7xl {
        max-width: 2100px;
    }

    .tech-grid {
        gap: 40px;
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

    .step-title {
        font-size: 1.5rem;
    }

    .step-description {
        font-size: 1.15rem;
    }

    .tech-card {
        padding: 32px 8px;
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
        padding: 14px 2px;
    }
}
</style>