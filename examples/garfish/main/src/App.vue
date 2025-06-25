<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <div class="logo">Garfish Demo</div>
      <a-menu mode="horizontal" :selected-keys="[currentRoute]" @menu-item-click="handleMenuClick">
        <a-menu-item key="/">首页</a-menu-item>
        <a-menu-item key="/vue-app">Vue 子应用</a-menu-item>
        <a-menu-item key="/react-app">React 子应用</a-menu-item>
      </a-menu>
    </a-layout-header>
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <div id="subapp-container" />
  </a-layout>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const currentRoute = ref('/');

const handleMenuClick = (key: string) => {
  currentRoute.value = key;
  router.push(key);
};
</script>

<style scoped lang="less">
.layout {
  height: 100vh;
}

.header {
  display: flex;
  align-items: center;
  background: var(--color-bg-2);
  border-bottom: 1px solid var(--color-border);
}

.logo {
  margin-right: 24px;
  font-size: 18px;
  font-weight: 500;
}

.content {
  padding: 24px;
  background: var(--color-bg-1);
}
</style>
