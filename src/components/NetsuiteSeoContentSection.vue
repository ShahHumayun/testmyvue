<template>
  <section class="py-32 px-6 border-b border-neutral-900 bg-neutral-950/20 relative z-20 text-neutral-400">
    <div class="max-w-4xl mx-auto space-y-8 tracking-wide text-sm md:text-base leading-relaxed">
      
      <h2 class="text-2xl md:text-4xl font-extrabold tracking-tight text-white text-center mb-12">
        Why NetSuite Integration Is Essential For <span class="text-[#00ffa3]">Modern Businesses</span>
      </h2>

      <div class="space-y-8">
        <div v-for="(item, index) in contentBlocks" :key="index">
          <h3 class="text-lg font-bold text-white tracking-tight mb-3">
            {{ item.title }}
          </h3>
          <p>{{ item.text }}</p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const contentBlocks = [
  {
    title: 'Achieve Operational Agility',
    text: 'Manual data entry and disconnected systems break corporate agility. Integrating your software stack with Oracle NetSuite transforms fragmented information into a unified digital entity, providing the foundation for long-term scalability.'
  },
  {
    title: 'Maximize Core Efficiency',
    text: 'Operating in silos limits visibility and creates administrative bottlenecks. Linking third-party systems to NetSuite syncs operational metrics dynamically, ensuring every team works from a single, accurate source of truth.'
  },
  {
    title: 'Automate Business Processes',
    text: 'Manual entry is prone to error and slows down delivery. Our automated data pipelines replace human-led workflows with secure, real-time validation loops, allowing your staff to focus on strategic growth rather than clerical tasks.'
  },
  {
    title: 'Real-Time Data Synchronization',
    text: 'Batch processing is too slow for today\'s global market. Event-driven API networks ensure your sales, procurement, and financial data update instantly, providing leadership with the accurate insights needed for rapid decision-making.'
  },
  {
    title: 'Optimize Ecommerce Pipelines',
    text: 'Connecting your store to NetSuite prevents inventory conflicts and taxation errors. Automated synchronization maps web transactions directly to accounting, ensuring your retail front-end and back-end inventory stay perfectly aligned.'
  },
  {
    title: 'Omnichannel CRM Visibility',
    text: 'Disconnected sales and support logs hide the true health of your client accounts. Systematically mapping CRM data to NetSuite records gives your team a 360-degree view, reducing onboarding friction and improving customer satisfaction.'
  },
  {
    title: 'Precision Inventory Management',
    text: 'Avoid stockouts and logistics bottlenecks with centralized inventory tracking. Custom API services provide distribution managers with real-time visibility across all warehouse locations, maximizing fulfillment performance.'
  },
  {
    title: 'Data-Driven Growth',
    text: 'Stop wasting time on manual CSV assembly. Direct data linking populates your dashboards with verified financial and operational metrics instantly, giving leadership the predictive power to scale efficiently.'
  }
]
</script>