<template>
  <div ref="pageContainer" class="bg-[#000000] text-[#FFFFFF] font-sans relative overflow-hidden selection:bg-[#00ffa3] selection:text-[#000000]">
    
    <div 
      class="pointer-events-none fixed inset-0 z-10 opacity-25 transition-opacity duration-300 will-change-transform"
      :style="{ background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, rgba(0, 255, 163, 0.12), transparent 80%)` }"
    ></div>

   <ecommercecomponent1 />
    <ecommercecomponent2 />
     <ecommercecomponent3 />
      <ecommercecomponent4 />
      <ecommercecomponent5 />
      <ecommercecomponent6 />
      <ecommercecomponent7 />
      <ecommercecomponent8 />
      <ecommercecomponent9 />
      <ecommercecomponent10 />
      <ecommercecomponent11 />
      <ecommercecomponent12 />
      <ecommercecomponent13 />
      <ecommercecomponent14/>
      <ecommercecomponent15 />
      <ecommercecomponent16 />

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import ecommercecomponent1 from '../components/ecommercecomponent1.vue'
import ecommercecomponent2 from '../components/ecommercecomponent2.vue'
import ecommercecomponent3 from '../components/ecommercecomponent3.vue'
import ecommercecomponent4 from '../components/ecommercecomponent4.vue'
import ecommercecomponent5 from '../components/ecommercecomponent5.vue'
import ecommercecomponent6 from '../components/ecommercecomponent6.vue'
import ecommercecomponent7 from '../components/ecommercecomponent7.vue'
import ecommercecomponent8 from '../components/ecommercecomponent8.vue'
import ecommercecomponent9 from '../components/ecommercecomponent9.vue'
import ecommercecomponent10 from '../components/ecommercecomponent10.vue'
import ecommercecomponent11 from '../components/ecommercecomponent11.vue'
import ecommercecomponent12 from '../components/ecommercecomponent12.vue'
import ecommercecomponent13 from '../components/ecommercecomponent13.vue'
import ecommercecomponent14 from '../components/ecommercecomponent14.vue'
import ecommercecomponent15 from '../components/ecommercecomponent15.vue'
import ecommercecomponent16 from '../components/ecommercecomponent16.vue'


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
