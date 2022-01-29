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
import { PostsList, EmptyTip } from "@/components"
import TopicBar from "./components/topic-bar.vue"
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
        const listInfo = [
            {
                id: 1,
                title: "健身房恶习吐槽大会nnnnnn",
                context:
                    "健身房恶习有很多，诸如此类啦啦啦啦啦啦啦啦啦啦绿绿喵喵喵喵喵喵木木木木木木木木木木木木木木木木木啦啦绿绿",
                user: "董董董董董",
                date: "2019/10/8",
                views: 1000,
                imgUrl: [
                    "https://img2.baidu.com/it/u=2831053164,2846492010&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                ],
            },
            {
                id: 2,
                title: "健身房恶习吐槽大会",
                context:
                    "健身房恶习有很多，诸如此类啦啦啦啦啦啦啦啦啦啦绿绿喵喵喵喵喵喵木木木木木木木木木木木木木木木木木啦啦绿绿",
                user: "董董董董董",
                date: "2019/10/8",
                views: 1000,
                imgUrl: [
                    "https://img2.baidu.com/it/u=2831053164,2846492010&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
                ],
            },
            {
                id: 3,
                title: "健身房恶习吐槽大会",
                context:
                    "健身房恶习有很多，诸如此类啦啦啦啦啦啦啦啦啦啦绿绿喵喵喵喵喵喵木木木木木木木木木木木木木木木木木啦啦绿绿",
                user: "董董董董董",
                date: "2019/10/8",
                views: 1000,
                imgUrl: [],
            },
            {
                id: 4,
                title: "健身房恶习吐槽大会",
                context:
                    "健身房恶习有很多，诸如此类啦啦啦啦啦啦啦啦啦啦绿绿喵喵喵喵喵喵木木木木木木木木木木木木木木木木木啦啦绿绿",
                user: "董董董董董",
                date: "2019/10/8",
                views: 1000,
                imgUrl: [],
            },
            {
                id: 5,
                title: "健身房恶习吐槽大会",
                context:
                    "健身房恶习有很多，诸如此类啦啦啦啦啦啦啦啦啦啦绿绿喵喵喵喵喵喵木木木木木木木木木木木木木木木木木啦啦绿绿",
                user: "董董董董董",
                date: "2019/10/8",
                views: 1000,
                imgUrl: [],
            },
            {
                id: 6,
                title: "健身房恶习吐槽大会",
                context:
                    "健身房恶习有很多，诸如此类啦啦啦啦啦啦啦啦啦啦绿绿喵喵喵喵喵喵木木木木木木木木木木木木木木木木木啦啦绿绿",
                user: "董董董董董",
                date: "2019/10/8",
                views: 1000,
                imgUrl: [],
            },
            {
                id: 7,
                title: "健身房恶习吐槽大会",
                context:
                    "健身房恶习有很多，诸如此类啦啦啦啦啦啦啦啦啦啦绿绿喵喵喵喵喵喵木木木木木木木木木木木木木木木木木啦啦绿绿",
                user: "董董董董董",
                date: "2019/10/8",
                views: 1000,
                imgUrl: [],
            },
        ]
        return {
            listInfo,
        }
    },
}
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
