<template>
    <div class="container">
        <van-tabbar v-model="active" @click="$emit('change-title', title)">
            <router-link class="link" to="/community">
                <van-tabbar-item class="iconfont icon-shequ1">
                    <span>社区</span>
                </van-tabbar-item>
            </router-link>
            <router-link class="link" to="/edit-posts">
                <van-tabbar-item class="iconfont icon-fenlei">
                    <span>发帖</span>
                </van-tabbar-item>
            </router-link>
            <router-link class="link" to="/reply">
                <van-tabbar-item class="iconfont icon-pinglun3">
                    <span>回复</span>
                </van-tabbar-item>
            </router-link>
            <router-link class="link" to="/homepage">
                <van-tabbar-item class="iconfont icon-My">
                    <span>我的</span>
                </van-tabbar-item>
            </router-link>
        </van-tabbar>
    </div>
</template>

<script lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
export default {
    props: {
        // 页面名称
        pagesName: {
            type: String,
            default: "冻梨社区",
        },
    },

    setup(props) {
        // 页面名称数组
        const pages = ["冻梨社区", "发布帖子", "我的回复", "我的主页"];
        const active = ref(0);
        const route = useRoute();
        // 页面当前标题
        const title = ref("冻梨社区");
        watch(
            () => route.path,
            val => {
                if (val == "/community") {
                    active.value = 0;
                    title.value = pages[0];
                }
                if (val == "/edit-posts") {
                    active.value = 1;
                    title.value = pages[1];
                }
                if (val == "/reply") {
                    active.value = 2;
                    title.value = pages[2];
                }
                if (val == "/homepage") {
                    active.value = 3;
                    title.value = pages[3];
                }
            },
            { immediate: true }
        );
        return {
            active,
            title,
        };
    },
};
</script>

<style lang="less" scoped>
.iconfont {
    font-size: 32px;
    span {
        font-size: 8px;
    }
}

.van-tabbar {
    display: flex;
    .link {
        flex: 1;
        .van-tabbar-item {
            margin-top: 14px;
            line-height: 10px;
        }
    }
}
</style>
