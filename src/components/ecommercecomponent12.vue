<template>
  <section class="py-32 px-6 border-b border-neutral-900 bg-gradient-to-b from-black via-neutral-950 to-black relative z-20">
    <div class="max-w-4xl mx-auto text-center space-y-12">
      <h2 class="text-sm font-bold tracking-widest text-[#00ffa3] uppercase">Trusted By Ecommerce Brands</h2>
      <div class="relative min-h-[120px] flex items-center justify-center">
        <transition name="carousel-fade" mode="out-in">
          <blockquote :key="active" class="text-xl md:text-2xl font-medium text-white leading-relaxed italic max-w-2xl">
            "{{ testimonials[active] }}"
          </blockquote>
        </transition>
      </div>
      <div class="flex justify-center gap-1.5">
        <button v-for="(_, idx) in testimonials" :key="idx" @click="active = idx"
          class="h-2 rounded-full transition-all duration-300"
          :class="active === idx ? 'bg-[#00ffa3] w-6' : 'bg-neutral-800 w-2'" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const testimonials = [
  'The team rebuilt our store from the ground up — conversions doubled within a quarter.',
  'Best technical partner we have worked with. Performance is unreal.',
  'They handled our global rollout flawlessly across 12 markets.',
]
const active = ref(0)
let timer
onMounted(() => { timer = setInterval(() => { active.value = (active.value + 1) % testimonials.length }, 5000) })
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.carousel-fade-enter-active,.carousel-fade-leave-active{transition:opacity .4s ease,transform .4s ease}
.carousel-fade-enter-from{opacity:0;transform:translateY(8px)}
.carousel-fade-leave-to{opacity:0;transform:translateY(-8px)}
</style>
