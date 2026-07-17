<template>
  <section :class="['projects-section transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="bg-glow"></div>

    <div class="section-header">
      <span class="section-label">App Development Projects</span>
      <h2 class="section-title">
        Mobile Experiences That <br/>
        <span class="title-accent">Deliver Results</span>
      </h2>
    </div>

    <div class="cards-grid">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-card"
      >
        <div class="card-image">
          <img :src="project.image" :alt="project.title" class="card-img" />
        </div>

        <div class="card-body">
          <h3 class="card-title">{{ project.title }}</h3>
          <p class="card-intro">{{ project.intro }}</p>

          <div class="btn-wrap">
            <span class="view-btn" @click="$emit('open-modal', project.title)">
              VIEW APP
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted, inject, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Inject global theme state context seamlessly
const isDarkMode = inject('isDarkMode', ref(true));

defineEmits(['open-modal']);

const projects = [
  { title: 'Taylor Allergy',     intro: 'Patient appointment tracking, rescheduling, and secure communication.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600' },
  { title: 'My Expense Tracker', intro: 'Comprehensive finance management.',                                     image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600' },
  { title: 'Book Library',       intro: 'Public library management system.',                                    image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=600' },
  { title: 'Magento Connector',  intro: 'Admin portal for order management.',                                   image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=600' },
];

gsap.registerPlugin(ScrollTrigger);
onMounted(() => {
  gsap.fromTo('.project-card', { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, stagger: 0.2, scrollTrigger: '.project-card' });
});
</script>

<style scoped>
/* ── Encapsulated Visual Protection Boundaries ── */
.theme-dark { 
  background-color: #0b0c10 !important; 
  color: #ffffff !important; 
  --title-color: #ffffff;
  --card-bg: rgba(255, 255, 255, 0.02);
  --card-border: rgba(255, 255, 255, 0.1);
  --body-bg: rgba(0, 0, 0, 0.4);
  --btn-border: rgba(255, 255, 255, 0.2);
  --btn-text: #ffffff;
}

.theme-light { 
  background-color: #ffffff !important; 
  color: #000000 !important; 
  --title-color: #000000;
  --card-bg: #ffffff;
  --card-border: #e2e8f0;
  --body-bg: #ffffff;
  --btn-border: rgba(15, 23, 42, 0.15);
  --btn-text: #0f172a;
}

/* ── Section ── */
.projects-section {
  padding: 80px 32px;
  margin: 0 auto;
  width: 100%;
  max-width: 1280px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .projects-section { padding: 80px 48px; }
}

/* ── Background glow ── */
.bg-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 900px;
  height: 500px;
  background: rgba(11, 12, 16, 0.05);
  filter: blur(150px);
  border-radius: 50%;
  pointer-events: none;
}
/* CHANGED: blurry ambient background fully removed in light theme for a clean solid white surface */
.theme-light .bg-glow {
  display: none;
}

/* ── Header ── */
.section-header {
  max-width: 896px;
  margin: 0 auto 64px;
  text-align: center;
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-label {
  color: #00ffa3 !important;
  font-weight: 800;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  font-size: 0.875rem;
  margin-bottom: 24px;
  display: block;
}
/* CHANGED: light-theme section label now vibrant orange (was hardcoded green for both themes) */
.theme-light .section-label {
  color: #f97316 !important;
}

.section-title {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  font-weight: 800;
  margin-bottom: 24px;
  letter-spacing: -0.02em;
  line-height: 1.1;
  color: var(--title-color) !important;
  transition: color 0.4s ease;
}

.title-accent {
  background: linear-gradient(to right, #00ffa3, #ffffff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}
.theme-light .title-accent {
  background: none !important;
  -webkit-text-fill-color: #000000 !important;
  color: #000000 !important;
}

/* ── Cards grid ── */
.cards-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  position: relative;
  z-index: 10;
  align-items: stretch;
}

@media (min-width: 768px) {
  .cards-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .cards-grid { grid-template-columns: repeat(4, 1fr); }
}

/* ── Card ── */
.project-card {
  opacity: 0;
  width: 100%;
  position: relative;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(40px);
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: var(--card-bg) !important;
  border: 1px solid var(--card-border) !important;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.theme-light .project-card {
  box-shadow: 0 4px 24px rgba(0,0,0,0.05) !important;
}

.project-card:hover {
  border-color: rgba(0, 255, 163, 0.5) !important;
}
/* CHANGED: light-theme card hover border now vibrant orange (was hardcoded green for both themes) */
.theme-light .project-card:hover {
  border-color: rgba(249, 115, 22, 0.5) !important;
}

/* ── Card image ── */
.card-image {
  height: 192px;
  overflow: hidden;
  position: relative;
  width: 100%;
  flex-shrink: 0;
}
.card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 2s ease;
  display: block;
}
.project-card:hover .card-img {
  transform: scale(1.1);
}

/* ── Card body ── */
.card-body {
  padding: 24px 24px 32px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  text-align: center;
  background: var(--body-bg) !important;
  transition: background 0.4s ease;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 12px;
  flex-shrink: 0;
  color: var(--title-color) !important;
}

.card-intro {
  font-size: 0.875rem;
  color: #9ca3af !important;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 2.5rem;
  margin-bottom: 24px;
}

/* ── Button ── */
.btn-wrap {
  margin-top: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
}

.view-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 6px 12px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid var(--btn-border) !important;
  color: var(--btn-text) !important;
  background-color: transparent !important;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.view-btn:hover {
  background-color: #00ffa3 !important;
  color: #000000 !important;
  border-color: #00ffa3 !important;
}
/* CHANGED: light-theme button hover now vibrant orange (was hardcoded green for both themes) */
.theme-light .view-btn:hover {
  background-color: #f97316 !important;
  color: #000000 !important;
  border-color: #f97316 !important;
}
</style>