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
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

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
.tech-header {
    max-width: 720px;
    margin: 0 0 56px 0;
    text-align: left;
}

.tech-eyebrow {
    display: block;
    font-size: 0.875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
}

.tech-heading {
    font-size: clamp(1.9rem, 4vw, 2.75rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 16px;
}

.tech-paragraph {
    font-size: clamp(0.95rem, 1.4vw, 1.1rem);
    line-height: 1.6;
    max-width: 560px;
}

/* Grid layout: 4 columns in a single row on desktop */
.tech-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1100px;
}

@media (max-width: 900px) {
    .tech-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .tech-grid {
        grid-template-columns: repeat(1, 1fr);
    }
}

/* Borderless card layout */
.tech-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 20px 4px;
    gap: 10px;
}

.step-index {
    font-size: 0.85rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    font-family: monospace;
}

.step-title {
    font-size: 1.1rem;
    font-weight: 800;
    letter-spacing: -0.01em;
}

.step-description {
    font-size: 0.9rem;
    line-height: 1.6;
}
</style>