<template>
    <div class="card">
        <div class="card-header">
            <div class="card-header__img">
                <van-image
                    round
                    width="68"
                    height="68"
                    src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                />
            </div>
            <div class="card-header__name" v-if="isLogin">
                <span>来自外星的怪兽</span>
            </div>
            <div class="card-header__name" v-else @click="handleLogin">
                <span>登录/注册></span>
            </div>
        </div>
        <div class="card-content">
            <span>个性签名等等等等</span>
        </div>
        <div class="card-footer">
            <div class="card-footer__concerned">关注 0</div>
            <div class="card-footer__fans">粉丝 4</div>
        </div>
    </div>
</template>

<script>
import { useRouter } from "vue-router";
export default {
    props: {
        isLogin: {
            type: Boolean,
            default: false,
        },
    },
    setup() {
        const router = useRouter();
        const handleLogin = () => {
            router.push("/login");
        };
        return {
            handleLogin,
        };
    },
};
</script>

<style lang="less" scoped>
.card {
    width: 100vw;
    height: 185px;
    background-color: #25c689;
    box-sizing: border-box;
    padding: 20px;
    line-height: 20px;
    color: #fff;
    &-header {
        width: 100%;
        height: 80px;
        box-sizing: border-box;
        padding: 6px;
        display: flex;
        &__name {
            margin-left: 20px;
            font-size: 20px;
            display: flex;
            align-items: center;
        }
    }
    &-content {
        font-size: 16px;
        margin: 20px 0 16px 10px;
    }
    &-footer {
        margin-left: 10px;
        font-size: 18px;
        display: flex;
        width: 120px;
        justify-content: space-between;
    }
}
</style>
