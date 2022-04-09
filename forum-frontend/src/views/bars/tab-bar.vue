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
import { ref, computed, watch } from "vue";

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
        // 页面当前标题
        const title = computed(() => {
            return pages[active.value];
        });
        // 监听传入的页面名称，激活对应Tabbar图标
        watch(
            () => props.pagesName,
            () => {
                active.value = pages.indexOf(props.pagesName);
            }
        );

        // 当前所在页面下标

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
