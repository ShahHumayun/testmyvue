<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center">Platforms <span class="text-[#00ffa3]">We Work With</span></h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        <div v-for="(p, idx) in platforms" :key="idx" class="bg-neutral-950 border border-neutral-900 rounded-xl p-8 flex flex-col items-center text-center group transition-all hover:border-[#00ffa3]">
          <div class="text-3xl mb-3 logo-float">{{ p.logo }}</div>
          <h3 class="text-xs font-bold tracking-wider text-neutral-400 group-hover:text-white transition-colors">{{ p.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const platforms = [
  { logo: '🛍️', name: 'Shopify' }, { logo: '🪄', name: 'WooCommerce' },
  { logo: '🏬', name: 'Magento' }, { logo: '⚙️', name: 'BigCommerce' },
  { logo: '💎', name: 'Salesforce' }, { logo: '🔧', name: 'Custom' },
]
</script>

<style scoped>
@keyframes logoFloating { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
.logo-float { animation: logoFloating 3s infinite ease-in-out; }
</style>
