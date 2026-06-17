<!-- <template>
  <div :class="['services-component-wrapper', props.darkMode ? 'theme-dark' : 'theme-light']">
    
    <div class="main-component-container">
      <main class="services-content-main">
        
        <div class="ai-vision-block">
          <h2 class="ai-vision-heading">Next-Gen Web, App, and NetSuite Engineering</h2><br>
          <p class="ai-vision-paragraph">
            Traditional software isolates your business; WebHive unifies it. We combine high-end web and mobile development with deeply synchronized NetSuite ERP environments to build responsive digital products that adapt, scale, and perform.
          </p>
        </div><br>

        <section class="services-interactive-section">
          
          <div class="services-left-side-text">
            <div 
              v-for="service in servicesData" 
              :key="service.id"
              class="service-accordion-card"
              :class="{ 'active-card': selectedService === service.id }"
              @mouseenter="selectedService = service.id"
              @click="selectedService = service.id"
            >
              <div class="card-text-header">
                <div class="card-icon-frame">
                  <svg v-if="service.id === 1" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  <svg v-if="service.id === 2" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                  <svg v-if="service.id === 3" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                  <svg v-if="service.id === 4" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
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
</script> -->


<template>
  <div :class="['services-component-wrapper', props.darkMode ? 'theme-dark' : 'theme-light']">
    
    <div class="main-component-container">
      <main class="services-content-main">
        
        <div class="ai-vision-block">
          <h2 class="ai-vision-heading">Next-Gen Web, App, and NetSuite Engineering</h2><br>
          <p class="ai-vision-paragraph">
            Traditional software isolates your business; WebHive unifies it. We combine high-end web and mobile development with deeply synchronized NetSuite ERP environments to build responsive digital products that adapt, scale, and perform.
          </p>
        </div><br>

        <section class="services-interactive-section">
          
          <div class="services-left-side-text">
            <div 
              v-for="service in servicesData" 
              :key="service.id"
              class="service-accordion-card"
              :class="{ 'active-card': selectedService === service.id }"
              @mouseenter="handleMouseEnter(service.id)"
              @click="handleServiceClick(service)"
            >
              <div class="card-text-header">
                <div class="card-icon-frame">
                  <svg v-if="service.id === 1" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                  <svg v-if="service.id === 2" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                  <svg v-if="service.id === 3" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                  <svg v-if="service.id === 4" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
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
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isNavigating = ref(false)

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
    imgUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    path: '/webappdevelopment'
  },
  { 
    id: 2, 
    title: 'App Development', 
    description: 'Driving client engagement across native platforms via high-fidelity iOS and Android applications.',
    imgUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80',
    path: '/appdevelopment'
  },
  { 
    id: 3, 
    title: 'eCommerce Solutions', 
    description: 'Unlocking high-conversion multi-channel storefronts optimized for checkout workflows.',
    imgUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    path: '/ecommercesolutions'
  },
  { 
    id: 4, 
    title: 'NetSuite Integrations', 
    description: 'Seamlessly binding ERP data pipelines together to streamline critical cloud business operations.',
    imgUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1000&q=80',
    path: '/netsuiteintegrations'
  }
]

const selectedService = ref(1)

const currentServiceImage = computed(() => {
  return servicesData.find(s => s.id === selectedService.value) || servicesData[0]
})

// Reset our navigation flag when the component loads/mounts back into view
onMounted(() => {
  isNavigating.value = false
  // Forces browser focus off old target layouts, clearing history loops
  window.scrollTo(0, 0)
})

const handleMouseEnter = (id) => {
  if (isNavigating.value) return
  selectedService.value = id
}

const handleServiceClick = (service) => {
  if (isNavigating.value) return
  isNavigating.value = true
  
  selectedService.value = service.id
  
  // Minor microtask pause handles browser history cleanly 
  setTimeout(() => {
    router.push(service.path).then(() => {
      // Clean up window focus rules instantly
      window.scrollTo(0, 0)
    })
  }, 50)
}
</script>

<style scoped>
/* ----------------------------------------- */
/* 1. LAYOUT WRAPPER & ACCENT CONFIG         */
/* ----------------------------------------- */
.services-component-wrapper {
  --brand-accent: #00ffa3;
  --brand-accent-light: #059669;
  width: 100%;
  font-family: system-ui, -apple-system, sans-serif;
  box-sizing: border-box;
  background-color: transparent;
  transition: color 0.5s ease;
}

.services-component-wrapper *, .services-component-wrapper *::before, .services-component-wrapper *::after { 
  box-sizing: border-box; 
  margin: 0; 
  padding: 0; 
}
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
  padding: clamp(60px, 10vw, 120px) clamp(20px, 4vw, 50px);
  width: 100%;
  max-width: 1400px;
}

/* ----------------------------------------- */
/* 2. HEADER BLOCK                           */
/* ----------------------------------------- */
.ai-vision-block {
  text-align: center;
  max-width: 850px;
  margin-bottom: clamp(50px, 8vw, 100px);
}
.ai-vision-heading { 
  font-size: clamp(2.4rem, 4.2vw, 3.8rem); 
  font-weight: 950; 
  margin-bottom: 28px; 
  letter-spacing: -0.04em;
  line-height: 1.1;
}
.theme-dark .ai-vision-heading { color: #ffffff; }
.theme-light .ai-vision-heading { color: #0f172a; }

.ai-vision-paragraph { 
  font-size: clamp(17px, 1.3vw, 20px); 
  line-height: 1.8; 
  color: #94a3b8; 
}
.theme-light .ai-vision-paragraph { color: #475569; }

/* ----------------------------------------- */
/* 3. SPLIT WORKSPACE INTERACTIVE GRID       */
/* ----------------------------------------- */
.services-interactive-section {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
  gap: clamp(40px, 6vw, 100px); 
  height: clamp(450px, 55vh, 600px); 
}

.services-left-side-text {
  flex: 0.7;
  max-width: 520px;
  min-width: 320px;
  height: 100%; 
  display: flex;
  flex-direction: column;
  gap: 0; 
  text-align: left;
  overflow-y: auto; 
  scrollbar-width: none; 
}
.services-left-side-text::-webkit-scrollbar { display: none; }

.services-right-side-panel {
  flex: 0.55;
  min-width: 0;
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1024px) {
  .services-interactive-section { 
    height: auto; 
    flex-direction: column;
    gap: 0; 
  }
  .services-left-side-text { 
    max-width: 100%; 
    min-width: 0;
    height: auto; 
    overflow-y: visible; 
  }
  .services-right-side-panel { display: none; }
}

/* ----------------------------------------- */
/* 4. COMPONENT CARD VISUALS                 */
/* ----------------------------------------- */
.service-accordion-card {
  display: flex;
  flex-direction: column;
  justify-content: center; 
  flex: 1; 
  padding: 16px 0; 
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
  border-radius: 0; 
}
.theme-light .service-accordion-card { border-bottom: 1px solid rgba(15, 23, 42, 0.1); }

.card-text-header {
  display: flex;
  align-items: flex-start;
  gap: clamp(16px, 2.5vw, 32px); 
  width: 100%;
}

.card-heading-block {
  width: 100%;
  min-width: 0; /* allow text to wrap/shrink instead of pushing layout */
}

.card-icon-frame { 
  margin-top: 4px; 
  color: #4b5563; 
  flex-shrink: 0; 
  transition: color 0.3s;
}

.service-title-h3 {
  font-size: clamp(1.4rem, 2vw, 1.9rem); 
  font-weight: 850;
  color: #4b5563;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: color 0.3s, transform 0.3s;
  width: 100%;
}
.theme-light .service-title-h3 { color: #64748b; }

.dropdown-chevron-indicator {
  font-size: 1.1rem;
  color: #4b5563;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), color 0.3s;
  transform: rotate(0deg);
  margin-left: auto;
  padding-left: 16px;
  flex-shrink: 0;
}

.service-description-preview { 
  font-size: clamp(14px, 1vw, 16px); 
  line-height: 1.5; 
  color: #94a3b8; 
  opacity: 0; 
  max-height: 0;
  overflow: hidden;
  margin-top: 0; 
  transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1); 
  width: 100%;
}
.theme-light .service-description-preview { color: #475569; }

/* ----------------------------------------- */
/* 5. INTERACTIVE ACTIVE MODIFIERS           */
/* ----------------------------------------- */
.active-card { 
  border-bottom-color: var(--brand-accent);
  flex: 1.4; 
}
.theme-light .active-card { border-bottom-color: var(--brand-accent-light); }

.active-card .card-icon-frame { color: var(--brand-accent); }
.theme-light .active-card .card-icon-frame { color: var(--brand-accent-light); }

.active-card .service-title-h3 { 
  color: #ffffff; 
  transform: translateX(10px);
}
.theme-light .active-card .service-title-h3 { 
  color: #0f172a; 
  transform: translateX(10px);
}

.active-card .dropdown-chevron-indicator { 
  transform: rotate(90deg); 
  color: var(--brand-accent); 
}
.theme-light .active-card .dropdown-chevron-indicator { color: var(--brand-accent-light); }

.active-card .service-description-preview { 
  opacity: 1; 
  max-height: 80px; 
  margin-top: 8px;
  color: #cbd5e1; 
}
.theme-light .active-card .service-description-preview { color: #1e293b; }

/* ----------------------------------------- */
/* 6. ACCORDION MEDIA DRAWER (MOBILE)        */
/* ----------------------------------------- */
.accordion-media-drawer {
  display: grid;
  grid-template-rows: 0fr; 
  opacity: 0;
  transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  overflow: hidden;
  width: 100%;
}

.card-image-wrapper {
  overflow: hidden;
  width: 100%;
  aspect-ratio: 16 / 9; 
  margin-top: 32px;
  border-radius: 12px;
}

.card-live-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
}

@media (max-width: 1024px) {
  .active-card .accordion-media-drawer {
    grid-template-rows: 1fr;
    opacity: 1;
    border-radius: 12px;
  }
}

/* ----------------------------------------- */
/* 7. DESKTOP MEDIA VIEWPORT CANVAS          */
/* ----------------------------------------- */
.desktop-frame-canvas {
  position: relative;
  width: 100%;
  height: 100%; 
  border-radius: 20px; 
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 50px 100px rgba(0, 0, 0, 0.5);
}
.theme-light .desktop-frame-canvas {
  background-color: #ffffff;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 50px 100px rgba(15, 23, 42, 0.08);
}

.desktop-live-image { 
  width: 100%; 
  height: 100%; 
  object-fit: cover; 
}

.fade-desktop-image-enter-active, .fade-desktop-image-leave-active { transition: opacity 0.3s ease, transform 0.4s ease; }
.fade-desktop-image-enter-from { opacity: 0; transform: scale(1.02); }
.fade-desktop-image-leave-to { opacity: 0; transform: scale(0.98); }

/* ----------------------------------------- */
/* 8. TABLET REFINEMENTS (≤1024px)           */
/* ----------------------------------------- */
@media (max-width: 1024px) {
  .ai-vision-heading { letter-spacing: -0.02em; }
  .service-accordion-card { padding: 20px 0; }
  .card-text-header { gap: 20px; }
}

/* ----------------------------------------- */
/* 9. MOBILE REFINEMENTS (≤640px)            */
/* ----------------------------------------- */
@media (max-width: 640px) {
  .services-content-main { padding: 48px 20px; }

  .ai-vision-block { margin-bottom: 48px; }
  .ai-vision-heading { font-size: clamp(1.9rem, 8vw, 2.4rem); margin-bottom: 16px; }
  .ai-vision-paragraph { font-size: 15px; line-height: 1.7; }

  .card-text-header { 
    gap: 14px; 
    align-items: center; 
  }

  .card-icon-frame { 
    margin-top: 0; 
    width: 22px; 
    height: 22px; 
  }
  .card-icon-frame svg { width: 22px; height: 22px; }

  .service-title-h3 { 
    font-size: 1.15rem; 
    font-weight: 750;
    line-height: 1.3;
    gap: 8px;
  }

  .dropdown-chevron-indicator { 
    font-size: 0.95rem; 
    padding-left: 10px; 
  }

  .service-description-preview { 
    font-size: 13.5px; 
    line-height: 1.6; 
  }

  .active-card .service-description-preview {
    margin-top: 10px;
    max-height: 140px; /* allow more room since text wraps more on narrow screens */
  }

  .service-accordion-card { padding: 16px 0; }

  .card-image-wrapper { margin-top: 16px; border-radius: 10px; }
  .card-live-image { border-radius: 10px; }
}

@media (max-width: 380px) {
  .service-title-h3 { font-size: 1.05rem; }
  .card-icon-frame, .card-icon-frame svg { width: 20px; height: 20px; }
  .service-description-preview { font-size: 13px; }
}
</style>