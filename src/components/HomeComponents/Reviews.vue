<template>
    <section :class="[
        'py-24 px-6 relative z-20',
        isDarkMode ? 'bg-black' : 'bg-white'
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
import { ref, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

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
.services-header {
    max-width: 640px;
    margin-bottom: clamp(48px, 8vh, 80px);
}

.services-header-center {
    max-width: 680px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
}

.services-eyebrow {
    display: block;
    font-family: monospace;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    margin-bottom: 14px;
}

.services-heading {
    font-size: clamp(1.9rem, 4vw, 2.75rem);
    font-weight: 900;
    letter-spacing: -0.02em;
    line-height: 1.15;
    margin-bottom: 16px;
}

.services-paragraph {
    font-size: clamp(0.95rem, 1.4vw, 1.1rem);
    line-height: 1.6;
    max-width: 560px;
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
    gap: 18px;
}

@media (min-width: 640px) {
    .services-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }
}

@media (min-width: 1024px) {
    .services-grid {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 20px;
    }
}

.service-card {
    display: flex;
    flex-direction: column;
    text-decoration: none;
    border-radius: 16px;
    border: 1px solid;
    padding: 26px 22px;
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
    gap: 4px;
    margin-bottom: 22px;
}

.service-description {
    font-size: 0.9rem;
    line-height: 1.6;
    flex-grow: 1;
}

.review-name {
    display: block;
    font-size: 0.95rem;
    font-weight: 800;
    letter-spacing: -0.01em;
    margin-top: 24px;
}
</style>