<template>
    <router-view />
</template>
<script>
import { onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Timeout } from "./views/const";
import * as services from "@/api/services";
import { Toast, Dialog } from "vant";
export default {
    setup() {
        const router = useRouter();
        const store = useStore();
        onMounted(async () => {
            const userId = JSON.parse(localStorage.getItem("userId"));
            // 说明登录过
            if (userId) {
                if (store.state.userInfo !== "") return;
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
    },
};
</script>

<style lang="less"></style>
