<template>
    <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="保存"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    />
    <div class="setup">
        <div class="setup-info">
            <div class="setup-info__item img">
                <span>头像</span>
                <van-image width="40" height="40" :src="userInfo.imgUrl" />
            </div>
            <div class="setup-info__item nickname">
                <span>昵称</span>
                <span>{{ userInfo.nickname }}<van-icon name="arrow" /></span>
            </div>
            <div class="setup-info__item name">
                <span>姓名</span>
                <span>{{ userInfo.username }}<van-icon name="arrow" /></span>
            </div>
            <div class="setup-info__item show">
                <span>个性签名</span>
                <span>{{ userInfo.show }}<van-icon name="arrow" /></span>
            </div>
            <div class="setup-info__item sex">
                <span>性别</span>
                <span>{{ userInfo.sex }}<van-icon name="arrow" /></span>
            </div>
            <div class="setup-info__item birthday">
                <span>生日</span>
                <span>{{ userInfo.birthday }}<van-icon name="arrow" /></span>
            </div>
            <div class="setup-info__item colleges">
                <span>大学</span>
                <span>{{ getColleges(userInfo.colleges)}}<van-icon name="arrow" /></span>
            </div>
            <div class="setup-info__item grade">
                <span>年级</span>
                <span>{{ getGrade(userInfo.grade) }}<van-icon name="arrow" /></span>
            </div>
            <div class="setup-info__item phone">
                <span>手机号</span>
                <span>{{ userInfo.phone }} <van-icon name="arrow" /></span>
            </div>
            <div class="setup-info__item password">
                <span>修改密码</span>
                <span><van-icon name="arrow" /></span>
            </div>
        </div>
        <van-button type="primary" size="large">退出登录</van-button>
    </div>
</template>

<script>
import { Toast } from "vant";
import { useStore } from "vuex";
import { getColleges, getGrade } from "@/hooks/useGradeAndColleges";
export default {
    setup() {
        const store = useStore();
        const userInfo = store.state.userInfo;
        const onClickLeft = () => history.back();
        const onClickRight = () => Toast("按钮");
        return {
            userInfo,
            getColleges,
            getGrade,
            onClickLeft,
            onClickRight,
        };
    },
};
</script>

<style lang="less" scoped>
.setup {
    width: 100vw;
    height: 85vh;
    background-color: #f0f0f0;
    box-sizing: border-box;
    padding: 10px;
    &-info {
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
        box-sizing: border-box;
        padding: 10px;
        margin-bottom: 20px;
        &__item {
            box-sizing: border-box;
            height: 60px;
            border-bottom: 1px solid #d1d1d1;
            display: flex;
            align-items: center;
            font-size: 16px;
            padding-left: 10px;
            justify-content: space-between;
        }
        .password {
            border-bottom: none;
        }
    }
}
</style>
