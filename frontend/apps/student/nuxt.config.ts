// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      title: "APClub",
      meta: [{ name: "description", content: "My amazing site." }],
    },
  },
  modules: [
    "@pinia/nuxt",
    "nuxt-icon",
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
  ],
  css: [
    "md-editor-v3/lib/style.css",
    "primeicons/primeicons.css",
    "primevue/resources/primevue.css",
    "primevue/resources/themes/lara-light-blue/theme.css",
  ],
  image: {},
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
