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
        <!-- BLOG POST: Web Development with Next.js & Laravel             -->
        <!-- ============================================================ -->
        <main class="relative z-0 w-full max-w-full">

            <!-- ================= HERO (user-provided design — monitor mockup unchanged, copy updated) ================= -->
            <section :class="[
                'relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 overflow-hidden border-b z-20 pt-20 sm:pt-24 md:pt-24 lg:pt-24 xl:pt-28 2xl:pt-32 w-full',
                isDarkMode ? 'border-neutral-900' : 'border-neutral-200'
            ]">
                <div
                    class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent-gradient-fade),transparent_70%)]">
                </div>

                <div
                    class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-12 xl:gap-16 2xl:gap-20 items-center relative z-20 w-full">

                    <div class="lg:col-span-6 space-y-4 sm:space-y-6 text-left">

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
                                class="font-['Syne',_sans-serif] font-bold text-sm sm:text-base tracking-tight">Next.js
                                <span class="font-normal opacity-50">&amp; Laravel</span></span>
                        </div>

                        <span ref="heroLabel"
                            class="inline-block text-[10px] sm:text-xs xl:text-sm 2xl:text-base font-bold tracking-[0.3em] text-[var(--accent-color)] uppercase bg-[var(--accent-bg-light)] px-3 py-1 sm:px-4 sm:py-1.5 xl:px-5 xl:py-2 rounded-full border border-[var(--accent-border)] shadow-[0_0_15px_var(--accent-shadow)]">
                            Web Development Services
                        </span>
                        <h1 ref="heroTitle" :class="[
                            'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b',
                            isDarkMode ? 'from-white to-neutral-400' : 'from-black to-neutral-600'
                        ]">
                            Websites Built To Work <br>
                            <span
                                class="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-color)] to-[var(--accent-secondary)]">As
                                Hard As You Do</span>
                        </h1>
                        <p ref="heroSubtitle"
                            :class="['text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl leading-relaxed max-w-2xl', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
                            We design and build fast, secure, full-stack websites and web applications &mdash;
                            Next.js on the front end, Laravel powering the logic behind it &mdash; so the site
                            isn't just something people visit, it's something the business actually runs on.
                        </p>
                        <div ref="heroButtons"
                            class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-3 sm:pt-4">
                            <button @click="router.push('/consultation')"
                                class="w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 xl:px-9 2xl:px-10 2xl:py-5 text-sm sm:text-base 2xl:text-lg bg-[var(--accent-color)] text-black font-bold rounded-lg shadow-[0_0_30px_var(--accent-shadow-intense)] hover:shadow-[0_0_40px_var(--accent-shadow-hover)] transition-all duration-300 hover:scale-[1.02]">
                                Start Your Project
                            </button>
                            <button @click="router.push('/portfolio')" :class="[
                                'w-full sm:w-auto px-6 py-3.5 sm:px-8 sm:py-4 xl:px-9 2xl:px-10 2xl:py-5 text-sm sm:text-base 2xl:text-lg font-medium rounded-lg transition-all duration-300 border',
                                isDarkMode
                                    ? 'bg-neutral-900 border-neutral-800 text-white hover:bg-neutral-800 hover:border-neutral-700'
                                    : 'bg-neutral-100 border-neutral-200 text-black hover:bg-neutral-200 hover:border-neutral-300'
                            ]">
                                View Our Work
                            </button>
                        </div>
                    </div>

                    <!-- LCD / monitor mockup — unchanged from the provided design, content and all -->
                    <div class="lg:col-span-6 flex justify-center perspective-1000">
                        <div ref="monitor" :class="[
                            'monitor-frame w-full aspect-[16/10] border-[8px] rounded-lg shadow-[0_0_80px_var(--accent-shadow)] relative',
                            isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-50 border-black'
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
                                    <div v-for="(dot, dotIdx) in travelDots" :key="dot.id"
                                        v-show="currentDot === dotIdx" class="absolute inset-0">
                                        <img :src="dot.imageUrl" class="w-full h-full object-cover" :alt="dot.title" />
                                        <div
                                            class="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                            <p class="text-white font-bold text-sm">{{ dot.title }}</p>
                                        </div>
                                    </div>
                                </transition-group>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ================= ROLE OF A WEBSITE ================= -->
            <section class="w-full max-w-full mt-[1.5%]" :class="isDarkMode ? 'bg-[#242424]' : 'bg-[#F5F5F5]'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 4k:gap-20">
                        <div class="lg:col-span-4 4k:col-span-4">
                            <p data-reveal class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] 4k:text-lg"
                                :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">Why it matters</p>
                        </div>
                        <div class="lg:col-span-8 4k:col-span-8 space-y-5 sm:space-y-6 4k:space-y-8">
                            <p data-reveal
                                class="text-lg sm:text-xl md:text-2xl xl:text-3xl 4k:text-5xl leading-relaxed font-['Syne',_sans-serif] font-medium">
                                For a person, a website is often the first impression. For a business, it's the
                                one employee working around the clock that never calls in sick.
                            </p>
                            <p data-reveal
                                class="text-sm sm:text-base md:text-lg xl:text-xl 4k:text-3xl leading-relaxed 4k:leading-[1.7]"
                                :class="isDarkMode ? 'text-white/70' : 'text-black/70'">
                                For an individual, a website is a portfolio that speaks before an introduction
                                does, a resume that never goes stale in a drawer, a way to be found by someone
                                searching at 2 a.m. who never would have found you otherwise. It's the
                                difference between "I have some work I could show you" and a link that already
                                proves it.
                            </p>
                            <p data-reveal
                                class="text-sm sm:text-base md:text-lg xl:text-xl 4k:text-3xl leading-relaxed 4k:leading-[1.7]"
                                :class="isDarkMode ? 'text-white/70' : 'text-black/70'">
                                For a business, it's the storefront that's open at every hour a physical
                                location can't be, the first place a potential customer checks before they ever
                                call or walk in, and increasingly the only interaction some customers ever have
                                with the brand at all. A slow or broken website doesn't just look bad &mdash;
                                it quietly costs sales, leads, and trust that never gets a second chance to be
                                earned back.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- ================= SIGNATURE: REQUEST FLOW DIAGRAM ================= -->
            <section class="w-full max-w-full">
                <div class="blog-container py-10 sm:py-12 md:py-16 4k:py-24">
                    <div data-reveal class="rounded-2xl border p-5 sm:p-8 md:p-10 lg:p-14 4k:p-20 4k:rounded-[2rem]"
                        :class="isDarkMode ? 'border-white/10 bg-white/[0.03]' : 'border-black/10 bg-black/[0.02]'">
                        <p class="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-6 sm:mb-8 4k:text-base 4k:mb-10"
                            :class="isDarkMode ? 'text-white/40' : 'text-black/40'">
                            How a page actually gets built and served
                        </p>

                        <svg viewBox="0 0 900 220" class="w-full h-auto" preserveAspectRatio="xMidYMid meet" role="img"
                            aria-label="Diagram showing a request flowing from the browser through the Next.js front end and Laravel API into the database and back">
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
                            The browser requests a page, Next.js renders the interface, a Laravel API handles
                            the business logic &mdash; auth, orders, records &mdash; against the database, and
                            the response comes back as a page that's fast, correct, and secure.
                        </p>
                    </div>
                </div>
            </section>

            <!-- ================= HOW WEB DEVELOPMENT WORKS ================= -->
            <section class="w-full max-w-full" :class="isDarkMode ? 'bg-[#242424]' : 'bg-[#F5F5F5]'">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36">
                    <div data-reveal class="max-w-3xl 4k:max-w-5xl mb-10 sm:mb-12 md:mb-16 4k:mb-24">
                        <p class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 4k:text-lg"
                            :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">How it works</p>
                        <h2
                            class="font-['Syne',_sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 4k:text-7xl leading-tight">
                            The two halves of every website that actually works
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

            <!-- ================= WHAT WE BUILD ================= -->
            <section class="w-full max-w-full">
                <div class="blog-container py-14 sm:py-16 md:py-20 lg:py-24 4k:py-36 border-t"
                    :class="isDarkMode ? 'border-white/10' : 'border-black/10'">
                    <div data-reveal class="max-w-3xl 4k:max-w-5xl mb-10 sm:mb-12 md:mb-16 4k:mb-24">
                        <p class="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 4k:text-lg"
                            :class="isDarkMode ? 'text-[#00ffa3]' : 'text-[#f97316]'">What we build</p>
                        <h2
                            class="font-['Syne',_sans-serif] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 4k:text-7xl leading-tight">
                            One stack, four very different kinds of sites
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
                            From a blank page to a website in production
                        </h2>
                        <p class="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg 4k:text-3xl leading-relaxed"
                            :class="isDarkMode ? 'text-white/65' : 'text-black/65'">
                            This is the sequence we actually build a website or web application in, front end
                            and back end together.
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
                            What a properly built website actually earns you
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
                                Where websites actually lose visitors, and the fix
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
                            A website is never really finished &mdash; it's a product like any other, one that
                            keeps earning its place only if someone keeps tending to it. Built right from the
                            start, it stops being a cost and starts being the channel that pays for itself.
                        </p>
                        <button data-reveal @click="navigateToConsultation"
                            class="group inline-flex items-center gap-3 rounded-full px-6 py-3 sm:px-8 sm:py-4 4k:px-12 4k:py-6 font-mono text-xs sm:text-sm 4k:text-xl uppercase tracking-[0.15em] transition-transform duration-300 hover:-translate-y-0.5"
                            :class="isDarkMode ? 'bg-[#00ffa3] text-black' : 'bg-[#f97316] text-white'">
                            Plan your website
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
const monitor = ref(null)

const handleMouseMove = (e) => {
    if (!rafId) {
        rafId = requestAnimationFrame(() => {
            mouse.x = e.clientX
            mouse.y = e.clientY
            rafId = null
        })
    }
}

// ── LCD mockup content — unchanged from the provided design ──
const currentDot = ref(0)
let travelInterval = null
const travelDots = [
    { id: 1, title: 'Kyoto Imperial Wilderness', imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200' },
    { id: 2, title: 'Amalfi Coastal Horizons', imageUrl: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1200' },
    { id: 3, title: 'Santorini Sunset', imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1200' },
    { id: 4, title: 'Banff Glacial Retreats', imageUrl: 'https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=1200' },
    { id: 5, title: 'Swiss Alpine Ridges', imageUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200' }
]

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

    travelInterval = setInterval(() => {
        currentDot.value = (currentDot.value + 1) % travelDots.length
    }, 4000)

    // Hero entrance timeline — from the provided hero design, refs only
    const heroTl = gsap.timeline({ defaults: { ease: 'power4.out', duration: 1.2 } })
    heroTl.fromTo(heroLogo.value, { opacity: 0, y: 16 }, { opacity: 1, y: 0 })
        .fromTo(heroLabel.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=0.9')
        .fromTo(heroTitle.value, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, '-=0.9')
        .fromTo(heroSubtitle.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.9')
        .fromTo(heroButtons.value, { opacity: 0, y: 15 }, { opacity: 1, y: 0 }, '-=0.9')
        .fromTo(monitor.value, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1 }, '-=0.8')
})

onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    cancelAnimationFrame(rafId)
    if (travelInterval) clearInterval(travelInterval)
    ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})

// ============================================================
// BLOG CONTENT DATA
// ============================================================
const flowNodes = [
    { label: 'Browser', x: 80, core: false },
    { label: 'Next.js Frontend', x: 400, core: true },
    { label: 'Laravel API', x: 620, core: true },
    { label: 'Database', x: 820, core: false },
]

const lineClass = computed(() => (isDarkMode.value ? 'stroke-white/15' : 'stroke-black/15'))
const dotClass = computed(() => (isDarkMode.value ? 'fill-[#00ffa3]' : 'fill-[#f97316]'))

const stackParts = [
    {
        tag: 'Front end',
        title: 'Next.js — what the visitor sees',
        body: 'Pages, layout, and interactivity, rendered fast and built to be found by search engines. This is the storefront: what loads first, what people judge in the first three seconds.',
    },
    {
        tag: 'Back end',
        title: 'Laravel — what actually runs the business',
        body: 'A PHP framework built around clean MVC structure, Eloquent ORM for the database, and Artisan tooling for everyday tasks. This is where accounts, orders, permissions, and business rules actually live.',
    },
    {
        tag: 'Data',
        title: 'The database layer',
        body: 'Structured, relational data \u2014 customers, products, content, transactions \u2014 modeled properly so it stays consistent and fast to query as the site grows.',
    },
    {
        tag: 'Delivery',
        title: 'Hosting & deployment',
        body: 'The frontend and API are deployed and monitored independently, so each can scale, cache, and recover on its own without either becoming a single point of failure.',
    },
]

const useCases = [
    { title: 'Business Websites', body: 'The digital front door \u2014 fast, credible, and built to convert visitors into calls, form fills, or sales.' },
    { title: 'Web Applications & Portals', body: 'Login-gated tools where customers or staff actually do work \u2014 dashboards, booking systems, client portals.' },
    { title: 'E-commerce Stores', body: 'Custom storefronts with the checkout, inventory, and pricing logic a templated platform can\u2019t fully accommodate.' },
    { title: 'Admin Dashboards & Internal Tools', body: 'Internal software that runs day-to-day operations \u2014 reporting, content management, workflow tracking.' },
]

const processSteps = [
    { n: '01', title: 'Discovery & requirements', body: 'Understand what the business actually needs the site to do \u2014 inform, sell, log people in, manage data \u2014 before a single screen is designed.' },
    { n: '02', title: 'Information architecture & UX', body: 'Map the site structure and user flows, so navigation makes sense before visual design work begins.' },
    { n: '03', title: 'Frontend build (Next.js)', body: 'Build the pages and components, choosing the right rendering strategy per page for speed and SEO.' },
    { n: '04', title: 'Backend & API build (Laravel)', body: 'Build the models, controllers, and API routes that handle authentication, data, and business logic.' },
    { n: '05', title: 'Database design', body: 'Design a schema that models the business accurately and stays fast as records grow into the tens of thousands.' },
    { n: '06', title: 'Integration & authentication', body: 'Connect the Next.js frontend to the Laravel API, wiring up secure login, sessions, and protected routes.' },
    { n: '07', title: 'Testing & QA', body: 'Test real user flows end to end \u2014 forms, checkout, login, edge cases \u2014 across devices and browsers.' },
    { n: '08', title: 'Deployment & maintenance', body: 'Launch, then keep dependencies patched, backups running, and performance monitored as traffic grows.' },
]

const benefits = [
    { title: 'Fast by default', body: 'A properly built frontend loads quickly, which keeps visitors from bouncing before they see anything.' },
    { title: 'Built to be found', body: 'Server-rendered pages give search engines exactly what they need to index and rank the site properly.' },
    { title: 'Business logic that holds up', body: 'Laravel\u2019s structure keeps complex rules \u2014 pricing, permissions, workflows \u2014 organized and testable as they grow.' },
    { title: 'Secure by design', body: 'Authentication, validation, and data handling follow patterns proven across thousands of production apps.' },
    { title: 'Scales without a rebuild', body: 'A decoupled frontend and backend can each scale independently as traffic and data grow.' },
    { title: 'Owned, not rented', body: 'A custom-built site is fully owned code, not a template locked to a platform\u2019s rules or fees.' },
]

const practices = [
    { title: 'Slow, unoptimized pages', body: 'Unoptimized images and render-blocking scripts quietly drive visitors away before the page even finishes loading. Optimize assets and rendering strategy from day one, not after launch.' },
    { title: 'Weak or missing SEO foundations', body: 'A site that looks great but isn\u2019t structured for search engines never gets found. Metadata, semantic markup, and sitemap structure need to be part of the build, not an afterthought.' },
    { title: 'No clear separation of concerns', body: 'Mixing business logic into the frontend makes both the UI and the API harder to maintain. Keep Laravel responsible for logic and data, Next.js responsible for presentation.' },
    { title: 'Neglected maintenance after launch', body: 'Unpatched dependencies are one of the most common ways sites get compromised. Schedule regular updates instead of waiting for something to break.' },
    { title: 'No monitoring after go-live', body: 'A site that goes down silently costs money the whole time nobody notices. Set up uptime and error monitoring before launch, not after the first outage.' },
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

/* Dynamic theme variables — from the provided hero design */
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

/* ==========================================================================
   Hero container: scales fluidly with viewport width. Kept from the
   provided hero design, unchanged.
   ========================================================================== */
.max-w-7xl {
    max-width: clamp(320px, 94vw, 1500px) !important;
}

.monitor-frame {
    max-width: 650px;
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

    .monitor-frame {
        max-width: 900px;
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