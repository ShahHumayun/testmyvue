<template>
  <section
    :class="[
      'py-32 px-6 border-b relative z-20 transition-colors duration-500',
      isDarkMode ? 'border-neutral-900 theme-dark' : 'border-neutral-200 theme-light'
    ]"
  >
    <div class="max-w-7xl mx-auto">
      <h2 :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-6', isDarkMode ? 'text-white' : 'text-black']">
        Ready To Simplify Your <span class="accent-text">NetSuite Integration?</span>
      </h2>
      <p :class="['text-center max-w-2xl mx-auto text-sm md:text-base mb-20', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
        Whether you're connecting Magento, automating order flows, or unifying your entire commerce stack — our team is ready to build it with you.
      </p>

      <div ref="ctaTargetGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <router-link
          v-for="(cta, i) in ctaPaths"
          :key="i"
          :to="cta.link"
          :class="[
            'border rounded-lg p-6 transition-all duration-300 group hover:border-[var(--accent-color)]/40 block',
            isDarkMode
              ? 'bg-neutral-950 border-neutral-900 hover:bg-neutral-900/60'
              : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70'
          ]"
        >
          <h3 :class="['text-lg font-bold group-hover:text-[var(--accent-color)] transition-colors mb-2', isDarkMode ? 'text-white' : 'text-black']">
            {{ cta.title }}
          </h3>
          <p :class="['text-xs leading-relaxed font-mono mb-4', isDarkMode ? 'text-neutral-500' : 'text-neutral-600']">
            {{ cta.description }}
          </p>
          <span class="text-xs font-mono uppercase tracking-wider accent-text group-hover:translate-x-1 transition-transform inline-block">
            {{ cta.action }} →
          </span>
        </router-link>
      </div>

      <div class="text-center mt-16">
        <router-link
          to="/consultation"
          class="inline-block px-10 py-4 bg-[var(--accent-color)] text-[#000000] font-bold text-sm uppercase tracking-wider rounded border border-[var(--accent-color)] hover:bg-transparent hover:text-[var(--accent-color)] transition-all duration-300 shadow-[0_0_25px_rgba(var(--accent-rgb),0.15)]"
        >
          Schedule A Consultation
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const isDarkMode = inject('isDarkMode', ref(true))
const ctaTargetGrid = ref(null)

const ctaPaths = [
  {
    title: 'Schedule A Free Consultation',
    description: 'Walk through your current systems with an integration specialist and map out the fastest path to a synced NetSuite and Magento stack.',
    action: 'Book A Call',
    link: '/consultation'
  },
  {
    title: 'Get A Custom Integration Quote',
    description: 'Receive tailored pricing based on your data volume, existing platforms, and the complexity of your NetSuite integration requirements.',
    action: 'Request Pricing',
    link: '/consultation'
  },
  {
    title: 'Talk To Our NetSuite Experts',
    description: 'Connect directly with the engineers who have delivered dozens of NetSuite integrations across ecommerce, retail, and distribution.',
    action: 'Start A Conversation',
    link: '/consultation'
  }
]

let scrollTriggerInstance = null

onMounted(() => {
  const anim = gsap.fromTo(ctaTargetGrid.value.children, { opacity: 0, y: 20 }, {
    opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out',
    scrollTrigger: { trigger: ctaTargetGrid.value, start: 'top 85%' }
  })
  scrollTriggerInstance = anim.scrollTrigger
})

onUnmounted(() => {
  if (scrollTriggerInstance) scrollTriggerInstance.kill()
})
</script>

<style scoped>
.theme-dark { --accent-color: #00ffa3; --accent-rgb: 0, 255, 163; }
.theme-light { --accent-color: #f97316; --accent-rgb: 249, 115, 22; }

.accent-text { color: var(--accent-color); }
</style>