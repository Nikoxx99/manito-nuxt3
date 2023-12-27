// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',,
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@formkit/nuxt'
  ],
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  }
})
