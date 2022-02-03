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
                    <van-field
                        v-model="username"
                        name="userName"
                        label="账号"
                        placeholder="账号"
                        :rules="[{ required: true, message: '请填写用户名' }]"
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
                        v-model="nickname"
                        name="nickName"
                        label="昵称"
                        placeholder="昵称"
                        :rules="[{ required: true, message: '请填写昵称' }]"
                    />
                    <van-field
                        v-model="birthday"
                        :disabled="datePickerState"
                        name="birthday"
                        label="出生日期"
                        placeholder="出生日期"
                        @click="datePickerState = true"
                    />
                    <van-button
                        color="linear-gradient(90deg,#188A60,#A3E5C7)"
                        block
                        type="primary"
                        native-type="submit"
                    >
                        提交
                    </van-button>
                </van-form>
            </div>
        </div>
        <div class="register-foot"></div>
        <van-action-sheet v-model:show="datePickerState" title="生日">
            <van-datetime-picker
                v-if="datePickerState"
                v-model="currentDate"
                type="date"
                title="选择年月日"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="handleDateConfirm"
            />
        </van-action-sheet>
    </div>
</template>

<script lang="ts">
import DefaultUserPicture from "@/common/images/upload-picture.png"
import dayjs from "dayjs"
import { ref, toRefs, reactive } from "vue"
export default {
    setup() {
        const userInfo = reactive({
            username: "",
            password: "",
            nickname: "",
            birthday: "",
        })

        const userPicture = ref("")
        const datePickerState = ref(false)
        const stepActive = ref(0)
        const currentDate = ref(new Date(2021, 0, 17))

        const handleDatePicker = () => {
            datePickerState.value = true
        }

        const afterRead = (file) => {
            // todo 此时可以自行将文件上传至服务器
            userPicture.value = file.content
        }

        const onSubmit = (values) => {
            console.log("submit", values)
        }

        const handleDateConfirm = () => {
            // @ts-ignore
            const date = dayjs(currentDate.value as Date)
            console.log(date)
            datePickerState.value = false
        }

        return {
            ...toRefs(userInfo),
            stepActive,
            userPicture,
            currentDate,
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            DefaultUserPicture,
            datePickerState,
            afterRead,
            onSubmit,
            handleDatePicker,
            handleDateConfirm,
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
        &__form {
            margin-top: 20px;
            .van-field {
                padding: 8px 0;
                margin-bottom: 16px;
                /deep/&__label {
                    width: 60px;
                }
            }
            .van-button {
                margin: 16px 0;
            }
        }
    }
}
</style>
