<template>
    <div :class="[
        isDarkMode ? 'bg-black text-white theme-dark' : 'bg-slate-50 text-slate-900 theme-light',
        'min-h-screen w-full transition-colors duration-500 overflow-x-hidden font-sans'
    ]">
        <!-- Header Component (theme is handled globally via inject/provide) -->
        <Header />

        <main class="w-full">
            <!-- ================= 1. HERO ================= -->
            <section :class="[
                isDarkMode ? 'border-neutral-900' : 'border-neutral-200',
                'hero-shell relative w-full flex items-center overflow-hidden border-b z-20 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24 pt-20 sm:pt-20 md:pt-20 lg:pt-20 xl:pt-24 2xl:pt-28 pb-8 sm:pb-10 lg:pb-14'
            ]">
                <!-- Solid hero background: white on light theme, black on dark theme -->
                <div :class="[isDarkMode ? 'hero-bg-solid-dark' : 'hero-bg-solid-light']" class="absolute inset-0">
                </div>
                <div
                    class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent-gradient-fade),transparent_70%)]">
                </div>

                <div
                    class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-8 lg:gap-8 xl:gap-10 2xl:gap-12 items-center relative z-20 w-full">
                    <!-- Copy column -->
                    <div class="lg:col-span-6 space-y-4 sm:space-y-5 text-left">
                        <span ref="heroLabel"
                            class="inline-block text-[10px] sm:text-xs xl:text-sm 2xl:text-base font-bold tracking-[0.3em] text-[var(--accent-color)] uppercase bg-[var(--accent-bg-light)] px-3 py-1 sm:px-4 sm:py-1.5 xl:px-5 xl:py-2 rounded-full border border-[var(--accent-border)] shadow-[0_0_15px_var(--accent-shadow)]">
                            E-Commerce Platform
                        </span>

                        <h1 :class="isDarkMode ? 'text-white' : 'text-slate-900'"
                            class="brand-hero-title text-5xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tight leading-[0.9]">
                            Replacement <span class="brand-hero-accent">Glass</span>
                        </h1>

                        <h2 :class="isDarkMode ? 'text-white' : 'text-slate-900'"
                            class="text-3xl sm:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold tracking-tight leading-[1.05]">
                            A storefront built to
                            <span :style="{ color: 'var(--accent-color)' }">convert</span>
                        </h2>

                        <!-- Benefits list -->
                        <ul ref="heroSubtitle"
                            class="benefits-list grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 xl:gap-4 max-w-2xl pt-1">
                            <li v-for="(point, idx) in heroBullets" :key="idx" class="flex items-start gap-2.5 p-1.5">
                                <span
                                    class="flex-shrink-0 w-4 h-4 xl:w-5 xl:h-5 rounded-full border flex items-center justify-center mt-1"
                                    :style="{ borderColor: 'var(--accent-border)', backgroundColor: 'var(--accent-bg-light)', color: 'var(--accent-color)' }">
                                    <svg class="w-2.5 h-2.5 xl:w-3 xl:h-3" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span :class="isDarkMode ? 'text-neutral-300' : 'text-slate-900'"
                                    class="benefit-text font-medium text-sm sm:text-base xl:text-lg 2xl:text-xl">
                                    {{ point }}
                                </span>
                            </li>
                        </ul>

                        <div ref="heroButtons" class="pt-2 sm:pt-3">
                            <button @click="router.push('/consultation')"
                                class="w-full sm:w-auto px-5 py-3 sm:px-7 sm:py-3.5 xl:px-8 2xl:px-9 2xl:py-4 text-sm sm:text-base bg-[var(--accent-color)] text-black font-bold rounded-lg shadow-[0_0_30px_var(--accent-shadow-intense)] hover:shadow-[0_0_40px_var(--accent-shadow-hover)] transition-all duration-300 hover:scale-[1.02]">
                                Get A Quote
                            </button>
                        </div>
                    </div>

                    <!-- Signature visual: live storefront browser mockup with floating stat cards -->
                    <div class="lg:col-span-6 flex justify-center">
                        <div ref="spotlight" :class="[isDarkMode ? 'browser-mock-dark' : 'browser-mock-light']"
                            class="browser-mockup">

                            <!-- browser chrome -->
                            <div class="browser-chrome">
                                <div class="chrome-dots">
                                    <span></span><span></span><span></span>
                                </div>
                                <div class="chrome-url">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <rect x="5" y="11" width="14" height="9" rx="2" />
                                        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                                    </svg>
                                    <span>replacementglass.com</span>
                                </div>
                            </div>

                            <!-- live store preview -->
                            <div class="store-body">
                                <div class="store-banner">
                                    <span class="store-banner-badge">Made To Order</span>
                                    <div class="store-banner-title">Custom Cut Glass Panels</div>
                                </div>

                                <!-- Edit `mockupProducts` in the script to change the photos/names/prices shown here -->
                                <div class="store-grid">
                                    <div v-for="product in mockupProducts" :key="product.id" class="store-card">
                                        <div class="store-card-thumb"
                                            :style="{ backgroundImage: `url(${product.image})` }">
                                            <div class="store-card-thumb-shade"></div>
                                            <button class="store-card-add" @click="bumpCart"
                                                aria-label="Add to cart">+</button>
                                        </div>
                                        <div class="store-card-info">
                                            <span class="store-card-name">{{ product.name }}</span>
                                            <span class="store-card-price">{{ product.price }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- floating cart fab with live count -->
                            <div ref="cartFab" class="cart-fab" @click="bumpCart">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="9" cy="21" r="1" />
                                    <circle cx="20" cy="21" r="1" />
                                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                                </svg>
                                <span class="cart-count">{{ cartCount }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ================= 2. CAROUSEL — full-bleed, autoplay + arrows ================= -->
            <section :class="isDarkMode ? 'bg-black' : 'bg-white'" class="carousel-section w-full relative">
                <div
                    class="carousel-heading px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24 pt-16 sm:pt-20 pb-8 sm:pb-10 text-center">
                    <span :class="isDarkMode ? 'text-emerald-400' : 'text-orange-600'"
                        class="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">Walkthrough</span>
                    <h2 :class="isDarkMode ? 'text-white' : 'text-slate-900'"
                        class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mt-3">
                        A look inside the store
                    </h2>
                </div>

                <div ref="carouselViewport"
                    class="carousel-viewport max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24"
                    @mouseenter="pauseAutoplay" @mouseleave="resumeAutoplay">
                    <div class="carousel-inner">
                        <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                            <div v-for="slide in projectSlides" :key="slide.id" class="carousel-slide">
                                <img :src="slide.image" :alt="slide.caption" class="carousel-image" />
                                <div class="carousel-caption">{{ slide.caption }}</div>
                            </div>
                        </div>

                        <!-- Arrow controls -->
                        <button class="carousel-arrow carousel-arrow-left" aria-label="Previous slide"
                            @click="prevSlide">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button class="carousel-arrow carousel-arrow-right" aria-label="Next slide" @click="nextSlide">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 18l6-6-6-6" />
                            </svg>
                        </button>

                        <!-- Dot indicators -->
                        <div class="carousel-dots">
                            <button v-for="(slide, idx) in projectSlides" :key="'dot-' + slide.id" class="carousel-dot"
                                :class="{ 'carousel-dot-active': idx === currentSlide }"
                                :aria-label="`Go to slide ${idx + 1}`" @click="goToSlide(idx)"></button>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ================= 3. DESCRIPTION (right after carousel) ================= -->
            <section class="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24">
                <div class="max-w-7xl mx-auto space-y-10">
                    <!-- Section Title -->
                    <div class="max-w-3xl space-y-4 text-left lg:max-w-none lg:mx-auto lg:text-center">
                        <h2
                            class="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-extrabold tracking-tight transition-colors duration-500 lg:whitespace-nowrap">
                            Built for the <br class="lg:hidden" />
                            <span :style="{ color: 'var(--accent-color)' }" class="transition-colors duration-500">
                                whole shopping journey
                            </span>
                        </h2>
                        <div :style="{ backgroundColor: 'var(--accent-color)' }"
                            class="h-1.5 w-24 rounded-full transition-colors duration-500 lg:mx-auto"></div>
                    </div>

                    <!-- CEO-editable project description paragraphs -->
                    <div ref="descriptionCopy" :class="isDarkMode ? 'text-neutral-300' : 'text-slate-700'"
                        class="desc-copy max-w-4xl space-y-6 text-lg sm:text-xl xl:text-2xl leading-relaxed transition-colors duration-500 lg:mx-auto lg:text-center">
                        <p v-for="(para, idx) in projectDescription" :key="idx">{{ para }}</p>
                    </div>
                </div>
            </section>

            <!-- ================= 4. TECH STACK ================= -->
            <section :class="[
                'py-24 px-6 relative z-20',
                isDarkMode ? 'bg-black' : 'bg-white'
            ]">
                <div class="tech-max-w mx-auto">
                    <div class="tech-header">
                        <span :class="['tech-eyebrow', isDarkMode ? 'text-emerald-400' : 'text-orange-600']">
                            Technology
                        </span>
                        <h2 :class="['tech-heading', isDarkMode ? 'text-white' : 'text-black']">
                            The right stack for the problem
                        </h2>
                        <p :class="['tech-paragraph', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
                            Modern, proven commerce tools chosen for performance and long-term maintainability.
                        </p>
                    </div>

                    <div class="tech-grid">
                        <div v-for="tech in techStack" :key="tech.name"
                            :class="['tech-card', isDarkMode ? 'tech-card-dark' : 'tech-card-light']">
                            <div class="tech-icon-wrapper">
                                <svg v-if="tech.isSvg" class="tech-logo" viewBox="0 0 100 100" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <rect x="10" y="10" width="36" height="36" rx="4" fill="#0073C8" />
                                    <rect x="54" y="10" width="36" height="36" rx="4" fill="#0073C8" />
                                    <rect x="10" y="54" width="36" height="36" rx="4" fill="#0073C8" />
                                    <rect x="54" y="54" width="36" height="36" rx="4" fill="#0073C8" />
                                    <circle cx="72" cy="28" r="10" fill="#ffffff" />
                                    <path d="M22 62L34 82H22V62Z" fill="#ffffff" />
                                </svg>
                                <img v-else :src="tech.logo" :alt="`${tech.name} logo`" class="tech-logo" />
                            </div>
                            <span :class="['tech-name', isDarkMode ? 'text-neutral-200' : 'text-neutral-800']">
                                {{ tech.name }}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ================= 5. CTA ================= -->
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

// Hero refs
const heroLabel = ref(null)
const heroSubtitle = ref(null)
const heroButtons = ref(null)
const spotlight = ref(null)
const cartFab = ref(null)
const cartCount = ref(0)

// Description refs
const descriptionCopy = ref(null)

// Carousel refs/state
const carouselViewport = ref(null)
const currentSlide = ref(0)
let autoplayInterval = null
const AUTOPLAY_MS = 4500

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

// Bumps the floating cart count and gives the fab a little "landed" punch
const bumpCart = () => {
    cartCount.value += 1
    if (cartFab.value) {
        gsap.fromTo(
            cartFab.value,
            { scale: 1 },
            { scale: 1.18, duration: 0.15, ease: 'power2.out', yoyo: true, repeat: 1 }
        )
    }
}

const heroBullets = [
    'Fast, mobile-first catalogs',
    'Frictionless checkout',
    'Secure payment integration',
    'Real-time inventory sync',
    'Platform migrations done right',
    'Built to scale with demand'
]

// ---- Hero mockup data ----
// Everything the browser-window preview shows lives here. Edit these values
// (or swap them for live/API data later) to change what renders — no markup changes needed.
// Photos are sourced from Unsplash (free to use under the Unsplash License).
const mockupProducts = ref([
    { id: 1, name: 'Tempered Glass Panel', price: '$68', image: 'https://images.unsplash.com/photo-1542060732-11e48a4ae2e7?auto=format&fit=crop&w=400&q=70' },
    { id: 2, name: 'Frosted Glass Pane', price: '$54', image: 'https://images.unsplash.com/photo-1568438350562-2cae6d394ad0?auto=format&fit=crop&w=400&q=70' },
    { id: 3, name: 'Insulated Glass Unit', price: '$142', image: 'https://images.unsplash.com/photo-1534185559297-e4f1dde00c75?auto=format&fit=crop&w=400&q=70' },
    { id: 4, name: 'Custom Facade Glass', price: '$189', image: 'https://images.unsplash.com/photo-1758951995614-1a223f1512e4?auto=format&fit=crop&w=400&q=70' }
])

// ---- Carousel images ----
// Swap these for the real project screenshots, e.g. ../assets/EcommerceProject1/img1.jpg
const getProjectImage = (fileName) => {
    return new URL(`../assets/EcommerceProject1/${fileName}`, import.meta.url).href
}

const projectSlides = ref([
    { id: 1, image: getProjectImage('img1.jpg'), caption: 'Homepage & featured collections' },
    { id: 2, image: getProjectImage('img2.jpeg'), caption: 'Category browsing & filters' },
    { id: 3, image: getProjectImage('img3.jpeg'), caption: 'Product detail page' },
    { id: 4, image: getProjectImage('img4.jpg'), caption: 'Cart & checkout' },
    { id: 5, image: getProjectImage('img5.jpeg'), caption: 'Order confirmation' }
])

const startAutoplay = () => {
    stopAutoplay()
    autoplayInterval = setInterval(() => {
        currentSlide.value = (currentSlide.value + 1) % projectSlides.value.length
    }, AUTOPLAY_MS)
}

const stopAutoplay = () => {
    if (autoplayInterval) {
        clearInterval(autoplayInterval)
        autoplayInterval = null
    }
}

const pauseAutoplay = () => stopAutoplay()
const resumeAutoplay = () => startAutoplay()

const nextSlide = () => {
    currentSlide.value = (currentSlide.value + 1) % projectSlides.value.length
    startAutoplay()
}

const prevSlide = () => {
    currentSlide.value = (currentSlide.value - 1 + projectSlides.value.length) % projectSlides.value.length
    startAutoplay()
}

const goToSlide = (idx) => {
    currentSlide.value = idx
    startAutoplay()
}

// Tech Stack data — commerce platforms first
const techStack = [
    { name: 'Shopify', logo: 'https://cdn.simpleicons.org/shopify/7AB55C' },
    { name: 'Magento', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/magento/magento-original.svg' },
    { name: 'NetSuite', isSvg: true },
    { name: 'WordPress', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Vue.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg' },
]

// CEO-facing project description — edit these paragraphs with the real project story
const projectDescription = [
    'Shoppers land on a fast, mobile-first storefront and move straight from browsing to checkout without friction. Product discovery is built around clear filtering and search, so finding the right item takes seconds, not scrolling.',
    'Every product page is designed to answer buying questions before they\'re asked — pricing, stock status, and shipping details are visible at a glance, with a checkout flow trimmed down to four simple steps.',
    'Behind the scenes, an admin dashboard keeps inventory, orders, and fulfillment in sync in real time, so the store stays accurate whether traffic is light or it\'s the busiest day of the year.'
]

onMounted(() => {
    // Read the universal site theme preference set from any page. Defaults to dark.
    const savedTheme = localStorage.getItem('webhive-theme')
    isDarkMode.value = savedTheme ? savedTheme === 'dark' : true
    applyGlobalThemeClass(isDarkMode.value)

    // Carousel autoplay
    startAutoplay()

    // Hero entrance animation
    const heroTl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } })
    heroTl.fromTo(heroLabel.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0, delay: 0.2 })
        .fromTo(heroSubtitle.value.children, { opacity: 0, x: 20 }, { opacity: 1, x: 0, stagger: 0.08 }, '-=0.9')
        .fromTo(heroButtons.value, { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, '-=0.7')
        .fromTo(spotlight.value, { opacity: 0, y: 24, scale: 0.96 }, { opacity: 1, y: 0, scale: 1 }, '-=0.8')

    // Carousel entrance
    if (carouselViewport.value) {
        gsap.fromTo(
            carouselViewport.value,
            { opacity: 0, y: 20 },
            {
                opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: carouselViewport.value, start: 'top 85%' }
            }
        )
    }

    // Description paragraphs
    if (descriptionCopy.value) {
        gsap.fromTo(
            descriptionCopy.value.children,
            { opacity: 0, y: 35 },
            {
                opacity: 1,
                y: 0,
                duration: 0.7,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: { trigger: descriptionCopy.value, start: 'top 80%' }
            }
        )
    }
})

onUnmounted(() => {
    stopAutoplay()
    ScrollTrigger.getAll().forEach((t) => t.kill())
})
</script>

<style scoped>
/* Accent theme variables (used throughout the page) */
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

.max-w-7xl {
    max-width: clamp(320px, 94vw, 1500px) !important;
}

/* Brand title — "Replacement" in the page's base text color, "Glass" in the
   accent color with a soft glow to match the badge/button treatment above it. */
.brand-hero-title {
    letter-spacing: -0.02em;
}

.brand-hero-accent {
    color: var(--accent-color);
    text-shadow: 0 0 28px var(--accent-shadow-hover);
}

/* Solid hero background — matches the site's theme exactly. */
.hero-bg-solid-dark {
    background-color: #000000;
}

.hero-bg-solid-light {
    background-color: #ffffff;
}

@media (min-width: 1920px) {
    .max-w-7xl {
        max-width: 1820px !important;
    }

    .benefit-text {
        font-size: 1.5rem;
    }
}

@media (min-width: 2560px) {
    .max-w-7xl {
        max-width: 2350px !important;
    }

    .benefit-text {
        font-size: 1.6rem;
    }

    .desc-copy {
        font-size: 1.65rem;
        max-width: 1400px !important;
    }
}

/* ==========================================================================
   Browser Mockup — the hero signature element (live storefront preview
   with floating stat cards). Swap the data in `mockupProducts`,
   `latestOrder`, `revenueToday` and `revenueBars` in the script to update
   what's shown — no markup changes required.
   ========================================================================== */
.browser-mockup {
    position: relative;
    width: 100%;
    max-width: 320px;
    border-radius: 16px;
    overflow: visible;
    border: 1px solid;
}

.browser-mock-dark {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01));
    border-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45), 0 0 60px var(--accent-shadow);
}

.browser-mock-light {
    background: #ffffff;
    border-color: rgba(15, 23, 42, 0.08);
    box-shadow: 0 30px 60px rgba(15, 23, 42, 0.12);
}

/* -- browser chrome bar -- */
.browser-chrome {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.theme-light .browser-chrome {
    border-bottom-color: rgba(15, 23, 42, 0.08);
}

.chrome-dots {
    display: flex;
    gap: 5px;
    flex-shrink: 0;
}

.chrome-dots span {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.18);
}

.theme-light .chrome-dots span {
    background: rgba(15, 23, 42, 0.14);
}

.chrome-url {
    display: flex;
    align-items: center;
    gap: 6px;
    flex: 1;
    min-width: 0;
    padding: 5px 10px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.05);
    font-size: 0.62rem;
    font-weight: 600;
    opacity: 0.65;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.theme-light .chrome-url {
    background: rgba(15, 23, 42, 0.04);
}

.chrome-url svg {
    width: 11px;
    height: 11px;
    flex-shrink: 0;
}

/* -- store preview body -- */
.store-body {
    padding: 12px;
}

.store-banner {
    position: relative;
    border-radius: 10px;
    padding: 10px 12px;
    margin-bottom: 10px;
    overflow: hidden;
    background: radial-gradient(circle at 20% 20%, var(--accent-gradient-fade), transparent 60%),
        linear-gradient(135deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.01));
    border: 1px solid rgba(255, 255, 255, 0.08);
}

.theme-light .store-banner {
    background: radial-gradient(circle at 20% 20%, var(--accent-gradient-fade), transparent 60%),
        linear-gradient(135deg, rgba(15, 23, 42, 0.04), rgba(15, 23, 42, 0.01));
    border-color: rgba(15, 23, 42, 0.06);
}

.store-banner-badge {
    display: inline-block;
    font-size: 0.62rem;
    font-weight: 800;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--accent-color);
    background: var(--accent-bg-light);
    border: 1px solid var(--accent-border);
    padding: 3px 8px;
    border-radius: 999px;
    margin-bottom: 8px;
}

.store-banner-title {
    font-size: 0.9rem;
    font-weight: 800;
    letter-spacing: -0.01em;
}

.store-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
}

.store-card {
    border-radius: 10px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.06);
    background: rgba(255, 255, 255, 0.02);
}

.theme-light .store-card {
    border-color: rgba(15, 23, 42, 0.06);
    background: #fafafa;
}

.store-card-thumb {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 0.62;
    background-size: cover;
    background-position: center;
}

.store-card-thumb-shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 55%, rgba(0, 0, 0, 0.4) 100%);
}

.store-card-add {
    position: absolute;
    bottom: 6px;
    right: 6px;
    width: 22px;
    height: 22px;
    border-radius: 999px;
    border: none;
    background: rgba(0, 0, 0, 0.55);
    color: #fff;
    font-weight: 700;
    font-size: 0.85rem;
    line-height: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    backdrop-filter: blur(4px);
    transition: background-color 0.2s ease, transform 0.2s ease;
}

.store-card-add:hover {
    background: var(--accent-color);
    color: #000;
    transform: scale(1.08);
}

.store-card-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 7px 9px;
    gap: 6px;
}

.store-card-name {
    font-size: 0.72rem;
    font-weight: 600;
    opacity: 0.85;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.store-card-price {
    font-size: 0.72rem;
    font-weight: 800;
    color: var(--accent-color);
    flex-shrink: 0;
}

/* -- cart fab (unchanged mechanic, restyled position) -- */
.cart-fab {
    position: absolute;
    bottom: -16px;
    right: 24px;
    width: 46px;
    height: 46px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent-color);
    color: #000;
    box-shadow: 0 10px 30px var(--accent-shadow-hover);
    z-index: 4;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.cart-fab:hover {
    transform: scale(1.06);
}

.cart-fab svg {
    width: 19px;
    height: 19px;
}

.cart-count {
    position: absolute;
    top: -4px;
    right: -4px;
    min-width: 18px;
    height: 18px;
    padding: 0 4px;
    border-radius: 999px;
    background: #000;
    color: var(--accent-color);
    font-size: 0.65rem;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--accent-color);
}

.theme-light .cart-count {
    background: #fff;
}

/* ==========================================================================
   Carousel — full-bleed, autoplay + arrows + dots
   ========================================================================== */
.carousel-section {
    overflow: hidden;
}

.carousel-viewport {
    width: 100%;
}

.carousel-inner {
    position: relative;
    width: 100%;
    height: 380px;
    max-height: 600px;
    overflow: hidden;
    border-radius: 16px;
}

.carousel-track {
    display: flex;
    width: 100%;
    height: 100%;
    transition: transform 0.6s cubic-bezier(0.65, 0, 0.35, 1);
}

.carousel-slide {
    position: relative;
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
}

.carousel-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.carousel-caption {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 18px 24px 20px;
    font-size: 0.95rem;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.65), transparent);
}

.carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 44px;
    height: 44px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    cursor: pointer;
    transition: background-color 0.2s ease, transform 0.2s ease;
    z-index: 2;
}

.carousel-arrow:hover {
    background: var(--accent-color);
    color: #000;
    border-color: var(--accent-color);
}

.carousel-arrow svg {
    width: 20px;
    height: 20px;
}

.carousel-arrow-left {
    left: 16px;
}

.carousel-arrow-right {
    right: 16px;
}

.carousel-dots {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 8px;
    z-index: 2;
}

.carousel-dot {
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.4);
    border: none;
    cursor: pointer;
    transition: background-color 0.2s ease, width 0.2s ease;
}

.carousel-dot-active {
    background: var(--accent-color);
    width: 22px;
    border-radius: 999px;
}

@media (min-width: 768px) {
    .carousel-inner {
        height: 460px;
    }
}

@media (min-width: 1024px) {
    .carousel-inner {
        height: 540px;
    }
}

@media (min-width: 1280px) {
    .carousel-inner {
        height: 600px;
    }
}

/* ==========================================================================
   Tech Stack Section (unchanged from source)
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

.tech-max-w {
    max-width: clamp(320px, 94vw, 1600px);
}

.tech-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 14px;
    max-width: 100%;
    margin: 0 auto;
}

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

@media (min-width: 1201px) {
    .tech-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 22px;
    }

    .tech-header {
        margin-bottom: 56px;
    }
}

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