<template>
  <section :class="['rg-result', isDarkMode ? 'theme-dark' : 'theme-light']" ref="sectionRef">

    <!-- TOP ROW: text | image -->
    <div class="rg-result__grid">
      <div class="rg-result__text">
        <span class="rg-label">Results</span>
        <h2 class="rg-result__heading">
          From phone-only quotes to a self-serve storefront
        </h2>
        <p class="rg-result__intro">
          The launch replaced a phone-and-paper quoting process with a
          platform customers can use on their own, at any hour — browsing
          glass types, entering exact dimensions, and checking out without
          waiting for a callback.
        </p>
      </div>

      <div class="rg-result__visual">
        <div class="rg-result__image-wrap">
          <img
            class="rg-result__image"
            src="https://images.unsplash.com/photo-1497465689543-5940d3cede89?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Finished glass product showcase representing the delivered ReplacementGlass.co outcome"
          />
          <div class="rg-result__image-border"></div>
        </div>
      </div>
    </div>

    <!-- BOTTOM: full-width before/after + CTA -->
    <div class="rg-result__details" ref="detailsRef">

      <div class="rg-compare" ref="compareRef">
        <div class="rg-compare__col rg-compare__before">
          <span class="rg-compare__tag">Before</span>
          <ul class="rg-compare__list">
            <li>Quotes required a phone call during business hours</li>
            <li>No way to compare glass types or pricing online</li>
            <li>Custom sizing handled manually, prone to back-and-forth</li>
          </ul>
        </div>
        <div class="rg-compare__col rg-compare__after">
          <span class="rg-compare__tag">After</span>
          <ul class="rg-compare__list">
            <li>Instant online quoting, available 24/7</li>
            <li>Full catalog with live pricing by type and size</li>
            <li>Guided configurator captures exact dimensions upfront</li>
          </ul>
        </div>
      </div>

      <p class="rg-result__para">
        The bigger shift was in how much trust the site had to carry on its
        own. Without a person on the phone to answer questions, the interface
        had to do that job instead — clear product photography, plain-language
        sizing guidance, and a checkout flow designed to remove hesitation at
        the exact points where customers used to stop and call.
      </p>

      <div class="rg-result__cta">
        <p class="rg-result__cta-text">Need custom quoting built for your glass or fabrication business?</p>
        <router-link to="/consultation" class="rg-cta-btn">
          Get a Quote
          <span class="rg-cta-arrow" aria-hidden="true">→</span>
        </router-link>
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
const compareRef = ref(null)

let triggers = []

onMounted(() => {
  gsap.fromTo(
    sectionRef.value.querySelectorAll('.rg-result__text > *'),
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
    '.rg-result__image-wrap',
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
    trigger: detailsRef.value,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.fromTo(
        compareRef.value.querySelectorAll('.rg-compare__col'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out' }
      )
      gsap.fromTo(
        detailsRef.value.querySelectorAll('.rg-result__para, .rg-result__cta'),
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: 'power3.out', delay: 0.2 }
      )
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
  --result-bg: #000000;
  --text-heading: #ffffff;
  --text-body: rgba(255, 255, 255, 0.65);
  --border-line: rgba(255, 255, 255, 0.1);
  --cta-bg: rgba(255, 255, 255, 0.02);
  --cta-border: rgba(255, 255, 255, 0.08);
  --compare-before-bg: rgba(255, 255, 255, 0.02);
  --compare-before-border: rgba(255, 255, 255, 0.08);
  
  --accent-color: #00ffa3;
  --img-border: rgba(0, 255, 163, 0.3);
  --compare-after-bg: rgba(0, 255, 163, 0.04);
  --compare-after-border: rgba(0, 255, 163, 0.25);
  --img-shadow: rgba(0, 255, 163, 0.08);
}

.theme-light {
  --result-bg: #ffffff;
  --text-heading: #0f172a;
  --text-body: #475569;
  --border-line: rgba(15, 23, 42, 0.08);
  --cta-bg: #f8fafc;
  --cta-border: rgba(15, 23, 42, 0.08);
  --compare-before-bg: #f8fafc;
  --compare-before-border: rgba(15, 23, 42, 0.08);

  --accent-color: #F97316; /* Orange replacement */
  --img-border: rgba(249, 115, 22, 0.2);
  --compare-after-bg: rgba(249, 115, 22, 0.06);
  --compare-after-border: rgba(249, 115, 22, 0.3);
  --img-shadow: rgba(249, 115, 22, 0.08);
}

.rg-result {
  background: var(--result-bg);
  padding: 100px 24px;
  transition: background-color 0.4s ease;
}

.rg-result__grid {
  max-width: 1160px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 56px;
  align-items: center;
}

.rg-label {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 12.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent-color);
  margin-bottom: 14px;
}

.rg-result__heading {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  color: var(--text-heading);
  line-height: 1.25;
  margin: 0 0 18px;
  transition: color 0.4s ease;
}

.rg-result__intro {
  font-family: 'Inter', sans-serif;
  font-size: 0.98rem;
  line-height: 1.75;
  color: var(--text-body);
  margin: 0;
  transition: color 0.4s ease;
}

.rg-result__image-wrap {
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  aspect-ratio: 4 / 3;
}

.rg-result__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.9) contrast(1.05);
}

.rg-result__image-border {
  position: absolute;
  inset: 0;
  border: 1px solid var(--img-border);
  border-radius: 14px;
  box-shadow: inset 0 0 40px var(--img-shadow);
  pointer-events: none;
  transition: border-color 0.4s ease;
}

.rg-result__details {
  max-width: 900px;
  margin: 56px auto 0;
  padding-top: 44px;
  border-top: 1px solid var(--border-line);
  transition: border-color 0.4s ease;
}

.rg-compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 40px;
}

.rg-compare__col {
  border-radius: 14px;
  padding: 22px 22px 24px;
  border: 1px solid var(--compare-before-border);
  background: var(--compare-before-bg);
  transition: background-color 0.4s ease, border-color 0.4s ease;
}

.rg-compare__after {
  border-color: var(--compare-after-border);
  background: var(--compare-after-bg);
}

.rg-compare__tag {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 11.5px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--text-heading);
  margin-bottom: 14px;
  transition: color 0.4s ease;
}

.rg-compare__after .rg-compare__tag {
  color: var(--accent-color);
}

.rg-compare__list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.rg-compare__list li {
  font-family: 'Inter', sans-serif;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--text-body);
  padding-left: 18px;
  position: relative;
  transition: color 0.4s ease;
}

.rg-compare__list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--text-body);
  opacity: 0.5;
}

.rg-compare__after .rg-compare__list li::before {
  background: var(--accent-color);
  opacity: 1;
}

.rg-result__para {
  font-family: 'Inter', sans-serif;
  font-size: 0.98rem;
  line-height: 1.8;
  color: var(--text-body);
  margin: 0 0 26px;
  transition: color 0.4s ease;
}

.rg-result__cta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 40px;
  padding: 26px 28px;
  border: 1px solid var(--cta-border);
  border-radius: 14px;
  background: var(--cta-bg);
  transition: background-color 0.4s ease, border-color 0.4s ease;
}

.rg-result__cta-text {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.05rem;
  color: var(--text-heading);
  margin: 0;
  max-width: 420px;
  transition: color 0.4s ease;
}

.rg-cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  background-color: var(--accent-color);
  color: #0f172a;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 14px;
  padding: 12px 22px;
  cursor: pointer;
  white-space: nowrap;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.rg-cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(249, 115, 22, 0.35);
}

.rg-cta-btn:active {
  transform: translateY(0);
}

.rg-cta-arrow {
  transition: transform 0.2s ease;
}

.rg-cta-btn:hover .rg-cta-arrow {
  transform: translateX(3px);
}

@media (max-width: 900px) {
  .rg-result__grid { grid-template-columns: 1fr; gap: 36px; }
  .rg-result__grid .rg-result__visual { order: -1; }
  .rg-compare { grid-template-columns: 1fr; }
}

@media (max-width: 560px) {
  .rg-result__cta { flex-direction: column; align-items: flex-start; }
  .rg-cta-btn { width: 100%; justify-content: center; }
}
</style>