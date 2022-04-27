<template>
    <div class="community-page">
        <van-sticky>
            <TopicBar
                v-if="pageInfo.name === 'topic'"
                @handleChangeTopic="handleChangeTopic"
            ></TopicBar>
        </van-sticky>
        <PostsList :posts-list="listInfo" ref="list"></PostsList>
        <EmptyTip v-if="showEmpty"></EmptyTip>
    </div>
</template>

<script lang="ts">
import { Toast } from "vant";
import { PostsList, EmptyTip } from "@/components";
import TopicBar from "./components/topic-bar.vue";
import { getPostsList } from "@/api/services";
import { onMounted, ref, computed } from "vue";
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
        const pageSize = ref(10);
        const type = computed(() => props.pageInfo.id);
        const topic = ref(0);
        const scrollEnd = ref(true);
        const handleScroll = event => {
            if (
                event.target.scrollTop + event.target.clientHeight ===
                event.target.scrollHeight
            ) {
                Toast.loading({
                    message: "列表加载中...",
                    forbidClick: true,
                    duration: 100,
                });
                if (scrollEnd.value == false) {
                    Toast("已经到底啦");
                } else {
                    pageNum.value++;
                }
                pullPostsList();
            }
        };
        const showEmpty = computed(() =>
            listInfo.value.length == 0 ? true : false
        );
        const pullPostsList = async () => {
            const data = await getPostsList(
                pageNum.value,
                pageSize.value,
                type.value,
                topic.value
            );
            if (data.list.length == 0) {
                scrollEnd.value = false;
            } else {
                if (type.value == 2) {
                    if (
                        listInfo.value.length &&
                        listInfo.value[0].topic == topic.value
                    ) {
                        listInfo.value = [...listInfo.value, ...data.list];
                    } else {
                        listInfo.value = data.list;
                    }
                } else {
                    listInfo.value = [...listInfo.value, ...data.list];
                }
            }
        };

        const handleChangeTopic = async index => {
            topic.value = index;
            pullPostsList();
        };
        onMounted(async () => {
            list.value.$el.parentNode.addEventListener("scroll", handleScroll);
            pullPostsList();
        });
        return {
            list,
            listInfo,
            showEmpty,
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
