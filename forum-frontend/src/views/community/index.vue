<template>
    <div class="container">
        <SearchBar @search="handleSearch" :list-info="listInfo"></SearchBar>
        <van-tabs active="active" animated swipeable>
            <van-tab
                v-for="pageInfo in PageInfo"
                :title="pageInfo.title"
                :name="pageInfo.name"
                :key="pageInfo.id"
            >
                <CommunityPage :page-info="pageInfo"></CommunityPage>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script lang="ts">
import { onMounted, ref, reactive, toRefs } from "vue"
// import _ from "lodash"
// import { Toast } from "vant"
// import * as service from "@/api/services"
import { SearchBar } from "@/components"
import CommunityPage from "./community-page.vue"
import { PageInfo } from "./const"
export default {
    name: "community",
    props: {},
    components: {
        SearchBar,
        CommunityPage,
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
        onMounted(async () => {
            // Toast.loading({ message: "加载中", forbidClick: true })
            // const data = await service.getData()
            // state.data = data
            // Toast.clear()
        })
        return {
            ...toRefs(state),
            value,
            active,
            listInfo,
            PageInfo,
            handleSearch,
        }
    },
}
</script>

<style></style>
