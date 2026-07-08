<template>
  <section class="rg-gallery" ref="sectionRef">
    <span class="rg-label">Gallery</span>
    <h2 class="rg-gallery__heading">A closer look</h2>

    <div class="rg-gallery__grid" ref="gridRef">
      <div
        class="rg-gallery__tile"
        v-for="(img, i) in images"
        :key="i"
        :style="{ zIndex: i }"
        @mouseenter="raise(i)"
        @mouseleave="reset(i)"
      >
        <img :src="img.src" :alt="img.alt" loading="lazy" />
        <div class="rg-gallery__overlay">
          <span class="rg-gallery__caption">{{ img.caption }}</span>
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
const gridRef = ref(null)

const images = [
  {
    src: 'https://images.unsplash.com/photo-1758846946191-dfe1cd91779b?fm=jpg&q=80&w=800&auto=format&fit=crop',
    alt: 'Modern glass facade reflecting clouds',
    caption: 'Glass facade'
  },
  {
    src: 'https://images.unsplash.com/photo-1741951677247-0e0071bc714a?fm=jpg&q=80&w=800&auto=format&fit=crop',
    alt: 'Glass storefront entrance',
    caption: 'Storefront glazing'
  },
  {
    src: 'https://images.unsplash.com/photo-1722764372202-b8ae35e7d424?fm=jpg&q=80&w=800&auto=format&fit=crop',
    alt: 'Glass shower door panel',
    caption: 'Shower glass'
  },
  {
    src: 'https://images.unsplash.com/photo-1757955770356-31087c5553b6?fm=jpg&q=80&w=800&auto=format&fit=crop',
    alt: 'Geometric glass roof panels',
    caption: 'Structural panels'
  },
  {
    src: 'https://images.unsplash.com/photo-1762952091502-f552ae2a4078?fm=jpg&q=80&w=800&auto=format&fit=crop',
    alt: 'Glass door reflection',
    caption: 'Glass door detail'
  },
  {
    src: 'https://images.unsplash.com/photo-1754825653975-66b691e6938e?fm=jpg&q=80&w=800&auto=format&fit=crop',
    alt: 'Frosted glass panels interior',
    caption: 'Frosted panels'
  },
  {
    src: 'https://images.unsplash.com/photo-1740595362788-78bc54ea1bad?fm=jpg&q=80&w=800&auto=format&fit=crop',
    alt: 'Round mirror glass on wall',
    caption: 'Mirror glass'
  },
  {
    src: 'https://images.unsplash.com/photo-1759020687574-6a69a874ee6c?fm=jpg&q=80&w=800&auto=format&fit=crop',
    alt: 'Glass facade with geometric pattern',
    caption: 'Curtain wall'
  },
  {
    src: 'https://images.unsplash.com/photo-1758846946188-12316e71c680?fm=jpg&q=80&w=800&auto=format&fit=crop',
    alt: 'Glass and steel facade detail',
    caption: 'Edge detail'
  }
]

let st

function raise(i) {
  gsap.to(gridRef.value.children[i], { scale: 1.06, zIndex: 20, duration: 0.3, ease: 'power2.out' })
}

function reset(i) {
  gsap.to(gridRef.value.children[i], { scale: 1, zIndex: i, duration: 0.3, ease: 'power2.out' })
}

onMounted(() => {
  gsap.set(gridRef.value.children, { opacity: 0, scale: 0.9 })
  st = ScrollTrigger.create({
    trigger: sectionRef.value,
    start: 'top 78%',
    once: true,
    onEnter: () => {
      gsap.to(gridRef.value.children, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: { each: 0.06, grid: [3, 3], from: 'start' },
        ease: 'power2.out'
      })
    }
  })
})

onBeforeUnmount(() => st?.kill())
</script>

<style scoped>
.rg-gallery {
  background: #000000;
  padding: 90px 24px;
}

.rg-label,
.rg-gallery__heading {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.rg-label {
  font-family: 'Inter', sans-serif;
  font-size: 12.5px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #00ffa3;
  margin-bottom: 12px;
}

.rg-gallery__heading {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: clamp(1.5rem, 2.8vw, 2rem);
  color: #ffffff;
  margin-bottom: 32px;
}

/* Compact 3x3 grid, tight seams */
.rg-gallery__grid {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.rg-gallery__tile {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 2px;
  transform-origin: center;
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.rg-gallery__tile:hover {
  border-color: rgba(0, 255, 163, 0.5);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 255, 163, 0.3);
}

.rg-gallery__tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  filter: saturate(0.92) contrast(1.03);
}

.rg-gallery__overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 10px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, transparent 55%);
  opacity: 0;
  transition: opacity 0.25s ease;
}

.rg-gallery__tile:hover .rg-gallery__overlay {
  opacity: 1;
}

.rg-gallery__caption {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  letter-spacing: 0.02em;
  color: #ffffff;
}

@media (max-width: 560px) {
  .rg-gallery__grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }
  .rg-gallery__caption {
    font-size: 9.5px;
  }
}
</style>