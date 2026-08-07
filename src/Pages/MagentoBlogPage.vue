<template>
    <div ref="pageContainer" :class="[
        'font-sans relative overflow-hidden w-full max-w-full',
        isDarkMode
            ? 'bg-[#000000] text-[#ffffff] theme-dark selection:bg-[#00ffa3] selection:text-[#000000]'
            : 'bg-white text-[#0f172a] theme-light selection:bg-[#f97316] selection:text-[#000000]'
    ]">

        <Header />

        <div ref="mouseGlow"
            class="pointer-events-none fixed inset-0 z-10 opacity-30 transition-opacity duration-300 will-change-transform"
            :style="{ background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, ${glowColor}, transparent 80%)` }">
        </div>

        <!-- ============================================================ -->
        <!-- BLOG POST: Magento — E-commerce Without the Ceiling           -->
        <!-- ============================================================ -->
        <main class="relative z-0 w-full max-w-full">

            <!-- ---------------- HERO ---------------- -->
            <section class="relative w-full max-w-full overflow-hidden border-b"
                :class="isDarkMode ? 'border-white/10' : 'border-black/10'">

                <div class="absolute inset-0 -z-10">
                    <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2560&q=80"
                        alt="Developer working on a large-scale online store build"
                        class="h-full w-full object-cover opacity-[0.16]" loading="eager" />
                    <div class="absolute inset-0" :class="isDarkMode
                        ? 'bg-gradient-to-b from-black via-black/95 to-black'
                        : 'bg-gradient-to-b from-white via-white/95 to-white'">
                    </div>
                </div>

                <div
                    class="blog-container pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-44 lg:pb-28 xl:pt-52 xl:pb-32 4k:pt-64 4k:pb-40">

                    <!-- store-mark: original mark + wordmark, monochrome via currentColor
                         so it reads correctly on both themes with zero background -->
                    <div data-reveal class="mb-8 sm:mb-10 4k:mb-14 flex items-center gap-3 sm:gap-3.5 4k:gap-5"
                        :class="isDarkMode ? 'text-white' : 'text-black'">
                        <svg viewBox="0 0 48 48" class="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 4k:h-16 4k:w-16"
                            fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M24 4 42 15v18L24 44 6 33V15Z" stroke="currentColor" stroke-width="2.4"
                                stroke-linejoin="round" />
                            <path d="M24 4v17L6 15" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" />
                            <path d="M24 21v17" stroke="currentColor" stroke-width="2.4" stroke-linejoin="round" />
                            <path d="M42 15 24 26 6 15" stroke="currentColor" stroke-width="2.4"
                                stroke-linejoin="round" />
                        </svg>
                        <span
                            class="font-['Syne',_sans-serif] font-bold text-lg sm:text-xl md:text-2xl 4k:text-4xl tracking-tight">Magento</span>
                    </div>

                    <div data-reveal
                        class="mb-5 flex items-center gap-3 font-mono text-[11px] sm:text-xs md:text-sm tracking-[0.25em] uppercase 4k:text-lg">
                        <span class="h-px w-8 sm:w-10 4k:w-16"
                            :class="isDarkMode ? 'bg-[#00ffa3]' : 'bg-[#f97316]'"></span>
                        <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">E-commerce &middot; Open
                            Source &middot; Enterprise Retail</span>
                    </div>

                    <h1 data-reveal
                        class="font-['Syne',_sans-serif] font-bold leading-[1.02] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[6.5rem] 4k:text-[9rem] max-w-5xl 4k:max-w-[90rem]">
                        E-commerce
                        <span class="block" :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Without the
                            Ceiling</span>
                    </h1>

                    <p data-reveal
                        class="mt-6 sm:mt-8 max-w-2xl 4k:max-w-4xl text-base sm:text-lg md:text-xl xl:text-2xl 4k:text-4xl leading-relaxed"
                        :class="isDarkMode ? 'text-white/70' : 'text-black/70'">
                        Why Magento is still the platform serious retailers reach for once a store outgrows
                        templates, how its architecture actually works under the hood, and the real process
                        behind building and running a Magento storefront in production.
                    </p>

                    <div data-reveal
                        class="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs sm:text-sm 4k:text-xl"
                        :class="isDarkMode ? 'text-white/50' : 'text-black/50'">
                        <span>WebHive Technologies</span>
                        <span class="h-1 w-1 rounded-full" :class="isDarkMode ? 'bg-white/30' : 'bg-black/30'"></span>
                        <span>E-commerce Development</span>
                        <span class="h-1 w-1 rounded-full" :class="isDarkMode ? 'bg-white/30' : 'bg-black/30'"></span>
                        <span>15 min read</span>
                    </div>
                </div>
            </section>

            <!-- ---------------- INTRO / WHY MAGENTO ---------------- -->
            <section class="w-full max-w-full" :class="isDarkMode ? 'bg-[#242424]' : 'bg-[#F5F5F5]'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 4k:gap-20">
                        <div class="lg:col-span-4 4k:col-span-4">
                            <p data-reveal class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] 4k:text-lg"
                                :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Why Magento</p>
                        </div>
                        <div class="lg:col-span-8 4k:col-span-8 space-y-5 sm:space-y-6 4k:space-y-8">
                            <p data-reveal
                                class="text-lg sm:text-xl md:text-2xl xl:text-3xl 4k:text-5xl leading-relaxed font-['Syne',_sans-serif] font-medium">
                                Magento exists for the stores that hit a wall on template-based platforms &mdash;
                                complex catalogs, custom pricing logic, and checkout flows nobody else offers out
                                of the box.
                            </p>
                            <p data-reveal
                                class="text-sm sm:text-base md:text-lg xl:text-xl 4k:text-3xl leading-relaxed 4k:leading-[1.7]"
                                :class="isDarkMode ? 'text-white/70' : 'text-black/70'">
                                Where hosted platforms trade flexibility for simplicity, Magento (now Adobe
                                Commerce at the enterprise tier) hands developers the source code itself. Catalogs
                                with tens of thousands of SKUs, tiered B2B pricing, multi-store setups running
                                several brands or regions from one install, and checkout logic built around a
                                specific business model are all things Magento is built to handle natively, not
                                bolt on through a third-party app.
                            </p>
                            <p data-reveal
                                class="text-sm sm:text-base md:text-lg xl:text-xl 4k:text-3xl leading-relaxed 4k:leading-[1.7]"
                                :class="isDarkMode ? 'text-white/70' : 'text-black/70'">
                                That power comes with real weight: Magento is self-hosted (or run on Adobe Commerce
                                Cloud), requires proper server infrastructure, and rewards a team that actually
                                knows the platform. It's the deliberate trade-off retailers make once "customize
                                what we have" beats "pick from what's offered."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ---------------- SIGNATURE: ARCHITECTURE DIAGRAM ---------------- -->
            <section class="w-full max-w-full">
                <div class="blog-container py-10 sm:py-12 md:py-16 4k:py-24">
                    <div data-reveal class="rounded-2xl border p-5 sm:p-8 md:p-10 lg:p-14 4k:p-20 4k:rounded-[2rem]"
                        :class="isDarkMode ? 'border-white/10 bg-white/[0.03]' : 'border-black/10 bg-black/[0.02]'">
                        <p class="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6 sm:mb-8 4k:text-base 4k:mb-10"
                            :class="isDarkMode ? 'text-white/40' : 'text-black/40'">
                            How a request moves through Magento
                        </p>

                        <svg viewBox="0 0 900 220" class="w-full h-auto" preserveAspectRatio="xMidYMid meet" role="img"
                            aria-label="Diagram showing a request flowing from the storefront through the Magento application layer, database, and cache into the response">
                            <!-- connectors -->
                            <path d="M 120 110 H 340" class="sync-line" :class="lineClass" />
                            <path d="M 460 110 H 560" class="sync-line" :class="lineClass" />
                            <path d="M 680 110 H 780" class="sync-line" :class="lineClass" />

                            <!-- pulses -->
                            <circle r="4.5" :class="dotClass">
                                <animateMotion dur="2.6s" repeatCount="indefinite" path="M 120 110 H 340" />
                            </circle>
                            <circle r="4.5" :class="dotClass">
                                <animateMotion dur="1.6s" begin="0.4s" repeatCount="indefinite"
                                    path="M 460 110 H 560" />
                            </circle>
                            <circle r="4.5" :class="dotClass">
                                <animateMotion dur="2s" begin="0.8s" repeatCount="indefinite" path="M 680 110 H 780" />
                            </circle>

                            <!-- nodes -->
                            <g v-for="node in flowNodes" :key="node.label" :transform="`translate(${node.x},110)`">
                                <circle r="38" :class="isDarkMode ? 'fill-white/[0.06]' : 'fill-black/[0.04]'"
                                    :stroke="isDarkMode ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'"
                                    stroke-width="1" />
                                <circle r="4"
                                    :class="node.core ? (isDarkMode ? 'fill-[#00ffa3]' : 'fill-[#f97316]') : (isDarkMode ? 'fill-white/50' : 'fill-black/40')" />
                                <text y="66" text-anchor="middle" class="font-mono"
                                    :class="isDarkMode ? 'fill-white/70' : 'fill-black/70'" style="font-size:13px;">{{
                                    node.label }}</text>
                            </g>
                        </svg>

                        <p class="mt-6 sm:mt-8 text-xs sm:text-sm md:text-base 4k:text-2xl leading-relaxed max-w-3xl 4k:max-w-5xl"
                            :class="isDarkMode ? 'text-white/60' : 'text-black/60'">
                            A page request hits the storefront, Magento's PHP application layer resolves catalog,
                            pricing, and customer logic against MySQL, Varnish and Redis serve cached results back
                            instantly, and Elasticsearch handles the product search in between.
                        </p>
                    </div>
                </div>
            </section>

            <!-- ---------------- HOW MAGENTO WORKS ---------------- -->
            <section class="w-full max-w-full" :class="isDarkMode ? 'bg-[#242424]' : 'bg-[#F5F5F5]'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div data-reveal class="max-w-3xl 4k:max-w-5xl mb-10 sm:mb-12 md:mb-16 4k:mb-24">
                        <p class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 4k:text-lg"
                            :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">How it works</p>
                        <h2
                            class="font-['Syne',_sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 4k:text-7xl leading-tight">
                            The stack running underneath every page
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 4k:gap-10">
                        <article v-for="part in stackParts" :key="part.title" data-reveal
                            class="rounded-xl border p-5 sm:p-6 md:p-8 4k:p-12 4k:rounded-2xl transition-colors duration-300"
                            :class="isDarkMode
                                ? 'border-white/10 hover:border-[#00ffa3]/40'
                                : 'border-black/10 hover:border-[#f97316]/40'">
                            <p class="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-3 4k:text-base 4k:mb-5"
                                :class="isDarkMode ? 'text-white/40' : 'text-black/40'">{{ part.tag }}</p>
                            <h3
                                class="font-['Syne',_sans-serif] font-semibold text-lg sm:text-xl md:text-2xl 4k:text-4xl mb-3 4k:mb-5">
                                {{ part.title }}</h3>
                            <p class="text-sm sm:text-base 4k:text-2xl leading-relaxed"
                                :class="isDarkMode ? 'text-white/65' : 'text-black/65'">{{ part.body }}</p>
                        </article>
                    </div>
                </div>
            </section>

            <!-- ---------------- WORKING PROCESS ---------------- -->
            <section class="w-full max-w-full border-t"
                :class="isDarkMode ? 'border-white/10 bg-[#242424]' : 'border-black/10 bg-[#F5F5F5]'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div data-reveal class="max-w-3xl 4k:max-w-5xl mb-10 sm:mb-12 md:mb-16 4k:mb-24">
                        <p class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 4k:text-lg"
                            :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">The working process</p>
                        <h2
                            class="font-['Syne',_sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 4k:text-7xl leading-tight">
                            From requirements to a store on the shelf
                        </h2>
                        <p class="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg 4k:text-3xl leading-relaxed"
                            :class="isDarkMode ? 'text-white/65' : 'text-black/65'">
                            This is the sequence a Magento build actually runs in, from a blank server to a
                            storefront handling real traffic.
                        </p>
                    </div>

                    <div class="relative">
                        <div class="absolute left-[27px] sm:left-[31px] top-2 bottom-2 w-px hidden sm:block"
                            :class="isDarkMode ? 'bg-white/10' : 'bg-black/10'"></div>

                        <div class="space-y-8 sm:space-y-10 md:space-y-12 4k:space-y-16">
                            <div v-for="step in processSteps" :key="step.n" data-reveal
                                class="relative flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 4k:gap-12">
                                <div class="flex-none">
                                    <div class="flex h-14 w-14 sm:h-16 sm:w-16 4k:h-24 4k:w-24 items-center justify-center rounded-full border font-mono text-sm sm:text-base 4k:text-2xl relative z-10"
                                        :class="isDarkMode
                                            ? 'border-[#00ffa3]/40 bg-black text-[#00ffa3]'
                                            : 'border-[#f97316]/40 bg-white text-[#f97316]'">
                                        {{ step.n }}
                                    </div>
                                </div>
                                <div class="pb-1">
                                    <h3
                                        class="font-['Syne',_sans-serif] font-semibold text-lg sm:text-xl md:text-2xl 4k:text-4xl mb-2 4k:mb-4">
                                        {{ step.title }}</h3>
                                    <p class="text-sm sm:text-base md:text-lg 4k:text-2xl leading-relaxed max-w-3xl 4k:max-w-5xl"
                                        :class="isDarkMode ? 'text-white/65' : 'text-black/65'">{{ step.body }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ---------------- BENEFITS ---------------- -->
            <section class="w-full max-w-full border-t" :class="isDarkMode ? 'border-white/10' : 'border-black/10'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div data-reveal class="max-w-3xl 4k:max-w-5xl mb-10 sm:mb-12 md:mb-16 4k:mb-24">
                        <p class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 4k:text-lg"
                            :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">The payoff</p>
                        <h2
                            class="font-['Syne',_sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 4k:text-7xl leading-tight">
                            What a Magento build actually earns you
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 4k:gap-10">
                        <article v-for="b in benefits" :key="b.title" data-reveal
                            class="rounded-xl p-5 sm:p-6 md:p-8 4k:p-12 4k:rounded-2xl"
                            :class="isDarkMode ? 'bg-white/[0.03]' : 'bg-black/[0.02]'">
                            <div class="mb-4 4k:mb-6 h-9 w-9 sm:h-10 sm:w-10 4k:h-16 4k:w-16 rounded-full flex items-center justify-center"
                                :class="isDarkMode ? 'bg-[#00ffa3]/10' : 'bg-[#f97316]/10'">
                                <span class="h-2 w-2 4k:h-3 4k:w-3 rounded-full"
                                    :class="isDarkMode ? 'bg-[#00ffa3]' : 'bg-[#f97316]'"></span>
                            </div>
                            <h3
                                class="font-['Syne',_sans-serif] font-semibold text-base sm:text-lg md:text-xl 4k:text-3xl mb-2 4k:mb-4">
                                {{ b.title }}</h3>
                            <p class="text-sm sm:text-base 4k:text-2xl leading-relaxed"
                                :class="isDarkMode ? 'text-white/65' : 'text-black/65'">{{ b.body }}</p>
                        </article>
                    </div>
                </div>
            </section>

            <!-- ---------------- CHALLENGES / BEST PRACTICES ---------------- -->
            <section class="w-full max-w-full border-t"
                :class="isDarkMode ? 'border-white/10 bg-[#242424]' : 'border-black/10 bg-[#F5F5F5]'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 4k:gap-20">
                        <div class="lg:col-span-4 4k:col-span-4">
                            <p data-reveal
                                class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 4k:text-lg"
                                :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Running it in production</p>
                            <h2 data-reveal
                                class="font-['Syne',_sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl 4k:text-6xl leading-tight">
                                Where Magento stores actually struggle, and the fix
                            </h2>
                        </div>

                        <div class="lg:col-span-8 4k:col-span-8 space-y-4 sm:space-y-5 4k:space-y-8">
                            <div v-for="item in practices" :key="item.title" data-reveal
                                class="rounded-xl border p-5 sm:p-6 md:p-7 4k:p-12 4k:rounded-2xl"
                                :class="isDarkMode ? 'border-white/10' : 'border-black/10'">
                                <div class="flex items-start justify-between gap-4 4k:gap-8 mb-2 4k:mb-4">
                                    <h3
                                        class="font-['Syne',_sans-serif] font-semibold text-base sm:text-lg md:text-xl 4k:text-3xl">
                                        {{ item.title }}</h3>
                                    <span
                                        class="flex-none font-mono text-[10px] sm:text-xs uppercase tracking-wider px-2 py-1 4k:text-base 4k:px-4 4k:py-2 rounded-full"
                                        :class="isDarkMode ? 'bg-[#00ffa3]/10 text-[#00ffa3]' : 'bg-[#f97316]/10 text-[#f97316]'">
                                        Fix</span>
                                </div>
                                <p class="text-sm sm:text-base 4k:text-2xl leading-relaxed"
                                    :class="isDarkMode ? 'text-white/65' : 'text-black/65'">{{ item.body }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ---------------- CLOSING / CTA ---------------- -->
            <section class="w-full max-w-full border-t" :class="isDarkMode ? 'border-white/10' : 'border-black/10'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div data-reveal class="max-w-3xl 4k:max-w-5xl">
                        <p
                            class="text-lg sm:text-xl md:text-2xl xl:text-3xl 4k:text-5xl leading-relaxed font-['Syne',_sans-serif] font-medium mb-8 sm:mb-10 4k:mb-16">
                            Magento rewards the stores willing to invest in it properly &mdash; a well-built
                            instance, tuned and cached correctly, out-converts and out-scales a templated store
                            every time traffic actually gets serious.
                        </p>
                        <button data-reveal @click="navigateToConsultation"
                            class="group inline-flex items-center gap-3 rounded-full px-6 py-3 sm:px-8 sm:py-4 4k:px-12 4k:py-6 font-mono text-xs sm:text-sm 4k:text-xl uppercase tracking-[0.15em] transition-transform duration-300 hover:-translate-y-0.5"
                            :class="isDarkMode ? 'bg-[#00ffa3] text-black' : 'bg-[#f97316] text-white'">
                            Plan your Magento build
                            <span class="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                        </button>
                    </div>
                </div>
            </section>

        </main>

        <div class="w-full max-w-full">
            <footer-component />
        </div>

    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, reactive, provide } from 'vue'
import { useRouter } from 'vue-router'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from '../components/Header.vue'
import FooterComponent from '../components/footer.vue'

gsap.registerPlugin(ScrollTrigger)

const router = useRouter()
const pageContainer = ref(null)
const mouseGlow = ref(null)

const mouse = reactive({ x: 0, y: 0 })
let rafId = null

// ── Theme state — matches ReplacementGlass.vue / AppDevelopment.vue exactly ──
const isDarkMode = ref(true)

// CHANGED: cursor-follow glow now tracks theme — vibrant orange in light mode, original green in dark mode
const glowColor = computed(() =>
    isDarkMode.value ? 'rgba(0, 255, 163, 0.15)' : 'rgba(249, 115, 22, 0.15)'
)

const applyGlobalThemeClass = (isDark) => {
    if (isDark) {
        document.documentElement.classList.add('theme-dark')
        document.documentElement.classList.remove('theme-light')
    } else {
        document.documentElement.classList.add('theme-light')
        document.documentElement.classList.remove('theme-dark')
    }
}

const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    const activeTheme = isDarkMode.value ? 'dark' : 'light'

    localStorage.setItem('webhive-theme', activeTheme)
    applyGlobalThemeClass(isDarkMode.value)
}

// Provide reactive state + toggle so Header.vue and all child section
// components can inject them, same pattern as ReplacementGlass.vue / AppDevelopment.vue
provide('isDarkMode', isDarkMode)
provide('toggleTheme', toggleTheme)

const navigateToConsultation = () => {
    router.push('/consultation')
}

const handleMouseMove = (e) => {
    if (!rafId) {
        rafId = requestAnimationFrame(() => {
            mouse.x = e.clientX
            mouse.y = e.clientY
            rafId = null
        })
    }
}

onMounted(() => {
    // Check the universal site theme preference. Defaults to dark. - Matching AppDevelopment.vue
    const savedTheme = localStorage.getItem('webhive-theme')
    if (savedTheme) {
        isDarkMode.value = savedTheme === 'dark'
    } else {
        isDarkMode.value = true
    }

    // Keep root context token up-to-date instantly
    applyGlobalThemeClass(isDarkMode.value)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
})

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    cancelAnimationFrame(rafId)
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

// ============================================================
// BLOG CONTENT DATA
// ============================================================
const flowNodes = [
    { label: 'Storefront', x: 80, core: false },
    { label: 'Magento App', x: 400, core: true },
    { label: 'MySQL / Search', x: 620, core: false },
    { label: 'Cache Layer', x: 820, core: false },
]

const lineClass = computed(() => (isDarkMode.value ? 'stroke-white/15' : 'stroke-black/15'))
const dotClass = computed(() => (isDarkMode.value ? 'fill-[#00ffa3]' : 'fill-[#f97316]'))

const stackParts = [
    {
        tag: 'Application',
        title: 'PHP application layer',
        body: 'Magento runs on PHP, organized into modules for catalog, checkout, customers, and pricing. Everything &mdash; from a custom shipping rule to a loyalty program &mdash; is built as a module on top of this core.',
    },
    {
        tag: 'Data',
        title: 'MySQL & Elasticsearch',
        body: 'Product, order, and customer data live in MySQL, while Elasticsearch powers fast, filterable product search and layered navigation across large catalogs.',
    },
    {
        tag: 'Performance',
        title: 'Varnish & Redis caching',
        body: 'Varnish caches full pages so repeat visits load almost instantly, while Redis handles session storage and object caching \u2014 both essential once traffic climbs.',
    },
    {
        tag: 'Front end',
        title: 'Themes & the storefront',
        body: 'The customer-facing layer is built from Magento themes and layout XML, either the traditional Luma-based front end or a headless storefront built on Magento\u2019s APIs.',
    },
]

const processSteps = [
    { n: '01', title: 'Requirements & platform planning', body: 'Scope the catalog complexity, B2B or multi-store needs, and decide between open-source Magento and Adobe Commerce based on what the business actually requires.' },
    { n: '02', title: 'Infrastructure & environment setup', body: 'Provision hosting with the right PHP, MySQL, Elasticsearch, Varnish, and Redis versions, and stand up separate development, staging, and production environments.' },
    { n: '03', title: 'Theme & UI development', body: 'Build or customize the storefront theme, defining layouts, page builder content, and responsive behavior across devices.' },
    { n: '04', title: 'Catalog & pricing configuration', body: 'Structure categories, attributes, and configurable products, and set up tiered, customer-group, or B2B-specific pricing rules.' },
    { n: '05', title: 'Custom module development', body: 'Write custom modules for business logic the platform doesn\u2019t offer natively \u2014 unique checkout steps, custom shipping calculators, or ERP integrations.' },
    { n: '06', title: 'Third-party & payment integrations', body: 'Connect payment gateways, tax services, ERP or WMS systems, and marketing tools through Magento\u2019s API and extension ecosystem.' },
    { n: '07', title: 'Performance tuning & QA', body: 'Configure full-page caching, indexers, and CDN delivery, then load-test the store against expected peak traffic before launch.' },
    { n: '08', title: 'Launch & ongoing maintenance', body: 'Go live, then keep security patches, extension updates, and performance monitoring current \u2014 Magento rewards regular maintenance and punishes neglect.' },
]

const benefits = [
    { title: 'Full control over the platform', body: 'Direct access to the source code means no feature is ever blocked by what a hosted platform decided to allow.' },
    { title: 'Handles serious catalog complexity', body: 'Configurable products, bundles, and tiered attributes manage large, complicated catalogs that templated platforms strain under.' },
    { title: 'Built-in multi-store management', body: 'Run several brands, regions, or currencies from a single Magento install and shared back office.' },
    { title: 'Real B2B capability', body: 'Company accounts, quote workflows, and negotiated pricing are native features, not bolted-on apps.' },
    { title: 'Scales to enterprise traffic', body: 'Proper caching and infrastructure let Magento handle high-volume flash sales and seasonal spikes without buckling.' },
    { title: 'No licensing lock-in on core', body: 'The open-source edition carries no platform licensing fee, and the codebase stays fully owned by the business.' },
]

const practices = [
    { title: 'Skipping proper caching', body: 'A Magento store without Varnish and Redis configured correctly will feel slow no matter how good the hosting is. Cache configuration isn\u2019t optional at production scale.' },
    { title: 'Extension conflicts', body: 'Installing too many third-party extensions without checking compatibility causes conflicts and slows checkout. Audit and test every extension in staging first.' },
    { title: 'Falling behind on security patches', body: 'Magento is a frequent target for exploits specifically because unpatched stores are common. Apply security patches on a fixed schedule, not "when there\u2019s time."' },
    { title: 'Ignoring reindexing', body: 'Catalog and pricing changes don\u2019t reflect on the storefront until indexers run. Schedule reindexing properly rather than leaving it on manual and forgetting it.' },
    { title: 'Underestimating hosting needs', body: 'Magento is resource-heavy compared to hosted platforms. Budget for real server capacity and a team that can tune it, not the cheapest shared hosting available.' },
]

// ============================================================
// SCROLL-REVEAL ANIMATIONS (additive — does not touch theme/mouse-glow logic above)
// ============================================================
onMounted(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const targets = pageContainer.value
        ? pageContainer.value.querySelectorAll('[data-reveal]')
        : []

    if (prefersReducedMotion || !targets.length) return

    gsap.set(targets, { opacity: 0, y: 28 })

    targets.forEach((el, i) => {
        ScrollTrigger.create({
            trigger: el,
            start: 'top 88%',
            once: true,
            onEnter: () => {
                gsap.to(el, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: (i % 4) * 0.06,
                })
            },
        })
    })
})
</script>

<style scoped>
.will-change-transform {
    will-change: transform;
}

/* ---------- container: fluid gutters across every breakpoint ---------- */
.blog-container {
    width: 100%;
    max-width: 100%;
    margin-inline: auto;
    padding-inline: 1.25rem;
}

@media (min-width: 640px) {
    .blog-container {
        padding-inline: 2rem;
        max-width: 640px;
    }
}

@media (min-width: 768px) {
    .blog-container {
        padding-inline: 2.5rem;
        max-width: 768px;
    }
}

@media (min-width: 1024px) {
    .blog-container {
        padding-inline: 3rem;
        max-width: 1024px;
    }
}

@media (min-width: 1280px) {
    .blog-container {
        max-width: 1180px;
    }
}

@media (min-width: 1536px) {
    .blog-container {
        max-width: 1360px;
    }
}

/* large desktop / QHD */
@media (min-width: 1920px) {
    .blog-container {
        max-width: 1600px;
        padding-inline: 4rem;
    }
}

/* 4K and above */
@media (min-width: 2560px) {
    .blog-container {
        max-width: 2100px;
        padding-inline: 6rem;
    }
}

/* small-device floor: very narrow phones */
@media (max-width: 359px) {
    .blog-container {
        padding-inline: 0.875rem;
    }
}

/* ---------- diagram ---------- */
.sync-line {
    fill: none;
    stroke-width: 1.5;
    stroke-dasharray: 4 6;
}

@media (prefers-reduced-motion: reduce) {
    :deep(animateMotion) {
        display: none;
    }
}
</style>