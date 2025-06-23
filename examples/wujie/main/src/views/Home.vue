<template>
  <div class="home">
    <a-typography>
      <a-typography-title>无界微前端示例</a-typography-title>
      <a-typography-paragraph>
        这是一个使用无界微前端框架的示例项目，包含了以下特性：
      </a-typography-paragraph>
      <a-typography-paragraph>
        <ul>
          <li>基于 Vue3 的主应用</li>
          <li>Vue3 子应用</li>
          <li>React 18 子应用</li>
          <li>统一的构建工具 (Rsbuild)</li>
          <li>完整的 TypeScript 支持</li>
          <li>优雅的 UI 设计 (Arco Design)</li>
        </ul>
      </a-typography-paragraph>
      <a-typography-paragraph>
        <a-space>
          <a-button type="primary" @click="router.push('/vue-app')"> 访问 Vue 子应用 </a-button>
          <a-button type="primary" status="success" @click="router.push('/react-app')">
            访问 React 子应用
          </a-button>
        </a-space>
      </a-typography-paragraph>
    </a-typography>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

ul {
  padding-left: 20px;
}
</style>
