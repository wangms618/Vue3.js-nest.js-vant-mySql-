<template>
    <div>
        <!-- 顶部标签栏 -->
        <HeaderBar :title="title" @back="handlePageBack"></HeaderBar>
        <router-view></router-view>
        <!-- 底部标签栏 -->
        <TabBar @change-title="handleChangeTitle" :pagesName="title"></TabBar>
    </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { TabBar, HeaderBar } from "./bars";
import { ref, onMounted } from "vue";
import { TitleTextByType } from "./types";
import { Timeout } from "./const";
import * as services from "@/api/services";
import { Toast, Dialog } from "vant";
export default {
    components: {
        HeaderBar,
        TabBar,
    },
    setup() {
        const router = useRouter();
        const store = useStore();
        // 对应NavBar的标题
        const title = ref("冻梨社区");
        onMounted(async () => {
            const userId = JSON.parse(localStorage.getItem("userId"));
            // 说明登录过
            if (userId) {
                const nowTime = new Date().getTime();
                // 如果三天内未登录，就需要登录
                if (nowTime - userId.loginTime < Timeout) {
                    userId.loginTime = nowTime;
                    // 登录即更新一次
                    localStorage.setItem("userId", JSON.stringify(userId));
                    // 接口请求，去获取对应id的数据
                    const userInfo = await services.getUserInfo(userId.id);
                    Toast.success("已登录");
                    // 将用户数据放入vuex
                    store.dispatch("insertUserInfo", userInfo);
                } else {
                    localStorage.removeItem("userId");
                    Dialog.confirm({
                        message: "该账号登录状态已过期，是否重新登录",
                    })
                        .then(() => {
                            router.push("/login");
                        })
                        .catch(() => {
                            Toast("进入游客模式");
                        });
                }
            } else {
                // 说明从未登录过
                console.log("从未登录过");
            }
        });
        // 子组件Tabbar变动时，调用这个函数传给子组件Navbar标题
        const handleChangeTitle = value => {
            title.value = value;
        };
        // 返回上一次页面
        const handlePageBack = path => {
            const titleType = path.replace(/\//, "");
            title.value = TitleTextByType[titleType];
        };

        return {
            title,
            handleChangeTitle,
            handlePageBack,
            // handlePush,
        };
    },
};
</script>

<style></style>
