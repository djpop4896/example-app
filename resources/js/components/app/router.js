import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import('./Home.vue') },
    { path: '/dashboard', component: () => import('./Dashboard.vue') },
    { path: '/calander', component: () => import('./Calander.vue') },
    { path: '/form', component: () => import('./Form.vue') },
    { path: '/sign_up', component: () => import('./SignUp.vue') },
    { path: '/:pathMatch(.*)*', component: () => import('./_404.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;