<template>
  <section :class="['py-32 px-6 relative overflow-hidden flex flex-col items-center justify-center min-h-screen transition-colors duration-500', isDarkMode ? 'bg-#0b0c10 text-white' : 'bg-#f4f6f9 text-black']">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#0b0c10]/5 blur-[150px] rounded-full pointer-events-none"></div>

    <div class="max-w-4xl mx-auto text-center mb-20 relative z-10 flex flex-col items-center">
      <span class="text-[#00ffa3] font-extrabold tracking-[0.25em] uppercase text-sm mb-6 block">Ecommerce Solutions</span>
      <h2 :class="['text-5xl md:text-7xl font-extrabold mb-6 tracking-tight', isDarkMode ? 'text-white' : 'text-black']">
  Digital Experiences That <br/>
  <span :class="[isDarkMode ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#00ffa3] to-white' : 'text-black']">
    Deliver Results
  </span>
</h2>
      <div class="w-32 h-1.5 bg-[#00ffa3] mx-auto mb-8 rounded-full shadow-[0_0_15px_#00ffa3]"></div>
    </div><br>

    <div class="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10 place-items-center">
      <a v-for="(project, index) in projects" 
         :key="index"
         :href="project.url" 
         target="_blank"
         :class="['project-card opacity-0 w-full max-w-sm group relative backdrop-blur-2xl border rounded-xl overflow-hidden transition-all duration-500 hover:border-[#00ffa3]/50 hover:shadow-[0_0_50px_rgba(0,255,163,0.15)] flex flex-col h-full', 
                  isDarkMode ? 'bg-white/[0.02] border-white/10' : 'bg-white border-gray-200']">
        
        <div class="h-72 overflow-hidden relative w-full shrink-0">
          <img :src="project.image" :alt="project.title" class="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
        </div>

        <div :class="['p-8 flex flex-col flex-grow text-center transition-colors duration-300', isDarkMode ? 'bg-black/40' : 'bg-white/60']">
          <h3 :class="['text-2xl font-bold mb-3 transition-colors duration-300 tracking-tight', isDarkMode ? 'text-white group-hover:text-[#00ffa3]' : 'text-black group-hover:text-[#00ffa3]']">{{ project.title }}</h3>
          <p :class="['text-sm mb-8 leading-relaxed font-medium flex-grow', isDarkMode ? 'text-gray-400' : 'text-black']">{{ project.intro }}</p>
          
          <div class="mt-auto">
            <div class="mt-auto w-full flex justify-center">
              <span :class="['inline-flex items-center justify-center min-w-[220px] border px-12 py-4 font-bold transition-all duration-300 rounded-md cursor-pointer hover:bg-[#00ffa3] hover:text-black hover:border-[#00ffa3]', 
                             isDarkMode ? 'border-white/20 text-white' : 'border-black text-black']">
                VISIT PROJECT
              </span>
            </div>
          </div><br>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: true
  }
});

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'Wine Openers Canada', intro: 'A premium ecommerce experience designed for wine enthusiasts with intuitive navigation.', url: 'https://wineopeners.ca/', image: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800' },
  { title: 'Replacement Glass', intro: 'Specialized platform built to simplify product discovery, focusing on speed and clarity.', url: 'https://www.replacementglass.co/', image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&q=80&w=800' },
  { title: 'Blazing Glass', intro: 'Professional digital presence created to showcase services and build credibility.', url: 'http://blazingglass.com/', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800' }
];

onMounted(() => {
  gsap.fromTo('.project-card', 
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.project-card',
        start: 'top 85%'
      }
    }
  );
});
</script>