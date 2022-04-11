<template>
    <div class="homepage">
        <UserCard></UserCard>
        <div class="info">
            <van-tabs v-model:active="active">
                <van-tab title="动态">
                    <UserInfo></UserInfo>
                </van-tab>
                <van-tab title="文章">内容 2</van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script setup>
import UserCard from "./components/user-card.vue";
import UserInfo from "./components/user-info.vue";
import { ref } from "vue";
const active = ref(0);
</script>

<style lang="less" scoped></style>
