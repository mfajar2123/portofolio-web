<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import portfolioData from '~/data/portfolio.json'

const title = `${portfolioData.hero.firstName} ${portfolioData.hero.lastName} - ${portfolioData.hero.roles[1]}`
const description = portfolioData.hero.bio
const image = portfolioData.hero.image

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: image,
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: image,
  themeColor: '#0a0a0a'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { name: 'author', content: `${portfolioData.hero.firstName} ${portfolioData.hero.lastName}` },
    { name: 'keywords', content: 'Portfolio, Muhamad Fajar, Web App Developer, Computer Engineering, Vue, Nuxt 3' }
  ],
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
  ]
})
</script>
