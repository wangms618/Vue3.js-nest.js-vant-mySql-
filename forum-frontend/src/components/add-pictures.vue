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

<script>
import { computed, ref } from "vue";
export default {
    setup() {
        const fileList = ref([
            { url: "https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg" },
        ]);
        const afterRead = file => {
            // 此时可以自行将文件上传至服务器
            console.log(file, fileList);
        };

        return {
            fileList,
            afterRead,
        };
    },
};
</script>

<style lang="less" scoped>
.upload {
    padding: 11px;
}
</style>
