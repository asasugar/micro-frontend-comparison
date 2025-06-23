<template>
  <div class="home">
    <h1>欢迎使用 QianKun 微前端示例</h1>
    <p>这是一个使用 QianKun 框架的微前端示例项目，包含：</p>
    <a-list>
      <a-list-item> 主应用 - 使用 Vue 3 + Rsbuild + Arco Design Vue </a-list-item>
      <a-list-item> Vue 子应用 - 使用 Vue 3 + Vite </a-list-item>
      <a-list-item> React 子应用 - 使用 React 18 + Vite </a-list-item>
    </a-list>
    <div class="actions">
      <a-button type="primary" @click="router.push('/vue')"> 访问 Vue 子应用 </a-button>
      <a-button type="primary" style="margin-left: 16px" @click="router.push('/react')">
        访问 React 子应用
      </a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped lang="less">
.home {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;

  h1 {
    margin-bottom: 24px;
    text-align: center;
  }

  p {
    margin-bottom: 16px;
  }

  .actions {
    margin-top: 32px;
    text-align: center;
  }
}
</style>
