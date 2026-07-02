<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center">Built Using Modern Commerce Technologies</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div v-for="(cat, idx) in stack" :key="idx" class="bg-neutral-950 border border-neutral-900 rounded-xl p-6">
          <h3 class="text-xs font-bold tracking-widest text-[#00ffa3] uppercase mb-4">{{ cat.category }}</h3>
          <ul class="space-y-2">
            <li v-for="tech in cat.items" :key="tech" class="tech-item flex items-center gap-3 text-sm text-neutral-300">
              <span class="marker-dot w-1.5 h-1.5 rounded-full bg-neutral-700 transition-all"></span>{{ tech }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const stack = [
  { category: 'Frontend', items: ['Next.js', 'Vue', 'Nuxt', 'Astro'] },
  { category: 'Commerce', items: ['Magento', 'Medusa', 'Commerce.js', 'Saleor'] },
  { category: 'Backend', items: ['Node.js', 'GraphQL', 'PostgreSQL', 'Redis'] },
  { category: 'Infra', items: ['Vercel', 'AWS', 'Cloudflare', 'Docker'] },
]
</script>

<style scoped>
.tech-item:hover .marker-dot { background-color: #00ffa3; box-shadow: 0 0 10px #00ffa3; }
</style>