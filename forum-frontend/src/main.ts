import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "@/common/style/reset.css";
import {
    Icon,
    Button,
    Tabbar,
    TabbarItem,
    NavBar,
    Search,
    Lazyload,
    Tab,
    Tabs,
    List,
    Cell,
    Popover,
    Divider,
    Sticky,
    Form,
    Field,
    CellGroup,
    RadioGroup,
    ImagePreview,
    Radio,
    Toast,
    Dialog,
    Uploader,
    Step,
    Steps,
    Popup,
    Picker,
    ActionSheet,
    DatetimePicker,
    Image as VanImage,
} from "vant";
import "vant/lib/index.css";
// import fastClick from "fastclick"
// 移动端适配
import "lib-flexible/flexible";
// fastClick.attach(document.body)
createApp(App)
    .use(store)
    .use(router)
    .use(Button)
    .use(Search)
    .use(Tab)
    .use(Icon)
    .use(Tabs)
    .use(List)
    .use(Lazyload)
    .use(Cell)
    .use(Sticky)
    .use(Form)
    .use(Picker)
    .use(Popup)
    .use(Field)
    .use(CellGroup)
    .use(Divider)
    .use(Popover)
    .use(VanImage)
    .use(Uploader)
    .use(ActionSheet)
    .use(DatetimePicker)
    .use(Step)
    .use(Steps)
    .use(NavBar)
    .use(Tabbar)
    .use(TabbarItem)
    .use(RadioGroup)
    .use(Radio)
    .use(Dialog)
    .use(ImagePreview)
    .use(Toast)
    .mount("#app");

import { Timeout } from "./views/const";
import * as services from "@/api/services";
router.beforeEach(async (to, form, next) => {
    if (form.path == "/" && !localStorage.getItem("firstEnter")) {
        Dialog.confirm({
            message: "查询到当前您未登录，是否跳转登录页",
        })
            .then(() => {
                localStorage.setItem("firstEnter", "true");
                next({ name: "login" });
            })
            .catch(() => {
                next();
            });
    } else {
        if (store.state.userInfo == "") {
            if (
                to.path == "/community" ||
                to.path == "/homepage" ||
                to.path == "/login" ||
                to.path == "/register"
            ) {
                next();
            } else {
                const userId = JSON.parse(localStorage.getItem("userId"));
                // 说明登录过
                if (userId) {
                    if (store.state.userInfo !== "") return;
                    const nowTime = new Date().getTime();
                    // 如果三天内未登录，就需要登录
                    if (nowTime - userId.loginTime < Timeout) {
                        userId.loginTime = nowTime;
                        // 登录即更新一次
                        localStorage.setItem("userId", JSON.stringify(userId));
                        // 接口请求，去获取对应id的数据
                        const userInfo = await services.getUserInfo(userId.id);
                        const postsInfo = await services.getPostByUser(
                            userId.id
                        );
                        Toast.success("已登录");
                        // 将用户数据放入vuex
                        store.dispatch("insertPostsInfo", postsInfo);
                        store.dispatch("insertUserInfo", userInfo);
                        next();
                    } else {
                        localStorage.removeItem("userId");
                        Dialog.confirm({
                            message: "该账号登录状态已过期，是否重新登录",
                        })
                            .then(() => {
                                router.push("/login");
                            })
                            .catch(() => {
                                Toast("进入游客模式");
                            });
                    }
                } else {
                    Dialog.confirm({
                        message: "进入此页面需要登录，是否登录？",
                    })
                        .then(() => {
                            next({ name: "login" });
                        })
                        .catch(() => {
                            return false;
                        });
                }
            }
        } else {
            next();
        }
    }
});
