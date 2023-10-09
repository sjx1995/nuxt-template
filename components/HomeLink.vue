<!--
 * @Description: Home Link 主页链接
 * @Author: Sunly
 * @Date: 2023-05-15 06:49:09
-->
<script lang="ts" setup>
const props = defineProps<{
  link: string;
  name: string;
  icon: string;
}>();
</script>

<template>
  <li>
    <a :href="props.link" target="_blank">
      <Icon :name="props.icon" class="link-icon" />
      {{ props.name }}
    </a>
  </li>
</template>

<style lang="scss" scoped>
$hoverColor: rgb(34 211 238);

li {
  line-height: 40px;
  margin-left: -64px;
  list-style-type: none;
  a {
    position: relative;
    color: #333;
    text-decoration: none;
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 70%;
      bottom: 0;
      left: 30px;
      right: -4px;
      z-index: -10;
      background: $hoverColor;
      transition: top 0.2s;
    }
    &:hover {
      &::after {
        top: 40%;
      }
      .link-icon {
        color: $hoverColor;
      }
    }
    .link-icon {
      transition: color 0.4s;
      font-size: 24px;
      margin-right: 4px;
    }
  }
}
</style>
