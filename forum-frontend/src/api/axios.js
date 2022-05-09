// 引入axios
import axios from "axios"
import {
    Toast
} from "vant"
// 生成axios实例
const instance = axios.create({
    baseURL: "http://localhost:8081/api/forum",
    timeout: 5000 // request timeout
})
instance.interceptors.response.use((response) => {
    // 如果状态码为-1，报错
    if (response.data.code == -1) {
        Toast.fail(response.data.message)
        return -1
    }
    return response.data
})
// 抛出实例
export default instance