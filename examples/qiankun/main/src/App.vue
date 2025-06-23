<template>
  <a-layout class="layout">
    <a-layout-header class="header">
      <div class="logo">QianKun 示例</div>
      <a-menu
        mode="horizontal"
        :selected-keys="[currentRoute]"
        @menu-item-click="handleMenuClick"
      >
        <a-menu-item key="/">主页</a-menu-item>
        <a-menu-item key="/vue">Vue 子应用</a-menu-item>
        <a-menu-item key="/react">React 子应用</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content class="content">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
      <div id="subapp-container"></div>
    </a-layout-content>
  </a-layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const currentRoute = ref(route.path);

watch(() => route.path, (newPath) => {
  currentRoute.value = newPath;
});

const handleMenuClick = (key: string) => {
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