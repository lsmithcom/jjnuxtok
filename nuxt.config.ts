import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  css: ['~/assets/css/tailwind.css','~/assets/css/core.css'],
  modules: ['@nuxtjs/apollo',
  '@pinia/nuxt',
  '@pinia-plugin-persistedstate/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    faunaURL: process.env.FAUNA_API,
    faunaToken: process.env.FAUNADB_ADMIN_SECRET,
  },
  apollo: {
    autoImports: true,
    authType: 'Bearer',
    authHeader: 'Authorization',
    tokenStorage: 'cookie',
    clients: {
      default: {
        tokenName: "fauna-token",
        httpEndpoint: 'https://graphql.us.fauna.com/graphql'
      },
    },
  },
})