<template>
  <section class="py-32 px-6 border-b border-neutral-900 bg-gradient-to-b from-black via-neutral-950 to-black relative z-20">
    <div class="max-w-4xl mx-auto text-center space-y-12">
      <h2 class="text-sm font-semibold tracking-widest text-[#00ffa3] uppercase">
        What Clients Say
      </h2>
      
      <div class="relative min-h-[160px] flex items-center justify-center">
        <transition name="fade-carousel" mode="out-in">
          <blockquote :key="currentTestimonial" class="text-xl md:text-3xl font-medium tracking-tight text-white leading-relaxed italic max-w-3xl">
            "{{ testimonials[currentTestimonial].quote }}"
            <cite class="block text-xs font-mono tracking-widest text-neutral-500 uppercase not-italic mt-6">
              — {{ testimonials[currentTestimonial].author }}
            </cite>
          </blockquote>
        </transition>
      </div>

      <div class="flex justify-center gap-2">
        <button 
          v-for="(_, tIdx) in testimonials" 
          :key="tIdx"
          @click="currentTestimonial = tIdx"
          class="w-2 h-2 rounded-full transition-all duration-300"
          :class="currentTestimonial === tIdx ? 'bg-[#00ffa3] w-6' : 'bg-neutral-800'"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const currentTestimonial = ref(0)
let testimonialInterval = null

const testimonials = [
  { quote: 'The team transformed our vision into a seamless mobile experience that our customers love.', author: 'Customer 1' },
  { quote: 'Our mobile application significantly increased user engagement and improved customer satisfaction.', author: 'Customer 2' },
  { quote: 'The development process was smooth, professional, and highly efficient.', author: 'Customer 3' }
]

onMounted(() => {
  testimonialInterval = setInterval(() => {
    currentTestimonial.value = (currentTestimonial.value + 1) % testimonials.length
  }, 5000)
})

onUnmounted(() => {
  clearInterval(testimonialInterval)
})
</script>

<style scoped>
.fade-carousel-enter-active, .fade-carousel-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-carousel-enter-from { opacity: 0; transform: translateY(10px); }
.fade-carousel-leave-to { opacity: 0; transform: translateY(-10px); }
</style>