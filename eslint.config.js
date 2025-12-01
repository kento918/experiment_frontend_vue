import js from "@eslint/js";
import globals from "globals";
import pluginVue from "eslint-plugin-vue";
import { defineConfig, globalIgnores, globals } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    plugins: { js },
    extends: ["js/recommended"],
  },
  {
    files: ["**/*.{js,mjs,cjs,vue}"],
    languageOptions: { globals: globals.browser },
  },
  pluginVue.configs["flat/essential"],
  globalIgnores([
    "**/dist/**",
    "**/node_modules/**",
    "**/coverage/**",
    "**/build/**",
    "**/public/**",
    "**/.nuxt/**",
    "**/.output/**",
    "**/.cache/**",
  ]),
  {
    rules: {
      semi: ["error", "always"],
      "vue/no-arrow-functions-in-watch": ["error", "always"],
    },
  },
]);
