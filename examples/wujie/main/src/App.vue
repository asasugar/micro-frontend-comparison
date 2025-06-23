<template>
  <a-layout>
    <a-layout-header>
      <div class="logo">
        <img src="https://wujie-micro.github.io/doc/wujie.png" alt="wujie logo" />
        <span>无界</span>
      </div>
      <a-menu mode="horizontal" :selected-keys="[route.name as string]" @menu-item-click="handleMenuClick">
        <a-menu-item key="home">首页</a-menu-item>
        <a-menu-item key="vue-app">Vue 子应用</a-menu-item>
        <a-menu-item key="react-app">React 子应用</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <router-view></router-view>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const handleMenuClick = (key: string) => {
  router.push({ name: key });
};
</script>

<style scoped>
.a-layout {
  height: 100vh;
}

.a-layout-header {
  display: flex;
  align-items: center;
  background: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}

.logo {
  display: flex;
  align-items: center;
  margin-right: 24px;
}

.logo img {
  width: 32px;
  margin-right: 8px;
}

.logo span {
  color: var(--color-text-1);
  font-size: 18px;
  font-weight: 500;
}

.a-layout-content {
  padding: 20px;
  background: var(--color-bg-1);
}
</style>