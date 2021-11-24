<template>
    <nav-bar :title="title" @back="handlePageBack"></nav-bar>

    <tabbar @hangleChangeTitle="hangleChangeTitle" :pagesName="title"></tabbar>

    <router-view></router-view>
</template>

<script lang="ts">
import { Tabbar } from "./components/Tabbar"
import { NavBar } from "./components/NavBar"
import { ref } from "@vue/reactivity"
export default {
    components: {
        NavBar,
        Tabbar,
    },
    setup() {
        // 对应NavBar的标题
        let title = ref("社区热门")

        // 不同页面路径对应的页面标题
        const titles = {
            "/Community": "社区热门",
            "/Sort": "话题分类",
            "/Reply": "我的回复",
            "/Home": "我的主页",
        }
        // 子组件Tabbar变动时，调用这个函数传给子组件Navbar标题
        const hangleChangeTitle = (value) => {
            title.value = value
        }
        // 返回上一次页面时，触发这个函数
        const handlePageBack = (path) => {
            title.value = titles[path]
        }

        return {
            title,
            hangleChangeTitle,
            handlePageBack,
        }
    },
}
</script>

<style></style>
