import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
   modules: ["@nuxtjs/tailwindcss"],
   devtools: { enabled: true },
   components: [{ path: "~/components", pathPrefix: false }],
});
