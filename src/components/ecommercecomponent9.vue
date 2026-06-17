<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center">Ecommerce Solutions For <span class="text-[#00ffa3]">Every Industry</span></h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div v-for="(ind, idx) in industries" :key="idx" class="bg-neutral-950 border border-neutral-900 p-6 rounded-xl transition-all hover:bg-neutral-900 group">
          <h3 class="text-base font-bold text-white group-hover:text-[#00ffa3] transition-colors">{{ ind.name }}</h3>
          <p class="text-neutral-500 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">{{ ind.info }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const industries = [
  { name: 'Fashion & Apparel', info: 'Lookbooks, size guides, configurators.' },
  { name: 'Electronics', info: 'Spec comparison, bundles, warranties.' },
  { name: 'Beauty & Cosmetics', info: 'AR try-on, ingredient transparency.' },
  { name: 'Food & Beverage', info: 'Subscriptions, scheduling, fulfillment.' },
  { name: 'Home & Furniture', info: '3D previews, white-glove logistics.' },
  { name: 'Health & Wellness', info: 'Compliance, recurring orders, education.' },
  { name: 'B2B Commerce', info: 'Quoting, net terms, bulk pricing.' },
  { name: 'Digital Goods', info: 'Instant delivery, licensing, downloads.' },
]
</script>
