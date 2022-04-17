import instance from "../axios";
export async function login(account: string) {
    const data = await instance.get("user/login", {
        params: {
            account,
        },
    });
    return data.data;
}

export async function getUserInfo(id: number) {
    const data = await instance.get(`user/${id}`);
    return data.data;
}
