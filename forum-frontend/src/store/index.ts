import { createStore } from "vuex";
import {
    CHANGE_TITLE,
    CHANGE_CONTENT,
    CHANGE_FILELIST,
    CHANGE_TOPIC,
} from "./types";
export default createStore({
    state: {
        posts: {
            title: "标题",
            content: "",
            topic: "",
            fileList: [],
        },
    },
    mutations: {
        [CHANGE_TITLE]({ posts }, value) {
            posts.title = value;
        },
        [CHANGE_CONTENT]({ posts }, value) {
            posts.content = value;
        },
        [CHANGE_FILELIST]({ posts }, value) {
            posts.fileList = value;
        },
        [CHANGE_TOPIC]({ posts }, value) {
            posts.topic = value;
        },
    },
    actions: {
        [CHANGE_TITLE]({ commit }, value) {
            commit(CHANGE_TITLE, value);
        },
        [CHANGE_CONTENT]({ commit }, value) {
            commit(CHANGE_CONTENT, value);
        },
        [CHANGE_FILELIST]({ commit }, value) {
            commit(CHANGE_FILELIST, value);
        },
        [CHANGE_TOPIC]({ commit }, value) {
            commit(CHANGE_TOPIC, value);
        },
    },
    modules: {},
});
