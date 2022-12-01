// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      title: "APClub | Superadmin",
      meta: [{ name: "description", content: "My amazing site." }],
    },
  },
  modules: [
    "nuxt-icon",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
  ],
  image: {},
  css: [
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
  ],
  build: {
    transpile: ["primevue"],
  },
  pages: true,
  // Defaults options
  tailwindcss: {
    cssPath: "./public/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
});
