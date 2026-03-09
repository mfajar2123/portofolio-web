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
      'Space+Grotesk': [400, 700, 900],
      'Inter': [400, 500, 700]
    },
    display: 'swap',
    download: true,
    inject: true
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