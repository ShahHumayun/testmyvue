<template>
  <section :class="['rg-gallery', isDarkMode ? 'theme-dark' : 'theme-light']" ref="sectionRef">
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
import { ref, onMounted, onBeforeUnmount, inject } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Inject the shared site theme preference seamlessly
const isDarkMode = inject('isDarkMode', ref(true))

const sectionRef = ref(null)
const gridRef = ref(null)

const images = [
  {
    src: 'https://images.unsplash.com/photo-1758846946191-dfe1cd91779b?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern building facade of glass reflecting clouds and sky',
    caption: 'Reflective Facade Glazing'
  },
  {
    src: 'https://images.unsplash.com/photo-1760987785427-66eb74845e7e?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern office building facade with grid pattern glass reflections in Zurich',
    caption: 'Commercial Curtain Wall'
  },
  {
    src: 'https://images.unsplash.com/photo-1755421657233-4b2edfd3153c?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern glass office buildings reflecting each other in a city skyline',
    caption: 'Urban Glass Skyline'
  },
  {
    src: 'https://images.unsplash.com/photo-1753617882250-ba36e6530de0?auto=format&fit=crop&w=800&q=80',
    alt: 'Close up reflections of surrounding buildings in a glass facade',
    caption: 'Architectural Reflections'
  },
  {
    src: 'https://images.unsplash.com/photo-1758295835306-6c521f5d067c?auto=format&fit=crop&w=800&q=80',
    alt: 'Modern building with reflective blue glass facade and geometric design',
    caption: 'Structural Glazing Panels'
  },
  {
    src: 'https://images.unsplash.com/photo-1758830596893-7aa7c7caf245?auto=format&fit=crop&w=800&q=80',
    alt: 'Geometric pattern of a modern glass building facade from below',
    caption: 'Geometric Glass Panels'
  }
]

let trigger

function raise(idx) {
  const tile = gridRef.value.children[idx]
  gsap.to(tile, {
    scale: 1.05,
    z: 20,
    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
    duration: 0.35,
    ease: 'power2.out'
  })
}

function reset(idx) {
  const tile = gridRef.value.children[idx]
  gsap.to(tile, {
    scale: 1,
    z: 0,
    boxShadow: '0 4px 10px rgba(0,0,0,0)',
    duration: 0.4,
    ease: 'power3.out'
  })
}

onMounted(() => {
  const tiles = gridRef.value.children
  gsap.set(tiles, { opacity: 0, scale: 0.85, y: 40 })

  trigger = ScrollTrigger.create({
    trigger: sectionRef.value,
    start: 'top 80%',
    once: true,
    onEnter: () => {
      gsap.to(tiles, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power4.out'
      })
    }
  })
})

onBeforeUnmount(() => trigger?.kill())
</script>

<style scoped>
/* CSS Theme Variable Mapping Matrix */
.theme-dark {
  --gallery-bg: #000000;
  --text-heading: #ffffff;
  --tile-border: rgba(255, 255, 255, 0.06);
  --tile-hover-border: rgba(0, 255, 163, 0.5);
  --tile-hover-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(0, 255, 163, 0.3);
  --overlay-bg: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%);
  --caption-color: #00ffa3;
}

.theme-light {
  --gallery-bg: #ffffff;
  --text-heading: #0f172a;
  --tile-border: rgba(15, 23, 42, 0.08);
  --tile-hover-border: rgba(0, 255, 163, 0.6);
  --tile-hover-shadow: 0 12px 24px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(0, 255, 163, 0.4);
  --overlay-bg: linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.3) 60%, transparent 100%);
  --caption-color: #00ffa3;
}

.rg-gallery {
  background: var(--gallery-bg);
  padding: 80px 24px;
  text-align: center;
  transition: background-color 0.4s ease;
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

.rg-gallery__heading {
  font-family: 'Space Grotesk', sans-serif;
  font-weight: 600;
  font-size: clamp(1.5rem, 2.8vw, 2rem);
  color: var(--text-heading);
  margin-bottom: 32px;
  transition: color 0.4s ease;
}

/* Compact 3x3 grid, tight seams */
.rg-gallery__grid {
  position: relative;
  max-width: 700px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  perspective: 1000px;
}

.rg-gallery__tile {
  position: relative;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 2px;
  transform-origin: center;
  border: 1px solid var(--tile-border);
  cursor: pointer;
  transform-style: preserve-3d;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background-color 0.4s ease;
}

.rg-gallery__tile:hover {
  border-color: var(--tile-hover-border);
  box-shadow: var(--tile-hover-shadow);
}

.rg-gallery__tile img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
}

.rg-gallery__tile:hover img {
  transform: scale(1.08);
}

.rg-gallery__overlay {
  position: absolute;
  inset: 0;
  background: var(--overlay-bg);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 12px;
  opacity: 0;
  transition: opacity 0.3s ease, background 0.4s ease;
}

.rg-gallery__tile:hover .rg-gallery__overlay {
  opacity: 1;
}

.rg-gallery__caption {
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--caption-color);
  letter-spacing: 0.02em;
  transform: translateY(8px);
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.rg-gallery__tile:hover .rg-gallery__caption {
  transform: translateY(0);
}

@media (max-width: 600px) {
  .rg-gallery__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
}

@media (max-width: 400px) {
  .rg-gallery__grid {
    grid-template-columns: 1fr;
  }
}
</style>