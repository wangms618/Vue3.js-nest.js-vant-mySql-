<template>
    <div class="container">
        <SearchBar @search="handleSearch" :list-info="listInfo"></SearchBar>
        <van-tabs active="active" animated swipeable>
            <van-tab title="热门" name="hot">
                <HotPage></HotPage>
            </van-tab>
            <van-tab title="关注" name="follow">
                <FollowPage></FollowPage>
            </van-tab>
            <van-tab title="话题" name="topic">
                <TopicPage></TopicPage>
            </van-tab>
            <van-tab title="本校" name="school">内容 4</van-tab>
        </van-tabs>
    </div>
</template>

<script lang="ts">
import { onMounted, ref, reactive, toRefs } from "vue"
// import _ from "lodash"
import { Toast } from "vant"
import * as service from "@/api/services"
import { SearchBar } from "@/components"
import HotPage from "./hot-page.vue"
import FollowPage from "./follow-page.vue"
import TopicPage from "./topic-page.vue"
export default {
    name: "community",
    props: {},
    components: {
        SearchBar,
        HotPage,
        FollowPage,
        TopicPage,
    },
    setup() {
        let state = reactive({
            data: {},
        })
        const value = ref("")
        const listInfo = ref([])
        const active = ref<string>("hot")
        const handleSearch = (val: string) => {
            // TODO 这里进行对应的关键词搜索功能，这里先实现传值过去
            if (!val) {
                listInfo.value = []
                return
            }
            listInfo.value = ["1", "2", "3", val]
        }
        // TODO 后续接上后端再写，现在先用假数据
        // onMounted(async () => {
        //     Toast.loading({ message: "加载中", forbidClick: true })
        //     const data = await service.getData()
        //     state.data = data
        //     Toast.clear()
        // })
        return {
            ...toRefs(state),
            value,
            active,
            listInfo,
            handleSearch,
        }
    },
}
</script>

<style></style>
