import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../components/dashboardPage/dashboardPage.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router