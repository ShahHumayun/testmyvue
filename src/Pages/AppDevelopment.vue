<template>
  <div ref="pageContainer" class="bg-[#000000] text-[#FFFFFF] font-sans relative overflow-hidden selection:bg-[#00ffa3] selection:text-[#000000]">
    
    <div 
      class="pointer-events-none fixed inset-0 z-10 opacity-25 transition-opacity duration-300 will-change-transform"
      :style="{ background: `radial-gradient(700px circle at ${mouse.x}px ${mouse.y}px, rgba(0, 255, 163, 0.12), transparent 80%)` }"
    ></div>
    <br><br>

    <AppComponent1 :phone-rotation="phoneRotation" />
    <AppComponent2 />
    <AppDevelopmentProjectSection :isDarkMode="true" @open-modal="openModal" />
    <AppComponent3 />
    <AppComponent4 />
    <AppComponent5 />
    <AppComponent6 />
    <AppComponent7 />
    <AppComponent8 />
    <AppComponent9 />
    <AppComponent10 />
    <AppComponent11 />
    <AppComponent12 />
    <Footer />

    <!-- ✅ Same modal overlay as Portfolio.vue -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div
          v-if="activeModal"
          class="modal-backdrop"
          @click.self="closeModal"
        >
          <button @click="closeModal" class="modal-close-btn" aria-label="Close app preview">
            <span class="close-x">✕</span>
            <span class="close-text">Close</span>
          </button>

          <div class="modal-card">
            <div class="modal-scroll-inner">
              <component :is="activeModal" />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>

  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import { ref, reactive, watch, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import AppComponent1 from '../components/AppComponent1.vue'
import AppComponent2 from '../components/AppComponent2.vue'
import AppComponent3 from '../components/AppComponent3.vue'

import AppDevelopmentProjectSection from '../components/AppDevelopmentProjectSection.vue'

// ✅ All four app components for the modal
import TaylorAllergyApp     from '../components/TaylorAllergyApp.vue'
import MyExpenseTrackerApp  from '../components/MyExpenseTrackerApp.vue'
import BookLibraryApp       from '../components/BookLibraryApp.vue'
import MagentoConnectorApp  from '../components/MagentoConnectorApp.vue'

import AppComponent4  from '../components/AppComponent4.vue'
import AppComponent5  from '../components/AppComponent5.vue'
import AppComponent6  from '../components/AppComponent6.vue'
import AppComponent7  from '../components/AppComponent7.vue'
import AppComponent8  from '../components/AppComponent8.vue'
import AppComponent9  from '../components/AppComponent9.vue'
import AppComponent10 from '../components/AppComponent10.vue'
import AppComponent11 from '../components/AppComponent11.vue'
import AppComponent12 from '../components/AppComponent12.vue'
import Footer from '../components/footer.vue'

gsap.registerPlugin(ScrollTrigger)

const pageContainer = ref(null)
const mouse         = reactive({ x: 0, y: 0 })
const phoneRotation = reactive({ x: 0, y: 0 })
let rafId = null

// ✅ Modal logic — identical to Portfolio.vue
const activeModal = ref(null)

const modalMap = {
  'Taylor Allergy':     TaylorAllergyApp,
  'My Expense Tracker': MyExpenseTrackerApp,
  'Book Library':       BookLibraryApp,
  'Magento Connector':  MagentoConnectorApp,
}

const openModal  = (projectTitle) => { const c = modalMap[projectTitle]; if (c) activeModal.value = c }
const closeModal = () => { activeModal.value = null }

watch(activeModal, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

const handleKeydown = (e) => { if (e.key === 'Escape') closeModal() }
watch(activeModal, (val) => {
  if (val) window.addEventListener('keydown', handleKeydown)
  else     window.removeEventListener('keydown', handleKeydown)
})

const handleMouseMove = (e) => {
  if (!rafId) {
    rafId = requestAnimationFrame(() => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      const halfW = window.innerWidth / 2
      const halfH = window.innerHeight / 2
      phoneRotation.y =  ((e.clientX - halfW) / halfW) * 15
      phoneRotation.x = -((e.clientY - halfH) / halfH) * 15
      rafId = null
    })
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handleMouseMove, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('keydown', handleKeydown)
  cancelAnimationFrame(rafId)
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<style scoped>
/* ✅ Identical modal styles to Portfolio.vue */
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.97);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.modal-card {
  position: relative;
  width: 100%;
  max-width: 1100px;
  max-height: 88vh;
  background: #0b0c10;
  border-radius: 24px;
  border: 1px solid rgba(0, 255, 163, 0.25);
  box-shadow:
    0 0 0 1px rgba(0, 255, 163, 0.1),
    0 0 40px rgba(0, 255, 163, 0.15),
    0 0 80px rgba(0, 255, 163, 0.08),
    0 30px 60px rgba(0, 0, 0, 0.8);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.modal-scroll-inner {
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  scrollbar-width: thin;
  scrollbar-color: rgba(0, 255, 163, 0.2) transparent;
}
.modal-scroll-inner::-webkit-scrollbar { width: 4px; }
.modal-scroll-inner::-webkit-scrollbar-track { background: transparent; }
.modal-scroll-inner::-webkit-scrollbar-thumb { background: rgba(0, 255, 163, 0.2); border-radius: 4px; }

.modal-close-btn {
  position: fixed;
  top: 20px;
  right: 28px;
  z-index: 10000;
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  background: #00ffa3;
  color: #000000;
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.04em;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 4px 24px rgba(0, 255, 163, 0.45);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.modal-close-btn:hover  { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(0, 255, 163, 0.6); }
.modal-close-btn:active { transform: translateY(0); }
.close-x    { font-size: 11px; font-weight: 900; line-height: 1; }
.close-text { line-height: 1; }

.modal-fade-enter-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.modal-fade-leave-active { transition: opacity 0.2s ease,  transform 0.2s ease; }
.modal-fade-enter-from, .modal-fade-leave-to { opacity: 0; transform: scale(0.97); }

@media (max-width: 600px) {
  .modal-card { border-radius: 16px; max-height: 92vh; }
  .modal-backdrop { padding: 12px; }
  .modal-close-btn { top: 12px; right: 14px; padding: 8px 14px; font-size: 12px; }
}
</style>