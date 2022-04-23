<template>
    <div class="posts-list">
        <div class="posts-list__item">
            <div class="posts-left">
                <van-image round width="60" height="60" :src="url" />
            </div>
            <div class="posts-right" @click="handleIntoPosts(posts.id)">
                <div class="posts-title">
                    {{ posts.title }}
                </div>
                <div class="posts-content">
                    {{ posts.content }}
                </div>
                <div class="posts-timer">
                    {{ timefromNow(posts.create_time) }}
                </div>
            </div>
            <div class="posts-delete" @click="handleDelete(posts.id)">
                <i class="iconfont icon-shanchu"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { timefromNow } from "@/hooks/useChangeTime";
import { Dialog, Toast } from "vant";
import { deletePosts } from "@/api/services";
export default {
    props: {
        posts: {
            type: Object,
        },
    },
    setup(props, { emit }) {
        const store = useStore();
        const router = useRouter();
        const url = store.state.userInfo.imgUrl;
        const handleIntoPosts = id => {
            router.push({ name: "posts", params: { id: id } });
        };

        const handleDelete = id => {
            Dialog.confirm({
                message: "是否删除此文章？",
            })
                .then(async () => {
                    // 接口调用
                    const data = await deletePosts(id);
                    if (data) {
                        emit("deletePosts");
                    }
                    Toast.success("已删除");
                })
                .catch(() => {
                    Toast("已取消");
                });
        };
        return {
            url,
            timefromNow,
            handleDelete,
            handleIntoPosts,
        };
    },
};
</script>

<style lang="less" scoped>
.posts-list {
    width: 100vw;
    background: #fff;

    &__item {
        height: 80px;
        display: flex;
        border-bottom: 1px solid rgb(231, 229, 229);
        .posts-left {
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .posts-right {
            flex: 1;
            height: 80px;
            padding: 10px 10px 10px 0px;
            box-sizing: border-box;

            .posts-title {
                font-size: 16px;
                color: #666666;
                margin-bottom: 10px;
                width: 200px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .posts-content {
                width: 250px;
                font-size: 16px;
                margin-bottom: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .posts-timer {
                color: rgb(195, 195, 195);
            }
        }
        .posts-delete {
            width: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            i {
                font-size: 24px;
            }
        }
    }
}
</style>
