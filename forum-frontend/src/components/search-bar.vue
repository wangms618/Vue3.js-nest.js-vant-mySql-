<template>
    <div class="search">
        <van-popover
            v-model:show="showList"
            :show-arrow="false"
            class="search-popover"
        >
            <template #reference>
                <van-search
                    v-model="value"
                    @update:model-value="handleSearch"
                    :placeholder="placeholder"
                    @clear="handleClear"
                />
            </template>
            <van-cell v-for="item in list" :key="item" :title="item" />
        </van-popover>
    </div>
</template>

<script lang="ts">
import { ref, computed, PropType, watch } from "vue";
import { debounce } from "lodash";
export default {
    props: {
        placeholder: {
            type: String as PropType<string>,
            default: "请输入搜索关键词",
        },
        listInfo: {
            type: Array,
            default: () => [],
        },
    },
    setup(props, { emit }) {
        const value = ref("");

        const list = computed(() => props.listInfo);

        const showList = computed(() =>
            list.value.length == 0 ? false : true
        );

        const handleSearch = debounce((val: string) => {
            emit("search", val);
        }, 300);

        const handleClear = () => {
            value.value = "";
        };
        watch(
            () => props.listInfo,
            val => {
                console.log(val);
            }
        );
        return {
            value,
            showList,
            list,
            handleSearch,
            handleClear,
        };
    },
};
</script>

<style lang="less" scoped>
.search {
    /deep/.van-popover__wrapper {
        width: 100%;
    }
}
</style>
<style lang="less">
.search-popover {
    width: 94vw;
}
</style>
