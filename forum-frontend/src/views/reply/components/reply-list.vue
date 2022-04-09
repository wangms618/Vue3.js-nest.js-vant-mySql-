<template>
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
            <div class="list-center">
                <div class="list-posts">
                    <span>某某某回复了你的评论</span>
                </div>
                <div class="list-content">二级评论</div>
                <div class="list-timer">一小时前</div>
            </div>
            <div class="list-right">
                你好我机械厂撒大声地械厂撒大声械厂撒大声阿达未收到
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
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
        .list-center {
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
                width: 220px;
                font-size: 16px;
                margin-bottom: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
            .list-timer {
                color: rgb(167, 165, 165);
            }
        }
        .list-right {
            color: rgb(139, 132, 132);
            width: 60px;
            height: 60px;
            margin: 10px;
            box-sizing: border-box;
            line-height: 20px;
            font-size: 14px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical; /*设置方向*/
            -webkit-line-clamp: 3; /*设置超过为省略号的行数*/
        }
    }
}
</style>
