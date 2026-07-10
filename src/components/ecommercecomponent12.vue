<template>
  <section :class="['testimonials-section py-32 px-6 border-b relative z-20 transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-4xl mx-auto text-center space-y-12">
      <h2 class="text-sm font-bold tracking-widest text-[#00ffa3] uppercase">Trusted By Ecommerce Brands</h2>
      
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

// Inject global theme state context seamlessly
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
/* ── Encapsulated Visual Protection Boundaries ── */
.theme-dark {
  background: linear-gradient(to bottom, #000000, #0a0a0a, #000000) !important;
  border-color: #171717 !important; /* border-neutral-900 equivalent */
  --text-quote: #ffffff;
  --dot-bg: #262626; /* bg-neutral-800 equivalent */
}

.theme-light {
  background: #ffffff !important; /* Overrides gradient to solid white background */
  border-color: #e2e8f0 !important; /* border-slate-200 equivalent */
  --text-quote: #000000; /* requested text to black */
  --dot-bg: #cbd5e1; /* slate-300 equivalent */
}

/* ── Explicit Selector Rule Mappings ── */
.testimonials-section {
  width: 100% !important;
}

.quote-text {
  color: var(--text-quote) !important;
  transition: color 0.4s ease;
}

.dot-indicator {
  background-color: var(--dot-bg) !important;
  width: 0.5rem !important; /* w-2 equivalent */
}

.dot-indicator.active-dot {
  background-color: #00ffa3 !important;
  width: 1.5rem !important; /* w-6 equivalent */
}

/* ── Carousel Slide Transition Effects ── */
.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity .4s ease, transform .4s ease;
}
.carousel-fade-enter-from {
  opacity: 0;
  transform: translateY(8px);
}
.carousel-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>