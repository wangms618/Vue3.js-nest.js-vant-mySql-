<template>
    <div class="card">
        <div
            class="iconfont icon-shezhixitongshezhigongnengshezhishuxing"
            v-if="showSetup"
            @click="handleSetup"
        ></div>
        <div class="card-header">
            <div class="card-header__img">
                <van-image
                    round
                    width="68"
                    height="68"
                    :src="userInfo.imgUrl || baseUrl"
                />
            </div>
            <div class="card-header__name" v-if="isLogin">
                <div class="nickname">{{ userInfo.nickname }}</div>
                <span class="college">{{
                    getColleges(userInfo.colleges)
                }}</span>
                <span class="grade">{{ getGrade(userInfo.grade) }}</span>
            </div>
            <div class="card-header__name" v-else @click="handleLogin">
                <span>登录/注册></span>
            </div>
        </div>
        <div class="card-content" v-if="isLogin">
            <span>{{ show }}</span>
        </div>
        <div class="card-footer" v-if="isLogin">
            <div class="card-footer__concerned">关注 0</div>
            <div class="card-footer__fans">粉丝 4</div>
        </div>
    </div>
</template>

<script>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { getColleges, getGrade } from "@/hooks/useGradeAndColleges";
export default {
    props: {
        isLogin: {
            type: Boolean,
            default: false,
        },
        userInfo: {
            type: Object,
        },
    },
    setup(props) {
        const store = useStore();
        const showSetup = computed(() =>
            store.state.userInfo !== "" ? true : false
        );
        const baseUrl = "http://wfish.asia/%E7%A9%BA%E5%A4%B4%E5%83%8F.png";
        const router = useRouter();

        const handleLogin = () => {
            router.push("/login");
        };

        const handleSetup = () => {
            router.push("/setup");
        };

        const show = computed(() =>
            props.userInfo.show
                ? props.userInfo.show
                : "这个人比较懒，没有个性签名"
        );
        return {
            show,
            baseUrl,
            showSetup,
            getColleges,
            getGrade,
            handleLogin,
            handleSetup,
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
    position: relative;
    .iconfont {
        position: absolute;
        font-size: 28px;
        right: 20px;
        top: 48px;
    }
    &-header {
        width: 100%;
        height: 80px;
        box-sizing: border-box;
        padding: 6px;
        display: flex;
        &__name {
            margin-left: 20px;
            font-size: 20px;
            .nickname {
                margin: 10px 0;
            }
            .college {
                font-size: 12px;
                margin-right: 10px;
            }
            .grade {
                font-size: 12px;
            }
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
