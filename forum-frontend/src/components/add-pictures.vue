<template>
    <div class="upload">
        <van-uploader
            max-count="9"
            v-model="fileList"
            preview-size="80"
            :after-read="afterRead"
            upload-text="上传照片"
        />
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";

// 图片列表
const fileList = ref([]);
// vuex仓库,store.state取到数据
const store = useStore();
const afterRead = file => {
    // todo 在这里将fileList代码更新到vuex仓库
    
};
</script>

<style lang="less" scoped>
.upload {
    padding: 11px;
}
</style>
