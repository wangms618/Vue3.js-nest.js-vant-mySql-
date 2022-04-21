<template>
    <div class="homepage">
        <UserCard :is-login="isLogin" :user-info="userInfo"></UserCard>
        <div class="info">
            <van-tabs v-model:active="active">
                <van-tab title="动态">
                    <UserInfo></UserInfo>
                </van-tab>
                <van-tab title="文章">
                    <PostsList v-if="listInfo.length" :posts-list="listInfo" />
                    <EmptyTip v-else></EmptyTip>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script setup>
import { useStore } from "vuex";

import UserCard from "./components/user-card.vue";
import UserInfo from "./components/user-info.vue";
import { PostsList } from "@/components/index";
import { EmptyTip } from "@/components/index";
import { ref, computed } from "vue";
const active = ref(0);
const listInfo = [];
const store = useStore();
const isLogin = computed(() => (store.state.userInfo !== "" ? true : false));
const userInfo = computed(() => store.state.userInfo);
</script>

<style lang="less" scoped>
/deep/.posts-list {
    padding: 10px;
}
</style>
