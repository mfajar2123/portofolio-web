<template>
  <main class="flex w-full max-w-2xl mx-auto flex-col px-5 pt-8 pb-12 space-y-16">
    <!-- Header Section (Lando Style: Massive Typography) -->
    <div class="space-y-2 mt-8 gsap-reveal-about">
      <h1 class="text-[clamp(3.5rem,8vw,6rem)] font-black uppercase text-slate-900 dark:text-white tracking-tighter leading-[0.85]">
        Education & <br/>
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400 dark:from-white dark:to-slate-600 font-black">Certs</span>
      </h1>
    </div>

    <section class="space-y-6 gsap-section">
      <div class="flex items-center gap-3 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
        <span class="material-symbols-outlined text-2xl text-slate-900 dark:text-white">school</span>
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white">Degree</h3>
      </div>
      
      <div v-for="(edu, i) in eduData.items" :key="i" class="bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-800 p-5 rounded-xl">
        <h4 class="font-bold text-lg text-slate-900 dark:text-white">{{ edu.degree }}</h4>
        <p class="text-slate-600 dark:text-gray-400">{{ edu.school }}</p>
        <p class="text-xs text-slate-400 dark:text-gray-500 mt-2 tracking-wider">{{ edu.period }}</p>
      </div>
    </section>

    <section class="space-y-6 gsap-section pb-32">
      <div class="flex items-center gap-3 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">
        <span class="material-symbols-outlined text-2xl text-slate-900 dark:text-white">workspace_premium</span>
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white">Certifications</h3>
      </div>
      
      <ul class="space-y-3">
        <li v-for="(cert, i) in eduData.certifications" :key="'c-'+i" class="flex items-start gap-3">
          <span class="material-symbols-outlined text-slate-400 dark:text-gray-600 mt-0.5">verified</span>
          <span class="text-slate-700 dark:text-gray-300">{{ cert }}</span>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import portfolioData from '~/data/portfolio.json'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const eduData = portfolioData.education

onMounted(() => {
  setTimeout(() => {
    ScrollTrigger.getAll().forEach(t => t.kill())

    // Header reveal
    gsap.fromTo('.gsap-reveal-about',
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.1 }
    )

    // Staggered reveal for education sections
    gsap.utils.toArray('.gsap-section').forEach((section) => {
       gsap.fromTo(section, 
         { y: 40, opacity: 0 },
         { 
           y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
           scrollTrigger: {
             trigger: section,
             start: 'top 85%',
             toggleActions: 'play none none reverse'
           }
         }
       )
    })
  }, 100)
})
</script>
