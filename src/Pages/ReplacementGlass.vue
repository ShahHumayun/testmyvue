<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/footer.vue'

// Keeping your exact import names intact
import HeroSection from '../components/ReplacementGlassComponents/HeroSection.vue'
import Overview from '../components/ReplacementGlassComponents/Overview.vue'
import TechStack from '../components/ReplacementGlassComponents/TechStack.vue'
import Features from '../components/ReplacementGlassComponents/Features.vue'
import ProjectGallery from '../components/ReplacementGlassComponents/ProjectGallery.vue'
import ResultSection from '../components/ReplacementGlassComponents/ResultSection.vue'

// --- Mock Data Structures for Props ---
// These supply data to the components we built so they don't break or render empty arrays.
const projectStats = [
  { label: 'E-Commerce Funnel Steps', value: '3 Steps' },
  { label: 'Asset Payload Reduction', value: '42%' },
  { label: 'Mobile Core Web Vitals', value: '98/100' }
]

const techTags = ['Vue 3', 'Vite', 'Tailwind CSS', 'GSAP Animations', 'JavaScript']

const coreFeatures = [
  { title: 'Custom Glass Configurator', detail: 'An interactive, step-by-step layout wizard tailored to input exact shape specifications cleanly.' },
  { title: 'Instant Quote Engine', detail: 'Calculates dimension adjustments and structural properties on-the-fly inside the client frontend.' }
]

const galleryImages = [
  'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=1200'
]

const projectChallenges = {
  problem: 'Handling variable dimensional matrices dynamically without compounding heavy rendering overhead or complex layout shifts on budget viewports.',
  solution: 'Engineered clean utility grids that handle isolated dynamic prop updates on sub-components using lightweight Vue reactive states.'
}

const processSteps = [
  { phase: '01. System Layout', detail: 'Structuring layout grids and implementing strict scoping across deep component wrappers.' },
  { phase: '02. Optimization', detail: 'Refining animation cycles using lightweight scroll trigger timelines to preserve frames.' }
]
</script>

<template>
  <Header />

  <main>
    <HeroSection />
    
    <Overview />

    
    
    
    
    <TechStack :tags="techTags" />
    
    <Features :features="coreFeatures" />
    
    <ProjectGallery :images="galleryImages" />

    <ResultSection />
    </main>

  <Footer />
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  gap: 6rem; /* Space between sections */
  background-color: #000000; /* Assures seamless dark aesthetic blending */
}
</style>