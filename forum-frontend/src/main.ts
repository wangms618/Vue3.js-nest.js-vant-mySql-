import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { Button, Tabbar, TabbarItem } from "vant"
import "vant/lib/index.css"

createApp(App)
    .use(store)
    .use(router)
    .use(Button)
    .use(Tabbar)
    .use(TabbarItem)
    .mount("#app")
