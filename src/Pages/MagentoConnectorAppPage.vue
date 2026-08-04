<template>
    <div :class="[
        isDarkMode ? 'bg-black text-white' : 'bg-slate-50 text-slate-900',
        'min-h-screen w-full transition-colors duration-500 overflow-x-hidden font-sans mt-[2%] sm:mt-0'
    ]">
        <!-- Header Component (theme is handled globally via inject/provide) -->
        <Header />

        <main class="w-full">
            <!-- Hero Showcase Section -->
            <section
                class="hero-shell w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24 flex items-center relative z-20">
                <div
                    class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-14 lg:gap-16 xl:gap-20 2xl:gap-24 items-center w-full">
                    <!-- Phone Frame & Carousel -->
                    <div class="flex justify-center w-full">
                        <div :class="[
                            isDarkMode
                                ? 'shadow-[0_0_50px_rgba(0,255,163,0.15)]'
                                : 'shadow-[0_15px_40px_rgba(249,115,22,0.15)]',
                            'phone-frame border-[6px] border-neutral-900 bg-black ring-1 ring-neutral-800 rounded-[44px] p-2 relative overflow-hidden will-change-transform transform-gpu transition-colors duration-500'
                        ]">
                            <div
                                class="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full z-30 bg-neutral-900 transition-colors duration-500">
                            </div>

                            <div
                                class="w-full h-full rounded-[34px] overflow-hidden relative bg-white pt-20 pb-20 isolate">
                                <div v-for="(slide, sIdx) in carouselSlides" :key="slide.id"
                                    class="absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out"
                                    :class="currentSlide === sIdx ? 'opacity-100' : 'opacity-0'">
                                    <img :src="slide.image" :alt="`Screen ${slide.id}`"
                                        class="w-full h-full object-contain" loading="lazy" decoding="async" />
                                </div>
                            </div>

                            <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-40">
                                <button v-for="(_, sIdx) in carouselSlides" :key="sIdx" @click="goToSlide(sIdx)"
                                    class="h-1.5 rounded-full transition-all duration-300 ease-out focus:outline-none"
                                    :class="[
                                        currentSlide === sIdx
                                            ? isDarkMode ? 'bg-[#00ffa3] w-3' : 'bg-orange-500 w-3'
                                            : isDarkMode ? 'bg-neutral-500 w-1.5' : 'bg-slate-400 w-1.5'
                                    ]" :aria-label="`Show screen ${sIdx + 1}`"></button>
                            </div>
                        </div>
                    </div>

                    <!-- Feature Details -->
                    <div class="space-y-6 sm:space-y-8 w-full">
                        <h1
                            class="section-heading text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight transition-colors duration-500">
                            Magento Connector <br />
                            <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-orange-500'"
                                class="transition-colors duration-500">
                                App Features
                            </span>
                        </h1>

                        <ul ref="whyList" class="benefits-list grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 xl:gap-5">
                            <li v-for="(benefit, idx) in appBenefits" :key="idx" class="flex items-start gap-3 p-2">
                                <span :class="[
                                    isDarkMode
                                        ? 'bg-[#00ffa3]/10 border-[#00ffa3]/20 text-[#00ffa3]'
                                        : 'bg-orange-500/10 border-orange-500/20 text-orange-500',
                                    'flex-shrink-0 w-5 h-5 xl:w-6 xl:h-6 rounded-full border flex items-center justify-center mt-1 transition-colors duration-500'
                                ]">
                                    <svg class="w-3 h-3 xl:w-3.5 xl:h-3.5" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="3">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                <span :class="isDarkMode ? 'text-neutral-300' : 'text-slate-900'"
                                    class="benefit-text font-medium text-sm md:text-base xl:text-lg 2xl:text-xl transition-colors duration-500">
                                    {{ benefit }}
                                </span>
                            </li>
                        </ul>

                        <router-link to="/consultation" :class="[
                            isDarkMode
                                ? 'bg-[#00ffa3] text-black hover:bg-[#00e691]'
                                : 'bg-orange-500 text-white hover:bg-orange-500 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40',
                            'cta-button inline-block px-6 py-3 sm:px-7 sm:py-3.5 xl:px-8 xl:py-4 2xl:px-9 2xl:py-4.5 text-sm sm:text-base xl:text-lg font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-0.5'
                        ]">
                            Get a Quote
                        </router-link>
                    </div>
                </div>
            </section>

            <!-- Dealer & Order Management Experience Section -->
            <section class="w-full py-16 sm:py-20 lg:py-24 px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 2xl:px-24">
                <div class="max-w-7xl mx-auto space-y-10">
                    <!-- Section Title -->
                    <div class="max-w-3xl space-y-4 text-left lg:max-w-none lg:mx-auto lg:text-center">
                        <h2
                            class="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight transition-colors duration-500 lg:whitespace-nowrap">
                            A Seamless Magento <br class="lg:hidden" />
                            <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-orange-500'"
                                class="transition-colors duration-500">
                                Management Experience
                            </span>
                        </h2>
                        <div :class="isDarkMode ? 'bg-[#00ffa3]' : 'bg-orange-500'"
                            class="h-1.5 w-24 rounded-full transition-colors duration-500 lg:mx-auto"></div>
                    </div>

                    <!-- Paragraphs describing the connector's capabilities -->
                    <div ref="cardsGrid" :class="isDarkMode ? 'text-neutral-300' : 'text-slate-700'"
                        class="feature-copy max-w-4xl space-y-6 text-base sm:text-lg leading-relaxed transition-colors duration-500 lg:mx-auto lg:text-center">
                        <p>
                            The app gives dealers a dedicated space to manage their Magento accounts on the go, with
                            registered dealer profiles organized clearly so store owners can track who is active, review
                            dealer details, and keep the network under control without needing a desktop.
                        </p>
                        <p>
                            Every order comes with detailed, easy-to-read information — items, quantities, pricing, and
                            status — pulled directly from the Magento store. This keeps dealers and administrators
                            aligned on exactly what has been ordered and where it stands.
                        </p>
                        <p>
                            A dedicated orders dashboard brings everything together in one place, giving a quick,
                            at-a-glance view of recent activity and order volume. It's built for speed, so checking on
                            the state of the business takes seconds, not minutes.
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
                        user experiences tailored to your audience.
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
const whyList = ref(null)
const cardsGrid = ref(null)
const currentSlide = ref(0)
let slideInterval = null

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
// Uses the same 'webhive-theme' localStorage key as Home.vue, so a theme choice
// made on any page carries over to every other page/route across the site.
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

const getMagentoConnectorImage = (fileName) => {
    return new URL(`../assets/MagentoConnector/${fileName}`, import.meta.url).href
}

const carouselSlides = ref([
    { id: 1, image: getMagentoConnectorImage('screen1.jpg') },
    { id: 2, image: getMagentoConnectorImage('screen2.jpg') },
    { id: 3, image: getMagentoConnectorImage('screen3.jpg') },
    { id: 4, image: getMagentoConnectorImage('screen4.jpg') }
])

const appBenefits = [
    'Registered Dealers Management',
    'Detailed Order Information',
    'Orders Dashboard'
]

function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % carouselSlides.value.length
}

function goToSlide(idx) {
    currentSlide.value = idx
    restartAutoplay()
}

function restartAutoplay() {
    clearInterval(slideInterval)
    slideInterval = setInterval(nextSlide, 4000)
}

onMounted(() => {
    // Read the universal site theme preference set from any page. Defaults to dark.
    const savedTheme = localStorage.getItem('webhive-theme')
    isDarkMode.value = savedTheme ? savedTheme === 'dark' : true
    applyGlobalThemeClass(isDarkMode.value)

    restartAutoplay()

    // Benefits List Animation
    if (whyList.value) {
        gsap.fromTo(
            whyList.value.children,
            { opacity: 0, x: 25 },
            {
                opacity: 1,
                x: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power2.out',
                scrollTrigger: { trigger: whyList.value, start: 'top 85%' }
            }
        )
    }

    // Paragraph Entrance Animation
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
    clearInterval(slideInterval)
})
</script>

<style scoped>
.isolate {
    isolation: isolate;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
}

/* Outer layout max-width fluid container */
.max-w-7xl {
    max-width: clamp(320px, 94vw, 1500px) !important;
}

/* Phone mockup container sizing — mirrors BookLibraryApp.vue exactly */
.phone-frame {
    width: 236px;
    height: 460px;
}

/* Breakpoint rules up to 2560px */
@media (min-width: 640px) {
    .phone-frame {
        width: 258px;
        height: 497px;
    }
}

@media (min-width: 1024px) {
    .phone-frame {
        width: 276px;
        height: 534px;
    }
}

@media (min-width: 1280px) {
    .phone-frame {
        width: 294px;
        height: 570px;
    }
}

@media (min-width: 1920px) {
    .max-w-7xl {
        max-width: 1820px !important;
    }

    .section-heading {
        font-size: 4.75rem;
    }

    .benefit-text {
        font-size: 1.3rem;
    }

    .cta-button {
        font-size: 1.15rem;
        padding: 1.1rem 2.25rem;
    }
}

/* 4K / 2560px Screen Scaling */
@media (min-width: 2560px) {
    .max-w-7xl {
        max-width: 2350px !important;
    }

    .phone-frame {
        width: 380px;
        height: 740px;
    }

    .section-heading {
        font-size: 5.25rem;
    }

    .benefit-text {
        font-size: 1.4rem;
    }

    .cta-button {
        font-size: 1.25rem;
        padding: 1.2rem 2.5rem;
    }
}
</style>