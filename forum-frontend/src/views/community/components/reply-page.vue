<template>
    <div class="comment-content">
        <UserBar
            :type="2"
            :img-height="32"
            :img-width="32"
            :user-info="userInfo"
        ></UserBar>
        <div class="comment-content__info">{{ content }}</div>
        <div class="comment-content__reply">
            <span class="timer">{{ timeFormatting(createTime) }}</span>
            <span class="reply">回复</span>
        </div>
    </div>
</template>

<script>
import { UserBar } from "../../bars/index";
import { ref, watch } from "vue";
import { timeFormatting } from "@/hooks/useChangeTime";
export default {
    props: {
        replyList: {
            type: Object,
        },
    },
    components: {
        UserBar,
    },

    setup(props) {
        const content = ref("");
        const userInfo = ref({});
        const createTime = ref("");
        watch(
            () => props.replyList,
            reply => {
                content.value = reply.content;
                createTime.value = reply.create_time;
                userInfo.value = {
                    nickname: reply.user_nickname,
                    url: reply.user_imgUrl,
                    createTime: reply.create_time,
                };
            }
        );
        return {
            content,
            userInfo,
            createTime,
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
        margin-bottom: 0;
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
