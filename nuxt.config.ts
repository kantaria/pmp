// https://nuxt.com/docs/api/configuration/nuxt-config\

export default defineNuxtConfig({
  ssr: true,
  runtimeConfig: {
    baseUrl: process.env.NUXT_BASE_URL,
    port: process.env.NUXT_PORT || "3101",
  },
  modules: [
    // ...
    "@pinia/nuxt",
    // "@nuxtjs/tailwindcss",
    'nuxt-primevue'
  ],
  devtools: { enabled: true },
  css: ["~/assets/scss/style.scss",
    "primevue/resources/themes/lara-dark-teal/theme.css",
    'primevue/resources/themes/saga-blue/theme.css','primevue/resources/primevue.min.css','primeicons/primeicons.css',"primeflex/primeflex.css"
  ],
    
  primevue: {
    usePrimeVue: true ,
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities'
},
  pinia: {
    storesDirs: ["./stores/**"],
  },
  
  build: {},
  app: {
    head: {
      titleTemplate: "%s",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
      ],
      link: [{ rel: "shortcut icon", href: "" }],
    },
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  vite: {
    build: {
      // Add svg rule to handlex SVG files
      rollupOptions: {
        output: {
          manualChunks: {
            // Define manual chunks for SVG files
            svg: ["@svg/.*"],
          },
        },
      },
    },
  },
});
