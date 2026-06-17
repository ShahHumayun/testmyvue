<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-4xl mx-auto text-center space-y-8">
      <h2 class="text-3xl md:text-6xl font-bold tracking-tight">Ready To Build An <span class="text-[#00ffa3]">Ecommerce Store That Sells?</span></h2>
      <p class="text-neutral-400 text-lg max-w-2xl mx-auto">Let's create a powerful ecommerce experience that attracts customers, increases conversions, and drives long-term growth.</p>
      <button class="pulse-glow-btn px-10 py-5 bg-[#00ffa3] text-black font-bold rounded-lg transition-all">Start Your Ecommerce Project</button>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
@keyframes continuousPulse{0%,100%{box-shadow:0 0 25px rgba(0,255,163,.2)}50%{box-shadow:0 0 45px rgba(0,255,163,.5)}}
.pulse-glow-btn{animation:continuousPulse 4s infinite ease-in-out}
.pulse-glow-btn:hover{box-shadow:0 0 55px rgba(0,255,163,.75)}
</style>
