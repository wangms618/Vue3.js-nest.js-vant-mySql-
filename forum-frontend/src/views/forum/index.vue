<template>
    <div>
        <HeaderBar :title="title" @back="handlePageBack"></HeaderBar>
        <TabBar @change-title="handleChangeTitle" :pagesName="title"></TabBar>
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import { TabBar,HeaderBar } from "../bars"
import { ref } from "@vue/reactivity"
import { Title } from "./const"
export default {
    components: {
        HeaderBar,
        TabBar,
    },
    setup() {
        // 对应NavBar的标题
        let title = ref("冻梨社区")

        // 子组件Tabbar变动时，调用这个函数传给子组件Navbar标题
        const handleChangeTitle = (value) => {
            title.value = value
        }
        // 返回上一次页面
        const handlePageBack = (path) => {
            title.value = Title[path]
        }

        return {
            title,
            handleChangeTitle,
            handlePageBack,
        }
    },
}
</script>

<style></style>
