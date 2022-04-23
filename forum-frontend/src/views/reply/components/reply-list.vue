<template>
    <div class="reply-list">
        <div class="reply-list__item">
            <div class="list-left">
                <van-image
                    round
                    width="60"
                    height="60"
                    :src="reply.user_imgUrl"
                />
            </div>
            <div class="list-center" @click="handleIntoPosts(reply.posts.id)">
                <div class="list-posts">
                    <span>{{ reply.posts.title }}</span>
                </div>
                <div class="list-content">{{ reply.content }}</div>
                <div class="list-timer">
                    {{ timefromNow(reply.update_time) }}
                </div>
            </div>
            <div class="list-right">
                {{ reply.posts.content }}
            </div>
            <div class="list-delete" @click="handleDelete(reply.id)">
                <i class="iconfont icon-shanchu"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from "vue-router";
import { timefromNow } from "@/hooks/useChangeTime";
import { Dialog, Toast } from "vant";
import { deleteReply } from "@/api/services";
export default {
    props: {
        reply: {
            type: Object,
        },
    },
    setup(props, { emit }) {
        const router = useRouter();
        const handleIntoPosts = id => {
            router.push({ name: "posts", params: { id: id } });
        };

        const handleDelete = id => {
            Dialog.confirm({
                message: "是否删除此评论？",
            })
                .then(async () => {
                    // 接口调用
                    const data = await deleteReply(id);
                    if (data) {
                        emit("deleteReply");
                    }
                    Toast.success("已删除");
                })
                .catch(() => {
                    Toast("已取消");
                });
        };
        return {
            timefromNow,
            handleDelete,
            handleIntoPosts,
        };
    },
};
</script>

<style lang="less" scoped>
.reply-list {
    width: 100vw;
    background: #fff;
    &__item {
        height: 80px;
        display: flex;
        border-bottom: 1px solid rgb(231, 229, 229);
        .list-left {
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .list-center {
            flex: 1;
            height: 80px;
            padding: 10px 10px 10px 0px;
            box-sizing: border-box;

            .list-posts {
                font-size: 16px;
                color: #666666;
                margin-bottom: 10px;
                width: 150px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .list-content {
                width: 150px;
                font-size: 16px;
                margin-bottom: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .list-timer {
                color: rgb(167, 165, 165);
            }
        }
        .list-right {
            color: rgb(139, 132, 132);
            width: 60px;
            height: 60px;
            margin: 10px;
            box-sizing: border-box;
            line-height: 20px;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical; /*设置方向*/
            -webkit-line-clamp: 3; /*设置超过为省略号的行数*/
        }
        .list-delete {
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
