<template>
    <van-nav-bar
        :title="title"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
    />
</template>

<script lang="ts">
export default {
    props: ["title"],
    setup(props) {
        console.log(props);
        const onClickLeft = () => history.back()
        return {
            onClickLeft,
        }
    },
}
</script>

<style></style>
