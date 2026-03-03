<template>
  <footer class="mt-auto border-t border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark py-10 w-full pb-28">
    <div class="max-w-lg mx-auto w-full px-6 flex flex-col items-center justify-center space-y-6">
      <div class="flex gap-8 text-gray-400 dark:text-gray-500 flex-wrap justify-center">
        <a 
          v-for="(contact, index) in contactsData" 
          :key="index"
          class="hover:text-slate-900 dark:hover:text-white transition-colors" 
          :href="getContactLink(contact)"
          target="_blank"
          rel="noopener noreferrer"
          :title="contact.type"
        >
          <span class="material-symbols-outlined text-2xl">{{ contact.icon }}</span>
        </a>
      </div>
      <div class="text-center">
        <p class="text-xs font-semibold tracking-widest uppercase text-slate-900 dark:text-white mb-2">{{ footerData.name }}</p>
        <p class="text-[10px] text-gray-500 dark:text-gray-500">{{ footerData.copyright }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import portfolioData from '~/data/portfolio.json'
const footerData = portfolioData.footer
const contactsData = portfolioData.hero.contacts

const getContactLink = (contact) => {
  if (contact.type === 'Email') return `mailto:${contact.value}`
  if (contact.type === 'Mobile') return `https://wa.me/${contact.value}`
  
  if (!contact.value.startsWith('http')) {
    return `https://${contact.value}`
  }
  return contact.value
}
</script>
