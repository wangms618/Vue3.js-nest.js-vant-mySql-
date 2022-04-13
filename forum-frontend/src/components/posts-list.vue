<template>
    <!-- TODO 搞个v-for -->
    <div
        class="posts-list"
        v-for="list in postsList"
        :key="list.id"
        @click="handleOpen(list)"
    >
        <div class="posts-left">
            <div class="posts-title">
                <span>{{ list.title }}</span>
            </div>
            <div class="posts-context">
                {{ list.context }}
            </div>
            <div class="posts-foot">
                <div class="posts-user">
                    <span>@{{ list.user }}</span>
                </div>
                <div class="posts-date">
                    <span>{{ list.date }}</span>
                </div>
            </div>
        </div>
        <div class="posts-right">
            <div class="posts-views">
                {{ list.views }}人围观<van-icon name="arrow" />
            </div>
            <div class="posts-img" v-if="list.imgUrl.length">
                <van-image
                    fit="contain"
                    width="78"
                    height="76"
                    :src="list.imgUrl[0]"
                    radius="4"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
export default {
    name: "posts-list",
    props: {
        postsList: {
            type: Array,
            default: () => [],
        },
    },
    setup() {
        const url =
            "https://img2.baidu.com/it/u=2831053164,2846492010&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500";
        const router = useRouter();
        const handleOpen = value => {
            console.log(value);
            router.push({ name: "posts", params: { id: 1 } });
        };
        return {
            url,
            handleOpen,
        };
    },
};
</script>

<style lang="less" scoped>
.posts-list {
    border-bottom: 1px solid #f0f0f2;
    height: 130px;
    display: flex;
    justify-content: space-between;
    .posts-left {
        width: 240px;
        .posts-title {
            font-size: 16px;
            font-family: Arial-bold;
            color: rgba(53, 53, 53, 100);
            margin: 16px 0;
            width: 200px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .posts-context {
            width: 150px;
            height: 36px;
            box-sizing: border-box;
            line-height: 18px;
            word-break: break-all;
            text-overflow: ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            margin-bottom: 16px;
            font-size: 13px;
            color: #726d76;
            span {
                height: 100%;
            }
        }
        .posts-foot {
            display: flex;
            height: 18px;
            line-height: 18px;
            margin-bottom: -8px;
            .posts-user {
                margin-right: 6px;
            }
            .posts-date {
                color: #726d76;
            }
        }
    }
    .posts-right {
        flex: 1;
        margin: 16px 0 10px 0;
        text-align: right;
        .posts-views {
            font-size: 12px;
            color: #726d76;
            height: 18px;
        }
        .posts-img {
            margin-top: 10px;
            float: right;
            width: 78px;
            height: 76px;
        }
    }
}
</style>
