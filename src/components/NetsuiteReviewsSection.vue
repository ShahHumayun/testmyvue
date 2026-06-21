<template>
  <section class="py-32 px-6 border-b border-neutral-800 bg-neutral-900 relative z-20">
    <div class="max-w-5xl mx-auto text-center space-y-12">
      
      <h2 class="text-3xl md:text-4xl font-bold text-white">Words from Our Satisfied Clients</h2>
      
      <div class="relative min-h-[250px] flex items-center justify-center">
        <transition name="carousel-fade" mode="out-in">
          <div :key="active" class="space-y-6 max-w-3xl">
            <blockquote class="text-lg md:text-xl font-medium text-neutral-300 leading-relaxed italic">
              "{{ testimonials[active].quote }}"
            </blockquote>
            <p class="text-[#00ffa3] font-bold text-sm tracking-wide">
              {{ testimonials[active].name }}
            </p>
          </div>
        </transition>
      </div>

      <div class="flex justify-center gap-2">
        <button v-for="(_, idx) in testimonials" :key="idx" @click="setActive(idx)"
          class="h-2 rounded-full transition-all duration-300"
          :class="active === idx ? 'bg-[#00ffa3] w-8' : 'bg-neutral-700 w-2'" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

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
.carousel-fade-enter-active, .carousel-fade-leave-active { transition: opacity .5s ease, transform .5s ease }
.carousel-fade-enter-from { opacity: 0; transform: translateY(15px) }
.carousel-fade-leave-to { opacity: 0; transform: translateY(-15px) }
</style>