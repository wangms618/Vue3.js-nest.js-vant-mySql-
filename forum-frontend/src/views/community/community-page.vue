<template>
    <div class="community-page">
        <van-sticky>
            <TopicBar
                v-if="pageInfo.name === 'topic'"
                @handleChangeTopic="handleChangeTopic"
            ></TopicBar>
        </van-sticky>
        <PostsList :posts-list="listInfo" ref="list"></PostsList>
        <EmptyTip v-if="false"></EmptyTip>
    </div>
</template>

<script lang="ts">
import { PostsList, EmptyTip } from "@/components";
import TopicBar from "./components/topic-bar.vue";
import { getPostsList } from "@/api/services";
import { onMounted, ref, computed, watch } from "vue";
export default {
    name: "community-page",
    components: {
        PostsList,
        EmptyTip,
        TopicBar,
    },
    props: {
        pageInfo: {
            type: Object,
            required: true,
        },
    },
    setup(props, context) {
        const list = ref(null);
        const listInfo = ref([]);
        const pageNum = ref(1);
        const pageSize = ref(20);
        const type = computed(() => props.pageInfo.id);
        const topic = ref(0);
        const handleScroll = event => {
            if (
                event.target.scrollTop + event.target.clientHeight ===
                event.target.scrollHeight
            ) {
                // 取第二次数据
            }
        };

        const handleChangeTopic = async index => {
            const data = await getPostsList(
                pageNum.value,
                pageSize.value,
                type.value,
                topic.value
            );
            listInfo.value = data.list;
            list.value.$el.parentNode.addEventListener("scroll", handleScroll);
            topic.value = index;
        };
        onMounted(async () => {
            const data = await getPostsList(
                pageNum.value,
                pageSize.value,
                type.value,
                topic.value
            );
            listInfo.value = data.list;
            list.value.$el.parentNode.addEventListener("scroll", handleScroll);
        });
        return {
            list,
            listInfo,
            handleChangeTopic,
        };
    },
};
</script>

<style lang="less">
.community-page {
    width: calc(100vw - 32px);
    height: 76vh;
    margin: 0 16px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
