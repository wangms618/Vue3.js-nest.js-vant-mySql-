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
import { TabBar, HeaderBar } from "./bars";
import { ref, onMounted } from "vue";
import { TitleTextByType } from "./types";
import { Timeout } from "./const";
import * as services from "@/api/services";
export default {
    components: {
        HeaderBar,
        TabBar,
    },
    setup() {
        // 对应NavBar的标题
        let title = ref("冻梨社区");
        onMounted(async () => {
            // let userId = JSON.parse(localStorage.getItem("userId"));
            // let nowTime = new Date().getTime();

            // if (nowTime - userId.timeout < Timeout) {
            // 接口请求，去获取对应id的数据
            // let id = userId.id;
            // let userInfo = await services.getUserInfo(id);
            // console.log(userInfo.data.list[0]);
            // } else {
            //     // 删除local数据源的时间
            //     localStorage.removeItem("userId");
            // }
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
