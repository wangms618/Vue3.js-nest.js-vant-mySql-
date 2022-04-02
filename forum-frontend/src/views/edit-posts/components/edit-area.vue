<template>
    <div class="edit-area">
        <div class="edit-area__title">
            <van-field
                label="标题"
                clearable
                label-width="40"
                v-model="titleValue"
                placeholder="请输入标题"
            />
        </div>
        <div class="edit-area__content">
            <van-field
                type="textarea"
                v-model="contentValue"
                placeholder="文章内容"
                :maxlength="240"
                show-word-limit
            />
            <AddPictures></AddPictures>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import AddPictures from "./add-pictures.vue";
export default {
    components: {
        AddPictures,
    },
    setup() {
        const titleValue = ref("");
        const contentValue = ref("");
        return {
            titleValue,
            contentValue,
        };
    },
};
</script>

<style lang="less" scoped>
.edit-area {
    margin: 0 8px 8px 8px;
    overflow: hidden;
    &__title {
        margin: 8px 0;
    }
    &__content {
        background: #fff;
        height: 60vh;
        /deep/.van-field__body {
            height: 20vh;
            textarea {
                height: 100%;
                font-size: 16px;
            }
        }
    }
}
</style>
