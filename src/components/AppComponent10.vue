<template>
  <section
    :class="['testimonial-section py-20 px-4 sm:py-24 sm:px-6 md:py-28 md:px-8 lg:py-32 xl:py-36 xl:px-12 2xl:py-40 2xl:px-16 border-b relative z-20 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="testimonial-container mx-auto text-center space-y-8 sm:space-y-10 md:space-y-12">
      <h2 class="testimonial-eyebrow text-xs sm:text-sm xl:text-base font-semibold tracking-widest uppercase">
        What Clients Say
      </h2>

      <div class="testimonial-stage relative flex items-center justify-center">
        <transition name="fade-carousel" mode="out-in">
          <blockquote :key="currentTestimonial"
            class="testimonial-quote text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-medium tracking-tight leading-relaxed italic max-w-3xl">
            "{{ testimonials[currentTestimonial].quote }}"
            <cite
              class="testimonial-author block text-xs xl:text-sm font-mono tracking-widest uppercase not-italic mt-5 sm:mt-6">
              — {{ testimonials[currentTestimonial].author }}
            </cite>
          </blockquote>
        </transition>
      </div>

      <div class="flex justify-center gap-2">
        <button v-for="(_, tIdx) in testimonials" :key="tIdx" @click="currentTestimonial = tIdx"
          :class="['indicator-dot transition-all duration-300', currentTestimonial === tIdx ? 'indicator-dot--active' : '']"></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'

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
.theme-dark {
  background: linear-gradient(to bottom, #000000, #0a0a0a, #000000) !important;
  border-color: #171717 !important;
  --quote-color: #ffffff;
  --author-color: #737373;
  --dot-bg: #262626;
  --accent-color: #00ffa3;
}

.theme-light {
  background: linear-gradient(to bottom, #ffffff, #f8fafc, #ffffff) !important;
  border-color: #e2e8f0 !important;
  --quote-color: #0f172a;
  --author-color: #64748b;
  --dot-bg: #cbd5e1;
  --accent-color: #f97316;
}

.testimonial-eyebrow {
  color: var(--accent-color) !important;
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
  background-color: var(--accent-color) !important;
  width: 24px !important;
}

.fade-carousel-enter-active,
.fade-carousel-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-carousel-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-carousel-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* ==========================================================================
   Outer content container: scales fluidly with viewport width instead of
   jumping between fixed breakpoint values. mx-auto (in the template) keeps
   it centered at every width, from the smallest phone to the largest TV.
   ========================================================================== */
.testimonial-container {
  max-width: clamp(300px, 90vw, 896px);
}

/* Carousel stage — reserves enough height so the quote transition doesn't
   cause a layout jump between testimonials of different lengths. Grows
   alongside the quote text size at each tier below. */
.testimonial-stage {
  min-height: 140px;
}

/* ==========================================================================
   Mobile Landscape / Small Tablets: 576px — 768px
   ========================================================================== */
@media (min-width: 576px) {
  .testimonial-stage {
    min-height: 150px;
  }
}

/* ==========================================================================
   Laptops / Large Tablets: 769px — 1024px
   ========================================================================== */
@media (min-width: 769px) {
  .testimonial-stage {
    min-height: 170px;
  }
}

/* ==========================================================================
   Desktops: 1025px — 1200px
   ========================================================================== */
@media (min-width: 1025px) {
  .testimonial-stage {
    min-height: 190px;
  }
}

/* ==========================================================================
   Extra Large Screens / Desktops / TVs: 1201px and up
   ========================================================================== */
@media (min-width: 1201px) {
  .testimonial-stage {
    min-height: 210px;
  }
}

/* ==========================================================================
   Ultra-wide / Large TVs: 1536px and up
   ========================================================================== */
@media (min-width: 1536px) {
  .testimonial-stage {
    min-height: 230px;
  }
}

/* ==========================================================================
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
  section.testimonial-section {
    padding-left: 0.875rem;
    padding-right: 0.875rem;
  }

  .testimonial-stage {
    min-height: 125px;
  }

  .testimonial-eyebrow {
    font-size: 0.68rem;
  }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Tailwind's own scale tops out at 2xl (1536px), so everything below is
   already handled by the responsive classes above. This tier keeps the
   testimonial container, quote text, and carousel stage growing further
   instead of plateauing at 1536px.
   ========================================================================== */
@media (min-width: 1920px) {
  .testimonial-container {
    max-width: 1050px;
  }

  .testimonial-stage {
    min-height: 250px;
  }

  .testimonial-quote {
    font-size: 3.25rem;
    max-width: 56rem;
  }

  .testimonial-eyebrow {
    font-size: 1.05rem;
  }

  .indicator-dot {
    width: 10px !important;
    height: 10px !important;
  }

  .indicator-dot--active {
    width: 30px !important;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   quote, and indicators growing proportionally instead of looking
   undersized.
   ========================================================================== */
@media (min-width: 2560px) {
  .testimonial-container {
    max-width: 1200px;
  }

  .testimonial-stage {
    min-height: 270px;
  }

  .testimonial-quote {
    font-size: 3.6rem;
    max-width: 62rem;
  }

  .testimonial-eyebrow {
    font-size: 1.15rem;
  }

  .indicator-dot {
    width: 11px !important;
    height: 11px !important;
  }

  .indicator-dot--active {
    width: 34px !important;
  }
}
</style>