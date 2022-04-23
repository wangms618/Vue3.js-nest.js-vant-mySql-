<template>
    <div class="reply">
        <ReplyOption @handleChangeOption="handleChange"></ReplyOption>
        <div class="reply-title">
            <span>{{ title }}</span>
        </div>
        <template v-if="active == 1">
            <ReplyList
                v-for="item in replyList"
                :key="item.id"
                :reply="item"
                @deleteReply="handleDeleteReply"
            />
        </template>
        <template v-if="active == 2">
            <PostsList
                v-for="item in postsList"
                :key="item.id"
                :posts="item"
                @deletePosts="handleDeletePosts"
            />
        </template>

        <ThumbsupList v-if="active == 3"></ThumbsupList>
    </div>
</template>

<script setup>
import { computed, ref, onBeforeMount } from "vue";
import ReplyOption from "./components/reply-option.vue";
import ReplyList from "./components/reply-list.vue";
import PostsList from "./components/posts-list.vue";
import ThumbsupList from "./components/thumbsup-list.vue";
import { getReplysById, getPostByUser } from "@/api/services";
import { useStore } from "vuex";

const store = useStore();

const replyList = ref([]);
const postsList = ref(store.state.postsList);
onBeforeMount(async () => {
    replyList.value = await getReplysById(store.state.userInfo.id);
});

const active = ref(1);

const title = computed(() =>
    active.value === 1
        ? "我的评论"
        : active.value === 2
        ? "文章回复"
        : "最近点赞"
);

const handleChange = value => {
    active.value = value;
};

const handleDeleteReply = async () => {
    replyList.value = await getReplysById(store.state.userInfo.id);
};

const handleDeletePosts = async () => {
    const postsInfo = await getPostByUser(store.state.userInfo.id);
    store.dispatch("insertPostsInfo", postsInfo);
    postsList.value = postsInfo;
};
</script>

<style lang="less" scoped>
.reply {
    width: 100vw;
    background: #f2f3f5;
    .reply-title {
        font-size: 16px;
        background: #fff;
        height: 40px;
        margin-bottom: 1px;
        display: flex;
        align-items: center;
        color: rgba(153, 153, 153, 80);
        span {
            margin-left: 12px;
        }
    }
}
</style>
