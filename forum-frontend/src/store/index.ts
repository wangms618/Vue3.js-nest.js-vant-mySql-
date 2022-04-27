import { createStore } from "vuex";
import {
    CHANGE_TITLE,
    CHANGE_CONTENT,
    CHANGE_FILELIST,
    CHANGE_TOPIC,
    CHANGE_KEYWORDS,
    INSERT_USER_INFO,
    INSERT_POSTS_INFO,
    RESET_POSTS,
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
        postsList: "",
        searchKeywords: "",
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
        [CHANGE_KEYWORDS]({ searchKeywords }, value) {
            searchKeywords = value;
        },
        [INSERT_USER_INFO](state, value) {
            state.userInfo = value;
        },
        [INSERT_POSTS_INFO](state, value) {
            state.postsList = value;
        },
        [RESET_POSTS]({ posts }, value) {
            posts.title = "";
            posts.content = "";
            posts.topic = "";
            posts.fileList = [];
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
        [CHANGE_KEYWORDS]({ commit }, value) {
            commit(CHANGE_KEYWORDS, value);
        },
        [INSERT_USER_INFO]({ commit }, value) {
            commit(INSERT_USER_INFO, value);
        },
        [INSERT_POSTS_INFO]({ commit }, value) {
            commit(INSERT_POSTS_INFO, value);
        },
    },
    modules: {},
});
