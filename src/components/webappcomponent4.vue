<!-- <template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      <div ref="whyGraphic" class="relative bg-neutral-950 border border-neutral-900 rounded-2xl p-6 aspect-square max-w-lg mx-auto w-full flex flex-col justify-between overflow-hidden font-mono shadow-2xl">
        <div class="absolute inset-0 bg-gradient-to-tr from-[#00ffa3]/5 to-transparent opacity-40 pointer-events-none"></div>
        
        <div class="flex items-center justify-between border-b border-neutral-900 pb-4">
          <div class="flex items-center gap-2.5">
            <span class="w-2 h-2 rounded-full bg-[#00ffa3] animate-pulse shadow-[0_0_8px_#00ffa3]"></span>
            <span class="text-xs uppercase tracking-widest text-white font-bold">Application Performance Matrix</span>
          </div>
          <span class="text-[10px] text-neutral-600">STATUS // LIVE_OPTIMAL</span>
        </div>

        <div class="relative flex items-center justify-center my-6 flex-1">
          <div class="w-56 h-56 border border-dashed border-neutral-800/80 rounded-full absolute animate-[spin_25s_linear_infinite] flex items-center justify-center">
            <div class="w-3 h-3 bg-[#00ffa3] rounded-full absolute -top-1.5 shadow-[0_0_12px_#00ffa3]"></div>
          </div>
          <div class="w-40 h-40 border border-neutral-900 rounded-full absolute animate-[spin_12s_linear_reverse_infinite]">
            <div class="w-1.5 h-1.5 bg-emerald-500 rounded-full absolute top-6 right-6"></div>
          </div>
          <div class="w-24 h-24 border border-neutral-800 rounded-full absolute bg-black/40 backdrop-blur-sm flex flex-col items-center justify-center">
            <span class="text-[10px] text-neutral-500">UI_SMOOTHNESS</span>
            <span class="text-xs font-bold text-[#00ffa3] animate-pulse">60.0 FPS</span>
          </div>
        </div>

        <div class="space-y-3 bg-black/50 p-4 border border-neutral-900/60 rounded-xl backdrop-blur-md">
          <div>
            <div class="flex justify-between text-[11px] mb-1">
              <span class="text-neutral-500 uppercase">Google Lighthouse Speed Score</span>
              <span class="text-[#00ffa3] font-bold">100/100 (Excellent)</span>
            </div>
            <div class="h-1 bg-neutral-900 rounded-full overflow-hidden">
              <div class="h-full bg-gradient-to-r from-emerald-500 to-[#00ffa3] w-full"></div>
            </div>
          </div>
          <div>
            <div class="flex justify-between text-[11px] mb-1">
              <span class="text-neutral-500 uppercase">Enterprise Infrastructure Uptime</span>
              <span class="text-emerald-400 font-bold">99.99% Guaranteed</span>
            </div>
            <div class="h-1 bg-neutral-900 rounded-full overflow-hidden">
              <div class="h-full bg-emerald-500 w-[99.9%]"></div>
            </div>
          </div>
          <div class="flex items-center justify-between text-[10px] text-neutral-500 pt-1 font-mono border-t border-neutral-900">
            <span>Response: 14ms</span>
            <span>Security: SSL/AES-256</span>
            <span class="text-[#00ffa3] font-bold text-[11px]">VERIFIED</span>
          </div>
        </div>
      </div>
      
      <div class="space-y-8">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight">
          Why Businesses Choose Our <span class="text-[#00ffa3]">Development Team</span>
        </h2>
        <ul ref="whyList" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li v-for="(point, idx) in whyChoosePoints" :key="idx" class="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-950 transition-colors duration-200">
            <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/20 flex items-center justify-center mt-0.5">
              <svg class="w-3 h-3 text-[#00ffa3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            </span>
            <span class="text-neutral-300 font-medium text-sm md:text-base">{{ point }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const whyGraphic = ref(null)
const whyList = ref(null)

const whyChoosePoints = [
  'Fast Development Cycles', 'Modern Technology Stack', 'SEO Friendly Architecture',
  'Mobile Responsive Design', 'Secure Development Practices', 'Scalable Infrastructure', 'Dedicated Support'
]

onMounted(() => {
  gsap.fromTo(whyGraphic.value, { opacity: 0, scale: 0.95 }, {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: 'power2.out',
    scrollTrigger: { trigger: whyGraphic.value, start: 'top 80%' }
  })

  gsap.fromTo(whyList.value.children, { opacity: 0, x: 20 }, {
    opacity: 1,
    x: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power2.out',
    scrollTrigger: { trigger: whyList.value, start: 'top 85%' }
  })
})
</script> -->

<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <div ref="whyGraphic" class="relative bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden max-w-lg mx-auto w-full shadow-2xl">

        <div class="relative aspect-[4/3] overflow-hidden">
          <!-- Photo by Carlos Muza on Unsplash (unsplash.com/@kmuza) -->
          <img
            ref="featureImage"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
            alt="Laptop dashboard displaying business analytics charts, representing custom web application development by WebHive Technologies"
            width="800"
            height="600"
            loading="lazy"
            decoding="async"
            class="w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
          <div class="absolute inset-0 bg-gradient-to-tr from-[#00ffa3]/15 to-transparent mix-blend-screen"></div>
        </div>

        <div class="p-6 space-y-5">
          <p class="text-sm text-neutral-400 leading-relaxed">
            Every <span class="text-white font-medium">custom web application</span> we build is designed to be fast, secure, and easy for your team to use — from internal dashboards to full customer-facing platforms.
          </p>

          <div ref="valueBadges" class="grid grid-cols-2 gap-3">
            <div class="flex items-center gap-2.5 bg-black/40 border border-neutral-900 rounded-xl px-3 py-3">
              <span class="w-7 h-7 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-3.5 h-3.5 text-[#00ffa3]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L4.5 14H11L10 22L19.5 10H13L13 2Z" />
                </svg>
              </span>
              <span class="text-xs font-semibold text-white">Lightning Fast</span>
            </div>

            <div class="flex items-center gap-2.5 bg-black/40 border border-neutral-900 rounded-xl px-3 py-3">
              <span class="w-7 h-7 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-3.5 h-3.5 text-[#00ffa3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.5l7.5 3v5.8c0 5-3.2 8.75-7.5 10.2-4.3-1.45-7.5-5.2-7.5-10.2V5.5l7.5-3Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <span class="text-xs font-semibold text-white">Bank-Level Security</span>
            </div>

            <div class="flex items-center gap-2.5 bg-black/40 border border-neutral-900 rounded-xl px-3 py-3">
              <span class="w-7 h-7 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-3.5 h-3.5 text-[#00ffa3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path stroke-linecap="round" d="M3 12h18M12 3c2.8 2.5 2.8 15.5 0 18M12 3c-2.8 2.5-2.8 15.5 0 18" />
                </svg>
              </span>
              <span class="text-xs font-semibold text-white">Always Online</span>
            </div>

            <div class="flex items-center gap-2.5 bg-black/40 border border-neutral-900 rounded-xl px-3 py-3">
              <span class="w-7 h-7 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-3.5 h-3.5 text-[#00ffa3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 17l5-5 4 4 8-8M16 8h4v4" />
                </svg>
              </span>
              <span class="text-xs font-semibold text-white">Built to Scale</span>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-8">
        <div class="space-y-4">
          <h2 class="text-3xl md:text-5xl font-bold tracking-tight">
            Why Businesses Choose Our <span class="text-[#00ffa3]">Development Team</span>
          </h2>
          <p class="text-neutral-400 text-base leading-relaxed max-w-xl">
            We build custom web applications, business dashboards, and enterprise platforms using modern, scalable technology — designed to help your business run smoother, serve customers better, and grow without rebuilding from scratch.
          </p>
        </div>

        <ul ref="whyList" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li v-for="(point, idx) in whyChoosePoints" :key="idx" class="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-950 transition-colors duration-200">
            <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/20 flex items-center justify-center mt-0.5">
              <svg class="w-3 h-3 text-[#00ffa3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            </span>
            <span class="text-neutral-300 font-medium text-sm md:text-base">{{ point }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const whyGraphic = ref(null)
const whyList = ref(null)
const featureImage = ref(null)
const valueBadges = ref(null)

const whyChoosePoints = [
  'Fast Development Cycles', 'Modern Technology Stack', 'SEO Friendly Architecture',
  'Mobile Responsive Design', 'Secure Development Practices', 'Scalable Infrastructure', 'Dedicated Support'
]

onMounted(() => {
  gsap.fromTo(whyGraphic.value, { opacity: 0, scale: 0.95 }, {
    opacity: 1,
    scale: 1,
    duration: 1.2,
    ease: 'power2.out',
    scrollTrigger: { trigger: whyGraphic.value, start: 'top 80%' }
  })

  const imgTl = gsap.timeline({
    scrollTrigger: { trigger: whyGraphic.value, start: 'top 80%' }
  })
  imgTl
    .fromTo(featureImage.value, { scale: 1.15, opacity: 0 }, { scale: 1.05, opacity: 1, duration: 1.4, ease: 'power2.out' })
    .to(featureImage.value, { scale: 1.12, duration: 16, ease: 'sine.inOut', yoyo: true, repeat: -1 })

  gsap.from(valueBadges.value.children, {
    opacity: 0,
    y: 16,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: { trigger: valueBadges.value, start: 'top 90%' }
  })

  gsap.fromTo(whyList.value.children, { opacity: 0, x: 20 }, {
    opacity: 1,
    x: 0,
    duration: 0.6,
    stagger: 0.08,
    ease: 'power2.out',
    scrollTrigger: { trigger: whyList.value, start: 'top 85%' }
  })
})
</script>