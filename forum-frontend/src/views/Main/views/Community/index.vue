<template>
    <div class="container">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <van-tabs v-model:active="active">
            <van-tab title="热门">{{ random }}</van-tab>
            <van-tab title="关注">
                <button type="button" @click="init">按钮</button>
            </van-tab>
            <van-tab title="话题">内容 3</van-tab>
            <van-tab title="本校">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue"
// import _ from "lodash"
import { getData } from "@/api/servies/Communtiy"
export default {
    setup() {
        const random = ref(0)
        const value = ref("")
        const active = ref(0)
        const init = async () => {
            const data = await getData()
            random.value = data.data
        }
        return {
            value,
            active,
            random,
            init,
        }
    },
}
</script>

<style></style>
