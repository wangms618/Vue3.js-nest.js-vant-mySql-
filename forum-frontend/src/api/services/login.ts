import instance from "../axios";
export async function login(account: string) {
    const data = await instance.get("user/login", {
        params: {
            account,
        },
    });
    return data.data[0];
}

export async function getUserInfo(id: number) {
    const data = await instance.get("user", {
        params: {
            id,
        },
    });
    return data
}
