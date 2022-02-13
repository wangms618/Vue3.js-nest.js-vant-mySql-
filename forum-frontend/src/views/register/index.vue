<template>
    <div class="register">
        <div class="register-header">
            <div class="register-header__back">
                <van-icon name="arrow-left" />返回
            </div>
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
                        v-model="userAccount"
                        name="userAccount"
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
                        v-model="username"
                        name="username"
                        label="真实姓名"
                        placeholder="可选填"
                    />
                    <van-field
                        v-model="phone"
                        name="phone"
                        label="手机号"
                        placeholder="可选填"
                    />
                    <van-field
                        v-model="birthday"
                        :disabled="showDatePicker"
                        name="birthday"
                        label="出生日期"
                        placeholder="出生日期"
                        @click="showDatePicker = true"
                    />
                    <van-field
                        v-model="college"
                        name="college"
                        label="学校"
                        placeholder="学校"
                        @click="handleCheckType(true)"
                    />
                    <van-field
                        v-model="grade"
                        name="grade"
                        label="年级"
                        placeholder="年级"
                        @click="handleCheckType(false)"
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
        <van-action-sheet v-model:show="showDatePicker">
            <van-datetime-picker
                v-if="showDatePicker"
                v-model="currentDate"
                type="date"
                title="选择年月日"
                :min-date="minDate"
                :max-date="maxDate"
                @confirm="handleDateConfirm"
            />
        </van-action-sheet>
        <van-action-sheet v-model:show="showPicker">
            <van-picker
                v-if="showPicker"
                :title="isCollect ? '选择学校' : '选择年级'"
                :columns="isCollect ? Collects : Grade"
                @confirm="handlePickerConfirm"
                @cancel="showPicker = false"
            />
        </van-action-sheet>
    </div>
</template>

<script lang="ts">
import DefaultUserPicture from "@/common/images/upload-picture.png";
import dayjs from "dayjs";
import bcrypt from "bcryptjs";
// TODO 图片上传问题需要解决
import * as qiniu from "qiniu-js";
import * as services from "@/api/services";
import { ref, toRefs, reactive } from "vue";
import { Collects, Grade } from "./const";
import { random } from "lodash";
export default {
    setup() {
        const userInfo = reactive({
            userAccount: "",
            password: "",
            username: "",
            nickname: "",
            birthday: "",
            college: "",
            grade: "",
            phone: "",
        });
        const isCollect = ref(false);
        const userPicture = ref("");
        const showDatePicker = ref(false);
        const showPicker = ref(false);
        const stepActive = ref(0);
        const currentDate = ref(new Date(2000, 0, 1));
        const handleCheckType = (value: boolean) => {
            if (value) {
                isCollect.value = true;
            } else {
                isCollect.value = false;
            }
            showPicker.value = true;
        };

        const handleDatePicker = () => {
            showDatePicker.value = true;
        };

        const afterRead = async file => {
            uploadPicture(file.file);
            userPicture.value = file.content;
            //
        };

        const uploadPicture = async file => {
            const token = await services.getToken();
            const fname = random(111111111, 999999999) + file.name;
            const putExtra = {
                fname: file.name,
                params: {},
                mimeType: null,
            };
            const observable = qiniu.upload(file, fname, token, putExtra);
            const observer = {
                next(res) {
                    console.log(res);
                },
                error(err) {
                    console.log(err);
                },
                complete(res) {
                    console.log(res);
                },
            };
            const subscription = observable.subscribe(observer); // 上传开始
        };

        const onSubmit = values => {
            const { passWord, grade } = values;
            const salt = bcrypt.genSaltSync(12);
            const hash = bcrypt.hashSync(passWord, salt);
            values.grade = Grade.indexOf(grade);
            values.password = hash;
            console.log("submit", values);
            // TODO 传入数据库
            // TODO 缺少姓名，性别，手机号，自我介绍
        };

        const handleDateConfirm = () => {
            const date = currentDate.value.toString();
            userInfo.birthday = dayjs(date).format("YYYY/MM/DD");
            showDatePicker.value = false;
        };

        const handlePickerConfirm = (value: string) => {
            if (isCollect.value) {
                userInfo.college = value;
            } else {
                userInfo.grade = value;
            }

            showPicker.value = false;
        };

        return {
            ...toRefs(userInfo),
            Grade,
            Collects,
            isCollect,
            stepActive,
            userPicture,
            currentDate,
            minDate: new Date(1990, 0, 1),
            maxDate: new Date(2025, 10, 1),
            DefaultUserPicture,
            showPicker,
            showDatePicker,
            afterRead,
            onSubmit,
            handleCheckType,
            handleDatePicker,
            handleDateConfirm,
            handlePickerConfirm,
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
