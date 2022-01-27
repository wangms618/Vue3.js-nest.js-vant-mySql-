import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import {
    Icon,
    Button,
    Tabbar,
    TabbarItem,
    NavBar,
    Search,
    Tab,
    Tabs,
    List,
    Cell,
    Popover,
    Divider,
    Image as VanImage,
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
    .use(Icon)
    .use(Tabs)
    .use(List)
    .use(Cell)
    .use(Divider)
    .use(Popover)
    .use(VanImage)
    .use(NavBar)
    .use(Tabbar)
    .use(TabbarItem)
    .mount("#app")
