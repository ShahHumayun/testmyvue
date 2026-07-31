<template>
  <section :class="[
    'testimonials-section py-32 px-6 border-b relative z-20 transition-colors duration-500',
    isDarkMode ? 'border-neutral-800 bg-[#1c1c1c] theme-dark' : 'border-neutral-200 bg-[#f2f2f2] theme-light'
  ]">
    <div class="max-w-5xl mx-auto text-center space-y-12 testimonials-container-wrapper">

      <h2
        :class="['text-3xl md:text-4xl font-bold testimonials-main-heading', isDarkMode ? 'text-white' : 'text-black']">
        Words from Our Satisfied Clients</h2>

      <div class="relative min-h-[250px] flex items-center justify-center testimonials-content-box">
        <transition name="carousel-fade" mode="out-in">
          <div :key="active" class="space-y-6 max-w-3xl">
            <blockquote
              :class="['text-lg md:text-xl font-medium leading-relaxed italic testimonials-quote-text', isDarkMode ? 'text-neutral-300' : 'text-neutral-700']">
              "{{ testimonials[active].quote }}"
            </blockquote>
            <p class="accent-text font-bold text-sm tracking-wide testimonials-name-text">
              {{ testimonials[active].name }}
            </p>
          </div>
        </transition>
      </div>

      <div class="flex justify-center gap-2">
        <button v-for="(_, idx) in testimonials" :key="idx" @click="setActive(idx)"
          class="h-2 rounded-full transition-all duration-300 testimonials-dot-btn"
          :class="active === idx ? 'bg-[var(--accent-color)] w-8' : (isDarkMode ? 'bg-neutral-700 w-2' : 'bg-neutral-300 w-2')" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'

const isDarkMode = inject('isDarkMode', ref(true))

const testimonials = [
  {
    quote: 'We recently integrated NetSuite with Magento, and the results have been fantastic. The setup process was straightforward, and the data synchronization is seamless. Our inventory management has improved significantly, and our sales team can access real-time data without any hassle. Highly recommend this integration!',
    name: 'Sarah J., E-commerce Manager'
  },
  {
    quote: 'The integration between NetSuite and Magento has significantly streamlined our operations. The automated workflows have greatly improved efficiency, and the tool has been running smoothly since implementation. Overall, it’s a powerful solution that has made our processes much more efficient.',
    name: 'Mark T., Operations Director'
  },
  {
    quote: 'The integration offers great functionality and has been a valuable tool for our IT processes. Once configured, it ran seamlessly and has significantly improved our workflow. The system is efficient and has proven to be a reliable solution for our needs.',
    name: 'Lisa M., IT Specialist'
  },
  {
    quote: 'The NetSuite-Magento integration works flawlessly and has greatly improved our workflow. Usama\'s support was exceptional—quick, efficient, and always on point. The team’s dedication made the process seamless and stress-free. Highly recommend!',
    name: 'Emily R., IT Manager'
  }
]

const active = ref(0)
let timer = null

const setActive = (idx) => {
  active.value = idx
  resetTimer()
}

const resetTimer = () => {
  clearInterval(timer)
  timer = setInterval(() => { active.value = (active.value + 1) % testimonials.length }, 6000)
}

onMounted(() => resetTimer())
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.theme-dark {
  --accent-color: #00ffa3;
}

.theme-light {
  --accent-color: #f97316;
}

.accent-text {
  color: var(--accent-color);
}

.carousel-fade-enter-active,
.carousel-fade-leave-active {
  transition: opacity .5s ease, transform .5s ease
}

.carousel-fade-enter-from {
  opacity: 0;
  transform: translateY(15px)
}

.carousel-fade-leave-to {
  opacity: 0;
  transform: translateY(-15px)
}

.testimonials-section {
  width: 100% !important;
  max-width: 100% !important;
  padding-left: clamp(2rem, 5vw, 12rem);
  padding-right: clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
}

.testimonials-container-wrapper,
.max-w-5xl {
  max-width: 100% !important;
}

.testimonials-main-heading {
  font-size: clamp(1.8rem, 3.5vw, 3.5rem);
}

.testimonials-quote-text {
  font-size: clamp(1rem, 1.4vw, 1.5rem);
}

.testimonials-name-text {
  font-size: clamp(0.8rem, 1vw, 1.1rem);
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .testimonials-section {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .testimonials-main-heading {
    font-size: 2.6rem;
  }

  .testimonials-quote-text {
    font-size: 1.25rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .testimonials-section {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .testimonials-main-heading {
    font-size: 3.2rem;
  }

  .testimonials-quote-text {
    font-size: 1.35rem;
  }
}

@media (min-width: 1536px) {
  .testimonials-section {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .testimonials-main-heading {
    font-size: 3.8rem;
  }

  .testimonials-quote-text {
    font-size: 1.5rem;
  }
}

/* ---------- 4K / UHD / large TVs — 1921px and up ---------- */
@media (min-width: 1921px) {
  .testimonials-section {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .testimonials-main-heading {
    font-size: 4.5rem;
  }

  .testimonials-quote-text {
    font-size: 1.8rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .testimonials-section {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .testimonials-main-heading {
    font-size: 2.3rem;
  }

  .testimonials-quote-text {
    font-size: 1.15rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .testimonials-section {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  .testimonials-main-heading {
    font-size: 2rem;
  }

  .testimonials-quote-text {
    font-size: 1.05rem;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .testimonials-section {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  .testimonials-main-heading {
    font-size: 1.6rem;
  }

  .testimonials-quote-text {
    font-size: 0.95rem;
  }

  .testimonials-content-box {
    min-height: 200px;
  }
}

@media (max-width: 360px) {
  .testimonials-section {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .testimonials-main-heading {
    font-size: 1.45rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .testimonials-section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
</style>