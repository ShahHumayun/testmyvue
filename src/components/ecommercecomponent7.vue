<template>
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight mb-20 text-center">Platforms <span class="text-[#00ffa3]">We Work With</span></h2>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">

        <!-- Magento — Featured, larger card -->
        <div class="lg:col-span-3 bg-neutral-950 border border-[#00ffa3]/30 rounded-2xl p-10 flex flex-col justify-between relative overflow-hidden group transition-all hover:border-[#00ffa3]">
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#00ffa3]/10 rounded-full blur-3xl group-hover:bg-[#00ffa3]/20 transition-colors"></div>

          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-6">
              <div class="text-4xl logo-float">🏬</div>
              <div>
                <span class="inline-block text-[10px] font-bold tracking-widest uppercase text-[#00ffa3] bg-[#00ffa3]/10 px-3 py-1 rounded-full mb-1">Our Core Expertise</span>
                <h3 class="text-2xl font-bold tracking-tight text-white">Magento</h3>
              </div>
            </div>

            <p class="text-neutral-400 text-sm leading-relaxed mb-6 max-w-xl">
              Magento is our primary e-commerce platform. We specialize in building, migrating, and scaling enterprise-grade Magento 2 stores — from custom theme development and module engineering to complex B2B/B2C configurations, third-party API integrations, and performance tuning for high-traffic stores.
            </p>

            <ul class="grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-neutral-300">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00ffa3]"></span>Magento 2 Development</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00ffa3]"></span>Custom Module Builds</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00ffa3]"></span>Store Migration</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00ffa3]"></span>B2B & Multi-Store Setup</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00ffa3]"></span>API & ERP Integrations</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-[#00ffa3]"></span>Performance Optimization</li>
            </ul>
          </div>
        </div>

        <!-- WooCommerce — Secondary card -->
        <div class="lg:col-span-2 bg-neutral-950 border border-neutral-900 rounded-2xl p-10 flex flex-col justify-between group transition-all hover:border-neutral-800">
          <div>
            <div class="flex items-center gap-4 mb-6">
              <div class="text-4xl logo-float">🪄</div>
              <h3 class="text-2xl font-bold tracking-tight text-neutral-200 group-hover:text-white transition-colors">WooCommerce</h3>
            </div>

            <p class="text-neutral-500 text-sm leading-relaxed mb-6">
              For businesses looking for a lightweight, WordPress-native storefront, we build and customize WooCommerce solutions with clean checkout flows, plugin integrations, and theme customization.
            </p>

            <ul class="flex flex-col gap-2 text-xs text-neutral-400">
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>Store Setup & Customization</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>Plugin & Payment Integration</li>
              <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 rounded-full bg-neutral-600"></span>Theme Development</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@keyframes logoFloating { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
.logo-float { animation: logoFloating 3s infinite ease-in-out; }
</style>