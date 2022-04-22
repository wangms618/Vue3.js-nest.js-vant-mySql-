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
            <div class="setup-info__item nickname" @click="handleChange(1)">
                <span>昵称</span>
                <span>{{ userInfo.nickname }}<van-icon name="arrow" /></span>
            </div>
            <div class="setup-info__item name" @click="handleChange(2)">
                <span>姓名</span>
                <span>{{ userInfo.username }}<van-icon name="arrow" /></span>
            </div>
            <div class="setup-info__item show" @click="handleChange(3)">
                <span>个性签名</span>
                <span>{{ userInfo.show }}<van-icon name="arrow" /></span>
            </div>
            <div class="setup-info__item sex" @click="handleChange(4)">
                <span>性别</span>
                <span>{{ userInfo.sex }}<van-icon name="arrow" /></span>
            </div>
            <div class="setup-info__item birthday" @click="handleChange(5)">
                <span>生日</span>
                <span>{{ userInfo.birthday }}<van-icon name="arrow" /></span>
            </div>
            <div class="setup-info__item colleges" @click="handleChange(6)">
                <span>大学</span>
                <span
                    >{{ getColleges(userInfo.colleges) }}<van-icon name="arrow"
                /></span>
            </div>
            <div class="setup-info__item grade" @click="handleChange(7)">
                <span>年级</span>
                <span
                    >{{ getGrade(userInfo.grade) }}<van-icon name="arrow"
                /></span>
            </div>
            <div class="setup-info__item phone" @click="handleChange(8)">
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

    <van-dialog v-model:show="showDialog" show-cancel-button>
        <van-field
            v-model="fieldValue"
            :label-width="60"
            :label="dialogLabel"
            :placeholder="`请输入新${dialogLabel}`"
        />
    </van-dialog>
</template>

<script>
import { Toast } from "vant";
import { useStore } from "vuex";
import { getColleges, getGrade } from "@/hooks/useGradeAndColleges";
import { ref, reactive, watch } from "vue";
import { Dialog } from "vant";
export default {
    components: {
        [Dialog.Component.name]: Dialog.Component,
    },
    setup() {
        const store = useStore();
        const userInfo = reactive(store.state.userInfo);
        const fieldValue = ref("");
        const dialogLabel = ref("");
        const showDialog = ref(false);
        const handleChange = index => {
            switch (index) {
                case 1:
                    handleChangeDialog("昵称", index);
                    break;

                case 2:
                    handleChangeDialog("姓名", index);
                    break;

                case 3:
                    handleChangeDialog("个性签名", index);
                    break;

                case 4:
                    handleChangeDialog("性别", index);
                    break;

                case 5:
                    handleChangeDialog("生日", index);
                    break;
                case 8:
                    handleChangeDialog("手机号", index);
                    break;
            }
        };
        const handleChangeDialog = (label, index) => {
            showDialog.value = true;
            dialogLabel.value = label;
            switch (index) {
                case 1:
                    fieldValue.value = userInfo.nickname;
                    break;
                case 2:
                    fieldValue.value = userInfo.username;
                    break;
                case 3:
                    fieldValue.value = userInfo.show;
                    break;
                case 4:
                    fieldValue.value = userInfo.sex;
                    break;
                case 5:
                    fieldValue.value = userInfo.birthday;
                    break;
                case 8:
                    fieldValue.value = userInfo.phone;
                    break;
            }
        };
        const onClickLeft = () => history.back();
        const onClickRight = () => Toast("保存");
        watch(
            () => fieldValue.value,
            val => {
                if (dialogLabel.value == "昵称") {
                    userInfo.nickname = val;
                }
                if (dialogLabel.value == "姓名") {
                    userInfo.username = val;
                }
                if (dialogLabel.value == "个性签名") {
                    userInfo.show = val;
                }
                if (dialogLabel.value == "性别") {
                    userInfo.sex = val;
                }
                if (dialogLabel.value == "生日") {
                    userInfo.birthday = val;
                }
                if (dialogLabel.value == "手机号") {
                    userInfo.phone = val;
                }
            }
        );
        return {
            showDialog,
            dialogLabel,
            userInfo,
            fieldValue,
            getColleges,
            getGrade,
            onClickLeft,
            onClickRight,
            handleChange,
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
