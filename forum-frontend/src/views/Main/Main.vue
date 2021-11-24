<template>
    <nav-bar :title="title"></nav-bar>
    <tabbar @hangleChangeTitle="hangleChangeTitle"></tabbar>
    <router-view></router-view>
</template>

<script lang="ts">
import { Tabbar } from "./components/Tabbar"
import { NavBar } from "./components/NavBar"
import { ref } from "@vue/reactivity"
export default {
    components: {
        NavBar,
        Tabbar,
    },
    setup() {
        let title = ref("社区热点")
        const hangleChangeTitle = (value) => {
            title.value = value
        }
        return {
            title,
            hangleChangeTitle,
        }
    },
}
</script>

<style></style>
