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
        <!-- BLOG POST: NetSuite Integration in Production                 -->
        <!-- ============================================================ -->
        <main class="relative z-0 w-full max-w-full">

            <!-- ---------------- HERO ---------------- -->
            <section class="relative w-full max-w-full overflow-hidden border-b"
                :class="isDarkMode ? 'border-white/10' : 'border-black/10'">

                <div class="absolute inset-0 -z-10">
                    <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2560&q=80"
                        alt="Server racks representing a production integration environment"
                        class="h-full w-full object-cover opacity-[0.16]" loading="eager" />
                    <div class="absolute inset-0" :class="isDarkMode
                        ? 'bg-gradient-to-b from-black via-black/95 to-black'
                        : 'bg-gradient-to-b from-white via-white/95 to-white'">
                    </div>
                </div>

                <div
                    class="blog-container pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-24 lg:pt-44 lg:pb-28 xl:pt-52 xl:pb-32 4k:pt-64 4k:pb-40">

                    <div data-reveal
                        class="mb-5 flex items-center gap-3 font-mono text-[11px] sm:text-xs md:text-sm tracking-[0.25em] uppercase 4k:text-lg">
                        <span class="h-px w-8 sm:w-10 4k:w-16"
                            :class="isDarkMode ? 'bg-[#00ffa3]' : 'bg-[#f97316]'"></span>
                        <span :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">ERP &middot; Cloud
                            Integration &middot; Production Systems</span>
                    </div>

                    <h1 data-reveal
                        class="font-['Syne',_sans-serif] font-bold leading-[1.02] tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[6.5rem] 4k:text-[9rem] max-w-5xl 4k:max-w-[90rem]">
                        NetSuite Integration
                        <span class="block" :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">in
                            Production</span>
                    </h1>

                    <p data-reveal
                        class="mt-6 sm:mt-8 max-w-2xl 4k:max-w-4xl text-base sm:text-lg md:text-xl xl:text-2xl 4k:text-4xl leading-relaxed"
                        :class="isDarkMode ? 'text-white/70' : 'text-black/70'">
                        Why teams standardize on NetSuite as the system of record, how the integration layer
                        actually moves data, and the exact process that takes it from a sandbox proof-of-concept
                        to a stable, monitored production pipeline.
                    </p>

                    <div data-reveal
                        class="mt-8 sm:mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs sm:text-sm 4k:text-xl"
                        :class="isDarkMode ? 'text-white/50' : 'text-black/50'">
                        <span>WebHive Technologies</span>
                        <span class="h-1 w-1 rounded-full" :class="isDarkMode ? 'bg-white/30' : 'bg-black/30'"></span>
                        <span>NetSuite &amp; ERP Systems</span>
                        <span class="h-1 w-1 rounded-full" :class="isDarkMode ? 'bg-white/30' : 'bg-black/30'"></span>
                        <span>14 min read</span>
                    </div>
                </div>
            </section>

            <!-- ---------------- INTRO ---------------- -->
            <section class="w-full max-w-full" :class="isDarkMode ? 'bg-[#242424]' : 'bg-[#F5F5F5]'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 4k:gap-20">
                        <div class="lg:col-span-4 4k:col-span-4">
                            <p data-reveal class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] 4k:text-lg"
                                :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Why NetSuite</p>
                        </div>
                        <div class="lg:col-span-8 4k:col-span-8 space-y-5 sm:space-y-6 4k:space-y-8">
                            <p data-reveal
                                class="text-lg sm:text-xl md:text-2xl xl:text-3xl 4k:text-5xl leading-relaxed font-['Syne',_sans-serif] font-medium">
                                Most growing businesses don't fail because a single tool is weak &mdash; they fail
                                because their tools stop agreeing with each other.
                            </p>
                            <p data-reveal
                                class="text-sm sm:text-base md:text-lg xl:text-xl 4k:text-3xl leading-relaxed 4k:leading-[1.7]"
                                :class="isDarkMode ? 'text-white/70' : 'text-black/70'">
                                NetSuite is a unified cloud ERP that combines financials, inventory, order
                                management, procurement, and reporting in one data model. That single data model
                                is exactly why it becomes the natural "system of record" once a company runs an
                                e-commerce storefront, a warehouse or 3PL, a CRM, and a finance team off separate
                                tools. Instead of every platform holding its own version of the truth, NetSuite
                                becomes the one place orders, inventory levels, and revenue actually reconcile.
                            </p>
                            <p data-reveal
                                class="text-sm sm:text-base md:text-lg xl:text-xl 4k:text-3xl leading-relaxed 4k:leading-[1.7]"
                                :class="isDarkMode ? 'text-white/70' : 'text-black/70'">
                                Integration is what makes that promise real. A production-grade NetSuite
                                integration is the pipeline that keeps a Shopify order, a WMS shipment, and a
                                NetSuite sales order describing the exact same reality, in near real time, without
                                a human re-typing anything in between.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ---------------- SIGNATURE: LIVE SYNC DIAGRAM ---------------- -->
            <section class="w-full max-w-full">
                <div class="blog-container py-10 sm:py-12 md:py-16 4k:py-24">
                    <div data-reveal class="rounded-2xl border p-5 sm:p-8 md:p-10 lg:p-14 4k:p-20 4k:rounded-[2rem]"
                        :class="isDarkMode ? 'border-white/10 bg-white/[0.03]' : 'border-black/10 bg-black/[0.02]'">
                        <p class="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6 sm:mb-8 4k:text-base 4k:mb-10"
                            :class="isDarkMode ? 'text-white/40' : 'text-black/40'">
                            Live data flow &mdash; storefront to ledger
                        </p>

                        <svg viewBox="0 0 900 220" class="w-full h-auto" preserveAspectRatio="xMidYMid meet" role="img"
                            aria-label="Diagram showing data flowing from the storefront through middleware into NetSuite and out to the warehouse">
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
                            In production this loop never stops: a storefront order lands, middleware translates
                            and queues it, NetSuite creates the sales order and reserves inventory, and the
                            warehouse receives a fulfillment request &mdash; then confirmations travel back the same
                            way.
                        </p>
                    </div>
                </div>
            </section>

            <!-- ---------------- HOW IT WORKS ---------------- -->
            <section class="w-full max-w-full" :class="isDarkMode ? 'bg-[#242424]' : 'bg-[#F5F5F5]'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div data-reveal class="max-w-3xl 4k:max-w-5xl mb-10 sm:mb-12 md:mb-16 4k:mb-24">
                        <p class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 4k:text-lg"
                            :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">How it works</p>
                        <h2
                            class="font-['Syne',_sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 4k:text-7xl leading-tight">
                            Four ways data actually moves in and out of NetSuite
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 4k:gap-10">
                        <article v-for="method in integrationMethods" :key="method.title" data-reveal
                            class="rounded-xl border p-5 sm:p-6 md:p-8 4k:p-12 4k:rounded-2xl transition-colors duration-300"
                            :class="isDarkMode
                                ? 'border-white/10 hover:border-[#00ffa3]/40'
                                : 'border-black/10 hover:border-[#f97316]/40'">
                            <p class="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-3 4k:text-base 4k:mb-5"
                                :class="isDarkMode ? 'text-white/40' : 'text-black/40'">{{ method.tag }}</p>
                            <h3
                                class="font-['Syne',_sans-serif] font-semibold text-lg sm:text-xl md:text-2xl 4k:text-4xl mb-3 4k:mb-5">
                                {{ method.title }}</h3>
                            <p class="text-sm sm:text-base 4k:text-2xl leading-relaxed"
                                :class="isDarkMode ? 'text-white/65' : 'text-black/65'">{{ method.body }}</p>
                        </article>
                    </div>
                </div>
            </section>

            <!-- ---------------- PRODUCTION WORK PROCESS ---------------- -->
            <section class="w-full max-w-full border-t" :class="isDarkMode ? 'border-white/10' : 'border-black/10'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div data-reveal class="max-w-3xl 4k:max-w-5xl mb-10 sm:mb-12 md:mb-16 4k:mb-24">
                        <p class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 4k:text-lg"
                            :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">The work process</p>
                        <h2
                            class="font-['Syne',_sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 4k:text-7xl leading-tight">
                            From sandbox to a stable production pipeline
                        </h2>
                        <p class="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg 4k:text-3xl leading-relaxed"
                            :class="isDarkMode ? 'text-white/65' : 'text-black/65'">
                            This is the actual sequence we run for a NetSuite production integration, in order.
                            Skipping a step here is the single most common cause of a broken go-live.
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
            <section class="w-full max-w-full border-t"
                :class="isDarkMode ? 'border-white/10 bg-[#242424]' : 'border-black/10 bg-[#F5F5F5]'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div data-reveal class="max-w-3xl 4k:max-w-5xl mb-10 sm:mb-12 md:mb-16 4k:mb-24">
                        <p class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 4k:text-lg"
                            :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">The payoff</p>
                        <h2
                            class="font-['Syne',_sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 4k:text-7xl leading-tight">
                            What a production integration actually earns you
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
            <section class="w-full max-w-full border-t" :class="isDarkMode ? 'border-white/10' : 'border-black/10'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 4k:gap-20">
                        <div class="lg:col-span-4 4k:col-span-4">
                            <p data-reveal
                                class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 4k:text-lg"
                                :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">In production</p>
                            <h2 data-reveal
                                class="font-['Syne',_sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl 4k:text-6xl leading-tight">
                                Where integrations actually break, and how to keep them from breaking
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
            <section class="w-full max-w-full border-t"
                :class="isDarkMode ? 'border-white/10 bg-[#242424]' : 'border-black/10 bg-[#F5F5F5]'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div data-reveal class="max-w-3xl 4k:max-w-5xl">
                        <p
                            class="text-lg sm:text-xl md:text-2xl xl:text-3xl 4k:text-5xl leading-relaxed font-['Syne',_sans-serif] font-medium mb-8 sm:mb-10 4k:mb-16">
                            A production NetSuite integration is never really "finished" &mdash; it's a pipeline
                            you monitor, version, and improve as the business changes. Done right, it disappears
                            into the background: orders sync, inventory stays honest, and finance closes the
                            books on numbers everyone already trusts.
                        </p>
                        <button data-reveal @click="navigateToConsultation"
                            class="group inline-flex items-center gap-3 rounded-full px-6 py-3 sm:px-8 sm:py-4 4k:px-12 4k:py-6 font-mono text-xs sm:text-sm 4k:text-xl uppercase tracking-[0.15em] transition-transform duration-300 hover:-translate-y-0.5"
                            :class="isDarkMode ? 'bg-[#00ffa3] text-black' : 'bg-[#f97316] text-white'">
                            Plan your integration
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
    { label: 'Middleware / iPaaS', x: 400, core: false },
    { label: 'NetSuite', x: 620, core: true },
    { label: 'Warehouse / 3PL', x: 820, core: false },
]

const lineClass = computed(() => (isDarkMode.value ? 'stroke-white/15' : 'stroke-black/15'))
const dotClass = computed(() => (isDarkMode.value ? 'fill-[#00ffa3]' : 'fill-[#f97316]'))

const integrationMethods = [
    {
        tag: 'Web Services',
        title: 'SuiteTalk (REST & SOAP)',
        body: 'NetSuite\u2019s native web services API. Middleware and custom apps call SuiteTalk to create sales orders, update inventory, or read customer records directly against the live NetSuite data model.',
    },
    {
        tag: 'Custom Endpoints',
        title: 'RESTlets & SuiteScript',
        body: 'RESTlets are custom endpoints written in SuiteScript that expose exactly the logic an integration needs \u2014 useful when a workflow doesn\u2019t map cleanly to a standard record, like a custom fulfillment rule.',
    },
    {
        tag: 'iPaaS',
        title: 'Middleware platforms',
        body: 'Tools like Celigo, Boomi, or Workato sit between NetSuite and everything else. They handle field mapping, retries, and scheduling, so the storefront and NetSuite never need to know about each other directly.',
    },
    {
        tag: 'Batch & Legacy',
        title: 'SFTP / EDI file exchange',
        body: 'For older trading partners or high-volume batch jobs, flat files move over SFTP or EDI on a schedule \u2014 still common for large retail partners and freight/logistics providers.',
    },
]

const processSteps = [
    { n: '01', title: 'Discovery & requirements', body: 'Map every system that needs to talk to NetSuite \u2014 storefront, WMS, CRM, payment gateway \u2014 and define which system owns each piece of data.' },
    { n: '02', title: 'Data mapping & schema design', body: 'Translate each source field to its NetSuite counterpart: SKUs to item records, customer accounts to entity records, order statuses to fulfillment stages.' },
    { n: '03', title: 'Middleware & connector setup', body: 'Configure the integration platform or custom connector, set up authentication, and define the triggers \u2014 webhook, scheduled poll, or file drop \u2014 that start each sync.' },
    { n: '04', title: 'Custom SuiteScript development', body: 'Where standard mapping isn\u2019t enough, write SuiteScript to handle business-specific logic: custom pricing rules, multi-location inventory splits, or approval workflows.' },
    { n: '05', title: 'Sandbox testing & QA', body: 'Run the full flow in a NetSuite sandbox account against realistic test data, checking edge cases like partial refunds, backorders, and currency conversions.' },
    { n: '06', title: 'UAT & stakeholder sign-off', body: 'Finance, operations, and customer service teams verify the numbers they\u2019ll actually rely on \u2014 order totals, tax, inventory counts \u2014 before anything touches production.' },
    { n: '07', title: 'Production cutover & go-live', body: 'Deploy to the live NetSuite account during a planned window, with a rollback plan ready and a freeze on manual data entry during the switch.' },
    { n: '08', title: 'Monitoring & maintenance', body: 'Watch governance usage, error queues, and sync latency continuously, and revisit the mapping whenever NetSuite or a connected platform changes its schema.' },
]

const benefits = [
    { title: 'One source of truth', body: 'Orders, inventory, and revenue reconcile against a single ledger instead of three disagreeing spreadsheets.' },
    { title: 'Real-time inventory accuracy', body: 'Stock levels update the moment an order or shipment happens, cutting oversells and backorder surprises.' },
    { title: 'Faster order-to-cash', body: 'An order can flow from checkout to fulfillment to invoice without anyone manually re-keying it.' },
    { title: 'Fewer manual-entry errors', body: 'Every hand-typed order or spreadsheet upload is a chance for a typo; automated sync removes that step entirely.' },
    { title: 'Cleaner financial close', body: 'Finance closes the books on numbers that already match operations, instead of reconciling exports at month-end.' },
    { title: 'Room to scale', body: 'Adding a new sales channel or warehouse becomes a mapping exercise, not a rebuild of the whole stack.' },
]

const practices = [
    { title: 'Governance & API rate limits', body: 'NetSuite meters script and API usage. Batch requests, respect concurrency limits, and back off exponentially on 429s instead of retrying immediately.' },
    { title: 'Silent failures', body: 'A sync that fails without alerting anyone is worse than one that fails loudly. Route failed records to a dead-letter queue with an alert, not a log file nobody reads.' },
    { title: 'Mapping drift', body: 'Field mappings quietly go stale when NetSuite forms or a connected platform\u2019s schema change. Version the mapping config and validate it on every deploy.' },
    { title: 'Credential & token hygiene', body: 'Use OAuth 2.0 token-based authentication scoped to an integration role, not a full admin login, and rotate credentials on a schedule.' },
    { title: 'Untested production changes', body: 'Every script or mapping change goes through sandbox first. A "quick fix" pushed straight to production is the most common cause of a broken sync.' },
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