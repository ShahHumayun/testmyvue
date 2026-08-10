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

        <div class="w-full max-w-full">
            <ShopifyComponent1 :isDarkMode="isDarkMode" @navigate="navigateToConsultation" />
        </div>
        <div class="w-full max-w-full">
            <ShopifyComponent2 :isDarkMode="isDarkMode" />
        </div>
        <div class="w-full max-w-full">
            <ShopifyComponent3 :isDarkMode="isDarkMode" />
        </div>
        <div class="w-full max-w-full">
            <ShopifyComponent4 :isDarkMode="isDarkMode" />
        </div>
       <div class="w-full max-w-full">
            <NetsuiteInShopify :isDarkMode="isDarkMode" />
        </div>

        <div class="w-full max-w-full">
            <ShopifyComponent5 :isDarkMode="isDarkMode" />
        </div>
        <div class="w-full max-w-full">
            <ShopifyComponent6 :isDarkMode="isDarkMode" />
        </div>
        <div class="w-full max-w-full">
            <ShopifyComponent7 :isDarkMode="isDarkMode" />
        </div>
        <div class="w-full max-w-full">
            <ShopifyComponent8 :isDarkMode="isDarkMode" />
        </div>

        <div class="w-full max-w-full">
            <ShopifyComponent9 :isDarkMode="isDarkMode" @navigate="navigateToConsultation" />
        </div>
        <div class="w-full max-w-full">
            <footer-component />
        </div>

    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, reactive, provide } from 'vue'
import { useRouter } from 'vue-router'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Header from '../components/Header.vue'
import ShopifyComponent1 from '../components/ShopifyComponents/ShopifyComponent1.vue'
import ShopifyComponent2 from '../components/ShopifyComponents/ShopifyComponent2.vue'
import ShopifyComponent3 from '../components/ShopifyComponents/ShopifyComponent3.vue'
import ShopifyComponent4 from '../components/ShopifyComponents/ShopifyComponent4.vue'
import NetsuiteInShopify from '../components/ShopifyComponents/NetsuiteInShopify.vue'
import ShopifyComponent5 from '../components/ShopifyComponents/ShopifyComponent5.vue'
import ShopifyComponent6 from '../components/ShopifyComponents/ShopifyComponent6.vue'
import ShopifyComponent7 from '../components/ShopifyComponents/ShopifyComponent7.vue'
import ShopifyComponent8 from '../components/ShopifyComponents/ShopifyComponent8.vue'
import ShopifyComponent9 from '../components/ShopifyComponents/ShopifyComponent9.vue'

import FooterComponent from '../components/footer.vue'

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
</script>

<style>
.will-change-transform {
    will-change: transform;
}
</style>