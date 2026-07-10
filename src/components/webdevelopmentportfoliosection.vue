<template>
  <section :class="['project-section py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-screen transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">
    
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] dynamic-glow-blur rounded-full pointer-events-none"></div>

    <div class="max-w-4xl mx-auto text-center mb-20 relative z-10 flex flex-col items-center">
      <span class="section-tag font-extrabold tracking-[0.25em] uppercase text-sm mb-6 block">Web App Development</span>
      <h2 class="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight section-title">
        Digital Experiences That <br/>
        <span class="gradient-text-span">Deliver Results</span>
      </h2>
      <div class="theme-divider h-1.5 mx-auto rounded-full"></div>
    </div>

    <div class="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 place-items-center">
      
      <component
        v-for="(project, index) in projects"
        :key="index"
        :is="project.isInternal ? 'router-link' : 'a'"
        :[project.isInternal?'to':'href']="project.url"
        :target="project.isInternal ? null : '_blank'"
        class="project-card opacity-0 w-full max-w-sm group relative rounded-2xl overflow-hidden flex flex-col h-full"
      >
        <div class="h-64 overflow-hidden relative w-full shrink-0">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110">
          <div class="absolute inset-0 image-gradient-mask"></div>
        </div>

        <div class="p-8 flex flex-col flex-grow text-center transition-colors duration-300 card-body-bg">
          <h3 class="text-2xl font-bold mb-3 tracking-tight project-card-title">
            {{ project.title }}
          </h3>
          <p class="text-sm mb-8 leading-relaxed font-medium flex-grow project-card-description">
            {{ project.intro }}
          </p>
          
          <div class="mt-auto w-full flex justify-center">
            <span class="inline-flex items-center justify-center min-w-[220px] border px-12 py-3.5 font-bold tracking-wider text-xs transition-all duration-300 rounded-lg cursor-pointer project-card-btn">
              VISIT PROJECT
            </span>
          </div>
        </div>
      </component>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Inject global theme state context seamlessly with local default context fallback
const isDarkMode = inject('isDarkMode', ref(true));

const projects = [
  { 
    title: 'Wine Openers Canada', 
    intro: 'A premium ecommerce experience designed for wine enthusiasts with intuitive navigation.', 
    url: 'https://wineopeners.ca/', 
    isInternal: false,
    image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    title: 'Replacement Glass', 
    intro: 'Specialized platform built to simplify product discovery, focusing on speed and clarity.', 
    url: '/replacementglass',
    isInternal: true,
    image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800' 
  },
  { 
    title: 'Blazing Glass', 
    intro: 'Professional digital presence created to showcase services and build credibility.', 
    url: 'http://blazingglass.com/', 
    isInternal: false,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' 
  }
];

onMounted(() => {
  gsap.fromTo('.project-card', 
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.project-card',
        start: 'top 85%'
      }
    }
  );
});
</script>

<style scoped>
/* ── Encapsulated Visual Protection Boundaries ── */
.theme-dark {
  background-color: #000000 !important;
  --tag-text-color: #00ffa3;
  --title-text-color: #ffffff;
  --gradient-span-bg: linear-gradient(to right, #00ffa3, #ffffff);
  --divider-display: block;
  --divider-bg: #00ffa3;
  --divider-shadow: 0 0 15px #00ffa3;
  --blur-glow-color: rgba(0, 255, 163, 0.05);
  
  /* Card Design Specifics */
  --card-bg-main: rgba(10, 10, 10, 0.6);
  --card-border-color: rgba(255, 255, 255, 0.08);
  --card-hover-border: rgba(0, 255, 163, 0.4);
  --card-hover-shadow: rgba(0, 255, 163, 0.15);
  --card-img-mask: linear-gradient(to top, #000000, rgba(0, 0, 0, 0.4), transparent);
  --card-body-surface: rgba(10, 10, 10, 0.85);
  --card-text-title: #ffffff;
  --card-text-desc: #a3a3a3; /* neutral-400 equivalent */
  --card-btn-border: rgba(255, 255, 255, 0.15);
  --card-btn-text: #ffffff;
}

.theme-light {
  background-color: #ffffff !important;
  --tag-text-color: #475569; /* text-slate-600 equivalent */
  --title-text-color: #000000;
  --gradient-span-bg: none;
  --divider-display: none; /* Completely removed under white theme layout */
  --divider-bg: transparent;
  --divider-shadow: none;
  --blur-glow-color: rgba(15, 23, 42, 0.02);
  
  /* Card Design Specifics */
  --card-bg-main: #ffffff;
  --card-border-color: #e2e8f0; /* slate-200 equivalent */
  --card-hover-border: rgba(15, 23, 42, 0.15);
  --card-hover-shadow: rgba(15, 23, 42, 0.06);
  --card-img-mask: linear-gradient(to top, rgba(0,0,0,0.4), transparent);
  --card-body-surface: #ffffff;
  --card-text-title: #000000;
  --card-text-desc: #000000; /* requested pure black description text */
  --card-btn-border: #000000;
  --card-btn-text: #000000;
}

/* ── Explicit Selector Rule Mappings ── */
.project-section {
  width: 100% !important;
}

.dynamic-glow-blur {
  background-color: var(--blur-glow-color) !important;
  filter: blur(150px) !important;
}

.section-tag {
  color: var(--tag-text-color) !important;
}

.section-title {
  color: var(--title-text-color) !important;
}

.gradient-text-span {
  background: var(--gradient-span-bg);
  background-clip: text;
  -webkit-background-clip: text;
  color: var(--title-text-color);
}

.theme-dark .gradient-text-span {
  color: transparent !important;
}

.theme-divider {
  display: var(--divider-display) !important;
  width: 8rem !important;
  background-color: var(--divider-bg) !important;
  box-shadow: var(--divider-shadow) !important;
  margin-bottom: 2rem !important;
}

/* ── Upgraded Card Presentation Engine ── */
.project-card {
  background-color: var(--card-bg-main) !important;
  border: 1px solid var(--card-border-color) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.02);
  backdrop-blur: 24px;
}

.project-card:hover {
  border-color: var(--card-hover-border) !important;
  box-shadow: 0 20px 40px var(--card-hover-shadow) !important;
  transform: translateY(-4px);
}

.image-gradient-mask {
  background: var(--card-img-mask) !important;
}

.card-body-bg {
  background-color: var(--card-body-surface) !important;
}

.project-card-title {
  color: var(--card-text-title) !important;
  transition: color 0.3s ease;
}

.project-card:hover .project-card-title {
  color: #00ffa3 !important;
}

.project-card-description {
  color: var(--card-text-desc) !important;
}

.project-card-btn {
  border: 1px solid var(--card-btn-border) !important;
  color: var(--card-btn-text) !important;
}

.project-card-btn:hover {
  background-color: #00ffa3 !important;
  color: #000000 !important;
  border-color: #00ffa3 !important;
}
</style>