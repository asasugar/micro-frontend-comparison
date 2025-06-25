import { createApp } from 'vue';
import microApp from '@micro-zoe/micro-app';
import ArcoVue from '@arco-design/web-vue';
import App from './App.vue';
import router from './router';
import '@arco-design/web-vue/dist/arco.css';
// 初始化 micro-app
microApp.start({
  plugins: {
    modules: {
      // 解决子应用样式冲突
      'vue-app': [
        {
          loader(code: string) {
            if (process.env.NODE_ENV === 'development') {
              // 这里 /basename/ 需要和子应用的 basename 对应
              code = code.replace(/(from|import)(\s*['"])(\/vue-app\/)/g, all => {
                return all.replace('/vue-app/', 'http://localhost:8002/vue-app/');
              });
            }
            return code;
          },
        },
      ],
      'react-app': [
        {
          loader(code: string) {
            if (process.env.NODE_ENV === 'development') {
              code = code.replace(/(from|import)(\s*['"])(\/react-app\/)/g, all => {
                return all.replace('/react-app/', 'http://localhost:8003/react-app/');
              });
            }
            return code;
          },
        },
      ],
    },
  },
});

// 创建 Vue 应用
const app = createApp(App);
app.use(ArcoVue);
app.use(router);
app.mount('#root');
