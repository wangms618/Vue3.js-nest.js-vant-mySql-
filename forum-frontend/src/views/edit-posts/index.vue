<template>
    <div class="edit-posts">
        <EditArea />
    </div>
</template>

<script lang="ts">
import EditArea from "./components/edit-area.vue";
export default {
    components: {
        EditArea,
    },
};
</script>

<style lang="less" scoped>
.edit-posts {
    height: 90vh;
    background: #f2f3f5;
}
</style>
