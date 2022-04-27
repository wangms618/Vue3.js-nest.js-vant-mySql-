<template>
    <van-nav-bar
        v-if="isEditPosts"
        :title="title"
        left-text="返回"
        right-text="发布"
        left-arrow
        @click-left="handleBack"
        @click-right="handlePush"
    />
    <van-nav-bar
        v-else
        :title="title"
        left-text="返回"
        left-arrow
        @click-left="handleBack"
    />
</template>

<script lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { uploadFileList } from "@/hooks/useUploadFile";
import { createPosts } from "@/api/services";
import { useRouter } from "vue-router";
import { Toast } from "vant";
import { TopicOptions } from "@/views/const";
export default {
    props: {
        title: {
            type: String,
            default: "",
        },
    },
    setup(props, context) {
        const router = useRouter();
        const store = useStore();
        const route = useRoute();
        // 返回上一次页面
        const handleBack = () => {
            context.emit("back", history.state.back);
            history.back();
        };

        const handlePush = async () => {
            // todo 分类id需要做好
            const { title, content, topic, fileList } = store.state.posts;
            if (title === "") {
                Toast.fail("请填写标题");
                return;
            }
            if (content === "") {
                Toast.fail("请填写内容");
                return;
            }
            const user_id = store.state.userInfo.id;
            const user_nickname = store.state.userInfo.nickname;
            const imgList = await uploadFileList(fileList);
            const postsType = TopicOptions.indexOf(topic);
            const payload = {
                user_id,
                title,
                imgList,
                user_nickname,
                content,
                topic: postsType,
            };
            const data = await createPosts(payload);
            if (data) {
                store.dispatch("resetPosts");
                router.push({ name: "posts", params: { id: data.id } });
            } else {
                Toast.fail("文章创建失败");
            }
        };
        const isEditPosts = computed(() => {
            return route.path === "/edit-posts" ? true : false;
        });

        return {
            handleBack,
            handlePush,
            isEditPosts,
        };
    },
};
</script>

<style lang="less" scoped></style>
