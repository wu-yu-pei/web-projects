import { createApp } from 'vue';
import App from './App.vue';

// pinia
import store from './store';

// unocss
import 'uno.css';

// router and layouts
import generatedRoutes from '~pages';
import { createRouter, createWebHashHistory } from 'vue-router';
import { setupLayouts } from 'virtual:generated-layouts';

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

createApp(App).use(store).use(router).mount('#app');
