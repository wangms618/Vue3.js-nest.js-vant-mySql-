<template>
    <div class="container">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <van-tabs v-model:active="active">
            <van-tab title="热门">内容 1</van-tab>
            <van-tab title="关注">内容 2</van-tab>
            <van-tab title="话题">内容 3</van-tab>
            <van-tab title="本校">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script lang="ts">
import { ref } from "vue"

export default {
    setup() {
        const active = ref(0)
        const value = ref("")
        return {
            value,
            active,
        }
    },
}
</script>

<style></style>
