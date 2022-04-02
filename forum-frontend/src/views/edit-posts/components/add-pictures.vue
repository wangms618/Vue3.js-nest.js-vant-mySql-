<template>
    <div class="upload">
        <van-uploader
            v-model="fileList"
            preview-size="80"
            :after-read="afterRead"
        />
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    setup() {
        const fileList = ref([
            { url: "https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg" },
            { url: "https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg" },
            { url: "https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg" },
            { url: "https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg" },
            { url: "https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg" },
            { url: "https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg" },
            { url: "https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg" },
            { url: "https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg" },
            { url: "https://cdn.jsdelivr.net/npm/@vant/assets/leaf.jpeg" },
        ]);
        const afterRead = file => {
            // 此时可以自行将文件上传至服务器
            console.log(file);
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
