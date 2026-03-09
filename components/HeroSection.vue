<template>
  <section class="flex flex-col justify-center px-6 min-h-[90vh] relative overflow-hidden" style="zoom: 0.8;">
    <!-- Huge Background Pattern / Noise -->
    <div class="absolute inset-0 pointer-events-none opacity-10 z-0">
      <div class="absolute right-0 top-0 h-[800px] w-[800px] bg-gradient-to-b from-neutral-200 to-transparent dark:from-neutral-800 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    </div>
    
    <div class="relative z-10 w-full flex flex-col gap-8 max-w-[1400px] mx-auto mt-20">
      <!-- Headlines -->
      <div class="space-y-0 relative mt-10">
        <h1 class="font-black leading-[0.85] tracking-tighter text-slate-900 dark:text-white uppercase inline-block mixing-blend-difference overflow-hidden">
           <span class="block gsap-reveal text-[clamp(4rem,12vw,12rem)]">{{ heroData.firstName }}</span>
          <span class="block gsap-reveal text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400 dark:from-white dark:to-slate-600 text-[clamp(4rem,12vw,12rem)]" style="padding-bottom: 10px;">{{ heroData.lastName }}</span>
        </h1>
        
        <div class="absolute right-0 bottom-4 hidden md:flex flex-col text-right overflow-hidden">
          <h2 class="gsap-reveal text-2xl font-bold uppercase tracking-widest text-slate-400 mb-1">
            {{ heroData.roles[0] }}
          </h2>
          <h2 class="gsap-reveal text-xl font-medium tracking-widest text-white">
            {{ heroData.roles[1] }}
          </h2>
        </div>
      </div>
      
      <!-- Layout split for bio and portrait -->
      <div class="flex flex-col lg:flex-row gap-12 lg:items-end mt-4">
        <!-- Biography and location -->
        <div class="w-full lg:w-1/2 xl:w-1/3 flex flex-col gap-6 overflow-hidden">
          <p class="gsap-reveal-fade text-lg sm:text-2xl font-light leading-snug text-slate-600 dark:text-slate-300">
            {{ heroData.bio }}
          </p>
          <div class="gsap-reveal-fade flex items-center gap-2 text-slate-500 uppercase tracking-widest text-xs font-bold border-l-2 border-slate-500 pl-4 py-2">
            <span class="material-symbols-outlined text-base">location_on</span>
            {{ heroData.location }}
          </div>
        </div>
        
        <!-- Giant Portrait Image -->
        <div class="gsap-image w-full lg:w-1/2 xl:w-2/3 h-[50vh] lg:h-[600px] relative rounded-3xl overflow-hidden group">
          <div class="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
          <nuxt-img :src="heroData.image" alt="Portrait" class="h-full w-full object-cover grayscale opacity-80 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-[1s] ease-out origin-bottom" preload fetchpriority="high" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import portfolioData from '~/data/portfolio.json'

const heroData = portfolioData.hero

onMounted(() => {
  // Staggered reveal for massive typography
  gsap.fromTo('.gsap-reveal', 
    { y: 150, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out', delay: 0.2 }
  )

  // Fade in bio details slightly later
  gsap.fromTo('.gsap-reveal-fade',
    { y: 30, opacity: 0 },
    { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.8 }
  )

  // dramatic entrance for the giant image
  gsap.fromTo('.gsap-image',
    { scale: 1.1, opacity: 0, y: 50 },
    { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: 'power3.out', delay: 0.5 }
  )
})
</script>
