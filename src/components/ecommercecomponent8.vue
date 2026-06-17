<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center">Designed To <span class="text-[#00ffa3]">Increase Sales</span></h2>
      <div class="space-y-4 relative">
        <div v-for="(c, idx) in cards" :key="idx" class="bg-gradient-to-r from-neutral-950 to-black border border-neutral-900 rounded-xl p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 sticky top-24 shadow-2xl">
          <div class="space-y-2">

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
  { title: 'Frictionless Checkout', desc: 'Minimize steps, maximize completion rates with smart defaults.' },
  { title: 'Smart Recommendations', desc: 'AI-driven product discovery that increases AOV.' },
  { title: 'Mobile-First Speed', desc: 'Sub-second loads on the devices that drive most revenue.' },
  { title: 'Trust Signals', desc: 'Reviews, badges, and guarantees in the right places.' },
]
</script>
