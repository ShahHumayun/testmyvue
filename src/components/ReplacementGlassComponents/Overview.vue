<template>
  <section :class="['rg-overview', isDarkMode ? 'theme-dark' : 'theme-light']" ref="sectionRef">

    <!-- TOP ROW: image + the business problem / what was built -->
    <div class="rg-overview__grid">
      <div class="rg-overview__visual">
        <div class="rg-overview__image-wrap">
          <img class="rg-overview__image"
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
            alt="Minimal precision-cut structural architectural glass pane setup, reflecting the product focus of Replacement Glass" />
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
            <span class="rg-role-value">PHP, Wordpress</span>
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
  --accent-color: #00ffa3;
  --img-border: rgba(0, 255, 163, 0.3);
  --img-shadow: rgba(0, 255, 163, 0.08);
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
  --accent-color: #F97316;
  /* Orange replacement */
  --img-border: rgba(249, 115, 22, 0.3);
  --img-shadow: rgba(249, 115, 22, 0.08);
}

.rg-overview {
  background: var(--overview-bg);
  width: 100% !important;
  max-width: 100% !important;
  padding: 100px clamp(2rem, 5vw, 12rem);
  box-sizing: border-box;
  transition: background-color 0.4s ease;
}

.rg-overview__grid {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 56px;
  align-items: center;
}

.rg-label {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.75rem, 0.9vw, 0.95rem);
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent-color);
  margin-bottom: 14px;
}

.rg-overview__heading {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: clamp(1.6rem, 3.2vw, 2.6rem);
  color: var(--text-heading);
  line-height: 1.25;
  margin: 0 0 18px;
  transition: color 0.4s ease;
}

.rg-overview__intro {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.9rem, 1.1vw, 1.15rem);
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
  font-size: clamp(0.7rem, 0.85vw, 0.85rem);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--text-sub);
  transition: color 0.4s ease;
}

.rg-role-value {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.85rem, 1vw, 1.05rem);
  color: var(--text-heading);
  transition: color 0.4s ease;
}

.rg-overview__visual {
  width: 100%;
}

.rg-overview__image-wrap {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
  width: 100%;
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
  box-shadow: inset 0 0 40px var(--img-shadow);
  pointer-events: none;
  transition: border-color 0.4s ease;
}

.rg-overview__details {
  width: 100%;
  max-width: 1200px;
  margin: 56px auto 0;
  padding-top: 44px;
  border-top: 1px solid var(--border-line);
  transition: border-color 0.4s ease;
}

.rg-overview__para {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.9rem, 1.1vw, 1.15rem);
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
  font-size: clamp(1.4rem, 2.2vw, 2.2rem);
  color: var(--accent-color);
}

.rg-stat__label {
  font-family: 'Inter', sans-serif;
  font-size: clamp(0.7rem, 0.85vw, 0.95rem);
  color: var(--text-label);
  line-height: 1.3;
  transition: color 0.4s ease;
}

/* =========================================================================
   BREAKPOINT TIERS
   ========================================================================= */

/* ---------- Desktops — 1025px to 1200px ---------- */
@media (min-width: 1025px) and (max-width: 1200px) {
  .rg-overview {
    padding-left: 4rem;
    padding-right: 4rem;
  }
}

/* ---------- Extra Large Screens / TVs — 1201px and up ---------- */
@media (min-width: 1201px) {
  .rg-overview {
    padding-left: 6rem;
    padding-right: 6rem;
  }
}

@media (min-width: 1536px) {
  .rg-overview {
    padding-left: 8rem;
    padding-right: 8rem;
  }
}

/* ---------- 4K / UHD / large TVs (2560px and up) ---------- */
@media (min-width: 2560px) {
  .rg-overview {
    padding-left: 16rem;
    padding-right: 16rem;
  }
}

/* ---------- 4K / UHD Standard Range / 1921px to 2559px ---------- */
@media (min-width: 1921px) and (max-width: 2559px) {
  .rg-overview {
    padding-left: 12rem;
    padding-right: 12rem;
  }
}

/* ---------- Laptops / Large Tablets — 769px to 1024px ---------- */
@media (min-width: 769px) and (max-width: 1024px) {
  .rg-overview {
    padding-left: 3rem;
    padding-right: 3rem;
  }
}

/* ---------- Mobile Landscape / Tablets — 481px to 768px ---------- */
@media (min-width: 481px) and (max-width: 768px) {
  .rg-overview {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-top: 70px;
    padding-bottom: 70px;
  }

  .rg-overview__grid {
    grid-template-columns: 1fr;
    gap: 36px;
  }

  .rg-overview__image-wrap {
    aspect-ratio: 16 / 10;
  }
}

/* ---------- Mobile Portrait — 320px to 480px ---------- */
@media (max-width: 480px) {
  .rg-overview {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 60px;
    padding-bottom: 60px;
  }

  .rg-overview__grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }

  .rg-overview__image-wrap {
    aspect-ratio: 4 / 3;
    border-radius: 12px;
  }

  .rg-overview__image-border {
    border-radius: 12px;
  }

  .rg-stats {
    grid-template-columns: 1fr;
    gap: 12px;
  }
}

@media (max-width: 360px) {
  .rg-overview {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

/* ---------- Landscape Orientation with Short Viewport Height ---------- */
@media (max-height: 500px) and (orientation: landscape) {
  .rg-overview {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}
</style>