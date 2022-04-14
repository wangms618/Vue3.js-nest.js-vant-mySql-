<template>
    <div class="posts">
        <HeaderBar title="文章详情"></HeaderBar>
        <div class="posts-detail">
            <UserBar></UserBar>
            <div class="content">
                中国传统的杀猪场面确实挺大，对猪不是很友好，但是几千年流传下来的手艺，自然有其特有的优点。看了好几个中国的杀猪视频，有一个疑点，不知道为什么杀猪的时候总有人叼着烟，有什么说法吗?
            </div>
            <div class="picture" v-if="images.length > 0">
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
                    :src="url"
                />
            </div>
            <div class="sort">
                <span>#萨达</span>
            </div>
        </div>
        <div class="posts-comments">
            <div class="comment-header">全部评论 8</div>
            <div class="comment-content">
                <UserBar :type="2" :img-height="32" :img-width="32"></UserBar>
                <div class="comment-content__info">回复在此</div>
                <div class="comment-content__reply">
                    <span class="timer">1小时前</span>
                    <span class="reply">回复</span>
                </div>
            </div>
        </div>
    </div>
    <div class="reply">
        <div class="reply-container" @click="handleOpenPopup">
            <van-image
                round
                width="25"
                height="25"
                fit="cover"
                src="https://img1.baidu.com/it/u=3489534312,3743866914&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=375"
            />
            <span>我来评论</span>
        </div>
    </div>
    <van-popup
        v-model:show="showPopup"
        position="bottom"
        round
        :style="{ height: '30%' }"
    >
        <div class="reply-popup">123</div>
    </van-popup>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, computed, ref } from "vue";
import { HeaderBar, UserBar } from "@/views/bars";
import { ImagePreview } from "vant";
export default {
    components: {
        HeaderBar,
        UserBar,
        [ImagePreview.Component.name]: ImagePreview.Component,
    },
    setup() {
        const route = useRoute();
        const images = [];
        const showPictureOne = computed(() => images.length <= 1);
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
        onMounted(() => {
            console.log(route.params);
        });

        return {
            showPopup,
            images,
            showPictureOne,
            showImage,
            handleOpenPopup,
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
    .comment-header {
        font-size: 20px;
        font-weight: bold;
        height: 26px;
        line-height: 26px;
    }
    .comment-content {
        box-sizing: border-box;
        padding: 10px 0;
        border-bottom: 1px solid rgb(244, 241, 241);
        .author {
            margin-bottom: 0;
        }
        &__info {
            line-height: 24px;
            font-size: 14px;
            padding-left: 42px;
            padding-right: 32px;
            margin-bottom: 10px;
        }
        &__reply {
            padding-left: 42px;
            .timer {
                color: rgb(200, 198, 196);
                margin-right: 20px;
            }
        }
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
/deep/.van-popup {
    padding: 20px;
}
</style>
