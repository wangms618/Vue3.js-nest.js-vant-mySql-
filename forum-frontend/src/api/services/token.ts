import instance from "../axios";
export async function getToken(): Promise<string> {
    const data = await instance.get("/token");
    if (!data) return;
    return data.data;
}
