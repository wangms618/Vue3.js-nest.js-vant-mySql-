import instance from "../axios";
export async function postRegister(payload) {
    const data = await instance.post("/user", payload);
    // 如果data为-1，说明已经有相同的账号了
    if (data == -1) return false;
    return true;
}

// 写一个判断昵称的请求
export async function checkNickname(nickname: string): Promise<boolean> {
    return await instance.get("/user/checkNickname", {
        params: {
            nickname,
        },
    });
}
// 写一个判断账号的请求
export async function checkAccount(param: string): Promise<boolean> {
    return false;
}
// 写一个判断手机号的请求
export async function checkPhone(param: number): Promise<boolean> {
    return false;
}
