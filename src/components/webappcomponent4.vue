<template>
  <section :class="['why-section py-32 px-6 border-b relative z-20 transition-colors duration-400', isDarkMode ? 'theme-dark' : 'theme-light']">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      <div ref="whyGraphic" class="relative graphic-card rounded-2xl overflow-hidden max-w-lg mx-auto w-full shadow-2xl">
        <div class="relative aspect-[4/3] overflow-hidden">
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
          <div class="absolute inset-0 image-gradient-base"></div>
          <div class="absolute inset-0 bg-gradient-to-tr from-[#00ffa3]/15 to-transparent mix-blend-screen"></div>
        </div>

        <div class="p-6 space-y-5">
          <p class="text-sm leading-relaxed excerpt-text">
            Every <span class="highlight-text font-medium">custom web application</span> we build is designed to be fast, secure, and easy for your team to use — from internal dashboards to full customer-facing platforms.
          </p>

          <div ref="valueBadges" class="grid grid-cols-2 gap-3">
            <div class="flex items-center gap-2.5 badge-box rounded-xl px-3 py-3">
              <span class="w-7 h-7 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-3.5 h-3.5 text-[#00ffa3]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 2L4.5 14H11L10 22L19.5 10H13L13 2Z" />
                </svg>
              </span>
              <span class="text-xs font-semibold badge-label">Lightning Fast</span>
            </div>

            <div class="flex items-center gap-2.5 badge-box rounded-xl px-3 py-3">
              <span class="w-7 h-7 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-3.5 h-3.5 text-[#00ffa3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.5l7.5 3v5.8c0 5-3.2 8.75-7.5 10.2-4.3-1.45-7.5-5.2-7.5-10.2V5.5l7.5-3Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4" />
                </svg>
              </span>
              <span class="text-xs font-semibold badge-label">Bank-Level Security</span>
            </div>

            <div class="flex items-center gap-2.5 badge-box rounded-xl px-3 py-3">
              <span class="w-7 h-7 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-3.5 h-3.5 text-[#00ffa3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <circle cx="12" cy="12" r="9" />
                  <path stroke-linecap="round" d="M3 12h18M12 3c2.8 2.5 2.8 15.5 0 18M12 3c-2.8 2.5-2.8 15.5 0 18" />
                </svg>
              </span>
              <span class="text-xs font-semibold badge-label">Always Online</span>
            </div>

            <div class="flex items-center gap-2.5 badge-box rounded-xl px-3 py-3">
              <span class="w-7 h-7 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/20 flex items-center justify-center flex-shrink-0">
                <svg class="w-3.5 h-3.5 text-[#00ffa3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 17l5-5 4 4 8-8M16 8h4v4" />
                </svg>
              </span>
              <span class="text-xs font-semibold badge-label">Built to Scale</span>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-8">
        <div class="space-y-4">
          <h2 class="text-3xl md:text-5xl font-bold tracking-tight section-heading">
            Why Businesses Choose Our <span class="text-[#00ffa3]">Development Team</span>
          </h2>
          <p class="text-base leading-relaxed max-w-xl section-description">
            We build custom web applications, business dashboards, and enterprise platforms using modern, scalable technology — designed to help your business run smoother, serve customers better, and grow without rebuilding from scratch.
          </p>
        </div>

        <ul ref="whyList" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <li v-for="(point, idx) in whyChoosePoints" :key="idx" class="flex items-start gap-3 p-3 rounded-lg list-item-box transition-colors duration-200">
            <span class="flex-shrink-0 w-5 h-5 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3]/20 flex items-center justify-center mt-0.5">
              <svg class="w-3 h-3 text-[#00ffa3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>
            </span>
            <span class="font-medium text-sm md:text-base list-item-text">{{ point }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Inject global theme state context seamlessly
const isDarkMode = inject('isDarkMode', ref(true))

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

<style scoped>
/* ── Encapsulated Visual Protection Boundaries ── */
.theme-dark {
  background-color: #000000 !important;
  border-color: #171717 !important; /* border-neutral-900 equivalent */
  --heading-color: #ffffff;
  --desc-color: #a3a3a3; /* text-neutral-400 equivalent */
  --graphic-card-bg: #0a0a0a; /* bg-neutral-950 equivalent */
  --graphic-card-border: #171717; /* border-neutral-900 equivalent */
  --badge-bg: rgba(0, 0, 0, 0.4);
  --badge-border: #171717;
  --badge-label-color: #ffffff;
  --excerpt-color: #a3a3a3;
  --highlight-color: #ffffff;
  --list-hover-bg: #0a0a0a;
  --list-text-color: #d4d4d4; /* text-neutral-300 equivalent */
  --gradient-from: #000000;
  --gradient-via: rgba(0, 0, 0, 0.3);
}

.theme-light {
  background-color: #ffffff !important;
  border-color: #e2e8f0 !important; /* border-slate-200 equivalent */
  --heading-color: #0f172a; /* text-slate-900 equivalent */
  --desc-color: #475569; /* text-slate-600 equivalent */
  --graphic-card-bg: #ffffff;
  --graphic-card-border: #e2e8f0;
  --badge-bg: #f8fafc; /* bg-slate-50 equivalent */
  --badge-border: #cbd5e1; /* border-slate-300 equivalent */
  --badge-label-color: #0f172a;
  --excerpt-color: #475569;
  --highlight-color: #0f172a;
  --list-hover-bg: #f8fafc;
  --list-text-color: #334155; /* text-slate-700 equivalent */
  --gradient-from: #000000; /* Preserve contrast matrix overlay */
  --gradient-via: rgba(0, 0, 0, 0.25);
}

/* ── Explicit Rule Layout Configuration ── */
.why-section {
  width: 100% !important;
}

.section-heading {
  color: var(--heading-color) !important;
  transition: color 0.4s ease;
}

.section-description {
  color: var(--desc-color) !important;
  transition: color 0.4s ease;
}

.graphic-card {
  background-color: var(--graphic-card-bg) !important;
  border: 1px solid var(--graphic-card-border) !important;
  transition: background-color 0.4s ease, border-color 0.4s ease;
}

.image-gradient-base {
  background-image: linear-gradient(to top, var(--gradient-from), var(--gradient-via), transparent) !important;
}

.excerpt-text {
  color: var(--excerpt-color) !important;
}

.highlight-text {
  color: var(--highlight-color) !important;
}

.badge-box {
  background-color: var(--badge-bg) !important;
  border: 1px solid var(--badge-border) !important;
  transition: background-color 0.4s ease, border-color 0.4s ease;
}

.badge-label {
  color: var(--badge-label-color) !important;
}

.list-item-box:hover {
  background-color: var(--list-hover-bg) !important;
}

.list-item-text {
  color: var(--list-text-color) !important;
  transition: color 0.4s ease;
}
</style>