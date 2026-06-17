<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-24 text-center">From Idea <span class="text-[#00ffa3]">To Revenue Generation</span></h2>
      <div class="relative block lg:flex items-start justify-between gap-6 space-y-12 lg:space-y-0">
        <div class="hidden lg:block absolute top-[27px] left-0 right-0 h-[2px] bg-neutral-900 z-0"></div>
        <div v-for="(step, idx) in steps" :key="idx" class="relative z-10 flex-1 group">
          <div class="flex lg:flex-col items-center lg:items-start gap-6 lg:gap-0">
            <div class="w-14 h-14 rounded-full bg-neutral-950 border-2 border-neutral-800 flex items-center justify-center font-mono font-bold text-neutral-500 group-hover:border-[#00ffa3] group-hover:text-[#00ffa3] transition-all duration-500 lg:mb-6 flex-shrink-0">0{{ idx + 1 }}</div>
            <div>
              <h3 class="text-lg font-bold mb-2 text-white group-hover:text-[#00ffa3] transition-colors">{{ step.title }}</h3>
              <p class="text-neutral-400 text-sm leading-relaxed max-w-sm">{{ step.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const steps = [
  { title: 'Discovery & Strategy', description: 'Deep dive into your goals, audience, and competitive landscape.' },
  { title: 'UX & Design', description: 'Conversion-driven interface design rooted in your brand.' },
  { title: 'Development', description: 'Engineering performant, scalable, secure commerce infrastructure.' },
  { title: 'Testing & QA', description: 'Rigorous validation across devices, browsers, and payment flows.' },
  { title: 'Launch & Growth', description: 'Deployment, monitoring, and ongoing optimization for sustained growth.' },
]
</script>
