// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts'
  ],
  tailwindcss: {
    configPath: 'tailwind.config.ts',
    exposeConfig: {
      level: 2
    },
  },
  ssr: false,
  app: {
    head: {
      bodyAttrs: {
        class: "bg-[#F5F5F5] dark:bg-[#1E1B1B]"
      },
      title: "Pokemon",
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
  },
  css: ["~/assets/css/main.css"],
  googleFonts: {
    preload: true,
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      Inter: '200..700',
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      }
    }
  }
})