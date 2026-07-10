<template>
  <!-- 4. INTEGRATION SERVICES -->
  <section
    :class="[
      'py-32 px-6 border-b relative z-20',
      isDarkMode ? 'border-neutral-900' : 'border-neutral-200'
    ]"
  >
    <div class="max-w-7xl mx-auto">
      <h2 :class="['text-3xl md:text-5xl font-bold tracking-tight text-center mb-20', isDarkMode ? 'text-white' : 'text-black']">
        Comprehensive <span class="text-[#00ffa3]">NetSuite Integration Solutions</span>
      </h2>
      <div ref="servicesContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(svc, idx) in coreServices"
          :key="idx"
          :class="[
            'group rounded-xl p-8 hover:border-[#00ffa3] transition-all duration-500 relative overflow-hidden flex flex-col justify-between border',
            isDarkMode
              ? 'bg-neutral-950 border-neutral-900'
              : 'bg-white border-transparent shadow-md hover:shadow-xl shadow-neutral-200/70'
          ]"
        >
          <!-- Decorative Vector Corner Mesh -->
          <div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,163,0.03),transparent_60%)] group-hover:bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,163,0.08),transparent_60%)] transition-colors"></div>

          <div class="space-y-4">
            <div
              :class="[
                'w-10 h-10 rounded flex items-center justify-center text-lg text-[#00ffa3] border',
                isDarkMode ? 'bg-neutral-900 border-neutral-800' : 'bg-neutral-100 border-neutral-200'
              ]"
            >
              {{ svc.icon }}
            </div>
            <h3 :class="['text-xl font-bold tracking-tight group-hover:text-[#00ffa3] transition-colors', isDarkMode ? 'text-white' : 'text-black']">
              {{ svc.title }}
            </h3>
            <p :class="['text-sm leading-relaxed', isDarkMode ? 'text-neutral-400' : 'text-neutral-600']">
              {{ svc.description }}
            </p>
          </div>
          <div
            :class="[
              'mt-8 pt-4 border-t flex items-center justify-between text-xs font-mono transition-colors',
              isDarkMode ? 'border-neutral-900 text-neutral-500 group-hover:text-neutral-300' : 'border-neutral-200 text-neutral-500 group-hover:text-neutral-700'
            ]"
          >
            <span>Standard Connectivity</span>
            <span>REST / SOAP</span>
          </div>
        </div>
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

const servicesContainer = ref(null)

const coreServices = [
  { title: 'NetSuite CRM Integration', description: 'Synchronize customer profiles, baseline tracking, and nested sales pipelines.', icon: '👥' },
  { title: 'NetSuite Ecommerce Integration', description: 'Connect retail digital store channels with central backend inventory tracking tools.', icon: '🌐' },
  { title: 'NetSuite Accounting Integration', description: 'Automate global transactional summaries and internal balance tracking.', icon: '📊' },
  { title: 'NetSuite Inventory Integration', description: 'Maintain complete cross-platform warehouse balance mapping.', icon: '🏭' },
  { title: 'NetSuite Payment Gateway Integration', description: 'Deploy secure multi-currency payment validation and batch reconciliation paths.', icon: '🔒' },
  { title: 'Custom API Integrations', description: 'Connect modern proprietary software infrastructure straight into standard NetSuite setups.', icon: '🛠️' }
]

let scrollTriggerInstance = null

onMounted(() => {
  // Core Service Card Presentation Delivery Cascade
  const anim = gsap.fromTo(servicesContainer.value.children, { opacity: 0, y: 30 }, {
    opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
    scrollTrigger: { trigger: servicesContainer.value, start: 'top 80%' }
  })
  scrollTriggerInstance = anim.scrollTrigger
})

onUnmounted(() => {
  if (scrollTriggerInstance) scrollTriggerInstance.kill()
})
</script>