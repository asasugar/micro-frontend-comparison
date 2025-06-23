<template>
  <div class="app-container">
    <a-layout>
      <a-layout-header>
        <div class="header-content">
          <div class="logo">Garfish Demo</div>
          <a-menu
            mode="horizontal"
            :selected-keys="[currentRoute]"
            @menu-item-click="handleMenuClick"
          >
            <a-menu-item key="/">首页</a-menu-item>
            <a-menu-item key="/react-app">React 子应用</a-menu-item>
            <a-menu-item key="/vue-app">Vue 子应用</a-menu-item>
          </a-menu>
        </div>
      </a-layout-header>
      <a-layout-content>
        <div id="subapp-container" />
      </a-layout-content>
    </a-layout>
  </div>
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

<style scoped>
.app-container {
  height: 100vh;
}

.header-content {
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.logo {
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-right: 40px;
}

:deep(.arco-layout-header) {
  background: #18181c;
}

:deep(.arco-menu) {
  background: transparent;
}

:deep(.arco-menu-horizontal) {
  border-bottom: none;
}

:deep(.arco-layout-content) {
  padding: 20px;
  background: #f5f6f7;
}

#subapp-container {
  background: #fff;
  border-radius: 4px;
  min-height: calc(100vh - 108px);
}
</style>
