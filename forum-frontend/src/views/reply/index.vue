<template>
    <div class="reply">
        <div class="reply-header">
            <ReplyOption></ReplyOption>
        </div>
        <ReplyList></ReplyList>
    </div>
</template>

<script setup>
import ReplyOption from "./components/reply-option.vue";
import ReplyList from "./components/reply-list.vue";
</script>

<style lang="less" scoped>
.reply {
    width: 100vw;
    background: #f2f3f5;
    &-header {
        height: 10vh;
        width: 100vw;
        margin-bottom: 6px;
        background: #fff;
    }
}
</style>
