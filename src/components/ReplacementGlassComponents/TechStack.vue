<template>
  <section class="rg-tech" ref="sectionRef">
    <span class="rg-label">Tech Stack</span>
    <h2 class="rg-tech__heading">Built with</h2>

    <div class="rg-tech__list" ref="listRef">
      <div class="rg-tech__item" v-for="tech in stack" :key="tech.name">
        <div class="rg-tech__icon" :style="{ '--tech-color': tech.color }" v-html="tech.icon"></div>
        <div class="rg-tech__body">
          <h3 class="rg-tech__name">{{ tech.name }}</h3>
          <p class="rg-tech__desc">{{ tech.desc }}</p>
        </div>
        <div class="rg-tech__line"></div>
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
const listRef = ref(null)

const stack = [
  {
    name: 'WordPress',
    desc: 'Core CMS powering content, pages, and the catalog structure.',
    color: '#00ffa3',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9.5" stroke="currentColor" stroke-width="1.6"/><path d="M4.5 10.5l3.8 9M19.5 10.5l-3.8 9M8 6.5l4 12 2-6M12 6.5h4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  },
  {
    name: 'PHP',
    desc: 'Server-side logic for custom quote calculations and templating.',
    color: '#8892bf',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="12" rx="10" ry="6" stroke="currentColor" stroke-width="1.6"/><path d="M8 10h1.5c1 0 1.5.5 1.5 1.5S10.5 13 9.5 13H8v-3zm0 0v4M14 10h2M14 10v4M14 12h1.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>'
  },
  {
    name: 'MySQL',
    desc: 'Relational database storing products, orders, and quote requests.',
    color: '#00758f',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><ellipse cx="12" cy="5.5" rx="8" ry="2.5" stroke="currentColor" stroke-width="1.6"/><path d="M4 5.5V18.5C4 19.9 7.6 21 12 21C16.4 21 20 19.9 20 18.5V5.5" stroke="currentColor" stroke-width="1.6"/><path d="M4 12C4 13.4 7.6 14.5 12 14.5C16.4 14.5 20 13.4 20 12" stroke="currentColor" stroke-width="1.6"/></svg>'
  },
  {
    name: 'WooCommerce',
    desc: 'Cart, checkout, and order management for custom glass orders.',
    color: '#96588a',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 6V5a4 4 0 018 0v1" stroke="currentColor" stroke-width="1.6"/><path d="M8 10.5c0 1.5 1 2.5 2 2.5s1.2-1 2-1 1.5 1 2 1c1 0 2-1 2-2.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  },
  {
    name: 'Custom Theme Development',
    desc: 'Hand-built PHP templates and reusable Elementor / Gutenberg blocks.',
    color: '#00ffa3',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="14" y="3" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="3" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke="currentColor" stroke-width="1.6"/></svg>'
  },
  {
    name: 'JavaScript / jQuery',
    desc: 'Client-side interactivity for the quote calculator and product forms.',
    color: '#f0db4f',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M9 8v7.5c0 1.5-.7 2-1.7 2S6 16.8 6 15.8M15 8v6.2c0 1.3.9 1.8 1.9 1.8 1.3 0 1.9-.8 1.9-2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>'
  },
  {
    name: 'Custom Quote Forms',
    desc: 'Dynamic, guided forms for size, glass type, and edge finish selection.',
    color: '#00ffa3',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4z" stroke="currentColor" stroke-width="1.6"/><path d="M8 9h8M8 13h5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>'
  },
  {
    name: 'Hosting &amp; Deployment',
    desc: 'Managed WordPress hosting with staging-to-production deploys.',
    color: '#00ffa3',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 8l10 6 10-6-10-6z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M2 16l10 6 10-6" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>'
  }
]

let st

onMounted(() => {
  gsap.set(listRef.value.children, { opacity: 0, x: -30 })
  st = ScrollTrigger.create({
    trigger: sectionRef.value,
    start: 'top 78%',
    once: true,
    onEnter: () => {
      gsap.to(listRef.value.children, {
        x: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      })
    }
  })
})

onBeforeUnmount(() => st?.kill())
</script>

<style scoped>
.rg-tech {
  position: relative;
  background: #000000;
  padding: 90px 24px;
  max-width: 820px;
  margin: 0 auto;
}

.rg-label {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 12.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #00ffa3;
  margin-bottom: 12px;
}

.rg-tech__heading {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: clamp(1.5rem, 2.8vw, 2rem);
  color: #ffffff;
  margin: 0 0 40px;
}

/* Vertical, one-after-another list */
.rg-tech__list {
  display: flex;
  flex-direction: column;
}

.rg-tech__item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 18px;
  border-radius: 12px;
  transition: background 0.3s ease, transform 0.3s ease;
}

.rg-tech__item:hover {
  background: rgba(0, 255, 163, 0.04);
  transform: translateX(6px);
}

.rg-tech__item:not(:last-child) .rg-tech__line {
  position: absolute;
  left: 39px;
  top: 62px;
  width: 1px;
  height: calc(100% - 24px);
  background: linear-gradient(to bottom, rgba(0, 255, 163, 0.35), transparent);
}

.rg-tech__icon {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid color-mix(in srgb, var(--tech-color) 45%, transparent);
  background: color-mix(in srgb, var(--tech-color) 10%, transparent);
  color: var(--tech-color);
  box-shadow: 0 0 0 0 transparent;
  transition: box-shadow 0.3s ease;
}

.rg-tech__item:hover .rg-tech__icon {
  box-shadow: 0 0 24px -4px var(--tech-color);
}

.rg-tech__body {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.rg-tech__name {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #ffffff;
  margin: 0;
}

.rg-tech__desc {
  font-family: 'Inter', sans-serif;
  font-size: 0.85rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.55);
  margin: 0;
}

@media (max-width: 560px) {
  .rg-tech__item { gap: 14px; padding: 16px 10px; }
  .rg-tech__icon { width: 38px; height: 38px; }
  .rg-tech__line { display: none; }
}
</style>