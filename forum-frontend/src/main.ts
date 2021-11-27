import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import {
    Button,
    Tabbar,
    TabbarItem,
    NavBar,
    Search,
    Tab,
    Tabs,
} from "vant"
import "vant/lib/index.css"
// import fastClick from "fastclick"
// 移动端适配
import "lib-flexible/flexible"
// fastClick.attach(document.body)
createApp(App)
    .use(store)
    .use(router)
    .use(Button)
    .use(Search)
    .use(Tab)
    .use(Tabs)
    .use(NavBar)
    .use(Tabbar)
    .use(TabbarItem)
    .mount("#app")
