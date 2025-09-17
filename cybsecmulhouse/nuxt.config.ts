// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  experimental: { appManifest: false },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: ["@nuxt/ui", "@nuxtjs/i18n", "@nuxt/image"],
  i18n: {
    locales:['en','fr'],
    defaultLocale: 'fr',
    vueI18n: './i18n.config.ts', // if you are using custom path, default
    vueI18nLoader: true
  }
})