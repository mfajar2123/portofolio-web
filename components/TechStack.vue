<template>
  <main class="flex w-full max-w-2xl mx-auto flex-col px-5 pt-8 pb-12 space-y-16">
    <!-- Header Section (Lando Style: Massive Typography) -->
    <div class="space-y-2 mt-8 gsap-reveal-stack">
      <h1 class="text-[clamp(3rem,8vw,6rem)] font-black uppercase text-slate-900 dark:text-white tracking-tighter leading-[0.85]">
        {{ skillsData.titleBase }} <br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400 dark:from-white dark:to-slate-600 font-black">{{ skillsData.titleHighlight }}</span>
      </h1>
      <p class="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-md font-light mt-6">
        {{ skillsData.description }}
      </p>
    </div>

    <!-- Tech Categories -->
    <div class="space-y-10 pb-32">
      <template v-for="(category, index) in skillsData.categories" :key="index">
        <section class="space-y-4 gsap-card" :ref="setCardRef">
          <div class="flex items-center gap-3 mb-2">
            <span class="material-symbols-outlined text-2xl text-slate-900 dark:text-white">{{ category.icon }}</span>
            <h3 class="text-xl font-semibold text-slate-900 dark:text-white">{{ category.title }}</h3>
          </div>
          
          <div class="flex flex-wrap gap-3">
            <div 
              v-for="(item, iIndex) in category.items" 
              :key="iIndex"
              class="group flex items-center justify-center px-5 py-2.5 rounded-full border border-gray-200 dark:border-gray-800 hover:border-slate-900 dark:hover:border-white bg-white dark:bg-surface-dark transition-all duration-300 cursor-default"
            >
              <span class="text-sm font-medium text-slate-900 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white">{{ item }}</span>
            </div>
          </div>
        </section>

        <!-- Divider except for last item -->
        <div v-if="index < skillsData.categories.length - 1" class="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent opacity-0 gsap-divider"></div>
      </template>
    </div>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import portfolioData from '~/data/portfolio.json'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const skillsData = portfolioData.skills
const categoryCards = ref([])

const setCardRef = (el) => {
  if (el && !categoryCards.value.includes(el)) {
    categoryCards.value.push(el)
  }
}

onMounted(() => {
  // Wait a tick for DOM
  setTimeout(() => {
    ScrollTrigger.getAll().forEach(t => t.kill())
    
    // Header animation
    gsap.fromTo('.gsap-reveal-stack',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.1 }
    )

    // Staggered reveal for skill cards
    categoryCards.value.forEach((card, index) => {
      gsap.fromTo(card,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    // Reveal dividers
    gsap.utils.toArray('.gsap-divider').forEach((divider) => {
       gsap.to(divider, {
         opacity: 1, duration: 0.6,
         scrollTrigger: {
            trigger: divider,
            start: 'top 90%'
         }
       })
    })

  }, 100)
})
</script>
