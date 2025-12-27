import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
   srcDir: "./src",
   modules: ["@nuxtjs/tailwindcss"],
   devtools: { enabled: true },
   components: [{ path: "~/components", pathPrefix: false }],
});
