import instance from "../axios";
export async function login(account: string) {
    const data = await instance.get("user/login", {
        params: {
            account,
        },
    });
    return data.data;
}



