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
        <!-- BLOG POST: App Development with Next.js                       -->
        <!-- ============================================================ -->
        <main class="relative z-0 w-full max-w-full">

            <!-- ================= HERO (user-provided design — mockup unchanged, copy updated) ================= -->
            <section :class="[
                'relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 overflow-hidden border-b w-full',
                isDarkMode ? 'border-neutral-900' : 'border-neutral-200'
            ]">
                <div :class="['absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_70%)]']"
                    :style="{ '--glow': isDarkMode ? 'rgba(0,255,163,0.03)' : 'rgba(249,115,22,0.05)' }"></div>
                <div
                    :class="['absolute -top-40 -right-40 rounded-full blur-[120px] pointer-events-none animate-pulse hero-glow-circle', isDarkMode ? 'bg-[#00ffa3]/5' : 'bg-orange-500/10']">
                </div>

                <div
                    class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16 2xl:gap-20 items-center relative z-20 w-full pt-16 sm:pt-20 md:pt-24 lg:pt-20 xl:pt-24 2xl:pt-28 pb-10 sm:pb-12 md:pb-14">

                    <div class="lg:col-span-7 space-y-4 sm:space-y-6 text-left order-2 lg:order-1">

                        <!-- Next.js mark — original monochrome glyph via currentColor, no background,
                             so it reads correctly on both themes -->
                        <div ref="heroLogo" class="flex items-center gap-2.5 sm:gap-3"
                            :class="isDarkMode ? 'text-white' : 'text-black'">
                            <svg viewBox="0 0 48 48" class="h-6 w-6 sm:h-7 sm:w-7" fill="none"
                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <circle cx="24" cy="24" r="21" stroke="currentColor" stroke-width="2.2" />
                                <path d="M15 15v18" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
                                <path d="M15 15 32 33" stroke="currentColor" stroke-width="2.2"
                                    stroke-linecap="round" />
                                <path d="M32 20v13" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" />
                            </svg>
                            <span
                                class="font-['Syne',_sans-serif] font-bold text-sm sm:text-base tracking-tight">Next.js</span>
                        </div>

                        <span ref="heroLabel"
                            :class="['inline-block text-[10px] sm:text-xs xl:text-sm 2xl:text-base font-bold tracking-[0.3em] uppercase px-3 py-1 sm:px-4 sm:py-1.5 xl:px-5 xl:py-2 rounded-full border shadow-[0_0_15px_rgba(0,0,0,0.05)]', isDarkMode ? 'text-[#00ffa3] bg-[#00ffa3]/10 border-[#00ffa3]/20' : 'text-[#f97316] bg-[#f97316]/10 border-[#f97316]/20']">
                            App Development &middot; Next.js
                        </span>
                        <h1 ref="heroTitle"
                            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight leading-[1.1]">
                            <span class="inline-block mr-3">Apps</span>
                            <span
                                :class="['inline-block mr-3 text-transparent bg-clip-text bg-gradient-to-r', isDarkMode ? 'from-[#00ffa3] to-emerald-400' : 'from-[#f97316] to-orange-500']">Built
                                On</span>
                            <br>
                            <span class="inline-block mr-3">Next.js.</span>
                            <span class="inline-block mr-3">Built</span>
                            <span class="inline-block">To Scale.</span>
                        </h1>
                        <p ref="heroSubtitle" :class="[
                            'text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl leading-relaxed max-w-2xl',
                            isDarkMode ? 'text-neutral-400' : 'text-neutral-600'
                        ]">
                            We design and build fast, SEO-ready web applications on Next.js &mdash; from
                            storefronts and SaaS dashboards to content sites and social platforms &mdash; using
                            the same rendering engine production teams at scale rely on.
                        </p>
                        <div ref="heroButtons"
                            class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
                            <router-link to="/consultation"
                                :class="['w-full sm:w-auto text-center px-6 py-3.5 sm:px-8 sm:py-4 xl:px-9 2xl:px-10 2xl:py-5 font-bold rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.1)] transition-all duration-300 transform hover:scale-[1.02] text-sm sm:text-base 2xl:text-lg', isDarkMode ? 'bg-[#00ffa3] text-[#000000] shadow-[0_0_30px_rgba(0,255,163,0.2)]' : 'bg-[#f97316] text-white shadow-[0_0_30px_rgba(249,115,22,0.3)]']">
                                Start Your App Project
                            </router-link>
                            <router-link to="/portfolio" :class="[
                                'w-full sm:w-auto text-center px-6 py-3.5 sm:px-8 sm:py-4 xl:px-9 2xl:px-10 2xl:py-5 font-medium rounded-lg transition-all duration-300 border text-sm sm:text-base 2xl:text-lg',
                                isDarkMode
                                    ? 'bg-neutral-900 border-neutral-800 text-white hover:bg-neutral-800 hover:border-neutral-700'
                                    : 'bg-neutral-100 border-neutral-200 text-neutral-900 hover:bg-neutral-200 hover:border-neutral-300'
                            ]">
                                View Portfolio
                            </router-link>
                        </div>
                    </div>

                    <!-- Phone mockup — unchanged from the provided design, content and all -->
                    <div class="lg:col-span-5 flex justify-center order-1 lg:order-2 perspective-1000">
                        <div ref="phoneWireframe" :class="[
                            'phone-frame relative border-[4px] rounded-[44px] p-3.5 transition-transform duration-200 ease-out will-change-transform ring-1',
                            isDarkMode
                                ? 'border-neutral-800 bg-neutral-950 border-t-neutral-700 border-b-neutral-900 ring-neutral-800/50 shadow-[0_0_60px_rgba(0,255,163,0.18)]'
                                : 'border-black bg-neutral-50 border-t-black border-b-black ring-black/20 shadow-[0_0_60px_rgba(249,115,22,0.15)]'
                        ]" :style="{ transform: `rotateY(${phoneRotation.y}deg) rotateX(${phoneRotation.x}deg)` }">
                            <div :class="[
                                'absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4.5 rounded-full z-30 flex items-center justify-end px-3',
                                isDarkMode ? 'bg-black' : 'bg-neutral-900'
                            ]">
                                <div class="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-1"></div>
                                <div class="w-1 h-1 bg-neutral-950 rounded-full"></div>
                            </div>

                            <div :class="[
                                'w-full h-full rounded-[32px] flex flex-col justify-between p-4 overflow-hidden relative select-none border',
                                isDarkMode ? 'bg-black border-neutral-900/60' : 'bg-white border-neutral-200'
                            ]">

                                <div
                                    :class="['absolute top-1/4 -right-20 w-40 h-40 rounded-full blur-2xl pointer-events-none', isDarkMode ? 'bg-[#00ffa3]/10' : 'bg-[#f97316]/10']">
                                </div>
                                <div
                                    :class="['absolute bottom-12 -left-20 w-40 h-40 rounded-full blur-2xl pointer-events-none', isDarkMode ? 'bg-emerald-500/5' : 'bg-orange-500/10']">
                                </div>

                                <div class="pt-6 flex items-center justify-between relative z-10">
                                    <div class="space-y-0.5">
                                        <span
                                            :class="['text-[9px] uppercase tracking-widest font-bold', isDarkMode ? 'text-neutral-500' : 'text-neutral-400']">Current
                                            Location</span>
                                        <h4
                                            :class="['text-xs font-bold flex items-center gap-1', isDarkMode ? 'text-neutral-200' : 'text-neutral-800']">
                                            📍 Tokyo, Japan
                                        </h4>
                                    </div>
                                    <div :class="[
                                        'w-7 h-7 rounded-full flex items-center justify-center text-[10px] shadow-sm border',
                                        isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
                                    ]">
                                        ✈️
                                    </div>
                                </div>

                                <div
                                    :class="['relative w-full phone-image-area rounded-2xl overflow-hidden my-3 z-10 border', isDarkMode ? 'border-neutral-900' : 'border-neutral-200']">
                                    <transition-group name="travel-fade">
                                        <div v-for="(dot, dotIdx) in travelDots" :key="dot.id"
                                            v-show="currentDot === dotIdx" class="absolute inset-0 w-full h-full">
                                            <img :src="dot.imageUrl" class="w-full h-full object-cover"
                                                :alt="dot.title" />
                                            <div
                                                class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-3 pt-8">
                                                <p class="text-[11px] font-bold text-white tracking-wide">{{ dot.title
                                                    }}</p>
                                            </div>
                                        </div>
                                    </transition-group>

                                    <div
                                        class="absolute top-3 right-3 flex gap-1 z-20 bg-black/40 backdrop-blur-md px-2 py-1 rounded-full">
                                        <button v-for="(_, dotIdx) in travelDots" :key="dotIdx" @click="setDot(dotIdx)"
                                            :class="['w-1.5 h-1.5 rounded-full transition-all duration-300 focus:outline-none', currentDot === dotIdx ? (isDarkMode ? 'bg-[#00ffa3] w-3.5' : 'bg-[#f97316] w-3.5') : 'bg-white/40']"></button>
                                    </div>
                                </div>

                                <div :class="[
                                    'backdrop-blur-md rounded-2xl p-3 space-y-1.5 relative z-10 border',
                                    isDarkMode ? 'bg-neutral-900/40 border-neutral-800/60' : 'bg-neutral-100/70 border-neutral-200'
                                ]">
                                    <div class="flex justify-between items-center">
                                        <span
                                            :class="['text-[9px] font-medium', isDarkMode ? 'text-neutral-400' : 'text-neutral-500']">Next
                                            Destination</span>
                                        <span
                                            :class="['text-[9px] px-1.5 py-0.5 rounded font-bold', isDarkMode ? 'text-[#00ffa3] bg-[#00ffa3]/10' : 'text-[#f97316] bg-[#f97316]/10']">Kyoto
                                            Autumn</span>
                                    </div>
                                    <div class="flex items-baseline justify-between">
                                        <span
                                            :class="['text-sm font-black tracking-tight', isDarkMode ? 'text-white' : 'text-neutral-900']">Trip
                                            Explorer Analytics</span>
                                        <span class="text-[9px] text-emerald-400 font-medium">☀️ 22°C</span>
                                    </div>

                                    <div class="h-8 w-full flex items-end gap-1 pt-1">
                                        <div
                                            :class="['h-1/3 flex-1 rounded-sm', isDarkMode ? 'bg-neutral-800' : 'bg-neutral-300']">
                                        </div>
                                        <div
                                            :class="['h-1/2 flex-1 rounded-sm', isDarkMode ? 'bg-neutral-800' : 'bg-neutral-300']">
                                        </div>
                                        <div
                                            :class="['h-2/3 flex-1 rounded-sm', isDarkMode ? 'bg-[#00ffa3]/30' : 'bg-[#f97316]/30']">
                                        </div>
                                        <div
                                            :class="['h-3/5 flex-1 rounded-sm', isDarkMode ? 'bg-[#00ffa3]/50' : 'bg-[#f97316]/50']">
                                        </div>
                                        <div
                                            :class="['h-4/5 flex-1 rounded-sm shadow-[0_0_10px]', isDarkMode ? 'bg-[#00ffa3] shadow-[rgba(0,255,163,0.3)]' : 'bg-[#f97316] shadow-[rgba(249,115,22,0.3)]']">
                                        </div>
                                        <div
                                            :class="['h-full flex-1 rounded-sm shadow-[0_0_15px]', isDarkMode ? 'bg-[#00ffa3] shadow-[rgba(0,255,163,0.5)]' : 'bg-[#f97316] shadow-[rgba(249,115,22,0.5)]']">
                                        </div>
                                    </div>
                                </div>

                                <div class="grid grid-cols-2 gap-2 my-1.5 relative z-10">
                                    <div
                                        :class="['p-2.5 rounded-xl flex flex-col justify-between h-16 transition-colors border', isDarkMode ? 'bg-neutral-900/30 border-neutral-900/80 hover:border-[#00ffa3]/30' : 'bg-neutral-100/70 border-neutral-200 hover:border-[#f97316]/30']">
                                        <div
                                            class="w-4 h-4 rounded bg-emerald-500/10 flex items-center justify-center text-[10px]">
                                            🧳</div>
                                        <div
                                            :class="['text-[10px] font-bold', isDarkMode ? 'text-neutral-300' : 'text-neutral-700']">
                                            Book
                                            Flights</div>
                                    </div>
                                    <div
                                        :class="['p-2.5 rounded-xl flex flex-col justify-between h-16 transition-colors border', isDarkMode ? 'bg-neutral-900/30 border-neutral-900/80 hover:border-[#00ffa3]/30' : 'bg-neutral-100/70 border-neutral-200 hover:border-[#f97316]/30']">
                                        <div class="w-4 h-4 rounded flex items-center justify-center text-[10px]"
                                            :class="isDarkMode ? 'bg-[#00ffa3]/10' : 'bg-[#f97316]/10'">🎟️</div>
                                        <div
                                            :class="['text-[10px] font-bold', isDarkMode ? 'text-neutral-300' : 'text-neutral-700']">
                                            My
                                            Tickets</div>
                                    </div>
                                </div>

                                <button
                                    :class="['mt-1 w-full py-2.5 font-extrabold text-[11px] rounded-xl shadow-[0_4px_15px] transition-all relative z-10 active:scale-[0.98]', isDarkMode ? 'bg-gradient-to-r from-[#00ffa3] to-emerald-500 text-black shadow-[rgba(0,255,163,0.25)]' : 'bg-gradient-to-r from-[#f97316] to-orange-500 text-white shadow-[rgba(249,115,22,0.25)]']">
                                    Discover New Adventures
                                </button>

                                <div
                                    :class="['mt-3 pt-2 border-t flex justify-around items-center relative z-10', isDarkMode ? 'border-neutral-900 text-neutral-600' : 'border-neutral-200 text-neutral-400']">
                                    <span
                                        :class="['text-xs cursor-pointer scale-110', isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]']">🗺️</span>
                                    <span
                                        :class="['text-xs cursor-pointer transition-colors', isDarkMode ? 'hover:text-neutral-400' : 'hover:text-neutral-600']">❤️</span>
                                    <span
                                        :class="['text-xs cursor-pointer transition-colors', isDarkMode ? 'hover:text-neutral-400' : 'hover:text-neutral-600']">💬</span>
                                    <span
                                        :class="['text-xs cursor-pointer transition-colors', isDarkMode ? 'hover:text-neutral-400' : 'hover:text-neutral-600']">👤</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ================= WHY APP DEVELOPMENT ================= -->
            <section class="w-full max-w-full" :class="isDarkMode ? 'bg-[#242424]' : 'bg-[#F5F5F5]'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 4k:gap-20">
                        <div class="lg:col-span-4 4k:col-span-4">
                            <p data-reveal class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] 4k:text-lg"
                                :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Why build an app</p>
                        </div>
                        <div class="lg:col-span-8 4k:col-span-8 space-y-5 sm:space-y-6 4k:space-y-8">
                            <p data-reveal
                                class="text-lg sm:text-xl md:text-2xl xl:text-3xl 4k:text-5xl leading-relaxed font-['Syne',_sans-serif] font-medium">
                                A website tells people you exist. An application is where they actually do
                                something &mdash; buy, subscribe, post, book, manage.
                            </p>
                            <p data-reveal
                                class="text-sm sm:text-base md:text-lg xl:text-xl 4k:text-3xl leading-relaxed 4k:leading-[1.7]"
                                :class="isDarkMode ? 'text-white/70' : 'text-black/70'">
                                Every business eventually hits the same wall: a static site can describe the
                                product, but it can't take a payment, remember a customer, or update in real
                                time. An application is what turns visitors into users &mdash; people who log
                                in, come back, and do business through the product itself rather than reading
                                about it and emailing someone.
                            </p>
                            <p data-reveal
                                class="text-sm sm:text-base md:text-lg xl:text-xl 4k:text-3xl leading-relaxed 4k:leading-[1.7]"
                                :class="isDarkMode ? 'text-white/70' : 'text-black/70'">
                                It's also a direct channel that isn't rented from a platform. A social post can
                                get buried by an algorithm; a customer's own account, dashboard, or bookmarked
                                app doesn't. That direct relationship &mdash; and the behavioral data that comes
                                with it &mdash; is what makes an application a business asset instead of a
                                marketing expense.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ================= SIGNATURE: NEXT.JS RENDERING DIAGRAM ================= -->
            <section class="w-full max-w-full">
                <div class="blog-container py-10 sm:py-12 md:py-16 4k:py-24">
                    <div data-reveal class="rounded-2xl border p-5 sm:p-8 md:p-10 lg:p-14 4k:p-20 4k:rounded-[2rem]"
                        :class="isDarkMode ? 'border-white/10 bg-white/[0.03]' : 'border-black/10 bg-black/[0.02]'">
                        <p class="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6 sm:mb-8 4k:text-base 4k:mb-10"
                            :class="isDarkMode ? 'text-white/40' : 'text-black/40'">
                            How a page reaches the visitor
                        </p>

                        <svg viewBox="0 0 900 220" class="w-full h-auto" preserveAspectRatio="xMidYMid meet" role="img"
                            aria-label="Diagram showing a request flowing from the browser through the Next.js server or edge network into data sources and back as a rendered page">
                            <path d="M 120 110 H 340" class="sync-line" :class="lineClass" />
                            <path d="M 460 110 H 560" class="sync-line" :class="lineClass" />
                            <path d="M 680 110 H 780" class="sync-line" :class="lineClass" />

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
                            A request hits Next.js's server or edge network, which renders or streams the page
                            &mdash; server-side, statically, or incrementally depending on the route &mdash;
                            pulling from a database or API as needed, then sends back a fully-formed, fast,
                            crawlable page.
                        </p>
                    </div>
                </div>
            </section>

            <!-- ================= HOW APP DEVELOPMENT WORKS (NEXT.JS) ================= -->
            <section class="w-full max-w-full" :class="isDarkMode ? 'bg-[#242424]' : 'bg-[#F5F5F5]'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div data-reveal class="max-w-3xl 4k:max-w-5xl mb-10 sm:mb-12 md:mb-16 4k:mb-24">
                        <p class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 4k:text-lg"
                            :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">How it works</p>
                        <h2
                            class="font-['Syne',_sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 4k:text-7xl leading-tight">
                            What makes Next.js an application framework, not just a site builder
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 4k:gap-10">
                        <article v-for="part in nextParts" :key="part.title" data-reveal
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

            <!-- ================= WHERE NEXT.JS FITS ================= -->
            <section class="w-full max-w-full">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36 border-t"
                    :class="isDarkMode ? 'border-white/10' : 'border-black/10'">
                    <div data-reveal class="max-w-3xl 4k:max-w-5xl mb-10 sm:mb-12 md:mb-16 4k:mb-24">
                        <p class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 4k:text-lg"
                            :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Where it fits</p>
                        <h2
                            class="font-['Syne',_sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 4k:text-7xl leading-tight">
                            One framework, four very different kinds of apps
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6 4k:gap-10">
                        <article v-for="useCase in useCases" :key="useCase.title" data-reveal
                            class="rounded-xl p-5 sm:p-6 md:p-8 4k:p-12 4k:rounded-2xl"
                            :class="isDarkMode ? 'bg-white/[0.03]' : 'bg-black/[0.02]'">
                            <div class="mb-4 4k:mb-6 h-9 w-9 sm:h-10 sm:w-10 4k:h-16 4k:w-16 rounded-full flex items-center justify-center"
                                :class="isDarkMode ? 'bg-[#00ffa3]/10' : 'bg-[#f97316]/10'">
                                <span class="h-2 w-2 4k:h-3 4k:w-3 rounded-full"
                                    :class="isDarkMode ? 'bg-[#00ffa3]' : 'bg-[#f97316]'"></span>
                            </div>
                            <h3
                                class="font-['Syne',_sans-serif] font-semibold text-base sm:text-lg md:text-xl 4k:text-3xl mb-2 4k:mb-4">
                                {{ useCase.title }}</h3>
                            <p class="text-sm sm:text-base 4k:text-2xl leading-relaxed"
                                :class="isDarkMode ? 'text-white/65' : 'text-black/65'">{{ useCase.body }}</p>
                        </article>
                    </div>
                </div>
            </section>

            <!-- ================= THE WORKING PROCESS ================= -->
            <section class="w-full max-w-full" :class="isDarkMode ? 'bg-[#242424]' : 'bg-[#F5F5F5]'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36 border-t"
                    :class="isDarkMode ? 'border-white/10' : 'border-black/10'">
                    <div data-reveal class="max-w-3xl 4k:max-w-5xl mb-10 sm:mb-12 md:mb-16 4k:mb-24">
                        <p class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 4k:text-lg"
                            :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">The working process</p>
                        <h2
                            class="font-['Syne',_sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 4k:text-7xl leading-tight">
                            From an idea to an app in production
                        </h2>
                        <p class="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg 4k:text-3xl leading-relaxed"
                            :class="isDarkMode ? 'text-white/65' : 'text-black/65'">
                            This is the order we actually build a Next.js application in, whether it's an
                            e-commerce storefront, a SaaS dashboard, or a content platform.
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

            <!-- ================= BENEFITS ================= -->
            <section class="w-full max-w-full">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36 border-t"
                    :class="isDarkMode ? 'border-white/10' : 'border-black/10'">
                    <div data-reveal class="max-w-3xl 4k:max-w-5xl mb-10 sm:mb-12 md:mb-16 4k:mb-24">
                        <p class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 4k:text-lg"
                            :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">The payoff</p>
                        <h2
                            class="font-['Syne',_sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 4k:text-7xl leading-tight">
                            What a Next.js build actually earns you
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

            <!-- ================= CHALLENGES / BEST PRACTICES ================= -->
            <section class="w-full max-w-full" :class="isDarkMode ? 'bg-[#242424]' : 'bg-[#F5F5F5]'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36 border-t"
                    :class="isDarkMode ? 'border-white/10' : 'border-black/10'">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 4k:gap-20">
                        <div class="lg:col-span-4 4k:col-span-4">
                            <p data-reveal
                                class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 4k:text-lg"
                                :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">In production</p>
                            <h2 data-reveal
                                class="font-['Syne',_sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl 4k:text-6xl leading-tight">
                                Where Next.js apps actually go wrong, and the fix
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

            <!-- ================= CLOSING / CTA ================= -->
            <section class="w-full max-w-full">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36 border-t"
                    :class="isDarkMode ? 'border-white/10' : 'border-black/10'">
                    <div data-reveal class="max-w-3xl 4k:max-w-5xl">
                        <p
                            class="text-lg sm:text-xl md:text-2xl xl:text-3xl 4k:text-5xl leading-relaxed font-['Syne',_sans-serif] font-medium mb-8 sm:mb-10 4k:mb-16">
                            The framework gets you speed, SEO, and a scalable foundation. What turns that
                            foundation into a business asset is the same thing it always was &mdash; a product
                            people actually want to open again.
                        </p>
                        <button data-reveal @click="navigateToConsultation"
                            class="group inline-flex items-center gap-3 rounded-full px-6 py-3 sm:px-8 sm:py-4 4k:px-12 4k:py-6 font-mono text-xs sm:text-sm 4k:text-xl uppercase tracking-[0.15em] transition-transform duration-300 hover:-translate-y-0.5"
                            :class="isDarkMode ? 'bg-[#00ffa3] text-black' : 'bg-[#f97316] text-white'">
                            Plan your app
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

// ── Hero refs (from the provided hero design) ──
const heroLogo = ref(null)
const heroLabel = ref(null)
const heroTitle = ref(null)
const heroSubtitle = ref(null)
const heroButtons = ref(null)
const phoneWireframe = ref(null)

// ── Phone tilt (merged into the single page-wide mousemove handler below) ──
const phoneRotation = reactive({ x: 0, y: 0 })

const handleMouseMove = (e) => {
    if (!rafId) {
        rafId = requestAnimationFrame(() => {
            mouse.x = e.clientX
            mouse.y = e.clientY

            const halfW = window.innerWidth / 2
            const halfH = window.innerHeight / 2
            phoneRotation.y = ((e.clientX - halfW) / halfW) * 15
            phoneRotation.x = -((e.clientY - halfH) / halfH) * 15

            rafId = null
        })
    }
}

// ── Phone mockup content — unchanged from the provided design ──
const currentDot = ref(0)
let travelCarouselInterval = null
const travelDots = [
    { id: 1, title: 'Kyoto Imperial Wilderness, Japan', imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=600&auto=format&fit=crop' },
    { id: 2, title: 'Amalfi Coastal Horizons, Italy', imageUrl: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=600&auto=format&fit=crop' },
    { id: 3, title: 'Santorini Sunset Calderas, Greece', imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=600&auto=format&fit=crop' },
    { id: 4, title: 'Banff Glacial Retreats, Canada', imageUrl: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=600&auto=format&fit=crop' },
    { id: 5, title: 'Swiss Alpine Ridges, Zermatt', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop' }
]

const setDot = (index) => { currentDot.value = index; resetTravelInterval() }
const nextDot = () => { currentDot.value = (currentDot.value + 1) % travelDots.length }
const resetTravelInterval = () => {
    if (travelCarouselInterval) clearInterval(travelCarouselInterval)
    travelCarouselInterval = setInterval(nextDot, 4500)
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

    resetTravelInterval()

    // Hero entrance timeline — from the provided hero design, refs only
    const heroTl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } })
    heroTl.fromTo(heroLogo.value, { opacity: 0, y: 16 }, { opacity: 1, y: 0 })
        .fromTo(heroLabel.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.9')
        .fromTo(heroTitle.value.children, { opacity: 0, y: 35 }, { opacity: 1, y: 0, stagger: 0.08 }, '-=0.9')
        .fromTo(heroSubtitle.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.9')
        .fromTo(heroButtons.value, { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, '-=0.9')
        .fromTo(phoneWireframe.value, { opacity: 0, scale: 0.9, rotateY: -30 }, { opacity: 1, scale: 1, rotateY: 0, duration: 1.6 }, '-=1.4')
})

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    cancelAnimationFrame(rafId)
    if (travelCarouselInterval) clearInterval(travelCarouselInterval)
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

// ============================================================
// BLOG CONTENT DATA
// ============================================================
const flowNodes = [
    { label: 'Browser', x: 80, core: false },
    { label: 'Next.js Server / Edge', x: 400, core: true },
    { label: 'Database / API', x: 620, core: false },
    { label: 'Rendered Page', x: 820, core: false },
]

const lineClass = computed(() => (isDarkMode.value ? 'stroke-white/15' : 'stroke-black/15'))
const dotClass = computed(() => (isDarkMode.value ? 'fill-[#00ffa3]' : 'fill-[#f97316]'))

const nextParts = [
    {
        tag: 'Rendering',
        title: 'SSR, SSG & ISR',
        body: 'Each route chooses how it renders \u2014 fully static at build time, freshly rendered per request, or statically served and revalidated on a schedule \u2014 so every page gets the right speed-versus-freshness trade-off.',
    },
    {
        tag: 'Structure',
        title: 'File-based routing & Server Components',
        body: 'Folders and files define the URL structure directly, and Server Components let most of the UI render on the server by default, sending far less JavaScript to the browser.',
    },
    {
        tag: 'Backend',
        title: 'Route Handlers & middleware',
        body: 'API endpoints live inside the same project as the UI, and middleware runs logic \u2014 auth checks, redirects, A/B tests \u2014 at the edge before a page even renders.',
    },
    {
        tag: 'Delivery',
        title: 'Built-in optimization',
        body: 'Images, fonts, and scripts are optimized automatically, and pages are code-split and streamed, so users see meaningful content the moment it\u2019s ready instead of waiting on the whole page.',
    },
]

const useCases = [
    { title: 'E-commerce Platforms', body: 'Fast page loads and excellent SEO tracking \u2014 product pages render quickly and get properly indexed, which matters directly for organic sales.' },
    { title: 'SaaS Applications', body: 'Secure user dashboards and subscription management \u2014 authenticated routes, protected data fetching, and billing flows all live comfortably in one app.' },
    { title: 'Content Blogs', body: 'Lightning-fast static pages using Markdown or CMS tools \u2014 posts can be pre-rendered at build time and served instantly from the edge.' },
    { title: 'Social Networks', body: 'Real-time updates and dynamic user-generated profiles \u2014 streaming and Server Components keep feeds and profiles fast even as content changes constantly.' },
]

const processSteps = [
    { n: '01', title: 'Discovery & requirements', body: 'Define what the app actually needs to do, who uses it, and which parts need to be fast-and-static versus real-time and dynamic.' },
    { n: '02', title: 'Architecture & rendering strategy', body: 'Decide, route by route, whether pages are statically generated, server-rendered, or incrementally revalidated \u2014 this decision shapes everything downstream.' },
    { n: '03', title: 'UI & component design', body: 'Build the interface as reusable components, splitting server and client components deliberately to keep the shipped JavaScript small.' },
    { n: '04', title: 'Data layer & API integration', body: 'Connect the app to its database, CMS, or third-party APIs through Route Handlers or server-side data fetching.' },
    { n: '05', title: 'Authentication & security', body: 'Add login, sessions, and role-based access, and lock down environment variables and secrets so they never reach the client bundle.' },
    { n: '06', title: 'Testing & QA', body: 'Test across devices and connection speeds, checking that server-rendered and client-rendered pieces both behave correctly under real conditions.' },
    { n: '07', title: 'Deployment & CI/CD', body: 'Ship to an edge-ready host with automated builds and preview deployments, so every change is tested before it reaches production.' },
    { n: '08', title: 'Monitoring & scaling', body: 'Track real-user performance and errors after launch, and revisit the rendering strategy as traffic and features grow.' },
]

const benefits = [
    { title: 'SEO that works by default', body: 'Server-rendered and static pages give search engines a fully-formed page to crawl, without extra tooling to fake it.' },
    { title: 'Genuinely fast page loads', body: 'Streaming, code-splitting, and edge delivery mean users see content quickly, even on slower connections.' },
    { title: 'One codebase, full-stack', body: 'UI and backend logic live in the same project, cutting the coordination overhead of separate frontend and backend repos.' },
    { title: 'Scales without a rebuild', body: 'The same app that serves a first hundred users can serve a hundred thousand, since rendering and caching scale with traffic.' },
    { title: 'Optimized assets automatically', body: 'Images and fonts are optimized without a separate pipeline, so performance work doesn\u2019t compete with feature work.' },
    { title: 'A direct, owned channel', body: 'An app the business controls end-to-end, not one bound by a platform\u2019s rules, feed algorithm, or fee structure.' },
]

const practices = [
    { title: 'Wrong rendering choice per route', body: 'Server-rendering a page that rarely changes wastes performance a static page would give for free. Match the rendering strategy to how often each page\u2019s data actually changes.' },
    { title: 'Client components creeping in', body: 'Marking components "client" out of habit ships unnecessary JavaScript to the browser. Default to server components and opt into client-side only where interactivity requires it.' },
    { title: 'Stale cached data after updates', body: 'Incremental static regeneration needs a deliberate revalidation strategy, or users see outdated content. Set revalidation windows intentionally, not as an afterthought.' },
    { title: 'Hydration mismatches', body: 'Server-rendered and client-rendered output disagreeing causes visible flicker or console errors. Keep server and client rendering logic in sync, especially around dates, locale, and random values.' },
    { title: 'Secrets leaking to the client', body: 'An environment variable used in the wrong place can ship straight into the browser bundle. Keep secrets server-only and double-check what actually ends up in client code.' },
]

// ============================================================
// SCROLL-REVEAL ANIMATIONS (additive — does not touch theme/mouse/hero logic above)
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

.perspective-1000 {
    perspective: 1000px;
}

.travel-fade-enter-active,
.travel-fade-leave-active {
    transition: opacity 0.6s ease-in-out;
}

.travel-fade-enter-from,
.travel-fade-leave-to {
    opacity: 0;
}

/* ==========================================================================
   Hero container: scales fluidly with viewport width. Kept from the
   provided hero design, unchanged.
   ========================================================================== */
.max-w-7xl {
    max-width: clamp(320px, 94vw, 1500px) !important;
}

.phone-frame {
    width: 288px;
    height: 560px;
}

.hero-glow-circle {
    width: 24rem;
    height: 24rem;
}

.phone-image-area {
    height: 176px;
}

@media (min-width: 1920px) {
    .max-w-7xl {
        max-width: 1750px !important;
    }
}

@media (min-width: 2560px) {
    .max-w-7xl {
        max-width: 2050px !important;
    }

    .phone-frame {
        width: 385px;
        height: 745px;
    }

    .phone-image-area {
        height: 235px;
    }

    .hero-glow-circle {
        width: 34rem;
        height: 34rem;
    }
}

/* ---------- blog sections below the hero: container with fluid gutters
   across every breakpoint. Each section itself stays full width (w-full);
   this class only constrains the inner content wrapper. ---------- */
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

@media (min-width: 1920px) {
    .blog-container {
        max-width: 1600px;
        padding-inline: 4rem;
    }
}

@media (min-width: 2560px) {
    .blog-container {
        max-width: 2100px;
        padding-inline: 6rem;
    }
}

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