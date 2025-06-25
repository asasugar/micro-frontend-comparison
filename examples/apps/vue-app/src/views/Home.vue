<template>
  <div class="home">
    <a-card :style="{ width: '600px' }">
      <template #title>Vue 子应用</template>
      <a-space direction="vertical" size="large" fill>
        <a-typography-paragraph>
          这是一个 Vue3 子应用，当前计数：{{ count }}
        </a-typography-paragraph>
        <a-space>
          <a-button type="primary" @click="increment"> 增加 </a-button>
          <a-button status="danger" @click="decrement"> 减少 </a-button>
        </a-space>
      </a-space>
    </a-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

const increment = () => {
  count.value++;
};

const decrement = () => {
  count.value--;
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}
</style>
