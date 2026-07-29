<template>
    <section :class="[
        'py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8 lg:py-24 lg:px-6 xl:py-28 relative z-20 overflow-hidden'
    ]">
        <canvas ref="trustCanvas" class="trust-network-canvas" aria-hidden="true"></canvas>

        <div class="max-w-7xl mx-auto relative z-10">
            <h2 :class="[
                'text-center text-xs sm:text-sm font-bold tracking-widest uppercase mb-10 sm:mb-12 md:mb-16 xl:mb-20',
                isDarkMode ? 'text-neutral-500' : 'text-neutral-400'
            ]">
                Trusted By Startups & Growing Businesses
            </h2>
            <div ref="counterContainer"
                class="stats-grid grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 sm:gap-8 md:gap-10 lg:gap-8 xl:gap-12 text-center">
                <div v-for="(stat, idx) in stats" :key="idx" class="space-y-1 sm:space-y-2">
                    <div
                        :class="['stat-number text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight', isDarkMode ? 'text-white' : 'text-black']">
                        <span class="trust-counter" :data-target="stat.value">0</span>{{ stat.suffix }}
                    </div>
                    <p :class="[
                        'stat-label text-xs sm:text-sm md:text-base xl:text-lg font-medium tracking-wide uppercase whitespace-nowrap',
                        isDarkMode ? 'text-neutral-400' : 'text-neutral-500'
                    ]">{{ stat.label }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject, computed } from 'vue'
import { gsap } from 'gsap'

// Accept an explicit :darkMode prop, falling back to inject() so this
// component still works on pages using the provide() pattern instead.
const props = defineProps({
    darkMode: { type: Boolean, default: undefined }
})

const injectedIsDarkMode = inject('isDarkMode', ref(true))

const isDarkMode = computed(() =>
    props.darkMode !== undefined ? props.darkMode : injectedIsDarkMode.value
)

const counterContainer = ref(null)
const stats = [
    { value: 20, suffix: '+', label: 'Years in Web Development' },
    { value: 150, suffix: '+', label: 'Projects Delivered' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 24, suffix: 'h', label: 'Average Proposal Turnaround' }
]

// --- Neuron / molecule style network animation (canvas + GSAP ticker), same approach as the Home.vue hero ---
const trustCanvas = ref(null)

let ctx = null
let nodes = []
let canvasWidth = 0
let canvasHeight = 0
let dpr = 1
let networkTicker = null

const NODE_COUNT = 26
const LINK_DISTANCE = 110

const getAccentRgb = () => {
    const el = trustCanvas.value || document.documentElement
    const hex = getComputedStyle(el).getPropertyValue('--brand-accent').trim() || '#00ffa3'
    const clean = hex.replace('#', '')
    const bigint = parseInt(clean, 16)
    return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255 }
}

const resizeTrustCanvas = () => {
    if (!trustCanvas.value) return
    const parent = trustCanvas.value.parentElement
    dpr = window.devicePixelRatio || 1
    canvasWidth = parent.clientWidth
    canvasHeight = parent.clientHeight
    trustCanvas.value.width = canvasWidth * dpr
    trustCanvas.value.height = canvasHeight * dpr
    trustCanvas.value.style.width = canvasWidth + 'px'
    trustCanvas.value.style.height = canvasHeight + 'px'
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

const createTrustNodes = () => {
    nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * canvasWidth,
        y: Math.random() * canvasHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.3 + 1.2
    }))
}

const drawTrustNetwork = () => {
    if (!ctx || canvasWidth === 0) return
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)
    const { r, g, b } = getAccentRgb()

    nodes.forEach((node) => {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > canvasWidth) node.vx *= -1
        if (node.y < 0 || node.y > canvasHeight) node.vy *= -1
    })

    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            const dx = nodes[i].x - nodes[j].x
            const dy = nodes[i].y - nodes[j].y
            const dist = Math.sqrt(dx * dx + dy * dy)
            if (dist < LINK_DISTANCE) {
                const opacity = (1 - dist / LINK_DISTANCE) * 0.25
                ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`
                ctx.lineWidth = 1
                ctx.beginPath()
                ctx.moveTo(nodes[i].x, nodes[i].y)
                ctx.lineTo(nodes[j].x, nodes[j].y)
                ctx.stroke()
            }
        }
    }

    nodes.forEach((node) => {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, 0.7)`
        ctx.fill()
    })
}

const initTrustNetwork = () => {
    if (!trustCanvas.value) return
    ctx = trustCanvas.value.getContext('2d')
    resizeTrustCanvas()
    createTrustNodes()
    networkTicker = () => drawTrustNetwork()
    gsap.ticker.add(networkTicker)
}

const handleTrustResize = () => {
    resizeTrustCanvas()
    createTrustNodes()
}
// --- end network animation ---

onMounted(() => {
    const trustCounters = document.querySelectorAll('.trust-counter')
    trustCounters.forEach((counter) => {
        const targetVal = parseInt(counter.getAttribute('data-target'), 10)
        gsap.fromTo(counter, { textContent: 0 }, {
            textContent: targetVal,
            duration: 2.5,
            ease: 'power3.out',
            snap: { textContent: 1 },
            scrollTrigger: { trigger: counterContainer.value, start: 'top 85%' }
        })
    })

    initTrustNetwork()
    window.addEventListener('resize', handleTrustResize)
})

onUnmounted(() => {
    window.removeEventListener('resize', handleTrustResize)
    if (networkTicker) gsap.ticker.remove(networkTicker)
})
</script>

<style scoped>
.trust-network-canvas {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
}

/* Outer content container: scales fluidly with viewport width instead of
   jumping between fixed breakpoint values. Overrides Tailwind's max-w-7xl.
   !important guarantees this wins even if the project's global Tailwind
   stylesheet happens to load after this component's scoped styles. */
.max-w-7xl {
    max-width: clamp(320px, 94vw, 1600px) !important;
}

/* ==========================================================================
   Fine-tuned breakpoints beyond Tailwind's defaults, to exactly match the
   requested device ranges. These layer on top of the Tailwind classes above.
   ========================================================================== */

/* Mobile Portrait: 320px — 480px (extra tight spacing on the smallest phones) */
@media (max-width: 380px) {
    .trust-network-canvas {
        opacity: 0.6;
    }
}

/* Laptops / Large Tablets: 992px — 1024px
   Tailwind's md (768px) already flips to 4 columns; nudge gaps a touch
   wider as we approach the 1024px upper edge of this range. */
@media (min-width: 992px) and (max-width: 1024px) {
    .trust-network-canvas {
        opacity: 0.85;
    }
}

/* Extra Large Screens / TVs: 1536px and up — give the whole section more
   breathing room so the stats don't look small on huge displays. */
@media (min-width: 1536px) {
    section.overflow-hidden {
        padding-top: 7rem;
        padding-bottom: 7rem;
    }
}

/* Very Large Desktops / Big TVs: 1920px and up — keeps scaling instead of
   plateauing at 1536px, so numbers stay legible relative to a much larger
   viewport / viewing distance. */
@media (min-width: 1920px) {
    section.overflow-hidden {
        padding-top: 8rem;
        padding-bottom: 8rem;
    }

    .stat-number {
        font-size: 4.5rem;
    }

    .stat-label {
        font-size: 1.25rem;
    }
}

/* 4K / Extra-Extra-Large Monitors: 2560px and up — real 4K displays (or
   27"+ high-res laptop panels) render content physically small at
   1920px-tier sizing. This tier keeps the container, padding, and stat
   numbers growing proportionally instead of looking undersized. */
@media (min-width: 2560px) {
    section.overflow-hidden {
        padding-top: 9rem;
        padding-bottom: 9rem;
    }

    .max-w-7xl {
        max-width: 2200px !important;
    }

    .stat-number {
        font-size: 5.25rem;
    }

    .stat-label {
        font-size: 1.4rem;
    }

    .stats-grid {
        gap: 3.5rem;
    }
}
</style>