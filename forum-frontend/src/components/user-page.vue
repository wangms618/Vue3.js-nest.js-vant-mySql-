<template>
    <HeaderBar title="用户详情"></HeaderBar>
    <div class="homepage">
        <div class="card">
            <div class="card-header">
                <div class="card-header__img">
                    <van-image
                        fit="cover"
                        round
                        width="68"
                        height="68"
                        :src="userInfo.url"
                    />
                </div>
                <div class="card-header__name">
                    <div class="nickname">{{ userInfo.nickname }}</div>
                    <span class="college">{{
                        getColleges(userInfo.colleges)
                    }}</span>
                    <span class="grade">{{ getGrade(userInfo.grade) }}</span>
                </div>
            </div>
            <div class="card-content">
                <span>这个用户比较懒，尚无个性签名</span>
            </div>
            <div class="card-footer">
                <div class="card-footer__concerned">关注 0</div>
                <div class="card-footer__fans">粉丝 4</div>
            </div>
        </div>
        <div class="info">
            <van-tabs v-model:active="active">
                <van-tab title="动态">
                    <UserInfo></UserInfo>
                </van-tab>
                <van-tab title="文章">
                    <!-- 传入用户文章 -->
                    <PostsList :posts-list="postsList" />
                    <!-- <EmptyTip v-else></EmptyTip> -->
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import { HeaderBar } from "@/views/bars";
import { useRoute } from "vue-router";
import { onBeforeMount, ref } from "vue";
import { getPostByUser } from "@/api/services";
import { getColleges, getGrade } from "@/hooks/useGradeAndColleges";
import UserInfo from "@/views/homepage/components/user-info.vue";
import { PostsList } from "@/components/index";
export default {
    components: {
        HeaderBar,
        UserInfo,
        PostsList,
    },
    setup() {
        const route = useRoute();
        const active = ref(0);
        const userInfo = JSON.parse(route.params.userInfo);
        console.log(userInfo);
        const postsList = ref([]);
        onBeforeMount(async () => {
            postsList.value = await getPostByUser(userInfo.id);
        });
        return {
            active,
            baseUrl: "http://wfish.asia/%E7%A9%BA%E5%A4%B4%E5%83%8F.png",
            userInfo,
            postsList,
            getColleges,
            getGrade,
        };
    },
};
</script>

<style lang="less" scoped>
/deep/.posts-list {
    padding: 10px;
}
</style>
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
