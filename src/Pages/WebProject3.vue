<template>
    <div :class="[
        isDarkMode ? 'bg-black text-white theme-dark' : 'bg-slate-50 text-slate-900 theme-light',
        'min-h-screen w-full transition-colors duration-500 overflow-x-hidden font-sans'
    ]">
        <!-- Header Component (theme is handled globally via inject/provide) -->
        <Header />

        <main class="w-full">
            <!-- Hero Showcase Section -->
            <section :class="[
                isDarkMode ? 'border-neutral-900' : 'border-neutral-200',
                'hero-shell relative w-full flex items-center overflow-hidden border-b z-20 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24 pt-24 sm:pt-24 md:pt-24 lg:pt-24 xl:pt-28 2xl:pt-32 pb-12 sm:pb-16 lg:pb-20'
            ]">
                <div
                    class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent-gradient-fade),transparent_70%)]">
                </div>

                <div
                    class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16 2xl:gap-20 items-center relative z-20 w-full">
                    <!-- Feature Details -->
                    <div class="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
                        <span ref="heroLabel"
                            class="inline-block text-[10px] sm:text-xs xl:text-sm 2xl:text-base font-bold tracking-[0.3em] text-[var(--accent-color)] uppercase bg-[var(--accent-bg-light)] px-3 py-1 sm:px-4 sm:py-1.5 xl:px-5 xl:py-2 rounded-full border border-[var(--accent-border)] shadow-[0_0_15px_var(--accent-shadow)]">
                            The Explorers
                        </span>

                        <!-- Benefits list -->
                        <ul ref="heroSubtitle"
                            class="benefits-list grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 xl:gap-5 max-w-2xl">
                            <li v-for="(point, idx) in heroBullets" :key="idx" class="flex items-start gap-3 p-2">
                                <span
                                    class="flex-shrink-0 w-5 h-5 xl:w-6 xl:h-6 rounded-full border flex items-center justify-center mt-1"
                                    :style="{ borderColor: 'var(--accent-border)', backgroundColor: 'var(--accent-bg-light)', color: 'var(--accent-color)' }">
                                    <svg class="w-3 h-3 xl:w-3.5 xl:h-3.5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span :class="isDarkMode ? 'text-neutral-300' : 'text-slate-900'"
                                    class="benefit-text font-medium text-base sm:text-lg xl:text-xl 2xl:text-2xl">
                                    {{ point }}
                                </span>
                            </li>
                        </ul>

                        <div ref="heroButtons" class="pt-3 sm:pt-4">
                            <button @click="router.push('/consultation')"
                                class="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 xl:px-9 2xl:px-10 2xl:py-5 text-sm sm:text-base 2xl:text-lg bg-[var(--accent-color)] text-black font-bold rounded-lg shadow-[0_0_30px_var(--accent-shadow-intense)] hover:shadow-[0_0_40px_var(--accent-shadow-hover)] transition-all duration-300 hover:scale-[1.02]">
                                Get A Quote
                            </button>
                        </div>
                    </div>

                    <!-- Monitor / LCD Frame & Carousel -->
                    <div class="lg:col-span-6 flex justify-center perspective-1000">
                        <div ref="monitor" :class="[
                            isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-black',
                            'monitor-frame w-full aspect-[16/10] border-[8px] rounded-lg shadow-[0_0_80px_var(--accent-shadow)] relative'
                        ]">
                            <div
                                :class="['h-8 flex items-center px-4 border-b', isDarkMode ? 'bg-neutral-950 border-neutral-800' : 'bg-neutral-100 border-neutral-300']">
                                <div class="flex gap-1.5 mr-4">
                                    <div class="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                                    <div class="w-2.5 h-2.5 rounded-full bg-[var(--accent-color)]/50"></div>
                                </div>
                                <span
                                    :class="['text-[10px] font-bold tracking-widest uppercase', isDarkMode ? 'text-neutral-500' : 'text-neutral-500']">The
                                    Explorers</span>
                            </div>

                            <div class="relative w-full h-[calc(100%-32px)] overflow-hidden">
                                <transition-group name="travel-fade">
                                    <div v-for="(slide, sIdx) in webProject1Slides" :key="slide.id"
                                        v-show="currentDot === sIdx" class="absolute inset-0">
                                        <img :src="slide.image" class="w-full h-full object-cover"
                                            :alt="`Screen ${slide.id}`" />
                                    </div>
                                </transition-group>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Tech Stack Section -->
            <section :class="[
                'py-24 px-6 relative z-20',
                isDarkMode ? 'bg-black' : 'bg-white'
            ]">
                <div class="tech-max-w mx-auto">
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

            <!-- Tourism Platform Experience Section -->
            <section class="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24">
                <div class="max-w-7xl mx-auto space-y-10">
                    <!-- Section Title -->
                    <div class="max-w-3xl space-y-4 text-left lg:max-w-none lg:mx-auto lg:text-center">
                        <h2
                            class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight transition-colors duration-500 lg:whitespace-nowrap">
                            Explore the World <br class="lg:hidden" />
                            <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-orange-500'"
                                class="transition-colors duration-500">
                                with Explorers
                            </span>
                        </h2>
                        <div :class="isDarkMode ? 'bg-[#00ffa3]' : 'bg-orange-500'"
                            class="h-1.5 w-24 rounded-full transition-colors duration-500 lg:mx-auto"></div>
                    </div>

                    <!-- Paragraphs describing the app's capabilities -->
                    <div ref="cardsGrid" :class="isDarkMode ? 'text-neutral-300' : 'text-slate-700'"
                        class="feature-copy max-w-4xl space-y-6 text-lg sm:text-xl xl:text-2xl leading-relaxed transition-colors duration-500 lg:mx-auto lg:text-center">
                        <p>
                            Travelers can sign up and sign in within moments, then move straight to a destination
                            discovery dashboard that shows curated trips and upcoming bookings at a glance. Browsing,
                            comparing itineraries, and booking trips all happen from the same simple screen, so the
                            next adventure never feels out of reach.
                        </p>
                        <p>
                            Detailed traveler and trip profiles keep booking history, preferences, and destination
                            details organized in one place. Built-in in-app chat lets travelers reach local guides
                            and support directly, making it easy to ask questions or fine-tune plans before setting
                            off.
                        </p>
                        <p>
                            A dedicated contact page rounds things out, giving travelers a quick way to get in touch
                            with the team for anything the app itself doesn't cover — keeping the full experience
                            personal, responsive, and easy to navigate from start to finish.
                        </p>
                    </div>
                </div>
            </section>

            <!-- CTA Section with Go Back Navigation -->
            <section
                :class="isDarkMode ? 'bg-neutral-950 border-t border-neutral-900' : 'bg-slate-100 border-t border-slate-200'"
                class="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24 transition-colors duration-500">
                <div class="max-w-7xl mx-auto text-center space-y-8">
                    <h2
                        class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight transition-colors duration-500">
                        Ready to Build Your Custom Mobile Application?
                    </h2>
                    <p :class="isDarkMode ? 'text-neutral-400' : 'text-slate-700'"
                        class="max-w-2xl mx-auto text-base sm:text-lg md:text-xl transition-colors duration-500">
                        Bring your ideas to life with optimized mobile architectures, responsive designs, and refined
                        user
                        experiences tailored to your audience.
                    </p>

                    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4">
                        <button @click="goBack" :class="[
                            isDarkMode
                                ? 'bg-neutral-800 text-white hover:bg-neutral-700 border-neutral-700'
                                : 'bg-white text-slate-900 hover:bg-slate-50 border-slate-300 shadow-sm',
                            'px-6 py-3 sm:px-7 sm:py-3.5 xl:px-8 xl:py-4 text-sm sm:text-base xl:text-lg font-semibold rounded-lg border transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto flex items-center justify-center gap-2'
                        ]">
                            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Go Back
                        </button>

                        <router-link to="/consultation" :class="[
                            isDarkMode
                                ? 'bg-[#00ffa3] text-black hover:bg-[#00e691]'
                                : 'bg-orange-500 text-white hover:bg-orange-500 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40',
                            'px-6 py-3 sm:px-7 sm:py-3.5 xl:px-8 xl:py-4 text-sm sm:text-base xl:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto inline-block'
                        ]">
                            Start a Project
                        </router-link>
                    </div>
                </div>
            </section>
        </main>

        <!-- Footer Component -->
        <Footer :isDarkMode="isDarkMode" />
    </div>
</template>

<script setup>
import { ref, provide, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '../components/Header.vue'
import Footer from '../components/footer.vue'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const isDarkMode = ref(true)
const cardsGrid = ref(null)

// Hero refs
const heroLabel = ref(null)
const heroSubtitle = ref(null)
const heroButtons = ref(null)
const monitor = ref(null)
const currentDot = ref(0)
let interval = null

// Keeps the <html> root in sync so any global (non-scoped) styles can react too
const applyGlobalThemeClass = (isDark) => {
    if (isDark) {
        document.documentElement.classList.add('theme-dark')
        document.documentElement.classList.remove('theme-light')
    } else {
        document.documentElement.classList.add('theme-light')
        document.documentElement.classList.remove('theme-dark')
    }
}

// Header.vue reads/toggles theme via inject('isDarkMode')/inject('toggleTheme').
// Uses the same 'webhive-theme' localStorage key across the site.
const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    const activeTheme = isDarkMode.value ? 'dark' : 'light'
    localStorage.setItem('webhive-theme', activeTheme)
    applyGlobalThemeClass(isDarkMode.value)
}
provide('isDarkMode', isDarkMode)
provide('toggleTheme', toggleTheme)

const goBack = () => {
    router.back()
}

const heroBullets = [
    'High-performance web apps',
    'Automated business workflows',
    'Seamless customer experiences',
    'Startup to enterprise scale',
    'Measurable business growth',
    'Best user experience'
]

const getWebProject1Image = (fileName) => {
    return new URL(`../assets/WebProject1/${fileName}`, import.meta.url).href
}

const webProject1Slides = ref([
    { id: 1, image: getWebProject1Image('img1.jpg') },
    { id: 2, image: getWebProject1Image('img2.jpg') },
    { id: 3, image: getWebProject1Image('img3.jpg') },
    { id: 4, image: getWebProject1Image('img4.jpg') },
    { id: 5, image: getWebProject1Image('img5.jpg') },
    { id: 6, image: getWebProject1Image('img6.jpg') }
])

// Tech Stack data
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

onMounted(() => {
    // Read the universal site theme preference set from any page. Defaults to dark.
    const savedTheme = localStorage.getItem('webhive-theme')
    isDarkMode.value = savedTheme ? savedTheme === 'dark' : true
    applyGlobalThemeClass(isDarkMode.value)

    // Auto-rotate the LCD carousel images
    interval = setInterval(() => {
        currentDot.value = (currentDot.value + 1) % webProject1Slides.value.length
    }, 4000)

    // Hero entrance animation
    const heroTl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } })
    heroTl.fromTo(heroLabel.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 0.2 })
        .fromTo(heroSubtitle.value.children, { opacity: 0, x: 20 }, { opacity: 1, x: 0, stagger: 0.08 }, '-=0.9')
        .fromTo(heroButtons.value, { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, '-=0.7')
        .fromTo(monitor.value, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1 }, '-=0.8')

    // Paragraph Entrance Animation (Tourism section)
    if (cardsGrid.value) {
        gsap.fromTo(
            cardsGrid.value.children,
            { opacity: 0, y: 35 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: { trigger: cardsGrid.value, start: 'top 80%' }
            }
        )
    }
})

onUnmounted(() => {
    clearInterval(interval)
})
</script>

<style scoped>
/* Accent theme variables (used by the hero) */
.theme-dark {
    --accent-color: #00ffa3;
    --accent-secondary: #34d399;
    --accent-bg-light: rgba(0, 255, 163, 0.1);
    --accent-border: rgba(0, 255, 163, 0.2);
    --accent-shadow: rgba(0, 255, 163, 0.1);
    --accent-shadow-intense: rgba(0, 255, 163, 0.3);
    --accent-shadow-hover: rgba(0, 255, 163, 0.5);
    --accent-gradient-fade: rgba(0, 255, 163, 0.05);
}

.theme-light {
    --accent-color: #f97316;
    --accent-secondary: #fb923c;
    --accent-bg-light: rgba(249, 115, 22, 0.1);
    --accent-border: rgba(249, 115, 22, 0.2);
    --accent-shadow: rgba(249, 115, 22, 0.1);
    --accent-shadow-intense: rgba(249, 115, 22, 0.3);
    --accent-shadow-hover: rgba(249, 115, 22, 0.5);
    --accent-gradient-fade: rgba(249, 115, 22, 0.05);
}

.travel-fade-enter-active,
.travel-fade-leave-active {
    transition: opacity 0.6s ease-in-out;
}

.travel-fade-enter-from,
.travel-fade-leave-to {
    opacity: 0;
}

/* Outer layout max-width fluid container (hero / tourism / CTA sections) */
.max-w-7xl {
    max-width: clamp(320px, 94vw, 1500px) !important;
}

/* Monitor / LCD frame sizing — pushed larger at every breakpoint */
.monitor-frame {
    max-width: 700px;
}

@media (min-width: 1024px) {
    .monitor-frame {
        max-width: 800px;
    }
}

@media (min-width: 1280px) {
    .monitor-frame {
        max-width: 920px;
    }
}

@media (min-width: 1536px) {
    .monitor-frame {
        max-width: 1020px;
    }
}

@media (min-width: 1920px) {
    .max-w-7xl {
        max-width: 1820px !important;
    }

    .monitor-frame {
        max-width: 1120px;
    }

    .benefit-text {
        font-size: 1.5rem;
    }
}

/* 4K / 2560px Screen Scaling */
@media (min-width: 2560px) {
    .max-w-7xl {
        max-width: 2350px !important;
    }

    .monitor-frame {
        max-width: 1250px;
    }

    .benefit-text {
        font-size: 1.6rem;
    }

    /* Tourism section paragraphs — bigger text, wider column, only at 4K */
    .feature-copy {
        font-size: 1.65rem;
        max-width: 1400px !important;
    }
}

/* ==========================================================================
   Tech Stack Section — merged in as-is, its own container class
   (tech-max-w) so it doesn't collide with the page's .max-w-7xl rule above.
   ========================================================================== */

.tech-header {
    max-width: 720px;
    margin: 0 auto 40px auto;
    text-align: center;
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
    margin: 0 auto;
}

/* Tech section's own outer container width (renamed from max-w-7xl to avoid clashing) */
.tech-max-w {
    max-width: clamp(320px, 94vw, 1600px);
}

/* Grid layout: single column by default (mobile portrait) */
.tech-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
    max-width: 100%;
    margin: 0 auto;
}

/* Rectangular Card Layout (Horizontal Flex) */
.tech-card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 16px 18px;
    border-radius: 12px;
    border: 1px solid;
    gap: 14px;
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
    width: 32px;
    height: 32px;
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
    font-size: 0.95rem;
    font-weight: 700;
    white-space: nowrap;
}

/* Mobile Landscape / Small Tablets: 576px — 768px */
@media (min-width: 576px) {
    .tech-header {
        margin-bottom: 48px;
    }

    .tech-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 16px;
    }

    .tech-card {
        padding: 18px 20px;
    }

    .tech-icon-wrapper {
        width: 34px;
        height: 34px;
    }

    .tech-name {
        font-size: 0.98rem;
    }
}

/* Laptops / Large Tablets: 768px — 992px */
@media (min-width: 768px) {
    .tech-header {
        margin-bottom: 52px;
    }

    .tech-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 18px;
    }

    .tech-card {
        padding: 20px 22px;
    }

    .tech-icon-wrapper {
        width: 36px;
        height: 36px;
    }

    .tech-name {
        font-size: 1rem;
    }
}

/* Laptops / Large Tablets (upper range): 992px — 1024px */
@media (min-width: 992px) {
    .tech-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }

    .tech-header {
        margin-bottom: 56px;
    }

    .tech-card {
        padding: 20px 24px;
    }
}

/* Desktops: 1025px — 1200px */
@media (min-width: 1025px) {
    .tech-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 20px;
    }
}

/* Extra Large Screens / Desktops / TVs: 1201px and up */
@media (min-width: 1201px) {
    .tech-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 22px;
    }

    .tech-header {
        margin-bottom: 56px;
    }
}

/* Ultra-wide / Large TVs: 1536px and up */
@media (min-width: 1536px) {
    .tech-grid {
        gap: 26px;
    }

    .tech-heading {
        font-size: 3rem;
    }

    .tech-paragraph {
        font-size: 1.15rem;
        max-width: 600px;
    }

    .tech-card {
        padding: 24px 26px;
    }

    .tech-icon-wrapper {
        width: 40px;
        height: 40px;
    }

    .tech-name {
        font-size: 1.05rem;
    }
}

/* Very Large Desktops / Big TVs: 1920px and up */
@media (min-width: 1920px) {
    .tech-grid {
        gap: 30px;
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

    .tech-card {
        padding: 28px 30px;
    }

    .tech-icon-wrapper {
        width: 44px;
        height: 44px;
    }

    .tech-name {
        font-size: 1.15rem;
    }
}

/* 4K / Extra-Extra-Large Monitors: 2560px and up */
@media (min-width: 2560px) {
    .tech-max-w {
        max-width: 2100px;
    }

    .tech-header {
        max-width: 900px;
    }

    .tech-grid {
        gap: 38px;
    }

    .tech-eyebrow {
        font-size: 1.1rem;
    }

    .tech-heading {
        font-size: 4.4rem;
        white-space: nowrap;
    }

    .tech-paragraph {
        font-size: 1.4rem;
        max-width: 760px;
    }

    .tech-card {
        padding: 34px 36px;
    }

    .tech-icon-wrapper {
        width: 50px;
        height: 50px;
    }

    .tech-name {
        font-size: 1.28rem;
    }
}

/* Very small phones: keep things tight at the extreme low end (<= 380px) */
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
        padding: 14px 16px;
        gap: 12px;
    }

    .tech-icon-wrapper {
        width: 28px;
        height: 28px;
    }

    .tech-name {
        font-size: 0.88rem;
    }
}
</style>