<template>
    <van-nav-bar
        v-if="isEditPosts"
        :title="title"
        left-text="返回"
        right-text="发布"
        left-arrow
        @click-left="handleBack"
        @click-right="handlePush"
    />
    <van-nav-bar
        v-else
        :title="title"
        left-text="返回"
        left-arrow
        @click-left="handleBack"
    />
</template>

<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
export default {
    props: {
        title: {
            type: String,
            default: "",
        },
    },
    setup(props, context) {
        const route = useRoute();
        // 返回上一次页面
        const handleBack = () => {
            context.emit("back", history.state.back);
            history.back();
        };

        const handlePush = () => {
            // 发布逻辑
            // context.emit("push");
            console.log("操作vuex来写");
        };
        const isEditPosts = computed(() => {
            return route.path === "/edit-posts" ? true : false;
        });

        return {
            handleBack,
            handlePush,
            isEditPosts,
        };
    },
};
</script>

<style lang="less" scoped>
</style>
