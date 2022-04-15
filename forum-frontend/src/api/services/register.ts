import axios from "../axios";
export async function postRegister(payload) {
    const data = await axios.post("/user", payload);
    return data;
}
