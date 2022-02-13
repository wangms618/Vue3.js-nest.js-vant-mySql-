import axios from "../axios";
export async function getToken(): Promise<string> {
    const data = await axios.get("/token");
    if (!data) return;
    return data;
}
