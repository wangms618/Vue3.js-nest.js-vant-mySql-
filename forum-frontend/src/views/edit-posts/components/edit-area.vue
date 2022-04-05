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
            <div class="edit-area__sort">
                <van-cell
                    is-link
                    value="选择话题"
                    :title="topicTitle"
                    @click="topicShow = true"
                />
                <van-action-sheet
                    v-model:show="topicShow"
                    :actions="TopicOptions"
                    cancel-text="取消"
                    close-on-click-action
                    @select="handleSelect"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { TopicOptions } from "../const";
import AddPictures from "@/components/add-pictures.vue";
export default {
    components: {
        AddPictures,
    },
    setup() {
        const topicTitle = ref("");
        const topicShow = ref(false);
        const titleValue = ref("");
        const contentValue = ref("");
        const handleSelect = item => {
            topicShow.value = false;
            console.log(item.name);
            topicTitle.value = item.name;
        };
        return {
            topicTitle,
            topicShow,
            titleValue,
            contentValue,
            handleSelect,
            TopicOptions,
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
        height: 80vh;
        /deep/.van-field__body {
            height: 30vh;
            textarea {
                height: 100%;
                font-size: 16px;
            }
        }
    }
}
</style>
