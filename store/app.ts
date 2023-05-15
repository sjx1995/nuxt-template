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
          icon: "MdiNuxt",
        },
        {
          name: "Vue3",
          link: "https://vuejs.org/",
          icon: "MdiVuejs",
        },
        {
          name: "TypeScript",
          link: "https://www.typescriptlang.org/",
          icon: "MdiLanguageTypescript",
        },
        {
          name: "Pinia",
          link: "https://pinia.vuejs.org/",
          icon: "IconParkOutlinePineapple",
        },
        {
          name: "TailwindCSS",
          link: "https://tailwindcss.com/",
          icon: "MdiTailwind",
        },
        {
          name: "Iconify",
          link: "https://iconify.design/",
          icon: "SimpleIconsIconify",
        },
      ],
    };
  },
});
