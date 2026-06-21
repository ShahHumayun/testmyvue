<template>
  <section class="py-32 px-6 bg-black relative z-20 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      
      <!-- Center Heading -->
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-white text-center mb-24">
        Key Benefits of <span class="text-[#00ffa3]">NetSuite Magento Integration</span>
      </h2>

      <div class="space-y-32">
        <!-- Feature 1: Text Left, Image Right -->
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="text-content-left space-y-4">
            <h3 class="text-2xl font-bold text-white">Automated Data Synchronization</h3>
            <p class="text-neutral-400 leading-relaxed">
              Automatically syncs data between Magento and NetSuite, including orders, products, and customers data when orders are synced, reducing manual effort and minimizing data entry errors.
            </p>
          </div>
          <div class="image-content-right overflow-hidden rounded-2xl border border-neutral-800">
            <img src="https://images.unsplash.com/photo-1771922748624-b205cf5d002d?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Data Sync" class="w-full h-80 object-cover" />
          </div>
        </div>

        <!-- Feature 2: Text Right, Image Left -->
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="image-content-left order-2 lg:order-1 overflow-hidden rounded-2xl border border-neutral-800">
            <img src="https://plus.unsplash.com/premium_photo-1664297989345-f4ff2063b212?q=80&w=1098&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Inventory Updates" class="w-full h-80 object-cover" />
          </div>
          <div class="text-content-right order-1 lg:order-2 space-y-4">
            <h3 class="text-2xl font-bold text-white">Real-Time Inventory Updates</h3>
            <p class="text-neutral-400 leading-relaxed">
              Keeps inventory levels up to date across both platforms, preventing stock discrepancies and ensuring that customers see accurate product availability on your Magento store.
            </p>
          </div>
        </div>

        <!-- Feature 3: Text Left, Image Right -->
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="text-content-left space-y-4">
            <h3 class="text-2xl font-bold text-white">Faster Order Processing</h3>
            <p class="text-neutral-400 leading-relaxed">
              Orders placed in Magento are immediately reflected in NetSuite, streamlining the fulfillment process, reducing delays, and improving delivery times.
            </p>
          </div>
          <div class="image-content-right overflow-hidden rounded-2xl border border-neutral-800">
            <img src="https://images.unsplash.com/photo-1751448555253-f39c06e29d82?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Order Processing" class="w-full h-80 object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

onMounted(() => {
  // Select all feature rows
  const rows = document.querySelectorAll('.grid')
  
  rows.forEach((row) => {
    const textLeft = row.querySelector('.text-content-left')
    const imgRight = row.querySelector('.image-content-right')
    const imgLeft = row.querySelector('.image-content-left')
    const textRight = row.querySelector('.text-content-right')

    // Animate Text Left / Image Right
    if (textLeft && imgRight) {
      gsap.from(textLeft, { x: -50, opacity: 0, duration: 1, scrollTrigger: { trigger: row, start: 'top 80%' } })
      gsap.from(imgRight, { x: 50, opacity: 0, duration: 1, scrollTrigger: { trigger: row, start: 'top 80%' } })
    }

    // Animate Image Left / Text Right
    if (imgLeft && textRight) {
      gsap.from(imgLeft, { x: -50, opacity: 0, duration: 1, scrollTrigger: { trigger: row, start: 'top 80%' } })
      gsap.from(textRight, { x: 50, opacity: 0, duration: 1, scrollTrigger: { trigger: row, start: 'top 80%' } })
    }
  })
})
</script>