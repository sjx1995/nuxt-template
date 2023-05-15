<!--
 * @Description: index 主页
 * @Author: Sunly
 * @Date: 2023-05-15 06:19:50
-->
<template>
  <div
    class="absolute h-[50vh] w-[10000px] animate-[translate-x_8s_linear_infinite] z-[-20]"
  >
    <div
      class="inline-block h-[100%] w-[50%] bg-gradient-to-r from-cyan-300 via-indigo-400 to-cyan-300"
    ></div>
    <div
      class="inline-block h-[100%] w-[50%] bg-gradient-to-r from-cyan-300 via-indigo-400 to-cyan-300"
    ></div>
    <div
      class="absolute bottom-0 left-0 right-0 top-[-60vh] bg-gradient-to-t from-white"
    ></div>
  </div>

  <div class="text-center overflow-hidden">
    <h1 class="text-4xl mt-10 font-bold text-slate-800">Hello World</h1>

    <div class="mt-6">
      <nuxt-icon
        name="SolarStarFallMinimalistic2Outline"
        class="inline-block align-text-bottom scale-x-[-1] mr-1"
      />
      feature
      <nuxt-icon
        name="SolarStarFallMinimalistic2Outline"
        class="inline-block align-text-bottom"
      />
    </div>

    <ul class="mt-2 text-xl">
      <HomeLink
        v-for="item in linkLists"
        :key="item.name"
        :name="item.name"
        :link="item.link"
        :icon="item.icon"
      />
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useAppStore } from "~/store/app";

const store = useAppStore();
const linkLists = store.linkLists;
</script>
