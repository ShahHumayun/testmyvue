<template>
    <section :class="[
        'relative z-20 overflow-hidden py-20 px-6',
        isDarkMode ? 'bg-black' : 'bg-white'
    ]">
        <div class="max-w-5xl mx-auto relative z-10 text-center">
            <h2 :class="[
                'text-2xl md:text-3xl font-black tracking-tight mb-4',
                isDarkMode ? 'text-white' : 'text-black'
            ]">
                Trusted by teams we've shipped for
            </h2>
            <p :class="[
                'text-sm md:text-base max-w-2xl mx-auto mb-14 leading-relaxed',
                isDarkMode ? 'text-neutral-400' : 'text-neutral-500'
            ]">
                Headless CMS, marketing sites, and e-commerce — delivered for brands across restoration, pharma, ad
                tech, associations, and retail.
            </p>

            <div class="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
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
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const companies = [
    { name: 'Northbridge', shape: 'square' },
    { name: 'Vertex Supply', shape: 'triangle' },
    { name: 'Meridian Labs', shape: 'circle' },
    { name: 'Solstice Retail', shape: 'diamond' },
    { name: 'Ashgrove Pharma', shape: 'cross' }
]
</script>

<style scoped>
.company-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 700;
    font-size: 15px;
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
</style>