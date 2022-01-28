<template>
    <div class="topic community-page">
        <div class="topic-options">
            <div
                :class="`topic-option  ${
                    activeOption == index ? 'is-active' : ''
                }`"
                v-for="(option, index) in TopicOptions"
                :key="index"
                @click="handleClick(index)"
            >
                {{ option }}
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue"
import { TopicOptions } from "./const"
export default {
    name: "topic-page",
    props: {},
    setup() {
        const activeOption = ref(0)
        const handleClick = (index) => {
            activeOption.value = index
        }
        return {
            TopicOptions,
            activeOption,
            handleClick,
        }
    },
}
</script>

<style lang="less" scoped>
.topic-options {
    height: 30px;
    margin-top: 16px;
    display: flex;
    overflow-x: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
    .topic-option {
        min-width: 58px;
        height: 100%;
        margin-right: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f5f5f5;
        color: #615d64;
        border-radius: 16px;
    }
    .is-active {
        color: #fff;
        background-color: #25c689;
    }
}
</style>
