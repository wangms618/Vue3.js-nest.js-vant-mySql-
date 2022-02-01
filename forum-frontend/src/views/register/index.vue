<template>
    <div class="register">
        <div class="register-header">
            <div class="register-header__back">
                <van-icon name="arrow-left" />返回
            </div>
            <div class="register-header__title">注册账户</div>
        </div>
        <div class="register-body">
            <div class="user-picture">
                <van-image width="60" :src="picture" />
            </div>
            <van-uploader :after-read="afterRead">
                <van-button type="default" round>请选择你的头像</van-button>
                <p>仅限jpg.png等格式</p>
            </van-uploader>
        </div>
        <div class="register-foot"></div>
    </div>
</template>

<script lang="ts">
import DefaultUserPicture from "@/common/images/upload-picture.png"
import { ref, computed } from "vue"
export default {
    setup() {
        const userPicture = ref("")
        const afterRead = (file) => {
            // 此时可以自行将文件上传至服务器
            userPicture.value = file
        }

        const picture = computed(() => {
            return userPicture.value ? userPicture.value : DefaultUserPicture
        })

        return {
            afterRead,
            picture,
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
            margin-top: 40px;
        }
    }
    &-body {
        margin-top: 20px;
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
        .van-button{
            margin-bottom: 4px;
        }
        p{
            margin-left: 12px;
        }
    }
}
</style>
