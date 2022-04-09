<template>
    <div class="reply">
        <div class="reply-header">
            <ReplyOption></ReplyOption>
        </div>
        <div class="reply-content"></div>
    </div>
</template>

<script setup>
import ReplyOption from "./components/reply-option.vue";
</script>

<style lang="less" scoped>
.reply {
    width: 100vw;
    background: #f2f3f5;
    &-header {
        top: 0;
        height: 10vh;
        width: 100vw;
        margin-bottom: 20px;
        background: #fff;
    }
}
</style>
