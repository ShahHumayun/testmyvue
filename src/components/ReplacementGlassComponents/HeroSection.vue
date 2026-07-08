<template>
  <section class="rg-hero" ref="heroRef">
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

    <div
      class="rg-image"
      ref="imageRef"
      @mousemove="onTilt"
      @mouseleave="onTiltReset"
    >
      <img
        class="rg-image__photo"
        src="https://images.unsplash.com/photo-1435575653489-b0873ec954e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Precision-cut glass panels representing the ReplacementGlass.co product world"
      />
      <div class="rg-image__shine" ref="shineRef"></div>
      <div class="rg-image__border"></div>
    </div>

    <p class="rg-hero__description" ref="descriptionRef">ReplacementGlass.co is a custom eCommerce platform specializing in precision-cut glass products for residential and commercial applications. The website allows customers to order custom-sized tempered, annealed, ceramic, and mirror glass tailored to their exact specifications. With an intuitive product customization process, secure checkout, and comprehensive product catalog, the platform simplifies purchasing replacement glass for tabletops, cabinets, shelves, fireplaces, mirrors, and other custom applications. The company emphasizes high-quality craftsmanship, competitive wholesale pricing, and dependable nationwide shipping backed by decades of industry experience.</p>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

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
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6 },
      '-=0.2'
    )
})
</script>

<style scoped> 
.rg-hero {
  position: relative;
  min-height: 100vh;
  background: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 140px 24px 100px;
  overflow: hidden;
  text-align: center;
}

.rg-hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(0, 255, 163, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 163, 0.05) 1px, transparent 1px);
  background-size: 48px 48px;
  mask-image: radial-gradient(ellipse 60% 50% at 50% 0%, #000 40%, transparent 100%);
  pointer-events: none;
}

.rg-hero__glow {
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 1000px;
  height: 1000px;
  background: radial-gradient(circle, rgba(0, 255, 163, 0.2) 0%, rgba(0, 255, 163, 0) 65%);
  pointer-events: none;
  z-index: 0;
}

.rg-hero__eyebrow {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #00ffa3;
  padding: 7px 16px;
  border: 1px solid rgba(0, 255, 163, 0.3);
  border-radius: 999px;
  background: rgba(0, 255, 163, 0.05);
  margin-bottom: 24px;
}

.rg-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #00ffa3;
  box-shadow: 0 0 10px 2px #00ffa3;
  animation: rg-pulse 1.8s ease-in-out infinite;
}

@keyframes rg-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}

.rg-hero__title {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: clamp(1.85rem, 6.5vw, 5.2rem);
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin: 0 0 22px;
  word-break: break-word;
  overflow-wrap: break-word;
}

.rg-accent {
  background: linear-gradient(120deg, #00ffa3 0%, #6dffc4 50%, #00ffa3 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rg-shimmer 4s linear infinite;
}

@keyframes rg-shimmer {
  to { background-position: 200% center; }
}

.rg-hero__tagline {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 640px;
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.72);
  margin: 0 0 30px;
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
  font-size: 13px;
  color: #00ffa3;
  border: 1px solid rgba(0, 255, 163, 0.35);
  background: rgba(0, 255, 163, 0.06);
  padding: 6px 14px;
  border-radius: 999px;
  transition: border-color 0.25s ease, background 0.25s ease;
}

.rg-tag:hover {
  border-color: rgba(0, 255, 163, 0.7);
  background: rgba(0, 255, 163, 0.12);
}

/* Image Wrapper */
.rg-image {
  position: relative;
  z-index: 1;
  width: min(980px, 100%);
  aspect-ratio: 16 / 9;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 50px 120px rgba(0, 0, 0, 0.65), 0 0 80px rgba(0, 255, 163, 0.1);
  transform-style: preserve-3d;
  perspective: 1000px;
  cursor: pointer;
}

.rg-image__photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.rg-image__border {
  position: absolute;
  inset: 0;
  border-radius: 20px;
  border: 1px solid rgba(0, 255, 163, 0.35);
  box-shadow: inset 0 0 60px rgba(0, 255, 163, 0.08);
  pointer-events: none;
}

.rg-image__shine {
  position: absolute;
  top: 0;
  left: 0;
  width: 40%;
  height: 100%;
  background: linear-gradient(
    115deg,
    transparent 0%,
    rgba(0, 255, 163, 0.16) 45%,
    rgba(255, 255, 255, 0.22) 50%,
    rgba(0, 255, 163, 0.16) 55%,
    transparent 100%
  );
  pointer-events: none;
}

.rg-hero__description {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 760px;
  margin: 44px auto 0;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.85;
  color: rgba(255, 255, 255, 0.65);
  
  /* Layout adjustments: Clean, crisp text block alignment formatting */
  text-align: justify;
  text-justify: inter-word;
  white-space: normal;
}

/* Responsive Structural Breakpoints */
@media (max-width: 640px) {
  .rg-hero { 
    padding: 100px 20px 60px; 
  }
  .rg-hero__title {
    font-size: 2.2rem;
    line-height: 1.15;
    letter-spacing: -0.01em;
  }
  .rg-hero__tagline { 
    font-size: 0.95rem; 
    line-height: 1.6;
  }
  .rg-image { 
    aspect-ratio: 4 / 3; 
    border-radius: 12px;
  }
  .rg-image__border {
    border-radius: 12px;
  }
  .rg-hero__description {
    font-size: 0.92rem;
    line-height: 1.75;
    margin-top: 32px;
    /* Retain clean left styling on small mobile views to look better on narrow ports */
    text-align: left; 
  }
}

@media (max-width: 360px) {
  .rg-hero__title {
    font-size: 1.8rem;
  }
}
</style>