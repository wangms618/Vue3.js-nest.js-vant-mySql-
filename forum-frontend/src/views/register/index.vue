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

<script>
import Form from "./components/form.vue";
import UploadImg from "./components/upload-img.vue";
import { createUrl } from "@/hooks/useCreateURL";
import { ref } from "vue";
import * as services from "@/api/services";
import { useRouter } from "vue-router";
import { Toast } from "vant";
export default {
    components: {
        Form,
        UploadImg,
    },
    setup() {
        const router = useRouter();
        // 默认头像url
        const baseUrl = ref(
            "http://wfish.asia/%E7%A9%BA%E5%A4%B4%E5%83%8F.png"
        );
        const handleConfirm = async value => {
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
            let payload = {
                user_name: username,
                user_account: userAccount,
                user_password: passWord,
                user_nickname: nickName,
                user_birthday: birthday,
                user_colleges: college,
                user_sex: userSex,
                user_phone: phone,
                user_grade: grade,
                user_imgUrl: baseUrl.value,
            };
            let data = await services.postRegister(payload);
            if (data) {
                Toast.success("创建账号成功,请登录", 2000);
                router.push("/login");
            }
            // 传入数据库
            // 页面跳转至login
        };
        const handleUpload = url => {
            baseUrl.value = createUrl(url);
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
