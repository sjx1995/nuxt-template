<!--
 * @Description: index 主页
 * @Author: Sunly
 * @Date: 2023-05-15 06:19:50
-->
<script lang="ts" setup>
import { useAppStore } from "~/store/app";

const store = useAppStore();
const linkLists = store.linkLists;
</script>

<template>
  <main>
    <h1>Nuxt3 Template Starter</h1>

    <div class="sub-title">
      <Icon name="solar:star-fall-broken" class="star-icon" />
      feature
      <Icon name="solar:star-fall-broken" class="star-icon" />
    </div>

    <ul>
      <HomeLink
        v-for="item in linkLists"
        :key="item.name"
        :name="item.name"
        :link="item.link"
        :icon="item.icon"
      />
    </ul>
  </main>
</template>

<style lang="scss" scoped>
main {
  text-align: center;
  overflow: hidden;
  h1 {
    font-size: 36px;
    line-height: 40px;
    margin-top: 80px;
    font-weight: bold;
  }
  .sub-title {
    margin-top: 40px;
    font-size: 24px;
    .star-icon:first-child {
      transform: scaleX(-1);
      margin-right: 2px;
    }
  }

  ul {
    margin-top: 40px;
    font-size: 20px;
  }
}
</style>
