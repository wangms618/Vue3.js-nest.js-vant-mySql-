<template>
    <div class="comment-content">
        <div class="author">
            <div class="author-img">
                <van-image
                    round
                    :width="32"
                    :height="32"
                    :src="replyList.user_imgUrl"
                />
            </div>
            <div class="author-info">
                <div class="responder-info__nickname">
                    {{ replyList.user_nickname }}
                </div>
            </div>
        </div>
        <div class="comment-content__info">{{ replyList.content }}</div>
        <div class="comment-content__reply">
            <span class="timer">{{
                timeFormatting(replyList.createTime)
            }}</span>
            <span class="reply" @click="handleReply">回复</span>
        </div>
        <div class="comment-content__comments" v-if="haveComments">
            <div class="comments" v-for="item in comments" :key="item.id">
                <div class="comments-second" v-if="item.isSecond">
                    <span class="nickname">{{ item.user_nickname }}：</span>
                    <span @click="handleReplys(item)">{{ item.content }}</span>
                </div>
                <div class="comments-second__down" v-else>
                    <span class="nickname">{{ item.user_nickname }}</span>
                    <span> 回复 </span>
                    <span class="nickname">{{ item.replyByNickname }}：</span>
                    <span @click="handleReplys(item)">{{ item.content }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { reactive, watch } from "vue";
import { timeFormatting } from "@/hooks/useChangeTime";
import { filterSecondReply } from "@/hooks/useAbstractionReply";
// 需要做一个不同评论的展示
export default {
    props: {
        replyList: {
            type: Object,
        },
    },

    setup(props, { emit }) {
        const handleReply = () => {
            // id为当前评论id
            // rootCommentId用于登记来自哪条顶级评论
            // toComment用于记录来自哪条评论
            // 上传二级评论
            // 如果原评论rootCommentId, toCommentId都为空说明当前评论是二级评论
            // 然后当前参数设置rootCommentId，toCommentId都为前评论的id，上传
            // 上传三级评论
            // 如果原评论有rootCommentId, toCommentId这两个值且相等，说明是原评论是二级评论
            // 设置rootCommentId为原评论rootCommentId，toCommentId为原评论的id
            // 如果不相等，说明是二级以后评论的评论
            // rootCommentId设置为rootCommentId,toCommentId为原评论的id

            const { id, rootCommentId, toCommentId } = props.replyList;
            // 如果rootCommentId和toCommentId都是null，说明目前回复的是一级评论
            if (rootCommentId === null || toCommentId === null) {
                // 传两个id过去
                emit("handleReplyAgain", id, id);
            } else {
                emit("handleReplyAgain", rootCommentId, id);
            }
        };

        const handleReplys = item => {
            // 用户评论多级评论，那么toCommentId应该是当前评论的id,rootCommentId是一级评论的id
            const { id, rootCommentId } = item;
            emit("handleReplyAgain", rootCommentId, id);
        };

        const haveComments =
            props.replyList.comments.length == 0 ? false : true;
        let comments = reactive(props.replyList.comments);
        // 需要对comments做一个处理，给他设置一个字段判断它是否是来自其他评论，如果来自其他评论，显示谁回复谁，怎么样
        filterSecondReply(comments);
        // watch(
        //     () => props.replyList.comments,
        //     () => {
        //         comments = reactive(props.replyList.comments);
        //         filterSecondReply(comments);
        //     }
        // );
        return {
            comments,
            haveComments,
            handleReply,
            handleReplys,
            timeFormatting,
        };
    },
};
</script>

<style lang="less" scoped>
.comment-content {
    box-sizing: border-box;
    padding: 10px 0;
    border-bottom: 1px solid rgb(244, 241, 241);
    .author {
        box-sizing: border-box;
        display: flex;
        &-info {
            margin-left: 10px;
            line-height: 24px;
            &__nickname {
                height: 24px;
                font-size: 16px;
                letter-spacing: 6px;
                font-family: SourceHanSansSC-bold;
                font-weight: 600;
            }
            .responder-info__nickname {
                font-weight: bold;
                line-height: 20px;
                height: 20px;
            }
            &__time {
                color: #666970;
            }
        }
    }
    &__info {
        line-height: 24px;
        font-size: 16px;
        padding-left: 42px;
        padding-right: 32px;
        margin-bottom: 10px;
    }
    &__reply {
        padding-left: 42px;
        .timer {
            color: rgb(200, 198, 196);
            margin-right: 20px;
        }
    }
    &__comments {
        margin-left: 42px;
        margin-top: 10px;
        background-color: #f0f0f0;
        padding: 10px;
        .comments {
            line-height: 28px;
            font-size: 12px;
        }
        .nickname {
            color: #1989fa;
            font-weight: bold;
        }
    }
}
</style>
