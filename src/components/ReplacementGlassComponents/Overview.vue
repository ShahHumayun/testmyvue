<template>
  <section class="rg-overview" ref="sectionRef">
    <div class="rg-overview__grid">
      <div class="rg-overview__text">
        <span class="rg-label">Overview</span>
        <h2 class="rg-overview__heading">
          Turning a walk-in glass shop into an online storefront
        </h2>
        <p class="rg-overview__para">
         This project was developed as a modern eCommerce solution focused on delivering a seamless online shopping experience for custom glass products. The primary objective was to simplify the process of ordering precision-cut glass by providing an intuitive interface where customers can easily browse products, customize dimensions, select glass types, and complete secure online purchases.
        </p>
        <p class="rg-overview__para">
          The application was designed with a strong emphasis on usability, responsiveness, and performance. Every page is optimized to provide clear product information, straightforward navigation, and an efficient checkout experience across desktop, tablet, and mobile devices. The modular architecture ensures the platform remains scalable and maintainable as new product categories and features are introduced.
        </p>

        <div class="rg-overview__role">
          <div class="rg-role-item">
            <span class="rg-role-label">Role</span>
            <span class="rg-role-value">Frontend Developer</span>
          </div>
          <div class="rg-role-item">
            <span class="rg-role-label">Stack</span>
            <span class="rg-role-value">Vue.js, Component Architecture</span>
          </div>
          <div class="rg-role-item">
            <span class="rg-role-label">Focus</span>
            <span class="rg-role-value">Custom Quoting &amp; Catalog</span>
          </div>
        </div>
      </div>

      <div class="rg-overview__visual">
        <div class="rg-overview__image-wrap">
          <img
            class="rg-overview__image"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Minimal precision-cut structural architectural glass pane setup, reflecting the product focus of Replacement Glass"
          />
          <div class="rg-overview__image-border"></div>
        </div>

        <div class="rg-stats" ref="statsRef">
          <div class="rg-stat">
            <span class="rg-stat__number">
              <span ref="statOne">0</span>+
            </span>
            <span class="rg-stat__label">Glass Types Cataloged</span>
          </div>
          <div class="rg-stat">
            <span class="rg-stat__number">
              <span ref="statTwo">0</span>
            </span>
            <span class="rg-stat__label">Vue Components Built</span>
          </div>
          <div class="rg-stat">
            <span class="rg-stat__number">
              <span ref="statThree">0</span>%
            </span>
            <span class="rg-stat__label">Mobile-First Layout</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const statsRef = ref(null)
const statOne = ref(null)
const statTwo = ref(null)
const statThree = ref(null)

let triggers = []

function animateCount(el, target, suffix = '') {
  const obj = { val: 0 }
  gsap.to(obj, {
    val: target,
    duration: 1.6,
    ease: 'power2.out',
    onUpdate: () => {
      el.textContent = Math.round(obj.val) + suffix
    }
  })
}

onMounted(() => {
  const textEls = sectionRef.value.querySelectorAll('.rg-overview__text > *')
  gsap.fromTo(
    textEls,
    { y: 24, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.value, start: 'top 75%' }
    }
  )

  gsap.fromTo(
    '.rg-overview__image-wrap',
    { x: 40, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.value, start: 'top 70%' }
    }
  )

  const st = ScrollTrigger.create({
    trigger: statsRef.value,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      animateCount(statOne.value, 12, '')
      animateCount(statTwo.value, 24, '')
      animateCount(statThree.value, 100, '')
    }
  })
  triggers.push(st)
})

onBeforeUnmount(() => {
  triggers.forEach(t => t.kill())
})
</script>

<style scoped>
.rg-overview {
  background: #000000;
  padding: 100px 24px;
}

.rg-overview__grid {
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: start;
}

.rg-label {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 12.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #00ffa3;
  margin-bottom: 14px;
}

.rg-overview__heading {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  color: #ffffff;
  line-height: 1.25;
  margin: 0 0 22px;
}

.rg-overview__para {
  font-family: 'Inter', sans-serif;
  font-size: 0.98rem;
  line-height: 1.75;
  color: rgba(255, 255, 255, 0.65);
  margin: 0 0 18px;
}

.rg-overview__role {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 32px;
  padding-top: 28px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.rg-role-item {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.rg-role-label {
  font-family: 'Inter', sans-serif;
  font-size: 11.5px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
}

.rg-role-value {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #ffffff;
}

/* Visual column */
.rg-overview__image-wrap {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
}

.rg-overview__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.9) contrast(1.05);
}

.rg-overview__image-border {
  position: absolute;
  inset: 0;
  border: 1px solid rgba(0, 255, 163, 0.3);
  border-radius: 14px;
  box-shadow: inset 0 0 40px rgba(0, 255, 163, 0.08);
  pointer-events: none;
}

.rg-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 28px;
}

.rg-stat {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px 14px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.02);
  text-align: center;
}

.rg-stat__number {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: 1.7rem;
  color: #00ffa3;
}

.rg-stat__label {
  font-family: 'Inter', sans-serif;
  font-size: 11.5px;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.3;
}

@media (max-width: 900px) {
  .rg-overview__grid {
    grid-template-columns: 1fr;
    gap: 44px;
  }
}

@media (max-width: 480px) {
  .rg-stats { grid-template-columns: 1fr; }
}
</style>