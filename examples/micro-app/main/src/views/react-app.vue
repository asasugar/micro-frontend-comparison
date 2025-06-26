<template>
  <micro-app :name="vueApp?.name" :url="vueApp?.entry" />
</template>

<script setup lang="ts">
import { getMainAppConfig } from '../../../../../configs/shared/app.config';

// 获取子应用配置
const mainConfig = getMainAppConfig('micro-app');
const vueApp = mainConfig.subApps.find(app => app.name === 'react-app');
</script>
