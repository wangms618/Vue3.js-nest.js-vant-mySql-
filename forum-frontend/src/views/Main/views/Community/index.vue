<template>
    <div class="container">
        <van-search v-model="value" placeholder="请输入搜索关键词" />
        <van-tabs v-model:active="active">
            <van-tab title="热门">{{ data.title }}{{ data.context }}</van-tab>
            <van-tab title="关注">222 </van-tab>
            <van-tab title="话题">内容 3</van-tab>
            <van-tab title="本校">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script lang="ts">
import { onMounted, ref, reactive, toRefs } from "vue"
// import _ from "lodash"
import { Toast } from "vant"
import { getData } from "@/api/services/Community"
export default {
    setup() {
        // debugger
        let state = reactive({
            data: {},
        })
        const value = ref("")
        const active = ref(0)
        onMounted(async () => {
            Toast.loading({ message: "加载中", forbidClick: true })
            const { data } = await getData()
            state.data = data
            Toast.clear()
        })
        // onMounted(async () => {
        //     Toast.loading({ message: "加载中", forbidClick: true })
        //     const { data } = await getCart({ pageNumber: 1 })
        //     console.log(data)
        //     state.list = data
        //     init()
        // })
        // const init = async () => {
        //     Toast.loading({ message: "加载中...", forbidClick: true })
        //     const { data } = await getCart({ pageNumber: 1 })
        //     state.list = data
        //     state.result = data.map((item) => item.cartItemId)
        //     Toast.clear()
        // }
        return {
            value,
            active,
            ...toRefs(state),
        }
    },
}
</script>

<style></style>
