<template>
    <div class="hot-page">
        <PostsList v-if="true"></PostsList>
        <EmptyTip v-else></EmptyTip>
    </div>
</template>

<script lang="ts">
import PostsList from "@/components/posts-list.vue"
import EmptyTip from "@/components/empty-tip.vue"
export default {
    name: "hot-page",
    components: {
        PostsList,
        EmptyTip,
    },
    props: {},
}
</script>

<style lang="less" scoped>
.hot-page {
    width: calc(100vw - 32px);
    height: 76vh;
    margin: 0 16px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
