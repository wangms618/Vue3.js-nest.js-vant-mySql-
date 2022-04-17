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
            const user_id = store.state.userInfo.id;
            const imgList = await uploadFileList(fileList);
            const payload = {
                user_id,
                title,
                imgList,
                content,
                postsTypeId: 1,
            };
            const data = await createPosts(payload);
            if (data) {
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
