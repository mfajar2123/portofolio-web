<template>
  <div class="relative w-full overflow-hidden">
    <Transition name="fade" appear>
      <HeroSection id="hero" class="min-h-screen" />
    </Transition>
  </div>
</template>

<script setup>
// using auto imports from nuxt
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
