<template>
  <section
    :class="['project-section py-16 px-4 sm:py-20 sm:px-6 md:py-24 md:px-8 lg:py-28 xl:py-32 xl:px-10 2xl:px-14 relative overflow-hidden flex flex-col items-center justify-center min-h-screen transition-colors duration-500', isDarkMode ? 'theme-dark' : 'theme-light']">

    <div
      class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] dynamic-glow-blur rounded-full pointer-events-none">
    </div>

    <div
      class="header-container mx-auto text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20 relative z-10 flex flex-col items-center">
      <span
        class="section-tag font-extrabold tracking-[0.25em] uppercase text-xs sm:text-sm xl:text-base mb-4 sm:mb-6 block">Web
        App Development</span>
      <h2
        class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold mb-4 sm:mb-6 tracking-tight section-title">
        Digital Experiences That <br />
        <span class="gradient-text-span">Deliver Results</span>
      </h2>
      <div class="theme-divider h-1.5 mx-auto rounded-full"></div>
    </div>

    <div
      class="projects-container w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 xl:gap-12 2xl:gap-14 relative z-10 place-items-center">

      <component v-for="(project, index) in projects" :key="index" :is="project.isInternal ? 'router-link' : 'a'"
        :to="project.isInternal ? project.url : undefined" :href="!project.isInternal ? project.url : undefined"
        :target="project.isInternal ? null : '_blank'"
        class="project-card project-card-width opacity-0 w-full group relative rounded-2xl overflow-hidden flex flex-col h-full">
        <div class="project-card-image overflow-hidden relative w-full shrink-0">
          <img :src="project.image" :alt="project.title"
            class="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110">
          <div class="absolute inset-0 image-gradient-mask"></div>
        </div>

        <div class="project-card-body flex flex-col flex-grow text-center transition-colors duration-300 card-body-bg">
          <h3 class="project-title-text font-bold mb-3 sm:mb-4 tracking-tight project-card-title">
            {{ project.title }}
          </h3>
          <p class="project-desc-text mb-8 sm:mb-10 leading-relaxed font-medium flex-grow project-card-description">
            {{ project.intro }}
          </p>

          <div class="mt-auto w-full flex justify-center">
            <span
              class="project-card-btn-inner inline-flex items-center justify-center font-bold tracking-wider transition-all duration-300 rounded-lg cursor-pointer project-card-btn">
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
  --card-text-desc: #a3a3a3;
  /* neutral-400 equivalent */
  --card-btn-border: rgba(255, 255, 255, 0.15);
  --card-btn-text: #ffffff;
}

.theme-light {
  background-color: #ffffff !important;
  --tag-text-color: #475569;
  /* text-slate-600 equivalent */
  --title-text-color: #000000;
  --gradient-span-bg: none;
  --divider-display: none;
  /* Completely removed under white theme layout */
  --divider-bg: transparent;
  --divider-shadow: none;
  --blur-glow-color: rgba(15, 23, 42, 0.02);

  /* Card Design Specifics */
  --card-bg-main: #ffffff;
  --card-border-color: #e2e8f0;
  /* slate-200 equivalent */
  --card-hover-border: rgba(15, 23, 42, 0.15);
  --card-hover-shadow: rgba(15, 23, 42, 0.06);
  --card-img-mask: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  --card-body-surface: #ffffff;
  --card-text-title: #000000;
  --card-text-desc: #000000;
  /* requested pure black description text */
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

/* CHANGED: blurry ambient background fully removed in light theme for a clean solid white surface */
.theme-light .dynamic-glow-blur {
  display: none !important;
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

/* CHANGED: light-theme hover title color now vibrant orange (was hardcoded green for both themes) */
.theme-light .project-card:hover .project-card-title {
  color: #f97316 !important;
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

/* CHANGED: light-theme hover button now vibrant orange (was hardcoded green for both themes) */
.theme-light .project-card-btn:hover {
  background-color: #f97316 !important;
  color: #000000 !important;
  border-color: #f97316 !important;
}

/* ==========================================================================
   Header + grid containers: scale fluidly with viewport width instead of
   jumping between fixed breakpoint values, and fill a consistent ~92-94%
   of the screen at every tier — including the two large-screen overrides
   below — instead of narrowing their proportion the bigger the screen
   gets (the original was a hard max-w-[1700px] cap that stayed exactly
   the same width all the way from 1700px up to a 4K/8K display).
   ========================================================================== */
.header-container {
  max-width: clamp(280px, 88vw, 896px);
}

.projects-container {
  max-width: clamp(320px, 94vw, 1700px);
}

/* Card image — originally a fixed h-80 md:h-88 (320px / 352px). Scales
   progressively at every tier below instead of jumping straight from
   mobile to md with nothing beyond that. */
.project-card-image {
  height: 220px;
}

/* Card body padding — originally a fixed p-10 (40px) at every screen size. */
.project-card-body {
  padding: 1.75rem;
}

.project-title-text {
  font-size: 1.35rem;
}

.project-desc-text {
  font-size: 0.92rem;
}

/* "VISIT PROJECT" button — originally a fixed min-w-[220px] px-12 py-4
   text-xs at every screen size. */
.project-card-btn-inner {
  min-width: 180px;
  padding: 0.85rem 2rem;
  font-size: 0.68rem;
}

/* Card width — originally a fixed max-w-lg (512px) at every screen size,
   regardless of how much room the grid column actually had. Widened here
   and scaled progressively at each tier below so cards make fuller use
   of their grid column instead of leaving empty space beside them. */
.project-card-width {
  max-width: 560px;
}

/* ==========================================================================
   Mobile Landscape / Small Tablets: 576px — 768px
   ========================================================================== */
@media (min-width: 576px) {
  .project-card-width {
    max-width: 580px;
  }

  .project-card-image {
    height: 260px;
  }

  .project-card-body {
    padding: 2rem;
  }

  .project-title-text {
    font-size: 1.5rem;
  }

  .project-card-btn-inner {
    min-width: 200px;
    padding: 0.9rem 2.25rem;
    font-size: 0.7rem;
  }
}

/* ==========================================================================
   Laptops / Large Tablets: 769px — 1024px
   ========================================================================== */
@media (min-width: 769px) {
  .project-card-width {
    max-width: 600px;
  }

  .project-card-image {
    height: 300px;
  }

  .project-card-body {
    padding: 2.25rem;
  }

  .project-desc-text {
    font-size: 0.95rem;
  }
}

@media (min-width: 992px) {
  .project-card-image {
    height: 330px;
  }
}

/* ==========================================================================
   Desktops: 1025px — 1200px
   ========================================================================== */
@media (min-width: 1025px) {
  .project-card-width {
    max-width: 630px;
  }

  .project-card-image {
    height: 352px;
    /* matches original design's fixed height (md:h-88) exactly at this tier */
  }

  .project-card-body {
    padding: 2.5rem;
    /* matches original design's fixed padding (p-10) exactly at this tier */
  }

  .project-title-text {
    font-size: 1.5rem;
  }

  .project-desc-text {
    font-size: 1rem;
  }

  .project-card-btn-inner {
    min-width: 220px;
    padding: 1rem 3rem;
    font-size: 0.75rem;
    /* matches original design exactly at this tier */
  }
}

/* ==========================================================================
   Extra Large Screens / Desktops / TVs: 1201px and up
   ========================================================================== */
@media (min-width: 1201px) {
  .project-card-width {
    max-width: 650px;
  }

  .project-card-image {
    height: 370px;
  }

  .project-title-text {
    font-size: 1.6rem;
  }
}

/* ==========================================================================
   Ultra-wide / Large TVs: 1536px and up
   Scale up spacing and type so cards don't feel lost on huge displays
   ========================================================================== */
@media (min-width: 1536px) {
  .project-card-width {
    max-width: 685px;
  }

  .project-card-image {
    height: 400px;
  }

  .project-card-body {
    padding: 2.75rem;
  }

  .project-title-text {
    font-size: 1.75rem;
  }

  .project-desc-text {
    font-size: 1.05rem;
  }

  .project-card-btn-inner {
    min-width: 235px;
    padding: 1.05rem 3.25rem;
    font-size: 0.8rem;
  }
}

/* ==========================================================================
   Very Large Desktops / Big TVs: 1920px and up
   Keeps scaling instead of plateauing at 1536px, so cards don't shrink
   relative to a much larger viewport / viewing distance.
   ========================================================================== */
@media (min-width: 1920px) {
  .header-container {
    max-width: 1050px;
  }

  .projects-container {
    max-width: 1820px;
  }

  .project-card-width {
    max-width: 720px;
  }

  .project-card-image {
    height: 430px;
  }

  .project-card-body {
    padding: 3rem;
  }

  .project-title-text {
    font-size: 1.9rem;
  }

  .project-desc-text {
    font-size: 1.1rem;
  }

  .project-card-btn-inner {
    min-width: 250px;
    padding: 1.1rem 3.5rem;
    font-size: 0.85rem;
  }
}

/* ==========================================================================
   4K / Extra-Extra-Large Monitors: 2560px and up
   Real 4K displays (or 27"+ high-res laptop panels) render content
   physically small at 1920px-tier sizing. This tier keeps the container,
   cards, and imagery growing proportionally instead of looking
   undersized, and keeps the containers filling ~92% of the screen
   instead of narrowing their proportion.
   ========================================================================== */
@media (min-width: 2560px) {
  .header-container {
    max-width: 1200px;
  }

  .projects-container {
    max-width: 2350px;
  }

  .project-card-width {
    max-width: 760px;
  }

  .project-card-image {
    height: 460px;
  }

  .project-card-body {
    padding: 3.4rem;
  }

  .project-title-text {
    font-size: 2.05rem;
  }

  .project-desc-text {
    font-size: 1.18rem;
  }

  .project-card-btn-inner {
    min-width: 265px;
    padding: 1.2rem 3.75rem;
    font-size: 0.92rem;
  }
}

/* ==========================================================================
   Very small phones: keep things tight at the extreme low end (<= 380px)
   ========================================================================== */
@media (max-width: 380px) {
  .header-container {
    margin-bottom: 2.5rem;
  }

  .project-card-width {
    max-width: 340px;
  }

  .project-card-image {
    height: 190px;
  }

  .project-card-body {
    padding: 1.4rem;
  }

  .project-title-text {
    font-size: 1.2rem;
  }

  .project-desc-text {
    font-size: 0.85rem;
  }

  .project-card-btn-inner {
    min-width: 160px;
    padding: 0.75rem 1.5rem;
    font-size: 0.65rem;
  }
}
</style>