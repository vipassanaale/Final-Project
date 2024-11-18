import {createRouter, createWebHistory} from "vue-router";
import Home from './components/Home.vue'
import Menu from "./components/Menu.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // your routes here
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/menu',
            name: 'Menu',
            component: Menu
        }
    ]
})

export default router