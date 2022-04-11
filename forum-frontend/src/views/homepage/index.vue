<template>
    <div class="homepage">
        <UserCard></UserCard>
        <div class="info">
            <van-tabs v-model:active="active">
                <van-tab title="动态">
                    <UserInfo></UserInfo>
                </van-tab>
                <van-tab title="文章">
                    <PostsList v-if="listInfo.length" :posts-list="listInfo" />
                    <EmptyTip v-else></EmptyTip>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script setup>
import UserCard from "./components/user-card.vue";
import UserInfo from "./components/user-info.vue";
import { PostsList } from "@/components/index";
import { ref } from "vue";
const active = ref(0);

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
];
</script>

<style lang="less" scoped>
/deep/.posts-list {
    padding: 10px;
}
</style>
