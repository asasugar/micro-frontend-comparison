<template>
  <div class="subapp-container">
    <WujieVue name="vue-app" url="http://localhost:8002" :sync="true" :props="props" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import WujieVue from 'wujie-vue3';

const route = useRoute();
const props = {
  path: route.fullPath.replace('/vue-app', ''),
};
</script>

<style scoped>
.subapp-container {
  height: calc(100vh - 100px);
}
</style>
