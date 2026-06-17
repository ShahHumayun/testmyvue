<template>
  <div ref="pageWrapper" class="bg-[#000000] text-[#FFFFFF] font-sans relative overflow-hidden selection:bg-[#00ffa3] selection:text-[#000000]">
    
    <!-- Real-time Enterprise Interactive Network Background Dynamic Mesh -->
    <div 
      class="pointer-events-none fixed inset-0 z-10 opacity-30 transition-opacity duration-500"
      :style="{ background: `radial-gradient(800px circle at ${pointer.x}px ${pointer.y}px, rgba(0,255,163,0.12), transparent 75%)` }"
    ></div>

    <!-- 1. HERO SECTION -->
    <section class="relative min-h-screen flex items-center justify-center px-6 overflow-hidden border-b border-neutral-900 z-20">
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#00ffa3_1px,transparent_1px)] [background-size:32px_32px]"></div>
      
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-20 w-full pt-32 pb-20">
        
        <!-- Headline Context Copy Block -->
        <div class="lg:col-span-6 space-y-6 text-left order-2 lg:order-1">
          <span ref="heroTag" class="inline-block text-xs font-mono font-bold tracking-[0.4em] text-[#00ffa3] uppercase bg-[#00ffa3]/5 px-4 py-2 rounded-md border border-[#00ffa3]/20 shadow-[0_0_20px_rgba(0,255,163,0.05)]">
            NetSuite Integration Services
          </span>
          <h1 ref="heroHeadline" class="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
            Connect Every System. <br>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#00ffa3] via-emerald-400 to-teal-500">
              Automate Every Process.
            </span>
          </h1>
          <p ref="heroPara" class="text-neutral-400 text-base md:text-lg leading-relaxed max-w-xl">
            Eliminate data silos and streamline operations with custom NetSuite integrations. Connect your business applications, automate workflows, and create a single source of truth across your organization.
          </p>
          <div ref="heroActions" class="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button class="w-full sm:w-auto px-8 py-4 bg-[#00ffa3] text-[#000000] font-bold text-sm uppercase tracking-wider rounded border border-[#00ffa3] hover:bg-transparent hover:text-[#00ffa3] transition-all duration-300 shadow-[0_0_25px_rgba(0,255,163,0.15)]">
              Schedule A Consultation
            </button>
            <button class="w-full sm:w-auto px-8 py-4 bg-neutral-950 border border-neutral-800 text-white font-medium text-sm uppercase tracking-wider rounded hover:bg-neutral-900 transition-colors">
              Explore Integrations
            </button>
          </div>
        </div>

        <!-- System Orbit Data Flow Visualizer Hub -->
        <div class="lg:col-span-6 flex justify-center items-center order-1 lg:order-2 min-h-[420px] relative">
          <div class="absolute w-28 h-28 rounded-2xl bg-black border-2 border-[#00ffa3] shadow-[0_0_40px_rgba(0,255,163,0.15)] flex flex-col items-center justify-center z-30 text-center p-2 group">
            <span class="text-xs font-mono font-bold tracking-widest text-[#00ffa3]">ORACLE</span>
            <span class="text-xs font-black tracking-tight text-white">NETSUITE</span>
            <div class="absolute inset-0 border border-[#00ffa3]/30 rounded-2xl animate-ping opacity-40"></div>
          </div>
          
          <!-- Outer System Orbit Elements Ring -->
          <div class="w-80 h-80 rounded-full border border-neutral-800/60 absolute animate-[spin_50s_linear_infinite] pointer-events-none"></div>
          <div class="w-[420px] h-[420px] rounded-full border border-neutral-900 absolute animate-[spin_80s_linear_infinite] pointer-events-none"></div>

          <!-- Interactive Floating Orbit Nodes Mapping -->
          <div 
            v-for="(node, index) in orbitNodes" 
            :key="index"
            class="absolute w-14 h-14 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-lg shadow-xl transition-transform duration-300 hover:border-[#00ffa3]"
            :style="getOrbitStyle(index)"
          >
            <span v-attr="node.label" :title="node.label">{{ node.icon }}</span>
          </div>
        </div>

      </div>
    </section>

    <!-- 2. TRUST SECTION -->
    <section class="py-20 px-6 border-b border-neutral-900 bg-neutral-950/20 relative z-20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-center text-xs font-mono font-bold tracking-[0.3em] text-neutral-500 uppercase mb-12">
          Helping Businesses Operate Smarter
        </h2>
        <div ref="trustGrid" class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(stat, idx) in trustStats" :key="idx" class="bg-black border border-neutral-900 p-8 rounded-lg text-center relative group overflow-hidden">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-[1px] bg-gradient-to-r from-transparent via-[#00ffa3]/40 to-transparent"></div>
            <div class="text-3xl md:text-5xl font-black text-white tracking-tight font-mono mb-2">
              <span class="trust-value-counter" :data-target="stat.value">0</span>{{ stat.suffix }}
            </div>
            <p class="text-xs text-neutral-400 font-mono tracking-wider uppercase">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

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

    <!-- 4. INTEGRATION SERVICES -->
    <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center mb-20">
          Comprehensive <span class="text-[#00ffa3]">NetSuite Integration Solutions</span>
        </h2>
        <div ref="servicesContainer" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(svc, idx) in coreServices" 
            :key="idx"
            class="group bg-neutral-950 border border-neutral-900 rounded-xl p-8 hover:border-[#00ffa3] transition-all duration-500 relative overflow-hidden flex flex-col justify-between"
          >
            <!-- Decorative Vector Corner Mesh -->
            <div class="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,163,0.03),transparent_60%)] group-hover:bg-[radial-gradient(ellipse_at_top_right,rgba(0,255,163,0.08),transparent_60%)] transition-colors"></div>
            
            <div class="space-y-4">
              <div class="w-10 h-10 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-lg text-[#00ffa3]">
                {{ svc.icon }}
              </div>
              <h3 class="text-xl font-bold text-white tracking-tight group-hover:text-[#00ffa3] transition-colors">
                {{ svc.title }}
              </h3>
              <p class="text-neutral-400 text-sm leading-relaxed">
                {{ svc.description }}
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-neutral-900 flex items-center justify-between text-xs font-mono text-neutral-500 group-hover:text-neutral-300 transition-colors">
              <span>Standard Connectivity</span>
              <span>REST / SOAP</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. COMMON PLATFORMS WE INTEGRATE -->
    <section class="py-32 px-6 border-b border-neutral-900 bg-neutral-950/10 relative z-20 overflow-hidden">
      <div class="max-w-7xl mx-auto relative">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center mb-24">
          Platforms We Connect <span class="text-[#00ffa3]">With NetSuite</span>
        </h2>
        
        <!-- Platform Integration Central Hub Grid Node Display -->
        <div ref="platformTargetGrid" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div 
            v-for="(plat, idx) in platformsList" 
            :key="idx"
            class="bg-black border border-neutral-900 p-6 rounded-lg text-center group cursor-default transition-all duration-300 hover:border-[#00ffa3]/60 hover:shadow-[0_0_20px_rgba(0,255,163,0.03)]"
          >
            <div class="text-2xl mb-2 transition-transform duration-300 group-hover:scale-110">{{ plat.icon }}</div>
            <h3 class="text-xs font-mono font-bold tracking-wider text-neutral-400 group-hover:text-white transition-colors">
              {{ plat.name }}
            </h3>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. WHY BUSINESSES CHOOSE NETSUITE INTEGRATION -->
    <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <!-- Metrics Automation Graphic Sync Board Container -->
        <div class="bg-neutral-950 border border-neutral-900 rounded-xl p-6 grid grid-cols-2 gap-4 relative overflow-hidden aspect-video lg:aspect-auto lg:h-96">
          <div class="bg-black border border-neutral-900 rounded-lg p-4 flex flex-col justify-between">
            <span class="text-[10px] font-mono text-neutral-500 block">REALTIME DATA SYNC</span>
            <div class="h-2 w-full bg-neutral-900 rounded overflow-hidden">
              <div class="h-full bg-[#00ffa3] rounded animate-[marquee_2s_linear_infinite] w-1/3"></div>
            </div>
            <span class="text-xl font-bold font-mono text-white">4.8ms<span class="text-xs text-neutral-500 font-normal">/avg</span></span>
          </div>
          <div class="bg-black border border-neutral-900 rounded-lg p-4 flex flex-col justify-between">
            <span class="text-[10px] font-mono text-neutral-500 block">WORKFLOW AUTOMATION</span>
            <span class="text-2xl font-black text-[#00ffa3]">ACTIVE</span>
            <span class="text-[10px] font-mono text-neutral-400">Continuous Logic Loops</span>
          </div>
          <div class="bg-black border border-neutral-900 rounded-lg p-4 col-span-2 flex items-center justify-between">
            <div>
              <span class="text-[10px] font-mono text-neutral-500 block mb-1">DATA INTEGRITY FACTOR</span>
              <span class="text-sm font-bold text-white font-mono">99.9998% Validation Rate</span>
            </div>
            <div class="w-3 h-3 rounded-full bg-[#00ffa3] shadow-[0_0_10px_#00ffa3]"></div>
          </div>
        </div>

        <!-- Right Side Content Copy Array Layout -->
        <div class="space-y-8">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Transform Manual Processes <br><span class="text-[#00ffa3]">Into Automated Workflows</span>
          </h2>
          <div ref="benefitsBlock" class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="(b, idx) in structuralBenefits" :key="idx" class="flex items-start gap-3 p-2 rounded hover:bg-neutral-950 transition-colors">
              <span class="text-[#00ffa3] text-sm mt-0.5 font-bold">✓</span>
              <span class="text-neutral-300 font-medium text-sm">{{ b }}</span>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- 7. OUR INTEGRATION PROCESS -->
    <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center mb-24">
          Our Proven <span class="text-[#00ffa3]">Integration Methodology</span>
        </h2>
        
        <div ref="processContainer" class="relative block lg:flex items-start justify-between gap-6 space-y-12 lg:space-y-0">
          <!-- Central Connecting Sequence Timeline Wire -->
          <div class="hidden lg:block absolute top-[23px] left-0 right-0 h-[1px] bg-neutral-900 z-0"></div>
          <div ref="processLineFiller" class="hidden lg:block absolute top-[23px] left-0 h-[1px] bg-[#00ffa3] z-0 origin-left scale-x-0"></div>

          <div v-for="(step, idx) in sequenceSteps" :key="idx" class="process-card relative z-10 flex-1 group">
            <div class="flex lg:flex-col items-center lg:items-start gap-6 lg:gap-0">
              <div class="w-12 h-12 rounded bg-black border border-neutral-800 flex items-center justify-center font-mono font-bold text-xs text-neutral-500 group-hover:border-[#00ffa3] group-hover:text-[#00ffa3] transition-all duration-500 shadow-xl lg:mb-6 flex-shrink-0">
                0{{ idx + 1 }}
              </div>
              <div>
                <h3 class="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-[#00ffa3] transition-colors">
                  {{ step.title }}
                </h3>
                <p class="text-neutral-400 text-xs md:text-sm leading-relaxed max-w-sm">
                  {{ step.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 8. BUSINESS CHALLENGES WE SOLVE -->
    <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center mb-20">
          Eliminate Operational <span class="text-[#00ffa3]">Bottlenecks</span>
        </h2>
        <div ref="challengesGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(card, idx) in challengeMatrix" 
            :key="idx"
            class="challenge-node-card bg-neutral-950 border border-neutral-900 rounded-xl p-6 min-h-[160px] flex flex-col justify-between transition-all duration-500 cursor-pointer group"
          >
            <div>
              <span class="text-[10px] font-mono tracking-widest text-neutral-600 block mb-2 uppercase">SYSTEM STATE INTERCEPT</span>
              <h3 class="text-base font-bold text-neutral-300 group-hover:text-[#00ffa3] transition-colors">
                {{ card.challenge }}
              </h3>
            </div>
            <!-- Interactive Dynamic Transformation Hint Text Node -->
            <div class="border-t border-neutral-900/60 pt-4 text-xs font-mono text-neutral-500 group-hover:text-white transition-colors flex items-center justify-between">
              <span>Resolution Layer</span>
              <span class="opacity-0 group-hover:opacity-100 transition-opacity text-[#00ffa3] font-bold">→ {{ card.solution }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 9. AUTOMATION SHOWCASE -->
    <section class="py-32 px-6 border-b border-neutral-900 bg-neutral-950/20 relative z-20 overflow-hidden">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center mb-6">
          Watch Your Business <span class="text-[#00ffa3]">Run Automatically</span>
        </h2>
        <p class="text-center text-neutral-400 max-w-xl mx-auto text-sm md:text-base mb-20">
          An production blueprint mapping individual application signals to automated execution points across the enterprise network.
          <span class="text-[#00ffa3] block mt-2 text-xs font-mono">AUTOMATION LOOP ACTIVE</span>
        </p>

        <!-- Interactive Real-time Order Process Stage Flow Pipeline Grid -->
        <div ref="automationTrack" class="space-y-4 relative">
          <div class="absolute left-6 top-4 bottom-4 w-[1px] bg-neutral-900 z-0"></div>
          
          <div 
            v-for="(node, index) in automationChain" 
            :key="index"
            class="automation-row flex items-center gap-6 relative z-10 transition-all duration-500"
            :class="{ 'opacity-40 scale-[0.98]': activeShowcaseStep !== index && activeShowcaseStep !== null }"
          >
            <div 
              class="w-12 h-12 rounded-full border bg-black flex items-center justify-center font-mono font-bold text-sm transition-all duration-500 shrink-0"
              :class="activeShowcaseStep === index ? 'border-[#00ffa3] text-[#00ffa3] shadow-[0_0_15px_rgba(0,255,163,0.3)]Scale-105' : 'border-neutral-800 text-neutral-500'"
            >
              {{ index + 1 }}
            </div>
            <div 
              class="flex-1 bg-black border border-neutral-900 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors duration-500"
              :class="{ 'border-[#00ffa3]/40 bg-neutral-950': activeShowcaseStep === index }"
            >
              <div>
                <h3 class="text-base font-bold transition-colors" :class="activeShowcaseStep === index ? 'text-[#00ffa3]' : 'text-white'">
                  {{ node.title }}
                </h3>
                <p class="text-xs text-neutral-400 mt-0.5">{{ node.details }}</p>
              </div>
              <span class="text-[10px] font-mono uppercase bg-neutral-900 border border-neutral-800 text-neutral-400 px-2.5 py-1 rounded">
                {{ node.meta }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 10. INDUSTRIES WE SERVE -->
    <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center mb-20">
          NetSuite Integrations <span class="text-[#00ffa3]">Across Industries</span>
        </h2>
        <div ref="industriesTargetGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(ind, i) in industryVerticals" 
            :key="i"
            class="bg-neutral-950 border border-neutral-900 rounded-lg p-6 hover:bg-neutral-900/60 hover:border-[#00ffa3]/40 transition-all duration-300 group"
          >
            <h3 class="text-lg font-bold text-white group-hover:text-[#00ffa3] transition-colors mb-2">
              {{ ind }}
            </h3>
            <p class="text-xs text-neutral-500 leading-relaxed font-mono">
              Deploying verified baseline integrations specialized for {{ ind.toLowerCase() }} optimization vectors.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 11. SUCCESS METRICS -->
    <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center mb-20">
          Delivering Measurable <span class="text-[#00ffa3]">Business Impact</span>
        </h2>
        <div ref="metricsTargetGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(m, idx) in impactMetrics" :key="idx" class="bg-neutral-950 border border-neutral-900 rounded-xl p-8 flex flex-col justify-between min-h-[180px] relative overflow-hidden group">
            <div class="absolute bottom-0 right-0 w-16 h-16 bg-[#00ffa3]/5 blur-xl group-hover:bg-[#00ffa3]/10 transition-colors"></div>
            <div class="text-4xl md:text-5xl font-black text-[#00ffa3] font-mono tracking-tight">
              <span class="impact-value-counter" :data-target="m.value">0</span>{{ m.suffix }}
            </div>
            <p class="text-xs font-mono uppercase text-neutral-400 tracking-wider pt-4 border-t border-neutral-900 mt-4">
              {{ m.label }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 12. CASE STUDY SECTION -->
    <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
          Real Integration <span class="text-[#00ffa3]">Success Stories</span>
        </h2>
        <div ref="caseWrapper" class="bg-neutral-950 border border-neutral-900 rounded-2xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div class="md:col-span-7 space-y-6">
            <span class="text-[10px] font-mono text-[#00ffa3] tracking-[0.3em] uppercase block">SYSTEM CASE LOG // ENTERPRISE DATA MIGRATION</span>
            <div class="space-y-2">
              <h3 class="text-xs uppercase font-bold text-neutral-500 tracking-wider">The Challenge:</h3>
              <p class="text-sm text-neutral-300 leading-relaxed">
                Multiple disconnected enterprise software platforms causing severe synchronization gaps, redundant validation workflows, and delayed business updates.
              </p>
            </div>
            <div class="space-y-2">
              <h3 class="text-xs uppercase font-bold text-[#00ffa3] tracking-wider">The Engineering Solution:</h3>
              <p class="text-sm text-neutral-300 leading-relaxed">
                Architected a centralized high-availability NetSuite integration ecosystem linking active channel nodes with core accounting layers via secure event-driven API modules.
              </p>
            </div>
          </div>
          <div class="md:col-span-5 bg-black border border-neutral-900 rounded-xl p-6 font-mono text-xs space-y-4">
            <h4 class="text-neutral-500 font-bold uppercase tracking-wide">Validated Metrics Yield</h4>
            <ul class="space-y-2 text-neutral-300">
              <li class="flex justify-between border-b border-neutral-900 pb-2"><span>Operational Clarity:</span> <span class="text-[#00ffa3] font-bold">100% Core Visibility</span></li>
              <li class="flex justify-between border-b border-neutral-900 pb-2"><span>Manual Operations Friction:</span> <span class="text-[#00ffa3] font-bold">-82% Reduction</span></li>
              <li class="flex justify-between pb-1"><span>System Response Lag:</span> <span class="text-[#00ffa3] font-bold">Realtime Enabled</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- 13. TECHNOLOGY SECTION -->
    <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-5xl font-bold tracking-tight text-center mb-20">
          Built Using Modern <span class="text-[#00ffa3]">Integration Technologies</span>
        </h2>
        <div ref="techWrapper" class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div 
            v-for="(tech, idx) in techInfrastructure" 
            :key="idx"
            class="bg-neutral-950 border border-neutral-900 p-6 rounded-lg text-center font-mono text-xs text-neutral-300 hover:text-[#00ffa3] hover:border-[#00ffa3]/40 transition-all duration-300 flex flex-col justify-center items-center min-h-[100px]"
          >
            <span class="w-1.5 h-1.5 bg-neutral-800 rounded-full mb-3 inline-block marker-indicator"></span>
            {{ tech }}
          </div>
        </div>
      </div>
    </section>

    <!-- 14. FAQ SECTION -->
    <section class="py-32 px-6 border-b border-neutral-900 relative z-20">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-center mb-16">
          Frequently Asked <span class="text-[#00ffa3]">Questions</span>
        </h2>
        <div ref="faqWrapper" class="space-y-4">
          <div 
            v-for="(item, idx) in faqsList" 
            :key="idx" 
            class="bg-neutral-950 border border-neutral-900 rounded-lg overflow-hidden transition-all duration-300"
            :class="{ 'border-neutral-800': activeFaqStep === idx }"
          >
            <button @click="toggleFaqStep(idx)" class="w-full flex items-center justify-between p-6 text-left group">
              <h3 class="font-bold text-base md:text-lg text-white group-hover:text-[#00ffa3] transition-colors">
                {{ item.question }}
              </h3>
              <span class="ml-4 shrink-0 w-6 h-6 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center transition-transform duration-300" :class="{ 'rotate-180 border-[#00ffa3]/40': activeFaqStep === idx }">
                <svg class="w-3 h-3 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </span>
            </button>
            <div class="transition-all duration-300 ease-in-out max-h-0 opacity-0 overflow-hidden" :style="activeFaqStep === idx ? { 'max-h': '250px', 'opacity': 1, 'padding': '0 24px 24px 24px' } : {}">
              <p class="text-neutral-400 text-sm md:text-base leading-relaxed border-t border-neutral-900 pt-4">
                {{ item.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 15. LONG-FORM RICH TEXT SEO ARTIFACT COMPONENT SECTION -->
    <section class="py-32 px-6 border-b border-neutral-900 bg-neutral-950/20 relative z-20 text-neutral-400">
      <div class="max-w-4xl mx-auto space-y-8 tracking-wide text-sm md:text-base leading-relaxed">
        <h2 class="text-2xl md:text-4xl font-extrabold tracking-tight text-white text-center mb-12">
          Why NetSuite Integration Is Essential For <span class="text-[#00ffa3]">Modern Businesses</span>
        </h2>
        
        <div class="space-y-6">
          <p>
            In the current cloud-native enterprise operations landscape, custom system infrastructure scaling directly correlates with long-term marketplace resilience. Utilizing manual, localized software pipelines creates fragmented information points, which breaks core corporate agility. True business process optimization requires deploying secure integrations built directly into modern ERP foundations like Oracle NetSuite. Establishing structured automated pipelines across your software stack transforms disconnected infrastructure nodes into an unified digital entity.
          </p>
          
          <h3 class="text-lg font-bold text-white tracking-tight mt-6">Maximizing Core Efficiency via Advanced ERP Integration Benefits</h3>
          <p>
            Operating an enterprise platform without linked system endpoints limits data accessibility. When individual systems operate within functional silos, horizontal corporate visibility suffers, introducing critical latency to executive tracking workflows. Linking third-party database frameworks into Oracle NetSuite allows operational metrics to sync dynamically across all operational teams, removing administrative bottlenecks and establishing a unified single source of truth.
          </p>

          <h3 class="text-lg font-bold text-white tracking-tight mt-6">Architecting End-to-End Business Process Automation Channels</h3>
          <p>
            Relying on manual human data entry introduces clear performance vulnerabilities into modern operational models. Clerical oversights, mismatched entry values, and delayed file distribution cycles consistently impact delivery speeds. Structural programmatic integration addresses these performance issues by building secure, real-time automated data validation loops. Routine operational transactions scale independently based on predefined network conditions, optimizing human asset distribution across high-value strategic growth initiatives.
          </p>

          <h3 class="text-lg font-bold text-white tracking-tight mt-6">The Competitive Advantage of Real-Time Enterprise Data Synchronization</h3>
          <p>
            Static, batch-processed transaction tracking models fail to meet the speeds demanded by modern global markets. When product sales charts, regional procurement changes, or operational financial balances only update during legacy batch sequences, strategic decision-making stalls. Implementing end-to-end event-driven API networks solves this information gap. Real-time system notifications sync immediately across integrated ledger entries, ensuring your tracking frameworks reflect true operational metrics instantly.
          </p>

          <h3 class="text-lg font-bold text-white tracking-tight mt-6">Streamlining Workflows Across Diverse System Footprints</h3>
          <p>
            Modern enterprise architecture relies on varied system architectures across marketing, fulfillment, and corporate operations teams. Without dynamic system connectivity, tracking end-to-end customer lifetimes requires time-consuming manual cross-referencing. Standardizing integration logic across adjacent software applications allows external application events to trigger background financial adjustments, invoice tracking updates, or programmatic shipping notifications within your centralized system architecture automatically.
          </p>

          <h3 class="text-lg font-bold text-white tracking-tight mt-6">Optimizing Next-Generation Ecommerce Integration Pipelines</h3>
          <p>
            Digital commerce environments require continuous catalog synchronization, adaptive inventory adjustments, and frictionless customer payment workflows. Connecting consumer-facing commerce storefronts with core backend inventory allocation systems prevents multi-channel selling conflicts, unvalidated cart processing delays, or regional taxation errors. Automated synchronization maps web transactions directly to accounting systems, ensuring retail workflows stay fully aligned with real-time inventory balances.
          </p>

          <h3 class="text-lg font-bold text-white tracking-tight mt-6">Establishing Clean CRM Connectivity for Omnichannel Customer Visibility</h3>
          <p>
            Disconnections between sales pipeline logs and primary enterprise accounts obscure the accurate evaluation of actual client account health metrics. Sales professionals require instant clarity regarding contractual milestones, fulfillment timelines, and direct payment balances inside unified viewports. Systematically mapping target CRM accounts to NetSuite records ensures client communication channels remain accurate and up to date, eliminating onboarding operational friction.
          </p>

          <h3 class="text-lg font-bold text-white tracking-tight mt-6">Precision Inventory Management Across Multi-Location Networks</h3>
          <p>
            Global commerce footprints require absolute clarity over decentralized distribution facilities, dynamic transit lines, and incoming component supply chains. Fragmented item catalogs often cause unexpected warehouse stock depletions, cross-channel order cancellations, and logistics bottlenecks. Centralizing inventory tracking via custom API services gives distribution managers real-time visibility over multi-warehouse asset states, maximizing baseline order fulfillment performance profiles.
          </p>

          <h3 class="text-lg font-bold text-white tracking-tight mt-6">Driving Analytics Precision to Foster Scalable Enterprise Growth</h3>
          <p>
            Corporate leadership depends heavily on data-driven predictive visualization mapping to capture emerging market trends. When analytics data requires tedious data cleaning or manual CSV assembly, strategic initiatives stall. Direct software data linking populates custom dashboard interfaces instantly, providing leadership with verified financial, operational, and fulfillment metrics necessary to scale efficiently in modern economic environments.
          </p>
        </div>
      </div>
    </section>

    <!-- 16. FINAL CTA SECTION -->
    <section class="relative py-40 px-6 overflow-hidden text-center z-20 border-b border-neutral-950">
      <!-- High Intensity Radial Energy Wave Pulse Core -->
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-[#00ffa3]/5 rounded-full blur-[140px] pointer-events-none"></div>
      
      <div class="max-w-4xl mx-auto relative z-10 space-y-6">
        <h2 ref="ctaHeading" class="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
          Ready To Connect Your <br><span class="text-[#00ffa3]">Business Systems?</span>
        </h2>
        <p ref="ctaText" class="text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Unlock the full potential of NetSuite with seamless integrations that automate workflows, improve visibility, and accelerate growth.
        </p>
        <div ref="ctaBtnBox" class="pt-6">
          <button class="cta-pulse-energy-btn px-10 py-5 bg-[#00ffa3] text-[#000000] font-bold text-sm uppercase tracking-widest rounded transition-all duration-300 transform hover:scale-[1.02]">
            Talk To A NetSuite Integration Expert
          </button>
        </div>
      </div>
    </section>

    <!-- 17. FOOTER -->
    <footer class="bg-[#000000] px-6 py-16 relative z-20 text-sm text-neutral-500">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div class="space-y-4">
          <div class="text-white font-black text-lg tracking-tight flex items-center gap-2 font-mono">
            <span class="w-2 h-2 bg-[#00ffa3]"></span>
            WebHive Enterprise
          </div>
          <p class="text-xs text-neutral-400 leading-relaxed">
            Architecting secure enterprise integration systems and cloud automation infrastructure solutions.
          </p>
        </div>
        <div>
          <h4 class="text-white font-mono font-bold mb-4 tracking-wider uppercase text-xs">Services</h4>
          <ul class="space-y-2.5 text-xs">
            <li><a href="#" class="hover:text-[#00ffa3] transition-colors">Web App Development</a></li>
            <li><a href="#" class="hover:text-[#00ffa3] transition-colors">App Development</a></li>
            <li><a href="#" class="hover:text-[#00ffa3] transition-colors">Ecommerce Solutions</a></li>
            <li><a href="#" class="hover:text-[#00ffa3] transition-colors">NetSuite Integrations</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-mono font-bold mb-4 tracking-wider uppercase text-xs">Contact & Info</h4>
          <ul class="space-y-2.5 text-xs">
            <li><span class="text-neutral-400">Inquiries:</span> enterprise@webhive.tech</li>
            <li><span class="text-neutral-400">Networks:</span> <a href="#" class="hover:text-[#00ffa3] transition-colors">LinkedIn</a> / <a href="#" class="hover:text-[#00ffa3] transition-colors">GitHub</a></li>
          </ul>
        </div>
        <div class="space-y-4">
          <h4 class="text-white font-mono font-bold tracking-wider uppercase text-xs">Newsletter</h4>
          <p class="text-xs text-neutral-400 leading-relaxed">Enterprise automation briefs issued monthly.</p>
          <div class="flex gap-2">
            <input type="email" placeholder="Enter corporate email" class="bg-neutral-950 border border-neutral-900 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#00ffa3] w-full transition-colors">
            <button class="bg-neutral-900 text-white border border-neutral-800 px-4 py-2 rounded font-medium text-xs hover:bg-neutral-800 transition-colors">Subscribe</button>
          </div>
        </div>
      </div>
      <div class="max-w-7xl mx-auto border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <p>&copy; 2026 WebHive. Data Integrity Guard Guaranteed.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-neutral-300 transition-colors">Security Protocol Log</a>
          <a href="#" class="hover:text-neutral-300 transition-colors">Terms of Operations</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Template Container Identity Linkage State Mapping
const pageWrapper = ref(null)
const heroTag = ref(null)
const heroHeadline = ref(null)
const heroPara = ref(null)
const heroActions = ref(null)
const trustGrid = ref(null)
const servicesContainer = ref(null)
const platformTargetGrid = ref(null)
const benefitsBlock = ref(null)
const processContainer = ref(null)
const processLineFiller = ref(null)
const challengesGrid = ref(null)
const automationTrack = ref(null)
const industriesTargetGrid = ref(null)
const metricsTargetGrid = ref(null)
const caseWrapper = ref(null)
const techWrapper = ref(null)
const faqWrapper = ref(null)
const ctaHeading = ref(null)
const ctaText = ref(null)
const ctaBtnBox = ref(null)

const pointer = reactive({ x: 0, y: 0 })
const activeFaqStep = ref(null)
const activeShowcaseStep = ref(0)

let pointerRaf = null
let continuousShowcaseTimer = null

const orbitNodes = [
  { label: 'CRM', icon: '👤' },
  { label: 'Ecommerce', icon: '🛒' },
  { label: 'Inventory', icon: '📦' },
  { label: 'Accounting', icon: '💵' },
  { label: 'Marketing', icon: '📢' },
  { label: 'Payment Gateways', icon: '💳' },
  { label: 'Shipping Systems', icon: '🚢' },
  { label: 'ERP Extension', icon: '🧬' }
]

const trustStats = [
  { value: 100, suffix: '+', label: 'Integrations Delivered' },
  { value: 50, suffix: '+', label: 'Business Systems Connected' },
  { value: 99, suffix: '%', label: 'Data Accuracy Guaranteed' },
  { value: 70, suffix: '%', label: 'Reduction In Manual Work' }
]

const explanationBenefits = [
  'Single Source Of Truth', 'Real-Time Data Visibility', 'Reduced Human Errors',
  'Automated Workflows', 'Improved Productivity', 'Scalable Business Operations'
]

const coreServices = [
  { title: 'NetSuite CRM Integration', description: 'Synchronize customer profiles, baseline tracking, and nested sales pipelines.', icon: '👥' },
  { title: 'NetSuite Ecommerce Integration', description: 'Connect retail digital store channels with central backend inventory tracking tools.', icon: '🌐' },
  { title: 'NetSuite Accounting Integration', description: 'Automate global transactional summaries and internal balance tracking.', icon: '📊' },
  { title: 'NetSuite Inventory Integration', description: 'Maintain complete cross-platform warehouse balance mapping.', icon: '🏭' },
  { title: 'NetSuite Payment Gateway Integration', description: 'Deploy secure multi-currency payment validation and batch reconciliation paths.', icon: '🔒' },
  { title: 'Custom API Integrations', description: 'Connect modern proprietary software infrastructure straight into standard NetSuite setups.', icon: '🛠️' }
]

const platformsList = [
  { name: 'Shopify', icon: '🛍️' }, { name: 'Salesforce', icon: '☁️' }, { name: 'HubSpot', icon: '🎯' },
  { name: 'Stripe', icon: '💳' }, { name: 'PayPal', icon: '🟡' }, { name: 'QuickBooks', icon: '📉' },
  { name: 'Amazon', icon: '📦' }, { name: 'WooCommerce', icon: '🔌' }, { name: 'Magento', icon: '🎛️' },
  { name: 'Custom Apps', icon: '💻' }
]

const structuralBenefits = [
  'Real-Time Data Synchronization', 'Improved Business Visibility', 'Reduced Operational Costs',
  'Elimination Of Duplicate Data Entry', 'Increased Productivity', 'Better Customer Experience',
  'Faster Decision Making', 'Scalable Growth Potential'
]

const sequenceSteps = [
  { title: 'Discovery & Analysis', desc: 'Review active legacy platforms and core architectural mandates.' },
  { title: 'Integration Architecture', desc: 'Design secure multi-tier data mapping maps and system models.' },
  { title: 'Development', desc: 'Write precise custom connector APIs and transaction logic hooks.' },
  { title: 'Testing & Validation', desc: 'Verify pipeline payload structural accuracy and edge recovery safety.' },
  { title: 'Deployment', desc: 'Launch complete integration pipelines with zero runtime operational delay.' },
  { title: 'Monitoring & Support', desc: 'Provide continuous log tracking and network infrastructure updates.' }
]

const challengeMatrix = [
  { challenge: 'Manual Data Entry Operations', solution: 'Automated Realtime Sync' },
  { challenge: 'Disconnected Application Frameworks', solution: 'Unified Network Hub' },
  { challenge: 'Inaccurate Multi-Warehouse Quantities', solution: 'True Inventory Ledger' },
  { challenge: 'Delayed Reporting Syntheses', solution: 'Instant Analytics Stream' },
  { challenge: 'Isolated Customer Insight Profiles', solution: 'Omnichannel Single Log' },
  { challenge: 'Frequent Financial Balancing Discrepancies', solution: 'Ledger Audit Lockdown' },
  { challenge: 'Fulfillment Sequence Delivery Lag', solution: 'Direct Webhook Execution' },
  { challenge: 'Obscured Executive Management Visibility', solution: 'Live Performance View' }
]

const automationChain = [
  { title: 'Customer Order Triggered', details: 'Direct checkout signal received from digital store channel.', meta: 'Payload Transmitted' },
  { title: 'Inventory Levels Updated', details: 'Item inventory counts adjusted globally across all warehouses.', meta: 'NetSuite Sync Active' },
  { title: 'Payment Gateways Processed', details: 'Cryptographic capture verification processed instantly.', meta: 'Tokenized Validation' },
  { title: 'Corporate Invoice Generated', details: 'Transactional matching entry logged inside active accounts.', meta: 'Ledger Sealed' },
  { title: 'Logistics Shipment Created', details: 'Fulfillment routing commands dispatched to distribution points.', meta: 'Fulfillment Fired' },
  { title: 'Customer Notified Automatically', details: 'Tracking codes compiled and communicated to the buyer.', meta: 'Channel Closed' }
]

const industryVerticals = [
  'Manufacturing', 'Retail', 'Wholesale Distribution', 'Healthcare', 'Financial Services', 'Technology', 'Logistics', 'Professional Services', 'Ecommerce'
]

const impactMetrics = [
  { value: 80, suffix: '%', label: 'Reduction In Manual Tasks' },
  { value: 65, suffix: '%', label: 'Faster Reporting Cycles' },
  { value: 90, suffix: '%', label: 'Data Accuracy Improvement' },
  { value: 3, suffix: 'X', label: 'Operational Efficiency Boost' }
]

const techInfrastructure = [
  'NetSuite SuiteTalk API', 'REST APIs Architecture', 'SOAP Web Services', 'Middleware Enterprise Solutions',
  'Custom Enterprise Connectors', 'Cloud Infrastructure Services', 'Advanced Automation Platforms', 'Secure Data Pipelines'
]

const faqsList = [
  { question: 'What is NetSuite integration?', answer: 'NetSuite integration connects Oracle NetSuite ERP with other business applications to automate cross-platform workflows and maintain real-time data synchronization.' },
  { question: 'Why should businesses integrate NetSuite?', answer: 'Integration eliminates manual errors, speeds up processing loops, and aggregates tracking datasets into a reliable single source of truth.' },
  { question: 'Can you integrate NetSuite with Shopify?', answer: 'Yes. We deploy custom event-driven Shopify connectors that automatically synchronize orders, current item balances, and customer profiles.' },
  { question: 'Do you provide custom NetSuite integrations?', answer: 'Absolutely. We architect custom Restlet and SuiteTalk solutions configured explicitly around your complex processing mandates.' },
  { question: 'How long does a NetSuite integration project take?', answer: 'Timelines scale depending on data complexity, historical validation steps, and system configurations. Custom estimations are provided post-discovery.' },
  { question: 'Do you offer post-integration support?', answer: 'Yes. We establish persistent monitoring protocols, API load checking, and iterative logic balancing support logs.' }
]

const getOrbitStyle = (idx) => {
  const count = orbitNodes.length
  const angle = (idx * (360 / count)) * (Math.PI / 180)
  const radius = 175 // Middle spatial threshold boundary tracking circle radius
  const x = Math.cos(angle) * radius
  const y = Math.sin(angle) * radius
  return {
    transform: `translate(${x}px, ${y}px)`
  }
}

const toggleFaqStep = (idx) => {
  activeFaqStep.value = activeFaqStep.value === idx ? null : idx
}

const handlePointerMove = (e) => {
  if (!pointerRaf) {
    pointerRaf = requestAnimationFrame(() => {
      pointer.x = e.clientX
      pointer.y = e.clientY
      pointerRaf = null
    })
  }
}

onMounted(() => {
  window.addEventListener('mousemove', handlePointerMove, { passive: true })

  // Automated Sequential Pipeline Automation Showcase Loop Driver
  continuousShowcaseTimer = setInterval(() => {
    activeShowcaseStep.value = (activeShowcaseStep.value + 1) % automationChain.length
  }, 3500)

  // --- GSAP MATRIX INITIALIZATION SCROLL ACTIONS ---

  // Hero Presentation Launch Entry Flow
  const heroTl = gsap.timeline({ defaults: { duration: 1.2, ease: 'power4.out' } })
  heroTl.fromTo(heroTag.value, { opacity: 0, y: 15 }, { opacity: 1, y: 0, delay: 0.1 })
        .fromTo(heroHeadline.value, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }, '-=0.9')
        .fromTo(heroPara.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, '-=0.9')
        .fromTo(heroActions.value, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, '-=0.9')

  // Trust Value Accumulation Metrics Counter Logic
  const trustCounters = document.querySelectorAll('.trust-value-counter')
  trustCounters.forEach((cnt) => {
    const targetVal = parseInt(cnt.getAttribute('data-target'), 10)
    gsap.fromTo(cnt, { textContent: 0 }, {
      textContent: targetVal, duration: 2.2, ease: 'power3.out', snap: { textContent: 1 },
      scrollTrigger: { trigger: trustGrid.value, start: 'top 85%' }
    })
  })

  // Core Service Card Presentation Delivery Cascade
  gsap.fromTo(servicesContainer.value.children, { opacity: 0, y: 30 }, {
    opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out',
    scrollTrigger: { trigger: servicesContainer.value, start: 'top 80%' }
  })

  // Platform Logo Map Grid Components Reveals
  gsap.fromTo(platformTargetGrid.value.children, { opacity: 0, scale: 0.96 }, {
    opacity: 1, scale: 1, duration: 0.6, stagger: 0.05, ease: 'power2.out',
    scrollTrigger: { trigger: platformTargetGrid.value, start: 'top 85%' }
  })

  // Right Side Structural Benefits Cascade Reveal
  gsap.fromTo(benefitsBlock.value.children, { opacity: 0, x: 15 }, {
    opacity: 1, x: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
    scrollTrigger: { trigger: benefitsBlock.value, start: 'top 85%' }
  })

  // Methodology Sequential Process Connecting Filler Wire Progression
  gsap.fromTo(processLineFiller.value, { scaleX: 0 }, {
    scaleX: 1, ease: 'none',
    scrollTrigger: {
      trigger: processContainer.value,
      start: 'top 70%', end: 'bottom 60%', scrub: true
    }
  })

  const processCards = document.querySelectorAll('.process-card')
  processCards.forEach((card) => {
    gsap.fromTo(card, { opacity: 0, y: 20 }, {
      opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: card, start: 'top 85%' }
    })
  })

  // Challenges Conversion Matrix Grid Cascade Loading
  gsap.fromTo(challengesGrid.value.children, { opacity: 0, y: 25 }, {
    opacity: 1, y: 0, duration: 0.7, stagger: 0.08, ease: 'power2.out',
    scrollTrigger: { trigger: challengesGrid.value, start: 'top 85%' }
  })

  // Automation Flow Showcase Tracker Rows Reveals
  gsap.fromTo(automationTrack.value.children, { opacity: 0, y: 20 }, {
    opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
    scrollTrigger: { trigger: automationTrack.value, start: 'top 80%' }
  })

  // Industry Verticals Section Nodes Rendering Sequence
  gsap.fromTo(industriesTargetGrid.value.children, { opacity: 0, y: 20 }, {
    opacity: 1, y: 0, duration: 0.6, stagger: 0.06, ease: 'power2.out',
    scrollTrigger: { trigger: industriesTargetGrid.value, start: 'top 85%' }
  })

  // Final Operational Metrics Display Block Numbers Rolling Trigger
  const impactCounters = document.querySelectorAll('.impact-value-counter')
  impactCounters.forEach((counter) => {
    const targetVal = parseInt(counter.getAttribute('data-target'), 10)
    gsap.fromTo(counter, { textContent: 0 }, {
      textContent: targetVal, duration: 2.5, ease: 'power3.out', snap: { textContent: 1 },
      scrollTrigger: { trigger: metricsTargetGrid.value, start: 'top 85%' }
    })
  })

  // Case Study Structural Box Display Trigger Overlay
  gsap.fromTo(caseWrapper.value, { opacity: 0, scale: 0.99, y: 30 }, {
    opacity: 1, scale: 1, y: 0, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: caseWrapper.value, start: 'top 85%' }
  })

  // Infrastructure Tech Nodes Cascade Matrix Entry Mapping
  gsap.fromTo(techWrapper.value.children, { opacity: 0, scale: 0.97 }, {
    opacity: 1, scale: 1, duration: 0.5, stagger: 0.06, ease: 'power2.out',
    scrollTrigger: { trigger: techWrapper.value, start: 'top 85%' }
  })

  // FAQ Component Blocks Accumulation Rows Reveal
  gsap.fromTo(faqWrapper.value.children, { opacity: 0, y: 15 }, {
    opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
    scrollTrigger: { trigger: faqWrapper.value, start: 'top 85%' }
  })

  // Final Action Call To Action Structural Wrapper Triggers
  const finalCtaTl = gsap.timeline({ scrollTrigger: { trigger: ctaHeading.value, start: 'top 85%' } })
  finalCtaTl.fromTo(ctaHeading.value, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
            .fromTo(ctaText.value, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
            .fromTo(ctaBtnBox.value, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }, '-=0.3')
})

onUnmounted(() => {
  window.removeEventListener('mousemove', handlePointerMove)
  cancelAnimationFrame(pointerRaf)
  clearInterval(continuousShowcaseTimer)
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>

<style scoped>
/* Keyframe linear layout trace mapping loops for internal channels */
@keyframes marquee {
  0% { transform: translateX(-150%); }
  100% { transform: translateX(250%); }
}

/* Custom interactive technology framework grid selection tags tracking highlights */
.bg-neutral-950:hover .marker-indicator {
  background-color: #00ffa3;
  box-shadow: 0 0 8px #00ffa3;
}

/* System challenge conversion dynamic text updates overlay metrics */
.challenge-node-card:hover {
  border-color: rgba(0, 255, 163, 0.4);
  background-color: #050505;
}

/* Action Button Continuous Energy Wave Pulse Mapping */
@keyframes energyPulse {
  0%, 100% { box-shadow: 0 0 20px rgba(0, 255, 163, 0.15); }
  50% { box-shadow: 0 0 40px rgba(0, 255, 163, 0.45); }
}
.cta-pulse-energy-btn {
  animation: energyPulse 3.5s infinite ease-in-out;
}
.cta-pulse-energy-btn:hover {
  background-color: transparent;
  color: #00ffa3;
  box-shadow: 0 0 50px rgba(0, 255, 163, 0.65);
}
</style>