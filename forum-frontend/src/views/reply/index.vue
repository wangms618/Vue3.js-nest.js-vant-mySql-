<template>
    <div class="reply">
        <ReplyOption @handleChangeOption="handleChange"></ReplyOption>
        <ReplyList v-if="active == 1"></ReplyList>
        <PostsList v-if="active == 2"></PostsList>
        <ThumbsupList v-if="active == 3"></ThumbsupList>
    </div>
</template>

<script setup>
import { ref } from "vue";
import ReplyOption from "./components/reply-option.vue";
import ReplyList from "./components/reply-list.vue";
import PostsList from "./components/posts-list.vue";
import ThumbsupList from "./components/thumbsup-list.vue";
const active = ref(1);
const handleChange = value => {
    active.value = value;
};
</script>

<style lang="less" scoped>
.reply {
    width: 100vw;
    background: #f2f3f5;
}
</style>
