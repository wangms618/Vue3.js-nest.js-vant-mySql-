<template>
    <div class="posts">
        <HeaderBar title="文章详情"></HeaderBar>
        <div class="posts-detail">
            <div class="title">{{ posts.title }}</div>
            <UserBar :user-info="userInfo"></UserBar>

            <div class="content">
                {{ posts.content }}
            </div>
            <div class="picture" v-if="images">
                <van-image
                    v-if="showPictureOne"
                    class="picture-one"
                    width="358"
                    height="202"
                    fit="cover"
                    :src="images[0]"
                />
                <van-image
                    v-else
                    v-for="(url, index) in images"
                    :key="index"
                    @click="showImage(index)"
                    class="picture-more"
                    width="112"
                    height="112"
                    fit="cover"
                    :src="url"
                />
            </div>
            <div class="sort">
                <span>#{{ TopicOptions[posts.topic] }}</span>
            </div>
        </div>
        <div class="posts-comments">
            <div class="comment-header">全部评论</div>

            <ReplyPage
                v-for="reply in postsReply"
                :key="reply.id"
                :reply-list="reply"
            >
            </ReplyPage>
        </div>
    </div>
    <div class="reply">
        <div class="reply-container" @click="handleOpenPopup">
            <van-image
                round
                width="25"
                height="25"
                fit="cover"
                :src="userImgUrl"
            />
            <span>我来评论</span>
        </div>
    </div>
    <van-popup
        v-model:show="showPopup"
        position="bottom"
        round
        :style="{ height: '20%' }"
    >
        <div class="reply-popup">
            <van-field
                class="reply-content"
                v-model="replyValue"
                type="textarea"
                maxlength="100"
                show-word-limit
            />
        </div>
        <div class="reply-push" @click="handlePushReply">
            <span class="push-button">发送</span>
        </div>
    </van-popup>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { onBeforeMount, computed, ref } from "vue";
import { HeaderBar, UserBar } from "@/views/bars";
import { ImagePreview, Toast } from "vant";
import { getPostById, createRootReply } from "@/api/services/index";
import { TopicOptions } from "@/views/const";
import ReplyPage from "./reply-page.vue";
export default {
    components: {
        ReplyPage,
        HeaderBar,
        UserBar,
        [ImagePreview.Component.name]: ImagePreview.Component,
    },
    setup() {
        const store = useStore();
        const userInfo = ref(false);
        const replyValue = ref("");
        const route = useRoute();
        const posts = ref("");
        const postsReply = ref([]);
        const showReply = computed(() =>
            postsReply.value.length == 0 ? false : true
        );
        const userImgUrl = computed(() => store.state.userInfo.imgUrl);
        const images = computed(() => posts.value.imgList);
        const showPictureOne = computed(() => {
            if (posts.value !== "") {
                return posts.value.imgList.length == 1 ? true : false;
            } else {
                return false;
            }
        });
        const showPopup = ref(false);
        const handleOpenPopup = () => {
            showPopup.value = true;
        };

        const showImage = position => {
            ImagePreview({
                images,
                startPosition: position,
            });
        };
        // 取到id，然后调用接口获取数据
        onBeforeMount(async () => {
            posts.value = await getPostById(route.params.id);
            postsReply.value = posts.value.reply;
            const {
                user_nickname,
                user_imgUrl,
                user_colleges,
                user_grade,
                create_time,
                clickNum,
            } = posts.value;
            userInfo.value = {
                nickname: user_nickname,
                url: user_imgUrl,
                colleges: user_colleges,
                grade: user_grade,
                createTime: create_time,
                clickNum: clickNum,
            };
        });

        const handlePushReply = async () => {
            // 向数据库传值
            if (replyValue.value.trim() == "") {
                Toast.fail("请输入评论再提交");
                return;
            }
            const payload = {
                content: replyValue.value,
                user_id: store.state.userInfo.id,
                postsId: route.params.id,
                user_nickname: store.state.userInfo.nickname,
                user_imgUrl: store.state.userInfo.imgUrl,
            };
            // 上传评论
            const data = await createRootReply(payload);
            replyValue.value = "";
            showPopup.value = false;
            posts.value = await getPostById(route.params.id);
            postsReply.value = posts.value.reply;
        };
        return {
            posts,
            showPopup,
            userInfo,
            showReply,
            images,
            postsReply,
            userImgUrl,
            replyValue,
            TopicOptions,
            showPictureOne,
            showImage,
            handleOpenPopup,
            handlePushReply,
        };
    },
};
</script>

<style lang="less" scoped>
.posts-detail {
    width: 100vw;
    box-sizing: border-box;
    padding: 16px;
    border-bottom: 10px solid rgb(244, 241, 241);
    .title {
        line-height: 32px;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 2px;
        margin-bottom: 10px;
    }
    .content {
        line-height: 24px;
        font-size: 16px;
        letter-spacing: 1px;
        font-family: SourceHanSansSC-regular;
        margin-bottom: 10px;
    }
    .picture {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
        .picture-one {
            /deep/ img {
                border-radius: 10px;
            }
        }
        .picture-more {
            margin-right: 8px;
            margin-top: 8px;
            /deep/ img {
                border-radius: 10px;
            }
        }
        .picture-more:nth-child(1) {
            margin-left: 4px;
        }
        .picture-more:nth-child(4) {
            margin-left: 4px;
        }
        .picture-more:nth-child(7) {
            margin-left: 4px;
        }
        .picture-more:nth-child(3) {
            margin-right: 0px;
        }
        .picture-more:nth-child(6) {
            margin-right: 0px;
        }
        .picture-more:nth-child(9) {
            margin-right: 0px;
        }
    }
    .sort {
        line-height: 25px;
        height: 25px;
        font-size: 12px;
        display: inline-block;
        background: rgba(64, 243, 222, 0.8);
        border-radius: 30px;
        color: #fff;
        text-align: center;
        min-width: 50px;
        box-sizing: border-box;
        padding: 0 10px;
    }
}
.posts-comments {
    box-sizing: border-box;
    padding: 16px;
    padding-bottom: 32px;
    .comment-header {
        font-size: 20px;
        font-weight: bold;
        height: 26px;
        line-height: 26px;
    }
}
.reply {
    position: fixed;
    width: 100%;
    height: 30px;
    border-top: 1px solid #e0e0e0;
    background: #fff;
    bottom: 0;
    padding: 5px;
    padding-left: 10px;
    display: flex;
    &-container {
        width: 200px;
        height: 25px;
        background: #e0e0e0;
        border-radius: 15px;
        padding: 3px;
        display: flex;
        color: rgb(120, 120, 120);
        span {
            margin: auto 0;
            padding-left: 15px;
            font-size: 16px;
        }
    }
}

.reply-popup {
    width: 100%;
    padding: 20px;
    padding-bottom: 0;
    box-sizing: border-box;
    .reply-content {
        background: #e0e0e0;
        border-radius: 6px;
        height: 100px;
        padding: 10px;
    }
}
.reply-push {
    height: 48px;
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 12px;
    bottom: 10px;
    position: relative;
    .push-button {
        display: inline-block;
        line-height: 28px;
        position: absolute;
        right: 20px;
        top: 20px;
        color: #fff;
        background: rgba(64, 243, 222, 0.8);
        width: 48px;
        border-radius: 6px;
        display: flex;
        justify-content: center;
    }
}
</style>
