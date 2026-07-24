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
.tech-header {
    max-width: 720px;
    margin: 0 auto 56px auto;
    text-align: center;
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
    margin: 0 auto;
}

/* Grid layout: 4 columns in desktop */
.tech-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    max-width: 1100px;
    margin: 0 auto;
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

/* Rectangular Card Layout (Horizontal Flex) */
.tech-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 24px;
    border-radius: 12px;
    border: 1px solid;
    gap: 16px;
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
    width: 36px;
    height: 36px;
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
    font-size: 1rem;
    font-weight: 700;
    white-space: nowrap;
}
</style>