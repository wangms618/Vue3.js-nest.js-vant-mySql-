<template>
    <div class="form">
        <van-form @submit="onSubmit" @failed="handleFailed">
            <van-field
                v-model="userAccount"
                name="userAccount"
                label="账号"
                placeholder="账号"
                :rules="[
                    {
                        required: true,
                        pattern: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,
                        message: '字母开头,允许5-16字节,允许字母数字下划线',
                    },
                ]"
            />

            <van-field
                v-model="password"
                type="password"
                name="passWord"
                label="密码"
                placeholder="以字母开头,长度在6~18之间"
                :rules="[
                    {
                        required: true,
                        pattern: /^[a-zA-Z]\w{5,17}$/,
                        message: '密码只能包含字母、数字和下划线',
                    },
                ]"
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
                :rules="[
                    {
                        pattern: /^[\u4e00-\u9fa5]{0,}$/,
                        message: '目前只支持中文名',
                    },
                ]"
            />
            <van-field
                v-model="phone"
                type="tel"
                name="phone"
                label="手机号"
                placeholder="可选填"
                :rules="[
                    {
                        pattern:
                            /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
                        message: '请填写正确格式的手机号',
                    },
                ]"
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
            <van-field name="userSex" label="性别">
                <template #input>
                    <van-radio-group v-model="userSex" direction="horizontal">
                        <van-radio name="男">男</van-radio>
                        <van-radio name="女">女</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <van-button
                color="linear-gradient(90deg,#188A60,#A3E5C7)"
                block
                type="primary"
                native-type="submit"
            >
                提交
            </van-button>
        </van-form>
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
import { ref, toRefs, reactive } from "vue";
import bcrypt from "bcryptjs";
import dayjs from "dayjs";
import { Collects, Grade } from "../const";
import { Toast } from "vant";
import {
    checkNickname,
    checkAccount,
    checkPhone,
} from "@/hooks/useCheckRepeat";
export default {
    props: {},
    setup(props, { emit }) {
        const userInfo = reactive({
            userAccount: "",
            password: "",
            username: "",
            nickname: "",
            birthday: "",
            college: "",
            grade: "",
            phone: "",
            userSex: "男",
        });

        const isCollect = ref(false);
        const showDatePicker = ref(false);
        const showPicker = ref(false);
        const currentDate = ref(new Date(2000, 0, 1));
        const handleCheckType = (value: boolean) => {
            if (value) {
                isCollect.value = true;
            } else {
                isCollect.value = false;
            }
            showPicker.value = true;
        };

        const handlePickerConfirm = (value: string) => {
            if (isCollect.value) {
                userInfo.college = value;
            } else {
                userInfo.grade = value;
            }

            showPicker.value = false;
        };

        const handleDatePicker = () => {
            showDatePicker.value = true;
        };

        const handleDateConfirm = () => {
            const date = currentDate.value.toString();
            userInfo.birthday = dayjs(date).format("YYYY/MM/DD");
            showDatePicker.value = false;
        };

        const onSubmit = async values => {
            const { passWord, grade } = values;
            const salt = bcrypt.genSaltSync(12);
            const hash = bcrypt.hashSync(passWord, salt);
            values.grade = Grade.indexOf(grade);
            values.passWord = hash;
            if (!(await checkAccount(values.userAccount))) {
                Toast.fail("该账号已存在！");
                return;
            } else if (!(await checkNickname(values.nickName))) {
                Toast.fail("该昵称已存在！");
                return;
            } else if (!(await checkPhone(values.phone))) {
                Toast.fail("该手机号已存在！");
                return;
            } else {
                emit("formConfirm", values);
            }
        };

        const handleFailed = error => {
            console.log(error);
            Toast.fail("请填写正确后再提交");
        };

        return {
            ...toRefs(userInfo),
            Grade,
            Collects,
            isCollect,
            showPicker,
            currentDate,
            minDate: new Date(1990, 0, 1),
            maxDate: new Date(2025, 10, 1),
            showDatePicker,
            onSubmit,
            handleFailed,
            handleCheckType,
            handleDatePicker,
            handleDateConfirm,
            handlePickerConfirm,
        };
    },
};
</script>

<style lang="less">
.form {
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
</style>
