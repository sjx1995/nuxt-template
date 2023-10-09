/*
 * @Description:
 * @Author: Sunly
 * @Date: 2023-10-09 05:34:54
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/normalize.css", "~/assets/css/main.css"],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  typescript: {
    shim: false,
  },
  modules: ["@pinia/nuxt", "nuxt-icon"],
});
