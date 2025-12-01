/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app.vue',
    './error.vue',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    './composables/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './content/**/*.{md,yml,json}',
    './node_modules/@nuxt/ui/**/*.js',
  ],
  theme: {
    extend: {},
  },
plugins: [
  require('@tailwindcss/typography'),
]

}
