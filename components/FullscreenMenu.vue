<template>
  <Transition name="menu">
    <div v-show="isOpen" class="fixed inset-0 z-[70] flex flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-hidden" style="zoom: 0.8;">
      
      <!-- Top Header for Menu -->
      <header class="flex items-center justify-between p-6">
        <div class="flex items-center gap-2">
          <div class="size-8 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center overflow-hidden">
          <nuxt-img src="/favicon.png" alt="Logo" class="w-full h-full object-cover" />
        </div>
          <span class="font-bold tracking-tight text-lg">HI.</span>
        </div>
        <button @click="$emit('close')" class="hover:text-slate-500 transition-colors z-10 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-100 dark:bg-neutral-800">
          <span class="material-symbols-outlined text-2xl">close</span>
        </button>
      </header>

      <!-- Menu Content -->
      <div class="flex-1 flex flex-col lg:flex-row h-full">
        
        <!-- Navigation Links and Contact -->
        <div class="w-full lg:w-1/2 flex flex-col justify-center px-10 lg:px-24">
          <nav class="flex flex-col gap-6 lg:gap-8">
            <NuxtLink 
              v-for="(link, i) in links" 
              :key="i" 
              :to="link.path"
              @click="$emit('close')"
              class="menu-link text-6xl md:text-8xl font-black uppercase tracking-tighter hover:text-slate-400 dark:hover:text-slate-500 transition-colors w-max"
            >
              {{ link.name }}
            </NuxtLink>
          </nav>

          <!-- Contact details in menu -->
          <div class="mt-20 flex flex-col gap-2 font-medium text-slate-500">
            <a href="mailto:mfajar2123@gmail.com" class="hover:text-slate-900 dark:hover:text-white transition w-max">mfajar2123@gmail.com</a>
            <p>Sukabumi, West Java</p>
          </div>
        </div>

        <!-- Right Side Image (B&W) -->
        <div class="hidden lg:flex flex-1 relative h-full p-6">
          <div class="w-full h-full rounded-3xl overflow-hidden relative">
            <div class="absolute inset-0 bg-neutral-900/20 z-10 mix-blend-multiply dark:mix-blend-overlay"></div>
            <nuxt-img 
              :src="heroData.image" 
              alt="Portrait" 
              class="menu-image h-full w-full object-cover grayscale opacity-90 scale-105" 
            />
          </div>
        </div>
      </div>

    </div>
  </Transition>
</template>

<script setup>
import { watch } from 'vue'
import gsap from 'gsap'
import portfolioData from '~/data/portfolio.json'

const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])
const heroData = portfolioData.hero

const links = [
  { name: 'Home', path: '/' },
  { name: 'Work', path: '/experience' },
  { name: 'Stack', path: '/stack' },
  { name: 'About', path: '/about' }
]

// GSAP Animations for the menu elements
watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    // Lock body scroll
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    
    // Animate links in
    gsap.fromTo('.menu-link', 
      { y: 100, opacity: 0, rotateZ: 5 },
      { y: 0, opacity: 1, rotateZ: 0, duration: 0.8, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
    )
    
    // Animate image in
    gsap.fromTo('.menu-image',
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 0.9, duration: 1.5, ease: 'power3.out', delay: 0.3 }
    )
  } else {
    // Restore body scroll
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
  }
})
</script>

<style scoped>
/* Base transition for the overall overlay container */
.menu-enter-active,
.menu-leave-active {
  transition: all 0.6s cubic-bezier(0.83, 0, 0.17, 1);
}

.menu-enter-from,
.menu-leave-to {
  clip-path: polygon(0 0, 100% 0, 100% 0, 0 0); /* slides down from top */
}

.menu-enter-to,
.menu-leave-from {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
}
</style>
