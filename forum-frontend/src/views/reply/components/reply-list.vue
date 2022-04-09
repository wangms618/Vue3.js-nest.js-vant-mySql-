<template>
    <div class="reply-title">
        <span>最新回复</span>
    </div>
    <div class="reply-list">
        <div class="reply-list__item">
            <div class="list-left">
                <van-image
                    round
                    width="60"
                    height="60"
                    src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                />
            </div>
            <div class="list-right">
                <div class="list-posts">
                    来自你你你你你你你你你您来自你你你你你你你你你您来自你你你你你你你你你您来自你你你你你你你你你您
                </div>
                <div class="list-content">
                    我觉得你这个有问题呀觉得你这个有问题觉得你这个有问题觉得你这个有问题觉得你这个有问题
                </div>
                <div class="list-timer">一小时前</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.reply-title {
    font-size: 16px;
    background: #fff;
    height: 40px;
    margin-bottom: 1px;
    display: flex;
    align-items: center;
    color: rgba(153, 153, 153, 80);
    span {
        margin-left: 20px;
    }
}
.reply-list {
    width: 100vw;
    background: #fff;

    &__item {
        height: 80px;
        display: flex;
        border-bottom: 1px solid rgb(231, 229, 229);
        .list-left {
            width: 80px;
            height: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .list-right {
            flex: 1;
            height: 80px;
            padding: 10px 10px 10px 0px;
            box-sizing: border-box;

            .list-posts {
                font-size: 16px;
                color: #666666;
                margin-bottom: 10px;
                width: 200px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .list-content {
                width: 300px;
                font-size: 16px;
                margin-bottom: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .list-timer {
                color: rgb(195, 195, 195);
            }
        }
    }
}
</style>
