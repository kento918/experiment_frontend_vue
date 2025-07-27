import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  modules: [
    '@nuxt/vuetify',
    '@nuxt/eslint',
    '@nuxt/icons',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxt/eslint-config-prettier', 
  ],
  css: [
    'vuetify/styles', 
    '@mdi/font/css/materialdesignicons.css', 
  ],
  build:{
    transpile: ['vuetify'], 
  },
  vuetify: {
    title: 'My Nuxt App with Vuetify',
    icon: 'mdi-account-box',
    customProperties: true,
  },
  eslint:{
   configPath: 'config/eslint.config.js', 
  },
  devtools:{
    enabled: true,
  },
})