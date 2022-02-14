<template>
    <div class="register">
        <div class="register-header">
            <div class="register-header__back">
                <van-icon name="arrow-left" />返回
            </div>
            <div class="register-header__title">注册账户</div>
        </div>
        <div class="register-body">
            <UploadImg @uploadImg="handleUpload" />
            <Form @formConfirm="handleConfirm" />
        </div>
        <div class="register-foot"></div>
    </div>
</template>

<script lang="ts">
import Form from "./components/form.vue";
import UploadImg from "./components/upload-img.vue";
import { ref } from "vue";
export default {
    components: {
        Form,
        UploadImg,
    },
    setup() {
        // 初始头像
        const baseImg = "http://wfish.asia/头像.png";
        const imgHost = ref("http://wfish.asia/");
        const handleConfirm = value => {
            const {
                birthday,
                college,
                grade,
                nickName,
                passWord,
                phone,
                userAccount,
                userSex,
                username,
            } = value;
            // 传入数据库
            // 页面跳转至login
        };
        const handleUpload = url => {
            imgHost.value = imgHost.value + url;
        };
        return {
            handleConfirm,
            handleUpload,
        };
    },
};
</script>

<style lang="less" scoped>
.register {
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    padding: 32px;
    &-header {
        &__back {
            position: relative;
            left: -20px;
            font-size: 14px;
            color: #4a4a4a;
        }
        &__title {
            color: #101010;
            font-size: 22px;
            font-family: PingFangSC-bold;
            margin-top: 20px;
        }
    }
    &-body {
        margin-top: 20px;
    }
}
</style>
