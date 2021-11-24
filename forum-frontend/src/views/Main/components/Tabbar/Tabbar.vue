<template>
    <div class="container">
        <van-tabbar v-model="active">
            <router-link class="link" to="/Community">
                <van-tabbar-item class="iconfont icon-shequ1">
                    <span>社区</span>
                </van-tabbar-item>
            </router-link>
            <router-link class="link" to="/Sort">
                <van-tabbar-item class="iconfont icon-fenlei">
                    <span>分类</span>
                </van-tabbar-item>
            </router-link>
            <router-link class="link" to="/Reply">
                <van-tabbar-item class="iconfont icon-pinglun3">
                    <span>回复</span>
                </van-tabbar-item>
            </router-link>
            <router-link class="link" to="/Home">
                <van-tabbar-item class="iconfont icon-My">
                    <span>我的</span>
                </van-tabbar-item>
            </router-link>
        </van-tabbar>
    </div>
</template>

<script lang="ts">
import { ref } from "vue"

export default {
    setup() {
        const active = ref(0)
        const icon = {
            active: "https://img.yzcdn.cn/vant/user-active.png",
            inactive: "https://img.yzcdn.cn/vant/user-inactive.png",
        }
        return {
            icon,
            active,
        }
    },
}
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
