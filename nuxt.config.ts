// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],

  image: {
    format: ['webp']
  },

  googleFonts: {
    families: {
      'Space+Grotesk': [300, 400, 500, 600, 700, 800, 900],
      'Inter': [300, 400, 500, 600, 700]
    },
    display: 'swap',
    download: true
  },

  css: [
    '~/assets/css/main.css'
  ],

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      htmlAttrs: {
        class: 'dark' // Dark mode default as requested
      },
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png?v=2' }
      ]
    }
  }
})