export default defineNuxtConfig({
  // Basic configuration
  app: {
    baseURL: '/my-nuxt-app/'
  },

  // Nitro now supports improved static generation presets
  nitro: {
    preset: 'github-pages'
  },

  devtools: { enabled: true },

  // Enable experimental features if needed (optional)
  experimental: {
    payloadExtraction: true
  },

  // Global CSS/SCSS files
  css: [
    '@/assets/styles/global.scss'
  ],

  // Build configuration
  build: {
    // If needed, you can add additional build config here
  },

  compatibilityDate: '2025-02-27'
})