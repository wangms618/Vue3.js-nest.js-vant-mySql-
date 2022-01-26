<template>
    <div class="container">
        <van-search v-model="value" placeholder="请输入搜索关键词" />

        <van-tabs active="active" animated swipeable>
            <van-tab dot title="热门" name="hot"
                >{{ data.title }}{{ data.context }}</van-tab
            >
            <van-tab title="关注" name="follow">222 </van-tab>
            <van-tab title="话题" name="topic">内容 3</van-tab>
            <van-tab title="本校" name="school">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script lang="ts">
import { onMounted, ref, reactive, toRefs } from "vue"
// import _ from "lodash"
import { Toast } from "vant"
// @ts-ignore
import * as service from "@/api/services"
export default {
    setup() {
        // debugger
        let state = reactive({
            data: {},
        })
        const value = ref("")
        const active = ref<string>("hot")
        onMounted(async () => {
            Toast.loading({ message: "加载中", forbidClick: true })
            const data = await service.getData()
            state.data = data
            Toast.clear()
        })
        return {
            value,
            active,
            ...toRefs(state),
        }
    },
}
</script>

<style></style>
