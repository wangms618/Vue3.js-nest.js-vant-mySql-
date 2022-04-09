<template>
    <div class="reply">
        <ReplyOption @handleChangeOption="handleChange"></ReplyOption>
        <div class="reply-title">
            <span>{{ title }}</span>
        </div>
        <ReplyList v-if="active == 1"></ReplyList>
        <PostsList v-if="active == 2"></PostsList>
        <ThumbsupList v-if="active == 3"></ThumbsupList>
    </div>
</template>

<script setup>
import { computed, ref } from "vue";
import ReplyOption from "./components/reply-option.vue";
import ReplyList from "./components/reply-list.vue";
import PostsList from "./components/posts-list.vue";
import ThumbsupList from "./components/thumbsup-list.vue";
const active = ref(1);
const title = computed(() =>
    active.value === 1
        ? "评论回复"
        : active.value === 2
        ? "文章回复"
        : "最近点赞"
);
const handleChange = value => {
    active.value = value;
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
