<template>
  <!-- 3. WHAT IS NETSUITE INTEGRATION -->
  <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
    <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="space-y-6">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-white">
          What Is <span class="text-[#00ffa3]">NetSuite Integration?</span>
        </h2>
        <p class="text-neutral-400 leading-relaxed text-base md:text-lg">
          NetSuite integration connects Oracle NetSuite ERP with your external business applications, enabling real-time data synchronization, automated cross-platform workflow handling, and improved operational execution efficiency. It establishes an absolute single point of programmatic visibility.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <div v-for="(benefit, i) in explanationBenefits" :key="i" class="flex items-center gap-3 font-mono text-xs text-neutral-300">
            <span class="w-1.5 h-1.5 bg-[#00ffa3] rounded-full shadow-[0_0_8px_#00ffa3]"></span>
            {{ benefit }}
          </div>
        </div>
      </div>

      <!-- Live Visual Interactive Node Pipeline Matrix -->
      <div class="bg-neutral-950 border border-neutral-900 rounded-xl p-8 relative min-h-[300px] flex flex-col justify-between overflow-hidden">
        <div class="flex items-center justify-between border-b border-neutral-900 pb-4 font-mono text-xs text-neutral-500">
          <span>DATA TRANSITION CHANNEL</span>
          <span class="text-[#00ffa3] animate-pulse">● SYNCHRONIZED</span>
        </div>
        <div class="py-8 space-y-6 relative">
          <div class="flex justify-between items-center relative z-20">
            <div class="bg-black border border-neutral-800 px-4 py-2.5 rounded text-xs font-mono text-white">External Platform API</div>
            <div class="bg-black border border-neutral-800 px-4 py-2.5 rounded text-xs font-mono text-white">NetSuite Restlet</div>
          </div>
          <!-- Dynamic Continuous Flow Processing Bar Line -->
          <div class="absolute top-[17px] left-8 right-8 h-[1px] bg-neutral-800 z-10">
            <div class="h-full w-12 bg-gradient-to-r from-transparent via-[#00ffa3] to-transparent animate-[marquee_3s_linear_infinite]"></div>
          </div>
        </div>
        <div class="bg-black border border-neutral-900 rounded p-4 font-mono text-[11px] text-neutral-400 space-y-1">
          <p><span class="text-neutral-600">></span> Payload: { status: "synchronized", records: 4120 }</p>
          <p><span class="text-neutral-600">></span> Integrity Validation Check: 100% Passed</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const explanationBenefits = [
  'Single Source Of Truth', 'Real-Time Data Visibility', 'Reduced Human Errors',
  'Automated Workflows', 'Improved Productivity', 'Scalable Business Operations'
]
</script>

<style scoped>
/* Keyframe linear layout trace mapping loop for the data transition channel */
@keyframes marquee {
  0% { transform: translateX(-150%); }
  100% { transform: translateX(250%); }
}
</style>