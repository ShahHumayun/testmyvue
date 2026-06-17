<template>
  <div class="pointer-events-none fixed inset-0 z-10 opacity-25 transition-opacity duration-300 will-change-transform"
    :style="{ background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(0,255,163,0.15), transparent 80%)` }" />
</template>

<script setup>
import { reactive, onMounted, onUnmounted } from 'vue'
const mouse = reactive({ x: 0, y: 0 })
const onMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY }
onMounted(() => window.addEventListener('mousemove', onMove))
onUnmounted(() => window.removeEventListener('mousemove', onMove))
</script>
