<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center">Everything Your <span class="text-[#00ffa3]">Online Store Needs</span></h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div v-for="(f, idx) in features" :key="idx" class="bg-neutral-950 border border-neutral-900 p-6 rounded-xl hover:border-neutral-800 transition-colors group relative overflow-hidden">
          <div class="absolute -bottom-6 -right-6 w-12 h-12 bg-[#00ffa3]/5 rounded-full blur-xl group-hover:bg-[#00ffa3]/10 transition-colors"></div>
          <h3 class="text-sm font-bold text-neutral-200 tracking-tight group-hover:text-[#00ffa3] transition-colors">{{ f }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  'Smart Product Search', 'One-Click Checkout', 'Abandoned Cart Recovery', 'Loyalty Programs',
  'Subscription Billing', 'AI Recommendations', 'Multi-Vendor Support', 'Real-Time Inventory',
  'Advanced Analytics', 'Wishlist & Favorites'
]
</script>
