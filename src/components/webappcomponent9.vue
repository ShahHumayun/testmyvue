<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-16 text-center">
        Frequently Asked <span class="text-[#00ffa3]">Questions</span>
      </h2>
      <div ref="faqAccordion" class="space-y-4">
        <div 
          v-for="(item, idx) in faqs" 
          :key="idx" 
          class="bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden transition-colors duration-300"
          :class="{ 'border-neutral-800 bg-neutral-950/80': activeFaq === idx }"
        >
          <button 
            @click="toggleFaq(idx)"
            class="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
          >
            <h3 class="font-bold text-base md:text-lg text-white group-hover:text-[#00ffa3] transition-colors duration-200">
              {{ item.question }}
            </h3>
            <span class="ml-4 flex-shrink-0 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center transition-transform duration-300" :class="{ 'rotate-180 border-[#00ffa3]/30': activeFaq === idx }">
              <svg class="w-3 h-3 text-neutral-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </span>
          </button>
          
          <div 
            class="accordion-drawer"
            :style="{ 
              'grid-template-rows': activeFaq === idx ? '1fr' : '0fr',
              'opacity': activeFaq === idx ? 1 : 0 
            }"
          >
            <div class="drawer-content">
              <p class="text-neutral-400 text-sm md:text-base leading-relaxed border-t border-neutral-900 pt-4">
                {{ item.answer }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const faqAccordion = ref(null)
const activeFaq = ref(null)

const faqs = [
  { question: 'What is web application development?', answer: 'Web application development involves creating secure, browser-accessible systems that allow companies to automate workflows, manage proprietary client datasets, and serve functional utilities globally without desktop software limitations.' },
  { question: 'How much does a custom web application cost?', answer: 'Costs scale proportionately with functional complexity, data API architecture overheads, dynamic portal views, integration scope, and specific performance/scaling requirements.' },
  { question: 'How long does development take?', answer: 'Standard applications typically move from product mapping to active deployment within 4 to 16 weeks, which includes comprehensive testing and staging loops.' },
  { question: 'Do you provide support after launch?', answer: 'Yes, we deliver persistent post-launch DevOps infrastructure engineering, updates, and maintenance agreements keeping systems highly performant and secure.' },
  { question: 'Can you redesign an existing web application?', answer: 'Absolutely. We refactor legacy software into advanced architectures, clean up spaghetti codebases, optimize databases, and completely refresh modern user experiences.' }
]

const toggleFaq = (index) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

onMounted(() => {
  if (faqAccordion.value) {
    gsap.fromTo(faqAccordion.value.children, 
      { opacity: 0, y: -40 }, 
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: faqAccordion.value, start: 'top 85%' }
      }
    )
  }
})
</script>

<style scoped>
/* Modern CSS Grid technique for perfectly smooth top-to-bottom scaling */
.accordion-drawer {
  display: grid;
  transition: grid-template-rows 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.3s ease;
  padding: 0 24px;
}

.drawer-content {
  overflow: hidden;
}

/* Add breathing room at the bottom of the open card drawer container */
.accordion-drawer[style*="grid-template-rows: 1fr"] {
  padding-bottom: 24px;
}
</style>