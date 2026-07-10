<template>
  <!-- PROJECT SECTION -->
  <section
    :class="[
      'py-32 px-6 border-b relative z-20',
      isDarkMode ? 'border-neutral-900 bg-black text-white' : 'border-neutral-200 bg-white text-black'
    ]"
  >
    <div class="max-w-7xl mx-auto">

      <!--
        Example heading pattern used across the other Netsuite sections:

        <h2 :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-20', isDarkMode ? 'text-white' : 'text-black']">
          Your Heading <span class="text-[#00ffa3]">Highlighted Part</span>
        </h2>
      -->

      <!--
        Example content grid pattern (with a template ref for the stagger-reveal
        animation below) — swap sectionItems for your real data array:

        <div ref="sectionGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="(item, idx) in sectionItems"
            :key="idx"
            :class="[
              'border rounded-xl p-6 transition-all duration-300',
              isDarkMode
                ? 'bg-neutral-950 border-neutral-900'
                : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70'
            ]"
          >
            <h3 :class="['text-lg font-bold mb-2', isDarkMode ? 'text-white' : 'text-black']">{{ item.title }}</h3>
            <p :class="['text-sm leading-relaxed', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">{{ item.description }}</p>
          </div>
        </div>
      -->

      <div ref="sectionGrid"></div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Injected from the parent page's provide() — same pattern as every
// other Netsuite*Section component
const isDarkMode = inject('isDarkMode', ref(true))

// Template ref for whatever grid/list you build inside this section.
// Used below for the scroll-triggered reveal animation, scoped to this
// component's own container so it never touches elements from other
// sections on the page.
const sectionGrid = ref(null)

// Replace with your real content array once you have it, e.g.:
// const sectionItems = [
//   { title: 'Example Title', description: 'Example description text.' },
// ]

let triggers = []

onMounted(() => {
  // Standard stagger-reveal for direct children of sectionGrid, matching
  // the pattern used in NetsuiteIndustriesSection / NetsuiteMetricsSection etc.
  // Safe to leave in place even before content exists — it will simply
  // animate zero children until sectionGrid has items in it.
  if (sectionGrid.value && sectionGrid.value.children.length) {
    const anim = gsap.fromTo(sectionGrid.value.children, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
      scrollTrigger: { trigger: sectionGrid.value, start: 'top 85%' }
    })
    if (anim.scrollTrigger) triggers.push(anim.scrollTrigger)
  }
})

onUnmounted(() => {
  triggers.forEach(t => t.kill())
})
</script>