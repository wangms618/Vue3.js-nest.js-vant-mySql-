<template>
    <div class="search">
        <van-popover
            v-model:show="showList"
            :show-arrow="false"
            class="search-popover"
        >
            <template #reference>
                <van-search
                    @click.stop
                    v-model="value"
                    @update:model-value="handleSearch"
                    :placeholder="placeholder"
                    @focus="handleFocus"
                    @blur="handleBlur"
                    @clear="handleClear"
                />
            </template>
            <div class="box">
                <div class="empty" v-if="list.length == 0">暂无内容</div>
                <van-cell
                    v-else
                    v-for="item in list"
                    :key="item.id"
                    :title="item.title"
                    @click="handleIntoPosts(item.id)"
                />
            </div>
        </van-popover>
    </div>
</template>

<script lang="ts">
import { useRouter } from "vue-router";
import { ref, computed, PropType } from "vue";
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
        const router = useRouter();

        const value = ref("");

        const list = computed(() => props.listInfo);

        const showList = ref(false);

        const handleSearch = debounce((val: string) => {
            emit("search", val);
        }, 300);

        const handleFocus = () => {
            showList.value = true;
        };

        const handleBlur = () => {
            showList.value = true;
        };

        const handleClear = () => {
            value.value = "";
        };
        const handleIntoPosts = id => {
            router.push({ name: "posts", params: { id } });
        };

        return {
            value,
            showList,
            list,
            handleSearch,
            handleClear,
            handleFocus,
            handleBlur,
            handleIntoPosts,
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
.box {
    width: 100%;
    height: 20vh;
    position: relative;
    overflow-y: scroll;
    .empty {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
}
</style>
<style lang="less">
.search-popover {
    width: 94vw;
}
</style>
