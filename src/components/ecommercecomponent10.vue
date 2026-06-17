<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center">Driving Real <span class="text-[#00ffa3]">Ecommerce Results</span></h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(m, idx) in metrics" :key="idx" class="flex flex-col items-center text-center space-y-4 bg-neutral-950 p-8 rounded-2xl border border-neutral-900 group">
          <div class="w-24 h-24 rounded-full border-4 border-neutral-900 flex items-center justify-center relative group-hover:border-[#00ffa3]/30 transition-colors">
            <div class="absolute inset-0 rounded-full border-4 border-t-[#00ffa3] border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
            <span class="text-xl font-bold text-white">+{{ m.value }}%</span>
          </div>
          <p class="text-xs text-neutral-400 uppercase tracking-wider font-semibold max-w-[150px]">{{ m.label }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const metrics = [
  { value: 215, label: 'Avg Conversion Lift' }, { value: 320, label: 'Revenue Growth' },
  { value: 180, label: 'Mobile Engagement' }, { value: 145, label: 'Retention Increase' },
]
</script>
