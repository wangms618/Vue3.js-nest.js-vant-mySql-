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
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";
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
            images,
            showPictureOne,
            showImage,
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
    }
}
</style>
