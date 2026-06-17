<template>
  <div ref="pageContainer" class="bg-[#000000] text-[#ffffff] font-sans relative overflow-hidden selection:bg-[#00ffa3] selection:text-[#000000]">
    
    <div 
      ref="mouseGlow" 
      class="pointer-events-none fixed inset-0 z-10 opacity-30 transition-opacity duration-300 will-change-transform"
      :style="{ background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(0, 255, 163, 0.15), transparent 80%)` }"
    ></div>

    <webappcomponent1 @navigate="navigateToConsultation" />
    <webappcomponent2 />
    <webappcomponent3 />
    <webappcomponent4 />
    <webappcomponent5 />
    <webappcomponent6 />
    <webappcomponent7 />
    <webappcomponent8 />
    <webappcomponent9 />
    <webappcomponent10 @navigate="navigateToConsultation" />
    <footer-component />

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


import webappcomponent1 from '../components/webappcomponent1.vue'
import webappcomponent2 from '../components/webappcomponent2.vue'
import webappcomponent3 from '../components/webappcomponent3.vue'
import webappcomponent4 from '../components/webappcomponent4.vue'
import webappcomponent5 from '../components/webappcomponent5.vue'
import webappcomponent6 from '../components/webappcomponent6.vue'
import webappcomponent7 from '../components/webappcomponent7.vue'
import webappcomponent8 from '../components/webappcomponent8.vue'
import webappcomponent9 from '../components/webappcomponent9.vue'
import webappcomponent10 from '../components/webappcomponent10.vue'
import FooterComponent from '../components/footer.vue'

const router = useRouter()
const pageContainer = ref(null)
const mouseGlow = ref(null)

const mouse = reactive({ x: 0, y: 0 })
let rafId = null

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
