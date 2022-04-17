<template>
    <div class="community-page">
        <van-sticky>
            <TopicBar v-if="pageInfo.name === 'topic'"></TopicBar>
        </van-sticky>
        <PostsList v-if="listInfo.length" :posts-list="listInfo"></PostsList>
        <EmptyTip v-else></EmptyTip>
    </div>
</template>

<script lang="ts">
import { PostsList, EmptyTip } from "@/components";
import TopicBar from "./components/topic-bar.vue";
export default {
    name: "community-page",
    components: {
        PostsList,
        EmptyTip,
        TopicBar,
    },
    props: {
        pageInfo: {
            type: Object,
            required: true,
        },
    },
    setup() {
        const listInfo = [];
        return {
            listInfo,
        };
    },
};
</script>

<style lang="less">
.community-page {
    width: calc(100vw - 32px);
    height: 76vh;
    margin: 0 16px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
