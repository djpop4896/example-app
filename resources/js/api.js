import './bootstrap';
import { createApp } from 'vue';
import Api from './components/api/Api.vue';
import router from './components/api/router';
import clickOutside from './directives/click-outside.js';

const app = createApp(Api);
app.directive('click-outside', clickOutside);
app.use(router);
app.mount('#api');