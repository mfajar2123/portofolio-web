<template>
  <div>
    <!-- Top Navigation -->
    <header class="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between p-6 backdrop-blur-md bg-background-light/80 dark:bg-background-dark/80 border-b border-neutral-200 dark:border-neutral-800 transition-transform duration-300">
      <div class="flex items-center gap-2">
        <div class="size-8 rounded-full bg-slate-900 dark:bg-white flex items-center justify-center">
          <span class="material-symbols-outlined text-white dark:text-slate-900 text-[20px]">code</span>
        </div>
        <span class="text-slate-900 dark:text-white font-bold tracking-tight text-lg">MF.</span>
      </div>
      <div class="flex items-center gap-4">
        <!-- Replaced menu icon with dots icon representing standard fullscreen toggles -->
        <button @click="isMenuOpen = true" class="text-slate-900 dark:text-white hover:text-slate-500 transition-colors flex items-center justify-center w-10 h-10 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800">
          <span class="material-symbols-outlined text-3xl">more_horiz</span>
        </button>
      </div>
    </header>

    <!-- Fullscreen Mobile Menu Overlay -->
    <FullscreenMenu :isOpen="isMenuOpen" @close="isMenuOpen = false" />

    <!-- Page Content -->
    <main class="min-h-screen">
      <slot />
    </main>

    <!-- Footer Component -->
    <AppFooter />

    <!-- Bottom Navigation Bar for Mobile -->
    <nav class="fixed lg:hidden bottom-0 left-0 w-full bg-surface-dark/90 backdrop-blur-lg border-t border-border-dark px-6 pb-6 pt-4 z-[60] transition-transform duration-500">
      <div class="flex justify-between items-center max-w-lg mx-auto">
        <NuxtLink to="/" class="flex flex-col items-center gap-1 group" exact-active-class="active-link">
          <div class="icon-container rounded-full px-4 py-1 flex flex-col items-center group-[.active-link]:bg-white/10 transition-colors">
            <span class="material-symbols-outlined text-text-secondary text-[26px] group-hover:text-white group-[.active-link]:text-white transition-colors">home</span>
          </div>
          <span class="text-[10px] text-text-secondary group-hover:text-white group-[.active-link]:text-white font-medium transition-colors">Home</span>
        </NuxtLink>
        <NuxtLink to="/experience" class="flex flex-col items-center gap-1 group" exact-active-class="active-link">
          <div class="icon-container rounded-full px-4 py-1 flex flex-col items-center group-[.active-link]:bg-white/10 transition-colors">
            <span class="material-symbols-outlined text-text-secondary text-[26px] group-hover:text-white group-[.active-link]:text-white transition-colors">work</span>
          </div>
          <span class="text-[10px] text-text-secondary group-hover:text-white group-[.active-link]:text-white font-medium transition-colors">Work</span>
        </NuxtLink>
        <NuxtLink to="/stack" class="flex flex-col items-center gap-1 group" exact-active-class="active-link">
          <div class="icon-container rounded-full px-4 py-1 flex flex-col items-center group-[.active-link]:bg-white/10 transition-colors">
            <span class="material-symbols-outlined text-text-secondary text-[26px] group-hover:text-white group-[.active-link]:text-white transition-colors">layers</span>
          </div>
          <span class="text-[10px] text-text-secondary group-hover:text-white group-[.active-link]:text-white font-medium transition-colors">Stack</span>
        </NuxtLink>
        <NuxtLink to="/about" class="flex flex-col items-center gap-1 group" exact-active-class="active-link">
          <div class="icon-container rounded-full px-4 py-1 flex flex-col items-center group-[.active-link]:bg-white/10 transition-colors">
            <span class="material-symbols-outlined text-text-secondary text-[26px] group-hover:text-white group-[.active-link]:text-white transition-colors">person</span>
          </div>
          <span class="text-[10px] text-text-secondary group-hover:text-white group-[.active-link]:text-white font-medium transition-colors">About</span>
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isMenuOpen = ref(false)
</script>
