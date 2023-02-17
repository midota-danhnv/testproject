import { createRouter, createWebHistory } from 'vue-router'

import Home from './components/Form/SimpleForm.vue'
import Noname from './components/Form/NoName.vue'
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/Noname',
        component: Noname
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router