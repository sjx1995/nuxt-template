<!--
 * @Description: Home Link 主页链接
 * @Author: Sunly
 * @Date: 2023-05-15 06:49:09
-->
<template>
  <li class="leading-10 -ml-5">
    <a
      class="group/item relative after:content-[''] after:absolute after:bg-cyan-400 after:bottom-0 after:top-[70%] after:left-[1.3em] after:right-[-0.2em] after:-z-10 after:transition-all hover:after:top-[30%]"
      :href="props.link"
    >
      <nuxt-icon
        :name="props.icon"
        class="group-hover/item:text-cyan-500 inline-block align-text-bottom transition-colors mr-1"
      />
      {{ props.name }}
    </a>
  </li>
</template>

<script lang="ts" setup>
const props = defineProps<{
  link: string;
  name: string;
  icon: string;
}>();
</script>
