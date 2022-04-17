<template>
    <div class="login">
        <div class="login-header">
            <div class="login-header__logo">
                <van-image width="60" height="60" :src="Logo" />
            </div>
            <div class="login-header__title">欢迎使用 冻梨聊</div>
        </div>
        <div class="login-body">
            <van-form @submit="onSubmit">
                <van-field
                    v-model="username"
                    name="username"
                    label="账号"
                    placeholder="请输入账号"
                    :rules="[{ required: true, message: '请填写账号' }]"
                    clearable
                />
                <van-field
                    v-model="password"
                    type="password"
                    name="password"
                    label="密码"
                    placeholder="请输入密码"
                    :rules="[{ required: true, message: '请填写密码' }]"
                    clearable
                />
                <div class="login-body__button">
                    <van-button
                        color="linear-gradient(90deg,#188A60,#A3E5C7)"
                        block
                        native-type="submit"
                    >
                        提交
                    </van-button>
                </div>
            </van-form>
            <div class="login-foot">
                <div class="login-foot__reset">忘记密码</div>
                <div class="login-foot__register" @click="handleRegister">
                    注册账号
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Logo from "../../common/images/logo.png";
import { ref } from "vue";
import * as service from "@/api/services";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import bcryptjs from "bcryptjs";
import { Toast } from "vant";
// import dayjs from "dayjs";
export default {
    setup() {
        const store = useStore();
        const router = useRouter();
        const username = ref("");
        const password = ref("");
        const onSubmit = async values => {
            const data = await service.login(username.value);
            if (data && bcryptjs.compareSync(values.password, data.salt)) {
                Toast.success("登录成功");
                const userInfo = await service.getUserInfo(data.id);
                store.dispatch("insertUserInfo", userInfo);
                const time = new Date().getTime();
                let token = {
                    id: data.id,
                    loginTime: time,
                };
                // 在localStoreage里面，存用户id和过期时间
                localStorage.setItem("userId", JSON.stringify(token));
                router.push("/community");
            } else {
                Toast.fail("账号或密码错误");
            }
        };

        const handleRegister = () => {
            router.push("/register");
        };

        return {
            username,
            password,
            onSubmit,
            Logo,
            handleRegister,
        };
    },
};
</script>

<style lang="less" scoped>
.login {
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    padding: 96px 32px;
    &-header {
        height: 100px;
        &__title {
            color: #101010 10000%;
            font-size: 22px;
            font-family: PingFangSC-bold;
            margin-top: 16px;
        }
    }
    &-body {
        height: 240px;
        margin-top: 32px;
        .van-field {
            padding: 8px 0;
            margin-bottom: 16px;
            /deep/&__label {
                width: 40px;
            }
        }
        &__button {
            overflow: hidden;
            .van-button {
                margin: 16px 0;
            }
        }
    }
    &-foot {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        &__reset {
            color: #c7c7cc;
        }
        &__register {
            color: #34c758;
        }
    }
}
</style>
