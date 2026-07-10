<template>
  <footer 
    :class="[
      'border-t px-6 py-10 relative z-20 text-center text-xs font-mono tracking-wide transition-colors duration-400',
      isDarkMode 
        ? 'border-neutral-900 bg(#000000) text-neutral-500' 
        : 'border-slate-200 bg-[#ffffff] text-slate-500'
    ]"
  >
    <p>&copy; 2026 WebHive Technologies. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { ref, inject } from 'vue'

// Inject the shared site theme preference seamlessly
const isDarkMode = inject('isDarkMode', ref(true))
</script>