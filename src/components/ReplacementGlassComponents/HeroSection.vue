<template>
  <section :class="['rg-hero', isDarkMode ? 'theme-dark' : 'theme-light']" ref="heroRef">
    <div class="rg-hero__glow" ref="glowRef"></div>
    <div class="rg-hero__grid"></div>

    <div class="rg-hero__eyebrow" ref="eyebrowRef">
      <span class="rg-dot"></span>
      Case Study
    </div>

    <h1 class="rg-hero__title" ref="titleRef">
      Replacement<span class="rg-accent">Glass</span>.co
    </h1>

    <p class="rg-hero__tagline" ref="taglineRef">
      A custom quoting &amp; e-commerce site built for a glass-cutting business —
      helping customers order tempered, annealed, mirror and ceramic glass
      panels cut to exact size, online.
    </p>

    <div class="rg-hero__tags" ref="tagsRef">
      <span class="rg-tag">PHP</span>
      <span class="rg-tag">E-commerce</span>
      <span class="rg-tag">Custom Quoting</span>
    </div>

    <!-- ✅ NEW: two-column row — image + description side by side -->
    <div class="rg-hero__content-row">
      <div class="rg-image" ref="imageRef" @mousemove="onTilt" @mouseleave="onTiltReset">
        <img class="rg-image__photo"
          src="https://images.unsplash.com/photo-1435575653489-b0873ec954e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Precision-cut glass panels representing the ReplacementGlass.co product world" />
        <div class="rg-image__shine" ref="shineRef"></div>
        <div class="rg-image__border"></div>
      </div>

      <p class="rg-hero__description" ref="descriptionRef">ReplacementGlass.co is a custom eCommerce platform
        specializing in precision-cut glass products for residential and commercial applications. The website allows
        customers to order custom-sized tempered, annealed, ceramic, and mirror glass tailored to their exact
        specifications. With an intuitive product customization process, secure checkout, and comprehensive product
        catalog, the platform simplifies purchasing replacement glass for tabletops, cabinets, shelves, fireplaces,
        mirrors, and other custom applications. The company emphasizes high-quality craftsmanship, competitive wholesale
        pricing, and dependable nationwide shipping backed by decades of industry experience.</p>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import gsap from 'gsap'

// Injected dynamic site theme status indicator configuration
const isDarkMode = inject('isDarkMode', ref(true))

const heroRef = ref(null)
const glowRef = ref(null)
const eyebrowRef = ref(null)
const titleRef = ref(null)
const taglineRef = ref(null)
const tagsRef = ref(null)
const imageRef = ref(null)
const shineRef = ref(null)
const descriptionRef = ref(null)

function onTilt(e) {
  const rect = imageRef.value.getBoundingClientRect()
  const px = (e.clientX - rect.left) / rect.width - 0.5
  const py = (e.clientY - rect.top) / rect.height - 0.5

  gsap.to(imageRef.value, {
    rotateY: px * 6,
    rotateX: -py * 6,
    duration: 0.5,
    ease: 'power2.out'
  })
}

function onTiltReset() {
  gsap.to(imageRef.value, {
    rotateY: 0,
    rotateX: 0,
    duration: 0.6,
    ease: 'power3.out'
  })
}

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

  tl.fromTo(glowRef.value, { opacity: 0 }, { opacity: 1, duration: 1.2 })
    .fromTo(eyebrowRef.value, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, '-=0.8')
    .fromTo(titleRef.value, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7 }, '-=0.3')
    .fromTo(taglineRef.value, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
    .fromTo(tagsRef.value.children, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 }, '-=0.3')
    .fromTo(
      imageRef.value,
      { y: 60, opacity: 0, scale: 0.92, rotateX: 8 },
      { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 1, ease: 'power4.out' },
      '-=0.3'
    )
    .fromTo(
      shineRef.value,
      { xPercent: -120 },
      { xPercent: 220, duration: 1.2, ease: 'power2.inOut' },
      '-=0.5'
    )
    .fromTo(
      descriptionRef.value,
      { x: 24, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6 },
      '-=0.6'
    )
})
</script>

<style scoped>
/* CSS Variables Context Definition mapping */
.theme-dark {
  --hero-bg: #000000;
  --text-main: #ffffff;
  --text-muted: rgba(255, 255, 255, 0.72);
  --text-description: rgba(255, 255, 255, 0.65);
  --accent-color: #00ffa3;
  --tag-bg: rgba(0, 255, 163, 0.06);
  --tag-border: rgba(0, 255, 163, 0.35);
  --shadow-color: rgba(0, 0, 0, 0.65);
}

.theme-light {
  --hero-bg: #ffffff;
  --text-main: #0f172a;
  --text-muted: #475569;
  --text-description: #334155;
  --accent-color: #F97316;
  --tag-bg: #fff7ed;
  --tag-border: rgba(249, 115, 22, 0.35);
  --shadow-color: rgba(15, 23, 42, 0.08);
}

.rg-hero {
  position: relative;
  min-height: 100vh;
  width: 100% !important;
  max-width: 100% !important;
  background: var(--hero-bg);
  color: var(--text-main);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 140px clamp(2rem, 5vw, 12rem) 100px;
  overflow: hidden;
  text-align: center;
  box-sizing: border-box;
  transition: background-color 0.4s ease, color 0.4s ease;
}

/* Background elements removed */
.rg-hero__grid,
.rg-hero__glow {
  display: none;
}

.rg-hero__eyebrow {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.75rem, 0.9vw, 0.95rem);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent-color);
  padding: 7px 16px;
  border: 1px solid var(--tag-border);
  border-radius: 999px;
  background: var(--tag-bg);
  margin-bottom: 24px;
}

.rg-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-color);
  box-shadow: 0 0 10px 2px var(--accent-color);
  animation: rg-pulse 1.8s ease-in-out infinite;
}

@keyframes rg-pulse {

  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.35;
  }
}

.rg-hero__title {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 100%;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: clamp(2rem, 5.5vw, 5.2rem);
  color: var(--text-main);
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 22px;
  word-break: break-word;
  overflow-wrap: break-word;
  transition: color 0.4s ease;
}

.rg-accent {
  background: linear-gradient(120deg, var(--accent-color) 0%, var(--accent-color) 50%, var(--accent-color) 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rg-shimmer 4s linear infinite;
}

@keyframes rg-shimmer {
  to {
    background-position: 200% center;
  }
}

.rg-hero__tagline {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 750px;
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.95rem, 1.2vw, 1.25rem);
  line-height: 1.65;
  color: var(--text-muted);
  margin: 0 0 30px;
  transition: color 0.4s ease;
}

.rg-hero__tags {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 56px;
  width: 100%;
}

.rg-tag {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.75rem, 0.9vw, 0.95rem);
  color: var(--accent-color);
  border: 1px solid var(--tag-border);
  background: var(--tag-bg);
  padding: 6px 14px;
  border-radius: 999px;
  transition: border-color 0.25s ease, background 0.25s ease, color 0.4s ease;
}

.rg-tag:hover {
  border-color: var(--accent-color);
  background: var(--accent-color);
  color: #fff;
}

.rg-hero__content-row {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: clamp(28px, 4vw, 56px);
  align-items: center;
  text-align: left;
}

.rg-image {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 50px 120px var(--shadow-color);
  transform-style: preserve-3d;
  perspective: 1000px;
  cursor: pointer;
  transition: box-shadow 0.4s ease;
}

.rg-image__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.rg-image__border {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  border: 1px solid var(--tag-border);
  pointer-events: none;
  transition: border-color 0.4s ease;
}

.rg-image__shine {
  display: none;
}

.rg-hero__description {
  position: relative;
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.85rem, 1.05vw, 1.15rem);
  line-height: 1.85;
  color: var(--text-description);
  transition: color 0.4s ease;
  text-align: left;
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .rg-hero {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  .rg-hero__title {
    font-size: 3.5rem;
  }

  .rg-hero__tagline {
    font-size: 1.1rem;
  }

  .rg-hero__description {
    font-size: 0.95rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .rg-hero {
    padding-left: 6rem;
    padding-right: 6rem;
  }

  .rg-hero__title {
    font-size: 4.2rem;
  }

  .rg-hero__tagline {
    font-size: 1.2rem;
  }

  .rg-hero__description {
    font-size: 1.05rem;
  }
}

@media (min-width: 1536px) {
  .rg-hero {
    padding-left: 8rem;
    padding-right: 8rem;
  }

  .rg-hero__title {
    font-size: 4.8rem;
  }

  .rg-hero__tagline {
    font-size: 1.3rem;
  }

  .rg-hero__description {
    font-size: 1.15rem;
  }
}

/* ---------- 4K / UHD / large TVs (2560px and up) ---------- */
@media (min-width: 2560px) {
  .rg-hero {
    padding-left: 16rem;
    padding-right: 16rem;
  }

  .rg-hero__title {
    font-size: 6.2rem;
  }

  .rg-hero__tagline {
    font-size: 1.6rem;
  }

  .rg-hero__description {
    font-size: 1.4rem;
  }

  .rg-image {
    aspect-ratio: 16 / 10;
  }
}

/* ---------- 4K / UHD Standard Range / 1921px to 2559px ---------- */
@media (min-width: 1921px) and (max-width: 2559px) {
  .rg-hero {
    padding-left: 12rem;
    padding-right: 12rem;
  }

  .rg-hero__title {
    font-size: 5.5rem;
  }

  .rg-hero__tagline {
    font-size: 1.45rem;
  }

  .rg-hero__description {
    font-size: 1.25rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .rg-hero {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .rg-hero__title {
    font-size: 3rem;
  }

  .rg-hero__tagline {
    font-size: 1.05rem;
  }

  .rg-hero__description {
    font-size: 0.9rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .rg-hero {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 110px;
    padding-bottom: 70px;
  }

  .rg-hero__title {
    font-size: 2.4rem;
  }

  .rg-hero__tagline {
    font-size: 1rem;
  }

  .rg-hero__content-row {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }

  .rg-hero__description {
    text-align: left;
    font-size: 0.9rem;
  }

  .rg-image {
    aspect-ratio: 16 / 10;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .rg-hero {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 100px;
    padding-bottom: 60px;
  }

  .rg-hero__title {
    font-size: 1.9rem;
  }

  .rg-hero__tagline {
    font-size: 0.9rem;
  }

  .rg-hero__content-row {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1.5rem;
  }

  .rg-hero__description {
    text-align: left;
    font-size: 0.82rem;
  }

  .rg-image {
    aspect-ratio: 4 / 3;
    border-radius: 12px;
  }

  .rg-image__border {
    border-radius: 12px;
  }
}

@media (max-width: 360px) {
  .rg-hero {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }

  .rg-hero__title {
    font-size: 1.7rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .rg-hero {
    padding-top: 80px;
    padding-bottom: 50px;
    min-height: auto;
  }
}
</style>