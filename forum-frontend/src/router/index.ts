import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Main",
        component: () => import("../views/Main/Main.vue"),
        redirect: "/Community",
        children: [
            {
                path: "/Home",
                name: "home",
                component: () => import("../views/Main/views/Home/index.vue"),
            },
            {
                path: "/Community",
                name: "Community",
                component: () =>
                    import("../views/Main/views/Community/index.vue"),
            },
            {
                path: "/Reply",
                name: "Reply",
                component: () => import("../views/Main/views/Reply/index.vue"),
            },
            {
                path: "/Sort",
                name: "Sort",
                component: () => import("../views/Main/views/Sort/index.vue"),
            },
        ],
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
