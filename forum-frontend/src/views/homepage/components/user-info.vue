<template>
    <div class="info">
        <div class="info-dynamic">
            <div class="info-dynamic__item">
                <DynamicItem></DynamicItem>
            </div>
        </div>
        <div class="user-posts"></div>
    </div>
</template>

<script>
import DynamicItem from "./dynamic-item.vue";
import { ref } from "vue";
export default {
    components: {
        DynamicItem,
    },
    // 给dynamicItem传输文章
    setup() {
        const postList = ref([]);
        return {
            postList,
        };
    },
};
</script>

<style lang="less"></style>
