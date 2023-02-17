import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Form/SimpleForm.vue'
const routes = [
    {
        path: '/',
        component: Home
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router