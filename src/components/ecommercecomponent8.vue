<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center">Magento, <span class="text-[#00ffa3]">Engineered To Convert</span></h2>
      <div class="space-y-4 relative">
        <div v-for="(c, idx) in cards" :key="idx" class="bg-gradient-to-r from-neutral-950 to-black border border-neutral-900 rounded-xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 sticky top-24 shadow-2xl hover:border-[#00ffa3]/30 transition-colors">
          <div class="space-y-2 sm:w-2/5">
            <span class="text-[10px] font-bold tracking-widest uppercase text-[#00ffa3]">{{ c.tag }}</span>
            <h3 class="text-2xl font-bold text-white">{{ c.title }}</h3>
          </div>
          <p class="text-neutral-400 text-sm max-w-md leading-relaxed">{{ c.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cards = [
  {
    tag: 'Checkout Optimization',
    title: 'Frictionless Magento Checkout',
    desc: 'Custom-tuned one-step and multi-step checkout flows built on Magento 2, reducing cart abandonment with smart defaults, saved payment methods, and guest checkout options.'
  },
  {
    tag: 'Catalog Intelligence',
    title: 'Smart Product Recommendations',
    desc: 'Native Magento merchandising rules combined with custom recommendation modules to surface the right products at the right moment — increasing average order value.'
  },
  {
    tag: 'Performance Engineering',
    title: 'Sub-Second Store Speed',
    desc: 'Full-page cache tuning, Elasticsearch optimization, and CDN configuration purpose-built for Magento — keeping load times fast even under heavy catalog and traffic loads.'
  },
  {
    tag: 'Scalable Architecture',
    title: 'Built for B2B & Multi-Store Growth',
    desc: 'Magento\'s native multi-store, multi-currency, and B2B module support configured and extended by our team to scale with your business without rebuilding from scratch.'
  },
]
</script>