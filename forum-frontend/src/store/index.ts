import { createStore } from "vuex";
import {
    CHANGE_TITLE,
    CHANGE_CONTENT,
    CHANGE_FILELIST,
    CHANGE_TOPIC,
    INSERT_USER_INFO,
} from "./types";
export default createStore({
    state: {
        posts: {
            title: "",
            content: "",
            topic: "",
            fileList: [],
        },
        userInfo: "",
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
        [INSERT_USER_INFO](state, value) {
            console.log(value);

            state.userInfo = value;
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
        [INSERT_USER_INFO]({ commit }, value) {
            commit(INSERT_USER_INFO, value);
        },
    },
    modules: {},
});
