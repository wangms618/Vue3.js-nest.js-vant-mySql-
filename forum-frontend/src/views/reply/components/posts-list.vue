<template>
    <div class="posts-list">
        <div class="posts-list__item">
            <div class="posts-left">
                <van-image
                    round
                    width="60"
                    height="60"
                    src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                />
            </div>
            <div class="posts-right">
                <div class="posts-title">
                    来自你你你你你你你你你您来自你你你你你你你你你您来自你你你你你你你你你您来自你你你你你你你你你您
                </div>
                <div class="posts-content">
                    我觉得你这个有问题呀觉得你这个有问题觉得你这个有问题觉得你这个有问题觉得你这个有问题
                </div>
                <div class="posts-timer">一小时前</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.posts-list {
    width: 100vw;
    background: #fff;

    &__item {
        height: 80px;
        display: flex;
        border-bottom: 1px solid rgb(231, 229, 229);
        .posts-left {
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .posts-right {
            flex: 1;
            height: 80px;
            padding: 10px 10px 10px 0px;
            box-sizing: border-box;

            .posts-title {
                font-size: 16px;
                color: #666666;
                margin-bottom: 10px;
                width: 200px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .posts-content {
                width: 300px;
                font-size: 16px;
                margin-bottom: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .posts-timer {
                color: rgb(195, 195, 195);
            }
        }
    }
}
</style>
