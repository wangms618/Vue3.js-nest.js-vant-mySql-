import instance from "../axios";
export async function postRegister(payload) {
    const data = await instance.post("/user", payload);
    // 如果data为-1，说明已经有相同的账号了
    if (data == -1) return false;
    return true;
}

// 写一个判断昵称的请求
export async function checkNickname(nickname: string) {
    const data = await instance.get("/user/checkNickname", {
        params: {
            nickname,
        },
    });
    return data.data;
}
// 写一个判断账号的请求
export async function checkAccount(account: string) {
    const data = await instance.get("/user/checkAccount", {
        params: {
            account,
        },
    });
    return data.data;
}
// 写一个判断手机号的请求
export async function checkPhone(phone: number) {
    const data = await instance.get("/user/checkPhone", {
        params: {
            phone,
        },
    });
    return data.data;
}
