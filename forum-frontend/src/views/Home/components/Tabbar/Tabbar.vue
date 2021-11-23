<template>
    <van-tabbar v-model="active">
        <van-tabbar-item badge="3">
            <span>自定义</span>
            <template #icon="props">
                <img :src="props.active ? icon.active : icon.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item icon="search">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
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

<style></style>
