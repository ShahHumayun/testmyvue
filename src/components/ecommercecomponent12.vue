<template>
  <section :class="['testimonials-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-4xl mx-auto text-center space-y-12">
      <h2 class="text-sm font-bold tracking-widest uppercase accent-text">Trusted By Ecommerce Brands</h2>
      
      <div class="relative min-h-[120px] flex items-center justify-center">
        <transition name="carousel-fade" mode="out-in">
          <blockquote :key="active" class="text-xl md:text-2xl font-medium leading-relaxed italic max-w-2xl quote-text">
            "{{ testimonials[active] }}"
          </blockquote>
        </transition>
      </div>
      
      <div class="flex justify-center gap-1.5">
        <button v-for="(_, idx) in testimonials" :key="idx" @click="active = idx"
          class="h-2 rounded-full transition-all duration-300 dot-indicator"
          :class="{ 'active-dot': active === idx }" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const testimonials = [
  'The team rebuilt our store from the ground up — conversions doubled within a quarter.',
  'Best technical partner we have worked with. Performance is unreal.',
  'They handled our global rollout flawlessly across 12 markets.',
]

const active = ref(0)
let timer

onMounted(() => { 
  timer = setInterval(() => { active.value = (active.value + 1) % testimonials.length }, 5000) 
})

onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.theme-dark {
  background: linear-gradient(to bottom, #000000, #0a0a0a, #000000) !important;
  border-color: #171717 !important;
  --accent-color: #00ffa3;
  --text-quote: #ffffff;
  --dot-bg: #262626;
}

.theme-light {
  background: #ffffff !important;
  border-color: #e2e8f0 !important;
  --accent-color: #f97316;
  --text-quote: #000000;
  --dot-bg: #cbd5e1;
}

.testimonials-section { width: 100% !important; }
.accent-text { color: var(--accent-color) !important; }

.quote-text {
  color: var(--text-quote) !important;
  transition: color 0.4s ease;
}

.dot-indicator {
  background-color: var(--dot-bg) !important;
  width: 0.5rem !important;
}

.dot-indicator.active-dot {
  background-color: var(--accent-color) !important;
  width: 1.5rem !important;
}

.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity .4s ease, transform .4s ease;
}
.carousel-fade-enter-from { opacity: 0; transform: translateY(8px); }
.carousel-fade-leave-to { opacity: 0; transform: translateY(-8px); }
</style>