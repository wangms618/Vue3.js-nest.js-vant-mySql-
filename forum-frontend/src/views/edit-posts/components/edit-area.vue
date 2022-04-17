<template>
    <div class="edit-area">
        <div class="edit-area__title">
            <van-field
                label="标题"
                clearable
                label-width="40"
                v-model="title"
                placeholder="请输入标题"
            />
        </div>
        <div class="edit-area__content">
            <van-field
                type="textarea"
                v-model="content"
                placeholder="文章内容"
                :maxlength="240"
                show-word-limit
            />
            <AddPictures
                @handleChangeFileList="handleChangeFileList"
            ></AddPictures>
            <div class="edit-area__sort">
                <van-cell
                    is-link
                    value="选择话题"
                    :title="topic"
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
import { ref, watch } from "vue";
import { TopicOptions } from "../const";
import AddPictures from "@/components/add-pictures.vue";
import { useStore } from "vuex";
export default {
    components: {
        AddPictures,
    },
    setup() {
        const store = useStore();
        const posts = store.state.posts;
        const topic = ref(posts.topic);
        const topicShow = ref(false);
        const title = ref(posts.title);
        const content = ref(posts.content);
        const handleSelect = item => {
            topicShow.value = false;
            topic.value = item.name;
        };
        const handleChangeFileList = list => {
            store.dispatch("changeFileList", list);
        };

        watch([topic, title, content], ([newTopic, newTitle, newContent]) => {
            store.dispatch("changeTopic", newTopic);
            store.dispatch("changeTitle", newTitle);
            store.dispatch("changeContent", newContent);
        });

        return {
            topic,
            title,
            content,
            topicShow,
            TopicOptions,
            handleSelect,
            handleChangeFileList,
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
