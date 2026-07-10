<template>
  <section :class="['rg-results', isDarkMode ? 'theme-dark' : 'theme-light']" ref="sectionRef">
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
      <router-link to="/Consultation" class="rg-btn rg-btn--primary">
        Get a Quote
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
          <path d="M7 17L17 7M7 7h10v10" stroke="#000" stroke-width="2"/>
        </svg>
      </router-link>
      <router-link to="/" class="rg-btn rg-btn--ghost">
        Back to Home
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Inject the shared site theme preference seamlessly
const isDarkMode = inject('isDarkMode', ref(true))

const sectionRef = ref(null)
const headingRef = ref(null)
const descRef = ref(null)
const actionsRef = ref(null)

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top 75%',
      once: true
    }
  })

  tl.fromTo(headingRef.value, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' })
    .fromTo(descRef.value, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' }, '-=0.3')
    .fromTo(actionsRef.value, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out' }, '-=0.2')
})
</script>

<style scoped>
/* CSS Theme Variable Mapping Matrix */
.theme-dark {
  --results-bg: #000000;
  --text-heading: #ffffff;
  --text-desc: rgba(255, 255, 255, 0.65);
  --glow-color: rgba(0, 255, 163, 0.15);
  --btn-ghost-text: #ffffff;
  --btn-ghost-border: rgba(255, 255, 255, 0.15);
  --btn-ghost-hover-bg: rgba(255, 255, 255, 0.05);
}

.theme-light {
  --results-bg: #ffffff;
  --text-heading: #0f172a;
  --text-desc: #475569;
  --glow-color: rgba(0, 255, 163, 0.05);
  --btn-ghost-text: #0f172a;
  --btn-ghost-border: rgba(15, 23, 42, 0.15);
  --btn-ghost-hover-bg: rgba(15, 23, 42, 0.05);
}

.rg-results {
  position: relative;
  background: var(--results-bg);
  padding: 120px 24px;
  text-align: center;
  overflow: hidden;
  transition: background-color 0.4s ease;
}

.rg-results__glow {
  position: absolute;
  bottom: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, var(--glow-color) 0%, transparent 70%);
  pointer-events: none;
  transition: background 0.4s ease;
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

.rg-results__heading {
  position: relative;
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 700;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  color: var(--text-heading);
  max-width: 640px;
  margin: 0 auto 18px;
  line-height: 1.2;
  transition: color 0.4s ease;
}

.rg-results__desc {
  position: relative;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-desc);
  max-width: 520px;
  margin: 0 auto 40px;
  transition: color 0.4s ease;
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
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 26px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.25s ease, transform 0.2s ease, border-color 0.25s ease, color 0.4s ease;
}

.rg-btn:active {
  transform: scale(0.98);
}

.rg-btn--primary {
  background: #00ffa3;
  color: #000000;
}

.rg-btn--primary:hover {
  background: #33ffb5;
  box-shadow: 0 0 24px rgba(0, 255, 163, 0.35);
}

.rg-btn--ghost {
  border: 1px solid var(--btn-ghost-border);
  color: var(--btn-ghost-text);
}

.rg-btn--ghost:hover {
  background: var(--btn-ghost-hover-bg);
  border-color: var(--btn-ghost-text);
}

@media (max-width: 480px) {
  .rg-results { padding: 90px 20px; }
  .rg-btn { width: 100%; justify-content: center; }
}
</style>