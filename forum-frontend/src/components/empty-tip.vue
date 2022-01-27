<template>
    <div class="empty-area">
        <img src="@/common/images/empty.png" :style="size" />
        <span :key="text" v-for="text in emptyTextList">{{ text }}</span>
    </div>
</template>

<script lang="ts">
// import emptyPicture from '';
import { computed, PropType} from 'vue';

type Size = { width: string; height: string };
export default {
    name: 'empty-tip',
    props: {
        emptyText: {
            type: String as PropType<string | string[]>,
            default: '暂无内容',
        },
        size: {
            type: Object as PropType<Size>,
            default: () => ({ width: '64px', height: '64px' }),
        },
    },
    setup(props) {

        const emptyTextList = computed(() => {
            return typeof props.emptyText === 'string' ? [props.emptyText] : props.emptyText;
        });
        return {
            // emptyPicture,
            emptyTextList,
        };
    },
};
</script>

<style lang="less" scoped>
.empty-area {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    img {
        width: 64px;
        height: 64px;
    }
    span {
        font-size: 12px;
        height: 18px;
        line-height: 18px;
        margin-top: 8px;
        color: #8e8e90;
    }
}
</style>
