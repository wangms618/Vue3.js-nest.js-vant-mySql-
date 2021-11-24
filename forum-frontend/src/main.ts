import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { Button, Tabbar, TabbarItem, NavBar } from "vant"
import "vant/lib/index.css"
import fastClick from "fastclick"
fastClick.attach(document.body)
createApp(App)
    .use(store)
    .use(router)
    .use(Button)
    .use(NavBar)
    .use(Tabbar)
    .use(TabbarItem)
    .mount("#app")
