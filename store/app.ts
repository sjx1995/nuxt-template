/*
 * @Description:
 * @Author: Sunly
 * @Date: 2023-05-15 10:40:53
 */
import { defineStore } from "pinia";

export const useAppStore = defineStore({
  id: "app",
  state() {
    return {
      linkLists: [
        {
          name: "Nuxt3",
          link: "https://nuxt.com/",
          icon: "mdi:nuxt",
        },
        {
          name: "Vue3",
          link: "https://vuejs.org/",
          icon: "mdi:vuejs",
        },
        {
          name: "TypeScript",
          link: "https://www.typescriptlang.org/",
          icon: "mdi:language-typescript",
        },
        {
          name: "Pinia",
          link: "https://pinia.vuejs.org/",
          icon: "icon-park-outline:pineapple",
        },
        {
          name: "Sass/Scss",
          link: "https://sass-lang.com/",
          icon: "fa-brands:sass",
        },
        {
          name: "Iconify",
          link: "https://iconify.design/",
          icon: "simple-icons:iconify",
        },
      ],
    };
  },
});
