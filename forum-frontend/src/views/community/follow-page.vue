<template>
    <div class="follow-page">
        <PostsList v-if="listInfo.length" :posts-list="listInfo"></PostsList>
        <EmptyTip
            v-else
            :empty-text="['暂无内容', '若无关注的贴主，请先关注']"
        ></EmptyTip>
    </div>
</template>

<script lang="ts">
import { PostsList, EmptyTip } from "@/components"
export default {
    name: "follow-page",
    components: {
        PostsList,
        EmptyTip,
    },
    props: {},
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
                views: 122,
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
                views: 100,
                imgUrl: [],
            },
        ]
        return {
            listInfo,
        }
    },
}
</script>

<style lang="less" scoped>
.follow-page {
    width: calc(100vw - 32px);
    height: 76vh;
    margin: 0 16px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
