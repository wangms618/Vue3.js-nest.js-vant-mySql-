<template>
    <div class="hot-page">
        <!-- <PostsList></PostsList> -->
        <EmptyTip></EmptyTip>
    </div>
</template>

<script lang="ts">
// import PostsList from "@/components/posts-list.vue"
import EmptyTip from "@/components/empty-tip.vue"
export default {
    name: "hot-page",
    components: {
        // PostsList,
        EmptyTip,
    },
    props: {},
}
</script>

<style lang="less" scoped>
.hot-page {
    width: calc(100vw - 32px);
    margin: 0 16px;
}
</style>
