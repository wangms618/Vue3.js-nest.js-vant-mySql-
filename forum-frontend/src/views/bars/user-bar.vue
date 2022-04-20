<template>
    <div class="author">
        <div class="author-img">
            <van-image round :width="imgWidth" :height="imgHeight" :src="url" />
        </div>
        <div class="author-info">
            <div
                :class="`${
                    showState
                        ? 'author-info__nickname'
                        : 'responder-info__nickname'
                }`"
            >
                {{ nickname }}
            </div>
            <div class="author-info__time" v-if="showState == 1">
                {{ timeFormatting(createTime) }}
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, watch, ref } from "vue";
import { timeFormatting } from "@/hooks/useChangeTime";
export default {
    props: {
        imgWidth: {
            type: Number,
            default: 48,
        },
        imgHeight: {
            type: Number,
            default: 48,
        },
        type: {
            type: Number,
            default: 1,
        },
        userInfo: {
            type: Object,
        },
    },

    setup(props) {
        const url = ref("");
        const nickname = ref("");
        const colleges = ref("");
        const grade = ref("");
        const createTime = ref("");
        const showState = computed(() => (props.type == 1 ? true : false));
        watch(
            () => props.userInfo,
            val => {
                url.value = val.url;
                nickname.value = val.nickname;
                colleges.value = val.colleges;
                grade.value = val.grade;
                createTime.value = val.createTime;
            }
        );
        return {
            url,
            grade,
            colleges,
            nickname,
            createTime,
            showState,
            timeFormatting,
        };
    },
};
</script>

<style lang="less" scoped>
.author {
    box-sizing: border-box;
    margin-bottom: 10px;
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
</style>
