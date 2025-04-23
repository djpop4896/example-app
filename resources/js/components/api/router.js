import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import('./Home.vue') },
    { path: '/authentication', component: () => import('./Authentication.vue') },
    // { path: '/balance', component: () => import('./Balance.vue') },
    // { path: '/payment', component: () => import('./Payment.vue') },
    // { path: '/billing', component: () => import('./Billing.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('./_404.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;