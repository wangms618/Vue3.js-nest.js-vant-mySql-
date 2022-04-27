import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { useStore } from "vuex";
const store = useStore();
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
                component: () => import("../views/community/index.vue"),
            },
            {
                path: "/reply",
                name: "reply",
                component: () => import("../views/reply/index.vue"),
            },
            {
                path: "/edit-posts",
                name: "editPosts",
                component: () => import("../views/edit-posts/index.vue"),
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
    {
        path: "/posts/:id",
        name: "posts",
        component: () => import("../views/community/components/posts-page.vue"),
    },
    {
        path: "/setup",
        name: "setup",
        component: () => import("../views/homepage/components/setup-page.vue"),
    },
    {
        path: "/user-page/:id",
        name: "userpage",
        component: () => import("../components/user-page.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
