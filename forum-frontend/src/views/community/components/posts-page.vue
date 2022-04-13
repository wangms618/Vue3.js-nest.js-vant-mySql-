<template>
    <div class="posts">
        <HeaderBar title="文章详情"></HeaderBar>
        <div class="posts-detail">
            <div class="author">
                <div class="author-img">
                    <van-image
                        round
                        width="48"
                        height="48"
                        src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                    />
                </div>
                <div class="author-info">
                    <div class="author-info__nickname">叫我大哥</div>
                    <div class="author-info__time">1小时前 东华理工大学</div>
                </div>
            </div>
            <div class="content">
                中国传统的杀猪场面确实挺大，对猪不是很友好，但是几千年流传下来的手艺，自然有其特有的优点。看了好几个中国的杀猪视频，有一个疑点，不知道为什么杀猪的时候总有人叼着烟，有什么说法吗?
            </div>
            <div class="picture">
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
        </div>
    </div>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";
import { HeaderBar } from "@/views/bars";
import { ImagePreview } from "vant";
export default {
    components: {
        HeaderBar,
        [ImagePreview.Component.name]: ImagePreview.Component,
    },
    setup() {
        const route = useRoute();
        const images = [
            "https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg",
            "https://cdn.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
        ];
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
    .author {
        height: 48px;
        box-sizing: border-box;
        padding: 0 4px;
        margin-bottom: 10px;
        display: flex;
        &-info {
            margin-left: 10px;
            line-height: 24px;
            &__nickname {
                height: 24px;
                font-size: 16px;
                letter-spacing: 6px;
                font-family: SourceHanSansSC-bold;
                font-weight: 600;
            }
            &__time {
                color: #666970;
            }
        }
    }
    .content {
        line-height: 20px;
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
}
</style>
