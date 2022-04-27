<template>
    <HeaderBar title="用户详情"></HeaderBar>
    <div class="homepage">
        <UserCard :is-login="isLogin" :user-info="userInfo"></UserCard>
        <div class="info">
            <van-tabs v-model:active="active">
                <van-tab title="动态">
                    <UserInfo></UserInfo>
                </van-tab>
                <van-tab title="文章">
                    <!-- 传入用户文章 -->
                    <PostsList :posts-list="listInfo" />
                    <!-- <EmptyTip v-else></EmptyTip> -->
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import { HeaderBar } from "@/views/bars";
export default {
    components: {
        HeaderBar,
    },
};
</script>

<style lang="less" scoped>
/deep/.posts-list {
    padding: 10px;
}
</style>
