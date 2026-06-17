<template>
  <section class="py-32 px-6 border-b border-neutral-900 overflow-hidden relative z-20">
    <div class="max-w-7xl mx-auto">
      <div class="text-center max-w-2xl mx-auto mb-20">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Designed To Impress. <br><span class="text-[#00ffa3]">Built To Perform.</span>
        </h2>
      </div>

      <div ref="showcaseGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(app, idx) in showcaseApps"
          :key="idx"
          class="showcase-card group bg-neutral-950 border border-neutral-900 rounded-3xl p-6 flex flex-col justify-between items-center text-center cursor-pointer transition-all duration-500 hover:border-neutral-800"
        >
          <div class="relative pt-2 pb-3">
            <!-- Side buttons -->
            <span class="absolute -left-0.5 top-12 w-0.5 h-5 bg-neutral-600 rounded-l-full"></span>
            <span class="absolute -left-0.5 top-20 w-0.5 h-8 bg-neutral-600 rounded-l-full"></span>
            <span class="absolute -right-0.5 top-16 w-0.5 h-10 bg-neutral-600 rounded-r-full"></span>

            <!-- Phone shell -->
            <div class="w-36 h-72 bg-black border-[3px] border-neutral-800 ring-1 ring-neutral-700/40 rounded-[32px] p-1.5 shadow-[0_25px_50px_-12px_rgba(0,255,163,0.15)] relative overflow-hidden transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1">

              <!-- Screen -->
              <div class="w-full h-full rounded-[26px] overflow-hidden relative bg-black">
                <img
                  :src="app.image"
                  :alt="app.title"
                  loading="lazy"
                  decoding="async"
                  class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <!-- Readability gradient -->
                <div class="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-black/20"></div>

                <!-- Glass glare -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>

                <!-- Dynamic island -->
                <div class="absolute top-2 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full z-20 flex items-center justify-end pr-1 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                  <div class="w-1 h-1 rounded-full bg-neutral-700"></div>
                </div>

                <!-- Home indicator -->
                <div class="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-9 h-1 bg-white/80 rounded-full"></div>
              </div>
            </div>
          </div>

          <div class="mt-2 space-y-2">
            <h3 class="text-xl font-bold tracking-tight text-white">{{ app.title }}</h3>
            <p class="text-neutral-500 text-xs uppercase font-semibold tracking-wider">{{ app.category }}</p>
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

const showcaseGrid = ref(null)

// Real Unsplash photos, free under the Unsplash License:
// Ecommerce / Fintech / Healthcare: Vitaly Gariev (@silverkblack)
// Business Management: Jakub Żerdzicki (@jakubzerdzicki)
// Food Delivery: Lucian Alexe (@lucian_alexe)
// Booking: Adam Juman (@jumanjiphotos)
const showcaseApps = [
  {
    title: 'Ecommerce App',
    category: 'Retail Platform',
    image: 'https://images.unsplash.com/photo-1758273705998-05655eea4635?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Healthcare App',
    category: 'Telehealth System',
    image: 'https://images.unsplash.com/photo-1758691463384-771db2f192b3?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Fintech App',
    category: 'Digital Banking Node',
    image: 'https://images.unsplash.com/photo-1758598303866-743838235b41?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Business Management App',
    category: 'Internal Tools',
    image: 'https://images.unsplash.com/photo-1767424412548-1a1ac7f4b9bc?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Food Delivery App',
    category: 'Logistics Matrix',
    image: 'https://images.unsplash.com/photo-1572195577046-2f25894c06fc?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Booking Application',
    category: 'Marketplace Automation',
    image: 'https://images.unsplash.com/photo-1753029995957-f973b37fd0e3?q=80&w=600&auto=format&fit=crop'
  }
]

onMounted(() => {
  gsap.fromTo(showcaseGrid.value.children, { opacity: 0, y: 50 }, {
    opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out',
    scrollTrigger: { trigger: showcaseGrid.value, start: 'top 80%' }
  })
})
</script>