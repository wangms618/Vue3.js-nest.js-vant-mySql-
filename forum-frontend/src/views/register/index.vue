<template>
    <div class="register">
        <div class="register-header">
            <div class="register-header__back">
                <van-icon name="arrow-left" />返回
            </div>
            <van-steps :active="stepActive">
                <van-step>头像上传</van-step>
                <van-step>个人信息填写</van-step>
                <van-step>注册完成</van-step>
            </van-steps>
            <div class="register-header__title">注册账户</div>
        </div>
        <div class="register-body">
            <div class="register-body__upload">
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
            <div class="register-body__form">
                <van-form @submit="onSubmit">
                    <van-cell-group inset>
                        <van-field
                            v-model="username"
                            name="userName"
                            label="用户名"
                            placeholder="用户名"
                            :rules="[
                                { required: true, message: '请填写用户名' },
                            ]"
                        />
                        <van-field
                            v-model="password"
                            type="password"
                            name="passWord"
                            label="密码"
                            placeholder="密码"
                            :rules="[{ required: true, message: '请填写密码' }]"
                        />
                        <van-field
                            v-model="password"
                            type="nickName"
                            name="昵称"
                            label="昵称"
                            placeholder="昵称"
                            :rules="[{ required: true, message: '请填写昵称' }]"
                        />
                    </van-cell-group>
                    <div style="margin: 16px">
                        <van-button
                            round
                            block
                            type="primary"
                            native-type="submit"
                        >
                            提交
                        </van-button>
                    </div>
                </van-form>
            </div>
        </div>
        <div class="register-foot"></div>
        <van-datetime-picker
            v-model="currentDate"
            type="date"
            title="选择年月日"
            :min-date="minDate"
            :max-date="maxDate"
        />
    </div>
</template>

<script lang="ts">
import DefaultUserPicture from "@/common/images/upload-picture.png"
import { toByteArray } from "base64-js"
import { encode, decode } from "js-base64"
import { ref, computed } from "vue"
export default {
    setup() {
        const userPicture = ref("")
        const stepActive = ref(0)
        const currentDate = ref(new Date(2021, 0, 17))
        const afterRead = (file) => {
            // todo 此时可以自行将文件上传至服务器
            userPicture.value = file.content
        }

        const picture = computed(() => {
            return userPicture.value ? userPicture.value : DefaultUserPicture
        })

        return {
            userPicture,
            stepActive,
            DefaultUserPicture,
            afterRead,
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate,
        }
    },
}
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
        &__upload {
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
    }
}
</style>
