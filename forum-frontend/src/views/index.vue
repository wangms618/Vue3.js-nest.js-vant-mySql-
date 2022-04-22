<template>
    <div>
        <!-- 顶部标签栏 -->
        <HeaderBar :title="title"></HeaderBar>
        <router-view></router-view>
        <!-- 底部标签栏 -->
        <TabBar></TabBar>
    </div>
</template>

<script lang="ts">
import { TabBar, HeaderBar } from "./bars";
import { ref, watch } from "vue";

import { useRoute } from "vue-router";
export default {
    components: {
        HeaderBar,
        TabBar,
    },
    setup() {
        const route = useRoute();
        // 对应NavBar的标题
        const title = ref("冻梨社区");
        const pages = ["冻梨社区", "发布帖子", "我的回复", "我的主页"];
        watch(
            () => route.path,
            val => {
                if (val == "/community") {
                    title.value = pages[0];
                }
                if (val == "/edit-posts") {
                    title.value = pages[1];
                }
                if (val == "/reply") {
                    title.value = pages[2];
                }
                if (val == "/homepage") {
                    title.value = pages[3];
                }
            },
            { immediate: true }
        );

        return {
            title,
        };
    },
};
</script>

<style></style>
