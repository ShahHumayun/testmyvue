<template>
  <section class="py-32 px-6 border-b border-neutral-900 bg-black relative z-20">
    <div class="max-w-5xl mx-auto">
      
      <div class="text-center space-y-6 mb-20 fade-up-animation">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
          Seamless Integration: <span class="text-[#00ffa3]">Magento to NetSuite</span> and <br/>
          <span class="text-[#00ffa3]">NetSuite to Magento</span> for Enhanced eCommerce Efficiency
        </h2>
        <p class="max-w-3xl mx-auto text-neutral-400 text-lg md:text-xl leading-relaxed">
          NetSuite Magento Integration enables businesses to connect their ERP and eCommerce platforms, 
          creating a unified, efficient system that synchronizes products, orders and customers data 
          when orders are synced in real time.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(feature, index) in features" 
          :key="index" 
          class="p-6 rounded-2xl bg-neutral-900/30 border border-neutral-800 hover:border-[#00ffa3]/30 transition-all duration-300"
        >
          <div class="flex items-start gap-3 mb-3">
            <div class="mt-1 flex-shrink-0">
              <div class="w-5 h-5 rounded-full bg-[#00ffa3]/10 border border-[#00ffa3] flex items-center justify-center">
                <svg class="w-3 h-3 text-[#00ffa3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 class="text-lg font-bold text-white tracking-tight">{{ feature.title }}</h3>
          </div>
          <p class="text-neutral-400 text-sm leading-relaxed pl-8">
            {{ feature.desc }}
          </p>
        </div>
      </div>
      
    </div>
  </section>
</template>

<script setup>
const features = [
  { title: 'Real-Time Inventory Updates', desc: 'Updates in Netsuite are instantly reflected in Magento, ensuring accurate stock levels across all channels.' },
  { title: 'Customizable CRON Schedule', desc: 'The user can set up a customized CRON schedule, selecting the desired time frame for when the scripts will run and choosing which specific scripts to execute.' },
  { title: 'Better Customer Experience', desc: 'Accurate inventory and order information enhance the shopping experience for Magento customers, ensuring they have up-to-date details for a smoother purchasing process.' },
  { title: 'Custom Features Selection', desc: 'The user has the option to select only the customized features they need from the list of available options, rather than all features.' },
  { title: 'Bulk Product Synchronization', desc: 'Import all Netsuite products into Magento by either adding new products or updating existing product details to keep data aligned.' },
  { title: 'Reduced Manual Data Entry', desc: 'Automation minimizes the need for manual data entry, saving significant time and reducing the risk of human errors.' },
  { title: 'Order Status Updates', desc: 'Changes in order status in NetSuite are automatically reflected in Magento, enhancing transparency without manual admin intervention.' },
  { title: 'Data Synchronization', desc: 'New and updated product data from NetSuite is automatically pushed to Magento, centralizing information across platforms.' },
  { title: 'Bulk Orders Synchronization', desc: 'After setting up the store, the user has the option to import all Netsuite products into Magento. In this case, the user has two options: add all products to the Magento store or update all existing product details. The user must select one of these options to sync product details between NetSuite and the connector app.' },
  { title: 'Multi-Store Management', desc: 'The user can link multiple Magento stores to NetSuite via the connector app, allowing them to connect each store to either the same or different NetSuite ERP systems. This enables seamless data synchronization, ensuring that inventory, orders, and product details are consistently updated across all stores from a single interface.' },
  { title: 'Product Synchronization Options', desc: 'The user has multiple flexible options to add or update products efficiently. The first option is to manually import products into Magento. The second option allows the user to import newly added or updated products via a button click, based on the specified CRON time frame. The third option is to use a CRON job to automate the product add/update process.' },
  { title: 'Automated Order Management', desc: 'Magento orders are automatically synced to Netsuite, streamlining order processing. The user has multiple options to sync orders. The first option is to manually import orders into NetSuite. The second option allows the user to import newly added orders via a button click, based on the specified CRON time frame. The third option is to use a CRON job to automate the order sync process.' }
]
</script>

<style scoped>
.fade-up-animation {
  animation: fadeUp 1s ease-out forwards;
}

@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>