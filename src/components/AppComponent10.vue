<template>
  <section :class="['testimonial-section py-32 px-6 border-b relative z-20 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-4xl mx-auto text-center space-y-12">
      <h2 class="text-sm font-semibold tracking-widest text-[#00ffa3] uppercase testimonial-eyebrow">
        What Clients Say
      </h2>
      
      <div class="relative min-h-[160px] flex items-center justify-center">
        <transition name="fade-carousel" mode="out-in">
          <blockquote :key="currentTestimonial" class="text-xl md:text-3xl font-medium tracking-tight leading-relaxed italic max-w-3xl testimonial-quote">
            "{{ testimonials[currentTestimonial].quote }}"
            <cite class="block text-xs font-mono tracking-widest uppercase not-italic mt-6 testimonial-author">
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
          :class="['indicator-dot transition-all duration-300', currentTestimonial === tIdx ? 'indicator-dot--active' : '']"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'

// Inject the shared site theme preference seamlessly
const isDarkMode = inject('isDarkMode', ref(true))

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
/* Encapsulated Visual Protection Framework */
.theme-dark {
  background: linear-gradient(to bottom, #000000, #0a0a0a, #000000) !important;
  border-color: #171717 !important; /* border-neutral-900 equivalent */
  --quote-color: #ffffff;
  --author-color: #737373; /* text-neutral-500 */
  --dot-bg: #262626; /* text-neutral-800 */
}

.theme-light {
  background: linear-gradient(to bottom, #ffffff, #f8fafc, #ffffff) !important;
  border-color: #e2e8f0 !important; /* border-slate-200 equivalent */
  --quote-color: #0f172a; /* text-slate-900 */
  --author-color: #64748b; /* text-slate-500 */
  --dot-bg: #cbd5e1; /* text-slate-300 */
}

/* Strict Override Selectors */
.testimonial-eyebrow {
  color: #00ffa3 !important;
}

.testimonial-quote {
  color: var(--quote-color) !important;
  transition: color 0.4s ease;
}

.testimonial-author {
  color: var(--author-color) !important;
  transition: color 0.4s ease;
}

.indicator-dot {
  width: 8px !important;
  height: 8px !important;
  border-radius: 9999px !important;
  border: none !important;
  cursor: pointer !important;
  background-color: var(--dot-bg) !important;
  transition: background-color 0.3s ease, width 0.3s ease;
}

.indicator-dot--active {
  background-color: #00ffa3 !important;
  width: 24px !important; /* w-6 equivalent */
}

/* Carousel Animations */
.fade-carousel-enter-active, .fade-carousel-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}
.fade-carousel-enter-from { opacity: 0; transform: translateY(10px); }
.fade-carousel-leave-to { opacity: 0; transform: translateY(-10px); }
</style>