import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { Button } from "vant"
import "vant/lib/index.css"

createApp(App).use(store).use(router).use(Button).mount("#app")
