<template>
    <van-nav-bar
        :title="title"
        left-text="返回"
        left-arrow
        @click-left="handleBack"
    />
</template>

<script lang="ts">
export default {
    props: {
        title: {
            type: String,
            default: "",
        },
    },
    setup(props, context) {
        // 返回上一次页面
        const handleBack = () => {
            context.emit("back", history.state.back)
            history.back()
        }

        return {
            handleBack,
        }
    },
}
</script>

<style></style>
