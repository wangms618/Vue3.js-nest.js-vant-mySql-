<template>
    <div class="container">
        <van-tabbar v-model="active" @click="$emit('hangleChangeTitle', title)">
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
import { ref, computed, reactive, watch } from "vue"

export default {
    prpos: {},
    setup() {
        const titles = new Map([
            [0, "社区热门"],
            [1, "话题分类"],
            [2, "我的回复"],
            [3, "我的主页"],
        ])
        const title = computed(()=>{
            return titles.get(active.value)
        })
        const active = ref(0)
        // watch(
        //     () => active.value,
        //     () => {
        //         console.log(titles.get(active.value))
        //     }
        // )
        return {
            active,
            title,
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
