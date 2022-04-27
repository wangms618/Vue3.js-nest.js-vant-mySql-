<template>
    <div class="container">
        <SearchBar @search="handleSearch" :list-info="listInfo"></SearchBar>
        <van-tabs v-model:active="active" swipeable>
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
import { ref } from "vue";
import { useStore } from "vuex";
import { SearchBar } from "@/components";
import CommunityPage from "./community-page.vue";
import { PageInfo } from "./const";
import { searchPosts } from "@/api/services";
export default {
    name: "community",
    props: {},
    components: {
        SearchBar,
        CommunityPage,
    },
    setup() {
        const store = useStore();
        const value = ref("");
        const listInfo = ref([]);
        const active = ref(0);
        const handleSearch = async (val: string) => {
            // 更新vuex的数据
            store.dispatch("changeKeywords", val);
            // 将数据取到
            const data = await searchPosts(val);
            listInfo.value = data;
        };
        return {
            value,
            active,
            listInfo,
            PageInfo,
            handleSearch,
        };
    },
};
</script>

<style></style>
