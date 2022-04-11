<template>
    <div class="item">
        <div class="item-header">
            <div class="item-header__left">
                <van-image
                    round
                    width="32"
                    height="32"
                    src="https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"
                />
            </div>
            <div class="item-header__right">
                <div class="item-name">子墨</div>
                <div class="item-time">1小时前</div>
            </div>
        </div>
        <div class="item-content">
            <div class="item-content__type">发布了文章</div>
            <div class="item-content__info">来自某某文章</div>
        </div>
        <div class="item-footer"></div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.item {
    height: 160px;
    width: 100vw;
    box-sizing: border-box;
    padding: 10px 10px 0 10px;
    border-bottom: 1px solid rgb(231, 229, 229);
    &-header {
        height: 40px;
        padding: 4px 0;
        display: flex;
        box-sizing: border-box;
        &__right {
            margin-left: 10px;
            line-height: 16px;
            .item-time {
                color: rgb(152, 152, 152);
            }
        }
    }
    &-content {
        line-height: 20px;
        margin-left: 80px;
        &__type {
            font-size: 16px;
            margin-bottom: 10px;
        }
        &__info {
            height: 60px;
            background-color: rgba(244, 244, 244, 100);
            display: flex;
            align-items: center;
            box-sizing: border-box;
            padding-left: 20px;
        }
    }
}
</style>
