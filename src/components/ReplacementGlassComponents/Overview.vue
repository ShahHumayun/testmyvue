<template>
  <section :class="['rg-overview', isDarkMode ? 'theme-dark' : 'theme-light']" ref="sectionRef">

    <!-- TOP ROW: image + the business problem / what was built -->
    <div class="rg-overview__grid">
      <div class="rg-overview__visual">
        <div class="rg-overview__image-wrap">
          <img
            class="rg-overview__image"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Minimal precision-cut structural architectural glass pane setup, reflecting the product focus of Replacement Glass"
          />
          <div class="rg-overview__image-border"></div>
        </div>
      </div>

      <div class="rg-overview__text">
        <span class="rg-label">Overview</span>
        <h2 class="rg-overview__heading">
          Turning a walk-in glass shop into an online storefront
        </h2>
        <p class="rg-overview__intro">
          Before this project, ordering a custom-cut glass panel meant calling
          the shop, describing measurements over the phone, and waiting on a
          manual quote. There was no way for a customer to see pricing,
          compare glass types, or place an order without picking up the phone
          first — which slowed down every sale and put extra load on staff.
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
    </div>

    <!-- BOTTOM: full-width — how it was designed/built to solve that problem -->
    <div class="rg-overview__details" ref="detailsRef">
      <p class="rg-overview__para">
        The solution centers on a guided product configurator: customers pick
        a glass type — tempered, annealed, mirror, or ceramic — enter exact
        dimensions, and see a live price before adding anything to cart. Every
        screen was built mobile-first, since most inbound traffic for a local
        glass business comes from people searching on their phone mid-project,
        standing in front of the window or cabinet they're trying to measure.
      </p>

      <div class="rg-stats" ref="statsRef">
        <div class="rg-stat">
          <span class="rg-stat__number">
            <span ref="statOne">0</span>+
          </span>
          <span class="rg-stat__label">Glass Types Cataloged</span>
        </div>
        <div class="rg-stat">
          <span class="rg-stat__number">
            <span ref="statTwo">0</span>+
          </span>
          <span class="rg-stat__label">Product Categories</span>
        </div>
        <div class="rg-stat">
          <span class="rg-stat__number">
            <span ref="statThree">0</span>%
          </span>
          <span class="rg-stat__label">Mobile-Responsive Design</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, inject } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Inject the shared site theme preference seamlessly
const isDarkMode = inject('isDarkMode', ref(true))

const sectionRef = ref(null)
const detailsRef = ref(null)
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
      if (el) el.textContent = Math.round(obj.val) + suffix
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
    { x: -40, opacity: 0 },
    {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.value, start: 'top 70%' }
    }
  )

  gsap.fromTo(
    detailsRef.value.querySelector('.rg-overview__para'),
    { y: 20, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: { trigger: detailsRef.value, start: 'top 85%' }
    }
  )

  const st = ScrollTrigger.create({
    trigger: statsRef.value,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      animateCount(statOne.value, 12, '')
      animateCount(statTwo.value, 5, '')
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
/* CSS Theme Variable Mapping Matrix */
.theme-dark {
  --overview-bg: #000000;
  --text-heading: #ffffff;
  --text-body: rgba(255, 255, 255, 0.65);
  --text-sub: rgba(255, 255, 255, 0.4);
  --text-label: rgba(255, 255, 255, 0.55);
  --border-line: rgba(255, 255, 255, 0.1);
  --stat-bg: rgba(255, 255, 255, 0.02);
  --stat-border: rgba(255, 255, 255, 0.08);
  --img-border: rgba(0, 255, 163, 0.3);
}

.theme-light {
  --overview-bg: #ffffff;
  --text-heading: #0f172a;
  --text-body: #475569;
  --text-sub: #64748b;
  --text-label: #475569;
  --border-line: rgba(15, 23, 42, 0.08);
  --stat-bg: #f8fafc;
  --stat-border: rgba(15, 23, 42, 0.08);
  --img-border: rgba(0, 255, 163, 0.2);
}

.rg-overview {
  background: var(--overview-bg);
  padding: 100px 24px;
  transition: background-color 0.4s ease;
}

/* Top row: image | intro text */
.rg-overview__grid {
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 56px;
  align-items: center;
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
  color: var(--text-heading);
  line-height: 1.25;
  margin: 0 0 18px;
  transition: color 0.4s ease;
}

.rg-overview__intro {
  font-family: 'Inter', sans-serif;
  font-size: 0.98rem;
  line-height: 1.75;
  color: var(--text-body);
  margin: 0;
  transition: color 0.4s ease;
}

.rg-overview__role {
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid var(--border-line);
  transition: border-color 0.4s ease;
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
  color: var(--text-sub);
  transition: color 0.4s ease;
}

.rg-role-value {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: var(--text-heading);
  transition: color 0.4s ease;
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
  border: 1px solid var(--img-border);
  border-radius: 14px;
  box-shadow: inset 0 0 40px rgba(0, 255, 163, 0.08);
  pointer-events: none;
  transition: border-color 0.4s ease;
}

/* Bottom full-width detail block */
.rg-overview__details {
  max-width: 820px;
  margin: 56px auto 0;
  padding-top: 44px;
  border-top: 1px solid var(--border-line);
  transition: border-color 0.4s ease;
}

.rg-overview__para {
  font-family: 'Inter', sans-serif;
  font-size: 0.98rem;
  line-height: 1.8;
  color: var(--text-body);
  margin: 0 0 36px;
  transition: color 0.4s ease;
}

.rg-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.rg-stat {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 18px 14px;
  border: 1px solid var(--stat-border);
  border-radius: 12px;
  background: var(--stat-bg);
  text-align: center;
  transition: background-color 0.4s ease, border-color 0.4s ease;
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
  color: var(--text-label);
  line-height: 1.3;
  transition: color 0.4s ease;
}

@media (max-width: 900px) {
  .rg-overview__grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }
}

@media (max-width: 480px) {
  .rg-stats { grid-template-columns: 1fr; }
}
</style>