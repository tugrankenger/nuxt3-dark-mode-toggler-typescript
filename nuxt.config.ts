// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:['~/assets/css/main.css'],
  modules:[
    '@nuxtjs/color-mode'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  colorMode: {
    classSuffix: ''
  },
})
