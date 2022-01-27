import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "forum",
        component: () => import("../views/index.vue"),
        redirect: "/community",
        children: [
            {
                path: "/homepage",
                name: "homepage",
                component: () => import("../views/homepage/index.vue"),
            },
            {
                path: "/community",
                name: "community",
                component: () =>
                    import("../views/community/index.vue"),
            },
            {
                path: "/reply",
                name: "reply",
                component: () => import("../views/reply/index.vue"),
            },
            {
                path: "/sort",
                name: "sort",
                component: () => import("../views/sort/index.vue"),
            },
        ],
    },
    {
        path: "/login",
        name: "login",
        component: () => import("../views/login/index.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: () => import("../views/register/index.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
