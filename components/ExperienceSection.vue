<template>
  <section class="flex flex-col px-5 pt-8 pb-12 w-full max-w-2xl mx-auto">
    <!-- Section Title (Lando Style: Massive Typography) -->
    <div class="mb-16 mt-8">
      <h2 class="text-[clamp(3rem,8vw,6rem)] font-black uppercase text-slate-900 dark:text-white tracking-tighter leading-[0.85] mb-4">
        {{ expData.title }}<br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400 dark:from-white dark:to-slate-600">{{ expData.subtitle }}</span>
      </h2>
      <p class="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-md font-light">
        {{ expData.description }}
      </p>
    </div>

    <!-- Timeline Container -->
    <div class="relative flex flex-col gap-12 sm:gap-16 pb-32">
      <div 
        v-for="(item, index) in expData.items" 
        :key="index"
        :ref="setCardRef"
        class="experience-card group relative flex flex-col md:flex-row gap-4 md:gap-8"
      >
        <!-- Timeline Side (Date & Duration) -->
        <div class="w-full md:w-1/3 flex flex-col gap-1 pt-1 md:text-right border-l-2 md:border-l-0 md:border-r-2 border-slate-900 dark:border-white pl-4 md:pl-0 md:pr-4">
          <span class="text-sm font-bold tracking-widest uppercase text-slate-900 dark:text-white">
            {{ item.period }}
          </span>
          <span class="text-xs font-medium text-slate-500">
            {{ item.duration }}
          </span>
        </div>
        
        <!-- Content Side (Role, Company, Description) -->
        <div class="w-full md:w-2/3 flex flex-col gap-3 relative">
          <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white uppercase tracking-tight group-hover:text-slate-500 transition-colors">
            {{ item.role }}
          </h3>
          <div class="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-400 tracking-wider">
            <span class="material-symbols-outlined text-base">business</span>
            {{ item.company }}
          </div>
          
          <ul class="space-y-3 mt-4">
            <li v-for="(detail, dIndex) in item.details" :key="dIndex" class="flex items-start gap-3 text-base text-slate-600 dark:text-gray-300 font-light leading-relaxed">
              <span class="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900 dark:bg-white shrink-0"></span>
              <span>{{ detail }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import portfolioData from '~/data/portfolio.json'

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const expData = portfolioData.experience
const cards = ref([])

// Helper to accumulate refs in the loop
const setCardRef = (el) => {
  if (el && !cards.value.includes(el)) {
    cards.value.push(el)
  }
}

onMounted(() => {
  // Clear any existing scroll triggers if component remounts
  ScrollTrigger.getAll().forEach(t => t.kill())

  // GSAP ScrollTrigger animation for each card
  cards.value.forEach((card, index) => {
    gsap.fromTo(card, 
      { 
        y: 100, 
        opacity: 0,
        scale: 0.95
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%', // trigger animation when top of card hits 85% of viewport
          end: 'bottom 20%',
          toggleActions: 'play none none reverse', // play on enter, reverse on leave back
        }
      }
    )
  })
})
</script>
