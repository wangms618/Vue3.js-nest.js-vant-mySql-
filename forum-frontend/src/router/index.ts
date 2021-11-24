import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Main",
        component: () => import("../views/Main/Main.vue"),
        // children: [
        //     {

        //     }
        // ]
    },
    {
        path: "/Login",
        name: "Login",
        component: () => import("../views/Login/Login.vue"),
    },
    {
        path: "/Register",
        name: "Register",
        component: () => import("../views/Register/Register.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
