<template>
  <div :class="['services-component-wrapper', props.darkMode ? 'theme-dark' : 'theme-light']">
    
    <div class="main-component-container">
      <main class="services-content-main">
        
        <div class="ai-vision-block">
          <h2 class="ai-vision-heading">Get AI-First Solutions that Power Your Vision</h2>
          <p class="ai-vision-paragraph">
            At WebHive, we go beyond traditional development. We engineer systems with AI at the core, 
            ensuring they learn, adapt, and operate seamlessly.
          </p>
        </div>

        <section class="services-interactive-section">
          
          <div class="services-left-side-text">
            <div 
              v-for="service in servicesData" 
              :key="service.id"
              class="service-accordion-card"
              :class="{ 'active-card': selectedService === service.id }"
              @mouseenter="selectedService = service.id"
            >
              <div class="card-text-header">
                <div class="card-icon-frame">
                  <svg v-if="service.id === 1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  <svg v-if="service.id === 2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                  <svg v-if="service.id === 3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                  <svg v-if="service.id === 4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                </div>

                <div class="card-heading-block">
                  <h3 class="service-title-h3">
                    {{ service.title }}
                    <span class="dropdown-chevron-indicator">➔</span>
                  </h3>
                  <p class="service-description-preview">{{ service.description }}</p>
                </div>
              </div>

              <div class="accordion-media-drawer">
                <div class="card-image-wrapper">
                  <Transition name="fade-drawer-image" mode="out-in">
                    <img 
                      v-if="selectedService === service.id"
                      :key="service.id" 
                      :src="service.imgUrl" 
                      :alt="service.title"
                      class="card-live-image" 
                    />
                  </Transition>
                </div>
              </div>
            </div>
          </div>

          <div class="services-right-side-panel">
            <div class="desktop-frame-canvas">
              <Transition name="fade-desktop-image" mode="out-in">
                <img 
                  :key="currentServiceImage.id" 
                  :src="currentServiceImage.imgUrl" 
                  :alt="currentServiceImage.title"
                  class="desktop-live-image" 
                />
              </Transition>
            </div>
          </div>

        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  darkMode: {
    type: Boolean,
    default: true
  }
})

const servicesData = [
  { 
    id: 1, 
    title: 'Web App Development', 
    description: 'Revolutionizing businesses with high-performance web applications tailored for modern scale.',
    imgUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80' 
  },
  { 
    id: 2, 
    title: 'App Development', 
    description: 'Driving client engagement across native platforms via high-fidelity iOS and Android applications.',
    imgUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80' 
  },
  { 
    id: 3, 
    title: 'eCommerce Solutions', 
    description: 'Unlocking high-conversion multi-channel storefronts optimized for checkout workflows.',
    imgUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80' 
  },
  { 
    id: 4, 
    title: 'NetSuite Integrations', 
    description: 'Seamlessly binding ERP data pipelines together to streamline critical cloud business operations.',
    imgUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80' 
  }
]

const selectedService = ref(1)

const currentServiceImage = computed(() => {
  return servicesData.find(s => s.id === selectedService.value) || servicesData[0]
})
</script>

<style scoped>
/* ----------------------------------------- */
/* 1. CORE WRAPPER SETUP                     */
/* ----------------------------------------- */
.services-component-wrapper {
  --brand-accent: #00ffa3;
  width: 100%;
  font-family: system-ui, -apple-system, sans-serif;
  box-sizing: border-box;
  background-color: transparent;
  transition: color 0.3s ease;
}

.services-component-wrapper *, .services-component-wrapper *::before, .services-component-wrapper *::after { box-sizing: border-box; margin: 0; padding: 0; }
.theme-dark { color: #ffffff; }
.theme-light { color: #0f172a; }

.main-component-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.services-content-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 100%;
  max-width: 1400px;
}

.ai-vision-block {
  text-align: center;
  margin-bottom: 50px;
  max-width: 720px;
}
.ai-vision-heading { font-size: 2.2rem; font-weight: 800; margin-bottom: 12px; }
.theme-light .ai-vision-heading { color: #0f172a; }

.ai-vision-paragraph { font-size: 16px; line-height: 1.6; color: #94a3b8; }
.theme-light .ai-vision-paragraph { color: #475569; }

/* ------------------------------------------------------------- */
/* FLEX STRATEGY: LOCKED SIDE-BY-SIDE TWO DIV ARCHITECTURE        */
/* ------------------------------------------------------------- */
.services-interactive-section {
  display: flex;
  flex-direction: row;        
  flex-wrap: nowrap;          
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  gap: 50px;
  margin-top: 20px;
}

/* LEFT DIV: Content Panel Stack */
.services-left-side-text {
  flex: 1;
  min-width: 0;
  max-width: 48%;
  display: flex;
  flex-direction: column;
  text-align: left;
}

/* RIGHT DIV: Desktop Media Asset Viewer */
.services-right-side-panel {
  flex: 1;
  min-width: 0;
  max-width: 48%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 100px; /* Locks it to scroll beautifully */
  align-self: flex-start;
}

@media (max-width: 992px) {
  /* 1. Hides the big desktop panel */
  .services-right-side-panel { display: none; }
  
  /* 2. Expands the left text column to full width */
  .services-left-side-text { max-width: 100%; }
}

/* Left panel item adjustments */
.service-accordion-card {
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  cursor: pointer;
  transition: background-color 0.25s, border-color 0.25s;
  border-radius: 6px;
  overflow: hidden;
}
.theme-light .service-accordion-card { border-bottom: 1px solid rgba(15, 23, 42, 0.06); }

/* Defines the standard header layout */
.card-text-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
}

.card-icon-frame { margin-top: 4px; color: #64748b; flex-shrink: 0; }
.card-heading-block { flex: 1; }

.service-title-h3 {
  font-size: 1.4rem;
  font-weight: 700;
  color: #64748b;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: color 0.25s;
}

.dropdown-chevron-indicator {
  font-size: 1rem;
  color: #64748b;
  transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), color 0.3s ease;
  transform: rotate(0deg);
}

.service-description-preview { font-size: 14px; line-height: 1.5; color: #94a3b8; opacity: 0.6; margin-top: 6px; transition: color 0.25s; }
.theme-light .service-description-preview { color: #475569; }

/* ----------------------------------------- */
/* 2. MEDIA DRAWER ARCHITECTURE & LOGIC     */
/* ----------------------------------------- */
.accordion-media-drawer {
  display: grid;
  grid-template-rows: 0fr; /* Default closed state */
  opacity: 0;
  transition: grid-template-rows 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease, border-color 0.4s ease;
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: 8px;
  margin-top: 0px;
  width: 100%;
}

.card-image-wrapper {
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16 / 10;
}

.card-live-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* --- MOBILE SPECIFIC LOGIC: Enables the internal drawers --- */
@media (max-width: 992px) {
  
  /* Triggers the expansion logic on smaller screens */
  .active-card .accordion-media-drawer {
    grid-template-rows: 1fr;
    opacity: 1;
    margin-top: 20px;
    
    border: 1px solid rgba(255, 255, 255, 0.08);
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  
  .theme-light .active-card .accordion-media-drawer {
    border: 1px solid rgba(15, 23, 42, 0.08);
    background-color: #ffffff;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
  }

  /* Internal Card image transition effects for accordion movement */
  .fade-drawer-image-enter-active,
  .fade-drawer-image-leave-active {
    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  }
  .fade-drawer-image-enter-from { opacity: 0; transform: translateY(-5px); }
  .fade-drawer-image-leave-to { opacity: 0; transform: translateY(5px); }
}

/* ----------------------------------------- */
/* 3. DYNAMIC ACTIVE & THEMATIC TWEAKS       */
/* ----------------------------------------- */
.service-accordion-card:hover, .active-card { background-color: rgba(255, 255, 255, 0.02); }
.theme-light .service-accordion-card:hover, .theme-light .active-card { background-color: rgba(15, 23, 42, 0.02); }

.active-card .card-icon-frame { color: var(--brand-accent); }
.theme-light .active-card .card-icon-frame { color: #059669; }

.active-card .service-title-h3 { color: #ffffff; }
.theme-light .active-card .service-title-h3 { color: #0f172a; }

/* Rotates the indicator down on active state */
.active-card .dropdown-chevron-indicator { 
  transform: rotate(90deg); 
  color: var(--brand-accent); 
}
.theme-light .active-card .dropdown-chevron-indicator { color: #059669; }

.active-card .service-description-preview { opacity: 1; color: #cbd5e1; }
.theme-light .active-card .service-description-preview { color: #334155; }

.active-card { border-bottom-color: var(--brand-accent); }
.theme-light .active-card { border-bottom-color: #059669; }

/* ----------------------------------------- */
/* 4. DESKTOP MEDIA VIEWPORT FRAME LOGIC     */
/* ----------------------------------------- */
.desktop-frame-canvas {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  border-radius: 12px;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.4);
}
.theme-light .desktop-frame-canvas {
  background-color: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 30px 60px rgba(15, 23, 42, 0.08);
}

.desktop-live-image { width: 100%; height: 100%; object-fit: cover; }

/* Desktop Transition Animations */
.fade-desktop-image-enter-active, .fade-desktop-image-leave-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.fade-desktop-image-enter-from { opacity: 0; transform: scale(1.01); }
.fade-desktop-image-leave-to { opacity: 0; transform: scale(0.99); }
</style>