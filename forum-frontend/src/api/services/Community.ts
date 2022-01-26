import axios from "../axios"
export async function getData() {
    const data = await axios.get("/community/list")
    if (data) return data
    return
}
