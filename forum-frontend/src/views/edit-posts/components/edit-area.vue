<template>
    <div class="edit-area">
        <van-field
            type="textarea"
            v-model="value"
            placeholder="在这里书写文章"
            :maxlength="240"
            show-word-limit
        />
    </div>
</template>

<script>
import { ref } from "vue";

export default {
    setup() {
        const value = ref("");
        return { value };
    },
};
</script>

<style lang="less" scoped>
.edit-area {
    width: 100vw;
    height: 24vh;
    /deep/.van-field__body {
        height: 20vh;
        textarea{
            height: 100%;
            font-size: 16px;
        }
    }
}
</style>
