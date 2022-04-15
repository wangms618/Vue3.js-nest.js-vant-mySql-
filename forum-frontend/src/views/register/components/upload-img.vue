<template>
    <div class="upload-img">
        <div class="user-picture">
            <van-image
                v-if="userPicture"
                width="85"
                height="85"
                :src="userPicture"
                round
                fit="cover"
            />
            <van-image v-else :width="45" :src="DefaultUserPicture" />
        </div>
        <van-uploader :after-read="afterRead" :max-count="1">
            <van-button
                type="default"
                color="linear-gradient(to right, #43e97b 0%, #38f9d7 100%)"
                block
                >请选择你的头像</van-button
            >
            <p>仅限jpg.png等格式</p>
        </van-uploader>
    </div>
</template>

<script lang="ts">
import { random } from "lodash";
import DefaultUserPicture from "@/common/images/upload-picture.png";
import * as qiniu from "qiniu-js";
import { ref } from "vue";
import { Toast } from "vant";
import * as services from "@/api/services";
export default {
    props: {},
    setup(props, context) {
        const userPicture = ref("");
        const afterRead = async file => {
            const token = await services.getToken();
            if (!token) {
                Toast.fail("获取token失败");
            }
            uploadPicture(token, file.file);

            userPicture.value = file.content;
        };

        const uploadPicture = async (token: string, file: any) => {
            const fname = random(111111111, 999999999) + file.name;
            context.emit("upload-img", fname);
            const putExtra = {
                fname: file.name,
                params: {},
                mimeType: null,
            };
            const observable = qiniu.upload(file, fname, token, putExtra);
            const observer = {
                error(err) {
                    console.log(err);
                },
            };
            observable.subscribe(observer); // 上传开始
        };

        return {
            userPicture,
            DefaultUserPicture,
            afterRead,
        };
    },
};
</script>

<style lang="less">
.upload-img {
    display: flex;
    align-items: center;
    .user-picture {
        width: 85px;
        height: 85px;
        margin-right: 40px;
        border: 1px solid #bbbbbb;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .van-button {
        margin-bottom: 4px;
        width: 180px;
        height: 32px;
        border-radius: 4px;
    }
    p {
        margin-left: 40px;
    }
}
</style>
