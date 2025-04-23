import './bootstrap';
import { createApp } from 'vue';
import App from './components/app/App.vue';
import router from './components/app/router';
import clickOutside from './directives/click-outside.js';

const app = createApp(App);
app.directive('click-outside', clickOutside);
app.use(router);
app.mount('#app');