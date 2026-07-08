<template>
  <section class="rg-results" ref="sectionRef">
    <div class="rg-results__glow"></div>

    <span class="rg-label">Outcome</span>
    <h2 class="rg-results__heading" ref="headingRef">
      A storefront that turns measurements into orders
    </h2>
    <p class="rg-results__desc" ref="descRef">
      The site gives Replacement Glass a self-serve quoting experience that
      used to require a phone call — built to scale as new glass types and
      product lines get added to the catalog.
    </p>

    <div class="rg-results__actions" ref="actionsRef">
      <router-link to="/consultation" class="rg-btn rg-btn--primary">
        Get a Quote
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M7 7h10v10" stroke="#000" stroke-width="2"/>
        </svg>
      </router-link>
      <router-link to="/portfolio" class="rg-btn rg-btn--ghost">
        Back to Portfolio
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const headingRef = ref(null)
const descRef = ref(null)
const actionsRef = ref(null)

onMounted(() => {
  gsap.fromTo(
    [headingRef.value, descRef.value, actionsRef.value],
    { y: 24, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.value, start: 'top 80%' }
    }
  )
})
</script>

<style scoped>
.rg-results {
  position: relative;
  background: #000000;
  padding: 120px 24px;
  text-align: center;
  overflow: hidden;
}

.rg-results__glow {
  position: absolute;
  bottom: -30%;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(0, 255, 163, 0.14) 0%, transparent 65%);
  pointer-events: none;
}

.rg-label {
  position: relative;
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 12.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #00ffa3;
  margin-bottom: 14px;
}

.rg-results__heading {
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  color: #ffffff;
  max-width: 640px;
  margin: 0 auto 18px;
  line-height: 1.2;
}

.rg-results__desc {
  position: relative;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.65);
  max-width: 520px;
  margin: 0 auto 40px;
}

.rg-results__actions {
  position: relative;
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
}

.rg-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 13px 26px;
  border-radius: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}

.rg-btn--primary {
  background: #00ffa3;
  color: #000000;
}

.rg-btn--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 255, 163, 0.35);
}

.rg-btn--ghost {
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #ffffff;
  background: transparent;
}

.rg-btn--ghost:hover {
  border-color: #00ffa3;
  color: #00ffa3;
  transform: translateY(-2px);
}
</style>