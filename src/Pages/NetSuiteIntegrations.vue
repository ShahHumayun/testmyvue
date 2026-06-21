<template>
  <div ref="pageWrapper" class="bg-[#000000] text-[#FFFFFF] font-sans relative overflow-hidden selection:bg-[#00ffa3] selection:text-[#000000]">

    <!-- Real-time Enterprise Interactive Network Background Dynamic Mesh -->
    <div
      class="pointer-events-none fixed inset-0 z-10 opacity-30 transition-opacity duration-500"
      :style="{ background: `radial-gradient(800px circle at ${pointer.x}px ${pointer.y}px, rgba(0,255,163,0.12), transparent 75%)` }"
    ></div>
     <Header /><br>
    <NetsuiteHeroSection />
    <NetsuiteTrustSection />
    <NetsuiteWhatisSection />
    <NetsuiteServicesSection />
    <NetsuitePlaformSection />
    <NetsuiteWhyChooseSection />
    <NetsuiteProcessSection />
    <NetsuiteChallengeSection />
    <NetsuiteAutomationSection />
    <NetsuiteIndustriesSection />
    <NetsuiteMetricsSection />
    <NetsuiteReviewsSection />
    <NetsuiteTechStackSection />
    <NetsuiteFAQSection />
    <NetsuiteSeoContentSection />
    <NetsuiteFinalCtaSection />
    <Footer />




    

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

import Header from '../components/Header.vue'
import NetsuiteHeroSection from '../components/NetsuiteHeroSection.vue'
import NetsuiteTrustSection from '../components/NetsuiteTrustSection.vue'
import NetsuiteWhatisSection from '../components/NetsuiteWhatisSection.vue'
import NetsuiteServicesSection from '../components/NetsuiteServicesSection.vue'
import NetsuitePlaformSection from '../components/NetsuitePlatformSection.vue'
import NetsuiteWhyChooseSection from '../components/NetsuiteWhyChooseSection.vue'
import NetsuiteProcessSection from '../components/NetsuiteProcessSection.vue'
import NetsuiteChallengeSection from '../components/NetsuiteChallengeSection.vue'
import NetsuiteAutomationSection from '../components/NetsuiteAutomationSection.vue'
import NetsuiteIndustriesSection from '../components/NetsuiteIndustriesSection.vue'
import NetsuiteMetricsSection from '../components/NetsuiteMetricsSection.vue'
import NetsuiteReviewsSection from '../components/NetsuiteReviewsSection.vue'
import NetsuiteTechStackSection from '../components/NetsuiteTechStackSection.vue'
import NetsuiteFAQSection from '../components/NetsuiteFAQSection.vue'
import NetsuiteSeoContentSection from '../components/NetsuiteSeoContentSection.vue'
import NetsuiteFinalCtaSection from '../components/NetsuiteFinalCtaSection.vue'
import Footer from '../components/footer.vue'


// Page-level identity ref (kept for parity with the original single-file markup;
// not currently targeted by any animation)
const pageWrapper = ref(null)

// Page-level pointer tracking, used by the fixed background mesh that sits
// above every section. This stays here rather than in a single section
// because it is a full-viewport effect, not tied to any one section.
const pointer = reactive({ x: 0, y: 0 })
let pointerRaf = null

const handlePointerMove = (e) => {
  if (!pointerRaf) {
    pointerRaf = requestAnimationFrame(() => {
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointerRaf = null
    })
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handlePointerMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handlePointerMove)
  cancelAnimationFrame(pointerRaf)
})
</script>