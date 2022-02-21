<template>
    <div>
        <!-- 顶部标签栏 -->
        <HeaderBar
            :title="title"
            @back="handlePageBack"
        ></HeaderBar>
        <router-view></router-view>
        <!-- 底部标签栏 -->
        <TabBar @change-title="handleChangeTitle" :pagesName="title"></TabBar>
    </div>
</template>

<script lang="ts">
import { TabBar, HeaderBar } from "./bars";
import { ref } from "@vue/reactivity";
import { TitleTextByType } from "./types";
export default {
    components: {
        HeaderBar,
        TabBar,
    },
    setup() {
        // 对应NavBar的标题
        let title = ref("冻梨社区");

        // 子组件Tabbar变动时，调用这个函数传给子组件Navbar标题
        const handleChangeTitle = value => {
            title.value = value;
        };
        // 返回上一次页面
        const handlePageBack = path => {
            const titleType = path.replace(/\//, "");
            title.value = TitleTextByType[titleType];
        };

        return {
            title,
            handleChangeTitle,
            handlePageBack,
            // handlePush,
        };
    },
};
</script>

<style></style>
