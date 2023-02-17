import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Form/SimpleForm.vue'
import PageLoad1 from "./components/Form/Page1.vue"
const routes = [
    {
        path: '/page1',
        component: Home
    },
    {
        path: '/',
        component: PageLoad1
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router