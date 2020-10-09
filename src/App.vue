<template>
<router-view />
</template>

<script lang="ts" setup>
import {
  ref,
  provide
} from "vue";
import {
  router
} from "./router";

const width = document.documentElement.clientWidth;
/**
 * menuVisible 当页面宽度大于等于 500 width 时, 设置为 true，供注入的组件使用响应式数据的变化
 */
const menuVisible = ref(width <= 500 ? false : true);
provide("menuVisible", menuVisible); // set

router.afterEach(() => {
  if (width <= 500) {
    menuVisible.value = false;
  }
});
</script>
