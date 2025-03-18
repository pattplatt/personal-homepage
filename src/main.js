import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';

import './assets/main.css'; // If you have global styles

const app = createApp(App);

app.use(router);

app.mount('#app');