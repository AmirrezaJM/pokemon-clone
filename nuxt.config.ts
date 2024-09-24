// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
  ],
  tailwindcss: {
    exposeConfig: true,
  },
  ssr: false,
  app: {
    head: {
      bodyAttrs: {
        style: "background-color: #1E1B1B;"
      },
      title: "Pokemon",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})