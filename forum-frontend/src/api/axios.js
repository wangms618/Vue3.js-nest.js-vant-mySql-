import axios from "axios"
import { Toast } from "vant"
import router from "../router"
axios.defaults.baseURL = "http://localhost:8081/api/forum"

// axios.defaults.withCredentials = true // 跨域请求可以携带cookie
// axios.defaults.headers["X-Requested-With"] = "XMLHttpRequest"
// axios.defaults.headers["token"] = localStorage.getItem("token") || ""
// axios.defaults.headers.post["Content-Type"] = "application/json"

// axios.interceptors.response.use((res) => {
//     if (typeof res.data !== "object") {
//         Toast.fail("服务端异常!")
//         return Promise.reject(res)
//     }
//     if (res.data.resultCode !== 200) {
//         if (res.data.message) Toast.fail(res.data.message)
//         if (res.data.resultCode == 416) {
//             // 重新跳去登录页面
//             router.push({ path: "/login" })
//         }
//         return Promise.reject(res.data)
//     }
//     return res.data
// })
export default axios
