<template>
    <div class="reply-header">
        <div class="reply-option">
            <div
                :class="`reply-option__item ${active == 1 ? 'active' : ''}`"
                @click="handleChange(1)"
            >
                <div class="iconfont icon-pinglun3"></div>
                <span>回复</span>
            </div>
            <div
                :class="`reply-option__item ${active == 2 ? 'active' : ''}`"
                @click="handleChange(2)"
            >
                <div class="iconfont icon-wenzhang"></div>
                <span>文章</span>
            </div>
            <div
                :class="`reply-option__item ${active == 3 ? 'active' : ''}`"
                @click="handleChange(3)"
            >
                <div class="iconfont icon-dianzan"></div>
                <span>点赞</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";
const active = ref(1);
const emit = defineEmits(["handleChangeOption"]);
const handleChange = (value: number) => {
    emit("handleChangeOption", value);
    active.value = value;
};
</script>

<style lang="less" scoped>
.reply-header {
    height: 10vh;
    width: 100vw;
    margin-bottom: 6px;
    background: #fff;
    .reply-option {
        display: flex;
        height: 100%;
        &__item {
            flex: 1;
            margin: auto;
            text-align: center;
            .iconfont {
                font-size: 32px;
                margin-bottom: 6px;
            }
            span {
                display: block;
            }
        }
        .active {
            color: #2563f4;
        }
    }
}
</style>
