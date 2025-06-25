<template>
  <div class="home">
    <a-card :style="{ width: '600px' }">
      <template #title>Garfish 微前端示例</template>
      <a-space direction="vertical" size="large" fill>
        <a-typography-paragraph>
          这是一个使用 Garfish 实现的微前端示例，包含以下特性：
        </a-typography-paragraph>
        <a-list>
          <a-list-item>Vue3 主应用</a-list-item>
          <a-list-item>React 子应用</a-list-item>
          <a-list-item>Vue3 子应用</a-list-item>
          <a-list-item>统一的构建工具 (Rsbuild)</a-list-item>
          <a-list-item>统一的组件库 (Arco Design)</a-list-item>
        </a-list>
        <a-space>
          <a-button type="primary" status="success" @click="router.push('/vue-app/')">
            访问 Vue 子应用
          </a-button>
          <a-button type="primary" @click="router.push('/react-app')"> 访问 React 子应用 </a-button>
        </a-space>
      </a-space>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 108px);
}
</style>
