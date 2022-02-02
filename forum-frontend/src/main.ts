import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "@/common/style/reset.css"
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
    Sticky,
    Form,
    Field,
    CellGroup,
    Uploader,
    Step,
    Steps,
    Popup,
    DatetimePicker,
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
    .use(Sticky)
    .use(Form)
    .use(Popup)
    .use(Field)
    .use(CellGroup)
    .use(Divider)
    .use(Popover)
    .use(VanImage)
    .use(Uploader)
    .use(DatetimePicker)
    .use(Step)
    .use(Steps)
    .use(NavBar)
    .use(Tabbar)
    .use(TabbarItem)
    .mount("#app")
