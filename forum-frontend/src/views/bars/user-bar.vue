<template>
    <div class="author">
        <div class="author-img">
            <van-image
                round
                :width="imgWidth"
                :height="imgHeight"
                src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
            />
        </div>
        <div class="author-info" v-if="showState">
            <div class="author-info__nickname">叫我大哥</div>
            <div class="author-info__time">1小时前 东华理工大学</div>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
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
    },

    setup(props) {
        const showState = computed(() => (props.type == 1 ? true : false));
        return {
            showState,
        };
    },
};
</script>

<style lang="less" scoped>
.author {
    box-sizing: border-box;
    padding: 0 4px;
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
        &__time {
            color: #666970;
        }
    }
}
</style>
