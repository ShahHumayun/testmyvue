<template>
  <section class="rg-features" ref="sectionRef">
    <span class="rg-label">Key Features</span>
    <h2 class="rg-features__heading">What the site does</h2>

    <div class="rg-features__grid" ref="gridRef">
      <div class="rg-card" v-for="f in features" :key="f.title">
        <div class="rg-card__glow"></div>
        <div class="rg-card__icon" v-html="f.icon"></div>
        <h3 class="rg-card__title">{{ f.title }}</h3>
        <p class="rg-card__desc">{{ f.desc }}</p>
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
const gridRef = ref(null)

const features = [
  {
    title: 'Instant Quote Calculator',
    desc: 'Customers enter dimensions, glass type, and edge finish, and get a live price estimate before checkout.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="2" width="16" height="20" rx="2" stroke="#00ffa3" stroke-width="1.6"/><path d="M8 7h8M8 11h8M8 15h5" stroke="#00ffa3" stroke-width="1.6"/></svg>'
  },
  {
    title: 'Product Catalog',
    desc: 'Tempered, annealed, mirror, and ceramic glass organized into browsable, filterable categories.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="8" height="8" stroke="#00ffa3" stroke-width="1.6"/><rect x="13" y="3" width="8" height="8" stroke="#00ffa3" stroke-width="1.6"/><rect x="3" y="13" width="8" height="8" stroke="#00ffa3" stroke-width="1.6"/><rect x="13" y="13" width="8" height="8" stroke="#00ffa3" stroke-width="1.6"/></svg>'
  },
  {
    title: 'Custom Size Requests',
    desc: 'A guided form walks customers through non-standard sizes and shapes for made-to-order panels.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 20L20 4M4 4h6M4 4v6M20 20h-6M20 20v-6" stroke="#00ffa3" stroke-width="1.6"/></svg>'
  },
  {
    title: 'Order Tracking',
    desc: 'Customers can follow their order from quote approval through cutting and delivery.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#00ffa3" stroke-width="1.6"/><path d="M12 7v5l3 3" stroke="#00ffa3" stroke-width="1.6"/></svg>'
  },
  {
    title: 'Mobile-First Checkout',
    desc: 'A streamlined, thumb-friendly checkout flow built for customers ordering from a job site or store.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="7" y="2" width="10" height="20" rx="2" stroke="#00ffa3" stroke-width="1.6"/><path d="M11 18h2" stroke="#00ffa3" stroke-width="1.6"/></svg>'
  },
  {
    title: 'Reusable Components',
    desc: 'Product cards, forms, and layout blocks built as isolated Vue components for easy catalog growth.',
    icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="#00ffa3" stroke-width="1.6"/><rect x="14" y="3" width="7" height="7" rx="1" stroke="#00ffa3" stroke-width="1.6"/><rect x="3" y="14" width="7" height="7" rx="1" stroke="#00ffa3" stroke-width="1.6"/><rect x="14" y="14" width="7" height="7" rx="1" stroke="#00ffa3" stroke-width="1.6"/></svg>'
  }
]

let st

onMounted(() => {
  gsap.set(gridRef.value.children, { y: 28, opacity: 0 })
  st = ScrollTrigger.create({
    trigger: sectionRef.value,
    start: 'top 78%',
    once: true,
    onEnter: () => {
      gsap.to(gridRef.value.children, {
        y: 0,
        opacity: 1,
        duration: 0.55,
        stagger: 0.09,
        ease: 'power3.out'
      })
    }
  })
})

onBeforeUnmount(() => st?.kill())
</script>

<style scoped>
.rg-features {
  background: #000000;
  padding: 90px 24px;
  max-width: 1160px;
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

.rg-features__heading {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: clamp(1.5rem, 2.8vw, 2rem);
  color: #ffffff;
  margin: 0 0 40px;
}

.rg-features__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.rg-card {
  position: relative;
  padding: 26px 22px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.015);
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease;
}

.rg-card:hover {
  border-color: rgba(0, 255, 163, 0.4);
  transform: translateY(-4px);
}

.rg-card__glow {
  position: absolute;
  top: -40%;
  right: -30%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0, 255, 163, 0.16) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  pointer-events: none;
}

.rg-card:hover .rg-card__glow {
  opacity: 1;
}

.rg-card__icon {
  display: inline-flex;
  margin-bottom: 16px;
}

.rg-card__title {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: 1.05rem;
  color: #ffffff;
  margin: 0 0 10px;
}

.rg-card__desc {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

@media (max-width: 900px) {
  .rg-features__grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .rg-features__grid { grid-template-columns: 1fr; }
}
</style>