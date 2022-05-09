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
    </div>
</template>

<script lang="ts">
import { timeFormatting } from "@/hooks/useChangeTime";
export default {
    props: {
        replyList: {
            type: Object,
        },
    },

    setup() {
        const handleReply = () => {
            console.log("二级评论");
        };
        return {
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
}
</style>
