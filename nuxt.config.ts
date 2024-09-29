// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
    "@nuxt/image",
  ],
  tailwindcss: {
    configPath: "tailwind.config.ts",
    exposeConfig: {
      level: 2,
    },
  },
  ssr: false,
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
          href: "~/assets/images/favicon-32x32.png",
        },
      ],
    },
  },
  colorMode: {
    preference: "dark", // default value of $colorMode.preference
    fallback: "light", // fallback value if not system preference found
  },
  css: ["~/assets/css/main.css"],
});
