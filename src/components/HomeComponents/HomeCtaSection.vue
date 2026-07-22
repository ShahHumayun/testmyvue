<template>
    <section :class="[
        'py-24 px-6 relative z-20',
        isDarkMode ? 'bg-black' : 'bg-white'
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
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))
</script>

<style scoped>
.cta-header {
    max-width: 720px;
    margin: 0 auto;
    text-align: center;
}

.cta-heading {
    font-size: clamp(1.9rem, 4vw, 2.75rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 16px;
}

.cta-paragraph {
    font-size: clamp(0.95rem, 1.4vw, 1.1rem);
    line-height: 1.6;
    max-width: 560px;
    margin: 0 auto;
}

.cta-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 36px;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 0.95rem;
    font-weight: 700;
    padding: 14px 28px;
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
</style>