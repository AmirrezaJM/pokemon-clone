// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  app: {
    head: {
      bodyAttrs: {
        class: "bg-[#F5F5F5] dark:bg-[#1E1B1B]",
      },
      title: "Pokemon",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/favicon.ico",
        },
      ],
    },
  },
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxt/image",
  ],
  css: ["~/assets/css/main.css"],
  tailwindcss: {
    configPath: "tailwind.config.ts",
    exposeConfig: {
      level: 2,
    },
  },
  ssr: false,
  image: {
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  }
  colorMode: {
    preference: "dark", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
  },

});
