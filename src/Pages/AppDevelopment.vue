<template>
  <div ref="pageContainer" class="bg-[#000000] text-[#FFFFFF] font-sans relative overflow-hidden selection:bg-[#00ffa3] selection:text-[#000000]">
    
    <div 
      class="pointer-events-none fixed inset-0 z-10 opacity-25 transition-opacity duration-300 will-change-transform"
      :style="{ background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, rgba(0, 255, 163, 0.12), transparent 80%)` }"
    ></div>

    <AppComponent1 :phone-rotation="phoneRotation" />
    <AppComponent2 />
    <AppComponent3 />
    <AppComponent4 />
    <AppComponent5 />
    <AppComponent6 />
    <AppComponent7 />
    <AppComponent8 />
    <AppComponent9 />
    <AppComponent10 />
    <AppComponent11 />
    <AppComponent12 />
    <Footer />

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Go up one level (../) out of Pages, then into components/
import AppComponent1 from '../components/AppComponent1.vue'
import AppComponent2 from '../components/AppComponent2.vue'
import AppComponent3 from '../components/AppComponent3.vue'
import AppComponent4 from '../components/AppComponent4.vue'
import AppComponent5 from '../components/AppComponent5.vue'
import AppComponent6 from '../components/AppComponent6.vue'
import AppComponent7 from '../components/AppComponent7.vue'
import AppComponent8 from '../components/AppComponent8.vue'
import AppComponent9 from '../components/AppComponent9.vue'
import AppComponent10 from '../components/AppComponent10.vue'
import AppComponent11 from '../components/AppComponent11.vue'
import AppComponent12 from '../components/AppComponent12.vue'
import Footer from '../components/footer.vue'

gsap.registerPlugin(ScrollTrigger)

const pageContainer = ref(null)
const mouse = reactive({ x: 0, y: 0 })
const phoneRotation = reactive({ x: 0, y: 0 })
let rafId = null

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

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(rafId)
  ScrollTrigger.getAll().forEach(trigger => trigger.kill())
})
</script>