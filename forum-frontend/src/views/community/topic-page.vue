<template>
    <div class="topic community-page">
        <div class="topic-options">
            <div
                class="topic-option"
                v-for="(option, index) in TopicOptions"
                :key="index"
            >
                {{ option }}
            </div>
        </div>
    </div>
</template>

<script>
import { TopicOptions } from "./const"
export default {
    name: "topic-page",
    props: {},
    setup() {
        return {
            TopicOptions,
        }
    },
}
</script>

<style lang="less" scoped>
.topic-options {
    height: 30px;
    margin-top: 16px;
    padding: 0 16px;
    display: flex;
    overflow-x: scroll;
    .topic-option {
        width: 58px;
        height: 100%;
        margin-right: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f5f5f5;
        color: #615d64;
        border-radius: 16px;
    }
}
</style>
